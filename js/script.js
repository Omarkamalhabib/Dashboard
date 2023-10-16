let allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
let searchButton = document.querySelector("#content nav form .form-input button");
let searchButtonIcon = document.querySelector("#content nav form .form-input button .fas");

let searchForm = document.querySelector("#content nav form")
allSideMenu.forEach(item=> {
    let li = item.parentElement;
    item.addEventListener('click', function() {
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
// TOGGLR SIDEBAR
let menuBar = document.querySelector("#content nav .fas.fa-bars");
let sidebar = document.getElementById("sidebar");
menuBar.addEventListener("click", function(){
    sidebar.classList.toggle("hide");
})

searchButton.addEventListener("click", function(e){
if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle("show");
        if(searchForm.classList.contains("show")){
            searchButtonIcon.classList.replace("fa-search","fa-times")
        }else{
            searchButtonIcon.classList.replace("fa-times","fa-search")
        }
    }
}) 
if(window.innerWidth < 768){
    sidebar.classList.add("hide")
}else if(window.innerWidth > 576){
    searchButtonIcon.classList.replace("fa-times","fa-search")
    searchForm.classList.remove("show");
}
window.addEventListener("resize", function () {
    if(this.innerWidth > 576){
        searchButtonIcon.classList.replace("fa-times","fa-search")
        searchForm.classList.remove("show");
    }
})