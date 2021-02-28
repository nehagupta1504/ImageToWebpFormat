 const imagemin = require('imagemin');
 const imageminJpegtran = require('imagemin-jpegtran');
 const imageminPngquant = require('imagemin-pngquant');
 
 async function webpImage(url) {
    //(async (url) => {
        console.log(url);
        console.log(typeof(url));
        console.log(typeof('images/download.jpg'));
        const files = await imagemin([url], {  
            destination: 'build/images',
                plugins: [
                    imageminJpegtran(),
                    imageminPngquant({
                        quality: [0.6, 0.8]
                    })
                ],
            }
        );
     
        console.log(files);
        //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
    //})();
 
}
 module.exports = webpImage;