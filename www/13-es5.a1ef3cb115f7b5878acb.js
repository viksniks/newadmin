!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"S2/4":function(n,o,i){"use strict";i.r(o),i.d(o,"SinglePageModule",(function(){return I}));var c=i("SVse"),b=i("s7LF"),r=i("sZkV"),s=i("iInd"),a=i("8Y7J"),l=i("eTA4");function g(t,e){if(1&t){var n=a.Kb();a.Jb(0,"tr"),a.Jb(1,"td"),a.Jb(2,"ion-input",22),a.Rb("ngModelChange",(function(t){a.Yb(n);var o=e.$implicit;return a.Tb().obj[o].name=t})),a.Ib(),a.Ib(),a.Jb(3,"td"),a.Jb(4,"ion-input",23),a.Rb("ngModelChange",(function(t){a.Yb(n);var o=e.$implicit;return a.Tb().obj[o].sektor=t})),a.Ib(),a.Ib(),a.Jb(5,"td"),a.Jb(6,"ion-textarea",23),a.Rb("ngModelChange",(function(t){a.Yb(n);var o=e.$implicit;return a.Tb().obj[o].weight=t})),a.Ib(),a.Ib(),a.Jb(7,"td"),a.Jb(8,"ion-textarea",23),a.Rb("ngModelChange",(function(t){a.Yb(n);var o=e.$implicit;return a.Tb().obj[o].piece=t})),a.Ib(),a.Ib(),a.Jb(9,"td"),a.Jb(10,"ion-textarea",23),a.Rb("ngModelChange",(function(t){a.Yb(n);var o=e.$implicit;return a.Tb().obj[o].time=t})),a.Ib(),a.Ib(),a.Jb(11,"td"),a.Jb(12,"ion-button",24),a.Rb("click",(function(){a.Yb(n);var t=e.$implicit;return a.Tb().deleteFieldValue(t)})),a.Hb(13,"ion-icon",25),a.Ib(),a.Ib(),a.Ib()}if(2&t){var o=e.$implicit,i=a.Tb();a.wb(2),a.Wb("ngModel",i.obj[o].name),a.wb(2),a.Wb("ngModel",i.obj[o].sektor),a.wb(2),a.Wb("ngModel",i.obj[o].weight),a.wb(2),a.Wb("ngModel",i.obj[o].piece),a.wb(2),a.Wb("ngModel",i.obj[o].time)}}function d(t,e){if(1&t&&(a.Jb(0,"ion-item",20),a.Jb(1,"h1",26),a.cc(2),a.Ib(),a.Jb(3,"ion-label"),a.Jb(4,"h2",20),a.cc(5),a.Ib(),a.Jb(6,"h3",20),a.cc(7),a.Ib(),a.Ib(),a.Ib()),2&t){var n=e.$implicit,o=e.index;a.wb(2),a.dc(o+1),a.wb(3),a.dc(n.name),a.wb(2),a.ec("Eddig \xf6sszesen: ",n.weight," Gramm")}}var h,f,u,p=[{path:"",component:(h=function(){function n(e,o,i){t(this,n),this.service=e,this.loader=o,this.toast=i,this.obj={},this.keys=[],this.location="",this.comments="",this.sorted=[],this.bigfish="",this.totalweight="",this.totalpiece="",this.clickedtime=""}var o,i,c;return o=n,(i=[{key:"getMetaInfo",value:function(){var t=this;this.service.getMetaInfo((function(e){e&&(t.location=e.location,t.comments=e.comments)}))}},{key:"insertMetaInfo",value:function(){this.service.insertMetaInfo({location:this.location,comments:this.comments})}},{key:"ngOnInit",value:function(){var t=this;setTimeout((function(){t.getData()}),1e3)}},{key:"calculate",value:function(){if(window.confirm("Attila! Elmentetted???? Biztos?")){for(var t=[],e=0;e<this.keys.length;e++){var n=0,o=0;if(this.obj[this.keys[e]].weight)for(var i=this.obj[this.keys[e]].weight.split("\n"),c=0;c<i.length;c++)n+=parseFloat(i[c]);if(this.obj[this.keys[e]].piece){var b=this.obj[this.keys[e]].piece.split("\n");for(c=0;c<b.length;c++)o+=parseFloat(b[c])}n>0&&t.push({name:this.obj[this.keys[e]].name,weight:n,piece:o})}if(t=(t=t.sort((function(t,e){return t.weight>e.weight?1:-1}))).reverse(),this.sorted=t,console.log(JSON.stringify(t)),this.sorted.length>0){var r=0,s=0;for(console.log(JSON.stringify(this.sorted)),e=0;e<this.sorted.length;e++)r+=parseInt(this.sorted[e].weight),s+=parseInt(this.sorted[e].piece);this.totalweight=r.toString(),this.totalpiece=s.toString()}var a=this;this.service.insertClickedTime((function(t){a.service.getClickedTime((function(t){t&&(a.clickedtime=t)}))}))}}},{key:"getTotalWeightAndFish",value:function(){}},{key:"addFieldValue",value:function(){this.obj[Date.now().toString()]={},this.keys=Object.keys(this.obj)}},{key:"deleteFieldValue",value:function(t){var e=this;if(window.confirm("BIZTOS VAGY BENNE ATTILA? DE TUTI?")){var n=this;this.loader.create({message:"k\xe9rlek v\xe1rj..."}).then((function(o){o.present(),e.service.deleteData(t,(function(t){o.dismiss(),n.showToast(t),n.getData()}))}))}}},{key:"getBigFish",value:function(){var t=this;this.service.getBigFish((function(e){e&&(t.bigfish=e)}))}},{key:"insertData",value:function(){var t=this,e=this;this.loader.create({message:"k\xe9rlek v\xe1rj..."}).then((function(n){n.present(),t.service.insertData(t.obj,(function(t){n.dismiss(),e.showToast(t),e.insertMetaInfo(),e.service.insertBigFish(e.bigfish),e.getData()}))}))}},{key:"getData",value:function(){var t=this,e=this;this.loader.create({message:"k\xe9rlek v\xe1rj..."}).then((function(n){n.present(),t.service.getData((function(t){n.dismiss(),t?(console.log(JSON.stringify(t)),e.keys=Object.keys(t),e.obj=t,e.getMetaInfo(),e.getBigFish(),e.service.getClickedTime((function(t){t&&(e.clickedtime=t)}))):(e.getMetaInfo(),e.getBigFish(),e.keys=[],e.obj={},e.service.getClickedTime((function(t){t&&(e.clickedtime=t)})))}))}))}},{key:"showToast",value:function(t){this.toast.create({message:t,duration:3e3}).then((function(t){t.present()}))}}])&&e(o.prototype,i),c&&e(o,c),n}(),h.\u0275fac=function(t){return new(t||h)(a.Gb(l.a),a.Gb(r.w),a.Gb(r.z))},h.\u0275cmp=a.Ab({type:h,selectors:[["app-single"]],decls:93,vars:10,consts:[[3,"translucent"],[3,"fullscreen"],["slot","start","color","primary","name","location-outline"],[2,"color","#ece805","font-size","20px"],["type","text","placeholder","Ird be a helyszint....",1,"form-control",2,"font-size","20px",3,"ngModel","ngModelChange"],["slot","start","color","primary","name","document-text-outline"],["cols","40","rows","5","type","text","placeholder","Megjegyz\xe9s....",1,"form-control",2,"font-size","20px",3,"ngModel","ngModelChange"],["id","customers",1,"table","table-striped","table-bordered"],[1,"tname"],[4,"ngFor","ngForOf"],["slot","start","name","fish-outline",2,"color","#ece805"],[2,"color","#ece805","font-size","25px"],["type","text","placeholder","Ird ide....",1,"form-control",2,"font-size","25px",3,"ngModel","ngModelChange"],["color","secondary",3,"click"],["slot","end","name","save"],["color","danger","type","button",1,"btn","btn-default","calculate",2,"text-align","center",3,"click"],["name","calculator-outline"],["color","success","type","button",1,"btn","btn-default","add",2,"text-align","right",3,"click"],["name","add-outline"],[1,"ion-text-start"],[2,"color","#ffffff"],["style","color: #ffffff;",4,"ngFor","ngForOf"],["cols","40","rows","5","type","text",1,"form-control","name",2,"font-size","20px",3,"ngModel","ngModelChange"],["cols","40","rows","5","type","text",1,"form-control",2,"font-size","20px",3,"ngModel","ngModelChange"],["color","danger","type","button",1,"btn","btn-default",3,"click"],["name","close-outline"],["slot","start",2,"color","#ffffff"]],template:function(t,e){1&t&&(a.Jb(0,"ion-header",0),a.Jb(1,"ion-toolbar"),a.Jb(2,"ion-title"),a.cc(3," Horg\xe1szverseny.VIP "),a.Ib(),a.Ib(),a.Ib(),a.Jb(4,"ion-content",1),a.Jb(5,"ion-card"),a.Jb(6,"ion-item"),a.Hb(7,"ion-icon",2),a.Jb(8,"ion-label",3),a.Jb(9,"b"),a.cc(10,"Helyszin:"),a.Ib(),a.Ib(),a.Jb(11,"ion-input",4),a.Rb("ngModelChange",(function(t){return e.location=t})),a.Ib(),a.Ib(),a.Jb(12,"ion-item"),a.Hb(13,"ion-icon",5),a.Jb(14,"ion-label",3),a.Jb(15,"b"),a.cc(16,"Megjegyz\xe9s:"),a.Ib(),a.Ib(),a.Jb(17,"ion-textarea",6),a.Rb("ngModelChange",(function(t){return e.comments=t})),a.Ib(),a.Ib(),a.Hb(18,"ion-card-content"),a.Ib(),a.Jb(19,"ion-grid"),a.Jb(20,"ion-row"),a.Jb(21,"ion-col"),a.Jb(22,"div"),a.Jb(23,"table",7),a.Jb(24,"thead"),a.Jb(25,"tr"),a.Jb(26,"th",8),a.cc(27,"Versenyz\u0151 neve"),a.Ib(),a.Jb(28,"th"),a.cc(29,"Szektor"),a.Ib(),a.Jb(30,"th"),a.cc(31,"S\xfaly (gr)"),a.Ib(),a.Jb(32,"th"),a.cc(33,"Darab"),a.Ib(),a.Jb(34,"th"),a.cc(35,"Id\u0151"),a.Ib(),a.Jb(36,"th"),a.cc(37,"T\xf6rl\xe9s"),a.Ib(),a.Ib(),a.Ib(),a.Jb(38,"tbody"),a.bc(39,g,14,5,"tr",9),a.Hb(40,"tr"),a.Ib(),a.Ib(),a.Ib(),a.Ib(),a.Ib(),a.Hb(41,"br"),a.Hb(42,"br"),a.Jb(43,"ion-item"),a.Hb(44,"ion-icon",10),a.Jb(45,"ion-label",11),a.Jb(46,"b"),a.cc(47,"Big Fish (gr):"),a.Ib(),a.Ib(),a.Jb(48,"ion-input",12),a.Rb("ngModelChange",(function(t){return e.bigfish=t})),a.Ib(),a.Ib(),a.Hb(49,"br"),a.Hb(50,"br"),a.Jb(51,"ion-button",13),a.Rb("click",(function(){return e.insertData()})),a.Hb(52,"ion-icon",14),a.cc(53," Ment\xe9s "),a.Ib(),a.Jb(54,"ion-button",15),a.Rb("click",(function(){return e.calculate()})),a.cc(55,"\xc1ll\xe1s sz\xe1m\xedt\xe1s "),a.Hb(56,"ion-icon",16),a.Ib(),a.Jb(57,"ion-button",17),a.Rb("click",(function(){return e.addFieldValue()})),a.cc(58,"\xdaj csapat "),a.Hb(59,"ion-icon",18),a.Ib(),a.Hb(60,"br"),a.Hb(61,"br"),a.Jb(62,"ion-row"),a.Jb(63,"ion-col"),a.Jb(64,"div",19),a.Jb(65,"h3",20),a.cc(66,"Halak sz\xe1ma \xd6sszesen: "),a.Jb(67,"span",20),a.cc(68),a.Ib(),a.Ib(),a.Ib(),a.Jb(69,"div",19),a.Jb(70,"h3",20),a.cc(71,"Teljes s\xfaly (gr): "),a.Jb(72,"span",20),a.cc(73),a.Ib(),a.Ib(),a.Ib(),a.Ib(),a.Ib(),a.Hb(74,"br"),a.Hb(75,"br"),a.Jb(76,"ion-list",20),a.Jb(77,"ion-list-header"),a.Jb(78,"h2",20),a.cc(79,"Jelenlegi \xe1ll\xe1s:"),a.Ib(),a.Ib(),a.Jb(80,"ion-list-header"),a.Jb(81,"h2",20),a.cc(82,"Id\u0151: "),a.Jb(83,"span"),a.cc(84),a.Ib(),a.Ib(),a.Ib(),a.bc(85,d,8,3,"ion-item",21),a.Ib(),a.Ib(),a.Ib(),a.Hb(86,"br"),a.Hb(87,"br"),a.Hb(88,"br"),a.Jb(89,"ion-footer"),a.Jb(90,"ion-toolbar"),a.Jb(91,"ion-title"),a.cc(92,"VIP"),a.Ib(),a.Ib(),a.Ib()),2&t&&(a.Wb("translucent",!0),a.wb(4),a.Wb("fullscreen",!0),a.wb(7),a.Wb("ngModel",e.location),a.wb(6),a.Wb("ngModel",e.comments),a.wb(22),a.Wb("ngForOf",e.keys),a.wb(9),a.Wb("ngModel",e.bigfish),a.wb(20),a.dc(e.totalpiece),a.wb(5),a.ec("",e.totalweight," "),a.wb(11),a.dc(e.clickedtime),a.wb(1),a.Wb("ngForOf",e.sorted))},directives:[r.i,r.t,r.s,r.f,r.c,r.l,r.j,r.m,r.k,r.y,b.d,b.e,r.r,r.d,r.h,r.q,r.e,c.h,r.b,r.n,r.o,r.g],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#customers[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ece805;padding:8px}#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:center;background-color:#ece805;color:#000}td[_ngcontent-%COMP%]{text-wrap:normal}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{word-wrap:break-word}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow-wrap:break-word}.add[_ngcontent-%COMP%]{right:10px}.add[_ngcontent-%COMP%], .calculate[_ngcontent-%COMP%]{position:absolute}.calculate[_ngcontent-%COMP%]{left:45%}.tname[_ngcontent-%COMP%]{width:30%}ion-content[_ngcontent-%COMP%]{--ion-background-color:#111d12}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{color:#fff}"]}),h)}],m=((u=function e(){t(this,e)}).\u0275mod=a.Eb({type:u}),u.\u0275inj=a.Db({factory:function(t){return new(t||u)},imports:[[s.i.forChild(p)],s.i]}),u),I=((f=function e(){t(this,e)}).\u0275mod=a.Eb({type:f}),f.\u0275inj=a.Db({factory:function(t){return new(t||f)},imports:[[c.b,b.a,r.u,m]]}),f)}}])}();