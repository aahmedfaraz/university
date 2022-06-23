import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

const Layout = props => {
  return (
    <>
        <Navbar />
        <main>
            <aside>
                <h3>Web Engineering Record</h3>
                <ul class="vertical-navbar">
                    <Link to="/" class="selected">
                        <i class="material-icons">task</i>
                        <p>Assignment 1</p>
                    </Link>
                    <Link to="./all-labs">
                        <i class="material-icons">task</i>
                        <p>All Labs</p>
                    </Link>
                    <Link to="./assignment-2">
                        <i class="material-icons">task</i>
                        <p>Assignment 2</p>
                    </Link>
                    <Link to="./assignment-3">
                        <i class="material-icons">task</i>
                        <p>Assignment 3</p>
                    </Link>
                </ul>
            </aside>
            <section id='morale'>
                {
                    props.children
                }
                <Footer />
            </section>
            <aside>
                <h3>Select Groups</h3>
                <ul class="vertical-navbar">
                    <a href="#group-3-and-6">
                        <i class="material-icons">group</i>
                        Group 3 and Group 6
                    </a>
                    <a href="#group-7-and-1">
                        <i class="material-icons">group</i>
                        Group 7 and Group 1
                    </a>
                    <a href="#group-5-and-4">
                        <i class="material-icons">group</i>
                        Group 5 and Group 4
                    </a>
                    <a href="#group-2-and-8">
                        <i class="material-icons">group</i>
                        Group 2 and Group 8
                    </a>
                </ul>
            </aside>
        </main>
    </>
  )
}

export default Layout;