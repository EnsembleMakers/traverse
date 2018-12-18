import React, { Fragment, Component } from 'react';
import DealItem from './DealItem';
import RegProduct from './RegProduct';

// 오른쪽 상단, postSchema 연결부분
class TransactionTwo extends Component {

    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);
    }

    // static defaultProps = {
    //     dealInfo: ['ddddd']
    // }

    changeState = (value) => {
        this.setState(value);
    }

    render() {
        // const { dealInfo } = this.props;
        // const list = dealInfo.map(
        //     info => (<DealItem key={info.id} info={info} />)
        // );

        return (
            <Fragment>
                <div class="eight wide column">
                    <div className="productDetail">
                        <div class="ui segment">
                            <h3>DealInfo</h3><br />
                            <div>
                                <RegProduct changeState={this.changeState}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TransactionTwo;
