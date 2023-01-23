$().ready(function () {

    $(".burger").click(function () {

        if ($(".burger i").hasClass("fa-solid fa-bars")) {
            $(".burger i").removeClass("fa-solid fa-bars");
            $(".burger i").addClass("fa-solid fa-square-xmark");
        } else {
            $(".burger i").removeClass("fa-solid fa-square-xmark");
            $(".burger i").addClass("fa-solid fa-bars");
        }

        $(".navigation").toggleClass("open");
        $(".navigation-list").toggleClass("open");
        $(".navigation-list-item").toggleClass("open-li");
        $("body").toggleClass("fixed-page");
    });

    $(".navigation-list-item").click(function () {

        if ($(".burger i").hasClass("fa-solid fa-bars")) {
            $(".burger i").removeClass("fa-solid fa-bars");
            $(".burger i").addClass("fa-solid fa-square-xmark");
        } else {
            $(".burger i").removeClass("fa-solid fa-square-xmark");
            $(".burger i").addClass("fa-solid fa-bars");
        }
        
        $(".navigation").toggleClass("open");
        $(".navigation-list").toggleClass("open");
        $(".navigation-list-item").toggleClass("open-li");
        $("body").toggleClass("fixed-page");
    });

});