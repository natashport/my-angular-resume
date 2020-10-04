$(document).ready(function () {
  let animateItems = document.querySelectorAll("._animate");
  const num = animateItems.length;
  console.log("num: ", animateItems.length);

  if (num > 0) {
    window.addEventListener("scroll", animateOnScroll);

    function animateOnScroll() {
      for (let i = 0; i < num; i++) {
        const animateItem = animateItems[i];
        const animateItemHeight = animateItem.offsetHeight;
        const animateItemOffset = offset(animateItem).top;
        const animateStart = 10;

        let animatePoint =
          window.innerHeight - animateItemHeight / animateStart;
        if (animateItemHeight > window.innerHeight) {
          animatePoint = window.innerHeight - window.innerHeight / animateStart;
        }
        if (
          pageYOffset > animateItemOffset - animatePoint &&
          pageYOffset < animateItemOffset + animateItemHeight
        ) {
          animateItem.classList.add("_active");
        } else {
          if (animateItem.classList.contains("_hide")) {
            animateItem.classList.remove("_active");
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animateOnScroll();
    }, 300);
  }
});
