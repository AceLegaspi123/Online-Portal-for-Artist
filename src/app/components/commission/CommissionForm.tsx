"use client";

import classNames from "clsx";
import { useState } from "react";
import ImgRef from "./ImgRef";
import Details from "./Details";
import Review from "./Review";
import { notify } from "@/utils/toastHelper";
import { getOwnerProfile, getUserProfile, getGmail } from "@/utils/getUser";
import { FinalCommissionData } from "@/types/commission";

const nav = [
  { number: 1, name: "Upload" },
  { number: 2, name: "Details" },
  { number: 3, name: "Review" },
];

interface Props {
  func: (value: boolean) => void;
  userId: string;
}

const CommissionForm = ({ func, userId }: Props) => {
  const [step, setStep] = useState(1);

  // Step data
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    artType: "Digital Art",
    deadline: "",
    budget: "",
  });

  // Final review data
  const [reviewData, setReviewData] = useState<FinalCommissionData | null>(null);

  const handleTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = inputValue.trim();
      if (tag && !tags.includes(tag)) {
        setTags((prev) => [...prev, tag]);
      }
      setInputValue("");
    }
  };


  const handleSubmit = () => {
    if (tags.length < 1) {
      notify("Add at least 1 tag to continue", "error");
      return;
    }

    const finalData: FinalCommissionData = {
      ...formData,
      tags,
      images,
      commissionTo: getUserProfile(userId),
      commissionFrom: getOwnerProfile(),
      createdAt: new Date().toLocaleString(),
    };

    setReviewData(finalData);
    setStep(3);
  };


  // Final Submit
  const handleFinalSubmit = (): FinalCommissionData => {
    if (!reviewData) {
      throw new Error("No review data found");
    }

    notify("Commission sent successfully", "success");

    setTimeout(() => {
      notify("View your order heree", "success");
      window.location.href = "/my-request";
    }, 1500)
    
    return reviewData;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <section className="max-w-5xl rounded-lg shadow-lg overflow-hidden bg-primary">


        <div className="flex justify-between px-6 py-4">
          {nav.map((item) => (
            <div key={item.number} className="flex items-center gap-2">
              <span
                className={classNames(
                  "h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold",
                  {
                    "bg-green-500 text-black": step === item.number,
                    "border border-primary-line opacity-80": step !== item.number,
                  }
                )}
              >
                {item.number}
              </span>
              <span className="hidden sm:block text-sm font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* ===== Content ===== */}
        <div className="relative overflow-hidden rounded-md">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            {/* STEP 1 */}
            <div className="w-full shrink-0 p-6">
              <ImgRef
                images={images}
                setImages={setImages}
                goNext={() => setStep(2)}
                func={func}
              />
            </div>

            {/* STEP 2 */}
            <div className="w-full shrink-0 p-6">
              <Details
                formData={formData}
                tags={tags}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleTag={handleTag}
                removeTag={(tag) =>
                  setTags((prev) => prev.filter((t) => t !== tag))
                }
                handleChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                submit={handleSubmit}
                goBack={() => setStep(1)}
                images={images}
              />
            </div>

            {/* STEP 3 */}
            <div className="w-full shrink-0 p-6">
              {reviewData && (
                <Review
                  formData={reviewData}
                  goBack={() => setStep(2)}
                  submit={handleFinalSubmit}
                  userId={userId}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommissionForm;
