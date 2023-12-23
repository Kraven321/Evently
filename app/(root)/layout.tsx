import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
      <head />
      <body>
       <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">
        {children}
        </main>  
        <Footer />
      </div>
      </body>
      </html>
    );
  }