//prototype and instance member akshathe dakhte chaile (forIN) loop use kora mandatory
var Mobile = function(model_no)
{   //Intance member
    this.model=model_no;
    this.price=3000;

};

var samsung = new Mobile('galaxy');
Mobile.prototype.color='white';

for( var key in samsung)
{
    console.log(key);
}