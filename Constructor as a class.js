//custom constructor dia class make korte hobe

var Mobile = function(model_no,sprice){
    this.model = model_no;
    this.color = 'white';
    this.price = 15000;
    this.sp=sprice;
    this.sellsprice=function(){
        return ('whool seel price '+this.price+' , selling price '+this.sp);
    }
}

var samsung = new Mobile('j2',20000);
console.log(samsung.model);
console.log(samsung.color);
console.log(samsung.sellsprice());




// but ES6 ee class update asce