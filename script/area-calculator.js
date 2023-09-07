function calculateTriangleArea() {
    const baseFieldValue = document.getElementById('triangle-base');
    const baseValue = baseFieldValue.value;
    const base = parseFloat(baseValue);
    console.log(base);
    baseFieldValue.value = '';
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area)
    heightField.value = '';
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;




}
function claculateRectangleArea() {
    const rectangleValue = document.getElementById('rectangle-width');
    const rectangleValueText = rectangleValue.value;
    const width = parseFloat(rectangleValueText);
    console.log(width);
    rectangleValue.value = '';
    const lengthFieldArea = document.getElementById('rectangle-length');
    const lengthValueText = lengthFieldArea.value;
    const length = parseFloat(lengthValueText);
    console.log(length);
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }
    lengthFieldArea.value = '';
    area = width * length;
    console.log(area);
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
   




}

function calculateParalleloramArea() {
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    if(isNaN(base) || isNaN(height)){
        alert('Plaese valid a number');
        return;
    }
    area = base * height;
    // const parallelogramArea = document.getElementById('parallelogram-area');
    // parallelogramArea.innerText = area;
    setElemnetInnerText('parallelogram-area', area);




}
function calculateEllipseArea(){
    const majorRaduis = getInputValue('ellipse-large');
    const minorRajius = getInputValue('ellipse-short');
    const area = 3.1416 * majorRaduis * minorRajius;
    const areaTwoDecimal= area.toFixed(2);
    setElemnetInnerText('ellipse-area', areaTwoDecimal);
}
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;    
}
function setElemnetInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
// Data validation 

