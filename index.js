// 01 - Number
// const integer = 102
// const float = 13.9
// console.log(integer, float)

// 02 - Convert
// const basic = 34
// const stringified = basic.toString()
// console.log(stringified)

// 03 - Round
// const num = 1.5 
// const rounded = Math.round(num)
// console.log(rounded)

// 04 - Arithmétique
// const test = 12
// const bis = 5
// console.log (test + bis)
// console.log (test - bis)
// console.log (test * bis)
// console.log (test / bis)
// console.log (test % bis)

// 05 - Reste division euclidienne
// const number = 691
// console.log (number % 1)
// console.log (number % 2)
// console.log (number % 3)
// console.log (number % 4)
// console.log (number % 5)

// console.log ("1 et 3 divisent complètement 999")
// console.log ("1 et 5 divisent complètement 25")
// console.log ("1, 2, 4 et 5 divisent complètement 190280")
// console.log ("1 divise complètement 47")
// console.log ("1 divise complètement 691")

// Bonus
let numbers = [999, 25, 190280, 47, 691]

for (let number in numbers) {

    for (i=1; i <=5; i += 1){

        if (numbers[number] % i === 0){
            console.log(`${numbers[number]} est divisible complètement par ${i}`)
        }
    }
}