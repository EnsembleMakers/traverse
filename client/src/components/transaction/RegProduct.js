import React, { Fragment, Component } from 'react';
import '../../styles/RegProduct.css';

class RegProduct extends Component {

    constructor(props){
        super(props)
        this.state = {
            productCode: '',
            totalOrder:'',
            productPrice:'',
            totalPrice:'',
            file: null
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

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
        return (
            <Fragment>
                <div className="top">
                  <img src="/img/Traverse_logo.PNG" alt=""/>
                </div>

                <div class="ui grid">
                    <div class="eight wide column">
                         <div>
                            <i class="huge edit icon"></i><h2>Your Request</h2><br/>

                         </div>
                         <div className="orderRequest">
                            <div>
                                <h3>What product are you looking for ?</h3>
                            </div>
                            <div>
                                <input type="text" placeholder="Product Code" value={this.state.productCode} onChange={this.handleChange} name="productCode"/>
                            </div>
                            <div>
                                <h3>How many do you need ?</h3>  
                            </div>
                            <div>
                                <input type="text" placeholder="Total Order" value={this.state.totalOrder} onChange={this.handleChange} name="totalOrder"/>
                            </div>
                            <div>
                                <h3>Estimate Price per Each</h3>
                            </div>
                            <div>
                               <input type="text" placeholder="Product Price" value={this.state.productPrice} onChange={this.handleChange} name="productPrice"/>
                            </div>
                            <div>
                                <h3>Estimate Total Price</h3>
                            </div>    
                            <div>
                                <input type="text" placeholder="Total Price" value={this.state.totalPrice} onChange={this.handleChange} name="totalPrice"/>
                            </div>
                         </div>
                    </div>
                    
                    <div class="eight wide column">
                        <div>
                           <i class="huge calculator icon"></i><h2>Order Preview</h2><br/> 
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
                                <input type="file" onChange={this.handleChangeFile}/>
                            </div> 
                        </div>
                        </div>
                    <div class="eight wide column">
                        <div className="fileDiv">
                            <div class="ui placeholder segment">
                                <img class="fileImg" src={this.state.file}/>
                        </div>
                        </div> 
                    </div>
                </div>
    
            </Fragment>
        );
    }
}

export default RegProduct;