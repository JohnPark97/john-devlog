import Header from '../components/Header';
import Footer from '../components/Footer';
import WorksSection from '../components/WorkSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>My Vision</h2>
          <p>
            Describe your vision as a software developer here...
          </p>
        </section>
        <WorksSection />
      </main>
      <Footer />
    </div>
  );
}
