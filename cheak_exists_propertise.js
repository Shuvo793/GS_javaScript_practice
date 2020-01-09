// theory 1


/* if(typeof rupali.nameOfMango !== 'undefined'){
    console.log('available'); //available coz this variable is available line no 2
}else{
    console.log('NOT available');
}  */

//theory 2 use (in) operator

/* if('nameOfMango' in rupali){
    console.log('available'); //available coz this variable is available line no 2
}else{
    console.log('not available')
}
 */

//theory 3 use (has own property()) it is a js build in function

/* if(rupali.hasOwnProperty('nameOfMango')){
    console.log('available');//available coz this variable is available line no 2
}else{
    console.log('not available');
} */


function Mobile(model_no){

    this.model=model_no,
    this.price=function(){
        console.log('this is my '+model_no+' phone and my phone price is 10000');
    }

}

var samsung = new Mobile('galaxy j2 pro');
samsung.price();
var lava= new Mobile('rm  mini');
console.log(l);
lava.price();



if (samsung.hasOwnProperty('model')){
    console.log('Available');
}else{
    console.log("dosn't exists");

}


