
var scrolltime = null;
$(document).ready(function () { //在文档加载完毕后执行
    $(window).scroll(function () { //开始监听滚动条


        // 防抖
        if (scrolltime != null) {
            clearInterval(scrolltime);
        }
        scrolltime = setTimeout(function () {
            //获取当前滚动条高度
            var topp = $(document).scrollTop();
            console.log(topp)
            if (topp > 550) {
                $(".back-to-top").animate({
                    right: "0"
                }, 500);
            } else if (topp < 550) {
                $(".back-to-top").animate({
                    right: "-100px"
                }, 500, function () {
                    $(".back-to-top").css({ "background-position": " 0 0" });
                });

            }

        }, 100);

    })

})


// 返回顶部
function pageScroll() {
    $(".back-to-top").css({ "background-position": " 0 -334px" });
    $('html,body').animate({
        scrollTop: 0
    }, 800);
}