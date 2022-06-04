import React, { useEffect, useState } from "react";

const Search = () => {
  let [state, setState] = useState(false)
  useEffect(() => {
    async function fetchData() {
      setState(true);
    }
  },[state])
  return (
    <div>
      <form action="" onSubmit={((e)=>{e.preventDefault()})}>
        <label htmlFor="">Enter Songs:</label>
        <input onChange={((e)=>{setState(e.target.value)})}
          style={{
            height: "40px",
            width: "500px",
            border: "1px solid ",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
          }}
          type="text"
          placeholder="enter your favorite songs"
        />
      </form>
    </div>
  );
};

export default Search;
