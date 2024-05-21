import AdminLoginForm from "@/components/forms/admin-login-form";

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[22rem] space-y-4 p-4">
        <h1 className="text-2xl">Login</h1>
        <p className="text-lg text-gray-">Acesse sua conta</p>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
