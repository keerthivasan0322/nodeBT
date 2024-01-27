// const {add, sub, mul, div} = require('./math');
// console.log(process.argv)
// const num1 = parseInt(process.argv[2])
// const num2 = parseInt(process.argv[3])
// const operator = process.argv[4]

// switch(operator) {
//     case '+' : {
//         console.log(add(num1, num2));
//         break;
//     }
//     case '-' : {
//         console.log(sub(num1, num2));
//         break;
//     }
//     case '*' : {
//         console.log(mul(num1, num2));
//         break;
//     }
//     case '/' : {
//         console.log(div(num1, num2));
//         break;
//     }
// }

// Next?
// const fs = require('fs')
// filepath = __dirname+"/friends.txt"

// fs.readFile(`${__dirname}/friends.txt`, (err, data)=>{
//     console.log(data.toString());
//     console.log(err);
// });

// Next?
// const fs = require('fs')
// const data = `chippi parai`
// fs.writeFile(`${__dirname}/output.txt`, data, err=>{
//     console.log('Done');
// })

// Next?

const fs = require('fs')
const { resolve } = require('path')

function readOperation(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(data) {
                resolve(data.toString());
            }
            if(err) {
                reject("Done!");
            }
        })
    })
}

// readOperation(`${__dirname}/friends.txt`).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// let writeData = 'Keerthi vasan K'
// writeOperation(`${__dirname}/output.txt`, writeData).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

function writeOperation(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject("Finished!");
            }
            else {
                resolve("Write completed!")
            }
        })
    })
}

async function main() {
    try{
        const friend = await readOperation(`${__dirname}/friends.txt`); 
        await writeOperation(`${__dirname}/output.txt`, friend);
    }catch(err) {
        console.log(err);
    }
}

main();