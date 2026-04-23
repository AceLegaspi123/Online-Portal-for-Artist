import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";


async function AccountData() {
    const supabase = await createClient();
  
    const { data: Credentials, error } = await supabase
      .from("Credentials")
      .select("id, gmail, Role"); // Use the actual column names from your DB 
  
    if (error) {
      console.error(error);
      return <p>Error: {error.message}</p>;
    }
  
    // Handle the case where the database returns null or an empty list
    if (!Credentials || Credentials.length === 0) {
      return <p>No credentials found in the database.</p>;
    }
  
    return (
      <div>
        <h1>Account Settings</h1>
        {/* This will show you exactly what the keys are named */}
        {/* <pre className="bg-gray-100 p-2 text-xs">{JSON.stringify(Credentials, null, 2)}</pre> */}
  
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Email (Gmail)</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {/* Using optional chaining ?. to prevent 'null' errors */}
            {Credentials?.map((credential) => (
              <tr key={credential.id}>
                <td className="border p-2">{credential.id}</td>
                {/* Changed from .email to .gmail to match your DB  */}
                <td className="border p-2">{credential.gmail}</td>
                <td className="border p-2">{credential.Role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
    );
  }

  
export default function Accounts() {
  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <AccountData />
    </Suspense>
  );
}
