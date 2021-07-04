
window.onscroll = function(){
    var x = document.getElementById("NavBar");
    x.classList.add("StickOnTop");
}

function hoverin(x)
{
    x.style.color = "red";
}

function hoverout(x)
{
    if(x.classList.contains("active"))
        x.style.color="black";
    else
        x.style.color = "white"
}

counter=2;
total_images=5;
function changeImage()
{
    var str1 = "../img/movies";
    var str2 = ".jpg";
    x = document.getElementById("slideshow");
    x.src = str1.concat(counter,str2);
    counter++;
    if(counter>total_images)
        counter=1;
}

var array=[];
var number=0;
function AddtoSkillTable()
{
    var table = document.getElementById("EnterData");
    var form = document.getElementById("SkillForm");

    var n = document.getElementById("name").value;	
    var s = document.getElementById("skill").value;
    var l = document.getElementById("proficiency").value;
    if(!n || !s || !l)
        return;

    array.push({name:n, skill:s, prof:l});
    var newrow = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    cell1.innerHTML = array[number].name;
    newrow.appendChild(cell1);
    cell2.innerHTML = array[number].skill;
    newrow.appendChild(cell2);
    cell3.innerHTML = array[number].prof;
    newrow.appendChild(cell3);
    table.appendChild(newrow);
    form.reset();
    number++;
}