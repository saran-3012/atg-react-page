import React, { useState } from 'react';
import './SiginSignup.css';
import googleIcon from '../../Assets/google_icon.svg';
import facebookIcon from '../../Assets/facebook_icon.svg';
import lockIcon from '../../Assets/lock_icon.svg';
import AuthButton from '../General/AuthButton';
import PasswordInput from '../General/PasswordInput';

const SiginSignup = () => {
  const [authType, setAuthType] = useState('signin');

  return (
    <div className='signin_signup_container'>
        <div className='signin_or_signup'>
          <span className={'signin_signup_selector ' + (authType==='signin'?'active':'')} onClick={()=>setAuthType('signin')}>Sign In</span>
          <span className={'signin_signup_selector ' + (authType==='joinin'?'active':'')} onClick={()=>setAuthType('joinin')}>Join In</span>
        </div>
        <div className='signin_signup_options'>
          <div className='other_auth_options'>
            <AuthButton buttonIcon={googleIcon} buttonName={"Continue with Google"}/>
            <AuthButton buttonIcon={facebookIcon} buttonName={"Continue with Facebook"}/>
          </div>
          <div className='connect_with_separator'>
            <p></p>
            <span>Or connect with</span>
            <p></p>
          </div>
          <div className={'auth_credentials ' + (authType==='signin'?'active':'')}>
            <div className='auth_credentials_input'>
              <input type="email" name="email" placeholder='Email'/>
              <PasswordInput />
            </div>
            <div className='auth_extra_credentials'>
              <div className='auth_extra_1'>
                <div className='auth_extra_inner'>
                  <input type="checkbox" name="Remember" />
                  <span>Remember me</span>
                </div>
                <div className='auth_extra_inner'>
                  <img src={lockIcon} alt="LockIcon" />
                  <span>Forgot password?</span>
                </div>
              </div>
              <button className='signin_submit'>Continue</button>
            </div>
          </div>


          <div className={'auth_credentials ' + (authType==='joinin'?'active':'')}>
            <div className='auth_credentials_input'>
              <input type="email" name="email" placeholder='Email'/>
              <div className='auth_credentials_password'>
                <PasswordInput />
                <div className="password_strength">
                  <div>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <span>Password strength</span>
                </div>
              </div>
            </div>
            <div className='auth_extra_2'>
              <div className='signup_tc_text'>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</div>
              <button className='signup_submit'>Agree and Continue</button>
            </div>
          </div>
        </div>
    </div>
  )
};

export default SiginSignup;
