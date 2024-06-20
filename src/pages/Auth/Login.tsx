import LoginForm from "@/components/LoginForm";
import MemoLogo from "@/icons/Logo";
import signIn from "../../assets/images/sign-in.svg";

const Login = () => {
  return (
    <main className="hsection">
      <section className="flex flex-col sm:flex-row relative items-center justify-center sm:justify-between sm:h-screen">
        <section className="w-full sm:w-1/2  justify-center flex flex-col">
          <MemoLogo className="sm:absolute sm:top-20 sm:left-7 w-20 h-20 sm:w-32 sm:h-32" />
          <img src={signIn} className="w-full h-full" alt="sign-in.svg" />
        </section>
        <section className="w-full p-6 sm:w-1/2">
          <div className="space-y-2">
            <h1 className="sm:text-4xl font-bold text-[#213F7D]">Welcome!</h1>
            <p className="text-[#545F7D] text-sm sm:text-base">
              Enter details to login.
            </p>
          </div>
          <LoginForm />
        </section>
      </section>
    </main>
  );
};

export default Login;