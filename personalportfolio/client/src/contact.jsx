/*
    File name: contact.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    const [inqmsg, setInqmsg] = useState("");
    //const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The inquiry message you entered was: ${inqmsg}`);
        //history.push("/");
        navigate('/', {state: '${inqmsg}'});
      }

    return (
        <>
        <h1>Contact Me</h1>
        <div class="card card-default">
            <div class="card-header">Contact: Horace Yau</div>
            <div class="card-body">Mobile: +1 (416) 123-4567 </div>
            <div class="card-body">Email: horaceyau@centennialcollege.ca</div>
            <br/>
        </div>

        <br/>

        <form onSubmit={handleSubmit}>
            <label>Inquiry messages: 
            <input type="text"
                    value={inqmsg}
                    onChange={(e) => setInqmsg(e.target.value)}
                    />
            <input type="submit"/>
            </label>
        </form>
        
        </>
        );
      }
    