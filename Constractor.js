//constractor
/* 
function Mobile(){ //constractor er namer prothom character boro hater hobe
    this.model ='j2 pro';
    this.price = function(){
        console.log(this.model+' '+'pirce is BDT 11000');
    }
}
 var samsung = new Mobile();
 samsung.price();
 */
//constructor with parameter

function Mobile(mobileModel){
    this.model=mobileModel;
    this.price=function(price){
        console.log(this.model+' price BDT ' +price);
    }
}
var lg = new Mobile('g4');
var Samsung = new Mobile('j2 pro');
lg.price(7000);
Samsung.price(11000);


