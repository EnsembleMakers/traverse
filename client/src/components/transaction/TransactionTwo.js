import React, { Fragment, Component } from 'react';

// 오른쪽 상단, postSchema 연결부분
class TransactionTwo extends Component {

    constructor(props) {
        super(props);

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
                                <h3>
                                    {this.props.data.id}
                                </h3>
                                <h3>
                                    {this.props.data.productCode}
                                </h3>
                                <h3>
                                    {this.props.data.totalOrder}
                                </h3>
                                <h3>
                                    {this.props.data.productPrice}
                                </h3>
                                <h3>
                                    {this.props.data.totalPrice}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TransactionTwo;
