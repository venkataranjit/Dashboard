import React from "react";
import { Link } from "react-router-dom";

let ProductsItem = (props) => {
  
  let thumbnail =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190846f5ba2%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190846f5ba2%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  let progressBarWidth = props.itemRating * 20;
  let progressBarClass = "";
  let fillColor = "";
  switch (true) {
    case progressBarWidth > 75:
      progressBarClass = "bg-success";
      fillColor = "#28a745";
      break;
    case progressBarWidth > 50:
      progressBarClass = "bg-primary";
      fillColor = "#007bff";
      break;
    case progressBarWidth > 25:
      progressBarClass = "bg-warning";
      fillColor = "#ffc107";
      break;
    default:
      progressBarClass = "bg-danger";
      fillColor = "#dc3545";
      break;
  }
  let starOutline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path style={{fill:`${fillColor}`}} d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
    </svg>
  );
  let starBg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path style={{fill:`${fillColor}`}} d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  return (
    <>
      <div className="col-sm-4">
        <div className="card box-shadow">
          <img
            className="card-img-top"
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
            alt="Thumbnail [100%x225]"
            // src={props.itemThumbnail}
            src={thumbnail}
            data-holder-rendered="true"
            style={{ height: "225px", width: "100%", display: "block" }}
          />
          <span className="badge bg-dark fix-badge">{props.itemCategory}</span>
          <span className="badge bg-dark fix-badgeL">{props.itemBrand}</span>

          <div className="card-body">
            <h4 className="card-text">{props.itemTitle.slice(0, 25)}</h4>
            <p style={{ minHeight: "42px" }}>
              {props.itemDescription.slice(0, 80)}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <h4>{props.itemPrice} &#x20B9;</h4>
              <div className="btn-group">
                <Link
                  to={`${props.itemId}`}
                  className="btn btn-sm btn-outline-secondary"
                >
                  &#129133;
                </Link>
              </div>
            </div>
            <p className="mb-0">Ratings : {props.itemRating}</p>
            <div className="stars">
              <div className="stars-outline">
                {starOutline}
                {starOutline}
                {starOutline}
                {starOutline}
                {starOutline}
              </div>
              <div className="stars-filled" style={{width:`${props.itemRating * 16}px`}}>
                {starBg}
                {starBg}
                {starBg}
                {starBg}
                {starBg}
              </div>
              
            </div>
            
            <div className="progress">
              <div
                className={`progress-bar ${progressBarClass}`}
                role="progressbar"
                style={{ width: `${progressBarWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
