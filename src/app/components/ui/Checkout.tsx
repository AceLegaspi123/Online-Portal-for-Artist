// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { CiImageOn } from "react-icons/ci";
// import Modal from "@/app/components/ui/Modal";


// interface CheckoutProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Checkout = ({ isOpen, onClose }: CheckoutProps) => {
//   return (
//     <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1180px] w-full py-4 my-auto rounded-md">
//       <div className='flex  gap-4 px-6 w-[50em] text-white mx-auto justify-between'>
//         <div onClick={onClose} className="flex items-center cursor-pointer">
//          <MdOutlineKeyboardArrowLeft className="text-sm" />
//          <p >Back</p>
//         </div>
//         <div className="">
//          <h2 className="">CHECKOUT</h2>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 h-[520px] w-[50em] mx-auto bg-primary mt-6 mb-10 text-base text-black rounded-md">
//         <div className="py-6 px-20 gap-10 mt-8">
//           <p className="text-center">Choose Payment Method</p>

//        <div className="mt-6">
//         <div className="mx-auto w-fit border-1 border-primary-line px-12 flex flex-col items-center justify-center rounded-md p-4 cursor-pointer">
//           <img className="h-7 w-7" src="https://images.seeklogo.com/logo-png/52/1/gcash-logo-png_seeklogo-522261.png" alt="GCash Logo"/>
//           <p className="font-bold mt-2">GCash</p>
//         </div>

//           <p className="text-sm mt-25 text-center">You’ll be redirected to GCash to complete this payment.</p>
//         </div>
//       </div>

//       <div className= "bg-secondary rounded-md p-6 text-sm ">
//         <h2>Summary</h2>
//         <hr className="opacity-50" />
//         <div className="flex justify-between mt-4 text-sm">
//           <p>Machine Gun car <span className="font-bold">by William Gomez</span></p>
//           <p className="font-bold">$10</p>
//         </div>
//         <div>
//           <img className="mt-6"src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg" alt="Cat" />
//         </div>
//           <p className="mt-2">1 downloaded file</p>
//           <div className="flex gap-2 mt-2 text-sm opacity-50">
//             <CiImageOn className="h-10 w-10"/>
//             <p>Machine_gun_car.jpg <br />
//               4040 x 2312 - 5.12mb</p>  
//         </div>
//         <hr className="mt-4 opacity-50" />
//         <div className="flex justify-between mt-2 text-xs">
//           <p>Total</p>
//           <p>$10</p>
//         </div>
//         <button className=" rounded-md bg-green-500 text-white w-full mt-3 cursor-pointer p-2">Pay with Gcash</button>
//       </div>
//     </div>
//   </Modal>

//   )
// }

// export default Checkout


"use client";

import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import Modal from "@/app/components/ui/Modal";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout = ({ isOpen, onClose }: CheckoutProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/create-gcash-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 10000, // ₱100
        }),
      });

      const data = await res.json();

      console.log("FRONTEND RESPONSE:", data);

      if (!res.ok) {
        alert("Payment failed");
        return;
      }

      const checkoutUrl =
        data?.data?.attributes?.redirect?.checkout_url;

      if (!checkoutUrl) {
        alert("Failed to initiate payment.");
        return;
      }

      // ✅ Redirect to GCash
      window.location.href = checkoutUrl;

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1180px] w-full py-4 my-auto rounded-md">
      <div className='flex gap-4 px-6 w-[50em] text-white mx-auto justify-between'>
        <div onClick={onClose} className="flex items-center cursor-pointer">
          <MdOutlineKeyboardArrowLeft className="text-sm" />
          <p>Back</p>
        </div>
        <div>
          <h2>CHECKOUT</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[520px] w-[50em] mx-auto bg-primary mt-6 mb-10 text-base text-black rounded-md">

        {/* LEFT */}
        <div className="py-6 px-20 gap-10 mt-8">
          <p className="text-center">Choose Payment Method</p>

          <div className="mt-6">
            <div className="mx-auto w-fit border-1 border-primary-line px-12 flex flex-col items-center justify-center rounded-md p-4 cursor-pointer">
              <img
                className="h-7 w-7"
                src="https://images.seeklogo.com/logo-png/52/1/gcash-logo-png_seeklogo-522261.png"
                alt="GCash Logo"
              />
              <p className="font-bold mt-2">GCash</p>
            </div>

            <p className="text-sm mt-24 text-center">
              You’ll be redirected to GCash to complete this payment.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-secondary rounded-md p-6 text-sm">
          <h2>Summary</h2>
          <hr className="opacity-50" />

          <div className="flex justify-between mt-4 text-sm">
            <p>
              Machine Gun car <span className="font-bold">by William Gomez</span>
            </p>
            <p className="font-bold">₱100</p>
          </div>

          <div>
            <img
              className="mt-6"
              src="https://i.pinimg.com/1200x/1b/08/af/1b08af4eab12bd921dc3541ccf6a10b1.jpg"
              alt="Cat"
            />
          </div>

          <p className="mt-2">1 downloaded file</p>

          <div className="flex gap-2 mt-2 text-sm opacity-50">
            <CiImageOn className="h-10 w-10" />
            <p>
              Machine_gun_car.jpg <br />
              4040 x 2312 - 5.12mb
            </p>
          </div>

          <hr className="mt-4 opacity-50" />

          <div className="flex justify-between mt-2 text-xs">
            <p>Total</p>
            <p>₱100</p>
          </div>

          <button
            onClick={async () => {
              try {
                const res = await fetch("/api/create-gcash-payment", {
                  method: "POST",
                });

                const data = await res.json();

                console.log("CHECKOUT RESPONSE:", data);

                const checkoutUrl =
                  data?.data?.attributes?.checkout_url;

                if (checkoutUrl) {
                  window.location.href = checkoutUrl;
                } else {
                  alert("Failed to redirect.");
                }
              } catch (err) {
                console.error(err);
                alert("Something went wrong.");
              }
            }}
            className=" rounded-md bg-green-500 text-white w-full mt-3 cursor-pointer p-2"
          >
            Pay with Gcash
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Checkout;