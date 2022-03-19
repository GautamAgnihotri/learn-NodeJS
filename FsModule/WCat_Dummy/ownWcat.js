const  fs = require("fs");
//======>Taking command line arguments<=======
let inputArr = process.argv.slice(2);
//console.log(inputArr);

let fileArray=[];
let optionArray=[];
//================> filter file path and options<==================
for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar=='-'){
        optionArray.push(inputArr[i]);
    }
    else{
        fileArray.push(inputArr[i]);
    }
}
//========> Checking input file is present or not <==========
for (let i = 0; i < fileArray.length; i++) {
    let doesExist = fs.existsSync(fileArray[i]);
    if(!doesExist){ //file does not exist
        console.log(`file ${fileArray[i]} does not exist`);
        fileArray.splice(i,1);
        if(fileArray.length===0){
            process.exit();
        }
    }
    
}
 console.log(fileArray);


