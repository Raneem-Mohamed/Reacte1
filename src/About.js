import React from "react";
class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About me</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          {/* <img src="..." className="card-img-bottom" alt="..." /> */}
        </div>
      </section>
    );
  }
}

export default About;
