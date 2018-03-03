import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/authentication';


export class LoginPage extends React.Component{

    onClick = () => {
        this.props.startLogin();
    }
    render(){
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify-Boilerplate</h1>
                    <p>Put your witty comments here!</p>
                   <button className="button"
                    onClick={this.onClick}>Login with Google</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);