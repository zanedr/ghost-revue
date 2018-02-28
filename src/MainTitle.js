import React, { Component } from 'react';
import * as d3 from 'd3';
import './MainTitle.scss';
import './animate.css';

export class MainTitle extends Component {
  render() {
    return (
        <span class="container">
            <h2 className="animated fadeInDown title">
                Ghost Revue
            </h2>
            {/* <img src={require('./images/kate.png')} className="animated fadeIn photo" /> */}
        </span>
    )}
}