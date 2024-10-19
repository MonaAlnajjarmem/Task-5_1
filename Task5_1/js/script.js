// const calculatorContainer=document.getElementById("calculaor_container");
// const displayArea =document.getElementById("display_area");
// calculatorContainer.addEventListener('click', e=>{
//     if( )
// })
// function clear()
// {
//     displayArea.textContent="";

// }
// function addToArea(value){
//     displayArea.textContent=  displayArea.textContent + value;
// }
const display = document.getElementById('display');
const mm=document.getElementById('#m');
const a=document.querySelector('.aa');
const resultSpan = document.querySelector(".result");

// mm.addEventListener( 'click ' ,function() {
//     inp('/');
// });

let currentInput = '';
let previousInput = '';
let operation = '';

function inp (value){
    display.value+= value;

    let result = 0;
const currentInput=parseFloat(previousInput);
const current = parseFloat(currentInput);
switch (operation) {
    case '/':
        result = prev / current;
        break;
    // يمكنك إضافة عمليات أخرى مثل + و - و * هنا
    default:
        return; // إذا لم يكن هناك عملية، لا تفعل شيئًا
}
    // display.value +=mm.value; // إضافة القيمة إلى الشاشة

    // display.value= value+mm+value;
    
}

function appendToDisplay(value) {

    display.value += value; // إضافة القيمة إلى الشاشة
    updateDisplay();
}
function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentInput || '0'; // إذا لم يكن هناك إدخال، عرض 0
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // مسح الشاشة
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // حساب النتيجة
    } catch (error) {
        display.value = 'خطأ'; // التعامل مع الأخطاء
    }
}