function showPage(){document.body.className=document.body.className.replace("js-loading","")}function scrollFunction(){20<document.body.scrollTop||20<document.documentElement.scrollTop&&window.innerHeight+window.scrollY<document.body.scrollHeight?(document.getElementById("logobox").style.height="9rem",document.getElementById("header").style.height="10rem"):(document.getElementById("logobox").style.height="0",document.getElementById("header").style.height="5rem")}document.body.className+=" js-loading",window.addEventListener("load",showPage,!1),window.addEventListener("scroll",scrollFunction);