// TODO یک پکیج برای استس ها باید بسازیم نه اینکه بزاریم توی پوشه پابلیک
import Script from 'next/script';
import './global2.css';
import "@code-hike/mdx/dist/index.css"
import { Vazirmatn}from 'next/font/google'
import { cn } from '../libs/utils';


const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={cn(vazirmatn.className)}>
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></Script>
      </body>
    </html>
  );
}
