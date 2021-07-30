const fs = require('fs');

// reading Files 
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// writing files - replaces any preexisting text/files

fs.writeFile('./docs/blog2.txt', "hello world again", () => {
    console.log("it was written");
})


// directories 
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    })
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created')
    })
}



// deleting files 
if (fs.existsSync('./docs/deleteme1.txt')) {
    fs.unlink('./docs/deleteme1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("file deleted")
    })
}