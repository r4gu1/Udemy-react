


import one from "../assets/images/sale.jpg";
//advestement 
function Sale(){
    return(<div class="sale-image">
        <img src={one}></img>
        <div class="sale-image__offer">
            <h2>flash sale 24 hours to save</h2>
            <p>One day to save but a lifetime to learn</p>
        </div>
    </div>)
}

export default Sale