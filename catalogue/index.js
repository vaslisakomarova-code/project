const carpets = document.getElementById("hid_container");
const hide_button_c = document.getElementById("hide_button_c");
const hide_button_p = document.getElementById("hide_button_p");
const example = document.getElementById("row_ex");
const pads = document.getElementById("hid_container_p");
var is_hidden = {
    "carpets": [carpets, 1, hide_button_c],
    "pads": [pads, 1, hide_button_p]
}
for (var arg in is_hidden){
    hide(arg,false);
}
window.addEventListener("resize",()=>{
    for(var arg in is_hidden){
        hide(arg, false);
    }
})

function hide(arg, is_clicked){
    if (is_clicked){
        if(is_hidden[arg][1] === 0){
            is_hidden[arg][0].style.height = example.offsetHeight + "px";
            is_hidden[arg][1] = 1;
            is_hidden[arg][2].textContent = 'Показать';
        }
        else{
            is_hidden[arg][0].style.height = "fit-content";
            is_hidden[arg][1] = 0;
            is_hidden[arg][2].textContent = 'Скрыть';
        }
    }
    else{
        if(is_hidden[arg][1] === 1){
            is_hidden[arg][0].style.height = example.offsetHeight + "px";
        }
        else{
            is_hidden[arg][0].style.height = "fit-content";
        }
    }
}