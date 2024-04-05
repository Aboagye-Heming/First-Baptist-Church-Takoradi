const ContactInfo = () => {
  return (
    <div>
      <section className="contact-area py-24" id="contact">
        <h3 className="section-title">
          Our <span>Contact</span>
        </h3>
        <ul className="contact-content flex justify-center">
          <li className="px-10">
            <i className="fa fa-map-marker text-red-600 text-4xl mb-5"></i>
            <p>
              Takoradi
              <br />
    Ghana
            </p>
          </li>
          <li className="px-10">
            <i className="fa fa-phone text-red-600 text-4xl mb-5"></i>
            <p>
              +233 000 0000
              <br />
              +233 000 0000
            </p>
          </li>
          <li className="px-10">
            <i className="fa fa-envelope text-red-600 text-4xl mb-5"></i>
            <p>
              info@bishop.com
              <br />
              tfbc@website.com
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactInfo;
