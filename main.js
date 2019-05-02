(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_tests_basic_tests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tests/basic-tests.component */ "./src/app/basic-tests/basic-tests.component.ts");
/* harmony import */ var _pipes_tests_pipes_tests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes-tests/pipes-tests.component */ "./src/app/pipes-tests/pipes-tests.component.ts");
/* harmony import */ var _event_binding_tests_event_binding_tests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-binding-tests/event-binding-tests.component */ "./src/app/event-binding-tests/event-binding-tests.component.ts");






var routes = [
    { path: 'basicTest', component: _basic_tests_basic_tests_component__WEBPACK_IMPORTED_MODULE_3__["BasicTestsComponent"] },
    { path: 'pipesTest', component: _pipes_tests_pipes_tests_component__WEBPACK_IMPORTED_MODULE_4__["PipesTestsComponent"] },
    { path: 'eventBindingTest', component: _event_binding_tests_event_binding_tests_component__WEBPACK_IMPORTED_MODULE_5__["EventBindingTestsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav>\n  <a routerLink=\"/basicTest\">Basic Tests</a>\n</nav>\n\n<nav>\n  <a routerLink=\"/pipesTest\">Pipes Tests</a>\n</nav>\n\n<nav>\n  <a routerLink=\"/eventBindingTest\">Event Binding Tests</a>\n</nav>\n\n\n<div *ngFor=\"let hero of heroes\">\n  Name: {{hero.name}}  Telephone number : {{hero.tel}}\n</div>\n<div>\n  <button (click)=\"testRestAPIGet()\"> Test Rest APis</button>\n</div>\n<div>\n  <li *ngFor=\"let person of personInfo\"> Name: {{person.first_name}}  Photo: <img src=\"{{person.avatar}}\"></li>\n</div>\n<div>\n  <button (click)=\"testRestAPIPost()\"> Post Rest APis</button>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(httpClnt) {
        this.httpClnt = httpClnt;
        this.enteredValue = "";
        this.heroes = [{ "id": 1, "name": "anju", "tel": 122334 },
            { "id": 2, "name": "awani", "tel": 322334 },
            { "id": 3, "name": "madhavi", "tel": 422334 }
        ];
    }
    AppComponent.prototype.onInputKeyUp = function (event) {
        console.log("text enetered is " + event.target.value);
        this.enteredValue = event.target.value;
        //this.getCurrTemp(this.enteredValue);
    };
    AppComponent.prototype.testRestAPIGet = function () {
        var _this = this;
        //https://reqres.in/api/users?page=2
        this.httpClnt.get('https://reqres.in/api/users?page=2').subscribe(function (data) {
            console.log("data fetched --- " + data.data[0].first_name);
            _this.personInfo = data.data;
        });
    };
    AppComponent.prototype.testRestAPIPost = function () {
        //https://reqres.in/api/users?page=2
        this.httpClnt.post('https://reqres.in/api/users', {
            "id": 40, "first_name": "Anju", "last_name": "Holt", "avatar": "https://www.facebook.com/photo.php?fbid=10156327550768013&set=a.10151702188038013&type=3&theater"
        }).subscribe(function (data) {
            console.log("data fetched --- " + data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_tests_simple_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes-tests/simple.pipe */ "./src/app/pipes-tests/simple.pipe.ts");
/* harmony import */ var _basic_tests_basic_tests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-tests/basic-tests.component */ "./src/app/basic-tests/basic-tests.component.ts");
/* harmony import */ var _pipes_tests_pipes_tests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes-tests/pipes-tests.component */ "./src/app/pipes-tests/pipes-tests.component.ts");
/* harmony import */ var _event_binding_tests_event_binding_tests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-binding-tests/event-binding-tests.component */ "./src/app/event-binding-tests/event-binding-tests.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pipes_tests_simple_pipe__WEBPACK_IMPORTED_MODULE_6__["SimplePipe"],
                _basic_tests_basic_tests_component__WEBPACK_IMPORTED_MODULE_7__["BasicTestsComponent"],
                _pipes_tests_pipes_tests_component__WEBPACK_IMPORTED_MODULE_8__["PipesTestsComponent"],
                _event_binding_tests_event_binding_tests_component__WEBPACK_IMPORTED_MODULE_9__["EventBindingTestsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-tests/basic-tests.component.html":
/*!********************************************************!*\
  !*** ./src/app/basic-tests/basic-tests.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <button (click)= 'onShowHideClick($event)' type=\"button\" name=\"ShowHide Button\">Show Hide Welcome message</button>\n  <h1 *ngIf=\"(count % 2 == 0)\" appHighlightDirectiv defaultClr=\"#ffcc66\">\n    Welcome to {{ title |  uppercase}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/basic-tests/basic-tests.component.scss":
/*!********************************************************!*\
  !*** ./src/app/basic-tests/basic-tests.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLXRlc3RzL2Jhc2ljLXRlc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/basic-tests/basic-tests.component.ts":
/*!******************************************************!*\
  !*** ./src/app/basic-tests/basic-tests.component.ts ***!
  \******************************************************/
/*! exports provided: BasicTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTestsComponent", function() { return BasicTestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTestsComponent = /** @class */ (function () {
    function BasicTestsComponent() {
        this.count = 0;
        this.title = 'angular_demo';
    }
    BasicTestsComponent.prototype.ngOnInit = function () {
    };
    BasicTestsComponent.prototype.onShowHideClick = function (event) {
        // fetching some properties of element for test
        console.log("button innerHTML is " + event.target.innerHTML);
        console.log("button type is " + event.target.type);
        console.log("button name is " + event.target.name);
        this.count++;
    };
    BasicTestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-tests',
            template: __webpack_require__(/*! ./basic-tests.component.html */ "./src/app/basic-tests/basic-tests.component.html"),
            styles: [__webpack_require__(/*! ./basic-tests.component.scss */ "./src/app/basic-tests/basic-tests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTestsComponent);
    return BasicTestsComponent;
}());



/***/ }),

/***/ "./src/app/event-binding-tests/event-binding-tests.component.html":
/*!************************************************************************!*\
  !*** ./src/app/event-binding-tests/event-binding-tests.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p (mouseenter)='onMouseEnter($event.target)' (mouseleave)='onMouseLeave($event.target)'>\n  event-binding-tests works!\n</p>\n<div> Enter any city name\n  <input type=\"text\" ngmodel name=\"cityEntered\">\n  <button (clcik)=\"getCityName()\">Click to get entered name</button>\n  Entered valus is <strong>{{enteredValue}}</strong>  \n</div>\n"

/***/ }),

/***/ "./src/app/event-binding-tests/event-binding-tests.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/event-binding-tests/event-binding-tests.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWJpbmRpbmctdGVzdHMvZXZlbnQtYmluZGluZy10ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/event-binding-tests/event-binding-tests.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/event-binding-tests/event-binding-tests.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventBindingTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBindingTestsComponent", function() { return EventBindingTestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EventBindingTestsComponent = /** @class */ (function () {
    function EventBindingTestsComponent() {
    }
    EventBindingTestsComponent.prototype.ngOnInit = function () {
        //this.highLight(this.defaultClr);
    };
    EventBindingTestsComponent.prototype.onMouseEnter = function (element) {
        //element.style.backgroundColor = 'yellow';
        this.highLight("yellow", element);
    };
    EventBindingTestsComponent.prototype.onMouseLeave = function (element) {
        //element.style.backgroundColor = 'red';
        this.highLight("red", element);
    };
    EventBindingTestsComponent.prototype.onClick = function (element) {
        this.highLight("#ADD8E6", element);
        // element.style.backgroundColor = "#ADD8E6";
        // var eleStr = JSON.stringify(element);
        // console.log('element clicked is >>> ', eleStr);
    };
    EventBindingTestsComponent.prototype.highLight = function (color, ele) {
        ele.style.backgroundColor = color;
    };
    EventBindingTestsComponent.prototype.getCityName = function () {
        this.enteredValue = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventBindingTestsComponent.prototype, "defaultClr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EventBindingTestsComponent.prototype, "onClick", null);
    EventBindingTestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-binding-tests',
            template: __webpack_require__(/*! ./event-binding-tests.component.html */ "./src/app/event-binding-tests/event-binding-tests.component.html"),
            styles: [__webpack_require__(/*! ./event-binding-tests.component.scss */ "./src/app/event-binding-tests/event-binding-tests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventBindingTestsComponent);
    return EventBindingTestsComponent;
}());



/***/ }),

/***/ "./src/app/pipes-tests/pipes-tests.component.html":
/*!********************************************************!*\
  !*** ./src/app/pipes-tests/pipes-tests.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p> My Bithday is on {{birthday | date:format }}</p>\n  <button (click)=\"toggleDateFormat(this)\"> Toggle Date Format</button>\n</div>\n<div> \n  <!--Test our custome Pipe : {{ abc | simple: 20:30:'total = '}}-->\n  Test our custome Pipe : {{ \"\" | simple: 20:30:'total = '}}\n</div>\n"

/***/ }),

/***/ "./src/app/pipes-tests/pipes-tests.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pipes-tests/pipes-tests.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpcGVzLXRlc3RzL3BpcGVzLXRlc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pipes-tests/pipes-tests.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes-tests/pipes-tests.component.ts ***!
  \******************************************************/
/*! exports provided: PipesTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesTestsComponent", function() { return PipesTestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipesTestsComponent = /** @class */ (function () {
    function PipesTestsComponent() {
        this.toggle = true;
        this.birthday = new Date(1981, 8, 14);
    }
    PipesTestsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PipesTestsComponent.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    PipesTestsComponent.prototype.toggleDateFormat = function (event) {
        this.toggle = !this.toggle;
    };
    PipesTestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pipes-tests',
            template: __webpack_require__(/*! ./pipes-tests.component.html */ "./src/app/pipes-tests/pipes-tests.component.html"),
            styles: [__webpack_require__(/*! ./pipes-tests.component.scss */ "./src/app/pipes-tests/pipes-tests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PipesTestsComponent);
    return PipesTestsComponent;
}());



/***/ }),

/***/ "./src/app/pipes-tests/simple.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes-tests/simple.pipe.ts ***!
  \********************************************/
/*! exports provided: SimplePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePipe", function() { return SimplePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimplePipe = /** @class */ (function () {
    function SimplePipe() {
    }
    SimplePipe.prototype.transform = function (value, args1, args2, args3) {
        var mul = args1 * args2;
        return args3 + mul;
    };
    SimplePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'simple'
        })
    ], SimplePipe);
    return SimplePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\anju\Angular and React\angular_demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map