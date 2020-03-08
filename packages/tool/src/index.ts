import whichBrowser from "./browser/whichBrowser"
import isMobile from "./mobile/isMobile"
import whichOS from "./os/whichOS"
import isWx from "./wx/isWx"

export default {
    browser: {
        whichBrowser
    },
    mobile:{
        isMobile
    },
    os:{
        whichOS
    },
    wx:{
        isWx
    }
}
