function ObtenerDatos () 
{
var Nombre = document.getElementById("Nombre").value;
var Apellido = document.getElementById("Apellido").value;
var Monto = parseFloat(document.getElementById("Monto").value) ;
var Dias = parseFloat(document.getElementById("Dias").value) ;
var comprobante=false;
var comprobantemonto=false;
var porcentaje =0;

if (Nombre.trim() ==="" && Nombre===""){
    alert("Debe ingresar un nombre");
    comprobanteNombre=false;
    document.getElementById("Nombre").focus();
}else {comprobanteNombre=true;}
if (Apellido.trim() ==="" && Apellido===""){
    alert("Debe ingresar un apellido");
    comprobanteApellido=false;
    document.getElementById("Apellido").focus();
}else {comprobanteApellido=true;}
if (Monto<=1000){
    alert("El monto ingresado debe ser como minimo $1000 ");
    comprobantemonto = false;
}else {comprobantemonto=true;}
if (Dias <=29)
{
    alert("Debe ingresar un periodo valido");
    comprobanteDias=false;
    document.getElementById("Dias").focus();
}else {comprobanteDias=true;}
    if (Dias>=30 && Dias<=60){
        porcentaje = 40;
        
    }
    if (Dias>=61 && Dias<=120){
        porcentaje = 45;
        
    }
    if (Dias>=121 && Dias<=360){
        porcentaje=50;
        
    }
    if (Dias >= 361){
        porcentaje=65;
    }

    if (comprobantemonto===true && comprobanteDias===true && comprobanteNombre===true && comprobanteApellido===true){
        MontoFinal = Math.round(Monto + Monto*(Dias/360)*(porcentaje/100));
        montofinal.textContent=MontoFinal;
        montoinicial.textContent=Monto;
        periodo.textContent=Dias;
    }
}

function reinvertir(){
var Nombre = document.getElementById("Nombre").value;
var Apellido = document.getElementById("Apellido").value;
var Monto = parseFloat(document.getElementById("Monto").value) ;
var Dias = parseFloat(document.getElementById("Dias").value) ;
var comprobanteNombre=false;
var comprobanteApellido=false;
var comprobantemonto=false;
var comprobanteDias=false;
var porcentaje =0;

if (Nombre.trim() ==="" && Nombre===""){
    alert("Debe ingresar un nombre");
    comprobanteNombre=false;
    document.getElementById("Nombre").focus();
}else {comprobanteNombre=true;}
if (Apellido.trim() ==="" && Apellido===""){
    alert("Debe ingresar un apellido");
    comprobanteApellido=false;
    document.getElementById("Apellido").focus();
}else {comprobanteApellido=true;}
if (Monto<=1000){
    alert("El monto ingresado debe ser como minimo $1000 ");
    comprobantemonto = false;
}else {comprobantemonto=true;}
if (Dias <=29)
{
    alert("Debe ingresar un periodo valido");
    comprobanteDias=false;
    document.getElementById("Dias").focus();
}else {comprobanteDias=true;}
    if (Dias>=30 && Dias<=60){
        porcentaje = 40;
        
    }
    if (Dias>=61 && Dias<=120){
        porcentaje = 45;
        
    }
    if (Dias>=121 && Dias<=360){
        porcentaje=50;
        
    }
    if (Dias >= 361){
        porcentaje=65;
    }

    if (comprobantemonto===true && comprobanteDias===true && comprobanteNombre===true && comprobanteApellido===true){
        for(i=0;i<4;i++){
            if(i===0){
                montofinal1.textContent=MontoFinal;
                monto1.textContent=Monto;
            }
            MontoFinal = Math.round(Monto + Monto*(Dias/360)*(porcentaje/100));
            
            if(i===1){   
                montofinal2.textContent=MontoFinal;
                monto2.textContent=Monto;
            }
            if(i===2){   
                montofinal3.textContent=MontoFinal;
                monto3.textContent=Monto;
            }
            if(i===3){   
                montofinal4.textContent=MontoFinal;
                monto4.textContent=Monto;
            }
            Monto=MontoFinal;
        }
        
    }
}
