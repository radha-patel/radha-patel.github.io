about = document.getElementById("aboutButton")
projects = document.getElementById("projectsButton")
blog = document.getElementById("blogButton")

about.onclick = function () {
    location.href = 'about.html';
};

projects.onclick = function () {
    location.href = 'projects.html';
};

blog.onclick = function () {
    location.href = 'blog.html';
};

function mouseOver (obj) {
    obj.style.backgroundColor = '#E0CCF2'
    obj.querySelectorAll("p")[0].style.marginTop = '19px'
}

function mouseOut (obj) {
    obj.style.backgroundColor = 'rgb(241, 241, 241)'
    obj.querySelectorAll("p")[0].style.marginTop = '20px'
}

function showdiv() {
    document.getElementById('description').style.opacity = '100%';
}

setTimeout('showdiv()', 4000);