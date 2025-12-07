import classNames from 'clsx';

interface Props {
    title: string,
    total: number,
    added: string,
    icons: any
} 

const Metrics = ({title, total, added, icons }: Props) => {
  return (
    <section className={classNames('metrics p-4 w-70 border-l-6  rounded-lg flex flex-col gap-2', {
        "border-orange-500" : title == "Total Requests",
        "border-blue-600" : title == "Pending",
        "border-yellow-500" : title == "On Hold",
        "border-blue-300" : title == "Ongoing",
        "border-green-500" : title == "Completed",
        "border-red-500" : title == "Declined"
    })}>
        <div className="flex justify-between items-center">
             <h3 className="text-lg font-semibold opacity-80">{title}</h3>
             
             <div className="text-2xl bg-secondary p-4 rounded-md">
                {icons}
             </div>
        </div>
        <p className="text-4xl font-bold -mt-4">{total}</p>
        <p>{added}</p>
    </section>
  )
}

export default Metrics
