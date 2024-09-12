
import popone from "../assets/images/p5.jpg";
import poptwo from "../assets/images/p6.jpg";
import popthree from "../assets/images/p7.jpg";
import popfour from "../assets/images/p8.jpg";
import popfive from "../assets/images/p9.jpg";
import popsix from "../assets/images/p10.jpg";
import popseven from "../assets/images/p11.jpg";
import popeight from "../assets/images/p12.jpg";


function CourseCard({ image, title, instructor, rating, price, originalPrice }) {
    return (
      <div className="course__card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{instructor}</p>
        <p>{rating} ⭐⭐⭐⭐</p>
        <p>{price} <del>{originalPrice}</del></p>
      </div>
    );
  }


//most popular

function Popular() {
    return (
      <div className="recommanded">
        <h1 className="recommanded__title">Recommanded for you</h1>
        <p>Pick the best fit</p>
        <div className="recommanded__container">
          <CourseCard 
            image={popone} 
            title="Master UI/UX developing" 
            instructor="Col Steele" 
            rating="4.9" 
            price="899" 
            originalPrice="1999" 
          />
          <CourseCard 
            image={poptwo} 
            title="2023 Python Data Visualization Master Class" 
            instructor="Col Steele" 
            rating="4.9" 
            price="999" 
            originalPrice="1499" 
          />
          <CourseCard 
            image={popthree}
            title="Basic to advance java core Training" 
            instructor="Col Steele" 
            rating="2.9" 
            price="1099" 
            originalPrice="1999" 
          />
          <CourseCard 
            image={popfour} 
            title="Master UI/UX developing"
            instructor="Col Steele" 
            rating="3.9" 
            price="559" 
            originalPrice="1199" 
          />
          <CourseCard 
            image={popfive} 
            title="Basic to Advance Java Core Training" 
            instructor="Col Steele" 
            rating="3.9" 
            price="799" 
            originalPrice="1799" 
          />
          <CourseCard 
            image={popsix} 
            title="Master UI/UX developing"
            instructor="Col Steele" 
            rating="3.9" 
            price="499" 
            originalPrice="2499" 
          />
          <CourseCard 
            image={popseven} 
            title="Basic to Advance Java Core Training" 
            instructor="Col Steele" 
            rating="4.0" 
            price="429" 
            originalPrice="1499" 
          />
          <CourseCard 
            image={popeight} 
            title="2023 Python Data Visualization Master Class" 
            instructor="Col Steele" 
            rating="3.7" 
            price="799" 
            originalPrice="2999" 
          />
        </div>
      </div>
    );
  }


  export default Popular