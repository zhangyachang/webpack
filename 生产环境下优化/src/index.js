// import './css/main.less';
import './css/main.css';
import $ from 'jquery'
import axios from 'axios'


import icon from './imgs/3.png';

const oImg = document.createElement('img');
oImg.style.width = '100px';
oImg.style.height = '100px';

console.log('这里打印jquery $', $);

console.log('axios', axios);
oImg.src = icon;
// mul()
document.body.appendChild(oImg);


document.onclick = function () {
  import(/* webpackChunkName: 'test', webpackPrefetch: true, */'./test')
    .then(res => {
      console.log('加载成功');
      console.log('res', res);
    })
}
// import { mul, count } from 

// function say() {
//   return 'hello world';
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.a = '张三';
  }

  setName(name) {
    this.name = name;
  }
}

let user = new Person();
console.log('user: ', user);
