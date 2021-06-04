var axios = require('../apiService/connection.js');


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

module.exports = {getAll}