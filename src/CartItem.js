import React from 'react';

class CartItem extends React.Component{
    /*constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this)
        this.testing();
    }*/
    /*testing () {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            this.setState({ qty: this.state.qty + 10});
            this.setState({ qty: this.state.qty + 10});
            this.setState({ qty: this.state.qty + 10});
            console.log('state', this.state);
        });
    }*/

    increaseQuantity = () => {
        //console.log('this', this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //setState form 2 - if prevState req use this
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        });
    }

    render(){
        console.log('this.props', this.props);
        const {price, title, qty} = this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 30} }>{title}</div>
                    <div style={ { color:'#777' } }>Rs {price}</div>
                    <div style={ { color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="increase" 
                            className="actions-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1644749279~hmac=df3724a1fa36004f9d242aab2396c6b0" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="actions-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="actions-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1644749332~hmac=356301bf1a0e6f4433f9311985d96d0b" 
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height:115,
        width:115,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;