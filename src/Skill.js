import React from "react";
class Skill extends React.Component {
  constructor() {
    super();
    this.state = {

      skills: ["html", "css", "bootstrab"],
    };
  }

  render() {

    const {skills}=this.state;
    return (
      <section
        className="skill container-fluid"
        style={{
          height: "30rem",
          backgroundColor: "burlywood",
        }}
      >
        <div
          className="row col-12 card"
          style={{ backgroundColor: "burlywood" }}
        >
          <div className="card-body">
            <h5 className="card-title">Skills</h5>
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

        <div className="row">
          <div className="col-5 mp-5">
              <ul>
                  {skills.map((skill) =>{

                      return<li>{skill}</li>

                  })}
              </ul>
            
              
              </div>

          <div className="col-7 mp-5">
            <div class="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div> <br/>

            <div class="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div> <br/>

            <div class="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div> <br/>



          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
