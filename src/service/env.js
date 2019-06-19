let host = ''; // 域名地址
let imgBaseUrl = ''; // 图片所在域名地址

// 开发环境
if (process.env.NODE_ENV == 'development') {
    //  host = "http://word1.cn1.utools.club/api";
    host = "http://newword5.utools.club/api";
    // host = "http://word.gzwmdy.cn/api";

    // host = "http://api.linkgou.net/api";
    // host = "http://word.gzwmdy.cn/api";
    imgBaseUrl = "http://qiniu.gzwmdy.cn/";
    // host = "http://newword.utools.club/api"
    // 线上环境
} else if (process.env.NODE_ENV == 'production') {
    // host = "http://word.cn1.utools.club/api";

    // 
    // host = "http://word.gzwmdy.cn/api";
    host = "http://newword5.utools.club/api";
    // host = "http://192.168.52.140/api";
    imgBaseUrl = "http://qiniu.gzwmdy.cn/";
}

export {
    host,
    imgBaseUrl,
}
