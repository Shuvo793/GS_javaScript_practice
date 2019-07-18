//========================Object literal=================single object
/* 
var fees = {};
fees['suvo'] = 200;
 */
//=============Object literal with declare and Initial================single object
/* 
var fees = {
    suvo : 200,
}
 */
//==================Object constructor======================single object
/* 
var fees = new Object();
 */

 //==============Constructor function make object====================multipal object
/* 
function Mobile(){
    this.model ='galaxy';
} 
var sumsung = new Mobile();

 */

var Mobile = function (){ //ekhane mobile take class bola jae . class ke javaScript ee
    this.model ='galaxy';
} 
var sumsung = new Mobile();



 //===================Factory function make object====================multipal object
/* 
function fees(){
    return{
        suvo : 200,
    }
}
var sumsung = fees();
 */


