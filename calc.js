function getnum(value)
{
    var svalue = document.getElementById("screen").innerHTML;
    svalue += value;
    document.getElementById("screen").innerHTML = svalue;
}
function findnum()
{
    var svalue = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = eval(svalue);;
}
function clearscreen()
{
    document.getElementById('screen').innerHTML = "";
}
function dellast()
{
    var svalue = document.getElementById("screen").innerHTML;
    var res = "";
    for(let i = 0; i < svalue.length-1; i++)
        res += svalue[i];
    document.getElementById('screen').innerHTML = res;
}
function findsqrt()
{
    var svalue = document.getElementById("screen").innerHTML;
    svalue = eval(svalue);
    svalue = Math.sqrt(svalue);
    document.getElementById("screen").innerHTML = svalue;
}