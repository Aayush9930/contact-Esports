import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Contact_Page() {
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    return <div className="p-4 bg-gray-950 h-screen content-center">
        <div className="flex justify-center">
            <div className="flex flex-col w-1/3 p-6 rounded-md shadow-md border  bg-gray-100">
                <div className="font-bold text-3xl ml-[8.5rem] font-syncopate">Contact Us</div>
                <div className="mt-4 ml-9 font-semibold font-syncopate">First Name</div>
                <input type="text" placeholder="John" className="ml-9 w-5/6  border rounded-sm p-1 my-2" onChange={(e) => {
                    setFirstName(e.target.value)
                }}></input>
                <div className="ml-9 font-semibold font-syncopate">Last Name</div>
                <input type="text" placeholder="Doe" className="ml-9 w-5/6  border rounded-sm p-1 my-2" onChange={(e) => {
                    setLastName(e.target.value)
                }}></input>
                <div className="ml-9 font-semibold font-syncopate">Email</div>
                <input type="text" placeholder="johndoe@gmail.com" className="ml-9 w-5/6 border rounded-sm p-1 my-2 " onChange={(e) => {
                    setUsername(e.target.value)
                }}></input>
                <div className="ml-9 font-semibold font-syncopate">Message</div>
                <input type="text" className="ml-9 w-5/6 h-20  border rounded-sm p-1 my-2" onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
            </div>
        </div>
    </div>
}