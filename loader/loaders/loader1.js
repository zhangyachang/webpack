// loader本质上是一个函数

// 同步loader
module.exports = function (content, map, meta) {
  console.log(111);

  console.log('content', content);
  console.log('map', map);
  console.log('data', meta);
  
  this.callback(null, content, map, meta);
  // return content;
};

module.exports.pitch = function () {
  console.log('pitch 111');
};
