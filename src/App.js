import React, { Component } from 'react';
import './App.css';
import './animate.css';

class App extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,400" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200" rel="stylesheet"/>
        <section className="parallax-scrolling" id="header">
          <div id="main-menu-social">
            <a className="main-social-links" href="https://www.facebook.com/tigrdenver">
              <img alt="facebook link" className="menu-social-icon" src={require("./images/facebookwhite.svg")}/>
            </a>
            <a className="main-social-links" href="https://twitter.com/horseysurprise">
              <img alt="twitter link" className="menu-social-icon" src={require("./images/twitterwhite.svg")}/>
            </a>
            <a className="main-social-links" href="https://www.instagram.com/katedinsmoremusic/">
              <img alt="instagram link" className="menu-social-icon" src={require("./images/instagramwhite.svg")}/>
            </a>
          </div>
          <div id="main-menu">
            <a className="menu-links" id="main-menu-tour" href="#tour">tour</a>
            <a className="menu-links" id="main-menu-music" href="#music">music</a>
            <a className="menu-links" id="main-menu-bio" href="#bio">bio</a>
            <a className="menu-links" id="main-menu-contact" href="#contact">contact</a>
          </div>
        <div className="main-title-container">
            <img alt="badass ghost revue logo" src={require('./images/GLogo.svg')} className="logo logoG" />
            <img alt="badass ghost revue logo" src={require('./images/RLogo.svg')} className="logo logoR" />
              <img alt="band members" src={require('./images/ghostrevue-bw-cleaner.png')} className="animated fadeIn photo" />
              <img alt="band members" src={require('./images/ghostrevue-bw-cleaner-small.svg')} className="animated fadeIn small-photo" />
        </div>
      </section>

      <section className="parallax-scrolling" id="bio">
        <h2 id="bio-title">Bio</h2>
        <p className="bio-text">
            Extra spice in the dish. A touch of whiskey in the drink. The sublime
            satisfaction of having rocked out. Ghost Revue leaves every member of
            the audience with high energy and good times.  From the UK to LA, to
            home again in Denver, this Colorado band is proud to bring it’s signature
            authenticity and high energy <i>‘killer live performances’ <a href="https://303magazine.com/2018/02/new-denver-music/" target="_blank" rel="noopener noreferrer">(Symone Roque - 303 Magazine)</a></i>
             to audiences anywhere..</p>
          <p className="bio-text">Featuring <i>‘a monster group of musicians’ <a href="http://www.westword.com/event/tyler-imbrey-and-the-ghost-review-8265032" target="_blank" rel="noopener noreferrer">(Rebecca Berlin - Westword)</a></i> and
          led by veteran songwriter Tyler Imbrey, Ghost Revue has found themselves in
          film soundtracks, ‘best of’ lists, and viral videos.  Currently, their
          looking for a way to your heart.</p>
      </section>

      <hr> 
      </hr>
      <section className="parallax-scrolling" id="tour">
        <h2 id="tour-title">Shows</h2>
        <div className="widget_iframe widget-container">
          <iframe title="tour-dates" className="widget_iframe tour-widget" src="https://www.reverbnation.com/widget_code/html_widget/artist_515710?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit" width="100%" height="100%" frameborder="0" scrolling="no">
          </iframe>
        </div>
      </section>

      <section className="parallax-scrolling" id="music">
        <h2 id="music-title">Music</h2>
        <div id="music-spacer"></div>
        <section id="music-container">
        </section>
        <iframe title="music-player" width="100%" height="265" scrolling="no" frameBorder="no" src="https://www.reverbnation.com/widget_code/html_widget/artist_515710?widget_id=55&pwc[included_songs]=1&context_type=page_object&spoid=musician_682975&pwc[size]=small&pwc[color]=dark&pwc[branded]=1" className="music-player"></iframe>
        <p className="music-text">
          <a className="music-links" href="https://www.reverbnation.com/tylerimbrey">For more tunes click here</a>
        </p>
      </section>

      <section className="parallax-scrolling" id="contact">
        <h2 id="contact-title">Contact</h2>
          <p className="contact-text">For booking inquiries, comments, or tickets, contact
            <a className="contact-links" href="mailto:ghostrevue@gmail.com"> GhostRevue@gmail.com</a>
          </p>
          <div id="social-icon-container">'
            <a className="contact-links" href="https://www.facebook.com/tigrdenver/">
              <img alt="facebook link" className="social-icon" src={require("./images/facebook.svg")}/>
            </a>
            {/* <a className="contact-links" href="https://twitter.com/horseysurprise">
              <img alt="twitter link" className="social-icon" src={require("./images/twitter.svg")}/>
            </a> */}
            <a className="contact-links" href="https://www.instagram.com/ghostrevue/">
              <img alt="instagram link" className="social-icon" src={require("./images/instagram.svg")}/>
            </a>
            <a className="contact-links" href="mailto:ghostrevue@gmail.com">
              <img alt="email" className="social-icon" src={require("./images/mail.svg")}/>
            </a>
          </div>
      </section>
    </div>
    );
  }
}

export default App;
