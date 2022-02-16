import React from 'react';

const Navbar = (props) =>{     
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/128/3002/premium/3002254.png?token=exp=1644990185~hmac=dd4f766a5e8391ff8d3be386e8cc6730"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        float: 'right',
        marginRight: 20,
        marginTop: 10
    },
    nav: {
        height: 50, 
        background: '#4267b2',
        diplay: 'flex',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '1px 3px',
        position: 'absolute',
        marginTop: 8,
        marginRight: 4,
        right: 0,
        top: -7
    }
};

export default Navbar;