//object constractor syntex: var name = new object();
//object literal syntex: var name = {};  
//object constractor and object literal  2tai same bt syntex vinno..obj literal ta js ee use kora tai uttom.


//ex 1:
    /* var name = new Object();
    name['ex'] = 'suvo';
    name['ex1'] = 'moin';
    console.log(name.ex);  */


    //ex 2:
    var totalPrice = new Object();
    totalPrice.suvo=300;
    totalPrice.moin=200;
    totalPrice.total=function(){
        return (this.suvo+this.moin);
    }
    console.log(totalPrice.total());

