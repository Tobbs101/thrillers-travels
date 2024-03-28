import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/components/PageLayout";
import Aside from "@/components/Aside";

export default function Home() {
  return (
    <PageLayout>
      <Sidebar />
      <Aside>
        <h2>Here</h2>
      </Aside>
    </PageLayout>
  );
}
