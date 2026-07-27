'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import { Check } from 'lucide-react';

export default function WhyPage() {
  const reasons = [
    {
      title: 'Premium Craftsmanship',
      description: 'TODO: From Brand Guidelines - Precision engineering and quality materials',
      icon: 'star',
    },
    {
      title: 'Professional Tested',
      description: 'TODO: From Brand Guidelines - Used by competitive players worldwide',
      icon: 'award',
    },
    {
      title: 'Innovation Focused',
      description: 'TODO: From Brand Guidelines - Continuous R&D and development',
      icon: 'zap',
    },
    {
      title: 'Community Driven',
      description: 'TODO: From Brand Guidelines - Built for and by the pickleball community',
      icon: 'users',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section spacing="lg" className="bg-gradient-to-b from-maxwill-gray-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <FadeIn>
              <Heading level={1} className="mb-6">
                Why Choose MAXWILL
              </Heading>
              <Text className="text-xl text-maxwill-gray-600">
                We are committed to excellence in every aspect of product design and customer experience.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Reasons */}
      <Section spacing="lg">
        <Container>
          <Grid cols={2}>
            {reasons.map((reason, index) => (
              <SlideIn key={reason.title} direction="up" delay={0.1 * (index + 1)}>
                <Card hover>
                  <div className="flex gap-4">
                    <div className="text-maxwill-primary mt-1 flex-shrink-0">
                      <Check size={24} />
                    </div>
                    <div>
                      <Heading level={3} className="mb-2">
                        {reason.title}
                      </Heading>
                      <Text className="text-sm text-maxwill-gray-600">{reason.description}</Text>
                    </div>
                  </div>
                </Card>
              </SlideIn>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section spacing="lg" className="bg-maxwill-gray-50">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            What Players Say
          </Heading>
          <Grid cols={3}>
            {[
              {
                quote: 'TODO: Player testimonial from catalogue or reviews',
                author: 'Player Name',
                title: 'Professional Player',
              },
              {
                quote: 'TODO: Player testimonial from catalogue or reviews',
                author: 'Player Name',
                title: 'Tournament Champion',
              },
              {
                quote: 'TODO: Player testimonial from catalogue or reviews',
                author: 'Player Name',
                title: 'Recreational Player',
              },
            ].map((testimonial) => (
              <Card key={testimonial.author} variant="elevated">
                <p className="text-maxwill-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-maxwill-secondary">{testimonial.author}</p>
                  <p className="text-sm text-maxwill-gray-500">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
