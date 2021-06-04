import React from "react";
import "./index.css";
import ReviewSummary from "./ReviewSummary.jsx";
import Form from "./Form.jsx";
import AllReviewList from "./AllReviewList.jsx";

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      show:false

  }
  this.handleView=this.handleView.bind(this)
}
handleView(){
   this.setState({show:!this.state.show})
}
 
  render() {
    return (
      <div>
        <div className="min-h-screen bg-gray-100  flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <h1 className="pt-50 mt-10 text-gray-600 ">
                  
                  Ratings & Reviews{" "}
                </h1>
                <ReviewSummary />
              </div>
              <div>
              {this.state.show === false ? <AllReviewList  handleView={this.handleView}/> : <Form handleView={this.handleView}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
