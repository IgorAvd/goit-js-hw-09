!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;e.addEventListener("click",(function(){e.setAttribute("disabled","true"),r.removeAttribute("disabled"),n.style.backgroundColor=t(),o=setInterval((function(){n.style.backgroundColor=t()}),1e3)})),r.addEventListener("click",(function(){r.setAttribute("disabled","true"),e.removeAttribute("disabled"),clearInterval(o)})),r.setAttribute("disabled","true")}();
//# sourceMappingURL=01-color-switcher.74d534dc.js.map