import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/home.css";
import "./css/animation.css";
import "./css/table.css";

import Timeline from "./timeline";
import { stat } from "fs";

class Home extends Component {
  state = {
    project: [
      "Site Analysis",
      "Product Design",
      "Facade Design",
      "Feasibility Analysis",
      "Development Consultancy",
      "Landscape Design",
      "Structural Design",
      "Finance Enabling",
      "Master-planning",
      "Interior Design",
      "Mep Design",
      "Architectural Design",
      "Lighting Design",
      "Bim Integration",
      "Marketing Support",
      "Project Management"
    ]
  };
  render() {
    return (
      <div>
        <div id="main-logo" class="row main">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 margin-type1">
            <div class="typewriter-class-1">
              <a href="http://www.ook.studio/">
                <p class="typewriter-1">
                  www<b class="maroon">.ook.</b>studio
                </p>
              </a>
            </div>
            <img
              src={require("./img/small-o.png")}
              class="small-O animated animation-delay-38 rollIn"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <img
              src={require("./img/big-o.png")}
              class="big-O animated animation-delay-44 zoomInUp"
            />
            <div class="typewriter-class-2">
              <a herf="http://www.worksphere-di.com/">
                <p class="typewriter-2">www.worksphere-di.com</p>
              </a>
            </div>
          </div>
        </div>
        <div class="about row">
          <div class="col-lg-3 col-md-3 col-sm-3">
            <img class="person-img" src={require("./img/kalhan-mattoo.png")} />
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 about-margin-left">
            <p class="text-data white">
              Kalhan Has Successfully Worked With 60 Organisations On 90
              Projects Designing Towns To Buildings In 30 Locations Winning 50
              Awards & Over 100 Publications And Accepted Invites To Speak At
              Dozens Of Venues To Share Insights In Hope Of Igniting Minds To
              The Task Of Building A Better Future
            </p>
            <div class="margin-top-20">
              <img class="client-img" src={require("./img/logo.jpg")} />
              <span class="big-x">X</span>
              <img
                class="client-img"
                src={require("./img/planet-studio.jpg")}
              />
            </div>
          </div>
        </div>
        <div class="row center">
          <img class="animated rollIn" src={require("./img/one team.png")} />
        </div>
        <div id="projects" class="row center">
          <h2 class="background-maroon">INTEGRATED PROJECT DETAILS</h2>
          <div class="table">
            {this.state.project.map(OBJ => {
              return (
                <div class="col-lg-3 col-sm-3 col-6">
                  <h3>{OBJ}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div id="how we do" class="row center">
          <h2 class="background-maroon">THE THREE STEPS PROCESS</h2>
          <div class="how-we-do">
            <div class="col-lg-6 col-sm-6 col-12">
              <h3 class="align-left">Co-create through Idea-lab:</h3>
              <ul class="">
                <li class="align-left animated fadeInLeft">OWN LEGACY</li>
                <li class="align-right animated fadeInRight">COMPETITION</li>
                <li class="align-left animated fadeInLeft">INTERVIEWS</li>
                <li class="align-right animated fadeInRight">FINDINGS</li>
                <li class="align-left animated fadeInLeft">PROGRAM</li>
                <li class="align-right animated fadeInRight">ITERATIONS</li>
                <li class="align-left animated fadeInLeft">VALIDATION</li>
              </ul>
              <p class="text-data black">
                Mapping, Analysing, Structuring Information & Mining For
                Insights And Participative Design Development With Client
              </p>
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
              <img class="person-img" src={require("./img/lab.png")} />
            </div>
          </div>
          <div class="how-we-do">
            <div class="col-lg-6 col-sm-6 col-12">
              <img class="person-img" src={require("./img/augment.png")} />
            </div>
            <div class="col-lg-6 col-sm-6 col-12">
              <h3 class="align-left">Augment value through design:</h3>
              <ul>
                <li class="align-left animated fadeInLeft">PROGRAM</li>
                <li class="align-right animated fadeInRight">INNOVATION</li>
                <li class="align-left animated fadeInLeft">COSTINGS</li>
                <li class="align-right animated fadeInRight">TIMELINE</li>
                <li class="align-left animated fadeInLeft">QUALITY</li>
                <li class="align-right animated fadeInRight">DELIVERY</li>
                <li class="align-left animated fadeInLeft">MAINTENANCE</li>
              </ul>
              <p class="text-data black">
                Use Design Led Thinking To Enhance Value In All Decisions For
                Design, Engineering And Delivery Components For The Project
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
