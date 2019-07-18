//private use korte hole var,let,const ai 3 tar moddhe akta keyword thakbe..er differece ta pore dakhbo

var Mobile = function(model_no,sprice){
    this.model = model_no;
    var color = 'white';//private property ato tuku bujhle ee hobe
    const price = 15000;//private
    let sp=sprice;//private
    this.sellsprice=function(){
        return ('whool seel price '+this.price+' , selling price '+this.sp);
    }
}

var samsung = new Mobile('j2',20000);