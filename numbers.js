window.onload=function()
{
	document.getElementById("result").style.display="none";
};
var url ="http://numbersapi.com/";
var res;
var response;
async function numcall(){
var jso ="?json";
var getnum = document.getElementById('searchBox').value ;
response = await fetch(url+getnum+jso);
res = await response.json();
console.log(res.text);	

document.getElementById("def").innerHTML= res.text;
document.getElementById("result").style.display="block";
}
numcall();