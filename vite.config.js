import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = join(directory, entry.name)
    return entry.isDirectory() ? filesIn(filePath) : [filePath]
  })
}

function injectServiceWorkerManifest() {
  let outDir

  return {
    name: 'inject-service-worker-manifest',
    configResolved(config) {
      outDir = config.build.outDir
    },
    writeBundle() {
      const workerPath = join(outDir, 'sw.js')
      const manifest = filesIn(outDir)
        .filter((filePath) => filePath !== workerPath)
        .map((filePath) => relative(outDir, filePath).replaceAll('\\', '/'))
        .filter((filePath) => !filePath.startsWith('_'))
        .sort()
        .map((filePath) => `/${filePath}`)
      const cacheHash = createHash('sha256')
      manifest.forEach((url) => {
        cacheHash.update(url).update('\0').update(readFileSync(join(outDir, url.slice(1)))).update('\0')
      })
      const cacheVersion = cacheHash.digest('hex').slice(0, 12)
      const worker = readFileSync(workerPath, 'utf8')
        .replace("'chirag-portfolio-CACHE_VERSION'", `'chirag-portfolio-${cacheVersion}'`)
        .replace("JSON.parse('PRECACHE_MANIFEST')", JSON.stringify(manifest))

      writeFileSync(workerPath, worker)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectServiceWorkerManifest()],
})
