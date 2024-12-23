import { SlowComponent } from "@/components/SlowComponent";

/**
 *
 * ### Pre-requisite Configuration
 * - ppr: false
 *
 * ### Outcome
 * - Blocks for 5 seconds before page is loaded
 *
 */
export default async function Home() {
  return (
    <div>
      <SlowComponent delay={1000} />
      <SlowComponent delay={2000} />
      <SlowComponent delay={5000} />
    </div>
  );
}
