import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
import code from './img/code.png';

const img = new Image();
img.src = code;
img.width = 700;

const imgWrap = document.querySelector('.img');
imgWrap.append(img);


console.log(mult(5, 3));
console.log(sum(5, 3));