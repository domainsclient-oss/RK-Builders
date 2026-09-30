export const metadata = {
  title: 'Rajkumaran Builders Pvt Ltd | Home',
  description: 'Rajkumaran Builders delivers considered construction, renovation, and project management across residential and commercial spaces.',
  openGraph: {
    title: 'Rajkumaran Builders',
    description: 'Quality construction solutions with a commitment to excellence, reliability, and lasting value.',
    type: 'website',
  },
};

import './globals.css';
import SiteEffects from './_components/SiteEffects';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<SiteEffects /></body>
    </html>
  );
}
