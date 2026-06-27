import React from 'react';
import styles from './Testimonials.module.css';
import { Card, CardContent } from '../ui/Card';

export default function Testimonials() {
  const reviews = [
    {
      text: "TuneOnus didn't just build our app; they helped us refine our product strategy. Their AI integrations were game-changing.",
      author: "Sarah Jenkins",
      role: "CTO, FinEdge",
    },
    {
      text: "The technical depth and speed of execution we saw from the TNS team were unparalleled. Highly recommended for complex systems.",
      author: "Michael Chang",
      role: "Founder, NexusFlow",
    },
    {
      text: "A truly premium experience from start to finish. Our new enterprise platform is fast, secure, and beautiful.",
      author: "Elena Rodriguez",
      role: "VP Engineering, HealthCorp",
    }
  ];

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="animate-fade-in">Client Feedback</h2>
          <p className="subtitle animate-fade-in">
            Don't just take our word for it. Here's what our partners say.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <Card key={i} className={styles.card} variant="glass">
              <CardContent className={styles.content}>
                <div className={styles.quoteMark}>"</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.authorSection}>
                  <div className={styles.avatar}>
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className={styles.author}>{review.author}</h4>
                    <p className={styles.role}>{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
