import { Section1 } from "../../sections/about/section1";
import { Section2 } from "../../sections/about/section2";
import { Section3 } from "../../sections/about/section3";
import { Section4 } from "../../sections/about/section4";

export function AboutScreen() {
  return (
    <main className="min-h-screen bg-base flex flex-col pt-20">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
