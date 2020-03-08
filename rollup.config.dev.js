const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
import {version} from './packages/tool/package.json';

export default {
    input: './packages/tool/src/index.ts',
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
            file: './packages/tool/dist/tool.js',
            format: 'umd' //用模块定义，以amd，cjs 和 iife 为一体
        },
        {
            sourcemap: true,
            file: './packages/tool/dist/index.cjs.js',
            format: 'cjs',
        }
    ]
}
