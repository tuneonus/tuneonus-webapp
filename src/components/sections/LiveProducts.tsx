import { apps } from '../../content/apps';
import ProductCard from '../apps/ProductCard';

export default function LiveProducts() {
  return (
    <section id="apps" className="section" aria-labelledby="live-products-title">
      <div className="container">
        <h2 id="live-products-title">Our live apps</h2>
        <p className="subtitle" style={{ marginLeft: 0 }}>Built by TuneOnus. Available on Google Play.</p>
        {apps.map((app) => <ProductCard key={app.slug} app={app} />)}
      </div>
    </section>
  );
}
