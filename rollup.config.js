// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/my-app.ts',
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: !production
    },
    plugins: [
        resolve(),
        typescript(),
        copy({
            targets: [
                { src: 'index.html', dest: 'dist' },
                { src: 'assets/*', dest: 'dist/assets' }  // If you have any assets
            ]
        })
    ]
};