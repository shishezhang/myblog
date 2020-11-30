
//公共变量
var imgBox = $(".figureitem");


// 页面尺寸改变时实时触发
window.onresize = function () {
    //重新定义瀑布流
    waterfallFlow();
};

//初始化
window.onload = function () {

    //实现瀑布流
    waterfallFlow();

}

/**
 * 瀑布流
 * 思路分析:
 * 1、先求出列数，图片盒子宽度和高度
 * 2、遍历所有图片盒子，如果小于列数的图片盒子就把盒子高度记录到盒子高度数组里，如果大于列数的图片盒子（也就是从第二行开始处理），
 *    先获取到上一行最小的图片盒子的高度，然后通过定位来实现图片定位
 */
function waterfallFlow() {
    var imgcontentWidth = $(".img-content").width(); // 图片墙容器宽度
    var imgWidth = imgBox.outerWidth();  //img宽度

    var rownum = parseInt(imgcontentWidth / imgWidth); //列数(图片墙容器/单个图片宽度)
    var imgHeightlist = []; //一行高度数组

    //遍历
    $(imgBox).each(function (index, item) {
        var imgitem = $(item).outerHeight();//图片高度
        if (index < rownum) {
            //防止切换列数之后存在css属性
            $(item).removeAttr("style");
            imgHeightlist.push(imgitem);
        } else {
            var minheight = Math.min(...imgHeightlist); // 获取最小高度   Maht.min(10,20,30)
            var minindex = $.inArray(minheight, imgHeightlist); //获取下标  $.inArray（数组值，数组）
            $(item).css({
                'position': 'absolute', //绝对定位
                'left': imgWidth * minindex + 'px', //图片宽度 * 最小高度图片下标
                'top': minheight + 'px' //叠加后的最小高度
            })
            //高度叠加
            imgHeightlist[minindex] += imgitem; //叠加当前图片高度
        }
    })


}


//修改列数
function colNumber(data) {
    if (data == "3") {
        imgBox.addClass("col-3");
        imgBox.removeClass("col-5");
    } else if (data == "5") {
        imgBox.addClass("col-5");
        imgBox.removeClass("col-3");
    }
    //重新定义瀑布流
    waterfallFlow();

}