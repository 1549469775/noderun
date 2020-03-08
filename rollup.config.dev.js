const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
import {version} from './packages/noderun-tool/package.json';

if (!process.env.TARGET) {
    throw new Error('TARGET package must be specified via --environment flag.')
}

export default {
    input: './packages/noderun-tool/src/index.ts',
    external: true,
    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        json(),
        replace({
            __VERSION__: version
        })
    ],

    output: [
        {
            name: 'XyxTool',
            sourcemap: true,
            file: './packages/noderun-tool/dist/noderun-tool.js',
            format: 'umd' //用模块定义，以amd，cjs 和 iife 为一体
        },
        {
            sourcemap: true,
            file: './packages/noderun-tool/dist/index.cjs.js',
            format: 'cjs',
        }
    ]
}
