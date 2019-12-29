


class Father{
    constructor(selPrice){
        this.price=selPrice;

    }
    show(){
        return 'this mobile price is '+this.price;
    }
}
class Son extends Father{
    constructor(selPrice) {
        super(selPrice);

    }


}

var shuvo = new Son(5000);

console.log(shuvo.show());