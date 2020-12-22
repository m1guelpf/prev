const fs = require('fs')

module.exports = function(babel) {
    return {
        visitor: {
            ExportNamedDeclaration(path, state) {
                if (path.node.declaration.declarations[0].id.name !== 'php') return

                const code = path.node.declaration.declarations[0].init.quasis[0].value.raw
                const phpFilePath = state.file.opts.filename.replace(/^.*[\\\/]/, '').replace('.js', '.php')
                fs.writeFileSync(`./.prev/php/${phpFilePath}`, `<?php\n${code}`)
              },
        }
    };
}
