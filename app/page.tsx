import Container from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn, SlideIn } from '@/components/animations';
import Link from 'next/link';
import { SITE } from '@/constants/site';

export const metadata = {
  title: SITE.seo.title,
  description: SITE.seo.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-maxwill-secondary">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(/images/hero-athlete.jpg)',
          backgroundPosition: 'right center',
        }} />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full min-h-screen flex items-center">
          <Container className="py-20">
            <div className="max-w-2xl">
              {/* Badge */}
              <FadeIn delay={0} duration={0.6}>
                <Badge variant="light" size="md" className="mb-6">
                  Elite Pickleball Equipment
                </Badge>
              </FadeIn>

              {/* Main Heading */}
              <SlideIn direction="up" delay={0.1} duration={0.7}>
                <Text 
                  variant="h1" 
                  color="white" 
                  className="mb-6 font-black tracking-tight"
                >
                  ENGINEERED<br />
                  <span className="text-maxwill-primary">FOR COMMAND</span>
                </Text>
              </SlideIn>

              {/* Subheading */}
              <SlideIn direction="up" delay={0.2} duration={0.7}>
                <Text variant="body-lg" color="white" className="mb-8 max-w-xl opacity-90">
                  Uncompromised power. Pinpoint precision.
                </Text>
              </SlideIn>

              {/* Description */}
              <SlideIn direction="up" delay={0.3} duration={0.7}>
                <Text variant="body" color="white" className="mb-12 max-w-xl opacity-75">
                  Built for competitors who demand absolute dominance.
                </Text>
              </SlideIn>

              {/* CTAs */}
              <SlideIn direction="up" delay={0.4} duration={0.7}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/products">EXPLORE CATALOGUE</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/why">PADDLE FINDER</Link>
                  </Button>
                </div>
              </SlideIn>
            </div>
          </Container>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 tablet:py-16 desktop:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Raw Carbon',
                description: 'Maximum grit and spin potential',
              },
              {
                icon: '🏆',
                title: 'Pro Series',
                description: 'Competition engineered core',
              },
              {
                icon: '🔥',
                title: 'Thermoformed',
                description: 'Sealed unibody construction',
              },
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1} duration={0.6}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <Text variant="h5" color="secondary" className="mb-2">
                    {feature.title}
                  </Text>
                  <Text variant="body-sm" color="tertiary">
                    {feature.description}
                  </Text>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
