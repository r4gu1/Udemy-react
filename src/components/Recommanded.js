




import recone from "../assets/images/p1.jpg";
import rectwo from "../assets/images/p2.jpg";
import recthree from "../assets/images/p3.jpg";
import recfour from "../assets/images/p4.jpg";
//Recommanded section

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
   // Create the main component to display the courses
   function Recommanded() {
    return (
      <div className="recommanded">
        <h1 className="recommanded__title">Recommanded for you</h1>
        <p>Pick the best fit</p>
        <div className="recommanded__container">
          <CourseCard 
            image={recone} 
            title="2023 Python Data Visualization Master Class" 
            instructor="Col Steele" 
            rating="4.9" 
            price="499" 
            originalPrice="1999" 
          />
          <CourseCard 
            image={rectwo} 
            title="Web Development Bootcamp 2023" 
            instructor="Col Steele" 
            rating="4.9" 
            price="399" 
            originalPrice="1499" 
          />
          <CourseCard 
            image={recthree}
            title="Master UI/UX Developing" 
            instructor="Col Steele" 
            rating="2.9" 
            price="999" 
            originalPrice="1999" 
          />
          <CourseCard 
            image={recfour} 
            title="Basic to Advance Java Core Training" 
            instructor="Col Steele" 
            rating="3.9" 
            price="799" 
            originalPrice="2499" 
          />
        </div>
      </div>
    );
  }

  export default Recommanded