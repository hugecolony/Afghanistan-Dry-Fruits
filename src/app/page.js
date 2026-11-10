
import React from 'react';
import Head from 'next/head';

import Image from 'next/image';
// import Navbar from '';
import Topbar from '../../components/Topbar';
import HomeSlider from '../../components/HomeSlider';
import Section from '../../components/Section';
import FAQs from '../../components/FAQS';
import Stats from '../../components/Stats';
import Almonds from '../../components/Almonds';
export default function Home() {
  return (
    <>
    <meta name="google-site-verification" content="axeqkD1ixRPw7exMgcLnM62EoUsLbS4u5Mv6yjbc7Zg" />
     <HomeSlider></HomeSlider>
     <Section></Section>

   
     <FAQs></FAQs>
     <Stats></Stats>
    </>
  );
}