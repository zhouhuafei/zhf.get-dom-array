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
    function getDomArray(element) {
        let dom = [];
        if (element) {
            // 如果是字符串
            if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() === 'string') {
                dom = [].slice.call(document.querySelectorAll(element));
            }
            // 如果是dom节点(一个元素)    原生的
            if (element.nodeType === 1) {
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
