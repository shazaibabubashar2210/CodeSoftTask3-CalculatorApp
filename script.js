Displayclear=()=>
{
  document.getElementById("display").value="";
}
deleteone=()=>
{
  document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
}
display7=()=>
{
  document.getElementById("display").value +="7";
}
display8=()=>
{
  document.getElementById("display").value +="8";
}
display9=()=>
{
  document.getElementById("display").value +="9";
}
displayX=()=>
{
  document.getElementById("display").value +="*";
}
evaluatefun=()=>
{
  document.getElementById("display").value=eval(document.getElementById("display").value);
}
displaypersen =()=>
{
  document.getElementById("display").value = parseInt(document.getElementById("display").value)/100;
}
display4=()=>
{
  document.getElementById("display").value +="4";
}
display5=()=>
{
  document.getElementById("display").value +="5";
}
display6=()=>
{
  document.getElementById("display").value +="6";
}
displayminus =()=>
{
  document.getElementById("display").value +="-";
}
display1 =()=>
{
  document.getElementById("display").value+="1";
}
display2 =()=>
{
  document.getElementById("display").value+="2";
}
display3 =()=>
{
  document.getElementById("display").value+="3";
}
display0=()=>
{
  document.getElementById("display").value +="0";
}
displaydot=()=>
{
  document.getElementById("display").value +=".";
}
displayplus=()=>
{
  document.getElementById("display").value +="+";
}