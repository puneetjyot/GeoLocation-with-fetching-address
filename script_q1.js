 //fetch = require("node-fetch");
 function getCoordinates()
{
navigator.geolocation.getCurrentPosition(success,error)
}
 
function success(pos)
{
  
    var coordinates=pos.coords;
   // document.getElementById('locate').value=crd.latitude
   //console.log(crd)
    fetchData(coordinates.latitude,coordinates.longitude )
    
}
function error(err)
{
   // console.log(err.message);
}
function putValueInSession()
{
    //alert(document.getElementById('name').value)
    var b=[];
    b=JSON.parse(sessionStorage.getItem('sessionarray'))||[]
    b.push(document.getElementById('name').value)
    sessionStorage.setItem('sessionarray',JSON.stringify(b));
    document.getElementById('session').innerHTML=JSON.parse(sessionStorage.getItem('sessionarray'))+" at "+document.getElementById('location').value;


}

async function fetchData(latitude,longitude)
{
    
    const data=await getLocation(latitude,longitude);
    var str=data.results[0].components.city+","+data.results[0].components.county+", "+data.results[0].components.road+", "+data.results[0].components.postcode
    document.getElementById('location').value=str;
    var a=[];
    a=JSON.parse(localStorage.getItem('localarray'))||[];
    a.push(data.results[0].components.city+" "+data.results[0].components.postcode);
    localStorage.setItem('localarray',JSON.stringify(a));
    
    document.getElementById('local').innerHTML=JSON.parse(localStorage.getItem('localarray'));

}

async function getLocation(latitude,longitude)
{   
    var key='2b187689a1e649a48ab64f64695a0d4d'
    
    var data= await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`)
    return data.json();
}