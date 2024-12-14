import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {
    return ( 
        <div className="section aboutus__section">
            <div className="aboutus__container">

            <div className="aboutus__title h3">
            Our Marketing Services
            </div>
            <div className="aboutus__text h5">
            <ol className="aboutus__text__list">
        <li>
            <strong>1. Digital Strategy</strong>
            <ul className="h6">
                <li>• Customized marketing plans.</li>
                <li>• Market research and competitor analysis.</li>
                <li>• Multi-channel growth strategies.</li>
            </ul>
        </li>

        <li>
            <strong>2. Social Media Marketing</strong>
            <ul className="h6">
                <li>• Account setup and management on all platforms.</li>
                <li>• Engaging content creation (posts, stories, videos).</li>
                <li>• Community management and audience engagement.</li>
                <li>• Performance tracking and reporting.</li>
            </ul>
        </li>

        <li>
            <strong>3. Targeted Ads</strong>
            <ul className="h6">
                <li>• Social Media Ads: Precise targeting on Instagram, Facebook, TikTok, and LinkedIn.</li>
                <li>• Google Ads: Search, display, and retargeting campaigns.</li>
                <li>• Continuous ad optimization for maximum ROI.</li>
            </ul>
        </li>
        
        <li>
            <strong>4. SEO & Content</strong>
            <ul className="h6">
                <li>• On-page and off-page SEO for better search rankings.</li>
                <li>• Blog posts, videos, and infographics to attract leads.</li>
                <li>• Local SEO and analytics-driven updates.</li>
            </ul>
        </li>

        <li>
            <strong>5. Branding & Design</strong>
            <ul className="h6">
                <li>• Logo design and visual identity creation.</li>
                <li>• Marketing materials (brochures, ads, presentations).</li>
                <li>• Brand consistency across all channels.</li>
            </ul>
        </li>

        <li>
            <strong>6. Website & Email</strong>
            <ul className="h6">
                <li>• Website design and optimization for conversions.</li>
                <li>• Custom landing pages and email campaigns.</li>
                <li>• Automated email workflows (e.g., retargeting, follow-ups).</li>
            </ul>
        </li>
    </ol>

    <div className="aboutus__title">Ready to take your marketing to the next level?
        <br />
        Contact us to learn more or get started!
    </div>
            </div>
            </div>
        </div>
     );
}
 
export default AboutUs;