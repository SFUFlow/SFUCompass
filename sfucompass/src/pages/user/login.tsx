import LogInForm from '../../components/User/LogInForm';

export default function Login() {
  return (
    <div className='h-screen w-screen bg-[url(/assets/sfuFountain.webp)] bg-center bg-cover'>
        <div className="backdrop-blur-md h-screen w-screen">
            <div className="w-1/5 h-screen px-6 bg-white float-right outline outline-2 outline-red-900 drop-shadow-[-10px_35px_25px_rgba(0,0,0,0.3)]">
                <LogInForm />
            </div>

        </div>
    </div>
  );
}