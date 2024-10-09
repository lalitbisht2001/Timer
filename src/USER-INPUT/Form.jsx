import { useState } from "react"
import { users } from "./Data";
const Form = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [allInputData, setallInputData] = useState(users);
    const handleData = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value })
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setallInputData(prev => [...prev, { ...input, id: prev.length + 1 }]);
        setInput({
            name: "",
            email: "",
            password: "",
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name :
                    <input type="text" name="name"
                        value={input.name} placeholder="Enter the full Name"
                        onChange={handleData}
                    />
                </div>
                <div>
                    Email :
                    <input type="email" name="email"
                        value={input.email} placeholder="Enter the E-Mail"
                        onChange={handleData}
                    />
                </div>
                <div>
                    Name :
                    <input type="text" name="password"
                        value={input.password} placeholder="Enter the Password"
                        onChange={handleData}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>Name : {input.name}</p>
                <p>Email : {input.email}</p>
                <p>Password : {input.password}</p>
            </div>
            <div>
                {
                    allInputData.map((user, id) => (
                        <div key={id}>
                            <p>Name : {user.name}</p>
                            <p>Email : {user.email}</p>
                            <p>Password : {user.password}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Form
