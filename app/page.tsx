import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/components/PageLayout";
import Aside from "@/components/Aside";
import TripSelector from "@/components/TripSelector";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <PageLayout>
      <Sidebar />
      <Aside>
        <TripSelector />
        <Filter />
      </Aside>
    </PageLayout>
  );
}
