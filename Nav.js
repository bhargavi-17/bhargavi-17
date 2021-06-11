import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import LayersIcon from '@material-ui/icons/Layers';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Nav() {
    return (
        <nav>
            <div id="micon"><LayersIcon /></div>
            <h2>Portfolio</h2>
            <ul className="navlink">
                <Link className="navstyle" to="/about">
                    <li><div><PersonIcon /></div>About</li>
                    </Link>
                <Link className="navstyle" to="/projects">
                    <li><div><AccountTreeIcon /></div>projects</li>
                </Link>
                <Link className="navstyle" to="/contact">
                    <li><div><ContactMailIcon /></div>contact</li>
                </Link>
                <Link className="navstyle" to="/Skills">
                    <li><div><AssignmentIcon /></div>Skills</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
