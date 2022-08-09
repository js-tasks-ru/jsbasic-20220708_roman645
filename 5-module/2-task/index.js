function toggleText() {
let tglTxtBtn = document.getElementById("text");
  if (tglTxtBtn.hidden === true) {
    tglTxtBtn.hidden = false;
  } else {
    tglTxtBtn.hidden = true;
  }
  document.addEventListener('click', toggleText, );
}