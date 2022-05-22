import React from 'react';
import './About.css'
import photo from '../img/pic2.jpg'

const About = () => {
    return (


        <div>
            <div class="col AboutCss">
                <div class="card cardimg ">
                    <img src={photo} class="card-img-top" alt="..." />
                    <br />
                    <h4>Assalamualaikum. I am Arif-Ul-Islam. This is just a demo website. Here I tried to make a website using React Router mainly. I also used Bootstrap, plane HTML and CSS. Hope in near future I will build beautiful website for you. Pray for me. Allah Hafeez. </h4>
                </div>
            </div>

        </div>
    );
};

export default About;