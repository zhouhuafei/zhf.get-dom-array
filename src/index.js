(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('getDomArray', function () {
    /**
     *  @param element 第一参数
     *  @param parentElement 第二参数 - 只有第一参数是字符串的情况下才会有效
     */
    function getDomArray(element, parentElement) {
        let dom = [];
        let parentDom = document;
        if (parentElement) {
            // 如果是字符串
            if (Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'string') {
                parentDom = document.querySelector(parentElement);
            }
            // 如果是dom节点(一个元素)    原生的
            if (parentElement.nodeType === 1) {
                parentDom = parentElement;
            }
            // 如果是document
            if (parentElement === document) {
                parentDom = parentElement;
            }
            /*
             * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
             * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
             * */
            if (Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'htmlcollection' || Object.prototype.toString.call(parentElement).slice(8, -1).toLowerCase() === 'nodelist') {
                parentDom = [].slice.call(parentElement)[0];
            }
        }
        if (element) {
            // 如果是字符串
            if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'string') {
                dom = [].slice.call(parentDom.querySelectorAll(element));
            }
            // 如果是dom节点(一个元素)    原生的
            if (element.nodeType === 1) {
                dom = [element];
            }
            // 如果是document
            if (element === document) {
                dom = [element];
            }
            /*
             * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
             * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
             * */
            if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'nodelist') {
                dom = [].slice.call(element);
            }
        }
        return dom;
    }

    return getDomArray;
});
