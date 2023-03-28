class BaseCalculator {
    constructor() {
     // Do some stuff
     }
    affichage(tmp){
        document.getElementById("value").value +=tmp;
    }
    supprimer(){
        document.getElementById("value").value = ' '
    }
    calcul(){
        document.getElementById("value").value = eval(document.getElementById("value").value);
    } 
}

let baseCalculator = new BaseCalculator();