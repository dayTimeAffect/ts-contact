// 类型别名
type PlusType = (x: number, y: number) => number
type NameResolver = () => string
type name = string | NameResolver

function sum(x: number, y: number): number {
    return x + y
}
const sum2: PlusType = sum

const name2 = 'dayTimeAffect'
const name3 = () => 'dayTimeAffect'