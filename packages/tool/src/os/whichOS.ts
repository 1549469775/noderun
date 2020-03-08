

export default function ():string {
    const os = function (){
        const ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }();

    let osName:string = '';

    if (os.isAndroid || os.isPhone) {
        //alert("手机" );
        osName = "mobile"
    } else if (os.isTablet) {
        //alert("平板" );
        osName = "tablet"
    } else if (os.isPc) {
        //alert("电脑" );
        osName = "pc"
    }
    return  osName
}
