import React, { Component } from 'react'
import background from '../images/bg_1.jpg'

export default class Body extends Component {
    render() {
        return (
            <div className="hero-wrap ftco-degree-bg header-image"
                style={{ backgroundImage: `url(${background})` }}
                data-stellar-background-ratio="0.5"
                responsive
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text justify-content-center align-items-center">
                        {/* <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-end"> */}
                        <div class="text text-center">
                            <h1 class="mb-4">The Simplest <br />Way to Find Property</h1>
                            <p style={{ fontSize: '18px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div class="mouse">
                    <button href="#" class="mouse-icon">
                        <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                    </button>
                </div>
            </div>
        )
    }
}
