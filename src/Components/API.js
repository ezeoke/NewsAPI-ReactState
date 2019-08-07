import React from "react";
import countryCodes from "./countries";
import Content from "./Content";

const Api_key = process.env.REACT_APP_API_KEY;

class APICall extends React.Component {
  state = {
    dataSet: [],
    value: "",
    country: "NG",
    loading: true
  };

  async componentDidMount() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&apiKey=${Api_key}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      loading: false,
      dataSet: data
    });
    console.log(this.state.dataSet.articles);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.state.country
        }&apiKey=${Api_key}`
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        loading: false,
        dataSet: data
      });
      console.log(this.state.dataSet);
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  matchQuery = () => {
    const objKey = Object.keys(countryCodes);

    const objData = objKey.filter(
      item => item.toLowerCase() === this.state.value.toLowerCase()
    );

    let countryCode = "";

    for (let key in countryCodes) {
      if (objData[0] === key) {
        countryCode = countryCodes[key].split(" ")[0];
      }
    }

    return countryCode;
  };

  updateSearch = () => {
    if (!this.state.value) return;
    this.setState({
      country: this.matchQuery()
    });
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
        <div>
          <Content loading={this.state.loading} content={this.state.dataSet} />
        </div>
      </div>
    );
  }
}

export default APICall;
