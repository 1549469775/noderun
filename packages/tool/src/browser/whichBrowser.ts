enum Browser {
    none="none",
    ie="ie",
    ie7="ie7",
    ie8="ie8",
    ie9="ie9",
    ie10="ie10",
    ie11="ie11",
    chrome="chrome",
    opera="opera",
    edge="edge",
    safari="safari",
    ff="ff"
}

export default function whichBrowser(): Browser {
    let browser: Browser = Browser.none;
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    let isIE = userAgent.indexOf("compatible") > -1
        && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    let isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    let isSafari = userAgent.indexOf("Safari") > -1
        && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    let isChrome = userAgent.indexOf("Chrome") > -1
        && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

    if (isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return Browser.ie7;
        } else if (fIEVersion == 8) {
            return Browser.ie8;
        } else if (fIEVersion == 9) {
            return Browser.ie9;
        } else if (fIEVersion == 10) {
            return Browser.ie10;
        } else if (fIEVersion == 11) {
            return Browser.ie11;
        } else {
            return Browser.ie;
        }//IE版本过低
        return Browser.ie;
    }
    if (isOpera) {
        browser = Browser.opera;
    }
    if (isEdge) {
        return Browser.edge;
    }
    if (isFF) {
        return Browser.ff;
    }
    if (isSafari) {
        return Browser.safari;
    }
    if (isChrome) {
        return Browser.chrome;
    }

    return browser
}
