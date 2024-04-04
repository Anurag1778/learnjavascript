// type,timestamp,defaultPrevented
// target , toElement,srcElement,currentTarget,
//clientX,clientY,screenX,screenY
// altKey,ctrKey,shiftKey,keyCode

document.getElementById("images").addEventListener("click", function (e) {
  console.log(`Clicked inside the ul`);
});
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log(`Clicked inside the ul`);
  },
  true
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log(` inside owl`);
  },
  true
);
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log(`Clicked inside the ul`);
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log(` inside owl`);
    e.stopPropagation();
  },
  false
);

document.querySelector("images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    let removeIt = e.target.parentNode;
    //   removeIt.remove();
    removeIt.parentNode.removeChild(removeIt);
  }
});
