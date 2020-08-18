let isDone: boolean = false

let age: number = 123
let binaryNumber: number = 0b1111

let myName: string = 'dayTimeAffect'
let mes: string = `hell0 ${myName}`

let u: undefined = undefined

let n: null = null

age = undefined
age = null

mes = undefined
mes = null

let notSure: any = 1
notSure = true
notSure = 'haha'

let numberOrString: number | string
numberOrString = 1
numberOrString = '1'

let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(4)
// arrOfNumbers.push('5')

let arrOfStrings: string[] = ['1',`2`,"3"]
arrOfStrings.push('4')
// arrOfStrings.push(5)

// let user: [string, number] = ['string', 0]
let user: [string, number]
user.push('asd')
user.push('qwe')
user.push(123)