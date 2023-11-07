import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from '../../components/header/navbar.jsx';
import { Body } from '../../components/body';
import { Footer } from "../../components/footer";

export const Home = () => {
    return (
      <div className="app">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
}