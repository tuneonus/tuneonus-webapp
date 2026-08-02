import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how TuneOnus collects, uses, and protects information submitted through this website.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | TuneOnus',
    description: 'Learn how TuneOnus collects, uses, and protects information submitted through this website.',
    url: '/privacy',
  },
  twitter: {
    title: 'Privacy Policy | TuneOnus',
    description: 'Learn how TuneOnus collects, uses, and protects information submitted through this website.',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <h1>Privacy Policy</h1>
      
      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you use our website, particularly our contact forms, we may collect personal information such as your name, email address, and project details. We use this information solely to respond to your inquiries and provide software engineering services.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to communicate with you, provide our services, and improve the website experience through aggregated analytics. We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2>3. Web Analytics</h2>
          <p>
            Our website uses standard web analytics (Vercel Analytics) to track page views and performance. This data is aggregated and anonymized to help us understand how our site is used.
          </p>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, email us at <a href="mailto:tuneonus@gmail.com">tuneonus@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
