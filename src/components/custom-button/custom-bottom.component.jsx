import React from 'react'
import './custom-bottom.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...ohterProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} { ...ohterProps }>
        { children }
    </button>
)

export default CustomButton