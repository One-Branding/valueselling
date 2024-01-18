// Close dropdown
var Webflow = Webflow || [];
Webflow.push(function () {
  $(document).ready(function () {
    $(".filter-dropdown-list").on("click", function () {
      $(".w-dropdown").trigger("w-close");
    });
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        $(".w-dropdown").trigger("w-close");
      }
    });
  });
});

// Resource Hub - Scroll to top when pagination clicked
$(document).ready(function () {
  $(".pagination").click(function () {
    // Scroll to the #case-studies div
    $("html, body").animate(
      {
        scrollTop: $("#browse").offset().top
      },
      500
    );
  });
});

// Video Tab Click
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".video-tab").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      document
        .querySelectorAll(".video-tab-btn")
        .forEach((target) => target.classList.remove("is-active"));
      document
        .querySelectorAll(".video-tab-lightbox-wrapper")
        .forEach((target) => target.classList.remove("is-active"));
      this.querySelectorAll(".video-tab-btn").forEach((target) =>
        target.classList.add("is-active")
      );
      this.querySelectorAll(".video-tab-lightbox-wrapper").forEach((target) =>
        target.classList.add("is-active")
      );
    });
  });
});
