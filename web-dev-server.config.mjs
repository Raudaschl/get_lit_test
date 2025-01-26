import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  watch: true,
  plugins: [
    esbuildPlugin({ ts: true })
  ],
  appIndex: 'index.html',
  rootDir: '.',
  mimeTypes: {
    '**/*.ts': 'js'
  }
};