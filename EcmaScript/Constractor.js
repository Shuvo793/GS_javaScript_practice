


function Mobile(model_no,price){
    this.model=model_no,
    this.price=function(){
        console.log('My phone is '+model_no+' and price is '+price);
    }
}
var samsung = new Mobile('galaxy j2 pro',3000);
samsung.price();
