const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL
    outputDir: 'dist', // build 时生成的生产环境构建文件的目录
    assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    filenameHashing: true, // 文件名哈希
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    runtimeCompiler: true, // 设置为 true 后你就可以在 Vue 组件中使用 template 选项
    productionSourceMap: false, // 是否需要生产环境的 source map
    css: {
        sourceMap: false, // 是否为 CSS 开启 source map
    },
    devServer: { // 所有 webpack-dev-server 的选项都支持
        hot: true, // 热更新
        open: true,
        host: '0.0.0.0',
        port: 8888,
        https: false,
        hotOnly: false,
        // proxy: {}, // 跨域代理
        proxy: {
            '/api': {
            target: 'https://shhp.f3322.net:6010',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
        }
      }
    },
    parallel: require('os').cpus().length > 1, // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    pwa: {}, // PWA 插件相关配置   see => https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pluginOptions: {}, // 第三方插件配置
    configureWebpack: {
        resolve: {
            // 格式化地址前缀
            alias: {
                'api': '@/api'
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set("@", resolve("src"))
        .set("@assets", resolve("src/assets"))
        .set("@scss", resolve("src/assets/scss"))
        .set("@components", resolve("src/components"))
        .set("@views", resolve("src/views"))
        .set("@router", resolve("src/router"))
        .set("@store", resolve("src/store"))
        .set("@directive", resolve("src/directive"))
        .set("@api", resolve("src/api"))
        .set("@utils", resolve("src/utils"))
        .set("@static", resolve("src/static"));

        if (process.env.NODE_ENV === 'production') {
            // #region 图片压缩
            config.module
                .rule('images')
                .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
                .use('img-loader')
                .loader('img-loader').options({
                    plugins: [
                        require('imagemin-jpegtran')(),
                        require('imagemin-pngquant')({
                            quality: [0.75, 0.85]
                        })
                    ]
                })
            // #endregion

            // #region 启用GZip压缩
            config
                .plugin('compression')
                .use(CompressionPlugin, {
                    asset: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                    cache: true
                })
                .tap(args => {})
            // #endregion
        }
    }
}