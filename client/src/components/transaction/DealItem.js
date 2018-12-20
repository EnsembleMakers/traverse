import React, { Component } from 'react';

class DealItem extends Component {

    static defaultProps = {
        info: {
            id: 0,
            productCode: '',
            totalOrder: '',
            productPrice: '',
            totalPrice: '',
            file: '',
        }
    }

    render() {

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        const {
            id, productCode, totalOrder, productPrice,
            totalPrice, file
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{id}</b></div>
                <div>{productCode}</div>
                <div>{totalOrder}</div>
                <div>{productPrice}</div>
                <div>{totalPrice}</div>
                <div>{file}</div>
            </div>
        );
    }
}

export default DealItem;




// import React, { Component } from 'react';
// import './DealItem.css';

// class DealItem extends Component {
//     render() {
//         const { text, checked, id, onToggle, onRemove } = this.props;

//         return (
//             <div className="todo-item" onClick={() => onToggle(id)}>
//                 <div className="remove" onClick={(e) => {
//                     e.stopPropagation(); // onToggle 이 실행되지 않도록 함
//                     onRemove(id)
//                 }
//                 }>&times;</div>
//                 <div className={`todo-text ${checked && 'checked'}`}>
//                     <div>{text}</div>
//                 </div>
//                 {
//                     checked && (<div className="check-mark">✓</div>)
//                 }
//             </div>
//         );
//     }
// }

// export default DealItem;