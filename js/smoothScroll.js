const navBar = document.querySelector(".header__nav");
const links = navBar.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      // scrollIntoView поддерживается не всеми браузерами
      // section.scrollIntoView({
      //   block: "center",
      //   behavior: "smooth",
      // });

      //делаем scrollIntoView кроссбраузерным с помощью библиотеки seamless-scroll-polyfill
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    console.log();
  });
});
