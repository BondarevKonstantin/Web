// Импорт плагинов для правильной работы сборки

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

// package.json -> scripts -> build -> Для правильной работы сборки во время dev должно стоять
// "webpack --env.mode=development", Для сборки в prod: "webpack --env.mode=production"

module.exports = (env = {}) => {

    const { mode = 'development' } = env

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    // Загрузка стилей в зависимости от режима разработки

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    // Загрузка плагинов обработки HTML и CSS в зависимости от режима разработки

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'FinDataHub',
                buildTime: new Date().toISOString(),
                withServerAPI: 'true',
                template: 'public/index.html'
            }),
        ];
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    };

    // Конфигурация

    return {

        // Проверка режима сборки

        mode: isProd ? 'production' : isDev && 'development',

        // Название основного файла JS в зависимости от режима сборки

        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined,
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },

        devServer: {
            open: true,
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
        },

        // Обработка модулей

        module: {
            rules: [

                // Обработка реакта
                {
                    test: /\.js$/,
                    exclude: /node-modules/,
                    loader: 'babel-loader',
                },

                // Обработка картинок
                {
                    test: /\.(jpg|png|jpeg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },

                // Обработка шрифтов
                {
                    test: /\.(ttf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },

                // Обработка css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },

                // Обработка sass
                {
                    test: /\.(sass)$/,
                    use: [ ...getStyleLoaders(), 'sass-loader' ]
                },
            ]
        },

        plugins: getPlugins(),

    };
};
