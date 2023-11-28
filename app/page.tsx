import Link from 'next/link'
import NavBar from "./components/navbar"

export default function Home(){
  return(
    <main>
      <div>
        <NavBar placeholder="Search"></NavBar>
      </div>
      <div>
        <p className=" text-white">Something nice and greeting like</p>
      </div>
      <ul>
          <li className="max-w-[50px] bg-white rounded mb-2 text-center">
            <Link  href='./black'>Black</Link>
          </li>
          <li className="max-w-[50px] bg-white rounded mb-2">
            <Link href='./green'>Green</Link>
          </li>
          <li className="max-w-[50px] bg-white rounded mb-2">
            <Link href='./misc'>Misc</Link>
          </li>
      </ul>
    </main>
  )
}