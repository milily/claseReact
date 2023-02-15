import React from "react";
import logoApiux from '../../assets/logoApiux.png'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <img className='icon' alt='img' src={logoApiux}></img>
                <h1>ReactJS</h1>
            </div>
        )
    }
}

export default Header