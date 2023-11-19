'use client'

import NavBar from "@/app/components/navbar"

export default function New(){

    function handleClick(){
        alert('Clicked')
    }

    return(
        <>
            <div><NavBar placeholder='Search'></NavBar></div>

            <div>
                <form className="shadow">
                    <div>
                        <label>Name</label>
                        <input placeholder="Name"/>
                    </div>
                    <div>
                        <label>Dropdown</label>
                        <select>
                            <option>Black</option>
                            <option>Green</option>
                            <option>Misc</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}