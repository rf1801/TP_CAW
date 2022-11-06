var fs = require('fs')
const myArgs = process.argv.slice(2);
const expression = myArgs[0]
var filesfound=[]

for (let i = 1; i < myArgs.length ; i++) {

    //you can change the directory here or delete it take it as an argument
    let data = fs.readFileSync('C:\\Users\\raouf\\Desktop\\CAW\\TP\\TP5\\'+myArgs[i]+'.TXT', 'utf8');

    if (data.includes(expression)){
        filesfound.push(myArgs[i])
    }

}


if (filesfound.length==0){
    console.log("no file contains such expression")
}else{
    console.log("the expression is found in the following files")
    console.log(filesfound)
}