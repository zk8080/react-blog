/**
 * 该文件用于增加自定义webpack配置
 * 由react-app-rewired提供的方案
 * 需要配合customize-cra使用
 */
const { 
    override,
    fixBabelImports, 
    addLessLoader, 
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias
} = require('customize-cra');
const path = require('path');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),// antd按需加载
    addLessLoader({
        javascriptEnabled: true,
        // modifyVars: { '@primary-color': '#1DA57A' },
    }), // 增加less loader
    addDecoratorsLegacy(), // 装饰器支持
    disableEsLint(), // 关闭eslint
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@config': path.resolve(__dirname, './src/config'),
        '@container': path.resolve(__dirname, './src/container'),
        '@routers': path.resolve(__dirname, './src/routers'),
        '@components': path.resolve(__dirname, './src/components'),
        '@store': path.resolve(__dirname, './src/store'),
    }), // alias别名
);