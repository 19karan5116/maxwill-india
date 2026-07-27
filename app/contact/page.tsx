'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Grid from '@/components/ui/Grid';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/constants/site';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to backend/Bubble
    console.log('Form submitted:', formState);
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section spacing="lg" className="bg-gradient-to-b from-maxwill-gray-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <FadeIn>
              <Heading level={1} className="mb-6">
                Get in Touch
              </Heading>
              <Text className="text-xl text-maxwill-gray-600">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section spacing="lg">
        <Container>
          <Grid cols={2} gap="lg">
            {/* Form */}
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-maxwill-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-maxwill-gray-300 focus:border-maxwill-primary focus:ring-2 focus:ring-maxwill-primary/10 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-maxwill-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-maxwill-gray-300 focus:border-maxwill-primary focus:ring-2 focus:ring-maxwill-primary/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-maxwill-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-maxwill-gray-300 focus:border-maxwill-primary focus:ring-2 focus:ring-maxwill-primary/10 transition-all h-32 resize-none"
                    placeholder="Your message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <Card>
                  <div className="flex gap-4">
                    <div className="text-maxwill-primary flex-shrink-0 mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maxwill-secondary mb-1">Email</h3>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-maxwill-primary hover:text-red-700 transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex gap-4">
                    <div className="text-maxwill-primary flex-shrink-0 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maxwill-secondary mb-1">Phone</h3>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="text-maxwill-primary hover:text-red-700 transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex gap-4">
                    <div className="text-maxwill-primary flex-shrink-0 mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maxwill-secondary mb-1">Location</h3>
                      <p className="text-maxwill-gray-600">
                        {/* TODO: Location from Brand Guidelines */}
                        Based in India
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
