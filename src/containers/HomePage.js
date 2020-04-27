
import React, { Component } from 'react';
import Form from '../components/Form'
import NavigationBar from '../components/Navbar'

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Form/>
            </div>
        );
    }
}

export default HomePage;