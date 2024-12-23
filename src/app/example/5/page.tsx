import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";

export const experimental_ppr = true;

async function Content() {
  "use cache";

  return (
    <div>
      <SlowComponent delay={1000} />
      <SlowComponent delay={2000} />
      <SlowComponent delay={5000} />
    </div>
  );
}

/**
 *
 * ### Pre-requisite Configuration
 * - ppr: true
 * - dynamicIO: true
 * - Remove 'async' from Home() component
 * - "use-cache" on Content
 *
 * ### Outcome
 * - First time
 * > - Example Header is immediately loaded
 * > - Content shows loading state and renders after 5 seconds
 * - Subsequent refreshes
 * > - As long as no cache miss, immediately loads the entire page
 *
 */
export default function Home() {
  return (
    <div>
      <h1>Example Header</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}
