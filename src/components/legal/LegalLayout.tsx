import Link from "next/link";
import { Container } from "@/components/ui/Container";

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Cabecera */}
      <div className="bg-teal-600 py-14">
        <Container>
          <nav className="text-teal-200 text-sm mb-4" aria-label="Ruta de navegación">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-teal-100 text-sm">
            Última actualización: {lastUpdated}
          </p>
        </Container>
      </div>

      {/* Contenido */}
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl prose prose-gray prose-headings:text-gray-900 prose-headings:font-semibold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
          {children}
        </div>
      </Container>
    </div>
  );
}
