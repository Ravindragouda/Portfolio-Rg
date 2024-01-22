$(document).ready(function () {
    $(".menu-bar").click(function () {
      $(".nav-links").toggleClass("active");
    });
  
    $(".menu-close").click(function () {
      $(".nav-links").toggleClass("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const nameParagraph = document.querySelector("#text-container .name span");
    const positionParagraph = document.querySelector("#text-container .title span");
  
    animateText(nameParagraph);
    animateText(positionParagraph, 500); // Adding a delay of 0.5s for the position
  
    function animateText(element, delay = 0) {
      const text = element.textContent;
      element.textContent = "";
  
      for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animation = `appear 1s ${delay + i * 0.1}s forwards`;
        element.appendChild(span);
      }
    }
  });
  
  