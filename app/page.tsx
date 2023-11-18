const navigation = [
  {name: 'Home', href: '.', current: false},
  {name: 'Black', href: './black', current: false},
  {name: 'Green', href: '#', current: false},
  {name: 'Misc', href: '#', current: false},
]
export default function Home(){
  return(
    <main>
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="(item.current ? 'bg-teal-300 text-white' : 'text-gray-300 hover:bg-teal-300 hover:text-white','rounded-md px-3 py-2 text-sm font-medium')"
            aria-current={item.current ? 'page':undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div>
        <p>Hello</p>
      </div>
    </main>
  )
}