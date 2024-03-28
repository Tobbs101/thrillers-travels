import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/components/PageLayout";
import Aside from "@/components/Aside";
import TripSelector from "@/components/TripSelector";
import Filter from "@/components/Filter";
import CurrentTrips from "@/components/CurrentTrips";

export default function Home() {
  return (
    <PageLayout>
      <Sidebar />
      <Aside>
        <TripSelector />
        <Filter />
        <CurrentTrips />
      </Aside>
    </PageLayout>
  );
}
