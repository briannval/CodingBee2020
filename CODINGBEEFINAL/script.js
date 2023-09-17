//REQUIREMENTS
//Color changer - scroll header
//Selection - 
//Looping - 
//Event listener - cart logo
//Function parameter return - item
//String manipulation (upper,lower,`loop`) - adminis 

//AsusRogZephyrusG14
//Alienware Area 51m
//Lenovo Legion Y7000
//Acer Predator Triton 500
//MSI GS65 Stealth Thi
//Razer Blade Pro 17
//Dell G5 15 SE
//Alienware m17 R2.

//validateregis
function firstname(){
  console.log("test");
  var name = document.getElementById("name").value;
  console.log(name);
    var result = "";
    for (i=0;i<=name.length-1;i++){
      if (i==0){
        result += name[i].toUpperCase();
      }
      else {
        result += name[i].toLowerCase();
      }
    }
}

function lastname(){
  var name2 = document.getElementById("name2").value;
  console.log(name2);
    var result = ""
    for (i=0;i<=name.length-1;i++){
      if (i==0){
        result += name[i].toUpperCase();
      }
      else {
        result += name[i].toLowerCase();
      }
    }
}

function gender(){
  var selection = document.getElementById("gender").value;
  console.log(selection);
}

function email(){
  var email = document.getElementById("email").value;
  var n = email.search("@");
  var n2 = email.search(".com");
  if (n<0){
    return False;
  }
  else if (n2<0){
    return False;
  }
  else{
    return True;
  }
}

function generaterandomid(){
  var randomid = parseInt(0);
  for (i=0;i<10;i++){
    randomid += Math.floor(Math.random() * 10);
  }
  return randomid;
}

function checkid(){
  var id = document.getElementById("id").value;
  if (id.length == 9){
    return True;
  }
  else {
    return False
  }
}

function confirmpassword(){
  var password = document.getElementById("pasw").value;
  if (password.length<12){
    return False;
  }
  else {
    for (i=0;i<=password.length-1;i++){
      if (password.charAt(i) >= '0' && password.charAt(i) <= '9'){
        break;
        }
      if (i==password.length-1){
        return False;
      }
    }
    for (i=0;i<=password.length-1;i++){
      if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z'){
        break
      }
      if (i==password.length-1){
        return False;
      }
    }
    for (i=0;i<=password.length-1;i++){
      if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z'){
        break
      }
      if (i==password.length-1){
        return False;
      }
    }
    return True
}
}

function checkpassword(){
  var password1 = document.getElementById("pasw").value;
  var password2 = document.getElementById("pasw2").value;
  if (pasw1==pasw2){
    return True;
  }
  else {
    return False;
  }
}

function checkage(){
  var age = document.getElementById("age").value;
  if (age < 17){
    return False;
  }
  else if (age > 100){
    return False;
  }
  else {
    return True;
  }
}

function checkcountry(){
  var country = document.getElementById("country").value;
  if (country == ""){
    return False;
  }
  else {
    return True;
}
}

function validateall(){
  if (email() == false){
    return False;
  }
}
//validateregis


//changebuttoncolor
document.getElementById("item1").addEventListener("input",changebutton(1));
document.getElementById("item2").addEventListener("input",changebutton(2));
document.getElementById("item3").addEventListener("input",changebutton(3));
document.getElementById("item4").addEventListener("input",changebutton(4));
document.getElementById("item5").addEventListener("input",changebutton(5));
document.getElementById("item6").addEventListener("input",changebutton(6));
document.getElementById("item7").addEventListener("input",changebutton(7));
document.getElementById("item8").addEventListener("input",changebutton(8));
function changebutton(a){
  if (a==1){
    if (parseInt(document.getElementById("item1").value)>0){
      document.getElementById("button1").style.backgroundColor = "#98FB98";
    }
    else {
      document.getElementById("button1").style.backgroundColor = "#E7E7E7";
    }
 }
}

//changebuttoncolor


//scrollbackgroundcolor
window.onscroll = function() {changecolor()};
function changecolor(){
  var top = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const r = top/height * 255;
  document.body.style.backgroundColor=`rgb(${r},0,255)`
}
//scrollcolor

//maketable
var item2 = document.getElementById("item2").value;
var item3 = document.getElementById("item3").value;
var item4 = document.getElementById("item4").value;
var item5 = document.getElementById("item5").value;
var item6 = document.getElementById("item6").value;
var item7 = document.getElementById("item7").value;
var item8 = document.getElementById("item8").value;
var table = "";
function itemone(){
  var item1 = document.getElementById("item1").value;
  if (item1 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"acerpredator.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Acer Predator";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item1;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemtwo(){
  var item2 = document.getElementById("item2").value;
  if (item2 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"alienwarearea51m.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Alienware Area 51M";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item2;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemthree(){
  var item3 = document.getElementById("item3").value;
  if (item3 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"alienwarem17.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Alienware M17";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item3;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemfour(){
  var item4 = document.getElementById("item4").value;
  if (item4 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"asusrogzephyrus.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Asus Rog Zephyrus 614";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item4;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemfive(){
  var item5 = document.getElementById("item5").value;
  if (item5 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"dellg5.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Dell G5";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item5;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemsix(){
  var item6 = document.getElementById("item6").value;
  if (item6 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"legion7000.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Legion 7000";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item6;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemseven(){
  var item7 = document.getElementById("item7").value;
  if (item7 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"msigs65.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Acer Predator";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item7;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}

function itemeight(){
  var item8 = document.getElementById("item8").value;
  if (item8 > 0){
    table += "<tr>";
    //picturecolumn//
    table += "<td>";
    table += "<img src=\"razerblade.jpg\">";
    table += "</td>";
    //namecolumn//
    table += "<td>";
    table += "<h2>";
    table += "Razer Blade";
    table += "</h2>"
    table += "</td>";
    //amountcolumn//
    table += "<td>";
    table += "<h2>";
    table += item8;
    table += "</h2>";
    table += "</td>";

    table += "<tr>";

    table += "</table>";
    console.log(table);
  }
}


function generatecart(){
  console.log(table);
  document.getElementById("cart").innerHTML = table;
}


//maketable