import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-bottom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState( {email : '', password: ''} )
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]:value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = { this.handleSubmit }>
                    <FormInput name ='email' type ='email' label = 'email' handleChange = {this.handleChange} value = {this.state.email} required />
                    <FormInput name ='password' type ='password' label ='password' handleChange = {this.handleChange} value = {this.state.email} required />

                    <div className='buttons'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn