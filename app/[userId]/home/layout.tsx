import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ userId: string }>;
}) {
  const resolvedParams = await params;

  return (
    <div>
      <NavBar params={resolvedParams} />
      {children}
      <Footer />
    </div>
  );
}
