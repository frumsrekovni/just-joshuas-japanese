const darkeningElement = document.getElementById("page-darkener") as HTMLElement;

function darkenPage(){
    darkeningElement.style.display = "block";
}
function undarkenPage(){
    darkeningElement.style.display = "none";
}