import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const {MongoClient} = require('mongodb')
// const client = new MongoClient('mongodb+srv://antonmerkotun:1996178dD>@instagram.9subi.mongodb.net/instagram?retryWrites=true&w=majority')
//
// const start = async () => {
//   try {
//       await client.connect()
//   }catch (e) {
//       console.log(e)
//   }
// }
//
// start()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();