const Lightbulb = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0.209;
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка ' + this.name + ' не включена');
        } else {
            console.log('Лампочка ' + this.name + ' проработала ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет ' + this.result + 'р.');
        }
    };
};
 
const lightBulb = new Lightbulb('в гостинной');
lightBulb.get();
 
const lightBulb2 = new Lightbulb('в туалете');
lightBulb2.get();
 
const lightBulb3 = new Lightbulb('в ванной');
lightBulb3.get();

const lightBulb4 = new Lightbulb('на кухне');
lightBulb4.get();
 
let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result + lightBulb4.result;
 
console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');