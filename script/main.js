window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAAAw0zpVv_VYMzLTh",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(() => {
      }, 2000);
    },
  });
};
