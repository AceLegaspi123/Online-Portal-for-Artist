import users  from "../../../../data/users.json" assert { type: "json" };
import { User } from "@/types/User";
import { IoIosArrowDown } from "react-icons/io";

type ThreeColTableProps = {
  title: string;
  children?: React.ReactNode;
};


const ThreeColTable = ({title, children} : ThreeColTableProps) => {
  return (
    <div className="w-full ">
      <h2 className="mb-4">{title}</h2>

      <table className="bg-primary p-4 w-full border-collapse over *:flow-hidden rounded-xl">
        <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
          <tr>
            <th  className="p-4  text-center">Id</th>
            <th  className="p-4  text-center">Name</th>
            <th  className="p-4  text-center">Date</th>
          </tr>
        </thead>

        <tbody className="">
          {users.slice(0, 5).map((u) => (
            <tr className="" key={u.userId}>
              <td className="p-4  text-center">{u.userId}</td>
              <td  className="p-4  text-center">{u.name}</td>
              <td  className="p-4  text-center">{u.joinedOn}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="border-t-1 border-t-primary-line">
          <tr>
            <td colSpan={3} className="py-2">
              <div className="w-full flex items-center gap-2 justify-center cursor-pointer hover:underline">
                <p>See all</p>
                <IoIosArrowDown className="translate-y-1"/>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ThreeColTable
