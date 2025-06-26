import { Layout } from "antd";

const { Content } = Layout;

const AuthLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Content className="flex h-full">
        {/* Left side - Inspirational content with full height image */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900">
          <div className="absolute inset-0">
            <img
              src="/public/layout.png" // Rasm manzilini to'g'ri ko'rsating
              alt="ITech Academy"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 flex flex-col justify-between h-full px-12 py-16">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-6 leading-tight text-white">
                At Itechacademy, we don't just teach skills—we shape futures.
                Start your journey with us today.
              </h1>
            </div>

            <div className="text-white">
              <h2 className="text-2xl font-semibold mb-2">
                Komilov Jahongir
              </h2>
              <p className="text-lg opacity-90">CEO</p>
              <p className="text-lg opacity-90">ITech Academy</p>
            </div>
          </div>
        </div>

        {/* Right side - Form content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;