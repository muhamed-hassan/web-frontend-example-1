import React from 'react';
import Logo from '../assets/logo.jpg';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <img class="logo" src={Logo} alt="Logo" />
            </header>
        );
    }

}