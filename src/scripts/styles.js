let listBtn = document.getElementById('listBtn')
let hearthBtn = document.getElementById('hearthBtn')
let creditBtn = document.getElementById('creditBtn')
let gearBtn = document.getElementById('gearBtn')
let searchBtn = document.getElementById('searchBtn')
let searchInput = document.getElementById('searchInput')
let bookmarkBtn = document.getElementById('bookmarkBtn')

window.onresize = function (){
    if (window.matchMedia("(min-width: 768px)").matches) {
        listBtn.style.display = "inherit";
        hearthBtn.style.display = "inherit";
        creditBtn.style.display = "inherit";
        gearBtn.style.display = "inherit";
      }else{
        listBtn.style.display = "none";
        hearthBtn.style.display = "none";
        creditBtn.style.display = "none";
        gearBtn.style.display = "none";
      }
}

searchBtn.onclick = function(e){
    e.preventDefault()
    searchInput.style.display = "inherit";
    searchInput.focus()
}

window.onclick = function(e){
    if(e.target != searchInput && e.target.parentElement != searchBtn){
        searchInput.blur()
        searchInput.style.display = "none";
    }
}