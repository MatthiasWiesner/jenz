webpackJsonp([1,5],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 163;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(189);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActiveUser */
/* unused harmony export GlobalStatistic */
/* unused harmony export GlobalStatistics */
/* unused harmony export CertificateRate */
/* unused harmony export Certificate */
/* unused harmony export Link */
/* unused harmony export Attributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
/* unused harmony export CourseStatistics */
var ActiveUser = (function () {
    function ActiveUser() {
    }
    return ActiveUser;
}());

var GlobalStatistic = (function () {
    function GlobalStatistic() {
    }
    return GlobalStatistic;
}());

var GlobalStatistics = (function () {
    function GlobalStatistics() {
    }
    return GlobalStatistics;
}());

var CertificateRate = (function () {
    function CertificateRate() {
    }
    return CertificateRate;
}());

var Certificate = (function () {
    function Certificate() {
    }
    return Certificate;
}());

var Link = (function () {
    function Link() {
    }
    return Link;
}());

var Attributes = (function () {
    function Attributes() {
    }
    return Attributes;
}());

var Course = (function () {
    function Course() {
    }
    return Course;
}());

var CourseStatistics = (function () {
    function CourseStatistics() {
    }
    return CourseStatistics;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.onTouchStart = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onTouchMove = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onTouchEnd = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onMouseDown = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onMouseMove = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onMouseUp = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    AppComponent.prototype.onMouseLeave = function (event) {
        this.dataService.recognizedUserInteraction();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onTouchStart", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('touchmove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onTouchMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('touchend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onTouchEnd", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onMouseLeave", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(271),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ngui_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_counto__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_counto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_counto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__key_features_key_features_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__promo_numbers_promo_numbers_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reviews_reviews_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__world_map_world_map_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__courses_courses_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__review_card_review_card_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__course_card_course_card_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_filter_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__filter_logo_filter_logo_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__promo_numbers_component_promo_numbers_component_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__citation_citation_component__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__key_features_key_features_component__["a" /* KeyFeaturesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__promo_numbers_promo_numbers_component__["a" /* PromoNumbersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__world_map_world_map_component__["a" /* WorldMapComponent */],
            __WEBPACK_IMPORTED_MODULE_14__courses_courses_component__["a" /* CoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__review_card_review_card_component__["a" /* ReviewCardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__course_card_course_card_component__["a" /* CourseCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__filter_logo_filter_logo_component__["a" /* FilterLogoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__promo_numbers_component_promo_numbers_component_component__["a" /* PromoNumbersComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__citation_citation_component__["a" /* CitationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_counto__["CountoModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5__ngui_map__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI' }),
            __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__["a" /* QRCodeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_data_service_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CitationComponent = (function () {
    function CitationComponent(dataService) {
        this.dataService = dataService;
        dataService.addUpdateListener(this);
    }
    CitationComponent.prototype.update = function () {
        this.citation = this.dataService.getCitation();
        this.dataService.updateCompleted();
        this.primaryColor = this.dataService.getPrimaryColor();
    };
    return CitationComponent;
}());
CitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-citation',
        template: __webpack_require__(272),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], CitationComponent);

var _a;
//# sourceMappingURL=citation.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_config_config__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseCardComponent = (function () {
    function CourseCardComponent() {
        this.config = __WEBPACK_IMPORTED_MODULE_2_assets_config_config__["a" /* CONFIG */];
    }
    Object.defineProperty(CourseCardComponent.prototype, "course", {
        set: function (course) {
            this._course = course;
            // hacky way to build up the qrCodeUrl
            this.qrCodeUrl = this.getHost(this._course.attributes.image_url) + this.config.directCourseUrl + this._course.attributes.slug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseCardComponent.prototype, "primaryColor", {
        set: function (primaryColor) {
            this._primaryColor = primaryColor;
        },
        enumerable: true,
        configurable: true
    });
    CourseCardComponent.prototype.getHost = function (url) {
        var location = document.createElement('a');
        location.href = url;
        return location.hostname;
    };
    return CourseCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Course */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Course */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Course */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Course */]) === "function" && _b || Object])
], CourseCardComponent.prototype, "course", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], CourseCardComponent.prototype, "primaryColor", null);
CourseCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course-card',
        template: __webpack_require__(273),
        styles: [__webpack_require__(255)]
    })
], CourseCardComponent);

var _a, _b;
//# sourceMappingURL=course-card.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.courseService = courseService;
        this.navigatorActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.courseService.addUpdateListener(this);
        this.courseService.addAnimationListener(this);
    }
    CoursesComponent.prototype.update = function () {
        var _this = this;
        this.courseService.getCourses().subscribe(function (platformsAndCourses) {
            var platforms = platformsAndCourses[0];
            var coursesArray = platformsAndCourses.slice(1, platformsAndCourses.length);
            for (var i = 0; i < coursesArray.length; i++) {
                for (var _i = 0, _a = coursesArray[i]; _i < _a.length; _i++) {
                    var course = _a[_i];
                    course['platform'] = platforms[i].displayName;
                    course['primaryColor'] = platforms[i].primaryColor;
                }
            }
            _this.courses = coursesArray.reduce(function (prev, next) {
                return prev.concat(next);
            });
            var filteredCourses = _this.courses.filter(function (course) { return (course.attributes.status === 'announced' || course.attributes.status === 'active'); });
            if (filteredCourses.length > 0) {
                _this.courses = filteredCourses;
            }
            var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, 4000);
            _this.subscription = timer.subscribe(function () { return _this.reloadCarousel(); }); //ugly but works
        });
        this.primaryColor = this.courseService.getPrimaryColor();
    };
    CoursesComponent.prototype.nextAnimationStep = function () {
        this.navigatorActions.emit({ action: 'carousel', params: ['next'] });
    };
    CoursesComponent.prototype.reloadCarousel = function () {
        if (!this.carousel) {
            return;
        }
        $(this.carousel.nativeElement).removeClass('initialized');
        this.navigatorActions.emit({ action: 'carousel', params: [{}] });
        this.subscription.unsubscribe();
        this.courseService.updateCompleted();
    };
    return CoursesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('carousel'),
    __metadata("design:type", Object)
], CoursesComponent.prototype, "carousel", void 0);
CoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-courses',
        template: __webpack_require__(274),
        styles: [__webpack_require__(256)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], CoursesComponent);

var _a;
//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_config_config__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import constants


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.config = __WEBPACK_IMPORTED_MODULE_4_assets_config_config__["a" /* CONFIG */];
        this.updateListener = [];
        this.animationListener = [];
        this.resetListener = [];
        this.updatingUnits = 0;
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(60000, 10000);
    }
    //"Listener" - Functions
    DataService.prototype.addUpdateListener = function (listener) {
        this.updateListener.push(listener);
        this.updatingUnits++;
        listener.update();
    };
    DataService.prototype.addAnimationListener = function (listener) {
        this.animationListener.push(listener);
    };
    DataService.prototype.addResetListener = function (listener) {
        this.resetListener.push(listener);
    };
    //General
    DataService.prototype.getPlatforms = function () {
        return this.config.platforms;
    };
    DataService.prototype.update = function () {
        this.updatingUnits += this.updateListener.length;
        this.updateListener.forEach(function (listener) { return listener.update(); });
    };
    DataService.prototype.reset = function () {
        this.resetListener.forEach(function (listener) { return listener.reset(); });
    };
    DataService.prototype.updateCompleted = function () {
        this.updatingUnits = Math.max(this.updatingUnits - 1, 0);
    };
    DataService.prototype.recognizedUserInteraction = function () {
        var _this = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.timer.subscribe(function () { return _this.doNextAnimationStep(); });
    };
    DataService.prototype.isUpdating = function () {
        return this.updatingUnits > 0;
    };
    DataService.prototype.areAllPlatformsSelected = function () {
        return this.getUnselectedPlatforms().length === 0;
    };
    DataService.prototype.doNextAnimationStep = function () {
        this.animationListener.forEach(function (listener) { return listener.nextAnimationStep(); });
    };
    //Private functions
    DataService.prototype.getSelectedPlatforms = function () {
        return this.config.platforms.filter(function (platform) { return platform.isFilterSelected; });
    };
    DataService.prototype.getUnselectedPlatforms = function () {
        return this.config.platforms.filter(function (platform) { return !platform.isFilterSelected; });
    };
    DataService.prototype.getJsonObservable = function (url) {
        return this.http.get(url).map(this.extractJsonData);
    };
    DataService.prototype.getJson = function (url) {
        return this.http.get(url).map(this.extractJson);
    };
    DataService.prototype.extractJsonData = function (response) {
        var json = response.json();
        return (json) ? json.data : {};
    };
    DataService.prototype.extractJson = function (response) {
        var json = response.json();
        return (json) ? json : {};
    };
    // ===== FILTER COMPONENT =====
    DataService.prototype.togglePlatformState = function (platform) {
        if (platform.isFilterSelected) {
            if (this.getSelectedPlatforms().length == 1) {
                this.getUnselectedPlatforms().forEach(function (p) { return p.isFilterSelected = true; });
            }
            else {
                this.getSelectedPlatforms().forEach(function (p) {
                    if (p != platform) {
                        p.isFilterSelected = false;
                    }
                });
            }
        }
        else {
            this.getSelectedPlatforms().forEach(function (p) { return p.isFilterSelected = false; });
            platform.isFilterSelected = true;
        }
        this.update();
    };
    // ===== REVIEW COMPONENT =====
    DataService.prototype.getReviews = function () {
        var reviews = [];
        this.getSelectedPlatforms().forEach(function concatAndAddPlatform(platform) {
            var reviewsWithPlatform = [];
            var platformName = platform.displayName;
            for (var _i = 0, _a = platform.reviews; _i < _a.length; _i++) {
                var review = _a[_i];
                review['platform'] = platformName;
                reviewsWithPlatform.push(review);
            }
            reviews = reviews.concat(reviewsWithPlatform);
        });
        return reviews;
    };
    // ===== COURSE COMPONENT =====
    DataService.prototype.getCourses = function () {
        var _this = this;
        var observables = [];
        observables.push(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.getSelectedPlatforms()));
        this.getSelectedPlatforms().
            forEach(function (platform) { return observables.push(_this.getJsonObservable(platform.rootUrl + _this.config.courseSubUrl)); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(observables);
    };
    // ===== WORLD MAP COMPONENT =====
    DataService.prototype.getWorldPositions = function (startDate, endDate) {
        var _this = this;
        var observables = [];
        var subUrl = this.config.geoSubUrl + '?' + this.config.geoStartParam + '=' + startDate.toISOString() + '&' + this.config.geoEndParam + '=' + endDate.toISOString();
        observables.push(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(this.getSelectedPlatforms()));
        this.getSelectedPlatforms().
            forEach(function (platform) { return observables.push(_this.getJson(platform.rootUrl + subUrl)); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(observables);
    };
    // ===== PROMO NUMBER COMPONENT =====
    DataService.prototype.getGlobalNumbers = function () {
        var _this = this;
        var observables = [];
        this.getSelectedPlatforms()
            .forEach(function (platform) { return observables.push(_this.getJson(platform.rootUrl + _this.config.globalsSubUrl)); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(observables);
    };
    DataService.prototype.getActiveUsers = function () {
        var _this = this;
        var observables = [];
        var startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() - 30);
        var endTime = new Date();
        var subUrl = '?' + this.config.activeStartParam + '=' + startTime.toISOString() + '&' + this.config.activeEndParam + '=' + endTime.toISOString();
        this.getSelectedPlatforms()
            .forEach(function (platform) { return observables.push(_this.getJson(platform.rootUrl + _this.config.activeUserSubUrl + subUrl)); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(observables);
    };
    // ===== FEATURE CARD COMPONENT =====
    DataService.prototype.getFeatureCards = function () {
        return __WEBPACK_IMPORTED_MODULE_4_assets_config_config__["b" /* FEATURE_CARDS */];
    };
    // ===== CITATION COMPONENT =====
    DataService.prototype.getCitation = function () {
        if (this.areAllPlatformsSelected()) {
            return this.config.citationAll;
        }
        return this.getSelectedPlatforms()[0].citation;
    };
    // ===== PRIMARY COLOR =====
    DataService.prototype.getPrimaryColor = function () {
        if (this.getSelectedPlatforms().length === 1) {
            return this.getSelectedPlatforms()[0].primaryColor;
        }
        else {
            return this.getPlatforms().filter(function (platform) { return platform.rootUrl === 'https://open.hpi.de'; })[0].primaryColor;
        }
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data-service.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dashboard__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterLogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterLogoComponent = (function () {
    function FilterLogoComponent(filterService) {
        this.filterService = filterService;
    }
    return FilterLogoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_dashboard__["b" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_dashboard__["b" /* Platform */]) === "function" && _a || Object)
], FilterLogoComponent.prototype, "platform", void 0);
FilterLogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filter-logo',
        template: __webpack_require__(275),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _b || Object])
], FilterLogoComponent);

var _a, _b;
//# sourceMappingURL=filter-logo.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = (function () {
    function FilterComponent(filterService) {
        this.filterService = filterService;
    }
    return FilterComponent;
}());
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(276),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], FilterComponent);

var _a;
//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyFeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyFeaturesComponent = (function () {
    function KeyFeaturesComponent(dataService) {
        this.dataService = dataService;
        this.featureCards = dataService.getFeatureCards();
    }
    return KeyFeaturesComponent;
}());
KeyFeaturesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-key-features',
        template: __webpack_require__(277),
        styles: [__webpack_require__(259)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], KeyFeaturesComponent);

var _a;
//# sourceMappingURL=key-features.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoNumbersComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromoNumbersComponentComponent = (function () {
    function PromoNumbersComponentComponent() {
    }
    Object.defineProperty(PromoNumbersComponentComponent.prototype, "primaryColor", {
        set: function (primaryColor) {
            this._primaryColor = primaryColor;
        },
        enumerable: true,
        configurable: true
    });
    return PromoNumbersComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard__["a" /* PromoNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard__["a" /* PromoNumber */]) === "function" && _a || Object)
], PromoNumbersComponentComponent.prototype, "promo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PromoNumbersComponentComponent.prototype, "primaryColor", null);
PromoNumbersComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-promo-numbers-component',
        template: __webpack_require__(278),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [])
], PromoNumbersComponentComponent);

var _a;
//# sourceMappingURL=promo-numbers-component.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoNumbersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromoNumbersComponent = (function () {
    function PromoNumbersComponent(numberService) {
        this.numberService = numberService;
        this.numberService.addUpdateListener(this);
        this.initializePrivateUpdater();
    }
    PromoNumbersComponent.prototype.initializePrivateUpdater = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, 60000);
        timer.subscribe(function () { return _this.updateNumbers(true); });
    };
    PromoNumbersComponent.prototype.handlePromoNumberClick = function (promoNumber) {
        var last = this.promoNumbers[this.promoNumbers.length - 1];
        if (promoNumber === last) {
            this.numberService.reset();
        }
    };
    PromoNumbersComponent.prototype.updateNumbers = function (isPrivateUpdate) {
        var _this = this;
        var enrollments = 0;
        var users = 0;
        var courses = 0;
        var certificates = 0;
        var activeUsers = 0;
        this.numberService.getGlobalNumbers().subscribe(function (array) {
            array.forEach(function (element) {
                var statistic = element.global_statistic;
                enrollments += statistic.total_enrollments;
                users += statistic.confirmed_users;
                courses += statistic.courses_count;
                certificates += statistic.certificates_count;
            });
            _this.numberService.getActiveUsers().subscribe(function (array) {
                array.forEach(function (element) {
                    activeUsers += element.count;
                });
                _this.updatePromoNumbers(enrollments, users, courses, certificates, activeUsers);
                if (isPrivateUpdate) {
                    _this.numberService.updateCompleted();
                }
            });
        });
    };
    PromoNumbersComponent.prototype.update = function () {
        this.primaryColor = this.numberService.getPrimaryColor();
        this.updateNumbers(false);
    };
    PromoNumbersComponent.prototype.updatePromoNumbers = function (enrollments, users, courses, certificates, activeUsers) {
        var enrollmentsOld = 0;
        var usersOld = 0;
        var coursesOld = 0;
        var certificatesOld = 0;
        var activeUsersOld = 0;
        if (this.promoNumbers) {
            enrollmentsOld = this.promoNumbers[0].count;
            usersOld = this.promoNumbers[1].count;
            coursesOld = this.promoNumbers[2].count || 0;
            certificatesOld = this.promoNumbers[3].count || 0;
            activeUsersOld = this.promoNumbers[4].count || 0;
        }
        this.promoNumbers = [
            { count: enrollments, countOld: enrollmentsOld, title: 'Enrollments', description: 'Total enrollments' },
            { count: users, countOld: usersOld, title: 'Users', description: 'Unique users' },
            { count: courses, countOld: coursesOld, title: 'Courses', description: 'Available courses' },
            { count: certificates, countOld: certificatesOld, title: 'Certificates', description: 'Handed certificates' },
            { count: activeUsers, countOld: activeUsersOld, title: 'Active users', description: 'Active users of the last 30 min' }
        ];
    };
    return PromoNumbersComponent;
}());
PromoNumbersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-promo-numbers',
        template: __webpack_require__(279),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], PromoNumbersComponent);

var _a;
//# sourceMappingURL=promo-numbers.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewCardComponent = (function () {
    function ReviewCardComponent() {
    }
    return ReviewCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard__["c" /* Review */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard__["c" /* Review */]) === "function" && _a || Object)
], ReviewCardComponent.prototype, "review", void 0);
ReviewCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-card',
        template: __webpack_require__(280),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [])
], ReviewCardComponent);

var _a;
//# sourceMappingURL=review-card.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = (function () {
    function ReviewsComponent(reviewService) {
        this.reviewService = reviewService;
        this.leftArrowUrl = 'assets/arrows/left-arrow.png';
        this.rightArrowUrl = 'assets/arrows/right-arrow.png';
        //Component-methods
        this.navigatorActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reviewService.addUpdateListener(this);
    }
    // Service-methods
    ReviewsComponent.prototype.update = function () {
        var _this = this;
        this.reviews = this.reviewService.getReviews();
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, 2000);
        this.subscription = timer.subscribe(function () { return _this.reloadSlider(); }); //ugly but works
    };
    ReviewsComponent.prototype.previousReview = function () {
        // if (this.getActiveItem() != this.items.first){
        this.navigatorActions.emit({ action: 'carousel', params: ['prev'] });
        // }
    };
    ReviewsComponent.prototype.nextReview = function () {
        // if (this.getActiveItem() != this.items.last) {
        this.navigatorActions.emit({ action: 'carousel', params: ['next'] });
        // }
    };
    ReviewsComponent.prototype.reloadSlider = function () {
        if (!this.slider) {
            return;
        }
        // workaround proposed by Rubyboy (a Materialize guy)
        var jSlider = $(this.slider.nativeElement);
        jSlider.find('.indicators').detach();
        jSlider.removeClass('initialized');
        this.navigatorActions.emit({ action: 'carousel', params: [{ fullWidth: true, noWrap: false }] });
        this.subscription.unsubscribe();
        this.reviewService.updateCompleted();
    };
    ReviewsComponent.prototype.getActiveItem = function () {
        return this.items.find(this.findActiveItem);
    };
    ReviewsComponent.prototype.findActiveItem = function (item) {
        return item.nativeElement.classList.contains('active');
    };
    ReviewsComponent.prototype.isFirst = function () {
        // return this.items ? this.getActiveItem() == this.items.first : false;
        return false;
    };
    ReviewsComponent.prototype.isLast = function () {
        // return this.items ? this.getActiveItem() == this.items.last : false;
        return false;
    };
    return ReviewsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('item'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], ReviewsComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('prev'),
    __metadata("design:type", Object)
], ReviewsComponent.prototype, "prev", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('next'),
    __metadata("design:type", Object)
], ReviewsComponent.prototype, "next", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", Object)
], ReviewsComponent.prototype, "slider", void 0);
ReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reviews',
        template: __webpack_require__(281),
        styles: [__webpack_require__(263)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _b || Object])
], ReviewsComponent);

var _a, _b;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorldMapComponent = (function () {
    function WorldMapComponent(dataService) {
        this.dataService = dataService;
        this.userPositions = [];
        this.currentHour = new Date().getHours() + 1; //.getMinutes(); //.getHours();
        this.rangeValues = [this.currentHour - 2, this.currentHour];
        this.lastRangeValues = [];
        this.rangeConfig = {
            behaviour: 'drag',
            animate: true,
            connect: true,
            step: 0.5,
            margin: 0.5,
            start: [this.currentHour - 2, this.currentHour],
            range: {
                min: this.currentHour - 24,
                max: this.currentHour
            },
            pips: {
                mode: 'count',
                values: 25,
                density: 2,
                stepped: true,
                format: { to: this.formatHours }
            }
        };
        this.mapOptions = {
            "center": "Potsdam, Germany",
            "zoom": 2,
            "mapTypeControl": false,
            "streetViewControl": false,
            "scaleControl": false,
            "zoomControl": false,
            "fullscreenControl": false,
            "minZoom": 2,
            "maxZoom": 14,
            "styles": [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#2b3638"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2b3638"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#24282b"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#24282b"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        };
        this.dataService.addUpdateListener(this);
        this.dataService.addAnimationListener(this);
        this.dataService.addResetListener(this);
        this.initializeTimeRangeUpdater();
    }
    WorldMapComponent.prototype.callApisAndSetMarkers = function (startDate, endDate) {
        var _this = this;
        this.dataService.getWorldPositions(startDate, endDate).subscribe(function (platformAndPositions) {
            var platforms = platformAndPositions[0];
            var geoArrays = platformAndPositions.slice(1, platformAndPositions.length);
            var markers = [];
            for (var i = 0; i < platforms.length; i++) {
                for (var j = 0; j < geoArrays[i].length; j++) {
                    markers.push([
                        // adding offset to the markers
                        geoArrays[i][j].lat + ((Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random())),
                        geoArrays[i][j].lon + ((Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random())),
                        platforms[i].mapMarkerUrl
                    ]);
                }
            }
            _this.userPositions = markers;
            _this.dataService.updateCompleted();
        });
    };
    WorldMapComponent.prototype.update = function () {
        this.handleChangedRange();
        this.primaryColor = this.dataService.getPrimaryColor();
    };
    WorldMapComponent.prototype.onMapReady = function (googleMap) {
        var maxBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-81, -175), new google.maps.LatLng(81, 175));
        this.map = googleMap;
        // limitMap(googleMap, maxBounds);
    };
    WorldMapComponent.prototype.formatHours = function (value, type) {
        if (value == new Date().getHours() + 1) {
            return ' Now';
        }
        if (value < 0) {
            value = 24 + value;
        }
        return Math.round(value);
    };
    WorldMapComponent.prototype.updateTimeRange = function () {
        this.sliderRef.slider.updateOptions({
            range: {
                min: this.currentHour - 24,
                max: this.currentHour
            },
            pips: {
                mode: 'count',
                values: 25,
                density: 2,
                stepped: true,
                format: { to: this.formatHours }
            }
        });
    };
    WorldMapComponent.prototype.initializeTimeRangeUpdater = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, 1200000);
        timer.subscribe(function () { return _this.updateTimeRange(); });
    };
    WorldMapComponent.prototype.nextAnimationStep = function () {
        if (this.rangeValues[1] < this.currentHour) {
            this.rangeValues = [this.rangeValues[0] + 1, this.rangeValues[1] + 1]; //hop one hour forward
        }
        else {
            this.rangeValues = [this.currentHour - 24, this.currentHour - 22];
        }
    };
    WorldMapComponent.prototype.onChange = function (event) {
        if (!this.equalArrays(this.lastRangeValues, this.rangeValues)) {
            this.lastRangeValues = this.rangeValues;
            this.handleChangedRange();
        }
    };
    WorldMapComponent.prototype.handleChangedRange = function () {
        var startDate = new Date();
        var endDate = new Date();
        var minutes = this.getMinutes(this.rangeValues[0]);
        if (this.rangeValues[0] < 0) {
            minutes = -minutes;
        }
        startDate.setUTCHours(this.rangeValues[0], minutes, 0, 0);
        minutes = this.getMinutes(this.rangeValues[1]);
        if (this.rangeValues[1] < 0) {
            minutes = -minutes;
        }
        endDate.setUTCHours(this.rangeValues[1], minutes, 0, 0);
        this.callApisAndSetMarkers(startDate, endDate);
    };
    WorldMapComponent.prototype.equalArrays = function (arrayA, arrayB) {
        return (arrayA.length == arrayB.length) && arrayA.every(function (element, index) { return element === arrayB[index]; });
    };
    WorldMapComponent.prototype.getMinutes = function (decimalNumber) {
        var afterDecimalPoint = decimalNumber.toString().split(".")[1];
        if (afterDecimalPoint) {
            return afterDecimalPoint * 0.1 * 60;
        }
        else {
            return 0;
        }
    };
    WorldMapComponent.prototype.reset = function () {
        this.rangeValues = [this.currentHour - 2, this.currentHour];
        var map = this.map;
        if (map) {
            var center = new google.maps.LatLng(21.956913, 24.766352);
            map.setCenter(center);
            map.setZoom(this.mapOptions.zoom);
        }
    };
    return WorldMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sliderRef'),
    __metadata("design:type", Object)
], WorldMapComponent.prototype, "sliderRef", void 0);
WorldMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'world-map',
        template: __webpack_require__(282),
        styles: [__webpack_require__(264)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]) === "function" && _a || Object])
], WorldMapComponent);

var _a;
//# sourceMappingURL=world-map.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPEN_HPI_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPEN_SAP_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MOOC_HOUSE_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OPEN_WHO_REVIEWS; });
var OPEN_HPI_REVIEWS = [
    { statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: 'assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer' },
    { statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: 'assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934)' },
    { statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: 'assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student' },
];
var OPEN_SAP_REVIEWS = [
    { statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: 'assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer' },
    { statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: 'assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934)' },
    { statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: 'assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student' },
];
var MOOC_HOUSE_REVIEWS = [
    { statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: 'assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer' },
    { statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: 'assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934)' },
    { statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: 'assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student' },
];
var OPEN_WHO_REVIEWS = [
    { statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: 'assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer' },
    { statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: 'assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934)' },
    { statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: 'assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student' },
];
//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".overlay {   \r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed; \r\n    z-index: 99999;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.7);\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n}\r\n\r\n.preloader-wrapper {\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin-left: -32px;\r\n\tmargin-top: -32px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "h2 {\r\n\ttext-align: center;\r\n\tfont-size: 2.5rem;\r\n\tmargin-top: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".card {\r\n\tmargin: 0;\r\n}\r\n\r\nh2 {\r\n\tdisplay: block;\r\n\tfont-size: 25px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n\tcolor: black;\r\n}\r\n\r\n.card .card-image {\r\n\theight: 233px;\r\n\tdisplay: block;\r\n\tvertical-align: middle;\r\n\toverflow: hidden;\r\n}\r\n.card .card-content .card-title {\r\n\tmargin-bottom: 0px;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color:black;\r\n}\r\n.card .card-content .card-title .btn {\r\n\tline-height: 32px;\r\n}\r\n.card .card-content .card-title .btn .material-icons{\r\n\tline-height: 40px;\r\n\tfont-size: 36px;\r\n}\r\n.card .card-content p {\r\n\tmargin-top: 6px;\r\n\tcolor: #696969;\r\n}\r\n\r\n.card .card-content {\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.card .card-reveal span {\r\n\r\n}\r\n.authors {\r\n\tfont-size: 17px;\r\n\theight: 30px;\r\n}\r\n\r\n.activator {\r\n\tcursor: pointer;\r\n}\r\n.truncate {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    white-space: normal;\r\n}\r\n\r\nspan#pl-indicator {\r\n    z-index: 1000;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".carousel {\r\n\toverflow: visible;\r\n\tmargin-top: -115px;\r\n}\r\n.carousel-item {\r\n\twidth: 430px;\r\n}\r\n.carousel-item p {\r\n    font-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "img {\r\n  margin: 0 0.75rem;\r\n  height: 52px;\r\n  cursor: pointer;\r\n  opacity: 0.4;\r\n  -webkit-filter: grayscale(1);\r\n          filter: grayscale(1);\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.selected {\r\n  opacity: 1;\r\n  -webkit-filter: grayscale(0);\r\n          filter: grayscale(0);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "h2 {\r\n\ttext-align: center;\r\n\tfont-size: 2.56rem;\r\n}\r\nh5 {\r\n\tfont-size: 1.64em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "hr {\r\n\twidth: 70%;\r\n\tborder: 1px solid #9E9E9E;\r\n\tbackground-color: #9E9E9E;\r\n}\r\nh1 {\r\n\tfont-weight: 400;\r\n\tfont-size: 2.5rem;\r\n\tmargin: 0;\r\n}\r\nh4 {\t\r\n\tfont-size: 1.4em;\r\n}\r\nspan {\r\n\tfont-size:1.3em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".row {\r\n\tmargin-bottom: 0;\r\n\tpadding-left: 24px;\r\n}\r\n\r\n.col.s2 {\r\n\tmargin-right: -7px;\r\n\twidth: 20.666667%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".bubble {\r\n\tpadding: 18px;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.bubble-arrow {\r\n\twidth: 0;\r\n    height: 0;\r\n    margin-left: 35px;\r\n\tmargin-bottom: 10px;\r\n    border: 12px solid;\r\n    border-color: #fff transparent transparent #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".carousel {\r\n\tmin-height: 255px;\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\na.arrow_prev {\r\n  display:block;\r\n  width:60px;\r\n  height:60px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  margin: 185px 0 0 -60px;\r\n}\r\n\r\na.arrow_next {\r\n  display:block;\r\n  width:60px;\r\n  height:60px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  margin: 185px 0 0 720px;\r\n}\r\n\r\n.row {\r\n\tmargin-bottom: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports
exports.i(__webpack_require__(251), "");

// module
exports.push([module.i, "ngui-map {\r\n  display: block;\r\n  height: 400px;\r\n}\r\n\r\ninput{\r\n\tborder: none;\r\n}\r\n\r\n.range-field {\r\n    width: 1400px;\r\n    margin: 0 auto;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;}\r\n\r\n.noUI {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding-top: 17px;\r\n    padding-bottom: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"dataService.isUpdating()\" class=\"overlay\">\r\n\t<div class=\"preloader-wrapper big active\">\r\n\t\t<div class=\"spinner-layer\" style=\"border-color: #67DE91\">\r\n\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>-->\r\n<app-filter></app-filter>\r\n\r\n<world-map></world-map>\r\n\r\n  <div class=\"section\">\r\n    <app-promo-numbers></app-promo-numbers>\r\n  </div>\r\n<div class=\"container\">\r\n  <div class=\"section\">\r\n    <!--<app-key-features></app-key-features>-->\r\n\t<app-citation></app-citation>\r\n  </div>\r\n  <div class=\"section\">\r\n    <app-courses></app-courses>\r\n  </div>\r\n  <div class=\"section\">\r\n    <app-reviews></app-reviews>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<h2 [ngStyle]= \"{'color': primaryColor}\"> {{citation}} </h2>"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<div class=\"card white\">\r\n\t<div class=\"card-image waves-effect waves-block waves-light\">\r\n\t\t<span>\r\n\t\t\t<span id=\"pl-indicator\"\r\n\t\t\t\t  class=\"new badge\"\r\n\t\t\t\t  data-badge-caption=\"\"\r\n\t\t\t\t [ngStyle]= \"{'background-color': _course.primaryColor}\">{{_course.platform}}</span>\r\n\t\t\t<img class=\"activator\" src=\"{{_course.attributes.image_url}}\">\r\n\t\t</span>\r\n\t</div>\r\n\t<div class=\"card-content\">\r\n\t\t<span class=\"card-title activator truncate\">{{_course.attributes.title}}</span>\r\n\t\t<span class=\"authors activator truncate\" [ngStyle]= \"{'color': _primaryColor}\">{{_course.attributes.teachers}}</span>\r\n\t\t<p class=\"truncate activator\">{{_course.attributes.abstract}}</p>\r\n\t</div>\r\n\t<div class=\"card-reveal\">\r\n\t\t<span class=\"card-title grey-text text-darken-4\" style=\"font-size: 22px\">\r\n\t\t\t<i class=\"material-icons right activator\">close</i>\r\n\t\t\t{{_course.attributes.title}}\r\n\t\t</span>\r\n\t\t\r\n\t\t<span class=\"authors activator\" [ngStyle]= \"{'color': _primaryColor}\">{{_course.attributes.teachers}}</span>\r\n\t\t<br />\r\n\t\t<qr-code [value]=\"qrCodeUrl\" [size]=\"250\" [padding]=\"20\"></qr-code>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div #carousel *ngIf=\"courses\" materialize=\"carousel\" class=\"carousel\" [materializeActions]=\"navigatorActions\">\r\n\t<div *ngFor=\"let course of courses\" class=\"carousel-item\">\r\n\t\t<app-course-card [course]=\"course\" [primaryColor]=\"primaryColor\"></app-course-card>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<img [ngClass]=\"{'selected': platform.isFilterSelected}\" (click)=\"filterService.togglePlatformState(platform)\" [src]=\"platform.logoUrl\" />"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align\" style=\"display: flex; justify-content: center; padding-top: 1rem;\">\r\n  <div *ngFor=\"let platform of filterService.getPlatforms(); let iFilter = index\">\r\n    <div [style.padding-top]=\"iFilter == 1 ? '4px' : '0px'\">\r\n\t    <app-filter-logo [platform]=\"platform\"></app-filter-logo>\r\n\t</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataService.areAllPlatformsSelected()\">\r\n\t<h2>What our MOOCs offer</h2>\r\n\t<div class=\"row\">\r\n\t\t<div *ngFor=\"let featureCard of featureCards\" class=\"col s3\">\r\n\t\t\t<div class=\"center promo promo-example\">\r\n              <img src={{featureCard.imageUrl}} class=\"responsive-img\">\r\n              <p class=\"promo-caption\">{{featureCard.title}}</p>\r\n              <p class=\"light center\">{{featureCard.text}}</p>\r\n            </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<div class=\"center promo\">\r\n\t<h1 [ngStyle]=\"{'color': _primaryColor}\"><div counto [step]=\"30\" \r\n\t\t\t [countTo]=\"promo.count\" \r\n\t\t\t [countFrom]=\"promo.countOld\" \r\n\t\t\t [duration]=\"1.5\" \r\n\t\t\t (countoChange)=\"intermediate = $event\">{{intermediate | number:'1.0-0'}}</div></h1>\r\n\t<hr />\r\n\t<h4>{{promo.title}}</h4>\r\n\t<!--<span>{{promo.description}}</span>-->\r\n</div>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div *ngFor=\"let promo of promoNumbers\" (click)=\"handlePromoNumberClick(promo)\" class=\"col s2\">\r\n\t\t<app-promo-numbers-component [primaryColor]=\"primaryColor\" [promo]=promo></app-promo-numbers-component>\r\n\t</div>\r\n</div>\t"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel transparent z-depth-0\">\r\n\t<div class=\"bubble\">\r\n\t\t{{review.statement}}\r\n\t</div>\r\n\t<div class=\"bubble-arrow\">\r\n\t</div>\r\n\t<div class=\"row valign-wrapper\">\r\n\t\t<div class=\"col s2\">\r\n\t\t\t<img [src]=\"review.imageUrl\" class=\"circle responsive-img\">\r\n\t\t</div>\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"black-text\">\r\n\t\t\t\t{{review.author}}\r\n\t\t\t\t<br>\r\n\t\t\t\t{{review.platform}}\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<a #prev [ngClass]=\"{'disabled': isFirst()}\" [ngStyle]=\"{'background': 'url(' + leftArrowUrl + ') top left no-repeat'}\" class=\"arrow_prev\" (click)=\"previousReview()\"></a>\r\n<a #next [ngClass]=\"{'disabled': isLast()}\" [ngStyle]=\"{'background': 'url(' + rightArrowUrl + ') top left no-repeat'}\" class=\"arrow_next\" (click)=\"nextReview()\"></a>\r\n\r\n<div #slider class=\"carousel carousel-slider\" *ngIf=\"reviews\" materialize=\"carousel\" [materializeParams]=\"[{fullWidth: true, noWrap: false}]\" data-indicators=\"true\" [materializeActions]=\"navigatorActions\">\r\n\t<div *ngFor=\"let review of reviews; let iReview = index\">\r\n\t\t<div #item class=\"carousel-item grey lighten-3\" *ngIf=\"iReview % 2 === 0\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t<app-review-card [review]=\"reviews[iReview]\"></app-review-card>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s6\" *ngIf=\"iReview + 1 < reviews.length\">\r\n\t\t\t\t\t<app-review-card [review]=\"reviews[iReview + 1]\"></app-review-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<ngui-map #map center=\"21.956913, 24.766352\"[options]=\"mapOptions\" (mapReady$)=\"onMapReady($event)\">\r\n   <marker *ngFor=\"let pos of userPositions\"\r\n   \t\t\t[position]= \"[pos[0], pos[1]]\"\r\n   \t\t\t[icon]=\"{\r\n\t\t       url: pos[2],\r\n\t\t       scaleSize: [1,1]}\">\r\n\t</marker>\r\n</ngui-map>\r\n\r\n\r\n<div class=\"noUI\">\r\n\t<nouislider [config]=\"rangeConfig\" [(ngModel)]=\"rangeValues\" (ngModelChange)=\"onChange($event)\"  #sliderRef></nouislider>\r\n</div>\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Platform; });
/* unused harmony export Config */
/* unused harmony export FeatureCard */
var PromoNumber = (function () {
    function PromoNumber() {
    }
    return PromoNumber;
}());

var Review = (function () {
    function Review() {
    }
    return Review;
}());

var Platform = (function () {
    function Platform() {
    }
    return Platform;
}());

var Config = (function () {
    function Config() {
    }
    return Config;
}());

var FeatureCard = (function () {
    function FeatureCard() {
    }
    return FeatureCard;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assets_reviews_reviews__ = __webpack_require__(188);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEATURE_CARDS; });

var OPEN_HPI = {
    rootUrl: 'https://open.hpi.de',
    displayName: 'openHPI',
    logoUrl: 'assets/logos/open_hpi_logo.png',
    mapMarkerUrl: 'assets/marker/hpi.svg',
    reviews: __WEBPACK_IMPORTED_MODULE_0_assets_reviews_reviews__["a" /* OPEN_HPI_REVIEWS */],
    isFilterSelected: true,
    citation: 'Be curious, be social, be successful.',
    primaryColor: '#de6212'
};
var OPEN_SAP = {
    rootUrl: 'https://open.sap.com',
    displayName: 'openSAP',
    logoUrl: 'assets/logos/openSAP_Logo_neg.png',
    mapMarkerUrl: 'assets/marker/sap.svg',
    reviews: __WEBPACK_IMPORTED_MODULE_0_assets_reviews_reviews__["b" /* OPEN_SAP_REVIEWS */],
    isFilterSelected: false,
    citation: 'Learn anywhere, anytime and on any device!',
    primaryColor: '#f0ab00'
};
var MOOC_HOUSE = {
    rootUrl: 'https://mooc.house',
    displayName: 'mooc.house',
    logoUrl: 'assets/logos/mooc_house_logo_neg_srgb_300.png',
    mapMarkerUrl: 'assets/marker/mooc.svg',
    reviews: __WEBPACK_IMPORTED_MODULE_0_assets_reviews_reviews__["c" /* MOOC_HOUSE_REVIEWS */],
    isFilterSelected: false,
    citation: 'Learn online together. Anytime, anywhere.',
    primaryColor: '#abb324'
};
var OPEN_WHO = {
    rootUrl: 'https://openwho.org',
    displayName: 'openWHO',
    logoUrl: 'assets/logos/who_logo_white.png',
    mapMarkerUrl: 'assets/marker/who.svg',
    reviews: __WEBPACK_IMPORTED_MODULE_0_assets_reviews_reviews__["d" /* OPEN_WHO_REVIEWS */],
    isFilterSelected: false,
    citation: 'Equip frontline responders with the knowledge to better manage health emergencies.',
    primaryColor: '#0b72b5'
};
var CONFIG = {
    platforms: [OPEN_HPI, OPEN_SAP, MOOC_HOUSE, OPEN_WHO],
    courseSubUrl: '/api/v2/courses',
    directCourseUrl: '/courses/',
    geoSubUrl: '/api/v2/stats/geo.json',
    geoStartParam: 'start_date',
    geoEndParam: 'end_date',
    globalsSubUrl: '/api/v2/stats/global.json',
    activeUserSubUrl: '/api/v2/stats/active_users',
    activeStartParam: 'start_date',
    activeEndParam: 'end_date',
    citationAll: 'Massive Open Online Courses'
};
var FEATURE_CARDS = [
    { imageUrl: 'assets/many-people.svg', title: 'Massive', text: 'Learn with thousands of interested students.' },
    { imageUrl: 'assets/open-door.svg', title: 'Open', text: 'Everyone can participate. Sign-Up is free.' },
    { imageUrl: 'assets/online.svg', title: 'Online', text: 'Learn anywhere, at any time. Set your own plans.' },
    { imageUrl: 'assets/online-course.svg', title: 'Courses', text: 'A huge variety of topics, waiting to be explored.' }
];
//# sourceMappingURL=config.js.map

/***/ })

},[565]);
//# sourceMappingURL=main.bundle.js.map