//функція onClick під час натискання кнопки
  function changeText() {
    var textElement = document.getElementById("#menu-toggle");
    var checkbox = document.getElementById("#menu-toggle");

    // міняються слова
    if (checkbox.checked) {
      textElement.innerHTML = "CLOSE";
      document.body.classList.add("menu-open");
    } else {
      textElement.innerHTML = "MENU";
      document.body.classList.remove("menu-open");
    }

    //міняє колір рамки кнопки класу button-1
    var element = document.getElementById("#menu-toggle");
    element.style.borderColor = "#FFF";
  }

//функція для закриття меню, після того як вибрали один із його пунктів
function closeMenu() {
  var checkbox = document.getElementById("#menu-toggle");
  checkbox.checked = false;
  changeText();
}

//команда для переслідування курсора
document.addEventListener("mousemove", function(event) {
  var follower = document.getElementById("follower");
  var x = event.clientX;
  var y = event.clientY;
  follower.style.left = x + "px";
  follower.style.top = y + "px";
});