import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return(
            <nav className='navbar navbar-expand-sm navbar-light bg-danger px-sm-4'>
                 <Link to='/'>
                     <img src={logo} className='navbar-brand' width='50' height='50' alt=""/>
                 </Link>
                 <ul className='navbar-nav align-items-center'>
                     <li className='nav-item ml-5'>
                         <Link to='/' className='nav-link '>
                             Products
                         </Link>
                     </li>
                 </ul>
                 <Link to='/cart' className='ml-auto'>
                     <button className='btn btn-outline-dark'>
                         My Cart
                     </button>
                 </Link>
            </nav>
        )
    }
}