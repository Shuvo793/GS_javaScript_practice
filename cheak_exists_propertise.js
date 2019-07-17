
function Mango(name){
    this.nameOfMango = name;
    console.log(this.nameOfMango);
}
var rupali = new Mango('rupali');

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
