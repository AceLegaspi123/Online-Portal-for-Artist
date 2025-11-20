import { LuPencil } from "react-icons/lu";

const AboutContent = () => {
  return (
    <div className="w-full xl:max-w-[120em] mx-auto">
      <div className="bg-primary rounded-md p-12 m-4 w-full ">
        <div  id="basic-information" className="flex items-center mb-4 gap-4 text-3xl">
          <h3>Basic Information </h3>
          <LuPencil className="text-lg" />
        </div>

        <div className="flex gap-6">
          <div>
            <label htmlFor="">First Name</label> <br />
            <input
              className="bg-secondary p-4 w-90 border-1 border-primary-line mt-2"
              type="text"
              placeholder="Christian  Jay"
            />
          </div>
          <div>
            <div>
              <label htmlFor="">Last Name</label> <br />
              <input
                className="bg-secondary p-4 w-90 border-1 border-primary-line mt-2"
                type="text"
                placeholder="Escasa"
              />
            </div>
          </div>
        </div>
        <div className="flex  gap-6 mt-4">
          <div>
            <label htmlFor="">User Name</label> <br />
            <input
              className="bg-secondary p-4 w-90 border-1 border-primary-line mt-2"
              type="text"
              placeholder="Christian Jay"
            />
          </div>
        </div>
      </div>

      <div id="address" className="bg-primary rounded-md p-12 m-4 w-full">
        <div className="flex items-center mb-4 gap-4 text-3xl">
          <h3>Address </h3>
          <LuPencil className="text-lg" />
        </div>
        <div className="flex  gap-6">
          <div>
            <label htmlFor="">Country</label> <br />
            <input
              className="bg-secondary p-4 border-1 border-primary-line mt-2"
              type="text"
              placeholder="Philippines"
            />
          </div>
          <div>
            <div>
              <label htmlFor="">City</label> <br />
              <input
                className="bg-secondary p-4 w-90 border-1 border-primary-line mt-2"
                type="text"
                placeholder="Atimonan"
              />
            </div>
          </div>
        </div>
        <div className="flex  gap-6 mt-4">
          <div>
            <label htmlFor="">Province</label> <br />
            <input
              className="bg-secondary p-4 w-90 border-1 border-primary-line mt-2"
              type="text"
              placeholder="Quezon"
            />
          </div>
        </div>
      </div>

      <div id="contact" className="bg-primary rounded-md p-12 m-4 w-full">
        <div className="flex items-center mb-4 gap-4 text-3xl">
          <h3>Contact </h3>
          <LuPencil className="text-lg" />
        </div>
        <div className="flex  gap-6">
          <div>
            <label htmlFor="">Gmail Address</label> <br />
            <input
              className="bg-secondary p-4 w-full h-15 border-1 border-primary-line mt-2"
              type="text"
              placeholder="christianjay692gmail.com"
            />
          </div>
        </div>
        <div className="flex  gap-6 mt-4">
          <div>
            <label htmlFor="">Phone Number</label> <br />
            <input
              className="bg-secondary p-4 w-150 border-1 border-primary-line mt-2"
              type="text"
              placeholder="09**********"
            />
          </div>
        </div>
      </div>

      <div id="about-me" className="bg-primary rounded-md p-12 m-4 w-full">
        <div className="flex items-center mb-4 gap-4 text-3xl">
          <h3>About Me </h3>
          <LuPencil className="text-lg" />
        </div>
        <div className="flex  gap-6">
          <div>
            <label htmlFor="">Section Title</label> <br />
            <input
              className="bg-secondary p-4 w-full h-15 border-1 border-primary-line mt-2"
              type="text"
              placeholder="About"
            />
          </div>
        </div>
        <div className="flex gap-6 mt-4">
          <div className="w-full">
            <label htmlFor="">Description</label> <br />
            <textarea name="" id="" placeholder="text here" className="bg-secondary w-full"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
