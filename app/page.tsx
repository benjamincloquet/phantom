import type { Metadata } from "next";

import Container from "@/app/components/Container";
import PageTitle from "@/app/components/PageTitle";
import Counter from "@/app/components/Counter";

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
    <section className="min-h-screen bg-primary pb-13 pt-6">
      <Container>
        <header>
          <div className="flex items-baseline justify-center space-x-2">
            <PageTitle text={"Dashboard"} />
            <Counter current={1} total={5} />
          </div>
        </header>
      </Container>
    </section>
  );
}
