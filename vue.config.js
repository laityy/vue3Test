// vue.config.js文件说明：对vue文件进行配置。
// vue-cli3内部高度集成了webpack，vue 项目中 vue.config.js 文件就等同于 webpack 的 webpack.config.js。
// vue-cli3 之后创建的时候并不会自动创建 vue.config.js，因为这个是个可选项，所以一般都是需要修改 webpack 的时候才会自己创建一个 vue.config.js。
//===================================================

//修改vue.config.js必须重新编译项目，否则配置不生效
// vue3默认将src文件夹重命名为@
module.exports = {
    configureWebpack: {
        resolve: {
            //配置别名
            alias: {
                //配置路径别名，配置后重启生效
                assets: '@/assets',
                components: '@/components',
                hooks: '@/hooks',
                mixins: '@/mixins',
                network: '@/network',
                pages: '@/pages',
                router: '@/router',
                store: '@/store',
                common: '@/common',
            },
        },
    },
    // publicPath: '/',
    //   1.publicPath配置项目部署的基础路径
    //   2.我们默认假设你的应用将会部署在域名的根部，
    //   3.比如 https://www.my-app.com/
    //   4.如果你的应用时部署在一个子路径下，那么你需要在这里
    //     指定子路径。比如，如果你的应用部署在
    //     https://www.foobar.com/my-app/
    // webpack-dev-server 相关配置
    devServer: {
        open: false, //构建完成自动打开网页，等同package.json中的--open
        host: '0.0.0.0', //默认是 0.0.0.0: '0.0.0.0'，表示为本机ip地址，设置之后外部服务器可以通过该ip访问web服务器，localhost和0.0.0.0都是表示本地主机ip
        port: 8080, //设置端口号
        // hot: true, //hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
        // https: false,
        // hotOnly: false, // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
        // proxy: {
        //     '/': {
        //         target: 'http://xxxx:8080', //目标接口域名
        //         secure: false, //false为http访问，true为https访问
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/': '/', //重写接口
        //         },
        //     },
        // }, // 设置代理
    },
}
