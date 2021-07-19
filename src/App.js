import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [myname, setmyname] = useState(0);

  const name = () => {
    setmyname(myname + 1);
  };
  return (
    <>
      <div className="all">
        <img
          className="pp"
          src="https://scontent.fbom45-1.fna.fbcdn.net/v/t1.6435-9/184703038_1631995747151299_894046829540189506_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ylf0HQAY1CAAX9pekkM&_nc_ht=scontent.fbom45-1.fna&oh=8ded9dbd2534ac36100071dc7e585ca4&oe=60F98BF6"
          alt="jjj"
        />
        <h1>{myname}</h1>
        <button className="txt" onClick={name}>
          Subscribe Me👍
        </button>
      </div>
    </>
  );
};

export default App;
