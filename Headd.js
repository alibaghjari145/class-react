import React from 'react';
import './../css/header.css';

class Headd extends React.Component {
   render(){
    return (
        <div className="nav">
            <div id="navbar">
                <ul>
                    <li>خانه </li>
                    <li>محصولات</li>
                    <li>درباره ما</li>
                    <li>سایر</li>
                </ul>
            </div>
          
        </div>
    )
};
   }

export default Headd;