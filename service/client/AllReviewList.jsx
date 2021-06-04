import "./index.css";
import axios from 'axios'
import Stars from './Stars.jsx'
import Buttons from './Buttons.jsx'


const AllReviewList = (props) => {
  const { useState, useEffect } = React;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(2);


  useEffect(() => {
    //   var config = {
    //     method: 'get',
    //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11002&Authorization= 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\n\n',
    //     headers: {
    //       'Authorization': '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',
    //       'product_id': '11002'
    //     }
    //   };



    //   axios(config)
    //     .then(function (response) {
    //       setData(response.data.results)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

    // }, [])

    axios.get("http://localhost:3001/api/reviews/11001")
      .then(function (response) {
        setData(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])


  const addRev = () => {
    if (count === data.length) {
      return;
    }
    setCount(count + 2)
  }




  return (
    <div>
      <p>
        {data.filter((e, i) => i < count).map(review => {
          // console.log(review)
          return <div className="inline-block">

            <div className="">
              <select className="font-sans text-base antialiased font-black ml-20 py-4">
                <option>248 reviews sorted by relevance </option>
                <option>Helpful</option>
                <option>Newest </option>
              </select>
            </div>

            <li className="flex items-start ml-10 mt-1">

              <div className="flex justify-center ">
                <div className="flex items-center mt-2 ">
                  <Stars />
                </div>
              </div>
              <div className="pl-40">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="0 h-5 w-5 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <div className="text-sm font-bold text-black ">
                {review.reviewer_name}
                {/* {moment(review.date).fromNow()} */}
              </div>
            </li>
            <p className="text-base antialiased font-black ml-10">
              {review.summary}
            </p>
            <p className="text-gray-400 ml-10 py-6">
              {review.body}</p>


            <div className="shadow-inner"> {review.response === '' ? <div></div> : <p id="response" className="text-base">Response : {review.response}</p>} </div>

            <div className="text-black-400 ml-10">
              Helpful? <span className="underline">Yes</span> ({review.helpfulness}) |

               <span className="underline">Report</span>
            </div>
            <hr></hr>

          </div>

        })}
      </p>
      <div>
        <Buttons addRev={addRev} handleView={props.handleView} />
      </div>

    </div>

  )
}


export default AllReviewList;
