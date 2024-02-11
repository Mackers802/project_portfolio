import React from 'react';
import $ from 'jquery';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3, faGit, faGithub, faHtml5, faJs, faLinkedin, faMdb, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function nav() {
  const toggle_submenu = (e) => {
    const $this = $(e.target);
    const $menu = $this.parent('.menu');
    var $submenu = $menu.children('.submenu');
    if($this.hasClass('submenu-link'))
      $submenu = $this.parent('.submenu');

    if($submenu.length > 0 && $submenu.hasClass('hide'))
        $submenu.removeClass('hide');
    else
      $submenu.addClass('hide');
  }

  // Convert to map function for dropdowns
  // const navbar_maps = [
  //   [ {title: 'Skills'}, {title:'React'}, {title:'Python'}, {title:'PHP'}, {title:'Javascript'}, {title:'Bootstrap'}, {title:'HTML'}, {title:'Scss/Css'}, {title:'Smarty'}],
  //   [ {title:'Projects'}, {title:'My Project 1'}, {title:'My Project 2'}, {title:'My Project 3'}, {title:'My Project 4'}, {title:'My Project 5'}],
  //   [ {title: 'AWS Cert\'s'}, {title:'Cernt Name 1'}, {title:'Cernt Name 2'}, {title:'Cernt Name 3'}, {title:'Cernt Name 4'}, {title:'Cernt Name 5'},]
  // ];

  return (
    <div id="navbar">
      <span className="previous-parent"> <Link to="/"> <FontAwesomeIcon className='previous' icon={faArrowRightToBracket} /> </Link> </span>
      <span className="dropdowns-parent">

      <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
        <span className="title"> Skills </span>
        <ul className="submenu submenu-horizontal hide" >
          <li className="submenu-link" > <span> React </span> </li>
          <li className="submenu-link" > <span> Python </span> </li>
          <li className="submenu-link" > <span> PHP </span> </li>
          <li className="submenu-link" > <span> Javascript </span> </li>
          <li className="submenu-link" > <span> Bootstrap </span> </li>
          <li className="submenu-link" > <span> HTML </span> </li>
          <li className="submenu-link" > <span> Scss/Css </span> </li>
          <li className="submenu-link" > <span> Smarty </span> </li>
        </ul>
      </div>

        <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <span className="title" to="/projects" > Projects </span>
          <ul className="submenu hide" >
            <li className="submenu-link" > <span className="" > My Project 1 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 2 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 3 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 4 </span> </li>
            <li className="submenu-link" > <span className="" > My Project 5 </span> </li>
          </ul>
        </div>

        <div className="menu" onMouseEnter={toggle_submenu} onMouseLeave={toggle_submenu}>
          <span className="link" to="/"> AWS Cert's </span>
          <ul className="submenu hide" >
              <li className="submenu-link" > <span className="" > Cernt Name 1 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 2 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 3 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 4 </span> </li>
              <li className="submenu-link" > <span className="" > Cernt Name 5 </span> </li>
            </ul>
        </div>

        <Link className="link link-last" to="/"> Contact </Link>

      </span>
    </div>
  )
}
