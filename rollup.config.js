import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: {
        'my-app': 'src/my-app.ts',
        'pages/home-page': 'src/pages/home-page.ts',
        'pages/about-page': 'src/pages/about-page.ts',
        'pages/contact-page': 'src/pages/contact-page.ts'
    },
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        entryFileNames: '[name].js'
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