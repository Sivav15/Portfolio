import React, { useState } from "react";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";


function Card({ data }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 achievement-card p-0 ">
        <img src={data.img} alt="aa" />
        <div>
          <h5>{data.title}</h5>
        </div>
        <div className="buttons">
          <button type="button" >
            <LibraryBooksIcon /> More
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;