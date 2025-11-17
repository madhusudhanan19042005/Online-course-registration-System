<script>
      // Create confetti effect
      function createConfetti() {
        const container = document.getElementById("confetti-container");
        const colors = ["#4318D1", "#A990E7", "#6A48E0", "#8A6DE3"];

        for (let i = 0; i < 100; i++) {
          const confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = Math.random() * 100 + "vw";
          confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          confetti.style.width = Math.random() * 10 + 5 + "px";
          confetti.style.height = Math.random() * 10 + 5 + "px";
          confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
          confetti.style.animationDelay = Math.random() * 2 + "s";

          container.appendChild(confetti);
        }

        // Remove confetti after animation completes
        setTimeout(() => {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }, 5000);
      }

      // Run confetti on page load
      document.addEventListener("DOMContentLoaded", createConfetti);
    </script>
  </body>
</html>

