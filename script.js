window.onload = () => {
  setTimeout(() => {
      document.body.classList.remove("not-loaded");
      document.getElementById("landing-page").style.transition = "opacity 1s";
      document.getElementById("landing-page").style.opacity = "0";
      
      setTimeout(() => {
          document.getElementById("landing-page").style.display = "none";
          document.getElementById("flower-animation").style.display = "block";
          document.getElementById("flower-animation").style.transition = "opacity 1s";
          document.getElementById("flower-animation").style.opacity = "1";
      }, 1000);
  }, 1000);
};