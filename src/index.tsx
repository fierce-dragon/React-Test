import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import { StoreProvider } from './store/store_provider';
import NoteList from './store/note_list';

const noteList = new NoteList([
  '{"title" : "First", "content" : "First_content"}',
  '{"title" : "First", "content" : "First_content"}',
]);

ReactDOM.render(
  <StoreProvider value={noteList}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
