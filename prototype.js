var Mobile = function(model_no)
{   //Intance member
    this.model=model_no;
    this.price=3000;

};

var samsung = new Mobile('galaxy');

/* samsung.color='white';
console.log(samsung.color); */ //Mobile object ee add hoe gase color property

var nokia = new Mobile('6s');// nokia object ee dakha jaitece color property nai
/* console.log(nokia); */


/* akhon jodi 1000 Object er moddhe amar color property dorkar hoe tokhon ki amra 1000 line code korbo ? na er jonno (prototype) babohar kora hoe */

//prototype sntx:classname.prototype.key="value".

Mobile.prototype.color='white'; //color holo prototype member ..je member baire theke obj ee add                                    kora hoe
/* document.write(nokia.color); */  //browser ee dakha jabe
console.log(nokia);     //console log ee ashe nai bt browser console ee gele prototype er modde e                           ke paoa jae

