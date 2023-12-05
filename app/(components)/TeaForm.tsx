"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const TeaForm = () => {
    const router = useRouter()
    const handleChange = (e) => {
        const value =e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))

    }

    const handleSubmit = async () => {
        //e.preventDefault();
        const res = await fetch("/api/Tea", {
        method: "POST",
        body: JSON.stringify({formData}),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res.ok){
        throw new Error("failed to create ticket")
    }
    router.refresh()
    router.push("/")
    }
    const startingData = {
        title: "",
        description: "",
        type: "",
        available: "True",
        placement: "1"
    }

    const [formData, setFormData] = useState(startingData)

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3> Add tea</h3>
                <label>Title</label>
                <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
                />
                <label>Description</label>
                <textarea
                id="description"
                name="description"
                onChange={handleChange}
                required={true}
                value={formData.description}
                rows= {5}
                />
                <label>Type</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="Black">Black</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                    <option value="Oolong">Oolong</option>
                </select>

                <label>Available</label>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                    id="available"
                    name="available"
                    type="checkbox"
                    value={formData.available}
                    onChange={handleChange}
                    className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>

                <label>Placement</label>
                <div>
                    <input
                    id="placement-1"
                    name="placement"
                    type="radio"
                    onChange={handleChange}
                    value={1}
                    checked={formData.placement == "1"}
                    />
                    <label>1</label>
                    <input
                    id="placement-2"
                    name="placement"
                    type="radio"
                    onChange={handleChange}
                    value={2}
                    checked={formData.placement == "2"}
                    />
                    <label>2</label>
                    <input
                    id="placement-3"
                    name="placement"
                    type="radio"
                    onChange={handleChange}
                    value={3}
                    checked={formData.placement == "3"}
                    />
                    <label>3</label>
                    <input
                    id="placement-4"
                    name="placement"
                    type="radio"
                    onChange={handleChange}
                    value={4}
                    checked={formData.placement == "4"}
                    />
                    <label>4</label>
                </div>

                <button className="rounded bg-blue-700" onClick={handleSubmit}>Add tea</button>
            </form>
        </div>
    )
}

export default TeaForm
