class BaseCalculator {
    
    constructor() {
        this.listeOperation = [];
    }
    
    affichage(tmp){
        document.getElementById("value").value +=tmp;
        this.listeOperation = [];
    }
    supprimer(){
        document.getElementById("value").value = ' ';
        
    }
    calcul(){

        try {
            eval(document.getElementById("value").value); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
            }
        }
        
        this.listeOperation.push(document.getElementById("value").value)
        document.getElementById("value").value = eval(document.getElementById("value").value);
    }
    back(){
       if(this.listeOperation.length > 0){
            document.getElementById("value").value = this.listeOperation;
       }
    }
}

let baseCalculator = new BaseCalculator();