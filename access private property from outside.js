var Mobile =function(model_no,sprice)
{
    this.model=model_no;
    this.color='white';
    var price =3000;//private property jeta baire theke access kora jabe na
    this.sp=sprice;
    this.sellingPrice=function(){ //jehetu sellingPrice ta public ar er kaj holo price ke                                   show kora tai aita akhon baire theke access hobe
        return(price);
    }
}
var samsung=new Mobile('j2',12000);
console.log(samsung.sellingPrice());
