const black = [
    {name:'Earl Grey',description:'Something useful',type:'black'}
]

export default function Black(){
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="C:\Users\lewis.harrison\Desktop\Projects\tea-selector-mk2\public\earlgrey.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Earl grey
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Something descripive of earl grey
                </p>
            </div>
        </div>    
    )
}
