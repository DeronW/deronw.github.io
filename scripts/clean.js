const del = require('del');

del(['.tmp', 'build/*', '!build/.git']).then(paths => {
    if(paths.length == 0) {
        console.log('Nothing to clean')
    } else{
        console.log('Deleted files and folders:\n', paths.join('\n'))
    }
});