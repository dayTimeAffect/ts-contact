interface Person {
    readonly id: number; //只读属性，只能在创建时赋值
    name: string;
    age: number;
    sex?: string;// ? 可选属性
}
let user: Person = {
    id: 0,
    name: 'dayTimeAffect',
    age: 0,
    // sex: '男'
}

interface Radio {
    switchRadio(triggerL: boolean): void
}
interface Battery {
    checkBatteryStatus(): number
}
interface RadioWithBattery extends Radio {
    //接口也能继承
    checkBatteryStatus(): number
}
class Car implements Radio {
    switchRadio(){
        //xxx
    }
    //不影响其他方法
    otherInfo(){
        //xxx
    }
}
class Cell implements Radio, Battery {
    switchRadio(){
        //xxx
    }
    checkBatteryStatus(){
        return 0
    }
}
class Xxx implements RadioWithBattery{
    switchRadio(){
        //xxx
    }
    checkBatteryStatus(){
        return 0
    }
}