class Father {
    show(){
        return "hello world";
    }
}
class Son extends Father{
    show(){
        return "hello dunia";
    }
}
var s = new Son();
console.log(s.show());