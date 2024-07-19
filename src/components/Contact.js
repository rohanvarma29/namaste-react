import Header from "./Header";

const Contact = ()=>{
    return(
        <div className="m-4 p-4">
            <h1 className="font-bold"> Contact Us</h1>

            <form className="py-2 my-2">
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"/>
                <input type="text" className="p-2 m-2 border border-black" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-blue-100 rounded-lg">
                    submit
                </button>
            </form>
        </div>
    )
}

export default Contact;