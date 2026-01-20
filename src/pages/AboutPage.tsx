import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 xl:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">About Dance Academy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspiring dancers of all levels since 2010
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/d1a7e795-dbae-4a00-a2bf-e6c1bd925ab8.jpg"
            alt="Dance Academy Studio"
            className="w-full h-64 xl:h-96 object-cover"
          />
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                At Dance Academy, we believe that dance is more than just movement—it's a form of 
                self-expression, a path to physical fitness, and a way to build confidence and community. 
                Our mission is to provide high-quality dance education in a welcoming, supportive 
                environment where students of all ages and abilities can thrive.
              </p>
              <p>
                Whether you're taking your first dance steps or refining advanced techniques, our 
                experienced instructors are dedicated to helping you achieve your goals while fostering 
                a lifelong love of dance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Founded in 2010 by professional dancer and choreographer Maria Thompson, Dance Academy 
              began as a small studio with just three classes and a dream to make quality dance 
              education accessible to everyone in the community.
            </p>
            <p>
              Over the years, we've grown into a thriving dance center offering more than 20 classes 
              per week across multiple dance styles. Our students have gone on to perform professionally, 
              compete nationally, and most importantly, develop a deep appreciation for the art of dance.
            </p>
            <p>
              Today, Dance Academy is proud to serve hundreds of students annually, from young children 
              taking their first ballet class to adults discovering the joy of dance for the first time.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Facilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🏢</span> Studio Spaces
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Three spacious studios with professional sprung floors, full-length mirrors, and 
                ballet barres. Each studio is equipped with state-of-the-art sound systems.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🎵</span> Equipment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Professional audio equipment, portable barres, yoga mats, and props for various 
                dance styles. All equipment is regularly maintained and sanitized.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🚿</span> Amenities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Clean changing rooms, lockers, and a comfortable waiting area for parents and 
                guests. Free Wi-Fi available throughout the facility.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🅿️</span> Parking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Ample free parking available in our dedicated lot. The facility is also accessible 
                via public transportation with a bus stop nearby.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Visit Us</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-4">Location & Hours</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📍</span>
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p>123 Dance Street</p>
                        <p>Arts District, CA 90012</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">🕐</span>
                      <div>
                        <p className="font-semibold text-foreground">Hours</p>
                        <p>Monday - Friday: 3:00 PM - 10:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📞</span>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p>(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✉️</span>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p>info@danceacademy.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🌐</span>
                      <div>
                        <p className="font-semibold text-foreground">Social Media</p>
                        <p>@danceacademy on Instagram & Facebook</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
