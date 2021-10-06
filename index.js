let ViewModel = {
    primeiro : "1",
    segundo : "2",
    terceiro : "3",
}
console.log("ViewModel 2", ViewModel)
const alteraValorComString = (string, data) =>{
    ViewModel[string] = data; 
}

alteraValorComString("primeiro", "editado");
alteraValorComString("segundo", "editado");
alteraValorComString("terceiro", "editado");

console.log("ViewModel 2", ViewModel)
