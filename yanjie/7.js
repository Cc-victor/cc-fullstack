var reg = /(\d{4})-(\d{2})-(\d{2})/;
console.log(reg.test('2021-01-06'));
console.log(RegExp.$1,RegExp.$2,RegExp.$3);
