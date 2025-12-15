"use client";
import classNames from 'clsx';

import Details from "./Details";
import ImgRef from "./ImgRef";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Review from './Review';

const nav = [
    {number: 1, name: "Upload Reference Image"},
    {number: 2, name: "Information"},
    {number: 3, name: "Preview"},
]

interface Props {
  func:  React.Dispatch<React.SetStateAction<boolean>>
}

const CommissionForm = ({func} : Props) => {
  const [isActive, setIsActive] = useState(1);
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [close, setClose] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    artType: "",
    deadline: "",
  });

  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");


  //FORM FOR DETAILS
  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();

      if (newTag && !tags.includes(newTag)) {
        setTags((prev) => [...prev, newTag]);
      }

      setInputValue("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitDetails = () => {
    console.log("Full Data:", { ...formData, tags });
    setIsActive(3);
  };

  return (
    <section>
        <div className="flex justify-between max-w-3xl w-full mx-auto ">
            {
                nav.map(i => (
                    <div className="flex gap-4 font-semibold items-center" key={i.number}>
                        <p className={classNames(' p-2  px-4 rounded-full', {
                          "bg-green-500": i.number == isActive
                        })}>{i.number}</p>
                        <p className="">{i.name}</p>
                    </div>
                ))
            }
        </div>

      <div className="relative max-w-5xl w-full mx-auto mt-4 p-4 flex bg-primary h-165 justify-center gap-20 overflow-hidden">
         <div className={classNames('absolute top-6 transition-all duration-1000 linear opacity-0 z-0', {
          "-left-[52em]" :  isActive == 0,
          "left-58 opacity-100" : isActive == 1
         })}>
                 <ImgRef
                    images={images}
                    setImages={setImages}
                    goNext={() => setIsActive(2)}
                    func={func}
                  />
         </div>  

         <div className={classNames('absolute opacity-0 top-6 w-full max-w-[50em] transition-all duration-1000 z-10 linear ', {
          "-right-[52em]" : isActive == 1,
          "left-25 opacity-100" : isActive == 2
         })}>
          <Details
            formData={formData}
            setFormData={setFormData}
            tags={tags}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleKeyDown={handleTagKeyDown}
            removeTag={handleRemoveTag}
            handleChange={handleFormChange}
            submit={handleSubmitDetails}
            goBack={() => setIsActive(1)}
          />
         </div>

         <div className={classNames('absolute top-18 w-full max-w-[50em] transition-all duration-1000 z-10 linear ', {
          "-right-[52em] hidden" : isActive == 1 || isActive == 2,
          "left-25" : isActive == 3
         })}>
            <Review 
                formData={formData}
                images={images}
                goBack={() => setIsActive(2)}
            />
         </div>
      </div>
    </section>
  )
}

export default CommissionForm
