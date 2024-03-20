import type { Metadata } from "next";
import Container from "@/app/components/Container";
import PageTitle from "@/app/components/PageTitle";
import Counter from "@/app/components/Counter";
import PhantomList from "@/app/components/PhantomList";

export const metadata: Metadata = {
  title: "Dashboard | PhantomBuster",
  description: "",
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-phantom-bg-primary min-h-screen pb-13 pt-6">
      <Container>
        <header>
          <hgroup className="flex items-baseline justify-center space-x-2">
            <PageTitle text="Dashboard" />
            <Counter current={1} total={5} />
          </hgroup>
        </header>
        <PhantomList />
      </Container>
    </section>
  );
}
