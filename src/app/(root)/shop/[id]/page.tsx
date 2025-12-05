import Preview from "@/app/components/shared/Preview"


const page = ({params}: {params: {id: string}}) => {
  const artId = Number(params.id);

  return (
    <div>
        <Preview artId={artId}/>
    </div>
  )
}

export default page
