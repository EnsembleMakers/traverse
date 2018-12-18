import React, { Fragment, Component } from 'react';

import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';

import '../../styles/RegProduct.css';
import DealInfoListTemplate from './DealInfoListTemplate';

class RegProduct extends Component {

    constructor(props) {
        super(props);
        
        this.id = 1;
        this.state = {
            input: '',
            productCode: '',
            totalOrder: '',
            productPrice: '',
            totalPrice: '',
            file: [],
            dealInfo: [
                {
                    id: 0,
                    productCode: '',
                    totalOrder: '',
                    productPrice: '',
                    totalPrice: '',
                    file: '',
                }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.createProductCode = this.createProductCode.bind(this);
        this.createTotalOrder = this.createTotalOrder.bind(this);
        this.createProductPrice = this.createProductPrice.bind(this);
        this.createTotalPrice = this.createTotalPrice.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createRequest = this.createRequest.bind(this);
        console.log(this.props.change)        
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    // handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         this.handleCreate();`
    //     }
    // }

    createProductCode = () => {
        const { input } = this.state;
        this.setState({
            input: '',
            productCode: input
        });
    }

    createTotalOrder = () => {
        const { input } = this.state;
        this.setState({
            input: '',
            totalOrder: input
        });
    }

    createProductPrice = () => {
        const { input } = this.state;
        this.setState({
            input: '',
            productPrice: input
        });
    }

    createTotalPrice = () => {
        const { input } = this.state;
        this.setState({
            input: '',
            totalPrice: input
        });
    }

    createRequest = () => {
        const { productCode, totalOrder, productPrice, totalPrice, file, dealInfo } = this.state;
        this.setState({
            dealInfo: dealInfo.concat({
                id: this.id++,
                productCode: productCode,
                totalOrder: totalOrder,
                productPrice: productPrice,
                totalPrice: totalPrice,
                file: file,
            })
        })
        console.log(this.props.changeState)        
        // this.props.changeState(this.state.dealInfo);
    }

    // passProps = () => {
    //     const { dealInfo } = this.state 
    //     this.props.callbackFromParent(dealInfo);
    // }

    handleChangeFile = (e) => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.fileInput.files[0])
    };


    render() {
        const { dealInfo } = this.state;
        const { productCode, totalOrder, productPrice, totalPrice } = this.state;


        return (
            <Fragment>
                <div className="top">
                    <img src="/img/Traverse_logo.PNG" alt="" />
                </div>

                <div class="ui grid">
                    <div class="eight wide column">
                        <div>
                            <i class="huge edit icon"></i><h2>Your Request</h2><br />
                            <DealInfoListTemplate form={(
                                <Fragment>
                                    <h3>Product Code</h3>
                                    <FormOne
                                        value={productCode}
                                        onChange={this.handleChange}
                                        onCreate={this.createProductCode}
                                    />
                                    <h3>Total Order</h3>
                                    <FormTwo
                                        value={totalOrder}
                                        onChange={this.handleChange}
                                        onCreate={this.createTotalOrder}
                                    />
                                    <h3>Product Price</h3>
                                    <FormThree
                                        value={productPrice}
                                        onChange={this.handleChange}
                                        onCreate={this.createProductPrice}
                                    />
                                    <h3>Total Price</h3>
                                    <FormFour
                                        value={totalPrice}
                                        onChange={this.handleChange}
                                        onCreate={this.createTotalPrice}
                                    />
                                </Fragment>
                            )}>
                            </DealInfoListTemplate>
                        </div>
                    </div>

                    <div class="eight wide column">
                        <div>
                            <i class="huge calculator icon"></i><h2>Order Preview</h2><br />
                        </div>
                        <div className="orderPreview">
                            <div>
                                <h3>Product Code</h3>
                            </div>
                            <div>
                                <div><input placeholder={this.state.productCode}></input></div>
                            </div>
                            <div>
                                <h3>Total Order</h3>
                            </div>
                            <div>
                                <div><input placeholder={this.state.totalOrder}></input></div>
                            </div>
                            <div>
                                <h3>Product Price</h3>
                            </div>
                            <div>
                                <div><input placeholder={this.state.productPrice}></input></div>
                            </div>
                            <div>
                                <h3>Total Price</h3>
                            </div>
                            <div>
                                <div><input placeholder={this.state.totalPrice}></input></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="ui grid">
                    <div class="eight wide column">
                        <div className="fileDiv">
                            <div class="ui placeholder segment">
                                <div class="ui icon header">
                                    <i class="search icon"></i>
                                    Show us product or design that you wish to get
                                </div>
                                <input type="file" onChange={this.handleChangeFile} />
                            </div>
                        </div>
                    </div>
                    <div class="eight wide column">
                        <div className="fileDiv">
                            <div class="ui placeholder segment">
                                <img class="fileImg" alt="#" src={this.state.file} />
                            </div>
                        </div>
                        <div>
                            <input type="button" value="Submit" onClick={this.createRequest} ></input>
                        </div>
                        <div>
                            <input type="button" value="testtest" onClick={this.props.changeState} ></input>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default RegProduct;

// <div>
//     <TransactionTwo dealInfo={this.state.dealInfo}/>
// </div>




// <div className="orderRequest">
//                             <div>
//                                 <h3>What product are you looking for ?</h3>
//                             </div>
//                             <div>
//                                 <input type="text" placeholder="Product Code" value={this.state.productCode} onChange={this.handleChange} name="productCode"/>
//                             </div>
//                             <div>
//                                 <h3>How many do you need ?</h3>  
//                             </div>
//                             <div>
//                                 <input type="text" placeholder="Total Order" value={this.state.totalOrder} onChange={this.handleChange} name="totalOrder"/>
//                             </div>
//                             <div>
//                                 <h3>Estimate Price per Each</h3>
//                             </div>
//                             <div>
//                                <input type="text" placeholder="Product Price" value={this.state.productPrice} onChange={this.handleChange} name="productPrice"/>
//                             </div>
//                             <div>
//                                 <h3>Estimate Total Price</h3>
//                             </div>    
//                             <div>
//                                 <input type="text" placeholder="Total Price" value={this.state.totalPrice} onChange={this.handleChange} name="totalPrice"/>
//                             </div>
//                          </div>