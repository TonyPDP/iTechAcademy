import { Layout } from "antd";

const { Content } = Layout;

const AuthLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Content className="flex">
        {/* Left side - Inspirational content */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            }}
          />
          <div className="relative z-10 flex flex-col justify-center px-12 py-16">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                At Itechacademy, we don't just teach skills—we shape futures.
                Start your journey with us today.
              </h1>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-2">
                  Komilov Jahongir
                </h2>
                <p className="text-lg opacity-90">CEO</p>
                <p className="text-lg opacity-90">ITech Academy</p>
              </div>
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
