import React from 'react';

export default function TermsOfService() {
  return (
    <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <h1>Terms of Service</h1>
      <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the TuneOnus website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2>2. Services Provided</h2>
          <p>
            TuneOnus provides AI development, web application development, and software engineering services. The specific terms of any project or engagement will be defined in a separate Statement of Work (SOW) or contract.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content published and made available on our site is the property of TuneOnus and the site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our site.
          </p>
        </section>

        <section>
          <h2>4. Contact</h2>
          <p>
            For any questions or concerns regarding these terms, please contact us at <strong>tuneonus@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
