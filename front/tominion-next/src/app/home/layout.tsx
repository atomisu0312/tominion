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
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8">{children}</div>
          <div className="col-span-2"></div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}