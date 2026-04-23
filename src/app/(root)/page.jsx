import HomepageBefore from "@/app/components/ui/HomepageBefore";
import HomepageAfter from "../components/ui/HomepageAfter";
import { getSession } from "@/app/actions/auth";

const Page = async () => {
  // Fetch the session data from the server
  const session = await getSession();

  return (
    <main>
      {session ? (
        /* If session exists, show the logged-in homepage */
        <HomepageAfter />
      ) : (
        /* If no session, show the guest homepage */
        <HomepageBefore />
      )}
    </main>
  );
};

export default Page;