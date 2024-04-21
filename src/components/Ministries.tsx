import "../assets/css/index.css";

function Ministries() {
  return (
    <div>
      <section className="services-area py-24" id="services">
        <h3 className="section-title">Ministries </h3>
        <ul className="services-content flex justify-center">
          <li className="w-1/3 px-10">
            <img alt="" src="images/1.jpg" />
            <h4>Global Kindom voices</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
          <li className="w-1/3 px-10">
            <img alt="" src="images/3.jpg" />
            <h4>Vabriat Choir</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
          <li className="w-1/3 px-10">
            <img alt="" src="images/4.jpg" />
            <h4>Media</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              reprehenderit.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Ministries;
