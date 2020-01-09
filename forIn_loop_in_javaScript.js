function Mobile(model_no){
    this.model = model_no,
    this.ram = '4 GB',
    this.storage = '64 gb',
    this.price = function (){
        console.log('30000 tk');
    }
}
var samsung = new Mobile('galay j2 pro');
console.log(samsung.model);
console.log(Object.keys(samsung));



//way 1


/* for(key in nokia){
    console.log(nokia[key]+"<br/>");
} */

/* function baaad dite hole if/else condition use korte hobe */
/* 
for(key in nokia){
    if(typeof nokia[key] !== 'function'){
        console.log(nokia[key]);
    }
}
 */


 //only key anar jonno


/* console.log(Object.keys(nokia)); */







