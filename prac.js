// let fs = require('node:fs');

// let text = fs.readFileSync('./poem.txt', 'utf-8')
// console.log(text)

// fs.writeFileSync('./poem.txt', 'Yoooo! Pinkman in the house', {flag: 'w'})

// let newText = fs.readFileSync('./poem.txt', 'utf-8')
// console.log(newText)

let {readFile, writeFile, writeFileSync} = require('node:fs');

// const reader = (path, time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             readFile(path, 'utf-8', (err, result) => {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(result)
//                 }
//             })
//         }, time)
//     })
    
    
// } 

// const myReader = async () => {

//     let p = await reader('./poem.txt', 4000)
//     console.log(p)
//     let s = await reader('./song.txt', 1000)
//     console.log(s)
// }

// myReader()




const myWriter = () => {
     writeFileSync('./poem.txt', 'I am new poem')
     writeFileSync('./song.txt', 'I am new song')
     writeFileSync('./document.txt', 'I am new document')
    console.log('apple')
}

myWriter()

console.log('lemon')