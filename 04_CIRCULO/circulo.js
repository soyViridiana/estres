let r=document.querySelector("#radio");
r.oninput=()=>{
  document.querySelector("#vr").innerHTML=r.value;
  let radio=parseFloat(r.value);
  let area=Math.PI*radio*radio;
  document.querySelector("#res").innerHTML=area.toFixed(2);
  
}