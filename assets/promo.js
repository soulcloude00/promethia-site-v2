/* Promo: Promethia's guide. Encourages and asks questions; never gives answers. */
(function () {
  var tips = [
    "I won't give you the answer. I'll help you find it!",
    "Mistakes mean you're trying. Try again!",
    "What would happen if you tested it?",
    "Say it out loud. Your idea matters!",
    "Stuck? Break it into a smaller step.",
    "Build it first. Make it better next."
  ];
  var bubble = document.getElementById("promo-bubble");
  var promo = document.getElementById("promo");
  if (!bubble || !promo) return;
  var i = 0;
  function next() { i = (i + 1) % tips.length; bubble.textContent = tips[i]; }
  bubble.addEventListener("click", next);
  promo.addEventListener("click", next);
})();
