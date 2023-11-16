const navigation = [
  {name: 'Home', href: '.', current: false},
  {name: 'Black', href: '#', current: false},
  {name: 'Green', href: '#', current: false},
  {name: 'Misc', href: '#', current: false},
]
export default function Home(){
  return(
    <div className="flex space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white','rounded-md px-3 py-2 text-sm font-medium')"
          aria-current={item.current ? 'page':undefined}
        >
          {item.name}
        </a>
      ))}
      </div>
  )
}