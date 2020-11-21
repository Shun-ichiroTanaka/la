const mix = require('laravel-mix');

mix
.js('resources/js/app.js', 'public/js')

// sass
.sass('resources/sass/app.scss', 'public/css')

// tailwind
.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
])

// ブラウザーリロード
.browserSync({
    files: [
        "resources/views/**/*.blade.php",
        "public/**/*.*"
    ],
    proxy: {
        target: "http://localhost:3000/",
    }
})

.webpackConfig(require('./webpack.config'));
