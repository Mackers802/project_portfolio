import React from 'react';
import { Link } from 'react-router-dom';

export default function Doorstep() {
  return (
    <>
        <div id="doorstep">
            <div className="polygon1"></div>
            <div className="polygon2"></div>
              <Link to="/entered" className="etr-btn"> 
                <span className="btn-text"> Launch </span>
              </Link>
        </div>
    </>
  )
}
