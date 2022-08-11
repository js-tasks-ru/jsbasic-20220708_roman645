function toggleText() {
  let txt = document.getElementById("text");
  let tglTxtBtn = document.querySelector(".toggle-text-button");

  tglTxtBtn.addEventListener('click', hiddenCheck);
  
  function hiddenCheck() {
    if (txt.hidden === true) {
      txt.hidden = false;
    } else {
      txt.hidden = true;
    };
  };
};