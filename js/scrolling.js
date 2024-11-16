window.onload = function () {
  const logoContainer = document.querySelector(".logo-container");
  const logoRow = document.querySelector(".logo-row");

  // Duplicate the content inside the logo row to create the infinite scrolling effect
  const logos = logoRow.cloneNode(true);
  logoContainer.appendChild(logos);

  // Adjust the animation speed based on the width of the container
  const containerWidth = logoContainer.offsetWidth;
  const scrollDuration = containerWidth / 50; // Adjust for faster scrolling (higher divisor = faster scroll)

  // Set the animation speed to make it faster
  logoContainer.style.animationDuration = `${scrollDuration}s`;
};
