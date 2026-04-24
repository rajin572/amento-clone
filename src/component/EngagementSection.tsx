"use client";

import Image from "next/image";
import Link from "next/link";

const engagements = [
    {
        counter: "01",
        title: "Staff Augmentation",
        desc: "Extend your team with top-tier developers and IT specialists.",
        items: [
            "On-demand access to expert talent across stacks",
            "Seamless integration with existing workflows",
            "Flexible scaling for projects & deadlines",
            "Cost-effective resourcing without quality compromise",
        ],
    },
    {
        counter: "02",
        title: "Product Development",
        desc: "End-to-end product engineering, from concept to launch.",
        items: [
            "Strategic Roadmaps for market-ready solutions",
            "MVP Creation & Risk-Free Validation",
            "Agile Development for faster delivery",
            "Scalable, Cross-Platform Architecture",
        ],
    },
    {
        counter: "03",
        title: "Dedicated Teams",
        desc: "Fully managed teams aligned with your vision and goals.",
        items: [
            "End-to-End Project Ownership with measurable outcomes",
            "Deep integration with your culture & workflows",
            "Multi-domain expertise across industries",
            "Long-term collaboration ensuring consistent innovation",
        ],
    },
];

export default function EngagementSection() {
    return (
        <>
            <section className="section engagement-section">
                <div className="container-3 engagement-container responsive-style w-container">
                    <div className="section-head section-head-two sticky-header">
                        <div className="section-head-content-subtitle">
                            <div className="section-head-subtitle-dot" />
                            <p className="section-head-subtitle-content subtitle-secondary-content">Engagement models</p>
                        </div>
                        <div className="title title-two">
                            <h2 className="title-h2-2 title-h2-two engagement-modal-title">Strategic Engagement Models Designed to Scale Your Business with Confidence</h2>
                        </div>
                    </div>
                    <div className="engagement-content-wrap">
                        <div className="engagement-list">
                            {engagements.map((e, i) => (
                                <div key={i} className={`engagement-list-item ${i > 0 ? `engagement-list-item-${i + 1}` : ""}`}>
                                    <div className="counter">{e.counter}</div>
                                    <h3 className="on-demand-title engangement-titel">{e.title}</h3>
                                    <p className="section-title-description">{e.desc}</p>
                                    <div className="on-demand-list engagement-sub-list">
                                        {e.items.map((item, j) => (
                                            <div key={j} className="on-demand-list-item">
                                                <div className="on-demand-list-dot" />
                                                <div className="on-demand-list-title">{item}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="engagement-image-wrap figure">
                            <Image src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/6943d6c7290a6703d77f81b9_cta-img.png" loading="lazy" alt="CTA-img" width={400} height={400} className="engagement-image" />
                            <div className="engagement-btn-wrap">
                                <Link href="/contact-us" className="button-primary engangement-cta w-inline-block">
                                    <div className="text-block-16">Get in touch</div>
                                    <Image alt="arrow-top-right" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68dd105094d90e0a289e4185_arrow-top-right-white.svg" width={16} height={16} className="button-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/contact-us" className="button-primary engangement-cta responsive-style w-inline-block">
                        <div className="text-block-16">Get in touch</div>
                        <Image alt="arrow-top-right" src="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68dd105094d90e0a289e4185_arrow-top-right-white.svg" width={16} height={16} className="button-icon" />
                    </Link>
                </div>
            </section>
            <style>{`
                html.w-mod-js:not(.w-mod-ix3) :is(.engagement-list-item-2, .engagement-list-item-3) {
                    visibility: hidden !important;
                }
                @media only screen and (max-width: 991px) {
                    .engagement-list {
                        padding: 30px 30px 0 30px;
                    }
                }
            `}</style>
        </>
    );
}
