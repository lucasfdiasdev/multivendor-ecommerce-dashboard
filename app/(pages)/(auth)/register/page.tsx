import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[22rem] space-y-4 p-4">
        <h1 className="text-2xl">Register</h1>
        <p className="text-lg text-gray-500">Cadastre-se para crir uma conta</p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
