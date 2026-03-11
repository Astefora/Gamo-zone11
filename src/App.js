import React from "react";
import "./App.css";
import SSGILogo from "./ssgi_logo.png";

export default function App() {
  return (
    <div>

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src={SSGILogo} alt="SSGI Logo" className="logo" />
        </div>

        <div className="header-center">
          <h1>Space Science and Geospatial Institute (March, 2026)</h1>
        </div>
      </header>

      <div className="poster">

        {/* Official Statement */}
        <div className="statement-box">
          <h1>Automated Landslide and Flood Event Analysis in Gamo Zone</h1>

          <h2>Official Statement from the Ethiopian Space Science and Geospatial Institute</h2>

          <p>
            The Ethiopian Space Science and Geospatial Institute (SSGI) expresses its deepest condolences over the loss of life caused by heavy rainfall, subsequent landslides, and flooding in various areas of the Gamo Zone, particularly in the highland districts of Bonke, Kamba Zuria, and Gacho Baba.
          </p>

          <p>
            The Institute’s Disaster Monitoring Center has actively identified areas at high risk for landslides and ground instability through scientific research, sharing these findings with relevant stakeholders in advance. However, current tragic events underscore that translating these research results into coordinated, practical action is vital for preventing natural disasters and minimizing the scale of damage.
          </p>

          <p>
            Therefore, as the risk of similar disasters remains high this year, we call upon all stakeholders to:
          </p>

          <ul>
            <li>Prioritize scientific research and evidence-based data in decision-making.</li>
            <li>Strengthen inter-institutional coordination.</li>
            <li>Implement immediate precautionary measures to protect lives and property.</li>
          </ul>

        </div>


        {/* ROW 1 */}
        <div className="row">

          <div className="panel">
            <img src="/images/insar.jpg" alt="InSAR Index"/>
            <h2>InSAR Displacement Index</h2>

            <div className="text-box">
              Displacement index showing magnitude of ground movement.
            </div>
          </div>

          <div className="panel">
            <img src="/images/arc.jpg" alt="Susceptibility"/>
            <h2>Susceptibility Map</h2>

            <div className="text-box">
              Slope-based susceptibility zones indicating landslide risk.
            </div>
          </div>

          <div className="panel">
            <img src="/images/t5.jpg" alt="Additional Data"/>

            <div className="text-box">
              Additional  deformation monitoring map.
            </div>
          </div>

        </div>


        {/* ROW 2 (t4 BEFORE t3) */}
        <div className="row">

          <div className="panel">
            <img src="/images/insar2.jpg" alt="InSAR Map"/>
            <h2>InSAR Displacement Map</h2>

            <div className="text-box">
              Spatial distribution of ground deformation detected by InSAR.
            </div>
          </div>

          <div className="panel">
            <img src="/images/t4.jpg" alt="Precipitation"/>
            <h2>Three Hours Precipitation Data</h2>

            <div className="text-box">
              Rainfall accumulation contributing to slope instability.
            </div>
          </div>

          <div className="panel">
            <img src="/images/t3.jpg" alt="Time Series"/>
            <h2>Time Series Data</h2>

            <div className="text-box">
              Temporal monitoring of displacement trends.
            </div>
          </div>

        </div>


        {/* ONE SINGLE TEXT PLACEHOLDER AT BOTTOM */}
        <div className="analysis-box">

          <h3>Landslide Analysis Summary</h3>

          <p>
            The susceptibility analysis indicates that several areas within the Gamo Zone are highly vulnerable to landslides due to steep slopes, unstable geological conditions, and intense rainfall events. The InSAR displacement analysis confirms active ground deformation in multiple locations. When combined with precipitation data, the results suggest that prolonged rainfall significantly contributes to slope instability. These findings highlight the importance of integrating geospatial monitoring, early warning systems, and coordinated disaster risk management strategies to reduce potential impacts on communities and infrastructure.
          </p>

        </div>


        {/* Footer */}
        <div className="footer">
          Automated landslide monitoring using Geospatial and InSAR analysis
        </div>

      </div>
    </div>
  );
}