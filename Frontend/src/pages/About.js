/**
 *   About Page
 *
 */

import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-top-left"></div>
        <div className="about-top-right">
          <h1>ABOUT THE PROJECT</h1>
          <p>
            This site aims to provide a simple tool to track global progress in
            defeating Covid-19
          </p>
          <p>
            All data is pulled from the
            <a
              href="https://github.com/CSSEGISandData/COVID-19"
              target="_blank"
            >
              COVID-19 data repository
            </a>
            provided by Johns Hopkins University. Which in turn pulls data from
            various government sources, and tracking projects such as
            <a href="https://covid19.workpointnews.com/" target="_blank">
              Workpointnews.
            </a>
            All code for this site is{' '}
            <a
              href="https://github.com/covid19-deepverse/covid19-deepverse.io"
              target="_blank"
            >
              open source.
            </a>{' '}
            It is built with{' '}
            <a href="https://reactjs.org/" target="_blank">
              ReactJS
            </a>{' '}
            and consumes the Johns Hopkins data via a
            <a href="https://github.com/axios/axios" target="_blank">
              axios
            </a>{' '}
            which in turn wraps a another
            <a href="https://github.com/pomber/covid19" target="_blank">
              parser.
            </a>
          </p>
          <p>
            If you have a cool idea and want to add it to the website, email me
            at <a href="phattaraphon.c@ku.th">phattaraphon.c@ku.th</a>
          </p>
          <h1>TEAM</h1>
          <div className="about-top-right-teams">
            <div className="teams">
              <div className="teams-photo">
                <img
                  src="https://i.ibb.co/yqW1GhS/circle-cropped.png"
                  alt="new"
                />
              </div>
              <div className="teams-name">Phattaraphon Chomchaiyaphum</div>
              <div className="teams-social">
                <div>
                  <a
                    href="https://www.facebook.com/phattaraphon.oat/"
                    target="_blank"
                  >
                    <FiIcons.FiFacebook size="1.2em" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/khawoat6/" target="_blank">
                    <FaIcons.FaInstagram size="1.3em" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/covid19-deepverse/covid19-deepverse.io"
                    target="_blank"
                  >
                    <AiIcons.AiFillGithub size="1.3em" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/phattaraphon_c" target="_blank">
                    <FaIcons.FaTwitter size="1.3em" />
                  </a>
                </div>
              </div>
            </div>
            <div className="teams">
              <div className="teams-photo">
                <img
                  src="https://i.ibb.co/LSgSbBj/circle-cropped-1.png"
                  alt="new"
                />
              </div>
              <div className="teams-name">Nattapon Phumutta</div>
              <div className="teams-social">
                <div>
                  <a href="https://www.facebook.com/nongtodza" target="_blank">
                    <FiIcons.FiFacebook size="1.2em" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/phumutta" target="_blank">
                    <AiIcons.AiFillGithub size="1.3em" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/natttapon-phumutta/"
                    target="_blank"
                  >
                    <FaIcons.FaLinkedin size="1.3em" />
                  </a>
                </div>
              </div>
            </div>
            <div className="teams">
              <div className="teams-photo">
                <img
                  src="https://i.ibb.co/qWhpLmh/circle-cropped-2.png"
                  alt="new"
                />
              </div>
              <div className="teams-name">nattakarn unwun</div>
              <div className="teams-social">
                <div>
                  <a href="https://www.facebook.com/nut21.momo" target="_blank">
                    <FiIcons.FiFacebook size="1.2em" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/momonus" target="_blank">
                    <AiIcons.AiFillGithub size="1.3em" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/nassumiii" target="_blank">
                    <FaIcons.FaTwitter size="1.3em" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/nussumi/"
                    target="_blank"
                  >
                    <FaIcons.FaLinkedin size="1.3em" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <h1 className="about-bottom-left">
          @2020 deepverse.io, All Right Reserved.
        </h1>
        <div className="about-bottom-right">
          <a
            href="https://github.com/covid19-deepverse/covid19-deepverse.io"
            target="_blank"
          >
            <AiIcons.AiFillGithub size="1.3em" />
            <strong>Open Source</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
