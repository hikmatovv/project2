import React from 'react';
import RealyContactUs from '../../components/contactUs/Index';
import SignIn from '../../components/SignIn/Index';
import image from '../../components/SignIn/img/Background Image.jpg'

export default () => (
  <div>
    <RealyContactUs/>
    <div style={{backgroundImage:`url(${image})`}}>
      <SignIn style={{backgroundImage:`url(${image})`}}/>
    </div>
  </div>
);
