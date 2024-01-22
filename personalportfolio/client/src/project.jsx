/*
    File name: project.jsx
    Student Name: Hon Chuen Yau (Horace)
    Student ID: 301398059
    Date: Jan 22, 2024
*/

import logo_tr from './logo_tr.png'
import logo_refinitiv from './logo_refinitiv.jpg'
import logo_tse from './logo_tse.png'

export default function Project() {
        return (
          <>
          <h1>PROJECTS</h1>

          <div>
            <img src={logo_tr} className="logo_tr" alt="Thomson Reuters" width="8%" height="8%"/>
          </div>

          <p>Project: Elektron market data system migration<br/>
            Company: Thomson Reuters <br/>
            Project detail: My role is the system analysis, which is to migrate the market data system from the legacy platform <br/>
            to the new platform which is based on the Linux.  The project migration is success for multiple markets, including <br/>
            Hong Kong, Australia, and Japan.
            <br/>
            <br/>
            <br/>
          </p>
          <div>
            <img src={logo_refinitiv} className="logo_refinitiv" alt="Refinitiv" width="8%" height="8%"/>
          </div>

          <p>Project: Refinitiv Data Feed Direct system implementation<br/>
           Company: Refinitiv <br/>
           Project detail: My role is the system analysis, which is to design and implement the low latency data feed direct system. <br/>
           The project last for multiple years, and the system is migrated to multiple regions, which includes Hong Kong, <br/>
           Taiwan, and Singapore. 
           <br/>
           <br/>
           <br/>
          </p>

          <div>
            <img src={logo_tse} className="logo_tse" alt="Tokyo Stock Exchange" width="8%" height="8%"/>
          </div>

          <p>Project: System upgrade for the Tokyo Stock Exchange (TSE) Flex system revamp<br/>
           Company: Refinitiv <br/>
           Project detail: My role is the system analysis, which is to analyze the requirement from Tokyo Stock Exchange, <br/>
           review the scopy of system upgrade, and implement the required system change for the TSE Flex system revamp.
           <br/>
           <br/>
           <br/>
          </p>
        </>
    );
  }
