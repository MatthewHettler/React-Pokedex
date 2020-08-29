import React, { Component } from 'react'
import styled from 'styled-components';


export default class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href="" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"><img src="https://fontmeme.com/permalink/200829/bfa59eec0c5e29a8e37a50c442fc3dda.png" alt="pokemon-font" border="0"></img><img src="https://www.pngkey.com/png/full/241-2412291_kanto-pokedex.png" style={{width: 2 + 'em', height: 1.8 + 'em'}} alt="pokedex-img" border="0"></img></a>
                </nav>
            </div>
        )
    }
}
