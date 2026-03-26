import { Section1 } from "../../sections/home/section1";
import { Section2 } from "../../sections/home/section2";
import { Section3 } from "../../sections/home/section3";
import { Section4 } from "../../sections/home/section4";
import { Section5 } from "../../sections/home/section5";
import { Section6 } from "../../sections/home/section6";
import { Section7 } from "../../sections/home/section7";

export function HomeScreen() {
  return (
    <main className="min-h-screen bg-base flex flex-col">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </main>
  );
}
