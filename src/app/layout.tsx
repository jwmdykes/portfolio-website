import './globals.css';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import { Inter } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';
import React from "react";
import { Metadata }  from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata : Metadata = {
  title: "John's Portfolio",
  description: "John Dykes' Web Development Portfolio Website",
  publisher: "John Dykes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${source_code_pro.variable}`}>
      <body>
        <div className='overflow-clip'>{children}</div>
      </body>
    </html>
  );
}
