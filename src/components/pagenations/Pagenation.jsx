import React, { useEffect, useState } from "react";
import JSON from "../../apis/data.json"
export default function Pagination() {
  const [state, setState] = useState([]);
  let [Search, setSearch] = useState("");

  useEffect(() => {
    let newlist = JSON.slice(0, 9);
    setState(newlist);
  }, []);
  let handlePagination = e => {
    let CurrentPage = e.target.textContent;
    // if (CurrentPage === "1") {
    //   setState(JSON.slice(0, 9));
    //   return;
    // }
    let start = CurrentPage * 9 - 9;
    let end = CurrentPage * 9;
    let newlist = JSON.slice(start, end);
    setState(newlist);
  };

  return (
    <section>
      {/* <h1 style={{marginTop:"20px"}}>Recommended for you</h1> */}
      <article>
        <label htmlFor="">PHONES : </label>
        <input
          style={{
            height: "50px",
            width: "500px",
            fontSize: "18px",
            fontFamily: "sans-serif",
            border: "1px solid",
            borderRadius: "5px",
            // textAlign: "center",
            marginTop:"40px"
          }}
          type="text"
          placeholder="Search..."
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <div className="product-container">
          {state
            .filter(val => {
              if (Search == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(Search.toLowerCase())
              ) {
                return val;
              }
            })
            .map(data => {
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
    </section>
  );
}
