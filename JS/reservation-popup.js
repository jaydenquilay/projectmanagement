document.addEventListener("DOMContentLoaded", function () {
    // Load Popup 1 HTML
    fetch("reservation-popup1.html")
      .then((res) => res.text())
      .then((html) => {
        document.getElementById("reservation-popup-container").innerHTML = html;
        initPopup1();
      });
  });
  
  function initPopup1() {
    // Show popup 1 on Book a Table click
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("reservation-popup-1").style.display = "flex";
      });
    });
  
    // Close popup 1
    window.closeReservationPopup = function () {
      document.getElementById("reservation-popup-1").style.display = "none";
    };
  


    window.openReservationPopup2 = function () {
        document.getElementById("reservation-popup-1").style.display = "none";
        document.getElementById("reservation-popup-2").style.display = "flex";
      };
  }

  function openReservationPopup2() {
    document.getElementById("reservation-popup-2").style.display = "flex";
  }
  
  function closeReservationPopup2() {
    document.getElementById("reservation-popup-2").style.display = "none";
  }