import type { Metadata } from "next";
import Container from "@/app/components/common/Container";
import Header from "./Header";
import PhantomList from "@/app/components/Phantom/PhantomList";

export const metadata: Metadata = {
  title: "Dashboard | PhantomBuster",
  description: "",
};

export default function Dashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="bg-phantom-bg-primary min-h-screen pb-13 pt-6">
      <Container>
        <Header />
        <PhantomList />
      </Container>
    </section>
  );
}
