class BaseCalculator {
    constructor() {
        this.listeOperation = [];
        this.startTime = null;
    }
    affichage(tmp){
        document.getElementById("value").value +=tmp;
        this.listeOperation = [];
        if (this.startTime === null) {
            this.startTime = Date.now();
        }
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
                this.sendErreurAt();
            }
        }
        const timeTaken = Date.now() - this.startTime;
        this.sendTimeTaken(timeTaken);
        this.listeOperation.push(document.getElementById("value").value)
        document.getElementById("value").value = eval(document.getElementById("value").value);
    }
    back(){
       if(this.listeOperation.length > 0){
            document.getElementById("value").value = this.listeOperation;
       }
    }
    sendTimeTaken(timeTaken) {
        let date1 = new Date();
      
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});
      
        const url = 'http://localhost:3000/timer';
        const dataraw = {
          "timeTakenMS": timeTaken,
          "created_at" : dateLocale
        };
        fetch(url,{
          headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method:'POST',
          mode : 'no-cors',
          body:JSON.stringify(dataraw)
        })
      }

      sendErreurAt(){
        let date1 = new Date();
    
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});
    
        const url = 'http://localhost:3000/erreur';
        const dataraw = {
          "created_at" : dateLocale
        };
    
        fetch(url,{
          headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method:'POST',
          mode : 'no-cors',
          body:JSON.stringify(dataraw)
        })
      }
}

let baseCalculator = new BaseCalculator();


