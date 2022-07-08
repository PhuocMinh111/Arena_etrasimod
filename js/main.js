var owl = $(".owl-carousel");
var slide3 = $("owl-carousel .slide-3");
$(document).ready(function () {
  owl.owlCarousel({
    items: 1,
    center: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
  });
});
$(".click_area .next").click(function () {
  owl.trigger("to.owl.carousel", 4, [1000]);
  checkPage();
  setTimeout(() => {
    $("#nav").addClass("show");
    interval();
  }, 1000);
});
$(".click_area .prev").click(function () {
  owl.trigger("to.owl.carousel", 2, [1000]);
  setTimeout(() => {
    $("#nav").addClass("show");
  }, 1000);
});

$(".click_area .prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$("#nav #nav-click .next").click(function () {
  let click = false;
  owl.trigger("next.owl.carousel");
  checkPage();
  interval();
  // nextPage(true);
});
$("#nav #nav-click .prev").click(function () {
  owl.trigger("prev.owl.carousel");
  checkPage();
  interval();
});
$("#nav #nav-click .home").click(function () {
  owl.trigger("to.owl.carousel", 0, [200]);
  $("#nav").removeClass("show");
});

// // function nextPage(click) {
// //     const id = $('.owl-stage .active div').attr('id');
// //     const pageNum = id.charAt(id.length - 1);
// //     $(` #page-${pageNum + 1} .content`).toggleClass('right', click);
// //     $(` #page-${pageNum} .content`).toggleClass('content-show', click);
// }
var checkPage = function () {
  setTimeout(() => {
    var currentPage = document
      .querySelector(".owl-item.active")
      .firstElementChild.getAttribute("data-slide");
    var pages = document.querySelectorAll(".owl-item .title");
    pages.forEach((page) => {
      var attr = page.getAttribute("data-page");
      page.classList.toggle("text-left", attr > currentPage);
      page.classList.toggle("text-right", attr < currentPage);
    });
  }, 100);
};
var interval = function () {
  var currentPage = document
    .querySelector(".owl-item.active")
    .firstElementChild.getAttribute("data-slide");
  console.log(currentPage);
  var pages = document.querySelectorAll(".owl-item .title");
  pages.forEach((page) => {
    page.classList.toggle("text-show", attr == currentPage);
  });
};
checkPage();
