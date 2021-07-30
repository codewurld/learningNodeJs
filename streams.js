const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", { encoding: 'utf8' });

const writeStream = fs.createWriteStream("./docs/blog4.txt");

// encoding converts the buffers to automatically readable texts 

// readStream.on('data', (chunk) => {
//     console.log("---New Chunk ---")
//     console.log(chunk);

//     // creates new file and stream with the data passed from chunk 
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);