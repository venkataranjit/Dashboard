import React from "react";
import { Link } from "react-router-dom";

let ProductsItem = (props) => {
  let thumbnail =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190846f5ba2%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190846f5ba2%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
    let progressBarWidth = props.itemRating * 20;
    let progressBarClass = "";
    switch(true){
        case progressBarWidth  > 75:
          progressBarClass  = "bg-success";
        break;
        case progressBarWidth  > 50:
          progressBarClass  = "bg-primary";
        break;
        case progressBarWidth  > 25:
          progressBarClass  = "bg-warning";
        break;
        default :
        progressBarClass  = "bg-danger";
        break;
      }
    
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
            <p className="text-center mb-0">Ratings : {props.itemRating}</p>
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
