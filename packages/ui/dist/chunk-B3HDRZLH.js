'use strict';

var chunkHNUKJE66_js = require('./chunk-HNUKJE66.js');

var t=chunkHNUKJE66_js.a(chunkHNUKJE66_js.b()),i=chunkHNUKJE66_js.a(chunkHNUKJE66_js.c());function u({count:e}){let[o,s]=(0, t.useState)(!0),[l,n]=(0, t.useState)(!1);return (0, t.useEffect)(()=>{e>100&&s(!1),e>0&&e<=100?s(!0):n(!0);},[e]),(0, i.jsx)(i.Fragment,{children:(0, i.jsx)("div",{className:`bg-blue-500 rounded-full text-white text-sm ${o?"w-5":"w-7 "} ${l?"":"invisible"} flex items-center justify-center m-1`,children:e<=0?"":e>100?"99+":e})})}

exports.a = u;
