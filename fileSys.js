

const fs = require('fs');
const path = require('path');


const baseDir = path.join(__dirname, 'crimson');
const subDirectories = ["slightly_techie", "Rudy", "path"]
const  fileNames = ["index.js", "index.txt", "index.md"]

 //1. check if a folder exists // crimson
 console.log(`-----Checking For Directory-----`)
const isDirectoryPresent = function check(directory){
     directory = baseDir;
     console.log(isDirectoryPresent)
    return fs.existsSync(directory)


}
//2. create a folder with name crimson, [slightly_techie, your_name, path/fs]

function createDirectory(directory){
    console.log(`----Creating Directory----`)
    if(!isDirectoryPresent()){
        fs.mkdirSync(directory,{recursive:true});
        console.log(`${directory} created` )
        for(i=0; i < subDirectories.length; i++){
            let subDir = path.join(baseDir, subDirectories[i])
            if(subDirectories[i] ==="path"){
                let fileSystemPath = path.join(subDir, "fs")
                fs.mkdirSync(subDir);
                fs.mkdirSync(fileSystemPath);

            }else{
                fs.mkdirSync(subDir);
            }
        }
    }else{
        console.log(`${directory} already exist`)
    }
}

//3. delete a folder path/fs
function deleteSubDirectory(directory){
    console.log(`----Deleting Directory----`)
    const subDirToDelete = path.join(directory, "path/fs");
    fs.rmdirSync(subDirToDelete);
    console.log("Path folder deleted")

}

//4. view contents of crimson
function  viewDirectory(directory){
    console.log(`----View Directory Content----`)
    const viewDir = fs.readdirSync(directory);
    console.log(viewDir);
}
//5. create a file a file in crimson index.js, index.txt, index.md  //6.Write to the File 
function createFile(directory){
    console.log(`----Create & Write to Files----`)
    for(i = 0; i < fileNames.length; i++){
        let filepath = path.join(directory, fileNames[i]);
        if(fileNames[i] === "index.js"){
            fs.writeFileSync(filepath, `console.log("Hello World")`) 
        }else{
            fs.writeFileSync(filepath,"Hello World,") 
        }
    }

}

//7. append new data/content to the file
function appendDataToFile(directory){
    console.log(`----Append More Data to Files ----`)
    const filePath = path.join(directory,"index.txt")
    fs.appendFileSync(filePath, " we Are going to be great !")
}

//8. read from the file created above
function readFromFiles(directory){
    console.log(`----Read Files----`)
    /*for(j = 0; j <= fileNames.length, j++;){
        for(i = 0; i <= baseDir.length, i++;){
            if(fileNames[j] === baseDir[i]){
                let filePath  = path.join(directory,fileNames[j] )
                let resultOfRead = fs.readFileSync(filePath, "utf-8")
                console.log(resultOfRead);
            }
        }
     }*/
     let filePath  = path.join(directory, "index.txt" )
    let resultOfRead =  fs.readFileSync(filePath, "utf-8")
    console.log(resultOfRead);

}
createDirectory(baseDir);
deleteSubDirectory(baseDir);
viewDirectory(baseDir);
createFile(baseDir);
appendDataToFile(baseDir)
readFromFiles(baseDir)


