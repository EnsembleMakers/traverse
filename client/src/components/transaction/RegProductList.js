import React, { Component } from 'react';
import RegProduct from './RegProduct';

class RegProductList extends Component {

    render() {
        return (
            <div>
                {this.props.list}
            </div>
        );
    }
}

export default RegProductList;