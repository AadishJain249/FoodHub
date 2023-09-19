const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 5;
const throttle=(task,count,2000)
{
    
}
let amount=0;
const computeAmount=function(){
    return{
    crore:function(val)
    {
        amount+=val*Math.pow(10,7);
    },
    lacs:function(val)
    {
        amount+=val*Math.pow(10,5);
    },
    thousand:function(val)
    {
        amount+=val*Math.pow(10,3);
    },
    
    value:function()
    {
        return amount;
    }
}
    
}
computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value ();