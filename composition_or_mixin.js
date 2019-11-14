var eating = {
    eat:function(){
        return 'I am now eathing';
    }
};
var walking = {
    walk:function(){
        return 'I am now walking';
    }
};
var talking = {
    talk:function(){
        return 'I am now talking';
    }
};
/*
// for roboCop
var starting={
    start:function(){
        return "I am now stating";
    }
}
var human = Object.assign({},eating,walking,talking);
    console.log(human.eat());
    console.log(human.talk());
    console.log(human.walk());
var roboCop=Object.assign({},walking,talking,starting); //starting only value for roboCop
    console.log(roboCop.walk());
    console.log(roboCop.talk());
        //how to add new work in roboCop
        // line 16 new object literal create :)
            console.log(roboCop.start());
    
 */

 
// human dynamic
var Human = function(){

}
/*     
    Object.assign(Human.prototype,walking,talking,eating);
    var Rahul = new Human();
    console.log(Rahul.eat());
    var karim = new Human();
    console.log(karim.walk()); 
*/
    //object.assign dynamic
function mixin(target,...source){ //rest paramitter
    Object.assign(target,...source); //sprit operator
}
mixin(Human.prototype,walking,talking,eating);
var suvo = new Human();
console.log(suvo.eat());