import React, { Component } from "react";
import '../../styles/Home.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contents from '../../images/Red-Blue-Illustrated-Space-Table-of-Contents.png';
import footer from '../../images/footer.png';
import Collec from '../../images/Sublime-Collection.png';
import head from '../../images/head.png';
import regis from '../../images/register.png';
import log from '../../images/login.png';

export default class home extends Component {
    render() {
        return (

            <section class="content">
                 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <a href="/"><img src={head} width="500px"/></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li >
                <img src={regis} width="30px" />
                <Link className="nav-link" to={"/register"}>REGISTER</Link>
              </li> 
              <li>
                <img src={log} width="30px" />
                
                <Link className="nav-link" to={"/login"}>LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
                <div class="section_top">
                    <img
                        src={Collec}
                        alt="title"
                        class="image-title"
                    />
                </div>
                <div class="section_bottom">
                    <div class="bottom_left">
                        <img
                            src={Contents}
                            alt="timeline"
                            class="image-timeline"
                        />
                    </div>
                    <div class="bottom_right">
                        <div class="right_title">
                            <p>
                            CiiS2021’s Keynote Speaker: Dr.Jamie A. Ward (Goldsmiths
                            University of London, UK)
                            </p>
                        </div>
                        <div class="right_paragraph">
                            <p>
                            All prospective contributors are welcome to join us at The
                            International Workshop on Cognitive Intelligence & Information
                            System (CiiS) which will be held in Samut Songkhram province the
                            'City of Oriental Venice', Thailand, from Sunday January 24th to
                            Wednesday January 27th, 2021. The main purpose of CiiS is to bring
                            more collaborations in the related fields for sharing research's
                            initiative idea, further publication, resource, informative
                            discussion carried out within a friendly atmosphere, and the
                            promotion of recent advancements in research across the world. The
                            CiiS will also provide a special exchange of academic forum on how
                            human and machine learn for knowledgeable researchers and
                            practitioners through the following topics: human and machine
                            intelligence learning, cognitive and behavioral sciences,
                            experimental psychology, cognitive system modeling, human
                            perception, visual information processing, computational
                            intelligence system, biomedical information processing, machine
                            intelligence in information system, brain-like cognitive computing
                            and specially related in-depth topics.
                            </p>
                        </div>
                    </div>
                </div>
                <footer>
                    <img src={footer}/>
                </footer>
            </section>
        );
    }
}
