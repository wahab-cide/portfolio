import { Hero } from "@/components/hero";
import { CurrentlyBuilding } from "@/components/currently-building";
import { Writing } from "@/components/writing";
import { Podcasts } from "@/components/podcasts";
import { Research } from "@/components/research";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Podcasts />
      <CurrentlyBuilding />
      <Writing />
      
      <Research />
    </div>
  );
}
