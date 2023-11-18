import NavBar from "../components/navbar"

const black = [
    {name:'Earl Grey',description:'Something useful', image:'public\earlgrey.jpg', type:'black'},
    {name:'Assam', description: 'Something else', image:"public\earlgrey.jpg", type:'black'}
]

export default function Black(){
    return(
        <main className="w-screen">
            <div className="p-1">
                <NavBar placeholder="Search"></NavBar>
            </div>

            {black.map((black) =>
            <div className="py-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href='/black/Tea/page.tsx'>
                        <img 
                            className="rounded-t-lg"
                            src={black.image}
                            alt="image isnt working" 
                        />
                    </a>
                    <div className="p-5">
                        <a href='/black/Tea/page.tsx'>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {black.name}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {black.description}
                        </p>
                    </div>
            </div>
            )}
        </main> 
    )
}