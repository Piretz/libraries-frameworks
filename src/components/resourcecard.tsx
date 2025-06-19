const ResourceCard = ({
  name,
  description,
  url,
  icon,
}: {
  name: string
  description: string
  url: string
  icon: React.ReactNode
}) => {
  return (  
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition duration-300 shadow-md border border-zinc-700 hover:border-blue-500"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-blue-400 group-hover:text-blue-500 transition">{icon}</div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm text-zinc-400">{description}</p>
    </a>
  )
}

export default ResourceCard
