let modulo=document.querySelector("#modulo");
let inglés=document.querySelector("#inglés");
let cálculo=document.querySelector("#cálculo");
let ecología=document.querySelector("#ecología");
let física=document.querySelector("#física");
let res=document.querySelector("#promedio");

modulo.oninput=()=>{calcular();}
inglés.oninput=()=>{calcular();}
cálculo.oninput=()=>{calcular();}
ecología.oninput=()=>{calcular();}
física.oninput=()=>{calcular();}

const calcular=()=>{
  document.querySelector("#cm").innerHTML=modulo.value;
  document.querySelector("#ci").innerHTML=inglés.value;
  document.querySelector("#cc").innerHTML=cálculo.value;
  document.querySelector("#ce").innerHTML=ecología.value;
  document.querySelector("#cf").innerHTML=física.value;
  
  let m = parseFloat(modulo.value)
  let i = parseFloat(inglés.value)
  let c = parseFloat(cálculo.value)
  let e = parseFloat(ecología.value)
  let f = parseFloat(física.value)
  
  let promedio=(i+c+e+m+f)/5;
  res.innerHTML=promedio.toFixed(1);
  if(promedio>5&&promedio<7){
    res.className="bg-danger text-white";
  }else if(promedio>=7&& promedio<9){
    res.className="bg-warning text-white";
  }else{
    res.className="bg-success text-white";
  }
    
}