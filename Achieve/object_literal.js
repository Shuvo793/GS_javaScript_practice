/* ==============object decleration=========>way 1 */



//example 1:
        /* var fees = {};
        fees['suvo']= 100;
        console.log(fees['suvo']); */

//example 2:
        /* var fees = {};
        fees.suvo= 100;
        console.log(fees.suvo); */

//example 3:
        /* var fees = {};
        fees.moin=function(){return "moin is Suvo's brother"};
        console.log(fees.moin()); */

//example 4:
        /* var fees = {};
        fees["suvo"] = function(){return (10+20+30);};
        console.log(fees["suvo"]()); */


/* ==============object decleration=========>way 2 */

//example 1:
        /* var fees = {
            'suvo' : 100,
            'jerin':200,
            'sohel':400,
        }
        console.log(fees['suvo']); */


//example 2:
        /* var totalFees = {
            total : function (){
                return 100+200;
            }
        }
        console.log(totalFees.total()); */
        


//example 3:
        /* var totalFees = 
        {
            ['suvo'] : 100,
            ['moin'] : 200,
            total : function(){return this.suvo+this.moin}

        }
        console.log(totalFees.total()); */ 