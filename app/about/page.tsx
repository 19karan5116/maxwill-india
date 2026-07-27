'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section spacing="lg" className="bg-gradient-to-b from-maxwill-gray-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <FadeIn>
              <Heading level={1} className="mb-6">
                About MAXWILL INDIA
              </Heading>
              <Text className="text-xl text-maxwill-gray-600">
                {/* TODO: From Brand Guidelines */}
                We are dedicated to elevating the pickleball experience through premium equipment, innovation, and community.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section spacing="lg">
        <Container>
          <Grid cols={2} gap="lg">
            <FadeIn delay={0.1}>
              <div>
                <Heading level={2} className="mb-4">
                  Our Mission
                </Heading>
                <Text className="text-lg">
                  {/* TODO: From Brand Guidelines */}
                  Elevate the pickleball experience through premium equipment, innovation and community.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <Heading level={2} className="mb-4">
                  Our Vision
                </Heading>
                <Text className="text-lg">
                  {/* TODO: From Brand Guidelines */}
                  To be the global leader in premium pickleball equipment trusted by professional players worldwide.
                </Text>
              </div>
            </FadeIn>
          </Grid>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg" className="bg-maxwill-gray-50">
        <Container>
          <Heading level={2} className="mb-12 text-center">
            Core Values
          </Heading>
          <Grid cols={3}>
            {[
              {
                title: 'Performance',
                description: 'TODO: From Brand Guidelines',
                delay: 0.1,
              },
              {
                title: 'Innovation',
                description: 'TODO: From Brand Guidelines',
                delay: 0.2,
              },
              {
                title: 'Community',
                description: 'TODO: From Brand Guidelines',
                delay: 0.3,
              },
            ].map((value) => (
              <SlideIn key={value.title} direction="up" delay={value.delay}>
                <Card>
                  <Heading level={3} className="mb-3">
                    {value.title}
                  </Heading>
                  <Text className="text-sm">{value.description}</Text>
                </Card>
              </SlideIn>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
