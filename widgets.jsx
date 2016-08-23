import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const info = [{title: "title", content: "content"},
  {title: "other", content: "other"}];
  ReactDOM.render(
    <div>
      <Tabs info={info} />
      <Clock />
      <Weather />
    </div>, root);
});
