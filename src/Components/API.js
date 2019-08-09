import React from "react";
import { countries, countryCodes } from "./countries";
import Content from "./Content";
import apiStyles from "../styles/API.module.css";
import Footer from "./Footer";

//The API key from news_api is stored in the .env.development for private access
// const Api_key = process.env.REACT_APP_API_KEY;
const Api_key = "61eb1454095f4205b4c510c8367d8a23";

class APICall extends React.Component {
  //The various states in play
  state = {
    dataSet: [],
    value: "",
    country: "NG",
    loading: true
  };

  // handleGetNews = () => {};
  //This async lifecycle mounts with the default state when the application is started
  async componentDidMount() {
    //This an API fetch request with query and API key
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&apiKey=${Api_key}`
    );
    const data = await response.json();
    console.log(data);
    //here I updated the state with data from the api
    this.setState({
      loading: false,
      dataSet: data
    });
  }

  //this async/await lifecycle triggers when a value is entered an searched
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      this.setState({ loading: true });
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.state.country
        }&apiKey=${Api_key}`
      );
      //an update to the state with the new api fetch data
      const data = await response.json();
      this.setState({
        loading: false,
        dataSet: data
      });
    }
  }

  //this function handles the new value entered to the 'search' input tag
  handleChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      () => this.updateSearch()
    );
    console.log(this.state.value);
  };

  /*this is a super algorithm. sexy hacking!!! Thanks to George for the initiative and help....badass hacker. 
  this function has access to country/country codes data from the country component. It looks for the current input value and finds a match in the countries component object. It then gets the corresponding initials of the matched country and returns it */
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
    console.log(countryCode);
    return countryCode;
  };

  //this function fires when the 'search' button is clicked. it updates the country state with the returned value from the matchquery function. this updated state serves as a query for the searched country
  updateSearch = () => {
    if (!this.state.value) return;
    this.setState({
      country: this.matchQuery()
    });
  };

  render() {
    return (
      <div className={apiStyles.wrapper}>
        <h2>
          {this.state.country === "NG"
            ? `Current News in Nigeria`
            : `Current News in ${this.state.value}`}
        </h2>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* here i passed the loading and dataset/api data to the content component for rendering */}
        <Content loading={this.state.loading} content={this.state.dataSet} />
        <Footer />
      </div>
    );
  }
}

export default APICall;
