// import React, { Component, Fragment } from "react";
// export default class Listing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//     };
//   }
//   async componentDidMount() {
//     let data = await window
//       .fetch("http://api.github.com/users")
//     //   .then(data => {
//     //     data.json();
//     //   })
//     //   .then(records => {
//     //       this.setState({ users: records });
//     //       console.log(records);
//     //   })
//     //   .catch(error => console.log(error));
//       let finalData = await data.json();
//       console.log(finalData);
//       this.setState({users:finalData})
//   }
//   render() {
//       return (
//           <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"40px",marginTop:"20px",paddingTop:"20px",marginLeft:"80px"}}>
//               {this.state.users.map((user, index) => {
//                   let{login,avatar_url,html_url}=user
//                   return (
//                     <Fragment key={index}>
//                       <article
//                         style={{
//                           height: "300px",
//                           width: "300px",
//                           backgroundColor: "lightgrey",
//                         }}
//                       >
//                         <div style={{ marginTop: "20px", paddingTop: "20px",boxShadow:"0px 0px 10px 0px lightgray" }}>
//                           <figure>
//                             <img
//                               style={{ height: "200px", width: "200px",border:"1px solid crimson",borderRadius:"50%" }}
//                               src={avatar_url}
//                               alt=""
//                             />
//                           </figure>
//                         </div>
//                         <main>
//                           <h2>{login}</h2>
//                           <p>
//                             <a href={html_url}>view profile</a>
//                           </p>
//                         </main>
//                       </article>
//                     </Fragment>
//                   );
//         })}
//       </div>
//       )
//   }
// }

import React, { useEffect, Fragment, useState, useContext } from "react";
import { SidebarContext } from "../../apis/SidebarContext";
const Listing = () => {
  let { setToggle, setDetails } = useContext(SidebarContext);
  let [Search, setSearch] = useState("");
  let [state, setState] = useState([]);
  let [filters, setFilter] = useState([]);

  let fetchData = async() => {
   
    let res = await fetch("http://api.github.com/users");
    let data =await res.json()
    setState(data)
    setFilter(data.slice(0,8))
}
  useEffect(() => {
    fetchData();
  }, []);

 
  let handlePagination = e => {
    let CurrentPage = e.target.textContent;
    // if (CurrentPage === "1") {
    //   setFilter(state.slice(0, 8));
    //   return;
    // }
    let start = CurrentPage * 8 - 8;
    let end = CurrentPage * 8;
    let newlist = state.slice(start, end);
    setFilter(newlist);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <label htmlFor="">Github users : </label>
      <input
        style={{
          height: "50px",
          width: "500px",
          fontSize: "18px",
          fontFamily: "sans-serif",
          border: "1px solid",
          borderRadius: "5px",
          textAlign: "center",
        }}
        type="text"
        placeholder="Search..."
        onChange={e => {
          setSearch(e.target.value);
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "40px",
          marginTop: "20px",
          paddingTop: "20px",
          marginLeft: "80px",
        }}
      >
        {filters
          .filter(val => {
            if (Search == "") {
              return val;
            } else if (val.login.toLowerCase().includes(Search.toLowerCase())) {
              return val;
            }
          })
          .map((user, index) => {
            let { login, avatar_url, html_url } = user;
            return (
              <Fragment key={index}>
                <article
                  style={{
                    height: "400px",
                    width: "300px",
                    borderRadius: "15px",
                    backgroundColor: "lightgrey",
                  }}
                >
                  <div
                    style={{
                      marginTop: "10px",
                      paddingTop: "20px",
                      boxShadow: "0px 0px 10px 0px lightgray",
                      textAlign: "center",
                    }}
                  >
                    <figure>
                      <img
                        style={{
                          height: "250px",
                          width: "250px",
                          border: "1px solid crimson",
                          borderRadius: "15%",
                        }}
                        src={avatar_url}
                        alt=""
                      />
                    </figure>
                  </div>
                  <main style={{ padding: "10px" }}>
                    <h2
                      style={{
                        fontSize: "35px",
                        fontFamily: "algerian,senseri",
                        textAlign: "center",
                      }}
                    >
                      {login}
                    </h2>
                    <p>
                      <a
                        style={{ color: "crimson", textDecoration: "none" }}
                        href={html_url}
                      >
                        View-Profile
                      </a>
                      <button
                        style={{
                          border: "1px solid",
                          padding: "8px",
                          borderRadius: "5px",
                          backgroundColor: "orchid",
                          float: "right",
                        }}
                        onClick={() => {
                          setToggle(true);
                          setDetails(user);
                        }}
                      >
                        Enter
                      </button>
                    </p>
                  </main>
                </article>
              </Fragment>
            );
          })}
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "25%",
            margin: "0 auto",
            // height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingLeft: "300px",
            padding: "10px",
          }}
        >
          <button
            style={{
              background: "lightyellow",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={handlePagination}
          >
            1
          </button>
          <button
            style={{
              background: "lightyellow",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={handlePagination}
          >
            2
          </button>
          <button
            style={{
              background: "lightyellow",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={handlePagination}
          >
            3
          </button>
          <button
            style={{
              background: "lightyellow",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={handlePagination}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};
export default Listing;
