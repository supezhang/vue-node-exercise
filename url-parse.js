var url = require('url');

let {pathname,query} = url.parse('http://localhost:8080/one?a=index&t=article',true);

let {a,b} = {a:123,b:456}
console.log(pathname,query.a,query.t,a,b);