import React from "react";

import "./ImageList.css";
import { Link } from "react-router-dom";

const ImageList = ({ images }) => {
  return (
    <div className="container">
      <div className="row">
        {images.map((image) => (
          <div
            key={image.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="imageList__container">
              <img
                className="imageList__image"
                src={image.largeImageURL}
                alt="tags"
              />
            </div>
            <div className="image__details">
              <Link
                to={{
                  pathname: `/image/${image.id}`,
                  state: { image },
                }}
              >
                <button>Search</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
