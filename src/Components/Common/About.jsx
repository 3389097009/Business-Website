import React from "react";
import imran_pic from '../../Assets/Images/image16.jpg';
import './About.css';

const About = () => {
    return <>
        <h1>this is about page from jsx</h1>
        <div className='imran_pic'>
            <img src={imran_pic} alt='imran'></img>
           
        </div>
        <div className='quote'>
        <b><p>we are global business leaders in the domain of window tinting service.<br></br>we provide services for</p></b><br></br>
        <ul>
        <li>suncontro glass film</li>
        <li>privacy film</li>
        <li>furniture wrapping</li>
        <li>carpet fitting and selling</li>
        <li>home service</li>
        </ul> 
        </div>
        <div>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        </div>
    </>
}
export default About;