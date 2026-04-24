"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const industries = [
    {
        title: "E-Commerce",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694928c47b84bde719fee00f_ecommerce.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694929087a7c485aa351d3c0_e-commerce-bg.png",
        items: ["AI-powered recommendation engines", "Omnichannel retail integration", "Custom payment gateway integration", "Product catalog management", "Customer loyalty program integration"],
    },
    {
        title: "FinTech",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694934d544b8b111a075fcfa_fin-tech-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694934fc1f5beb93c3bbc666_fintech.png",
        items: ["Blockchain for secure transactions", "Regulatory compliance solutions", "Real-time fraud detection systems", "Digital wallets and payment systems", "Peer-to-peer lending platforms"],
    },
    {
        title: "Healthcare",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694937d40f83bb73baf0a031_health-care-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694937f5af34b90e4d37f74d_healthcare.png",
        items: ["EHR system integration", "Telemedicine platform development", "Patient data analytics solutions", "Appointment scheduling systems", "Medical billing and coding software"],
    },
    {
        title: "EdTech",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/6949391c02a90861527dac32_edtech-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/6949390b0d45772d0676dc17_edtech.png",
        items: ["Custom LMS development", "Interactive e-learning tools", "Virtual classroom integration", "Student performance tracking systems", "Gamified learning experiences"],
    },
    {
        title: "Food & Groceries",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/69493971cbf872e9877ed663_food-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/694939839a76bc11a20b34e7_food-groceries.png",
        items: ["Food supply chain optimization", "Grocery delivery app development", "Inventory management systems for groceries", "Real-time order tracking systems", "Dynamic pricing models for perishable goods"],
    },
    {
        title: "Real Estate",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/69493a08f62dc383e1861249_real-estate-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/69493a171d4d9be9fe1e059f_real-estate.png",
        items: ["Property listing platforms", "Real estate CRM integration", "Virtual property tours", "Real estate transaction management systems", "Real-time property valuation tools"],
    },
    {
        title: "Blockchain",
        icon: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/69493a8f7e823c6c938e3783_block-chain-icon.png",
        bg: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/69493aa5788b5d7fb9065d4e_blockchain.png",
        items: ["Smart contract development", "Private blockchain solutions", "Decentralized finance (DeFi) platforms", "Tokenization platforms", "Blockchain-based identity verification systems"],
    },
];

const onDemand = ["Service booking apps", "Subscription-based service platforms", "Real-time delivery tracking", "On-demand ride-sharing solutions"];

export default function IndustriesSection() {
    return (
        <section className="section section-box p">
            <div className="container-3 w-container">
                <div className="section-head section-head-two">
                    <div className="section-head-content-subtitle">
                        <div className="section-head-subtitle-dot" />
                        <p className="section-head-subtitle-content subtitle-secondary-content">Industries we serve</p>
                    </div>
                    <div id="w-node-c97fd2b9-5442-167c-a940-0206d67d1c11-28eb60ed" className="title title-two">
                        <h2 data-amt="text-reveal" className="title-h2-2 title-h2-two">Empowering Industries with Advanced Digital Solutions</h2>
                        <p className="section-title-description">Delivering intelligent technology solutions to optimize efficiency, foster innovation, and propel sustainable growth across every sector we serve.</p>
                    </div>
                </div>
                <div id="industries-wrapper" className="industries-slider-wrap">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            481: { slidesPerView: 1.5 },
                            900: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        onSlideChange={(swiper) => {
                            swiper.slides.forEach((slide) => slide.classList.remove("current"));
                            const originals = swiper.slides.filter((sl) => !sl.classList.contains("swiper-slide-duplicate"));
                            const active = originals[swiper.realIndex];
                            if (active) active.classList.add("current");
                        }}
                        onInit={(swiper) => {
                            swiper.slides.forEach((slide) => slide.classList.remove("current"));
                            const originals = swiper.slides.filter((sl) => !sl.classList.contains("swiper-slide-duplicate"));
                            const active = originals[swiper.realIndex];
                            if (active) active.classList.add("current");
                        }}
                    >
                        {industries.map((ind, i) => (
                            <SwiperSlide key={i}>
                                <li className="industries-slider-list-item">
                                    <figure className="industries-slider-card">
                                        <div className="industry-card-bg" />
                                        <div className="industries-card-gradient" />
                                        <Image src={ind.bg} loading="lazy" alt="Image" width={544} height={450} className="industries-card-bg-img" />
                                        <div className="industries-slider-content-wrap">
                                            <div className="industries-slider-content">
                                                <div className="industries-list-item-icon-wrap">
                                                    <Image alt="icon" src={ind.icon} width={48} height={48} className="industry-list-item-icon" />
                                                </div>
                                                <div className="industries-card-content">
                                                    <h3 className="industries-title">{ind.title}</h3>
                                                    <ul role="list" className="list-4 industries-list">
                                                        {ind.items.map((item, j) => (
                                                            <li key={j} className="list-item-7 industries-list-item">
                                                                <div className="on-demand-list-dot" />
                                                                <p className="paragraph-17 industries-list-item-content">{item}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <Link href="/coming-soon" className="title-button transition-none active-button w-inline-block">
                                                    <div className="title-button-text">View More</div>
                                                    <div className="arrows-container cta">
                                                        <Image alt="icon" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68dd0ede1e60a7db30b19932_arrow-top-right.svg" width={16} height={16} className="arrow-button _16" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="on-demand-content-wrap">
                    <div className="on-demand-content">
                        <h3 className="on-demand-title">On-Demand Solutions</h3>
                        <div className="on-demand-list">
                            {onDemand.map((item, i) => (
                                <div key={i} className="on-demand-list-item">
                                    <div className="on-demand-list-dot" />
                                    <div className="on-demand-list-title">{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="button-wrap hero-banner-button-wrap on-demand-cta">
                        <Link href="/contact-us" className="button-primary on-demand-cta w-inline-block">
                            <div className="text-block-16">Get in touch</div>
                            <Image alt="arrow-top-right" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68dd105094d90e0a289e4185_arrow-top-right-white.svg" width={16} height={16} className="button-icon" />
                        </Link>
                        <Link href="/contact-us" data-gn-book-meeting="modal" data-w-id="2508fbb2-8c84-a30d-a44c-a22c87bd4b73" className="button-secondary-light hero-secondary-button w-inline-block">
                            <div className="button-secondary-light-text-2">Book a meeting</div>
                            <div className="arrows-container cta">
                                <Image alt="Icon" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/6937e4382716cdf25ad0f3d5_date-icon-light.svg" width={16} height={16} className="dark-arrow _16" />
                                <Image alt="Icon" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/6937e33ae69eb8ce6ab3de51_date-icon-dark.svg" width={16} height={16} className="arrow-button _16" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
