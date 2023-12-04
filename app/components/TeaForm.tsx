"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const TeaForm = () => {

    const handleChange = (e) => {
        const value =e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))

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
            <form>
                <h3> Add tea</h3>
                <label>Title</label>
                <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
                >

                </input>
            </form>
        </div>
    )
}

export default TeaForm
