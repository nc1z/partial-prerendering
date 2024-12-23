import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";

export const experimental_ppr = true;

async function Content() {
  return (
    <div>
      <SlowComponent delay={1000} />
      <SlowComponent delay={2000} />
      <Suspense fallback={<div>still loading....</div>}>
        <SlowComponent delay={5000} />
      </Suspense>
    </div>
  );
}

/**
 *
 * ### Pre-requisite Configuration
 * - ppr: true
 * - dynamicIO: true
 * - Remove 'async' from Home() component
 *
 * ### Outcome
 * > - Example Header is immediately loaded
 * > - Content shows loading state and renders components after 2 seconds
 * > - Last component shows loading state and renders after 5 seconds
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
