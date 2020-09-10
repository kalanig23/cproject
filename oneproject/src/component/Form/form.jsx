import React, { Component } from 'react'
import '../Form/form.css';

export default class form extends Component {
    render() {
        return (
            <div className="form">
                <div className="activity">Activities > Create activity</div>
                <div className="title">Title</div>
                <div className="title-quote">Washing your hands, Skribble, etc.</div>
                <div>
                    <p>About the activity</p>
                    <textarea className="activity-input"></textarea>
                </div>
                <div>
                    <p>Therapy</p>
                    <div className="theraphy-input">
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Geet</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Skills targeted</p>
                    <div className="theraphy-input">
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Geet</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                        <div className="therapy-inner-box">
                            <span className="theraphy-input-value">Kalani</span>
                            <img className="close-icon" src={require('../../image/close.png')} />
                        </div>
                    </div>
                </div>
                {/* <div className="activity">Activities > Create Activity</div>
                <div className="title">Title</div>
                <div className="title-content">Washing your hands, Skribble, etc.</div>

                <div className="line"></div>
                <div className="about">About the activity</div>
                <div className="about-box"></div>
                <div className="therapy">Therapy</div>
                <div className="therapy-box"></div>
                <div className="therapy-innerbox1"></div>
                <div className="therapy-innerbox2"></div>
                <div className="skills">Skills targeted</div>
                <div className="skills-box"></div>
                <div className="skills-innerbox1"></div>
                <div className="skills-innerbox2"></div>
                <div className="skills-innerbox3"></div>
                <div className="skills-innerbox4"></div>

                <div className="duration">Duration</div>
                <div className="duration-box"></div>
                <div className="age">Age Group</div>
                <div className="age-box1"></div>
                <div className="to">To</div>
                <div className="age-box2"></div>
                <div className="level">Difficulty level</div>
                <div className="level-box1"></div>
                <div className="level-box2"></div>
                <div className="level-box3"></div>
                <div className="status">Status</div>
                <div className="status-box1"></div>
                <div className="status-box2"></div>
                <div className="props">Props needed</div>
                <div className="prop-box"></div>
                <div className="props_innerbox1"></div>
                <div className="props_innerbox2"></div>
                <div className="props_innerbox3"></div>
                <div className="props_innerbox4"></div> */}
                {/* <div className="instructions">Instructions</div>
                <div className="tips">Tips and Suggestions</div>
                <div className="checklist">Checklist</div>
                <div className="media">Media, Documents and Links</div>
                <div className="classname"></div> */}

            </div>
        )
    }
}
