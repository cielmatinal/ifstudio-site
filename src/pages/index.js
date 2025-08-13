import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
  maxWidth={'560px'}
  image={'/banner1.png'}
  title={"IF Studio — Création & contenus digitaux"}
  subtitle={"Visuels, audio & produits digitaux. Sur-mesure, discret, paiement sécurisé."}
  ctaText={"Voir l’offre"}
  ctaAction={goToShop} // on laisse l’action par défaut pour l’instant
/>


      <p>
  IF Studio conçoit des contenus <span className={styles.gold}>visuels & audio</span> adaptés à votre univers : photos, courtes vidéos, packs digitaux.
</p>
<p>
  Processus <span className={styles.gold}>discret</span>, sélection des projets, acompte obligatoire, <span className={styles.gold}>paiement sécurisé</span>.
</p>


      {/* 
<Container size={'large'}>
  <Title name={'New Collection'} />
  <ProductCollectionGrid />
</Container>
*/}

      {/* 
<div className={styles.newArrivalsContainer}>
  <Container>
    <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
    <ProductCardGrid spacing={true} showSlider height={480} columns={3} data={newArrivals} />
  </Container>
</div>
*/}

     <Highlight
  image={'/highlight.png'}
  altImage={'Projet en vedette'}
  miniImage={'/highlightmin.png'}
  miniImageAlt={'aperçu'}
  title={"Contenus digitaux sur-mesure"}
  description={"Création clé-en-main : idées, tournage/prise de son, montage, export & livraison digitale. Parfait pour réseaux et usages privés."}
  textLink={"Me contacter"}
  link={'/shop'} // on garde /shop temporairement
/>


      {/* Promotion */}
      {/*<div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div>*/}

      {/* Quote */}
        {/*<Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Sydney'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      {/* Blog Grid */}
        {/*<div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>*/}

      {/* Promotion */}
         {/*<div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>*/}

      {/* Social Media */}
         {/*<div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @sydney to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>*/}
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
