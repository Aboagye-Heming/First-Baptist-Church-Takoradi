// import logo from "../../assets/images/image1.jpg";
// const AboutUs = () => {
//   return (
//     <>
//       <div>
//         <section className="about-area py-24" id="about">
//           <ul className="about-content flex justify-center">
//             <li className="about-left">
//               <img src={logo} alt="church-logo" />
//             </li>
//             <li className="about-right">
//               <h2>WELCOME TO TFBC</h2>
//               <p>
//                 A place where the hurting, discouraged, confused, bound and
//                 frustrated can find love, acceptance, guidance, encouragement,
//                 forgiveness and hope through our Lord Jesus. We believe that God
//                 is sovereign in the election and salvation of all who believe in
//                 His Son. He regenerates and saves sinners and sanctifies
//                 believers. We believe that a local church is a congregation of
//                 Baptised believers, associated by covenant or agreement in faith
//                 and fellowship of the Gospel of Jesus Christ working to carry on
//                 God’s work and glorify His name. Pastor Kingsley Appiagyei is
//                 the Senior Pastor of Trinity Baptist Church. He was the
//                 President of the Baptist Union of Great Britain in 2009.
//                 Reverend Kingsley exercises a remarkable ministry and all who
//                 know him will agree that he is truly a man of God. His love for
//                 the Word of God and his deep commitment to prayer and revival
//               </p>
//             </li>
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutUs;

import logo from "../../assets/images/image1.jpg";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-content ">
        <div className="about-left">
          <img src={logo} alt="church-logo" />
        </div>
        <div className="about-right">
          <h2>WELCOME TO FBCT</h2>
          <p>
            A place where the hurting, discouraged, confused, bound and
            frustrated can find love, acceptance, guidance, encouragement,
            forgiveness and hope through our Lord Jesus.
            <br />
            <br />
            We believe that God is sovereign in the election and salvation of
            all who believe in His Son. He regenerates and saves sinners and
            sanctifies believers.
            <br />
            <br /> We believe that a local church is a congregation of Baptised
            believers, associated by covenant or agreement in faith and
            fellowship of the Gospel of Jesus Christ working to carry on God’s
            work and glorify His name. <br /> <br />
            Pastor Kingsley Appiagyei is the Senior Pastor of Trinity Baptist
            Church. He was the President of the Baptist Union of Great Britain
            in 2009. Reverend Kingsley exercises a remarkable ministry and all
            who know him will agree that he is truly a man of God. His love for
            the Word of God and his deep commitment to prayer and revival
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
