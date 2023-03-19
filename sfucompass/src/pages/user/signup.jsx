import SignUpForm from '../../components/user/SignUpForm';

export default function SignUp() {
    return (
      <div className='h-screen w-screen bg-[url(/assets/sfuFountain.webp)] bg-center bg-cover'>
          <div className="backdrop-blur-md h-screen w-screen">
              <div className="w-1/3 h-screen bg-white float-right outline outline-2 outline-red-900 drop-shadow-[-10px_35px_25px_rgba(0,0,0,0.3)]">
                <SignUpForm />
              </div>
  
          </div>
      </div>
    );
  }