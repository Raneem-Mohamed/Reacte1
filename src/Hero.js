import React from "react";
import './Hero.css';
class Hero extends React.Component{
        constructor(){
            super();
        }

        render(){
            return(



                <section className="hero">

                <div>
                    <h2>Hello,I'm Raneem <br/> <span>MERN Stack Developer</span> </h2>
                    <h3>let's make your web page more flixable & smarter </h3>
                    <a href="" className="main-btn" download> download</a>
                </div>
                {/* <div class="social-icon">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>  */}

               
            
               </section>





            )

        
        }
        
    
}

export default Hero;