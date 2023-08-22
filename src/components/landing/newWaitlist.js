import { useEffect, useState } from 'react'
import Image from 'next/image';


const MailSub = (props) => {

    const [isError, setIsError] = useState(null);

    async function submitEmailHandler(e) {
        e.preventDefault()
        const email = e.currentTarget.email.value;
        const body = {
            email_address: email
        }
        try {
            const emailSub = await fetch('./api/waitlistAPI', {
                method: 'POST',
                body: email
            }).then((data) => {
                console.log("This is the response", data)
                if (data.status === 200) {
                    setIsError(false)
                }
                if (data.status === 400) {
                    setIsError(true)
                }
            })
        }
        catch (error) {
            console.log("An unexpected error happened:", error)
            setIsError(true)
            setErrorMessage(error.message)
        }
    }
    return (
        <div>
                <>
                {isError === null && (
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto rounded-lg shadow-lg '>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div>
                                <div className=" flex columns-1 items-center">
                                    <div>
                                        <div className="items-start justify-between mt-4 p-5 rounded-t">
                                            <h3 className="text-3xl text-midnight-blue font-semibold">
                                            Para mas informacion dejanos tu email
                                            </h3>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <form onSubmit={submitEmailHandler} className="grid place-items-center">
                                                <div className="flex border-2 bg-white rounded-full px-12 py-1 mt-3 max-w-md">
                                                    <input className="flex-auto text-center focus:border-white focus:outline-none bg-white  text-black" type="email" name="email" required placeholder="elon@musk.com" />
                                                </div>
                                                <div className="flex submit mt-3 rounded-lg border-white text-xl bg-sky-400 text-white font-medium cursor-pointer hover:opacity-50">
                                                    <button className="font-bold p-3" type="submit">Sign up to learn more!</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    {isError === false && (
                        <div>
                            <div>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                        <div className="absolute top-1 right-2">                                     
                                        </div>
                                        <div className=" flex columns-1 items-center">
                                            <div>
                                                <div className="items-start justify-between mt-4 p-5 rounded-t">
                                                    <h3 className="text-3xl text-midnight-blue font-semibold">
                                                        Gracias por tu informacion. Nos comunicaremos contigo lo antes posible. 
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    {isError === true && (
                        <div>
                            <div>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="absolute top-1 right-2">
                                        </div>
                                        <div className=" flex columns-1 items-center">
                                            <div>
                                                <div className="items-start justify-between mt-4 p-5 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Hmmm parece que hay un error, por favor trata mas tarde
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 place-items-center justify-between">
                                                </div>
                                                <div className="items-start text-center justify-between mt-4 p-5 rounded-t">
                                                    <p className="text-xl">
                                                        Si el error sigue por favor comunicate a <b>bito@bitoverflow.org</b>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                </>
        </div>
    )
}



export default MailSub;