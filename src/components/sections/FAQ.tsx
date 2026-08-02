import { homeFaqs } from '../../content/home';
import { ScrollReveal } from '../ui/ScrollReveal';
import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className={`container ${styles.container}`}>
        <ScrollReveal direction="up">
          <div className={`text-center ${styles.header}`}>
            <span className={styles.eyebrow}>Before we begin</span>
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">
              A quick overview of TuneOnus services and how a project starts.
            </p>
          </div>
        </ScrollReveal>
        <div className={styles.list}>
          {homeFaqs.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 0.05} direction="up">
              <details className={styles.item}>
                <summary><span>{item.question}</span><span className={styles.toggle} aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
