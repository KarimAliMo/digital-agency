import About from "@/components/about/About";
import Landing from "@/components/land/Landing";
import Statistics from "@/components/statistics/Statistics";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col items-center gap-4">
      <Landing />
      <About />
      <Statistics />
      <Team />
    </main>
  );
}
