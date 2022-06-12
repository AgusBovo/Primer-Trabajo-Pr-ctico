app.component('calculo-individual',{
    template:
    `
        <div class="contenedor">
        <form class="calculo-individual">
            <label for="nombre">Nombre:</label>
            <input type="text" name="Nombre" id="Nombre" v-model="nombre">
            <br>
            <label for="apellido">Apellido:</label>
            <input type="text" name="Apellido" id="Apellido" v-model="apellido">
            <br>
            <label for="monto">Monto:</label>
            <input type="text" name="Monto" id="Monto" v-model.number="monto"> 
            <br>
            <label for="dias">Periodo:</label>
            <input type="text" name="Dias" id="Dias" v-model.number="dias"> 
            <br>
            <input class="button" type="submit" value="Calcular" v-on:click="Datos">
        </form> 
          
        <ul>
            <li v-for="invert of inversion">
            {{invert.montofinal}} - {{invert.monto}} - {{invert.dias}}
            </li>
        </ul>
       
        </div>
        <br>
        <form class="contenedor">
            <label>¿Desea observar la inversión en multiples periodos? </label>
            <br>
            <button type="button" v-on:click="reinvertir">Reinvertir</button>
            <table>
                <tr>
                    <th>Periodo</th><th>Monto Inicial</th><th>Monto Final</th>
                </tr>
                <tr>
                    <td>1</td><td id="monto1"></td><td id="montofinal1"></td>
                </tr>
                <tr>
                    <td>2</td><td id="monto2"></td><td id="montofinal2"></td>
                </tr>
                <tr>
                    <td>3</td><td id="monto3"></td><td id="montofinal3"></td>
                </tr>
                <tr>
                    <td>4</td><td id="monto4"></td><td id="montofinal4"></td>
                </tr>
            </table>
            </form>
        `,
            data(){
                return{
                    inversion:[],
                    reinversion:[],
                    nombre:'',
                    apellido:'',
                    monto:null,
                    dias:null,
                    montofinal: null,
                    periodo:null  ,
                    montofinal1:null,
                }
            },
        methods:{
            Datos(){
                if (this.nombre.trim() ==="" && this.nombre.trim()===""){
                    alert("Debe ingresar un nombre");
                    comprobanteNombre=false;
                }else {comprobanteNombre=true;}
                if (this.apellido.trim() ==="" && this.apellido.trim()===""){
                    alert("Debe ingresar un apellido");
                    comprobanteApellido=false;
                }else {comprobanteApellido=true;}
                if (this.monto<=1000){
                    alert("El monto ingresado debe ser como minimo $1000 ");
                    comprobantemonto = false;
                }else {comprobantemonto=true;}
                if (this.dias <=29)
                {
                    alert("Debe ingresar un periodo valido");
                    comprobanteDias=false;
                }else {comprobanteDias=true;}
                    if (this.dias>=30 && this.dias<=60){
                        porcentaje = 40;
                        
                    }
                    if (this.dias>=61 && this.dias<=120){
                        porcentaje = 45;
                        
                    }
                    if (this.dias>=121 && this.dias<=360){
                        porcentaje=50;
                        
                    }
                    if (this.dias >= 361){
                        porcentaje=65;
                    }
                
                    if (comprobantemonto===true && comprobanteDias===true && comprobanteNombre===true && comprobanteApellido===true){
                        MontoFinal = Math.round(this.monto + this.monto*(this.dias/360)*(porcentaje/100));
                    this.inversion.push({
                    montofinal: MontoFinal,
                    periodo: this.dias,
                    monto: this.monto
                   
                    })
                    let inversiones ={
                    montofinal: MontoFinal,
                    periodo: this.dias,
                    monto: this.monto
                    } 
                    this.$emit('inversiones-enviadas',inversiones)
                    
                 }
            },

        reinvertir(){
            if (this.nombre.trim() ==="" && this.nombre.trim()===""){
                alert("Debe ingresar un nombre");
                comprobanteNombre=false;
            }else {comprobanteNombre=true;}
            if (this.apellido.trim() ==="" && this.apellido.trim()===""){
                alert("Debe ingresar un apellido");
                comprobanteApellido=false;
            }else {comprobanteApellido=true;}
            if (this.monto<=1000){
                alert("El monto ingresado debe ser como minimo $1000 ");
                comprobantemonto = false;
            }else {comprobantemonto=true;}
            if (this.dias <=29)
            {
                alert("Debe ingresar un periodo valido");
                comprobanteDias=false;
            }else {comprobanteDias=true;}
                if (this.dias>=30 && this.dias<=60){
                    porcentaje = 40;
                    
                }
                if (this.dias>=61 && this.dias<=120){
                    porcentaje = 45;
                    
                }
                if (this.dias>=121 && this.dias<=360){
                    porcentaje=50;
                    
                }
                if (this.dias >= 361){
                    porcentaje=65;
                }
            
                if (comprobantemonto===true && comprobanteDias===true && comprobanteNombre===true && comprobanteApellido===true){
                    for(i=0;i<4;i++){
                        if(i===0){
                            this.reinversion.push({
                                montofinal1: MontoFinal,
                                periodo: this.dias,
                                monto: this.monto
                             })
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
        }
    }
}) 