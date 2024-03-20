import type { Metadata } from "next";
import PhantomsProvider from "@/app/context/PhantomsContext";
import Container from "@/app/components/Container";
import PageTitle from "@/app/components/PageTitle";
import PhantomCounter from "@/app/components/PhantomCounter";
import PhantomList from "@/app/components/PhantomList";

export const metadata: Metadata = {
  title: "Dashboard | PhantomBuster",
  description: "",
};

export default function Dashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PhantomsProvider>
      <section className="bg-phantom-bg-primary min-h-screen pb-13 pt-6">
        <Container>
          <header>
            <hgroup className="flex items-baseline justify-center space-x-2">
              <PageTitle text="Dashboard" />
              <PhantomCounter max={5} />
            </hgroup>
          </header>
          <PhantomList />
        </Container>
      </section>
    </PhantomsProvider>
  );
}
