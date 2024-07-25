import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aleu Style</title>
        <meta name="description" content="Landing page di Aleu Style" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Services />
    </div>
  );
}
