"use strict";window.addEventListener("load",(function(){setTimeout((function(){document.getElementById("preloader").style.display="none"}),1e3)}));const addEventOnElem=function(e,t,a){if(e.length>1)for(let n=0;n<e.length;n++)e[n].addEventListener(t,a);else e.addEventListener(t,a)},navbar=document.querySelector("[data-navbar]"),navToggler=document.querySelector("[data-nav-toggler]"),navLinks=document.querySelectorAll("[data-nav-link]"),toggleNavbar=function(){navbar.classList.toggle("active")};addEventOnElem(navToggler,"click",toggleNavbar);const closeNavbar=function(){navbar.classList.remove("active")};addEventOnElem(navLinks,"click",closeNavbar);const header=document.querySelector("[data-header]"),backTopBtn=document.querySelector("[data-back-top-btn]");window.addEventListener("scroll",(function(){window.scrollY>100?(header.classList.add("active"),backTopBtn.classList.add("active")):(header.classList.remove("active"),backTopBtn.classList.remove("active"))}));
