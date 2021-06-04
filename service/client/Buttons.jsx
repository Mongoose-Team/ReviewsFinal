import "./index.css";

const Buttons = (props) => {
    
    return (


<div className="not-italic text-lg pl-20 space-x-4">
<button onClick={()=> props.addRev()} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-8 border border-gray-400 rounded shadow">

  More Reviews

</button>

<button className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non
 " onClick={()=>{props.handleView()}}>
    
  Add Review+

</button>
</div>
 )
}
   

export default Buttons;