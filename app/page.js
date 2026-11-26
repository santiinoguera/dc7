import BarraPromo from '@/components/BarraPromo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StarProduct from '@/components/StarProduct';
import PromosSection from '@/components/PromosSection';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import HowToBuy from '@/components/HowToBuy';
import Shipping from '@/components/Shipping';
import Payments from '@/components/Payments';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

// Sección Navidad pausada: para volver a mostrarla, importá Christmas de '@/components/Christmas'
// y poné <Christmas /> después de <FeaturedProducts />.
export default function Home() {
  return (
    <>
      <BarraPromo />
      <Header />
      <main>
        <Hero />
        <StarProduct />
        <PromosSection />
        <Categories />
        <FeaturedProducts />
        <HowToBuy />
        <Shipping />
        <Payments />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
