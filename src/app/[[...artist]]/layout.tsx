import type { ReactNode } from 'react';
import type { Metadata } from 'next';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'You should listen to...',
  description: "Tell me a band or artist you like, and I'll tell you who else you should listen to.",
  icons: {
    icon: './favicon.svg',
  },
};

const Layout = ({ children }: Props) => (
  <html lang="en-GB">
    <head />
    <body>{children}</body>
  </html>
);

export default Layout;
