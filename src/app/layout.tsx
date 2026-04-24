import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Software, Web & Mobile App Development | AmentoTech",
  description:
    "AmentoTech is a leading software development company delivering custom web, mobile, and enterprise solutions. We help businesses innovate with scalable technology, expert engineering, and end-to-end digital transformation.",
  openGraph: {
    title: "Custom Software, Web & Mobile App Development | AmentoTech",
    description:
      "AmentoTech is a leading software development company delivering custom web, mobile, and enterprise solutions. We help businesses innovate with scalable technology, expert engineering, and end-to-end digital transformation.",
    images: [
      "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/695e355daa28eb4763e492ef_AmentoTech.png",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, Web & Mobile App Development | AmentoTech",
    description:
      "AmentoTech is a leading software development company delivering custom web, mobile, and enterprise solutions. We help businesses innovate with scalable technology, expert engineering, and end-to-end digital transformation.",
  },
  verification: {
    google: "k0xE33C6K6KeRfdFUagvQ0oIqV3qXHQJwYes3eVixsM",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68da26a32b81516beff40ded_32X32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68da26a81a3b1c60b69843ae_256X256.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inconsolata:wght@400;700&family=DM+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/css/amentotechstaging.webflow.shared.828a4b881.css"
          type="text/css"
          integrity="sha384-gopLiBXR+6fS8PPOg8pW1ZWfqMEMYGYPAU/Z8BeErrhak8qGDRQ6n5WEmLKjIiuN"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__WEBFLOW_CURRENCY_SETTINGS = {
                "currencyCode": "USD",
                "symbol": "$",
                "decimal": ".",
                "fractionDigits": 2,
                "group": ",",
                "template": "{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}",
                "hideDecimalForWholeNumbers": false
              };
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AmentoTech",
              url: "/home-page",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.prod.website-files.com/68d276a2319df5bdcc752026/68de6ec8fdee44631c704909_logo.svg",
              },
              description:
                "We lead change with technology consulting and advanced software solutions. We help businesses embrace digital transformation through cloud solutions, enterprise software, AI development, and cybersecurity.",
              inLanguage: "en",
              email: "sales@amentotech.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              sameAs: [
                "https://www.linkedin.com/company/amentotech",
                "https://www.youtube.com/@amentotech",
                "https://www.instagram.com/amentotech",
                "https://twitter.com/amentotech",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "sales@amentotech.com",
                contactType: "Sales",
              },
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development", description: "Tailored solutions to boost your business growth" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Robust and responsive websites to enhance online presence" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", description: "High-performance mobile apps to strengthen user experience across platforms" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Computing", description: "Scalable cloud solutions to enhance operational efficiency" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design", description: "Intuitive interfaces to deliver seamless experiences, driving customer satisfaction" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Solutions", description: "Custom enterprise solutions to optimize your business operations" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Artificial Intelligence & Machine Learning", description: "Leverage AI and ML to enhance predictive capabilities for smarter business decisions" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps & IT Consulting", description: "Optimize your SDLC with expert DevOps solutions and IT strategy consulting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blockchain Development", description: "Secure, scalable blockchain solutions and DApps, fostering trust and innovation across industries" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Quality Assurance & Testing", description: "Ensure software quality with SQA and automated testing for flawless performance" } },
              ],
              knowsAbout: ["E-commerce", "Fintech", "Healthcare", "Ed-tech", "On-Demand", "Food & Groceries", "Real Estate", "Blockchain"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(C, A, L) {
                let p = function(a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function() {
                  let cal = C.Cal;
                  let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function() { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "30min", { origin: "https://app.cal.com" });
              Cal.ns["30min"]("floatingButton", {
                "calLink": "amentotech/30min",
                "config": { "layout": "month_view", "theme": "light" },
                "buttonColor": "#5BBB4A",
                "buttonPosition": "bottom-right",
                "buttonText": "Talk To Us"
              });
              Cal.ns["30min"]("ui", {
                "theme": "light",
                "cssVarsPerTheme": {
                  "light": { "cal-brand": "#5BBB4A" },
                  "dark": { "cal-brand": "#5BBB4A" }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
              });
            `,
          }}
        />
        <Script
          id="cal-modal-triggers"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                const trigger = e.target.closest('[data-gn-book-meeting="modal"]');
                if (trigger) {
                  e.preventDefault();
                  const calButton = document.querySelector('cal-floating-button');
                  if (calButton) calButton.click();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
