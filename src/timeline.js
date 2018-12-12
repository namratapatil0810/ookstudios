import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/timeline.css";
import "./css/animation.css";

function Timeline() {
  return (
    <div class="timeline">
      <div class="card left">
        <div class="content">
          s<p>Lorem ipsum dolor</p>
        </div>
      </div>
      <div class="card right">
        <div class="content">
          <h2>2016</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="card left">
        <div class="content">
          <h2>2015</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="card right">
        <div class="content">
          <h2>2012</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
