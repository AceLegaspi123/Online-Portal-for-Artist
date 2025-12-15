interface ArtTypeCardProps {
  tag: string;
}

const ArtTypeCard = (tag: string) => {
  return (
    <div className='bg-primary border-2 border-primary-line px-4 py-2 rounded-sm text-sm'>
      {tag}
    </div>
  )
}

export default ArtTypeCard
