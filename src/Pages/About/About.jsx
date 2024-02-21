// import React from "react";
// import "./About.css";
// import aboutImg from "../../images/about-img.jpg";
// const About = ()=>{
//     return(
//        <section className="about">
//         <div className="container">
//             <div className="section-title">
//                 <h2>About</h2>
//             </div>
//             <div className="about-content grid">
//                 <div className="about-img">
//                 <img src={aboutImg} alt =" "/>
//                 </div>
//                 <div className="about-text">
//                     <h2 className="about-title fs-26 ls-1">About BookHub</h2>
//                     <p className="fs-17">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, excepturi!</p>
//                     <p className="fs-17">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita cupiditate, nobis ad reiciendis voluptatibus optio necessitatibus sint voluptatum! Pariatur numquam dicta odit asperiores ipsa praesentium esse aperiam molestiae consectetur.</p>
                    
//                 </div>
//             </div>

//         </div>
//        </section>
//     )
// }
// export default About


import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
               
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
        <p className="fs-17"> A library is a very useful platform that brings together people willing to learn. It helps us in learning and expanding our knowledge. We develop our reading habits from a library and satisfy our thirst and curiosity for knowledge. This helps in the personal growth of a person and development.</p>
                     <p className="fs-17"> Similarly, libraries provide authentic and reliable sources of information for researchers. They are able to complete their papers and carry out their studies using the material present in a library. Furthermore, libraries are a great place for studying alone or even in groups, without any disturbance.</p>                    
                     <p className="fs-17">Thus, libraries help all, the ones visiting it and the ones employed there. We must not give up on libraries due to the digital age. Nothing can ever replace the authenticity and reliability one gets from a library.</p>
              </div>
            
        </div>
      </div>
    </section>
  )
}

export default About

