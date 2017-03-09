$(function(){
    buy_hover();
    list_imgs();
    buy_click();
});

function buy_hover() {
    $(".buy_a").hover(function () {
            $(this).addClass("tada");
        }, function () {
            $(this).removeClass("tada");
        }
    );
}

function buy_click(){
    $(".buy_a").click(function (e) {
        var explorer =navigator.userAgent;
        if(!explorer.match(/MicroMessenger/i)){  //不是微信
            return true;
        }else{ //是微信
            $("#wx").show();
            return false;
        }
    });
}

function list_imgs() {
    $(".list_imgs img").hover(function () {
            $(this).addClass("flash");
        }, function () {
            $(this).removeClass("flash");
        }
    );
}
