(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{199:function(t,l,a){"use strict";a.r(l);var e={name:"SvgBadge",props:{label:String,value:String,color:String},computed:{ll:function(){return this.label.length-1},lv:function(){return this.value.length-1}},methods:{imageWidth:function(t){return 8*t+18},d1:function(){return"M0 0h"+(8*this.ll+9)+"v20H0z"},d2:function(){return"M"+(8*this.ll+9)+" 0h"+(8*Math.max(this.ll,this.lv)+1)+"v20H"+(8*this.ll+9)+"z"},d3:function(){return"M0 0h"+(8*(this.ll+this.lv)+18)+"v20H0z"}}},n=a(11),s=Object(n.a)(e,(function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.imageWidth(t.ll+t.lv),height:"20"}},[a("linearGradient",{attrs:{id:"b",x2:"0",y2:"100%"}},[a("stop",{attrs:{offset:"0","stop-color":"#bbb","stop-opacity":".1"}}),t._v(" "),a("stop",{attrs:{offset:"1","stop-opacity":".1"}})],1),t._v(" "),a("clipPath",{attrs:{id:"a"}},[a("rect",{attrs:{width:t.imageWidth(t.ll+t.lv),height:"20",rx:"3",fill:"#fff"}})]),t._v(" "),a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{attrs:{fill:"#555",d:t.d1()}}),t._v(" "),a("path",{attrs:{fill:"#ff69b4",d:t.d2()}}),t._v(" "),a("path",{attrs:{fill:"url(#b)",d:t.d3()}})]),t._v(" "),a("g",{attrs:{fill:"#fff","text-anchor":"middle","font-family":"DejaVu Sans,Verdana,Geneva,sans-serif","font-size":"110"}},[a("text",{attrs:{x:40*t.ll+55,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v(t._s(t.label)+"\n        ")]),t._v(" "),a("text",{attrs:{x:40*t.ll+55,y:"140",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),a("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")]),t._v(" "),a("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"140",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")])])],1)}),[],!1,null,"af9fb754",null);l.default=s.exports}}]);