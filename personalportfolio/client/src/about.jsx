/*
    File name: about.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/
import idphoto from './IDPhoto.jpg'
import resume from './HoraceYauResume.pdf'

export default function About() {
      return (
        <>
          <h1>About Me</h1>
          <div>
            <img src={idphoto} className="idphoto" alt="ID Photo" width="8%" height="8%"/>
          </div>

          <p>Horace Yau, technical team leader in stock exchange and market data for more than 10 years. <br/>
             Focusing on the market data segment project delivery of the financial industry. I posses good skill <br/>
             in financial system design, and project management, including both internal and external stakeholders. <br/>
             My target is to develop career on information technology for finance industry, and to build up <br/>
             professional skills on system architect design, project management, and technical support. <br/>
             <br/>
             My resume is available <a href={resume}>here</a>.
          </p>
        </>
      );
    }
    