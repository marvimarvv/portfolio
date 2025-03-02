export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("particles", () => {
    const particles = () => {
      var ROWS = 0,
        COLS = 0,
        NUM_PARTICLES = ROWS * COLS,
        THICKNESS = Math.pow(80, 2),
        SPACING = 3,
        MARGIN = 0,
        DRAG = 0.95,
        EASE = 0.25,
        container,
        particle,
        canvas,
        mouse,
        stats,
        list,
        ctx,
        tog,
        man,
        dx,
        dy,
        mx,
        my,
        d,
        t,
        f,
        a,
        b,
        i,
        n,
        w,
        h,
        p;

      // Get the current value of the --heading-color CSS variable which is a contrasting color to the background
      let colorVariable = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--heading-color");

      // Extract the lightness value from the hsl color
      let hslRegex = /hsl\(\d+ \d+% (\d+)%\)/;
      let match = colorVariable.match(hslRegex);
      let lightness;

      // Set the color based on the lightness value
      if (match) {
        lightness = parseInt(match[1], 10);
        if (lightness < 50) {
          var COLOR = 20;
        } else {
          var COLOR = 220;
        }
      } else {
        console.log("colorVariable does not match hslRegex:", colorVariable);
      }

      particle = {
        vx: 0,
        vy: 0,
        x: 0,
        y: 0,
      };

      function init() {
        container = document.getElementById("intro__particles");
        canvas = document.createElement("canvas");
        canvas.ariaLabel = "Moving particles on a rectangular grid";

        ctx = canvas.getContext("2d");
        man = false;
        tog = true;

        list = [];

        w = canvas.width = container.clientWidth;
        h = canvas.height = container.clientHeight;

        ROWS = h / SPACING;
        COLS = w / SPACING;

        NUM_PARTICLES = ROWS * COLS;

        for (i = 0; i < NUM_PARTICLES; i++) {
          p = Object.create(particle);
          p.x = p.ox = MARGIN + SPACING * (i % COLS);
          p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);

          list[i] = p;
        }

        // Only attach mousemove listener if prefers-reduced-motion is not set
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          container.addEventListener("mousemove", function (e) {
            var bounds = container.getBoundingClientRect();
            mx = e.clientX - bounds.left;
            my = e.clientY - bounds.top;
            man = true;
          });
        }

        if (typeof Stats === "function") {
          document.body.appendChild((stats = new Stats()).domElement);
        }

        container.appendChild(canvas);

        window.addEventListener("resize", () => {
          w = canvas.width = container.clientWidth;
          h = canvas.height = container.clientHeight;
        });

        const html = document.querySelector("html");

        // Function to update background color based on class
        function updateColor() {
          if (html.classList.contains("light-theme")) {
            COLOR = 20;
          } else if (html.classList.contains("dark-theme")) {
            COLOR = 220;
          } else if (html.classList.contains("contrast-theme")) {
            COLOR = 20;
          }
        }

        // Create a MutationObserver instance
        let observer = new MutationObserver(updateColor);

        // Start observing the target element for configured mutations
        observer.observe(html, {
          attributes: true,
          attributeFilter: ["class"],
        });
      }

      function step() {
        // Return early if prefers-reduced-motion is set
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        if (stats) stats.begin();

        if ((tog = !tog)) {
          if (!man) {
            t = +new Date() * 0.001;
            mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
            my =
              h * 0.5 +
              Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
          }

          for (i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];

            d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
            f = -THICKNESS / d;

            if (d < THICKNESS) {
              t = Math.atan2(dy, dx);
              p.vx += f * Math.cos(t);
              p.vy += f * Math.sin(t);
            }

            p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
            p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
          }
        } else {
          b = (a = ctx.createImageData(w, h)).data;

          for (i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];
            (b[(n = (~~p.x + ~~p.y * w) * 4)] = b[n + 1] = b[n + 2] = COLOR),
              (b[n + 3] = 255);
          }

          ctx.putImageData(a, 0, 0);
        }

        if (stats) stats.end();

        requestAnimationFrame(step);
      }

      setTimeout(() => {
        init();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          step();
        }
      }, 0);
    };

    particles();
  });
});
