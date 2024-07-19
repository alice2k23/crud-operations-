import React, { useState } from 'react'

function ImageUplaod() {
    const [formData, setFromData] = useState({
        name: "",
        email: "",
        address: ""
    })
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        if (formData.email.includes("@gmail.com")) {
            localStorage.setItem("name", formData.name)
            localStorage.setItem("email", formData.email)
            localStorage.setItem("address", formData.address)
            setSubmitted(true)
        }
        else {
            const message = "Please enter a valid email id "
            document.getElementById("alertInfo").innerHTML = message;
            setTimeout(() => {
                document.getElementById("alertInfo").innerHTML = ""
            }, 3000)
        }
    }
    const handelOnChnage = (e) => {
        const { name, value } = e.target;
        setFromData(
            {
                ...formData,
                [name]: value
            }
        )
        setSubmitted(false)
    }
    const handleDelete = () => {
        setFromData({
            name: "",
            email: "",
            address: ""
        })
        localStorage.clear()
        setSubmitted(false)
        const messagw = "Your Data is deleted Succesfully"
        document.getElementById("alertInfo").innerHTML = messagw;
        setTimeout(() => {
            document.getElementById("alertInfo").innerHTML = "";
        }, 3000)
    }
    return (
        <div className='flex flex-col justify-center items-center border-2 mx-72 mt-2 rounded-lg bg-blue-100 p-10'>
            <div className='text-3xl font-bold text-green-700'>Enter your details</div>
            <div className='text-center flex justify-center items-center flex-col m-10'>
                <div className='input flex flex-col justify-start items-start p-1'>
                    <label htmlFor="name" className='text-xl font-semibold'>Enter your name</label>
                    <input type="text" name="name" value={formData.name} onChange={handelOnChnage} className="h-10 w-72 border-2 rounded-lg p-2 bg-grey-100" />
                </div>
                <div className='input flex flex-col justify-start items-start p-1'>
                    <label htmlFor="email" className='text-xl font-semibold'>Enter your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handelOnChnage} className="h-10 w-72 border-2 rounded-lg p-2 bg-grey-100" />
                </div>
                <div className='input flex flex-col justify-start items-start p-1'>
                    <label htmlFor="address" className='text-xl font-semibold'>Enter your Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handelOnChnage} className="h-10 w-72 border-2 rounded-lg p-2 bg-grey-100" />
                </div>
            </div>

            <button className='border-2 p-2 bg-green-700 text-white font-semibold text-xl rounded-lg ' onClick={handleSubmit}>Submit your Details</button>
            {localStorage.getItem("email") ? <div className='text-center flex flex-col '>
                <h1 className='text-3xl font-bold mt-4'>You Submitted detials :-</h1>
                <span className='m-4 text-xl fomt-semibold'>Your Name is :-  {localStorage.getItem("name") ? localStorage.getItem("name") : "You have not enterd your name"}</span>
                <span className='m-4 text-xl fomt-semibold'>Your Email is :-  {localStorage.getItem("email")}</span>
                <span className='m-4 text-xl fomt-semibold'>Your Address is :-  {localStorage.getItem("address") ? localStorage.getItem("address") : "You have not enterd address"}</span>
            </div> : ""}
            {localStorage.getItem("email") ? <button className='border-2 p-2 bg-red-700 text-white font-semibold text-xl rounded-lg ' onClick={handleDelete} >Delete Details</button> : ""
            }
            <div id='alertInfo' className='text-red-600 text-xl font-semibold '></div>
        </div>


    )
}

export default ImageUplaod
