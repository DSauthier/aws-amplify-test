import React from 'react';
import Main from './Main';
import './App.css';
import SHA256 from "crypto-js/sha256";
var bcrypt = require("bcryptjs");


function App() {

  const saltRounds = 15;
  const plainPassword1 = "HelloWorld";
  const plainPassword2 = "helloworld";
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash1 = bcrypt.hashSync(plainPassword1, salt);
  const hash2 = bcrypt.hashSync(plainPassword2, salt);
  console.log("Hash 1 -", hash1);
  console.log("Hash 2 -", hash2);
  return (
    <div className="App">
      <Main/>
        
    </div>
  );
}

export default App;
