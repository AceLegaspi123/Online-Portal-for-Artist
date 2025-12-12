import Details from "./Details";
import ImgRef from "./ImgRef";
import { MdKeyboardArrowRight } from "react-icons/md";


const nav = [
    {number: 1, name: "Upload Reference Image"},
    {number: 2, name: "Information"},
    {number: 3, name: "Preview"},
]

const CommissionForm = () => {
  return (
    <section>
        <div className="flex justify-between max-w-3xl w-full mx-auto ">
            {
                nav.map(i => (
                    <div className="flex gap-4 font-semibold items-center" key={i.number}>
                        <p className="bg-green-500 p-2  px-4 rounded-full">{i.number}</p>
                        <p className="">{i.name}</p>
                    </div>
                ))
            }
        </div>

      <div className="max-w-5xl w-full mx-auto mt-4 p-4 flex relative bg-primary h-155 justify-center">
         {/* <Details  /> */}
         <ImgRef />
      </div>


     
    </section>
  )
}

export default CommissionForm
