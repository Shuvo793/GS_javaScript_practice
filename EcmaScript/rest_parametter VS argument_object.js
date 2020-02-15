//rest_parametter
function rest(a,...args){
    console.log(a);
    console.log(args);
}
rest(10,20,30,40);
/* output : a = 10
        0=20
        1=30
        2=40 */

//arguments_object
function arguments(a){
    console.log(a);
    console.log(arguments);
}
arguments(10,20,30,40);
/* output : a = 10
        0=10
        1=20
        2=30
        3=40 */
            