import { Card } from "primereact/card";
import { Link } from "react-router";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="hidden w-1/2 lg:block">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
            alt="login"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center overflow-y-auto p-2 lg:w-1/2 ">
        <Card
          title="Sign Up"
          pt={{
            root: {
              className:
                "w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 lg:px-6 py-10",
            },
            title: {
              className:
                "!text-5xl text-[#282f33] font-bold  text-center !mb-2",
            },
            subTitle: {
              className: "!text-sm text-center text-gray-500",
            },
          }}
          subTitle="Please enter your details to create an account"
        >
          <RegisterForm />
          <div className="mt-4 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
