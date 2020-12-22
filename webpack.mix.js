const mix = require('laravel-mix')

mix
    .react('server/app.js', '.prev/js')
    .babelConfig({
        plugins: ['./server/babelPlugin']
    })
