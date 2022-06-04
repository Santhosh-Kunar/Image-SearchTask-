// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Axios from "../../../Api/Axios";
// import Search from "./Search";
// let pageLimit = 10;
// const Users = () => {
//   const [state, setState] = useState(null);
//   const [search, setSearch] = useState("");
//   const [filterState, setFilter] = useState(null);
//   const [Page, setPage] = useState(1);
//   let fetchData = async () => {
//     let { data } = await Axios.get("/users");
//     filterState == null && setFilter([...data.slice(0, pageLimit)]);
//     setState(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   let handleDelete = async id => {
//     await Axios.delete(`/users/${id}`);
//     fetchData();
//     // window.location.assign('/')
//   };

//   let Pagination = e => {
//     let currentPage = e.target.innerText;
//     setPage(currentPage);
//     let start = pageLimit * currentPage - pageLimit;
//     let end = currentPage * pageLimit;
//     let newList = state.slice(start, end);
//     setFilter(newList);
//   };

//   let handleOnSearch = val => {
//     val = val.toLowerCase();
//     setSearch(val);
//   };

//   let MapUsers = ({ states }) => {
//     return (
//       <ul className="user-ul">
//         {states == null
//           ? "loading"
//           : states
//               .filter(item => {
//                 return item.name.toLowerCase().search(search) != -1;
//               })
//               .map(user => {
//                 return (
//                   <li key={user.id}>
//                     <p>{user.name}</p>
//                     <p>{user.salary}</p>
//                     <p>{user.company}</p>
//                     <div>
//                       <Link to={`/edit-user/${user.id}`}>Edit</Link>
//                       <button onClick={() => handleDelete(user.id)}>
//                         Delete
//                       </button>
//                     </div>
//                   </li>
//                 );
//               })}
//       </ul>
//     );
//   };
//   return (
//     <div className="user-container">
//       <Search onSearch={handleOnSearch} />
//       <MapUsers states={search === "" ? filterState : state} />
//       {search === "" && (
//         <div className="pageBtn">
//           {/* <button onClick={Pagination} style={{background:(Page==1)&&"blue"}}>1</button>
//             <button onClick={Pagination} style={{background:(Page==2)&&"blue"}}>2</button>
//             <button onClick={Pagination} style={{background:(Page==3)&&"blue"}}>3</button> */}
//           {state != null &&
//             Array(Math.ceil(state.length / pageLimit))
//               .fill(null)
//               .map((btn, index) => (
//                 <button
//                   key={index}
//                   onClick={Pagination}
//                   style={{ background: Page == index + 1 && "blue" }}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;



import React, { useEffect, useState} from 'react'
// import Json from "./data.json"
import './product.css'

export default function Product() {
  const [state, setState] = useState([])
  
  useEffect(() => {
    let newlist = Json.slice(0, 10);
    setState(newlist);
  }, [])
  let handlePagination = (e) => {

    let CurrentPage = e.target.textContent;
    if (CurrentPage === "1") {
      setState(Json.slice(0, 10));
      return;
    }
    let start = (CurrentPage * 10) - 10
    let end = (CurrentPage * 10) 
    let newlist = Json.slice(start,end);
    setState(newlist)
    
  }


    return (
      <section>
        {/* <h1>Recommended for you</h1> */}
        <article>
          <div className="product-container">
            {state.map(data => {
              return (
                <div>
                  <img src={data.thumbnail} alt="" />
                  <div className="card-body">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        margin: ".5rem 0rem",
                      }}
                    >
                      <h4 className="rating">
                        {/* <i className="fa-solid fa-star-sharp"></i> */}
                        {data.rating}
                      </h4>
                      {data.rating > 4.4 && (
                        <h4
                          className="rating"
                          style={{ width: "5.4rem", background: "#3939c7" }}
                        >
                          Popular
                        </h4>
                      )}
                    </div>
                    <h4 className="price">{data.price}$</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <button style={{background:"red"}} onClick={handlePagination}>1</button>
        <button style={{background:"red"}} onClick={handlePagination}>2</button>
        <button style={{background:"red"}} onClick={handlePagination}>3</button>
      </section>
    );
}
