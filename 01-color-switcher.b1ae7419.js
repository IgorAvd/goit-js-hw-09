function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),d=document.querySelector("body");let o=null;e.addEventListener("click",(function(){e.setAttribute("disabled","true"),r.removeAttribute("disabled"),d.style.backgroundColor=t(),o=setInterval((()=>{d.style.backgroundColor=t()}),1e3)})),r.addEventListener("click",(function(){r.setAttribute("disabled","true"),e.removeAttribute("disabled"),clearInterval(o)})),r.setAttribute("disabled","true");
//# sourceMappingURL=01-color-switcher.b1ae7419.js.map