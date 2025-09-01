function addCaracter(caracter){
    const valorDisplay= document.querySelector(".display").textContent;

    document.querySelector(".display").textContent = valorDisplay + caracter;
};

function clearDisplay(){
    document.querySelector(".display").textContent = "";
    document.querySelector(".historico").textContent = "";
};

function calcular(){
    const valorDisplay= document.querySelector(".display").textContent;

    document.querySelector(".historico").textContent = valorDisplay;

    document.querySelector(".display").textContent = eval(valorDisplay);

}

function inverseNumber(){
    const valorDisplay= document.querySelector(".display").textContent;

    document.querySelector(".display").textContent = valorDisplay * -1;
}