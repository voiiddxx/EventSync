import Header from "@/components/shared/Header"



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main>{children}</main>
      </div>
    )
  }
  