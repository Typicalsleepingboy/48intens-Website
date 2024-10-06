window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAAAw0zpVv_VYMzLTh",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(() => {
        document.querySelector(".cloudfare").style.display = "flex";
        document.getElementById("myWidget").style.display = "none";
      }, 2000);
    },
  });
};
