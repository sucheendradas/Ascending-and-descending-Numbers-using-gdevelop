//runtimeScene.setBackgroundColor(100,100,240);

var min = 10000;
var max = 1000000;
//Random Number
var n1_rvar  = runtimeScene.getVariables().get("n1_rvar");
var n2_rvar  = runtimeScene.getVariables().get("n2_rvar");
var n3_rvar  = runtimeScene.getVariables().get("n3_rvar");
var n4_rvar  = runtimeScene.getVariables().get("n4_rvar");
var n5_rvar  = runtimeScene.getVariables().get("n5_rvar");
//decimal system indian
var n1_var  = runtimeScene.getVariables().get("n1_var");
var n2_var  = runtimeScene.getVariables().get("n2_var");
var n3_var  = runtimeScene.getVariables().get("n3_var");
var n4_var  = runtimeScene.getVariables().get("n4_var");
var n5_var  = runtimeScene.getVariables().get("n5_var");

var x = Math.floor(Math.random() * (max - min + 1)) + min;
n1_rvar.setNumber(x);
n1_var.setString(decimal(min, max ,x));

var x = Math.floor(Math.random() * (max - min + 1)) + min;
n2_rvar.setNumber(x);
n2_var.setString(decimal(min, max ,x));

var x = Math.floor(Math.random() * (max - min + 1)) + min;
n3_rvar.setNumber(x);
n3_var.setString(decimal(min, max ,x));

var x = Math.floor(Math.random() * (max - min + 1)) + min;
n4_rvar.setNumber(x);
n4_var.setString(decimal(min, max ,x));

var x = Math.floor(Math.random() * (max - min + 1)) + min;
n5_rvar.setNumber(x);
n5_var.setString(decimal(min, max ,x));


function decimal(min, max ,x) {
//var x=12345678;
 
 x=x.toString();
 var lastThree = x.substring(x.length-3);
 var otherNumbers = x.substring(0,x.length-3);
 if(otherNumbers != '')
    lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    //alert(res);
 return res
}
