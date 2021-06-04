var axios = require('../apiService/connection');

const displayReview = async (req, res) => {
    let id = req.params.product_id
    try {
        let response = await axios.get(`/reviews/meta?product_id=${id}`)
        res.send(response.data)
    } catch (error) {
        console.error(error)
    }

}
const getAll = async (req,res) => {
    let id = req.params.product_id
    

    try{
   let resp = await axios.get(`/reviews?product_id=${id}`)
   res.send(resp.data)
    }
    catch(err){
       console.error(err)
    }

}

module.exports = { displayReview , getAll }