import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div', {id:'parent'}, React.createElement('h1', {id:'heading'}, 'Manisha'))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)