import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Your Page Title</title>
          <meta name="description" content="Free Music from around the world" />
          <link rel="manifest" href="manifest.json" />
          {/* Add more meta tags as needed */}
        </Helmet>
        <header className='flex-row-between vertical-center splash'>
          <h2>WIMBO</h2>
          <div className='flex-row-end vertical-center'>
            <Link className='white-text-link' to='/login'>
              Log In
            </Link>
            <Link className='white-text-link' to='/signup'>
              <button className='white-btn'>Start Free Trial</button>
            </Link>
          </div>
        </header>
        <div className='flex-col-start splash-container'>
          <div className='flex-col-start splash-items'>
            <p className='hero-text'>Discover the tracks</p>
            <p className='hero-text'>where it all began.</p>
            <Link className='white-text-link' to='/signup'>
              <button className='hero-btn'>Start Free Trial</button>
            </Link>
            <p>Every tidal wave starts out as a wimbo.</p>
          </div>
        </div>
      </>
    );
  }
}

const mSTP = (state) => ({
  isLoggedIn: Boolean(state.session.id),
});

export default connect(mSTP)(Splash);

