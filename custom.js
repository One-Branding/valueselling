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

// Social Share
	$(document).ready(function () {
		let title = document.title;
		let url = window.location.href;
		$('[data-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url + '%2F&title=' + title + '%3F');
		$('[data-share-facebook').attr('target', '_blank');

		$('[data-share-twitter').attr('href', 'https://twitter.com/share?url=' + url + '%2F&title=' + title + '&summary=');
		$('[data-share-twitter').attr('target', '_blank');

		$('[data-share-linkedin').attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '%2F&title=' + title + '&summary=');
		$('[data-share-linkedin').attr('target', '_blank');
		
		$('[data-share-whatsapp').attr('href', 'https://wa.me/?text=' + url);
		$('[data-share-whatsapp').attr('target', '_blank');
	});

// Copy the current URL
document.getElementById("copy-button").addEventListener("click", function() {
	// Get the current page URL
	var currentUrl = window.location.href;

	// Create a temporary input element
	var tempInput = document.createElement("input");

	// Add the current page URL to the input value
	tempInput.setAttribute("value", currentUrl);

	// Append the input to the body
	document.body.appendChild(tempInput);

	// Select the input
	tempInput.select();

	// Copy the selected text
	document.execCommand("copy");

	// Remove the input from the body
	document.body.removeChild(tempInput);

	// Update the text of the "copy-status" element
	document.getElementById("copy-status").textContent = "Copied!";
  });
