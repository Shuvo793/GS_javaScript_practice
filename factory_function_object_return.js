//je function kono obj return kore take factory function bole


//ex 1:
/* function mobile(){
    return {
        name : "galaxy j2 pro",
        price:function(){
            return ("price of "+this.name+" BDT 9000");
        }
    };
}
var samsung = mobile();
console.log(samsung.price()); */

/* function mobile(){
    return {
        name : "galaxy j2 pro",
        price:function(){
            return ("price of BDT 9000");
        }
    };
}
var samsung = mobile();
console.log(samsung.name+" "+samsung.price()); */


//ex 2:
function mobile(model){
    return {
        name : model,
        price:function(){
            return ("price of BDT 9000");
        }
    };
}
var samsung = mobile('j2 pro');
console.log("samsung "+samsung.name+" "+samsung.price());

var nokia = mobile('3310');
console.log("nokia "+nokia.name+" "+nokia.price());
