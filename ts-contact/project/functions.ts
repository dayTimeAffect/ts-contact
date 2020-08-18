//函数声明
function add(x: number, y: number, z?: number, m: number = 10, n?: number): number{
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y
    }
}
//函数表达式
const add_new: (x: number, y: number) => number = function add(x: number, y: number): number{
    return x + y
}