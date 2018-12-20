import React, { Component, Fragment } from 'react';
import './Form.css'

const Form = ({value, onChange, onCreate, onKeyPress, productCode, totalOrder, productPrice, totalPrice}) => {
    return (
        <div className="form">
            <input value={productCode} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
            추가
            </div>            
        </div>
        );
    };
    
export default Form;