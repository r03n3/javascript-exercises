// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const content2 = document.createElement("p");
content2.classList.add('content');
content2.style.color ="red";
content2.textContent = "Hey I’m red!";

const content3 = document.createElement("h3");
content3.classList.add('content');
content3.style.color="blue"
content3.textContent = "I'm a blue h3!";

const content4 =document.createElement("div");
content4.classList.add('content');
content4.style.border="solid";
content4.style.color="black";
content4.style.backgroundColor="pink";

const content5=document.createElement("h1");
content5.color="white";
content5.textContent="I'm in a DIV!"

const content6=document.createElement("p");
content6.textContent="ME TOO!";


container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
content4.appendChild(content5);
content4.appendChild(content6);
container.appendChild(content4);
