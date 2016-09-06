$(function(){
    buy_hover();
    list_imgs();
});

function buy_hover() {
    $(".buy_a").hover(function () {
            $(this).addClass("tada");
        }, function () {
            $(this).removeClass("tada");
        }
    );
}

function list_imgs() {
    $(".list_imgs img").hover(function () {
            $(this).addClass("flash");
        }, function () {
            $(this).removeClass("flash");
        }
    );
}