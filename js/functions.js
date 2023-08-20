function setTextValue(textValue){

    const inputText = document.getElementById('input-text');
    const count = inputText.childElementCount;
    let p = document.createElement('p');
    p.innerHTML = `${count+1}. ${textValue}`;
    inputText.appendChild(p) ;

}

function getTextValue(fieldId){
    const parent = document.getElementById(fieldId);
    const text = parent.children[1].children[1].textContent;
    return text;
}
