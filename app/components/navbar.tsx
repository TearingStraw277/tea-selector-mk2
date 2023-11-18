'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const navigation = [
    {name: 'Home', href: '.', current: false},
    {name: 'Black', href: './black', current: false},
    {name: 'Green', href: './green', current: false},
    {name: 'Misc', href: './misc', current: false}
]

export default function NavBar({ placeholder }:{ placeholder:string}){
    
    function handleSearch(term: string){
        console.log(term);
    }
    return(
        <div className="flex space-x-4 justify-center items-center border-gray-300">
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
        <input 
            className="peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 w-56"
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
        />
        <MagnifyingGlassIcon className="absolue left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    )
}