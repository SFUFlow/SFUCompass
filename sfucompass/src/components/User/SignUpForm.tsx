import Link from "next/link";
import { useState } from "react";

interface error {
    message: string;
    cause: string;
}

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
    confirmPassword: HTMLInputElement;
}

interface SignUpForm extends HTMLFormElement {
    readonly elements: FormElements;
}

export default function SignUpForm() {

    const [error, setError] = useState<error | null>(null);

    const checkPassword = (password: string, confirm: string) => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/;
        if (!passwordPattern.test(password)) {
            throw new Error('Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character', {
                cause: 'password',
            });
        }

        if (password !== confirm) {

            throw new Error('Passwords do not match', {
                cause: 'password',
            });
        }
    }

    function isValidEmail(email: string) {
        // Regular expression pattern for validating email addresses
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test the email against the pattern
        if (!emailPattern.test(email)) {
            // Throw an error with a message if the email is invalid
            throw new Error(
                'Please enter a valid email address',
                {
                    cause: 'email',
                }
            );
        }
    }


    const handleSubmit = (e: React.FormEvent<SignUpForm>) => {
        // const email = document.querySelector("#email")?.value;
        // const password = document.querySelector("#password")?.value;
        // const confirmPassword = document.querySelector("#confirmPassword")?.value;
        e.preventDefault();

        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        const confirmPassword = e.currentTarget.elements.confirmPassword.value;

        try {
            console.log(email, password, confirmPassword)
            // isValidEmail(email);
            // checkPassword(password, confirmPassword);
            setError(null);
        } catch (error: any) {
            setError({
                message: error.message,
                cause: error.cause,
            });
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-full">

                <div className="w-full ">
                    <div className="mb-7 text-gray-900">
                        <h1 className="text-2xl font-bold uppercase">
                            Create an account
                        </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className={error?.cause == "email" ? "w-5 h-5 text-red-800" : "w-5 h-5 text-gray-500 invalid:text-red-800"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input type="email" id="email" name="email" className={error?.cause == "email" ? "border-red-700 text-red-800 pl-10 p-2.5 bg-gray-50 border rounded-lg focus:ring-red-800 focus:border-red-800 block w-full" : "invalid:border-red-700 invalid:text-red-800 pl-10 p-2.5 bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full"} placeholder="id@sfu.ca" required />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className={error?.cause == "password" ? "bg-gray-50 border border-red-700 text-red-800 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5" : "bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5"} required />
                        </div>
                        <div>
                            <label for="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className={error?.cause == "password" ? "bg-gray-50 border border-red-700 text-red-800 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5" : "bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5"} required />
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
                        <div>
                            <a className=" text-sm text-red-700 "> {error?.message} </a>
                        </div>
                        {/* divider */}
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

                <img src="/assets/Logo/tail.svg" width={150} draggable={false} className=" mt-6 mr-[100px]" />
            </div>
        </div>
    )

}