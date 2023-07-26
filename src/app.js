import { getRandomColor } from './utils';

export default function initApp() {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Изменить цвет страницы';
  button.onclick = function () {
    document.body.style.backgroundColor = getRandomColor();
  };
  document.body.append(button);
  console.log('Hello world');
}
