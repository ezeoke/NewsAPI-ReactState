import React from "react";
import countryCodes from "./countries";

const Api_key = process.env.REACT_APP_API_KEY;

class APICall extends React.Component {
  state = {
    dataSet: "",
    value: "",
    country: "NG"
  };

  async componentDidMount() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&apiKey=${Api_key}`
    );
    const data = await response.json();
    console.log(data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      this.matchQuery();
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  updateSearch = () => {
    this.setState({
      country: this.state.value
    });
  };

  matchQuery = () => {
    const objKey = Object.keys(countryCodes);

    const objData = objKey.filter(
      item => item.toLowerCase() == this.state.value.toLowerCase()
    );
    console.log(objData);

    for (let key in countryCodes) {
      if (key === objData) {
        console.log(countryCodes[key]);
      }
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.updateSearch}>search</button>
      </div>
    );
  }
}

export default APICall;
