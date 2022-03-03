import React from "react";
class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="footer">
       <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">contact</h5>
    <div class="social-icon">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div> <br/>
    
    <a href="#" class="btn btn-primary" download>download</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
      </section>
    );
  }
}

export default Footer;
