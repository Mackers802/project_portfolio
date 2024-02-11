import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCss3, faGit, faGithub, faHtml5, faJs, faLinkedin, faMdb, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
// import { faFileDownload, faUser, faAddressCard, faBriefcase } from "@fortawesome/free-solid-svg-icons";

// const house = <FontAwesomeIcon icon={faGit} />

export default function nav() {
  return (
    <>
      <div id="navbar">
        Nabvbar
          <Link to="/">Return</Link>
      </div>
    </>
  )
}
