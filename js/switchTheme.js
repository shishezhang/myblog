// 切换主题js


var thisTheme = localStorage.getItem("Theme") || "0";

switch (thisTheme) {
    case "0":
        //主题一
        document.write('<link rel="stylesheet" href="./css/Theme.css">');
        break;
    case "1":
        //主题二
        document.write('<link rel="stylesheet" href="./css/Theme1.css">');
        break;
        case "2":
            //主题三
            document.write('<link rel="stylesheet" href="./css/Theme2.css">');
            break;
}


function Themeclick(i){
    localStorage.setItem("Theme",i)
    switch (i+"") {
        case '0':
            //主题一
            document.body.style.backgroundImage = 'url("")';
            break;
        case '1':
            //主题二
            document.body.style.backgroundImage = 'url("../img/background_img/little-monster.png")';
            break;
            case '2':
            //主题三
            document.body.style.backgroundImage = 'url("../img/background_img/theme2.png")';
            break;
    }
    
}