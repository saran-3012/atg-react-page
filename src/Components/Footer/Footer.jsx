import React from 'react';
import '../General/Utility.css';
import './Footer.css';
import footerFacebookIcon from '../../Assets/footer_facebook_icon.svg';
import footerTwitterIcon from '../../Assets/footer_twitter_icon.svg';
import footerInstagramIcon from '../../Assets/footer_instagram_icon.svg';
import footerPrintestIcon from '../../Assets/footer_printest_icon.svg';
import footerGoogleIcon from '../../Assets/footer_google_icon.svg';
import footerYoutubeIcon from '../../Assets/footer_youtube_icon.svg';
import footerTelegramIcon from '../../Assets/footer_telegram_icon.svg';
import footerMailIcon from '../../Assets/footer_mail_icon.svg';

const Footer = () => {
  return (
      <>
        <div className='contacts section_container'>
          <div className='contacts_box'>
            <h3>Hobbycue</h3>
            <span>About Us</span>
            <span>Our Services</span>
            <span>Work with Us</span>
            <span>FAQ</span>
            <span>Contact Us</span>
          </div>
          <div className='contacts_box'>
            <h3>How Do I</h3>
            <span>Sign Up</span>
            <span>Add a Listing</span>
            <span>Claim Listing</span>
            <span>Post a Query</span>
            <span>Add a Blog Post</span>
            <span>Other Queries</span>
          </div>
          <div className='contacts_box'>
            <h3>Quick Links</h3>
            <span>Listing</span>
            <span>Blog Posts</span>
            <span>Shop / Store</span>
            <span>Community</span>
          </div>
          <div className='contacts_box'>
            <h3>Social Media</h3>
            <div className='contacts_icons'>
              <img src={footerFacebookIcon} alt="Facebook" />
              <img src={footerTwitterIcon} alt="Twitter" />
              <img src={footerInstagramIcon} alt="Instagram" />
              <img src={footerPrintestIcon} alt="Printest" />
              <img src={footerGoogleIcon} alt="Google" />
              <img src={footerYoutubeIcon} alt="Youtube" />
              <img src={footerTelegramIcon} alt="Telegram" />
              <img src={footerMailIcon} alt="Mail" />
            </div>
            <h3>Invite Friends</h3>
            <div className='contacts_invite'>
              <input type="email" name="email" placeholder='Email'/>
              <button>Invite</button>
            </div>
          </div>
        </div>
        <footer className='footer'>© Purple Cues Private Limited</footer>
      </>
  )
}

export default Footer