import { useState } from "react";
import { Form, Input, Button, Checkbox, Alert, Divider } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
} from "@ant-design/icons";
import { loginUser } from "../../../utils/auth";

const LoginForm = ({
  onSwitchToSignup,
  onSwitchToForgotPassword,
  onLoginSuccess,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");

    try {
      const result = loginUser(values.email, values.password, values.remember);

      if (result.success) {
        if (onLoginSuccess) {
          onLoginSuccess(result.user);
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google authentication
    alert("Google Sign In would be implemented here");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-primary-700 mb-2">Login</h1>
        <p className="text-gray-600">
          Welcome back! Please enter your details.
        </p>
      </div>

      {error && (
        <Alert
          message={error}
          type="error"
          className="mb-4"
          closable
          onClose={() => setError("")}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
        initialValues={{ remember: false }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Johndoe@gmail.com" className="h-12 text-base" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="••••••••••"
            className="h-12 text-base"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <div className="flex items-center justify-between mb-6">
          <Form.Item name="remember" valuePropName="checked" className="mb-0">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <button
            type="button"
            onClick={onSwitchToForgotPassword}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
          >
            Forgot password
          </button>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full h-12 text-base font-semibold bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"
          >
            Sign In
          </Button>
        </Form.Item>

        <Divider className="my-6">or</Divider>

        <Button
          onClick={handleGoogleSignIn}
          className="w-full h-12 text-base font-medium border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2"
        >
          <GoogleOutlined className="text-lg" />
          Sign in with Google
        </Button>

        <div className="text-center mt-6">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Sign up
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
