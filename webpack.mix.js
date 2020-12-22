const mix = require('laravel-mix')

mix
    .react('server/app.js', 'public/js')
    .copy('server/index.php', 'public/')
    .babelConfig({
        plugins: ['./server/babelPlugin']
    })
