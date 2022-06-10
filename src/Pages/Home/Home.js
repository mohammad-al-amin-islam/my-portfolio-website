import React from 'react';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;