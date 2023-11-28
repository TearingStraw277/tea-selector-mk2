import NavBar from "app/components/navbar"

const black = [
    {id: '1', name:'Earl Grey',description:'Something useful', image:'public/earlgrey.jpg', type:'black'},
    {id:'2', name:'Assam', description: 'Something else', image:"public/earlgrey.jpg", type:'black'}
]

export default function Black(){
    return(
        <main className="w-screen">
            <div className="object-fill object-top mb-5 h-25">
                <NavBar placeholder="Search"></NavBar>
            </div>

            {black.map((black) =>
            <a key={black.id}>
                <li 
                    className="max-w-[250px] ml-5 mb-2 bg-sky-400 hover:bg-sky-500" 
                >
                    <img
                        className="rounded-t-lg"
                        src={black.image}
                        alt="image isnt working" 
                    />
                    <h5 className="max-w-sm mb-2 text-2xl font-bold tracking-tight text-black">
                        {black.name}
                    </h5>
                    <p className="max-w-sm mb-3 font-normal text-black">
                        {black.description}
                    </p>
                </li>
            </a>
            )}
        </main> 
    )
}