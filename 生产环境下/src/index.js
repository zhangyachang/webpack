// import './css/main.less';
import './css/main.css';

import icon from './imgs/3.png';

const oImg = document.createElement('img');
oImg.style.width = '100px';
oImg.style.height = '100px';

oImg.src = icon;

document.body.appendChild(oImg);

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
