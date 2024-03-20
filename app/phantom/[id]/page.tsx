import type { Metadata } from "next";
import Container from "@/app/components/common/Container";
import Phantom from "@/app/components/Phantom/Phantom";

export const metadata: Metadata = {
  title: "Dashboard | PhantomBuster",
  description: "",
};

export default function Dashboard({
  params: { id },
}: Readonly<{ params: { id: string } }>) {
  return (
    <section className="bg-phantom-bg-primary min-h-screen pb-13 pt-6">
      <Container>
        <header>Back to Dashboard</header>
        <div>Phantom</div>
      </Container>
    </section>
  );
}
