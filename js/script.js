const contents = document.querySelectorAll(".program-line__content");

contents.forEach((element, i) => {
  const title = element.querySelector(".program-line__title");
  const descr = element.querySelector(".program-line__descr");
  // событие click на элемент с классом .program-line__title
  title.addEventListener("click", () => {
    // пробегаемся еще раз по коллекции элементов с классом .program-line__content
    contents.forEach((el, ind) => {
      // повторно выбираем элемент с классом .program-line__descr
      const des = el.querySelector(".program-line__descr");
      // проверяем условие
      if (i !== ind) {
        des.classList.remove("active");
      } else {
        return;
      }
    });

    descr.classList.toggle("active");
  });
});
