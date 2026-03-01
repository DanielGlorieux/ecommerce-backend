import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    id: '1',
    name: 'Tissu Faso Dan Fani',
    description: 'Tissu traditionnel tissé à la main, symbole de l\'artisanat burkinabè. Parfait pour vos tenues traditionnelles.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1768212565426-58b089b6386d?w=600',
    category: 'mode',
    inStock: true,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Ensemble Traditionnel',
    description: 'Ensemble complet pour femme avec broderies fines. Confection locale de haute qualité.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1741940365831-1a1fdc2e33ff?w=600',
    category: 'mode',
    inStock: true,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Bijoux en Bronze',
    description: 'Collection de bijoux artisanaux en bronze doré. Design unique inspiré de la culture mossi.',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600',
    category: 'bijoux',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Smartphone Android',
    description: 'Smartphone dernière génération avec double SIM. Garantie 1 an, livraison à Ouagadougou.',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1639855919893-41c8ed22c0b1?w=600',
    category: 'electronique',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Panier Artisanal',
    description: 'Panier tressé à la main par des artisans locaux. Idéal pour la décoration ou le marché.',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1766204176809-313373b37ca5?w=600',
    category: 'artisanat',
    inStock: true,
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Beurre de Karité Bio',
    description: 'Beurre de karité 100% naturel et bio. Production locale, soutient les femmes burkinabè.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1761828122942-e09382131eb1?w=600',
    category: 'beaute',
    inStock: true,
    rating: 5.0,
  },
  {
    id: '7',
    name: 'Écouteurs Bluetooth',
    description: 'Écouteurs sans fil avec réduction de bruit. Autonomie 8h. Prix compétitif!',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1764557159396-419b85356035?w=600',
    category: 'electronique',
    inStock: true,
    rating: 4.4,
  },
  {
    id: '8',
    name: 'Panier Décoratif',
    description: 'Panier en osier tressé avec motifs géométriques. Produit artisanal authentique.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1760067538169-8fdc2d711b84?w=600',
    category: 'artisanat',
    inStock: true,
    rating: 4.6,
  },
];

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('✅ Database seeded!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
