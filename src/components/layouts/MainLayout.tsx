import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Classes', path: '/classes' },
  { name: 'Instructors', path: '/instructors' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            location.pathname === item.path
              ? 'text-primary'
              : 'text-foreground/70'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">Dance Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-6 lg:flex">
            <NavLinks />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-3">Dance Academy</h3>
              <p className="text-sm text-muted-foreground">
                Inspiring dancers of all levels to express themselves through movement and artistry.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📍 123 Dance Street, Arts District</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@danceacademy.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Dance Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
