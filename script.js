const faqs = document.querySelectorAll("ul li a");

const toggle = (event) => {
  event.preventDefault();
  const li = event.target.closest("li");

  if (li.classList.contains("expand")) {
    li.classList.remove("expand");
    li.querySelector(".answer").setAttribute("style", `height: 0px`);
  } else {
    li.classList.add("expand");
    const sectionHeight = li.querySelector(".answer").scrollHeight;
    li.querySelector(".answer").setAttribute(
      "style",
      `height: ${sectionHeight}px`
    );
  }
};

for (let index = 0; index < faqs.length; index++) {
  faqs[index].addEventListener("click", toggle);
}
