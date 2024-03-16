const element = document.querySelectorAll(".element");

element.forEach(function (ele) {
    console.log(ele.childNodes[3]);
    ele.addEventListener("mouseenter", function (e) {
        ele.childNodes[3].style.opacity = 1;
    });
    ele.addEventListener("mouseover", function (e) {
        ele.childNodes[3].style.left = `${e.x}px`;
    });
    ele.addEventListener("mouseleave", function (e) {
        ele.childNodes[3].style.opacity = 0;
    });
});
