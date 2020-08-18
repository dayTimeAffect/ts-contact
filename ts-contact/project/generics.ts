function echo<T>(arg: T): T {
    return arg
}
const result = echo(123)

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)  //error  传入的类型不一定包含length属性
    return arg
}

interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T{
    console.log(arg.length)
    return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length: 0})
const arr = echoWithLength([])

class Queue<T> {
    private data = [];
    push(item: T){
        return this.data.push(item)
    }
    pop(): T{
        return this.data.shift()
    }
}
const queue1 = new Queue<number>()
const queue2 = new Queue<string>()

queue1.push(1)
queue1.pop().toFixed()

queue2.push('string')
queue2.pop().length

interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = {key: 1, value: '1'}
let kp2: KeyPair<string, boolean> = {key: 'is', value: true}