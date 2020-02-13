$("document").ready(function () {
    $(".product__btn").on("click", function () {
        $(".popup-window").addClass("popup-window-active");
    });
    $(".close").on("click", function () {
        $(".popup-window").removeClass("popup-window-active");
    });
    $(".continue").on("click", function () {
        $(".popup-window").removeClass("popup-window-active");
    });
    $(".popup-window").on("click", function () {
        $(".popup-window").removeClass("popup-window-active");
    });
});
