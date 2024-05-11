import './about-us.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Welcome to First Baptist Church</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id purus
          eu ex eleifend efficitur sit amet nec arcu. Nullam id ultricies elit.
          Quisque vehicula suscipit felis, vel tempus ligula consectetur nec.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Integer id enim a nunc malesuada convallis.
          Fusce eget ultricies neque, id semper elit.
        </p>
        <p>
          In hac habitasse platea dictumst. Nullam nec rhoncus quam. Duis a
          commodo odio. Vestibulum nec neque a lectus vehicula pharetra id non
          justo. Proin in ligula quis lectus pulvinar pharetra nec eget risus.
          Fusce ullamcorper bibendum ante, sit amet lacinia libero feugiat at.
        </p>
        <p>
          Quisque vel semper sapien, nec viverra tortor. Integer tincidunt
          turpis et libero convallis, quis mattis lectus hendrerit. Vivamus
          blandit velit vel mauris fringilla, et fringilla mauris malesuada.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec dapibus nulla in nulla rutrum, a pretium
          felis vehicula.
        </p>
      </div>
      {/* <div className="about-us-image">
        <img src="church_image.jpg" alt="Church" />
      </div> */}
    </div>
  );
};

export default AboutUs;
