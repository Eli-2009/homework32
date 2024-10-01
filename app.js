let a = 0
let object = {
    name: 'Ali',
    gender: 'Male',
    age: 15,

    myFunc1: ()=>{
        this.age = object.age + 10
        console.log(this.age);
    },

    myFunc2: ()=>{
        if (this.age <= 65) {
            this.age = 65 - object.age
            console.log('pensiya almaga ' + this.age + ' il qalib');
        }else{
            this.age = object.age - 65
            console.log(this.age + ' ildi pensiya alinir');
        }
    }
}
object.myFunc1()
object.myFunc2()