function affichage(tmp){
    document.getElementById("value").value +=tmp;
}
function supprimer(){
    document.getElementById("value").value = ' '
}
function calcul(){
    document.getElementById("value").value = eval(document.getElementById("value").value);
} 