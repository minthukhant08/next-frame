
import "./globals.css";
import ClientSessionProvider from "@/providers/session-provider";
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ClientSessionProvider>
        {children}
        </ClientSessionProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
