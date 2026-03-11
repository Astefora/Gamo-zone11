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

        {/* Official Statement with side-by-side images */}
        <div className="statement-box institute-row">

          {/* Text */}
          <div className="institute-text">
            <h1>Landslide and Flood Event Analysis in Gamo Zone</h1>
            <h2 className="institute-title">
              Ethiopian Space Science and Geospatial Institute
              <span className="dmc">(Disaster Monitoring Center - DMC)</span>
            </h2>

            <p>
              The Ethiopian Space Science and Geospatial Institute (SSGI) expresses its deepest condolences over the loss of life caused by heavy rainfall, subsequent landslides, and flooding in various areas of the Gamo Zone, particularly in the highland districts of Bonke, Kamba Zuria, and Gacho Baba.
            </p>

            <p>
              The Institute's Disaster Monitoring Center has actively identified areas at high risk for landslides and ground instability through scientific research, sharing these findings with relevant stakeholders in advance. However, current tragic events underscore that translating these research results into coordinated, practical action is vital for preventing natural disasters and minimizing the scale of damage.
            </p>

            <p>
              Therefore, as the risk of similar disasters remains high this year, we call upon all stakeholders to:
            </p>

            <ul>
              <li>Prioritize scientific research and evidence-based data in decision-making.</li>
              <li>Strengthen inter-institutional coordination.</li>
              <li>Implement immediate precautionary measures to protect lives and property.</li>
            </ul>
              <p>The Image was taken from offoical facebookpage of EBC(sououce:https://www.facebook.com/share/1N6tx6KtkQ/</p>
          </div>
  
          {/* Equal Side-by-side Images */}
          <div className="institute-images">
            <img src="/images/t66.jpg" alt="Monitoring 1" className="side-image" />
            <img src="/images/t77.jpg" alt="Monitoring 2" className="side-image" />
          </div>
        
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
              Susceptibility zones indicating landslide risk.
            </div>
          </div>

          <div className="panel">
            <img src="/images/t5.jpg" alt="Additional Data"/>
            <div className="text-box">
              Additional deformation monitoring map.
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">

          {/* InSAR2 panel */}
          <div className="panel">
            <img src="/images/insar2.jpg" alt="InSAR Map"/>
            <h2>InSAR Displacement Map</h2>
            <div className="text-box">
              Spatial distribution of ground deformation detected by InSAR.
            </div>
          </div>

          {/* t3 + t10 VERTICAL panel */}
          <div className="panel vertical-images">
            <div className="vertical-container">
              <img src="/images/t3.jpg" alt="Time Series"/>
              <img src="/images/t10.jpg" alt="Additional Monitoring"/>
            </div>
            <h2>Time Series Data</h2>
            <div className="text-box">
              Temporal monitoring of displacement trends.
            </div>
          </div>

          {/* t4 panel */}
          <div className="panel">
            <img src="/images/t4.jpg" alt="Precipitation"/>
            <h2>Three Hours Precipitation Data</h2>
            <div className="text-box">
              Rainfall accumulation contributing to slope instability.
            </div>
          </div>

        </div>

        {/* ANALYSIS TEXT */}
        <div className="analysis-box">
          <h3>Landslide Analysis Summary</h3>
          <p>
            Following the catastrophic flood and landslide event that affected the Gamo region on 10 March 2026, Interferometric Synthetic Aperture Radar (InSAR) time-series analysis was used to investigate pre-event ground deformation patterns that may have contributed to slope instability. The analysis utilized Sentinel-1 Single Look Complex (SLC) imagery acquired along descending orbit track 152, spanning January 2023 through the end of 2025, to capture ground motion prior to the event. Interferogram generation was performed using the Alaska Satellite Facility's HyP3 on-demand processing service (https://search.asf.alaska.edu/), while the time-series inversion was conducted using the Miami InSAR Time-series software in Python (MintPy). The derived mean line-of-sight (LOS) velocity map reveals persistent subsidence across the affected area, with location P1 (Figure 1) showing a downward displacement rate of −1.16 cm yr⁻¹, represented by blue coloration in the velocity field. Conversely, areas displaying positive velocities (red coloration) indicate localized surface uplift, which may be associated with seasonal hydrological processes or differential soil compaction. These observations suggest that progressive ground subsidence during the pre-event period may have increased susceptibility to slope failure during the extreme precipitation event. In addition, previous landslide susceptibility assessments conducted by the Disaster Risk Management Commission (DRMC) indicated that the affected area falls within a very high landslide susceptibility zone. The combination of long-term ground deformation detected through InSAR and the high susceptibility classification identified in earlier studies highlights the inherent instability of the slope. However, further integration of hydrogeological, rainfall, and geotechnical data would be necessary to establish a definitive causal relationship between the observed deformation trends and the triggering mechanisms of the 10 March 2026 disaster.
          </p>
        </div>

        {/* Footer */}
        <div className="footer">
          Landslide and Flood assessment on recent monitoring using Geospatial and InSAR analysis
        </div>

      </div>
    </div>
  );
}