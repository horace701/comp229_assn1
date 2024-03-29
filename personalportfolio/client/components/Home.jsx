/*
    File name: Home.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/

import About from '../src/about'
import { Link } from 'react-router-dom';

export default function Home() {
        return (
            <>
            <h1>Home</h1>
            <p>Horace Yau welcomes you.<br/>
               Bringing you to explore the new journey in Canada.
               <br/>
               You may find out more <Link to="/about">about me</Link>.
            </p>
            </>
        );
      }
    