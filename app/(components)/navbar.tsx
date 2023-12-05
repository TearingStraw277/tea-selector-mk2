import Link from 'next/link'

export default function NavBar() {
    return(
        <nav className="border-4 rounded">
            <a className="pr-4" href=".">Home</a>
            <a href="./Tea">Tea</a>
            <div className="justify-center">
                <Link href="/TeaPage">Click here</Link>
            </div>
        </nav>
    )
}