import React from "react";
import './Home.css';
import image1 from '../../Assets/Images/image1.jpg';
import image2 from '../../Assets/Images/image2.jpg';
import image3 from '../../Assets/Images/image3.jpg';
import image4 from '../../Assets/Images/image4.jpg';
import image5 from '../../Assets/Images/image5.jpg';
import image6 from '../../Assets/Images/image6.jpg';
import image7 from '../../Assets/Images/image7.jpg';
import image8 from '../../Assets/Images/image8.jpg';
import image9 from '../../Assets/Images/image9.jpg';
import image10 from '../../Assets/Images/image10.jpg';
//PS C:\Users\Windows\Documents\sundeco-enterprises>


const Home = () => {
    return <><h1>this is the home page</h1>
        <div className="slider">
            <figure>
                <div className="slide">
                    <img src={image1} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image2} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image3} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image4} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image5} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image6} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image7} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image8} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image9} alt="image1"></img>
                </div>

                <div className="slide">
                    <img src={image10} alt="image1"></img>
                </div>


            </figure>
        </div>
    </>
}
export default Home;