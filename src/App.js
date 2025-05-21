import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import './App.css';
import './LotsGoingOn.css';
import './IphoneScreen.css';

function HeroSection() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/Lum-universe-img.png"})`,
      }}
    >
      <div className="hero-topbar">
        <Link to="/solutions" className="hero-topbar-btn">Solutions</Link>
        <Link to="/faqs" className="hero-topbar-btn">FAQs</Link>
        <Link to="/about" className="hero-topbar-btn">About</Link>
      </div>
      <div className="hero-content">
        <img
          src={process.env.PUBLIC_URL + "/Lumi-main image.png"}
          alt="Lumi Full Body"
          className="lumi-fullbody-img"
        />
        <div className="lumi-hero-text">
          <h1 className="lumi-heading">LUMI </h1>
          <div className="lumi-subtitle">
            the first AI person-centred care agent on chain
          </div>
          <div className="lumi-hero-buttons">
            <a href="#" className="lumi-hero-btn">Lite Paper</a>
            <a href="#" className="lumi-hero-btn">Register</a>
            <a href="#" className="lumi-hero-btn">Buy $LUMI</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LumiTokenSection() {
  return (
    <section className="lumi-token-section" style={{ background: '#18153a', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0 2rem 0' }}>
      <h2 className="lumi-token-heading" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#fff', marginBottom: '2.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>What is the $LUMI token?</h2>
      <div className="max-w-3xl w-full px-4" style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-remelife" style={{ color: '#8be37a', fontStyle: 'italic', fontWeight: 600, fontSize: '1.1em' }}>ReMeLife</span>
          <span> is a tokenised Care2Earn care platform that rewards its users for their digital care actions using our proprietary apps.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-remindme" style={{ color: '#b16fc9', fontWeight: 600, fontSize: '1.1em' }}>&#x1F9D1;&#x200D;&#x1F4BB;RemindMe</span><span style={{ color: '#b16fc9', fontWeight: 600, fontSize: '1.1em' }}>care</span>
          <span> is the app at the heart of the ReMeLife ecosystem, that enhances person-centred care for those with cognitive difficulties.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-lumiai" style={{ background: 'linear-gradient(90deg, #ff7ee7 0%, #b16fc9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.04em', fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>LUMI AI</span>
          <span> is the AI avatar in ReMeLife's health care ecosystem that manages the apps and data, and supports and guides users. LUMI is a utility token.</span>
        </div>
        <div style={{ marginBottom: '2.2rem' }}>
          We're building an agentic LLM based AI suite, that's layered into the existing ReMeLife platform and apps, and using our proprietary Electronic Life Records (ELR) dataset, so as to optimise the process of personal profile creation for those being cared for with cognitive conditions, enhance supportive care interactivity, fully bespoke entertainment, and tailor community engagement, whilst managing security and monetising personal data for the ReMeLife community.
        </div>
        <div>
          Decentralisation is the key driver for social change, AI and blockchain are the engines of progress, and tokenization is the fuel that empowers us. Whether 80 and learning to use a tablet, or 18 and harvesting the native token through community building and app usage, Lumi is there to help.
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <div className="founder-section w-full flex flex-col items-center justify-center bg-[#18153a] py-16 px-4">
      <h2 className="founder-heading-main text-white text-center mb-12" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>
        A few words from the Founder...
      </h2>
      <div className="founder-content flex flex-col md:flex-row items-center max-w-4xl w-full gap-8">
        <video
          className="founder-video w-full max-w-md rounded-lg shadow-lg"
          controls
        >
          <source src={process.env.PUBLIC_URL + "/Lumi-founder-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="founder-text flex-1 text-white">
          <p className="mt-4 text-lg">
            Do you have a family member with dementia, living alone, with autism or learning difficulties? 62% of the world does, so you probably do. I did. And that's how I came from the music business into the world of care. It's been a long journey, from building my first app 11 years ago, to crypto, memes and to now, the launch of Lumi.
          </p>
        </div>
      </div>
    </div>
  );
}

function DataSection() {
  return (
    <div className="data-section w-full flex flex-col justify-center items-center py-16">
      <h2 className="data-heading mb-8 text-white text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>DATA</h2>
      <div className="data-content flex flex-col md:flex-row items-center rounded-[48px] border border-[#b16fc9] p-10 md:p-16 gap-10 md:gap-20" style={{ background: 'linear-gradient(135deg, #23234a 60%, #3a5e7d 120%)', boxShadow: '0 4px 32px #0006', maxWidth: '1200px', width: '100%' }}>
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-6 min-w-[260px]">
          <img src={process.env.PUBLIC_URL + "/lumiai-project-analysis.jpg"} alt="LUMI AI Project Analysis" className="w-48 h-48 object-cover rounded-lg mb-2" />
          <a href="#" className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-gray-200 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" /> GitHub</a>
        </div>
        {/* Middle Links */}
        <div className="flex-1 flex flex-col gap-4 text-white text-lg min-w-[220px]">
          <div><span className="text-[#b16fc9] font-bold">LUMI's</span> <a href="#" className="text-sky-400 hover:underline">LITE PAPER</a></div>
          <div><span className="text-[#b16fc9] font-bold">LUMI's</span> <a href="#" className="text-sky-400 hover:underline">AI REPORT</a></div>
          <div><span className="text-[#b16fc9] font-bold">ReMeLife</span> <a href="#" className="text-sky-400 hover:underline">WHITE PAPER</a></div>
          <div className="mt-6"><span className="text-white">Visit</span> <a href="#" className="text-sky-400 hover:underline">GITHUB</a></div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col gap-8 min-w-[220px]">
          <div className="flex items-center gap-4">
            <img src={process.env.PUBLIC_URL + "/remelife-icon.png"} alt="ReMeLife" className="w-20 h-20 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white">Visit</span>
              <a href="#" className="text-sky-400 hover:underline">REMELIFE</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={process.env.PUBLIC_URL + "/remindmecare-icon.png"} alt="RemindMeCare" className="w-20 h-20 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white">Visit</span>
              <a href="#" className="text-sky-400 hover:underline">REMINDMECARE</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img src={process.env.PUBLIC_URL + "/googleplay-icon.png"} alt="Google Play" className="w-32 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-white">View</span>
              <a href="#" className="text-sky-400 hover:underline">APPS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LotsGoingOnSection() {
  return (
    <section className="lots-going-on-section w-full flex flex-col items-center justify-center py-16" style={{ background: 'none' }}>
      <h2 className="text-white text-center mb-10" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>THER'S LOTS GOING ON</h2>
      <div className="lots-going-on-content rounded-[48px] border border-[#b16fc9] p-10 md:p-16" style={{ background: 'linear-gradient(135deg, #23234a 60%, #3a5e7d 120%)', boxShadow: '0 4px 32px #0006', maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        {/* Top Left: LUMI REWARDS */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="Lumi Rewards" className="w-40 h-40 rounded-full shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>LUMI REWARDS</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '370px', textAlign: 'left' }}>We'll be launching meme games, rewards for hodling, lots of content and ways for those who want to get involved to become part of the community, on a rewarded basis</p>
          </div>
        </div>
        {/* Top Right: LUMI'S NFT COLLECTION */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/Lumi-nft-collection.png'} alt="Lumi NFT Collection" className="w-40 h-28 rounded shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>LUMI'S NFT COLLECTION</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '420px', textAlign: 'left' }}>Lumi's friends from Babazadeh, will bring multiple utility, be tradeable, provide identity verification and establish online trust. The first collection will be minted free for LUMI hodlers.</p>
          </div>
        </div>
        {/* Bottom Left: REMELIFE */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="ReMeLife" className="w-40 h-40 rounded-full shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>REMELIFE</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '370px', textAlign: 'left' }}>Sign up, get your wallet and start collecting REME tokens. Build your community, earn referral REMEs and support those engaged in care by bringing crypto to those that need it most.</p>
          </div>
        </div>
        {/* Bottom Right: LUMI VIP CLUB */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/lumi-vip-club.png'} alt="Lumi VIP Club" className="w-40 h-40 rounded-full shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>LUMI VIP CLUB</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '420px', textAlign: 'left' }}>LUMI token holders get VIP Club Membership and privileged access to many benefits, from airdrops to pre-launch discounts, merch to special events.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="footer-section w-full" style={{ background: '#18153a', padding: '2rem 0 1.5rem 0', borderTop: '1.5px solid #23234a', marginTop: '3rem' }}>
      <div className="footer-content flex flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-8">
        {/* Left: Logo and Disclaimer */}
        <div className="flex flex-row items-center gap-6 min-w-[320px]">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="Lumi Logo" className="w-16 h-16 rounded-full" />
          <div className="flex flex-col">
            <span style={{ color: '#fff', fontSize: '1rem' }}>Copyrights 2024 ReMeLife. All rights reserved</span>
            <span style={{ color: '#bcbcbc', fontSize: '0.85rem', maxWidth: '420px', lineHeight: 1.4 }}>
              DISCLAIMER Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            </span>
          </div>
        </div>
        {/* Center: Resources */}
        <div className="flex flex-col items-start min-w-[180px]">
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>RESOURCES</span>
          <a href="#" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Privacy & Cookie Policy</a>
          <a href="#" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Disclaimer</a>
          <a href="#" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Careers</a>
          <a href="#" style={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}>Contact Us</a>
        </div>
        {/* Right: Socials and Up Arrow */}
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row gap-3">
            <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" style={{ width: '32px', height: '32px', background: '#1da1f2', borderRadius: '50%', padding: '4px' }} /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" style={{ width: '32px', height: '32px', background: '#1da1f2', borderRadius: '50%', padding: '4px' }} /></a>
          </div>
          <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 30V10M20 10L10 20M20 10L30 20" stroke="#b16fc9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 8px #b16fc9)" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="solutions-section bg-[#18153a] min-h-screen text-white py-16 px-4 flex flex-col items-center">
        <h2 className="solutions-main-heading mb-12 text-[#b16fc9] text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem' }}>
          Harnessing the value of digital care for those who need it most
        </h2>
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
              WHAT'S REMELIFE?
            </h3>
            <p className="mb-4">
              ReMeLife is the world's first web3 Care-to-Earn community ecosystem, that rewards its care givers for their daily Care Actions, and that democratises data ownership.
            </p>
            <p className="mb-4">
              Community-funded, ReMeLife is a social impact, decentralised health and care platform, that's been created 'by the people, for the people'.
            </p>
            <p className="mb-4">
              In these difficult and uncertain times, ReMeLife's bringing the digital value in care back to its community.
            </p>
            <a href="#" className="text-sky-400 hover:underline">Visit ReMeLife</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="solutions-feature-label mb-2 text-center" style={{ color: '#fff', fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em' }}>APP ECOSYSTEM</span>
            <img
              src={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
              alt="App Ecosystem"
              className="solutions-feature-img rounded-lg shadow-lg app-ecosystem-img-hover"
              style={{ maxWidth: '100%', width: '420px', background: '#222', cursor: 'pointer' }}
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setModalOpen(false)}>&times;</button>
              <img
                src={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
                alt="App Ecosystem Full"
                className="modal-img"
              />
            </div>
          </div>
        )}
        {/* Stats Headings */}
        <div className="solutions-stats-row w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-8 md:gap-0">
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons caring for someone</div>
            <div className="solutions-stat-value">62%</div>
          </div>
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons over 60 years of age</div>
            <div className="solutions-stat-value">20%</div>
          </div>
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons in poverty</div>
            <div className="solutions-stat-value">44%</div>
          </div>
        </div>
        {/* Gradient Boxes */}
        <div className="solutions-boxes-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">CARE2EARN</span></div>
            <div className="solutions-box-desc">Using RemindMecare, posting in the Forum, sharing news with your family care circle and viewing products in the Market, all earn reward tokens for your daily care actions.<br /><br />Within time you'll build up an income earned passively from your daily digital care actions.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">DATA2EARN</span></div>
            <div className="solutions-box-desc">Personal data is captured through use of ReMeLife apps and other services, and is used to define the profile of the person cared for, their family and their networks.<br /><br />This data can be monetised by the Member, whether for their own benefit or to donate to family, friends or charities.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">REFERRAL PLAN</span></div>
            <div className="solutions-box-desc">We all build personal social networks, but most earn little from them. Our data is harvested and in return, we get 'free' software, told what to buy, read and watch. And increasingly, what to believe.<br /><br />ReMeLife enables you to monetise your personal network.</div>
          </div>
        </div>
        <div className="solutions-boxes-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="solutions-box">
            <div className="solutions-box-title">Savings & Income<br /><span className="solutions-box-sub">ONLINE RETAIL</span></div>
            <div className="solutions-box-desc">REMEs and LUMIs are used to gain discounts on products purchased in ReMe Market.<br /><br />Members can introduce vendors to ReMe Market and earn commissions on sales made by the vendor.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">TOKENOMICS</span></div>
            <div className="solutions-box-desc">ReMeLife is a three token ecosystem. Care actions using ReMeLife's apps earn Care Action Points (CAPs). These are converted to REMEs which can be used to make purchases in the ecosystem or traded as ERC20 tokens. LUMI, the AI token, is convertible to REMEs.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Revenue Distribution<br /><span className="solutions-box-sub">NFTS, CHARITY & DAO</span></div>
            <div className="solutions-box-desc">ReMeLife enables everyone to gain from crypto's potential.<br /><br />Charities can monetise memberships, apps can reward for their usage.<br /><br />The ReMeLife DAO treasury will share its revenues with the community.</div>
          </div>
        </div>
        
        
       
        {/* Callout Box */}
        <div className="solutions-callout-box w-full max-w-3xl mx-auto mt-8 mb-8 p-6 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #23234a 60%, #5ee7df 120%)', border: '1.5px solid #b16fc9', boxShadow: '0 4px 32px #0006' }}>
          Register as a ReMeLife member <a href="#" className="text-sky-200 underline hover:text-sky-400">here</a>, and get your ReMeLife wallet.<br />
          Then collect free REMEs as you build your community, using the ReMeLife Community Builder Referral Program.
        </div>

        
        {/* What's RemindMecare Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16 mt-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
              WHAT'S REMINDMECARE?
            </h3>
            <p className="mb-4">
              At the heart of the ReMeLife ecosystem is the RemindMecare app (aka Reme). Used by those cared for at home and by formal care providers, such as care home, ReMe provides a suite of person-centred care functions that improves care, communication and connectivity.
            </p>
            <a href="#" className="text-sky-400 hover:underline block mb-1">Visit RemindMecare b2c</a>
            <a href="#" className="text-sky-400 hover:underline block">Visit RemindMecare b2b</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <video
              className="solutions-phone-video"
              controls
              poster={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
              style={{ width: '350px', borderRadius: '2rem', boxShadow: '0 4px 32px #0008', background: '#222' }}
            >
              <source src={process.env.PUBLIC_URL + "/data-images/remecare-video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* AI Section Heading */}
        <h2 className="solutions-main-heading mb-12 text-[#b16fc9] text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem' }}>
          Integrating AI for the benefit of the care sector
        </h2>
        {/* AI Implementation Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
              AI IMPLEMENTATION
            </h3>
            <p className="mb-4">
              ELR® (recent activities, preferences, habits, life story, family, music, images, work history, etc.) is our proprietary data set that captures, collates and deploys personal data captured from digital activities, and that is used to enhance multiple care processes.
            </p>
            <p className="mb-4">
              The AI system (AI4U) that is being layered into ReMeLife and its modules and for which Blui is the user-friendly AI primary agent that guides the user, will use existing AI technologies predominantly based on the LLM agentic models that are best suited to each of the planned and multiple purposes.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "/data-images/ai-architecture.png"}
              alt="AI Architecture"
              className="solutions-feature-img rounded-lg shadow-lg"
              style={{ maxWidth: '100%', width: '420px', background: '#222' }}
            />
          </div>
        </div>
        {/* AI Enhancements Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <div className="mb-4" style={{ fontWeight: 500 }}>
              The AI enhancements currently being developed are as follows.
            </div>
            <ul className="solutions-list mb-4">
              <li>AI System for ELR® personal health data management</li>
              <li>Activity Creation & Cognitive Stimulation</li>
              <li>ReMeComm Community Engagement</li>
              <li>Personal AI Agents/Virtual Companions (AI4U)</li>
              <li>Automated Reporting</li>
              <li>Enhanced Data Security</li>
              <li>Data Management & Monetisation</li>
            </ul>
            <a href="#" className="text-sky-400 hover:underline block mb-1">AI Viability Analysis</a>
            <a href="#" className="text-sky-400 hover:underline block">AI Implementation strategy</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "/data-images/enhanced-care.png"}
              alt="Enhanced Care"
              className="solutions-feature-img rounded-lg shadow-lg"
              style={{ maxWidth: '100%', width: '420px', background: '#222' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const newsData = [
  {
    id: 'kings-college',
    img: 'news-images/kings-college.jpg',
    title: 'Kings College grant application in process',
    detail: 'Details about the Kings College grant application in process.'
  },
  {
    id: 'pingit',
    img: 'news-images/pingit.jpg',
    title: 'Pigit Partnership established',
    detail: 'Details about the Pigit Partnership.'
  },
  {
    id: 'human-error',
    img: 'news-images/human-error.png',
    title: 'ReMeLife joins the Human Error project',
    detail: `<b>The Human Error Project</b><br/><br/>We live in historical times, when every detail of our lives is a data point used by AI systems and algorithms to profile us, judge us and make decisions about us. This data that defines us is commercialised in a multiplicity of ways. Health and education practitioners 'track risk factors' or find 'personalized solutions'. Employers, banks and insurers judge clients or potential candidates. Governments, the police and immigration officials use this tech to decide issues about individual lives, from one's right to asylum to one's likelihood to commit a crime.<br/><br/>Courtesy of ReMeLife's focus on such data being used for positive social benefit and on establishing crypto based algorithms that share the value in digital care for the benefit of the community, we've been invited to collaborate in this important project.<br/><br/>More <a href='#'>here</a>.`
  },
  {
    id: 'equideum',
    img: 'news-images/equideum.jpg',
    title: 'Equideum- Consensys Health working together',
    detail: `ReMeLife is renewing and extending its partnership agreement with Equideum (formerly Consensys Health, a Joe Lubin and Mesh company), that will enable ReMeLife to ensure the optimal configuration and global reach of the ReMeLife token based incentivised health care ecosystem. The Equideum infrastructure of healthcare will provide a multiplicity of the vital computing requirements of the ReMeLife integrated ecosystem, from cybersecurity, compliance, privacy, bioethics and identity solutions and will transform the way ReMeLife and its apps collect, protect, manage, monetise and share the value of the platforms members person centred care data. The jobseekers one: As ReMeLife grows, we need to take on new blood. And our mission is as always; to aim to help those that need a helping hand. Whether past retirement but still wanting to contribute, those with cognitive conditions or starting out after leaving school, looking to discover a new direction.<br/><br/>For more information see <a href='#'>here</a>.`
  },
  {
    id: 'coin-bureau',
    img: 'news-images/coin-bureau.jpg',
    title: 'ReMeLife  at the Coin Bureau Crypto Conference, London',
    detail: `Although it was their first ever crypto conference, it felt like they'd been doing it for years. An excellent event (<a href='#'>here</a>).<br/><br/>ReMeLife was invited backstage to share in their post event shenanigans. Who says the crypto sector is depressed?<br/><br/>PS. If you don't know Coin Bureau then you don't know crypto. Find them <a href='#'>here</a>.`
  },
  {
    id: 'florida-blockchain',
    img: 'news-images/florida-blockchain-summit.jpg',
    title: 'ReMeLife at the Florida Blockchain Summit',
    detail: 'Details about the Florida Blockchain Summit.'
  },
  {
    id: 'jobseekers',
    img: 'news-images/jobseekers.jpg',
    title: 'Opportunities For Young Job Seekers',
    detail: `As ReMeLife grows, we need to take on new blood. And our mission is as always; to aim to help those that need a helping hand. Whether past retirement but still wanting to contribute, those with cognitive conditions or starting out after leaving school, looking to discover a new direction.<br/><br/>Our working closely with Ixion, a leading training provider of skills and part of the Shaw Trust, one of the largest charities in the UK, means that we'll be helping develop the careers of a broad range of young unemployed people, assisting develop their skills in social media and care. They gain from working in a dynamic and progressive work environment and we'll benefit from their participation in our growth in the coming years.<br/><br/>Our follow on project involved working with the Department of Education and with 15 school leavers with cognitive difficulties, to establish if ReMeLife can provide the stimulation that it aims to achieve through its rewards based tokenomics, to have them undertake tasks such as data entry, personal network monetisation and ecommerce profit sharing, whilst also learning how to create a personal network that can generate a passive income. A roaring success, this pilot validated the proposition that token based rewards can not only incentivise such as medication adherence, but also positively impact on social interactivity and an improved sense of self-worth and well-being.<br/><br/>More information is available upon request to: <a href='mailto:simon@remelife.com'>simon@remelife.com</a>.`
  },
  {
    id: 'geneva',
    img: 'news-images/blockchain-summut.jpg',
    title: 'ReMeLife presents at the Geneva Blockchain Summit',
    detail: 'Details about the Geneva Blockchain Summit.'
  },
];

function NewsCardsSection() {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {newsData.map((card, idx) => (
          <div key={card.id} className="rounded-xl overflow-hidden flex flex-col bg-[#a23bb9]" style={{ minHeight: '260px', boxShadow: '0 2px 16px #0003' }}>
            <img src={process.env.PUBLIC_URL + '/' + card.img} alt={card.title} style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="text-white font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.1rem' }}>{card.title}</div>
              <Link to={`/news/${card.id}`} className="text-sky-300 font-semibold text-sm hover:underline mt-auto">READ MORE »</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === id);
  if (!news) return <div className="text-white p-8">News not found.</div>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <button onClick={() => navigate(-1)} className="mb-6 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition self-end">Back</button>
        <img src={process.env.PUBLIC_URL + '/' + news.img} alt={news.title} className="mb-8 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }} />
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>{news.title}</h1>
        <div className="w-full text-lg mb-8" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          <div dangerouslySetInnerHTML={{ __html: news.detail }} />
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const partners = [
    'singularities.png',
    'ucl.png',
    'athena.png',
    'antier.png',
    'equideum.png',
    'limechain.png',
    'mongoDB.png',
    'worcester.png',
  ];
  // Show 4 at a time
  const visible = 4;
  const maxIndex = partners.length - visible;
  const handlePrev = () => setCarouselIndex(i => Math.max(0, i - 1));
  const handleNext = () => setCarouselIndex(i => Math.min(maxIndex, i + 1));

  return (
    <div className="about-section min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontSize: '2.5rem', letterSpacing: '0.04em' }}>THE TEAM & COMMUNITY</h2>
      <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
        <p className="mb-4 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          As the founder of ReMeLife, I'm privileged and fortunate to work with a core team of creative long-term diehards, a community of talented individuals that have been focused on bringing Lumi and ReMeLife to its launchpad.
        </p>
        <p className="mb-6 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          Working from locations globally, predominantly rewarded in vested tokens, and with a social impact soul, the team and an associated Advisory Board, are committed to complete the build of this self-supporting AI and rewards-based community.<br /><br />
          Unfunded by traditional formal investment and ultimately being DAO managed, Lumi and ReMeLife are being built 'for the people, by the people'. And, after many years, Lumi is now on the launchpad and ReMeLife is close behind".
        </p>
        <img src={process.env.PUBLIC_URL + '/about-page-images/simon-hooper-about-page.jpg'} alt="Simon Hooper About" className="my-8 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }} />
        <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          "I conceived ReMeLife as a response to my own family experiences, of my time spent developing apps in the care sector, and of the obvious potential of AI, blockchain and crypto to be able to support the financial needs of those that are simply not benefitting from the fiat value inherent in their own digital daily care. Lumi is the all critical element that is integrating the power of AI into the ecosystem, and that will manage scale and data, and drive consumer engagement through his meme character.
        </p>
        <p className="mt-8 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          As a decentralised, tech-based community ecosystem, Lumi assists combat today's unfair harvesting of our daily care actions. As the rich get richer and the rest of us lose our rights and opportunities, Lumi is very much needed, as we enter a new era. We hope you will join us in this mission".
        </p>
        <img src={process.env.PUBLIC_URL + '/about-page-images/pepe-banner.jpg'} alt="Pepe Banner" className="my-10 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '800px', width: '100%' }} />
        <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          We love design, creativity, social interactivity, and bringing financial opportunity to our community. So naturally, we've been in crypto for years. And of course we <span style={{ fontStyle: 'italic' }}>LOVE</span> memes. That's why Lumi chose us, he says, as his platform to change the world!
        </p>
      </div>

      {/* PARTNERS & ASSOCIATES SECTION */}
      <div className="w-full flex flex-col items-center mt-24">
        <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>PARTNERS & ASSOCIATES</h2>
        <p className="text-lg text-center mb-10 max-w-3xl" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          Over the years of the development of ReMeLife and more recently with Lumi, we have worked with many illustrious partners, advisory board members and consultants. Here's a few of them.
        </p>
        <div className="flex flex-row items-center justify-center w-full mb-16" style={{ maxWidth: '1100px' }}>
          <button onClick={handlePrev} className="mr-2 text-2xl text-white bg-transparent border-none cursor-pointer" disabled={carouselIndex === 0} style={{ opacity: carouselIndex === 0 ? 0.3 : 1 }}>&lt;</button>
          <div className="flex flex-row gap-6 items-center justify-center w-full" style={{ minHeight: '110px' }}>
            {partners.slice(carouselIndex, carouselIndex + visible).map((img, idx) => (
              <img
                key={img}
                src={process.env.PUBLIC_URL + '/about-page-images/' + img}
                alt={img.replace('.png', '')}
                style={{ height: '90px', width: 'auto', background: '#fff', borderRadius: '8px', objectFit: 'contain', padding: '8px', boxShadow: '0 2px 12px #0004' }}
              />
            ))}
          </div>
          <button onClick={handleNext} className="ml-2 text-2xl text-white bg-transparent border-none cursor-pointer" disabled={carouselIndex === maxIndex} style={{ opacity: carouselIndex === maxIndex ? 0.3 : 1 }}>&gt;</button>
        </div>
      </div>

      {/* NEWS & UPDATES SECTION */}
      <div className="w-full flex flex-col items-center mt-12">
        <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>NEWS & UPDATES</h2>
        <div className="max-w-2xl text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          <p className="mb-4">Lumi, ReMeLife and RemindMecare have been a long time in the making. Here are some highlights  and those we've worked with in previous years.</p>
          <p>We will keep you updated here with our progress and on key industry developments.</p>
        </div>
      </div>
      <NewsCardsSection />
    </div>
  );
}

function FaqsPage() {
  const faqs = [
    {
      question: "I HAVE NEVER BOUGHT A CRYPTO TOKEN BEFORE. WHY SHOULD I DO SO NOW?",
      answer: `<p>The world is changing and crypto, CBDC's, digital currency, the metaverse, etc., are coming, so you will need to learn the ropes anyway, when it comes to digital wallets, payment transfers, digital money interfaces, etc. So, it makes sense to be ahead of the game.</p><p>And there are opportunities to be had along the way that others are profiting from, not to mention some fun and means to support those social impact projects that you support, which in our case is carers and those being cared for.</p>`
    },
    {
      question: "IS BUYING CRYPTO AND LUMI RISKY?",
      answer: `<p>Yes, absolutely. Just as betting on the horses, or the stock market, carry their own level of risk, so does buying a token, meme or otherwise on an exchange.</p><p>Indeed, meme tokens are highly volatile and should be considered risky, even true utility, actual project based tokens such as $LUMI.</p>`
    },
    {
      question: "DESCRIBE REMELIFE IN ONE PARAGRAPH",
      answer: `<p>We get asked this a lot, for ReMeLife, which is the world's first Web3 healthcare platform, has a lot to offer and can seem complicated at first inspection.</p><p>But just like a car, that has a lot going on under the bonnet, however it's simple on the outside. And when you've learnt to use it, it becomes easy and fun. It's the same with ReMeLife.</p><p>For 65% of the world is caring for someone, and they use apps to support their care needs. But they get no financial benefit from the care work they perform with these apps, from the purchases they make online or from the data they generate daily. By using ReMeLife's apps, Members gain REME tokens for their care actions, for posting in the forum, purchasing products, sharing content with their care circle and for sharing their data.</p><p>ReMeLife is the world's first rewards-based healthcare platform. Simple.</p>`
    },
  ];
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <h2 className="text-white text-center mb-2" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>FAQ's</h2>
      <div className="text-center mb-10 text-gray-200" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1rem' }}>
        Frequently asked questions. We will add to these as we get asked for answers on new questions.
      </div>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-transparent border-b border-gray-600">
            <button
              className="w-full text-left flex justify-between items-center py-6 px-4 focus:outline-none"
              style={{ color: '#b16fc9', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <span style={{ color: '#ffe44d', fontWeight: 700, fontSize: '1.5rem', marginLeft: '1rem' }}>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-8 pb-8 text-white text-left" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.08rem', lineHeight: 1.7 }}>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <LumiTokenSection />
              <div style={{ background: '#18153a', width: '100vw' }}>
                <FounderSection />
                <DataSection />
                <LotsGoingOnSection />
                <FooterSection />
              </div>
            </>
          } />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
