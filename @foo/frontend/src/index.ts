import { someFunction as someFunctionFromJS } from '@foo/js-library';
import { someFunction as someFunctionFromTS } from '@foo/ts-library';

const jsText = document.createElement('span');
jsText.innerHTML = someFunctionFromJS();
document.body.appendChild(jsText);

const tsText = document.createElement('span');
tsText.innerHTML = someFunctionFromTS();
document.body.appendChild(tsText);
