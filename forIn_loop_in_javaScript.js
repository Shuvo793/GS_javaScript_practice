function Mobile(name){
    this.model = name;
    this.ram = '2 GB';
    this.version = 'lolipop'
    this.price = function(){
        console.log('BDT 20000');
    } 
}

var nokia = new Mobile('Nokia');


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







