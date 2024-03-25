import '@/app/globals.css';
import Footer from '@/app/ui/footer/footer';
import Header from '@/app/ui/header/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">

      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}