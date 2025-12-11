import { BsPatchCheckFill } from "react-icons/bs";

export function MessageCard() {
  return (
    <div className="w-[350px] h-[300px] bg-primary border border-gray-600 rounded-lg text-center p-8 flex flex-col gap-3   ">
      <BsPatchCheckFill className="text-9xl mx-auto text-green-600" />
      <h3 className="text-md font-bold ">Your Commission Has Been Sent</h3>
      <p className="text-xs opacity-60 ">
        Your commission request has been sent — check your email for updates.
      </p>
      <button className="text-sm bg-primary-blue w-40 mx-auto p-2 rounded-lg border border-black mt-5">
        {" "}
        Check Mail{" "}
      </button>
    </div>
  );
}
