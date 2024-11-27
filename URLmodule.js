import url from "node:url";

// const myUrl = new URL("http://example.com/a/b/c/d/e?abc=derf");
// console.log(myUrl.host);

const Url = new URL("https://abc:123@www.example.com/a/acbdf/ftg?123#hash");
console.log(Url.href);
Url.host = "google.org:8000";
console.log(Url.href);

const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";
console.log(myURL.href);

// const pathname = '/a/b/c';
// const search = '?d=e';
// const hash = '#fgh';
// const myURL = new URL(`https://example.org${pathname}${search}${hash}`);
