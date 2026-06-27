import React from 'react';
import styles from './TechStack.module.css';

export default function TechStack() {
  const techs = [
    'React', 'Next.js', 'React Native', 'Node.js', 
    'Python', 'TypeScript', 'AI', 'Cloud'
  ];

  return (
    <section className="section">
      <div className="container text-center">
        <h3 className={styles.title}>Powered by Modern Technologies</h3>
        <div className={styles.techList}>
          {techs.map((tech, i) => (
            <div key={i} className={styles.techBadge}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
