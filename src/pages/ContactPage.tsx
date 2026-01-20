import MainLayout from '@/components/layouts/MainLayout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 xl:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our classes or want to schedule a trial session? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Dance Street<br />
                      Arts District, CA 90012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      (555) 123-4567<br />
                      Monday - Friday: 3:00 PM - 10:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      info@danceacademy.com<br />
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="font-semibold mb-1">Follow Us</h3>
                    <p className="text-sm text-muted-foreground">
                      @danceacademy on Instagram & Facebook<br />
                      Stay updated with our latest classes and events
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-1">Do you offer trial classes?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer a free trial class for new students. Contact us to schedule yours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">What should I wear to class?</h3>
                  <p className="text-muted-foreground">
                    Comfortable athletic wear is recommended. Specific footwear requirements vary by class.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Can I join mid-session?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Our classes are designed to accommodate students joining at any time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Find Us on the Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 xl:h-96 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4449!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dance Academy Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
