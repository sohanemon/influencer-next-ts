import bg from "../../assets/login/1_T6Y8YG03wie8W1fQ22AmmQ 1.png";
import Form from "./form";
// import googleLogin from "../../assets/login/google.png";
import { FcGoogle } from "react-icons/fc";
import BottomBar from "./bottom-bar";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <section className='flex mt-6 gap-5'>
        <div>
          <Image src={bg} alt='' className='' />
        </div>
        <div className='grow'>
          <p className='text-2xl font-bold text-center'>
            <span className='text-secondary w-full mx-auto'>
              Welcome to your
            </span>{" "}
            <br />
            <span className='text-primary w-full mx-auto'>
              Social community
            </span>
          </p>
          <p className='text-gray-600 mt-6 text-center'>
            Grow, engage and monetise your community <br />
            with your own social platform
          </p>
          {/* google login button */}
          {/* <button className='block mx-auto'>
          <Image src={googleLogin} alt='' className='' />
        </button> */}

          <button className='flex text-secondary gap-3 py-3 px-10 shadow-md rounded-md mx-auto mt-16 items-center hover:shadow-lg'>
            <FcGoogle className='text-xl' />{" "}
            <span className='text-sm'>Login with Google</span>
          </button>

          <p className='text-xs text-center text-gray-600 my-5'>Or</p>
          <Form />
        </div>
      </section>
      <BottomBar />
    </>
  );
}
