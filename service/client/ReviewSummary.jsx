  import React, { Component } from "react";
  import ProgressBar from "./ProgressBar.jsx";
  import axios from "axios";
  import Starcomponent from "./Starcomponent.jsx";
  import Nouislider from "./Nouislider.jsx";
  class ReviewSummary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        ratings: [],
        average: 0,
        recommend: 0,
        size:0,
      };
      this.average = this.average.bind(this);
      this.recommend = this.recommend.bind(this);
    }
    componentDidMount() {
      this.fetchData();
    }
    fetchData() {
      axios("api/reviews/meta/11005")
        .then((response) => {
          var data = response.data;
          var recommend = Object.values(response.data.recommended);
          var star = Object.values(response.data.ratings);
          var average = 0;
          var size= Object.values(response.data.characteristics)


          star.forEach((element, i) => {
            var number = Number(element);
            average += number;
            return average;
          });

          this.setState({ ratings: star, average, recommend, data , size});
        })
        .catch((error) => {
          console.error(error);
        });
    }

    average() {
      var object = this.state.data.ratings;
      var rate = 1;
      var result;
      for (var i in object) {
        rate += i * Number(object[i]);
      }
      result = rate / this.state.average;
      return result.toFixed(1);
    }
    recommend() {
      var object = this.state.recommend;
      var sum = 0;

      for (var i = 0; i < object.length; i++) {
        sum += Number(object[i]);
      }
      var pourcentage = (object[1] * 100) / sum;
      return pourcentage.toFixed(1);
    }
  
    render() {
      return (
        <div>
          <div className="w-4/5">
            <div className="flex items-center  ">
              <h2 className="text-gray-600 text-3xl font-bold pr-3">
                {this.average()}
              </h2>
              <Starcomponent value={this.average()} />
            </div>
            <h3 className="text-gray-300 text-xs">
              {" "}
              {this.recommend()}% of reviews recommend this product
            </h3>
          </div>
          {this.state.ratings.map((element, index) => {
            var completed = (element * 100) / this.state.average;
            return (
              <div key={index} className="flex items-center  pr-3 ">
                <span className="underline p-px text-xs ">
                  {" "}
                  {this.state.ratings.length - index + " stars"}
                </span>
                <ProgressBar className="py-4" completed={completed} />
              </div>
            );
          })}
<div className="pt-5">
          {
            this.state.data.characteristics && Object.values(this.state.data.characteristics).map((value, index)=> (
          <div className="text-xs w-60  text-gray-600" key={index}>
            <h4>{Object.keys(this.state.data.characteristics)[index]}</h4>
            <Nouislider start={value.value * 20} sections={3} />           
          </div>
            ))
          }
          </div>
        </div>
      );
    }
  }

  export default ReviewSummary;
