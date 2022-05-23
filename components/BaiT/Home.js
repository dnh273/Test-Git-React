import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'

export default class Home extends Component {
    render() {

        let style = {
            padding: 0
        }

        return (
            <div className='container-fluid'>
                <div className="row">
                    <div style={style} className='col-12'>
                        <HeaderDemo></HeaderDemo>
                    </div>
                </div>
                <div className="row">
                    <div style={style} className='col-4'>
                        <Navigation></Navigation>
                    </div>
                    <div style={style} className='col-8'>
                        <Content></Content>
                    </div>
                </div>
                <div className='row'>
                    <div style={style} className='col-12'>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}
