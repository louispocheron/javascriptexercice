//exercice 2,changer la couleur a chaque clique : const : definir la class de la div
const demo = document.querySelector(".demo");
console.log(demo);
var count = 0;
demo.addEventListener("click", function () {
  if (count % 2 == 0) {
    demo.style.background = "yellow";
    count++;
  } else {
    demo.style.background = "green";
    count++;
  }
  if (count % 5 == 0) {
    demo.style.background = "red";
  }
  console.log(count);
});
//exercice 3

function show_alert() {
  var name = document.getElementsByClassName("formulaire").value;
  alert("Hello " + name);
}
