import React, { useState } from "react";
import JSON from "./data.json";
const List = () => {
    let[Search,setSearch]=useState("")
  return (
    <div>
          <input type="text" placeholder="Search..."
              onChange={(e) => {
          setSearch(e.target.value)
      }}    
      />
          {JSON.filter((val) => {
              if (Search == "") {
                  return val
              } else if (val.brand.toLowerCase().includes(Search.toLowerCase())) {
                  return val
              }
          }).map((val, key) => {
        return (
          <div className="user" key={key}>
                <p>{val.brand}</p>
                <img src={val.images }/>
          </div>
        );
      })}
    </div>
  );
};

export default List;

// import React from 'react'
// import JSON from "./data.json"
// const List = () => {
//   return (
//       <div>
//           <input type="text" placeholder='Search...' />
//           {JSON.map((val, key) => {
//               return(
//               <div>
//                   <p>{val.brand }</p>
// </div>
//          ) })}
//     </div>
//   )
// }

// export default List