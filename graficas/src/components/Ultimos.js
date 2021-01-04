import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Ultimos extends Component{
    
   Nombres = [];
   Locaciones = [];
   Edades = [];
   Tipo =[];
   Estado= [];
  
    async USAGE_ULTIMOS5CASOS(){
      //  console.log("aaaquuuiii");
       // var url = "https://api.allorigins.win/raw?url=http://us-central1-carbon-web-299323.cloudfunctions.net/redis-func"
       //var url = "https://cors-anywhere.herokuapp.com/http://us-central1-carbon-web-299323.cloudfunctions.net/redis-func"
       var url = "http://us-central1-carbon-web-299323.cloudfunctions.net/redis-func"
       fetch(url)
        .then(res => res.json())
        .then((data) => {
                   
            //this.PDepartamento = data;
           for(let i=0;i<5;i++){
            this.Nombres.push(data[i].name);
            this.Locaciones.push(data[i].location);
            this.Edades.push(data[i].age);
            this.Tipo.push(data[i].infected_type);
            this.Estado.push(data[i].state);            
           }
            console.log(data);
        }).catch(function() {
           // alert("Can't connect to backend try latter");
          });

         
    }

  
    render(){
        this.USAGE_ULTIMOS5CASOS();
        return(
            
            <div>
                <div>
                <h1 class="text-center">Últimos 5 casos </h1>
                </div>
                <div>
                    <table className="table">
                        <thead className="bg-info">
                            <tr>
                                <th>Nombre</th>
                                <th>Locación</th>
                                <th>Edad</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{this.Nombres[0]} </th>
                                <th>{this.Locaciones[0]}</th>
                                <th>{this.Edades[0]}</th>
                                <th>{this.Tipo[0]}</th>
                                <th>{this.Estado[0]}</th>
                            </tr>
                            <tr>
                                <th>{this.Nombres[1]} </th>
                                <th>{this.Locaciones[1]}</th>
                                <th>{this.Edades[1]}</th>
                                <th>{this.Tipo[1]}</th>
                                <th>{this.Estado[1]}</th>
                            </tr>
                            <tr>
                                <th>{this.Nombres[2]} </th>
                                <th>{this.Locaciones[2]}</th>
                                <th>{this.Edades[2]}</th>
                                <th>{this.Tipo[2]}</th>
                                <th>{this.Estado[2]}</th>
                            </tr>
                            <tr>
                                <th>{this.Nombres[3]} </th>
                                <th>{this.Locaciones[3]}</th>
                                <th>{this.Edades[3]}</th>
                                <th>{this.Tipo[3]}</th>
                                <th>{this.Estado[3]}</th>
                            </tr>
                            <tr>
                                <th>{this.Nombres[4]} </th>
                                <th>{this.Locaciones[4]}</th>
                                <th>{this.Edades[4]}</th>
                                <th>{this.Tipo[4]}</th>
                                <th>{this.Estado[4]}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Ultimos