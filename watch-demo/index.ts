// watch "tsc index.ts && cat index.js && node index.js"

const concat =  (a: string, b: string) => a + b

console.log(concat('hello', 'wildcodeschool'))


const low = [1,2,3]
const high = [4,5,6]

console.log([...low, ...high])
console.log([...low, high])
console.log([low, high])
