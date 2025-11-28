import users  from "@/data/users.json";
import { User } from "@/types/User";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const ThreeColTable = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center">
         <h2 className="mb-4">Latest Members</h2>
         <div className="flex gap items-center">
            <p>View All</p>
            <MdArrowForwardIos />
         </div>
      </div>
 

      <table className="bg-primary p-4 w-full border-collapse over *:flow-hidden rounded-xl">
        <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
          <tr>
            <th  className="p-4  text-center">Id</th>
            <th  className="p-4  text-center">Name</th>
            <th  className="p-4  text-center">Date</th>
          </tr>
        </thead>

        <tbody className="">
          {users.slice(0, 7).map((u) => (
            <tr className="" key={u.userId}>
              <td className="p-4  text-center">{u.userId}</td>
              <td  className="p-4  text-center">{u.name}</td>
              <td  className="p-4  text-center">{u.joinedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ThreeColTable
