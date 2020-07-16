import React, { Component } from "react";

import ImageSearch from "./imageSearch/ImageSearch";
import ImageList from "./imageSearch/ImageList";

const API_KEY = "17495111-c2956e2abe975f42cf2b8549c";

class App extends Component {
  state = {
    images: [],
    error: null,
  };

  handleGetRequest = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`;
    const request = await fetch(url);
    const response = await request.json();

    if (!searchTerm) {
      this.setState({ error: "Please Enter name to search .." });
    } else {
      this.setState({ images: response.hits, error: null });
    }
  };

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {this.state.error !== null ? (
          <div style={{ color: "#fff", textAlign: "center" }}>
            {this.state.error}
          </div>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
