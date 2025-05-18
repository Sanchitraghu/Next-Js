export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="auth-banner">
        <h1>Auth Banner Common</h1>
        <p>
          If the folder contains layout.tsx file then it must render all the
          page route via this file
        </p>
      </div>
      {children}
    </div>
  );
}
