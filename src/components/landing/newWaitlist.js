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
                    setCookie('modalVisibility', false)
                }
                if (data.status === 400) {
                    setIsError(true)
                }
            })
        }
        catch (error) {
            console.log("An unexpected error happened:", error)
        }
    }
    return (
        <div>
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl'>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="absolute top-2 right-2">
                                </div>
                                <div className=" flex columns-1 items-center">
                                    <div>
                                        <div className="items-start justify-between mt-4 p-5 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Let's keep in touch, drop your email below!
                                            </h3>
                                        </div>
                                        <div className="text-center font-medium text-sm">
                                            Oh, did we mention. If you sign up we give you $500 off...
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <form onSubmit={submitEmailHandler} className="grid place-items-center">
                                                <div className="flex border-black border-2 rounded-full px-12 py-1 mt-3 max-w-md">
                                                    <input className="flex-auto text-center focus:border-white focus:outline-none bg-transparent" type="email" name="email" required placeholder="supercool@email.com" />
                                                </div>
                                                <div className="flex submit mt-3 bg-gradient-to-br from-nft-cotton to-nft-purple text-white rounded-full">
                                                    <button className="font-bold p-3" type="submit">Sign up to learn more!</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    {isError === false && (
                        <div>
                            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="absolute top-1 right-2">                                     
                                        </div>
                                        <div className=" flex columns-1 items-center">
                                            <div>
                                                <div className="items-start justify-between mt-4 p-5 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Great! Thanks someone will be in touch shortly!
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 place-items-center justify-between">
                                                </div>
                                                <div className="items-start text-center justify-between mt-4 p-5 rounded-t">
                                                    <p className="text-lg">
                                                        Not kidding thank you we are actually dancing....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>)}
                    {isError === true && (
                        <div>
                            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="absolute top-1 right-2">
                                        </div>
                                        <div className=" flex columns-1 items-center">
                                            <div>
                                                <div className="items-start justify-between mt-4 p-5 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Ooops! There was an error please try again later!
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 place-items-center justify-between">
                                                </div>
                                                <div className="items-start text-center justify-between mt-4 p-5 rounded-t">
                                                    <p className="text-xl">
                                                        If the error persits please contact <b>bito@bitoverflow.org</b> directly
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>)}

                </>
        </div>
    )
}



export default MailSub;