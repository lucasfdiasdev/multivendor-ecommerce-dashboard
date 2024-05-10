import LoginForm from "@/components/auth/login-form";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[22rem] space-y-4 p-4">
        <h1 className="text-2xl">Login</h1>
        <p className="text-lg text-gray-500">Acesse sua conta</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default RegisterPage;
