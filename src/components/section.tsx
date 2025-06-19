import ResourceCard from './resourcecard'

interface Resource {
  name: string
  description: string
  url: string
  icon: React.ReactNode
}

const Section = ({
  title,
  items,
}: {
  title: string
  items: Resource[]
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-blue-400">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ResourceCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Section
