import React, {Fragment, useState} from 'react'
import { Link , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = e =>{
        setFormData({ ...formData, [e.target.name]:e.target.value})   
    }

    const onSubmit = e =>{
        e.preventDefault();
        login({email, password})
    }

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)}/>
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Log In" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

Login.protoTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}
export default connect(mapStateToProps, {login})(Login)
