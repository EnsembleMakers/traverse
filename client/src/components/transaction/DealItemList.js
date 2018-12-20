import React, { Component } from 'react';
import DealItem from './DealItem';

class DealItemList extends Component {
    
    render() {
        const {dealInfo, onToggle, onRemove} = this.props;
        const dealItemList = dealInfo.map(
            ({id, text, checked}) => (
                <DealItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
             />
            )
        );
        return (
            <div>
              {dealItemList}
            </div>
        );
    }
}

export default DealItemList;