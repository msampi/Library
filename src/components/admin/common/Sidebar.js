import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">NAVEGACIÓN</li>
                        <li>
                            <Link to="/admin"><i className="fa fa-upload"></i> <span>Importación</span></Link>
                        </li>
                        <li>
                        <Link to="/admin/books"><i className="fa fa-book"></i> <span>Libros</span></Link>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}
export default SideBar;