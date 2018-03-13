'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('getDomArray', function () {
    /**
     *  @param element 第一参数 - 要获取的元素。
     *  @param parentElement 第二参数 - 在哪个父节点下获取。
     */
    function getDomArray(element, parentElement) {
        var dom = [];
        var parentDom = document;
        if (parentElement) {
            if (Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'string') {
                // 如果是字符串
                parentDom = document.querySelector(parentElement);
            } else if (parentElement.nodeType === 1) {
                // 如果是dom节点(一个元素)    原生的
                parentDom = parentElement;
            } else if (parentElement === document) {
                // 如果是document
                parentDom = parentElement;
            } else if (Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'htmlcollection' || Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'nodelist') {
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                parentDom = [].slice.call(parentElement)[0];
            } else {
                parentDom = null;
            }
        }
        if (!parentDom) {
            // 传了父级，但是没获取到父级
            return [];
        }
        if (element) {
            if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'string') {
                // 如果是字符串
                if (parentDom) {
                    dom = [].slice.call(parentDom.querySelectorAll(element));
                }
            } else if (element.nodeType === 1) {
                // 如果是dom节点(一个元素)    原生的
                dom = [element];
                if (parentDom) {
                    if (!isDomParent(parentDom, element)) {
                        dom = [];
                    }
                }
            } else if (element === document) {
                // 如果是document
                dom = [element];
                if (parentDom) {
                    dom = [];
                }
            } else if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'nodelist') {
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                dom = [].slice.call(element);
                if (parentDom) {
                    var dom2 = [];
                    dom.forEach(function (v) {
                        if (isDomParent(parentDom, v)) {
                            dom2.push(v);
                        }
                    });
                    dom = dom2;
                }
            }
        }
        return dom;
    }

    function isDomParent(parentDom, elementDom) {
        var nowDom = elementDom;
        while (nowDom !== parentDom && nowDom !== null) {
            nowDom = nowDom.parentNode;
        }
        return nowDom === parentDom;
    }

    return getDomArray;
});