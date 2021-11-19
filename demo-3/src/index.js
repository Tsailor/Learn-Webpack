import './style.css';
import _ from 'lodash';


 function component() {
    const element = document.createElement('div');

   const button = document.createElement('button');
   const br = document.createElement('br');

   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
   element.appendChild(br);
   element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     const print = module.default;

     print();

     var oReq = new XMLHttpRequest();
     oReq.open("POST", "http://172.26.40.255:8585/imageRecognize", true);
     oReq.setRequestHeader("Content-Type",'application/json');
     oReq.setRequestHeader("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1XzkwNjMxIn0.nRuU9kzT8S-M8YhySWox8PXtFkc1oN8cTZZU7ikQ8oI")
     oReq.onload = function () {
       var result = oReq.response; // Note: not oReq.responseText
    
       
     };
    
     const params = JSON.stringify({ type:0, image:"gnjdgjkgjskn"})
     oReq.send(params);
   });

    return element;
  }

 document.body.appendChild(component());

