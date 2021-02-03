const fs = require("fs/promises");
const sizeOf = require('image-size');


async function getFilesPath(path){
  const filesInDir =  await fs.readdir(path);
  const filterFiles = filesInDir.filter((fileName)=>fileName.match(/(\.jpg|\.png|\.jpeg)$/i))

  return filterFiles;
}

function imageSize(asset){
    const dimensions = sizeOf(asset);
    return dimensions; 
}

module.exports.getFilesPath = getFilesPath;
module.exports.imageSize = imageSize;