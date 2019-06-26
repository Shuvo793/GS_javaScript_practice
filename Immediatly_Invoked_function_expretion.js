//ai function ti sathe sathe exicutive hoe jae.aita akta self execution function
//syntex: anonames function _body_function call

(function(){console.log('suvo');})();

//paramitter IIFE function

(function(a,b){console.log(a,b);})('suvo','moin');

//variable IIFE function

(function(){
    var a = 20 ;
    console.log(a);
})();

//aita korar shubidha holo aita global variable ke ignore kore akta page ee onk global variable thekte pare tate onk somoe variable modify haoar somvobona thakte pare ai jonno variable ke IIFE function er moddhe rakha hoe;


(function(){
    var a = 20;
    if(a ===30){
        console.log('is not match');
    }else{
        console.log('is match');
    }
})();