import About from "@/components/about/About";
import Communication from "@/components/communication/Communication";
import Customers from "@/components/customers/Customers";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/land/Landing";
import Latest from "@/components/latest/Latest";
import Partners from "@/components/partners/Partners";
import Portfolio from "@/components/portfolio/Portfolio";
import Statistics from "@/components/statistics/Statistics";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col items-center gap-4">
      <Landing />
      <About />
      <Statistics />
      <Team />
      <Portfolio />
      <Customers />
      <Partners />
      <Latest />
      <Communication />
      <Footer />
    </main>
  );
}
