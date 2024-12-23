import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";

export const experimental_ppr = true;

/**
 *
 * ### Pre-requisite Configuration
 * - ppr: true
 *
 * ### Outcome
 * - Blocks for 2 seconds before page is loaded
 * - Last component shows loading state and renders after 5 seconds
 *
 */
export default async function Home() {
  return (
    <div>
      <SlowComponent delay={1000} />
      <SlowComponent delay={2000} />
      <Suspense fallback={<div>loading...</div>}>
        <SlowComponent delay={5000} />
      </Suspense>
    </div>
  );
}
