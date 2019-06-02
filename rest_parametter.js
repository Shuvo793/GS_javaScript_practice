//rest parametters
/* syntex:function func_name(...anyName){//rest operator(...)
    //body
} */

function mySelf(a,...fullName){
    console.log(a + "<br/>");
    console.log(fullName);
}
mySelf('shuvo','rafiqul','islam','shuvo');