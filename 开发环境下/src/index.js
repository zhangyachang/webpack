import './css/main.less';
import { add, reduce, print } from './a';

import icon from './imgs/3.png';

const oImg = document.createElement('img');
oImg.style.width = '100px';
oImg.style.height = '100px';

oImg.src = icon;

document.body.appendChild(oImg);

function say() {
  return 'hello world';
}

say();
console.log('戴拿执行');

add(1, 2, 3);

reduce();

// module.hot.accept('./a', function () {
//   console.log('a的文件更新了');

//   print();
// });
