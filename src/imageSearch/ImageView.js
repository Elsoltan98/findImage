import React from "react";
import { Link } from "react-router-dom";

import "./ImageView.css";

const ImageView = (props) => {
  const { id, largeImageURL, tags, user, pageURL } = props.location.state.image;
  return (
    <div key={id} className="imageView__container">
      <img
        src={largeImageURL}
        alt={tags}
        className="imageView__img img-fluid"
      />
      <p className="imageView__copyright">&copy;pixapay</p>
      <h4 className="imageView__text">
        Creadit: <span>{user}</span>
      </h4>
      <h4 className="imageView__text">
        Download:
        <span>
          <a href={pageURL} target="_blank" rel="noopener noreferrer">
            {" "}
            Go To Download
          </a>
        </span>
      </h4>
      <Link className="imageView__text" to="/">
        <button>Back to search</button>
      </Link>
    </div>
  );
};

export default ImageView;
