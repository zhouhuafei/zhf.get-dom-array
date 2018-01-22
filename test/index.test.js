const getDomArray = require('../dist/index.min');

test(`获取body并转成数组`, () => {
    console.log('body', getDomArray('body'));
    expect(true).toEqual(true);
});
