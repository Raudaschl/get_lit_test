import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/my-app.ts',
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: './dist/types/'
        })
    ],
    preserveEntrySignatures: 'strict'
};