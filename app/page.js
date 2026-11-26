import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StarProduct from '@/components/StarProduct';
import PromosSection from '@/components/PromosSection';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Christmas from '@/components/Christmas';
import HowToBuy from '@/components/HowToBuy';
import Shipping from '@/components/Shipping';
import Payments from '@/components/Payments';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StarProduct />
        <PromosSection />
        <Categories />
        <FeaturedProducts />
        <Christmas />
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
