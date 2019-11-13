//Inheritance
function extend(paraent,child){

    child.prototype=Object.create(paraent.prototype);
    child.prototype.constructor=child;
  
  }
  //parent class
  function Mobile(model){
    this.model=model;
  }
  
  Mobile.prototype.getModel=function(){
    return this.model;
  }
  /*  
  
  //sub class
   extend(Mobile,Samsung);
  function Samsung(model,price){
    this.model=model;
    this.price=price;
  
  }
  Samsung.prototype.getPrice=function(){
    return this.price;
  }
  var s = new Samsung('galaxy',3000);
  console.log(s.getModel());
  console.log(s.getPrice());
  
  //sub class
  extend(Mobile,Lenovo);
  function Lenovo(model){
    this.model=model;
  } 
  var l = new Lenovo('i3');
  console.log(l.getModel());
  
  */
  
   
  extend(Mobile,Samsung);
  function Samsung(model,price){
    Mobile.call(this,model)
    this.price=price;
  
  }
  
  var s = new Samsung('galaxy',3000);
  /* console.log(s.getModel());
  console.log(s.getPrice()); */
  
  // ami chaiteci price and model alada alada call na kore aksathe korbo 
  console.log(s);
  
  
  
  
  
  
  
  
  