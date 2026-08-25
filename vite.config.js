import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
    closeBundle() {
      const workerPath = join(outDir, 'sw.js')
      const manifest = filesIn(outDir)
        .filter((filePath) => filePath !== workerPath)
        .map((filePath) => relative(outDir, filePath).replaceAll('\\', '/'))
        .filter((filePath) => !filePath.startsWith('_'))
        .map((filePath) => `/${filePath}`)
      const worker = readFileSync(workerPath, 'utf8')
        .replace("JSON.parse('PRECACHE_MANIFEST')", JSON.stringify(manifest))

      writeFileSync(workerPath, worker)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectServiceWorkerManifest()],
})
