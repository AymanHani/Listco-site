let icon = document.getElementById('icon');
let UlList = document.getElementById('UlList');
let spanone = document.getElementById('spanone');
let ulspan = document.getElementById('ulspan');
let link = document.getElementById('link');


icon.onclick = function() {
    UlList.classList.toggle('active')
}


spanone.onclick = function() {
    ulspan.classList.toggle('show')
}

link.onclick = function() {
    alert("Demo site")
}