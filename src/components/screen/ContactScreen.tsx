import { Section1 } from "../../sections/contact/section1";
import { Section2 } from "../../sections/contact/section2";
import { Section3 } from "../../sections/contact/section3";

export function ContactScreen() {
  return (
    <main className="min-h-screen bg-base flex flex-col pt-20">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
