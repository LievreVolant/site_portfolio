function myFunction() {
  let menu = document.getElementById("burger");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
