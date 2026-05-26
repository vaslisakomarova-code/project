const scroll_container = document.getElementById('scroll_container');

function right_scroll(){
    scroll_container.scrollTo({
        left: scroll_container.scrollLeft +  0.35*window.innerWidth,
        behavior : 'smooth'
    });
}
function left_scroll(){
    scroll_container.scrollTo({
        left: scroll_container.scrollLeft -  0.35*window.innerWidth,
        behavior : 'smooth'
    });
}