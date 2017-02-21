import React from 'react';
import SignInButton from '../../Login/components/SignInButton';

const Home = () => 
    <div className="">
        <h1 className="main-title">Home</h1>
        <div className="home">
            <SignInButton title={"Let's begin"} link={'/sign-in'} />
        </div>
    </div>;
        

export default Home;