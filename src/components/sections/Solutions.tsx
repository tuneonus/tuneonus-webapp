import React from 'react';
import styles from './Solutions.module.css';

export default function Solutions() {
  const industries = [
    { name: 'Startups', desc: 'MVP development and scalable architectures for rapid growth.' },
    { name: 'Enterprises', desc: 'Secure, compliant, and robust systems for large organizations.' },
    { name: 'Finance', desc: 'Fintech solutions with high-security standards and real-time processing.' },
    { name: 'Retail', desc: 'E-commerce platforms and inventory management systems.' },
    { name: 'Productivity', desc: 'Collaboration tools and internal dashboard applications.' },
    { name: 'Healthcare', desc: 'HIPAA-compliant software and telemedicine platforms.' }
  ];

  return (
    <section id="solutions" className={`section ${styles.solutions}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="animate-fade-in">Industry Solutions</h2>
          <p className="subtitle animate-fade-in">
            We build specialized software across diverse sectors, understanding the unique challenges of each.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.bullet}></div>
              <div>
                <h3 className={styles.title}>{industry.name}</h3>
                <p className={styles.desc}>{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
