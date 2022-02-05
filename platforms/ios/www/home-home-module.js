(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n   Horgászverseny.VIP\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\">\n\n  <ion-card>\n  \n      <ion-item>\n        <ion-icon slot=\"start\" color=\"primary\" name=\"location-outline\"></ion-icon>\n       <ion-label style=\"color: #ece805; font-size:20px;\"><b>Helyszin:</b></ion-label>\n        <ion-input [(ngModel)]=\"location\" style=\"font-size:20px;\" class=\"form-control\" type=\"text\" placeholder=\"Ird be a helyszint....\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon slot=\"start\" color=\"primary\" name=\"document-text-outline\"></ion-icon>\n       <ion-label style=\"color: #ece805; font-size:20px;\"><b>Megjegyzés:</b></ion-label>\n       <ion-textarea [(ngModel)]=\"comments\" style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" placeholder=\"Megjegyzés....\"></ion-textarea>\n      </ion-item>\n   \n\n  \n    <ion-card-content>\n      <!-- <ion-button slot=\"end\" size=\"small\">Save</ion-button> -->\n      <!-- <ion-button class=\"btn btn-default\" color=\"primary\" type=\"button\" (click)=\"addFieldValue()\">Add</ion-button> -->\n    </ion-card-content>\n  </ion-card>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <div>\n        <table class=\"table table-striped table-bordered\" id=\"customers\">\n          <thead>\n              <tr>\n                  <!-- <th class=\"tname\">Csapat neve</th> -->\n                  <th class=\"tname\">Név</th>\n                  <th>Szektor</th>\n                  <th>Súly (gr)</th>\n                  <th>Darab</th>\n                  <th>Idő</th>\n                  <th>Törlés</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let key of keys; let i = index\">\n                  <td>\n                      <ion-input style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj[key].name\" class=\"form-control name\" type=\"text\" ></ion-input> \n                  </td>\n                  <td>\n                    <ion-input style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj[key].sektor\" class=\"form-control\" type=\"text\" ></ion-input> \n                </td>\n                  <td>\n                      <ion-textarea type=\"number\" (keypress)=\"numericOnly($event)\" style=\"font-size:20px;\" cols=\"40\" rows=\"5\" [(ngModel)]=\"obj[key].weight\" class=\"form-control\" type=\"text\" ></ion-textarea>\n                  </td>\n                  <td>\n                      <ion-textarea type=\"number\" (keypress)=\"numericOnly($event)\" style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj[key].piece\" class=\"form-control\" type=\"text\" ></ion-textarea>\n                  </td>\n                  <td>\n                    <ion-textarea  style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj[key].time\" class=\"form-control\" type=\"text\" ></ion-textarea>\n                </td>\n                  <td>\n                      <ion-button  class=\"btn btn-default\" color=\"danger\"  type=\"button\" (click)=\"deleteFieldValue(key)\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n                  </td>\n              </tr>\n              <tr>\n                  <!-- <td>\n                      <ion-input cols=\"40\" rows=\"5\" class=\"form-control name\" type=\"text\" id=\"newAttributeName\" [(ngModel)]=\"newAttribute.name\" name=\"newAttributeName\"></ion-input>\n                  </td>\n                  <td>\n                    <ion-input cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeSzektor\" [(ngModel)]=\"newAttribute.sektor\" name=\"newAttributeSzektor\"></ion-input>\n                </td>\n                  <td>\n                      <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeWeight\" [(ngModel)]=\"newAttribute.weight\" name=\"newAttributeWeight\"></ion-textarea>\n                  </td>\n                  <td>\n                      <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributePiece\" [(ngModel)]=\"newAttribute.piece\" name=\"newAttributePiece\"></ion-textarea>\n                  </td>\n                  <td>\n                    <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeTime\" [(ngModel)]=\"newAttribute.time\" name=\"newAttributeTime\"></ion-textarea>\n                </td> -->\n                  <!-- <td>\n                      <ion-button class=\"btn btn-default\" color=\"primary\" type=\"button\" (click)=\"addFieldValue()\">Add</ion-button>\n                  </td> -->\n              </tr>\n          </tbody>\n      </table>\n       \n      </div>\n    </ion-col>\n    \n  </ion-row>\n  <br>\n  <br>\n  <ion-item>\n    <ion-icon style=\"color: #ece805;\" slot=\"start\" name=\"fish-outline\"></ion-icon>\n   <ion-label style=\"color: #ece805; font-size:25px;\"><b>Big Fish (gr):</b></ion-label>\n    <ion-input [(ngModel)]=\"bigfish\" style=\"font-size:25px;\" class=\"form-control\" type=\"text\" placeholder=\"Ird ide....\"></ion-input>\n  </ion-item>\n  <br>\n  <br>\n  <ion-button (click)=\"insertData()\" color=\"secondary\">\n    <ion-icon slot=\"end\" name=\"save\"></ion-icon>\n    Mentés\n  </ion-button>\n  <ion-button [disabled]=\"disabledCalcultion\" class=\"btn btn-default calculate\" color=\"danger\" style=\"text-align: center;\" (click)=\"calculate()\" type=\"button\" >Állás számítás<ion-icon name=\"calculator-outline\"></ion-icon></ion-button>\n\n  <!-- <ion-button class=\"btn btn-default calculate1\" color=\"warning\" style=\"text-align: center;\" (click)=\"orderBySektor()\"  type=\"button\" >Order by sector <ion-icon name=\"calculator-outline\"></ion-icon></ion-button> -->\n\n  <ion-button class=\"btn btn-default add\" color=\"success\" style=\"text-align: right;\" type=\"button\" (click)=\"addFieldValue()\">Új csapat<ion-icon name=\"add-outline\"></ion-icon></ion-button>\n\n  <br>\n  <br>\n  <ion-row>\n    <ion-col>\n      <div class=\"ion-text-start\">\n        <h3 style=\"color: #ffffff;\">Halak száma Összesen: <span style=\"color: #ffffff;\">{{totalpiece}}</span></h3>\n        \n      </div>\n      <div class=\"ion-text-start\">\n        <h3 style=\"color: #ffffff;\">Teljes súly (gr): <span style=\"color: #ffffff;\">{{totalweight}} </span></h3>\n        \n      </div>\n    </ion-col>\n  \n  </ion-row>\n  <br>\n  <br>\n   <!-- Calculation here -->\n  <ion-list style=\"color: #ffffff;\">\n    <ion-list-header>\n      <h2 style=\"color: #ffffff;\">Jelenlegi összesített állás: </h2>\n\n    </ion-list-header>\n    <ion-list-header>\n      <h2 style=\"color: #ffffff;\">Idő: <span>{{clickedtime}}</span></h2>\n\n    </ion-list-header>\n\n\n    <ion-item *ngFor=\"let s of sorted;let i = index;\" style=\"color: #ffffff;\">\n      \n        <h1 style=\"color: #ffffff;\" slot=\"start\">{{i+1}}</h1>\n      \n      <ion-label>\n        <h2 style=\"color: #ffffff;\">{{s.name}}</h2>\n        <h3 style=\"color: #ffffff;\">Eddig összesen: {{s.weight}} Gramm</h3>\n        \n      </ion-label>\n    </ion-item>\n\n   \n\n    \n  </ion-list>\n\n</ion-grid>\n\n<!-- New sector wise tables here -->\n<div *ngFor=\"let key of sektorKeys\">\n \n  <table  class=\"table table-striped table-bordered\" class=\"sektor\">\n    <caption style=\"color:#fff;\"><h1>{{key}} - szektor</h1> </caption>\n    <br>\n    <thead>\n        <tr>\n            <!-- <th class=\"tname\">Csapat neve</th> -->\n            <th class=\"tname\">Név</th>\n            <th>Szektor</th>\n            <th>Súly (gr)</th>\n            <th>Darab</th>\n            <th>Idő</th>\n            <!-- <th>Törlés /Delete</th> -->\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let obj of sektorObj[key]; let i = index\">\n            <td>\n                <ion-input disabled=\"true\" style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj.name\" class=\"form-control name\" type=\"text\" ></ion-input> \n            </td>\n            <td>\n              <ion-input disabled=\"true\" style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj.sektor\" class=\"form-control\" type=\"text\" ></ion-input> \n          </td>\n            <td>\n                <ion-textarea disabled=\"true\" type=\"number\" (keypress)=\"numericOnly($event)\" style=\"font-size:20px;\" cols=\"40\" rows=\"5\" [(ngModel)]=\"obj.weight\" class=\"form-control\" type=\"text\" ></ion-textarea>\n            </td>\n            <td>\n                <ion-textarea disabled=\"true\" type=\"number\" (keypress)=\"numericOnly($event)\" style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj.piece\" class=\"form-control\" type=\"text\" ></ion-textarea>\n            </td>\n            <td>\n              <ion-textarea disabled=\"true\"  style=\"font-size:20px;\"  cols=\"40\" rows=\"5\" [(ngModel)]=\"obj.time\" class=\"form-control\" type=\"text\" ></ion-textarea>\n          </td>\n            <!-- <td>\n                <ion-button  class=\"btn btn-default\" color=\"danger\"  type=\"button\" (click)=\"deleteFieldValue(key)\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n            </td> -->\n        </tr>\n        <tr>\n            <!-- <td>\n                <ion-input cols=\"40\" rows=\"5\" class=\"form-control name\" type=\"text\" id=\"newAttributeName\" [(ngModel)]=\"newAttribute.name\" name=\"newAttributeName\"></ion-input>\n            </td>\n            <td>\n              <ion-input cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeSzektor\" [(ngModel)]=\"newAttribute.sektor\" name=\"newAttributeSzektor\"></ion-input>\n          </td>\n            <td>\n                <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeWeight\" [(ngModel)]=\"newAttribute.weight\" name=\"newAttributeWeight\"></ion-textarea>\n            </td>\n            <td>\n                <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributePiece\" [(ngModel)]=\"newAttribute.piece\" name=\"newAttributePiece\"></ion-textarea>\n            </td>\n            <td>\n              <ion-textarea cols=\"40\" rows=\"5\" class=\"form-control\" type=\"text\" id=\"newAttributeTime\" [(ngModel)]=\"newAttribute.time\" name=\"newAttributeTime\"></ion-textarea>\n          </td> -->\n            <!-- <td>\n                <ion-button class=\"btn btn-default\" color=\"primary\" type=\"button\" (click)=\"addFieldValue()\">Add</ion-button>\n            </td> -->\n        </tr>\n    </tbody>\n</table>\n<ion-list style=\"color: #ffffff;\">\n\n  <ion-list-header>\n    <h2 style=\"color: #ffffff;\">Jelenlegi állás {{key}} - szektor: </h2>\n\n  </ion-list-header>\n  <ion-list-header>\n    <h2 style=\"color: #ffffff;\">Idő: <span>{{clickedtime}}</span></h2>\n\n  </ion-list-header>\n\n<div *ngFor=\"let s of getSortedDataForSektor(key);let i = index;\">\n  <ion-item *ngIf=\"s.sektor[0] == key\"  style=\"color: #ffffff;\">\n    \n      <h1 style=\"color: #ffffff;\" slot=\"start\">{{i+1}}</h1>\n    \n    <ion-label>\n      <h2 style=\"color: #ffffff;\">{{s.name}}</h2>\n      <h3 style=\"color: #ffffff;\">Eddig összesen: {{s.weight}} Gramm</h3>\n      \n    </ion-label>\n    \n  </ion-item>\n</div>\n\n \n\n  \n</ion-list>\n<br />\n<br />\n<br />\n \n</div>\n\n\n\n</ion-content>\n<br><br><br>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>VIP</ion-title>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ece805;\n  padding: 8px;\n}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #ece805;\n  color: black;\n}\n\ntd {\n  text-wrap: normal;\n  word-wrap: break-word;\n}\n\ntable td {\n  word-wrap: break-word;\n  /* All browsers since IE 5.5+ */\n  overflow-wrap: break-word;\n  /* Renamed property in CSS3 draft spec */\n}\n\n.add {\n  position: absolute;\n  right: 10px;\n}\n\n.calculate {\n  position: absolute;\n  left: 45%;\n}\n\n.tname {\n  width: 30%;\n}\n\nion-content {\n  --ion-background-color:#111D12;\n}\n\nion-input {\n  color: white;\n}\n\nion-textarea {\n  color: white;\n}\n\n.sektor {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sektor td, .sektor th {\n  border: 1px solid #ece805;\n  padding: 8px;\n}\n\n.sektor th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #ece805;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFPQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVJGOztBQVdBO0VBQUssaUJBQUE7RUFDSCxxQkFBQTtBQVBGOztBQVNFO0VBQ0UscUJBQUE7RUFBK0IsK0JBQUE7RUFDL0IseUJBQUE7RUFBK0Isd0NBQUE7QUFKbkM7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtBQUpGOztBQU9BO0VBRUUsOEJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7QUFMRjs7QUFTQTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFORjs7QUFhQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi8vIHRhYmxlXG4jY3VzdG9tZXJzIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZTgwNTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4vLyAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7fVxuXG4vLyAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7fVxuXG4jY3VzdG9tZXJzIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2U4MDU7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbnRkIHsgdGV4dC13cmFwOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuXG4gIHRhYmxlIHRkIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICAgICAgICAgLyogQWxsIGJyb3dzZXJzIHNpbmNlIElFIDUuNSsgKi9cbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAgICAgLyogUmVuYW1lZCBwcm9wZXJ0eSBpbiBDU1MzIGRyYWZ0IHNwZWMgKi9cbn1cblxuLmFkZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cblxuLmNhbGN1bGF0ZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0NSU7XG59XG5cbi50bmFtZXtcbiAgd2lkdGg6IDMwJTtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xufVxuXG5pb24taW5wdXR7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5zZWt0b3Ige1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWt0b3IgdGQsIC5zZWt0b3IgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlODA1O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi8vICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3KTt9XG5cbi8vICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3KTt9XG5cbi5zZWt0b3IgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTgwNTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_calling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/calling.service */ "./src/app/api/calling.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let HomePage = class HomePage {
    constructor(service, loader, toast) {
        this.service = service;
        this.loader = loader;
        this.toast = toast;
        // private fieldArray: Array<any> = [];
        // private newAttribute: any = {name:"",sektor:"",weight:"",piece:"",time:""};
        this.obj = {};
        this.keys = [];
        this.location = "";
        this.comments = "";
        this.sorted = [];
        this.bigfish = "";
        this.totalweight = "";
        this.totalpiece = "";
        this.clickedtime = "";
        this.sektorObj = {};
        this.sektorKeys = [];
        this.disabledCalcultion = true;
        this.init = false;
    }
    getMetaInfo() {
        var ref = this;
        this.service.getMetaInfo(function (data) {
            if (data) {
                ref.location = data.location;
                ref.comments = data.comments;
            }
        });
    }
    insertMetaInfo() {
        this.service.insertMetaInfo({ location: this.location, comments: this.comments });
    }
    ngOnInit() {
        setTimeout(() => {
            this.getData();
        }, 1000);
    }
    numericOnly(event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code == 13) { //Enter keycode
            return true;
        }
        var p1 = /\s/g;
        if (p1.test(event.key) == false) {
            let patter = /^([0-9])$/;
            let result = patter.test(event.key);
            console.log(result);
            return result;
        }
        else {
            return true;
        }
    }
    calculate() {
        if (window.confirm("Attila, előbb MENTÉS !!! és csak azután az ÁLLÁS SZÁMÍTÁS !")) {
            let temp = [];
            for (var i = 0; i < this.keys.length; i++) {
                var w = 0;
                var p = 0;
                if (this.obj[this.keys[i]].weight) {
                    let arr = this.obj[this.keys[i]].weight.split('\n');
                    if (this.obj[this.keys[i]].sektor == "B1") {
                        console.log(arr);
                    }
                    for (var k = 0; k < arr.length; k++) {
                        if (arr[k] != "") {
                            w = w + parseFloat(arr[k]);
                        }
                    }
                    //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
                    //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
                    //   temp = temp.reverse();
                    //   this.sorted = temp;
                }
                if (this.obj[this.keys[i]].piece) {
                    let arr = this.obj[this.keys[i]].piece.split('\n');
                    for (var k = 0; k < arr.length; k++) {
                        if (arr[k] != "") {
                            p = p + parseFloat(arr[k]);
                        }
                    }
                    //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
                    //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
                    //   temp = temp.reverse();
                    //   this.sorted = temp;
                }
                if (w > 0) {
                    temp.push({ sektor: this.obj[this.keys[i]].sektor, name: this.obj[this.keys[i]].name, weight: w, piece: p });
                }
            }
            temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
            temp = temp.reverse();
            this.sorted = temp;
            console.log(JSON.stringify(temp));
            if (this.sorted.length > 0) {
                let totalweight = 0;
                let totalpiece = 0;
                console.log(JSON.stringify(this.sorted));
                for (var i = 0; i < this.sorted.length; i++) {
                    totalweight = totalweight + parseInt(this.sorted[i].weight);
                    totalpiece = totalpiece + parseInt(this.sorted[i].piece);
                }
                this.totalweight = totalweight.toString();
                this.totalpiece = totalpiece.toString();
            }
            var ref = this;
            this.service.insertClickedTime(function (data) {
                ref.service.getClickedTime(function (data1) {
                    if (data1) {
                        ref.clickedtime = data1;
                    }
                });
            });
        }
    }
    getTotalWeightAndFish() {
    }
    addFieldValue() {
        this.obj[Date.now().toString()] = {};
        this.keys = Object.keys(this.obj);
        //  var obj = this.newAttribute;
        //   obj["new"] = true;
        //     this.fieldArray.push(obj);
        // this.newAttribute = {};
    }
    deleteFieldValue(key) {
        if (window.confirm("BIZTOS VAGY BENNE ATTILA? DE TUTI?")) {
            var ref = this;
            this.loader.create({
                message: "kérlek várj..."
            }).then((ele) => {
                ele.present();
                this.service.deleteData(key, function (data) {
                    ele.dismiss();
                    ref.showToast(data);
                    ref.getData();
                });
            });
        }
    }
    // deleteFieldValue(key) {
    //    // this.fieldArray.splice(index, 1);
    //    delete this.obj[key];
    //    this.keys = Object.keys(this.obj);
    // }
    getBigFish() {
        var ref = this;
        this.service.getBigFish(function (data) {
            if (data) {
                ref.bigfish = data;
            }
        });
    }
    insertData() {
        //this.fieldArray.push(this.newAttribute);
        // alert(JSON.stringify(this.fieldArray));
        // let  = [];
        let ref = this;
        //    for(var i = 0;i<this.keys.length;i++)
        //    {
        //      console.log(this.obj[this.keys[i]]);
        //      if(this.obj[this.keys[i]].name != "" || this.obj[this.keys[i]].sektor != "" || this.obj[this.keys[i]].weight != "" || this.obj[this.keys[i]].piece != ""  || this.obj[this.keys[i]].time != "")
        //      {
        // delete this.obj[this.keys[i]];
        //      // arr.push(this.fieldArray[i]);
        //      }
        //    }
        //(JSON.stringify(arr));
        this.loader.create({
            message: "kérlek várj..."
        }).then((ele) => {
            ele.present();
            this.service.insertData(this.obj, function (str) {
                //alert(str);
                ele.dismiss();
                ref.showToast(str);
                ref.insertMetaInfo();
                ref.service.insertBigFish(ref.bigfish);
                ref.getData();
            });
        });
    }
    // getData()
    // {
    //   let ref = this;
    //   this.loader.create({
    //     message:"kérlek várj..."
    //   }).then((ele)=>{
    //   ele.present();
    //   this.service.getData(function(data)
    //   {
    //     ele.dismiss();
    //     if(data)
    //     {
    //     console.log(JSON.stringify(data));
    //     ref.keys = Object.keys(data);
    //     ref.obj = data;
    //     ref.getMetaInfo();
    //     }
    //   })
    // })
    // }
    // getData()
    // {
    //   let ref = this;
    //   this.loader.create({
    //     message:"please wait..."
    //   }).then((ele)=>{
    //   ele.present();
    //   this.service.getData(function(data)
    //   {
    //     ele.dismiss();
    //     if(data)
    //     {
    //     console.log(JSON.stringify(data));
    //     ref.keys = Object.keys(data);
    //     ref.obj = data;
    //     }
    //     else{
    //     ref.getMetaInfo();
    //     ref.keys = [];
    //     ref.obj = {};
    //     }
    //   })
    // })
    // }
    getData() {
        let ref = this;
        this.loader.create({
            message: "kérlek várj..."
        }).then((ele) => {
            ele.present();
            this.service.getData(function (data) {
                ele.dismiss();
                if (data) {
                    console.log(JSON.stringify(data));
                    ref.keys = Object.keys(data);
                    ref.obj = data;
                    ref.getMetaInfo();
                    ref.getBigFish();
                    //ref.service.gettSektorCount();
                    if (ref.init) {
                        ref.orderBySektor();
                    }
                    ref.service.getClickedTime(function (data1) {
                        if (data1) {
                            ref.clickedtime = data1;
                        }
                    });
                    //ref.calculate();
                    //alert(JSON.stringify(keys));
                    //   let arr = [];
                    //   for(var i = 0;i<keys.length;i++)
                    //   {
                    //     console.log(data[keys[i]]);
                    //    arr = arr.concat(data[keys[i]]);
                    //   }
                    //  // alert(JSON.stringify(arr));
                    //   if(arr.length > 0)
                    //   {
                    //     ref.fieldArray = [];
                    //     ref.fieldArray = arr;
                    //   }
                }
                else {
                    ref.getMetaInfo();
                    ref.getBigFish();
                    ref.keys = [];
                    ref.obj = {};
                    ref.service.getClickedTime(function (data1) {
                        if (data1) {
                            ref.clickedtime = data1;
                        }
                    });
                }
                ref.init = true;
            });
        });
    }
    getSortedDataForSektor(key) {
        var arr = [];
        for (var k = 0; k < this.sorted.length; k++) {
            if (key == this.sorted[k].sektor[0]) {
                arr.push(this.sorted[k]);
            }
        }
        return arr;
    }
    showToast(msg) {
        this.toast.create({
            message: msg,
            duration: 3000
        }).then((ele) => {
            ele.present();
        });
    }
    orderBySektor() {
        var ref = this;
        var sektorTemp = [];
        this.sektorObj = {};
        for (var i = 0; i < ref.keys.length; i++) {
            if (ref.obj[ref.keys[i]].sektor != "") {
                sektorTemp.push(ref.obj[ref.keys[i]].sektor[0]);
            }
        }
        console.log(sektorTemp);
        sektorTemp = sektorTemp.filter((c, index) => {
            return sektorTemp.indexOf(c) === index;
        });
        sektorTemp = sektorTemp.sort();
        console.log(sektorTemp);
        for (var j = 0; j < sektorTemp.length; j++) {
            var arrtemp = [];
            for (var k = 0; k < ref.keys.length; k++) {
                if (sektorTemp[j] == ref.obj[ref.keys[k]].sektor.trim()[0]) {
                    arrtemp.push(ref.obj[ref.keys[k]]);
                }
            }
            ref.sektorObj[sektorTemp[j]] = arrtemp;
        }
        ref.sektorKeys = Object.keys(ref.sektorObj);
        console.log(ref.sektorObj);
        ref.disabledCalcultion = false;
        ref.service.insertSektorCount(ref.sektorKeys.length.toString());
    }
};
HomePage.ctorParameters = () => [
    { type: _api_calling_service__WEBPACK_IMPORTED_MODULE_2__["CallingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        providers: [_api_calling_service__WEBPACK_IMPORTED_MODULE_2__["CallingService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map