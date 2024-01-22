/*
    File name: services.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/

import logo_agile from './logo_agile.png'
import logo_ba from './logo_ba.jpg'
import logo_pm from './logo_pm.jpg'

export default function Services() {
        return (
            <>

        <p><font size="+2">SERVICES PROVIDED</font></p>


        <div>
          <img src={logo_pm} className="logo_pm" alt="Project Management" width="8%" height="8%"/>
        </div>

        <p>Project Management service for large, medium, and small scale of software development and system projects.
           <br/>
           <br/>
           <br/>
        </p>

        <div>
          <img src={logo_agile} className="logo_agile" alt="Agile Development" width="8%" height="8%"/>
        </div>

        <p>Agile Development servcie for software development employing agile development methodology.
           <br/>
           <br/>
           <br/>
        </p>

        <div>
          <img src={logo_ba} className="logo_ba" alt="Business Analysis" width="8%" height="8%"/>
        </div>

        <p>Business Analysis service which analysising the business requirements, then translate into technocal requirement, <br/>
           which services the as the input to software implementation requirement.
           <br/>
           <br/>
           <br/>
        </p>
      </>
        );
      }
    