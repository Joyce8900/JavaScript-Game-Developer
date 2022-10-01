function clique() {
    document.getElementById("Valeu").innerHTML = "<b> Obrigada </b>";
    //console.log(document.getElementById("Valeu"));
}

function redirecionar(){
    window.open("https://github.com/Joyce8900");
    // window.location.href = "https://github.com/Joyce8900";
}

function tocar(elemento){
    // document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    console.log(document.getElementById("mousemove"));
    //window.open("https://github.com/Joyce8900");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML= "Obrigada por passa o mouse aqui";
    elemento.innerHTML= "Obrigada por passa o mouse aqui";
}
function lond (){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}