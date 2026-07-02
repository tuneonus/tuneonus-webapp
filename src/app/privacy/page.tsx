import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <h1>Privacy Policy</h1>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
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
            We use the information we collect to communicate with you, provide our services, and improve our website's user experience through aggregated analytics. We do not sell your personal data to third parties.
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
            If you have any questions about this Privacy Policy, please contact us at <strong>tuneonus@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
