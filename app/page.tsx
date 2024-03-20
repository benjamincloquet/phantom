import type { Metadata } from "next";
import Container from "@/app/components/common/Container";
import Header from "./Header";
import PhantomList from "@/app/components/Phantom/PhantomList";

export const metadata: Metadata = {
  title: "Dashboard | PhantomBuster",
  description: "",
};

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-phantom-bg-primary pb-13 pt-6">
      <Container>
        <Header />
        <PhantomList />
      </Container>
    </section>
  );
}
