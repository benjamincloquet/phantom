import type { Metadata } from "next";
import Container from "@/app/components/common/Container";
import PhantomDetail from "@/app/components/Phantom/PhantomDetail";

export const metadata: Metadata = {
  title: "Phantom Detail | PhantomBuster",
  description: "",
};

export default function Dashboard({
  params: { id },
}: Readonly<{ params: { id: string } }>) {
  return (
    <section className="bg-phantom-bg-primary min-h-screen pb-13 pt-6">
      <Container>
        <header className="mb-2">
          <a href="/">Back to Dashboard</a>
        </header>
        <PhantomDetail id={id} />
      </Container>
    </section>
  );
}
