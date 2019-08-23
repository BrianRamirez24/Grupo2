

class Grupo2 {
    constructor(nombre, mensaje) {
        
        this.nombre = nombre;
        this.mensaje = mensaje;
        
    }
    
}





let nombre1 = [new Grupo2('daniel', '¿hola como estan?'),
               new Grupo2('Brian', 'bien y vos que contas?'),
               new Grupo2('natalia', 'bien y ustedes'),
               new Grupo2('santiago', 'bien gracias '),
               new Grupo2('conie', 'hola soy leo')
                ];
let aleatorio;
               for(let i=0; i<nombre1.length; i++){
                aleatorio = Math.floor(Math.random()*5)-1;
                if(aleatorio>=0 && aleatorio<nombre1.length){
                    console.log(nombre1[i]);
                }
                    

               }
               
