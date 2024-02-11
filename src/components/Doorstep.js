import React from 'react';
import { Link } from 'react-router-dom';

export default function Doorstep() {
  return (
    <>
        <div id="doorstep">
            <div class="polygon1"></div>
            <div class="polygon2"></div>
            <div class="etr-btn">
                <Link to="/entered">Enter</Link>
            </div>
        </div>
    </>
  )
}
