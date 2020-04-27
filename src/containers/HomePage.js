import React, { Component } from 'react';
import Form from '../components/Form'
import Navbar from '../components/Navbar'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Form/>
            </div>
        );
    }
}

export default HomePage;