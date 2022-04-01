const { validate } = require('schema-utils');
const babel = require('@babel/core');
const { promisify } = require('util');

const babelSchema = {
  type: 'object',
  properties: {
    presets: {
      type: 'array',
    },
  },
};

const transform = promisify(babel.transform);

module.exports = function (content, map, meta) {
  // 获取options配置信息
  const options = this.getOptions() || {};

  // 校验babel的options的配置
  validate(babelSchema, options, {
    name: 'Babel Loader',
  });

  // 创建异步
  const callback = this.async();

  // 使用babel编译代码
  // 使用babel编译代码
  // transform(content, options)
  //   .then(({ code, map }) => callback(null, code, map, meta))
  //   .catch((e) => callback(e));

  transform(content, options)
    .then(({ code, map }) => callback(null, code, map, meta))
    .catch((e) => callback(e));
};
