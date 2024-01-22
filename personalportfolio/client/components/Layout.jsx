/*
    File name: Layout.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/
import React from 'react';
import logo from './horace_logo.png';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>Personal Portfolio of Horace</h1>
        <h3>COMP229-001 Assignment 1</h3>
        <h3>Yau Hon Chuen Horace 301398059</h3>
      <nav>
<img src={logo} alt="Logo" width="7%" height="7%"/> | <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/project">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact Me</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
