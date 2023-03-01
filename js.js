function FocusBox(NameTxt){
    NameTxt.style.background="yellow";
}

function BlurBox(NameTxt){
    NameTxt.style.background="white";
}

function SelectedMenu(){
    const selected = document.getElementById('menu');
    const selectedTxt = document.getElementById('selected');

    choose = selected.value;
    selectedTxt.innerText ="" + choose;
}    