import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><h2>Amirali Shabani Website</h2></a>
                <p>A personal portfolio website displaying my projects and case studies, built with ReactJS and containerized using Docker for deployment.</p>
            </div>
            <div className="project">
                <a href="http://agrb.ir:92/login/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://agrb.ir:92/login/" target="_blank" rel="noreferrer"><h2>Livestock Management Solution</h2></a>
                <p>Laravel-based system featuring: Pedigree tracking, financial management, advanced analytics + SMS OTP authentication.</p>
            </div>
            <div className="project">
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><h2>Premium Nuts E-Commerce</h2></a>
                <p>Modern Tailwind CSS frontend + WordPress/WooCommerce backend with custom payment gateway for seamless dry fruit sales and secure transactions.</p>
            </div>
            <div className="project">
                <a href="https://abadgaran.co/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://abadgaran.co/" target="_blank" rel="noreferrer"><h2>Abadgaran Co. | Civil Engineering Portal</h2></a>
                <p>Corporate website with projects gallery, services management and news section, powered by WordPress + Elementor</p>
            </div>
            <div className="project">
                <a href="https://trfs.ir/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://trfs.ir/" target="_blank" rel="noreferrer"><h2>Rafsanjan Transport Complaint System</h2></a>
                <p>An integrated urban transportation complaint management system with advanced capabilities including Laravel-based architecture, Tailwind-powered user interface, intelligent validation system, custom admin panel, and fully responsive design that meets the needs of both citizens and municipal experts.</p>
            </div>
            <div className="project">
                <a href="https://app.yarimo.ir/transportation/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://app.yarimo.ir/transportation/" target="_blank" rel="noreferrer"><h2>Rafsanjan Transportation PM System</h2></a>
                <p>Developed using PHP (Pure) and Bootstrap technologies, this specialized system handles urban transportation fleet maintenance and repair processes. With its optimized and stable architecture, it has been providing uninterrupted service since 2019, fully meeting the organization's operational needs.</p>
            </div>
            <div className="project">
                <a href="https://yarimo.ir/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yarimo.ir/" target="_blank" rel="noreferrer"><h2>Yarimo Software E-Commerce</h2></a>
                <p>Complete online sales solution with WordPress/WooCommerce, custom payment gateway and SMS panel integration, powered by Bootstrap for professional presentation.</p>
            </div>
            <div className="project">
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://amiralishabani.ir/" target="_blank" rel="noreferrer"><h2>Abadgaran's advanced ERP system</h2></a>
                <p>Built with Laravel backend and ReactJS frontend, integrates specialized modules for machinery management, administrative operations, technical workflows and project planning through RESTful APIs with OAuth2 authentication.</p>
            </div>
            {/* <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;