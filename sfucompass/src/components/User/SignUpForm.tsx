import Link from "next/link";
import Image from "next/image";
export default function SignUpForm() {

    return (
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">

                <div className="w-full ">
                    <h1 className="text-xl font-bold uppercase mb-7 text-gray-900 md:text-2xl">
                        lorem ipsum
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" noValidate>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-500 text-gray-500 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5" placeholder="name@mail.com" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-800 checked:bg-red-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="remember" className="text-gray-500">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-red-900 rounded-md p-2">Sign up</button>

                        <div className="flex items-center justify-between w-full">
                            <div className="w-full border-b border-gray-500"></div>

                            <div className="mx-4 text-xs text-center text-gray-500 uppercase">or</div>

                            <div className="w-full border-b border-gray-500"></div>
                        </div>

                        <button type="button" className="w-full text-black outline outline-1 bg-white rounded-md p-2">Sign up with some other shit</button>

                        <div className="flex items-center justify-between">
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link href="/user/login" className="font-medium text-red-900 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                            <a href="#" className="text-sm font-medium text-red-900 hover:underline ">Forgot password?</a>
                        </div>
                    </form>
                </div>

                <p>asdfasdf</p>
            </div>
        </div>
    )

}