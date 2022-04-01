const { validate } = require('schema-utils');
const schema = require('./schema');

module.exports = function (content, map, mate) {
  console.log(3333);
  // 获取options
  const options = this.getOptions();
  console.log('options', options);

  // 校验options的合法性
  validate(schema, options, {
    name: 'loader3',
  });

  return content;
};

module.exports.pitch = function () {
  console.log('pitch 333');
};
