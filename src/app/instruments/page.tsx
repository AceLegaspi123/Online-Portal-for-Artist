import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function InstrumentsData() {
  const supabase = await createClient();
//   const { data: instruments } = await supabase.from("instruments").select();

  const { data: instruments, error } = await supabase
  .from("instruments")
  .select();

    if (error) {
    console.error(error);
}

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
export default function Instruments() {
  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <InstrumentsData />
    </Suspense>
  );
}








