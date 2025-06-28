import { useState } from "react";
import { Form, Input, Button, Alert, Divider } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
} from "@ant-design/icons";
import { registerUser } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ navigate hook

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");

    try {
      const result = registerUser(values.name, values.email, values.password);

      if (result.success) {
        navigate("/login"); // ✅ Successful signup → go to login page
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign Up would be implemented here");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-primary-700 mb-2">Sign Up</h1>
        <p className="text-gray-600">Create your account to get started.</p>
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
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 2, message: "Name must be at least 2 characters!" },
          ]}
        >
          <Input placeholder="John Doe" className="h-12 text-base" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="johndoe@gmail.com" className="h-12 text-base" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters long." },
          ]}
        >
          <Input.Password
            placeholder="••••••••••"
            className="h-12 text-base"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full h-12 text-base font-semibold bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"
          >
            Create Account
          </Button>
        </Form.Item>

        <Divider className="my-6">or</Divider>

        <Button
          onClick={handleGoogleSignUp}
          className="w-full h-12 text-base font-medium border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2"
        >
          <GoogleOutlined className="text-lg" />
          Sign up with Google
        </Button>

        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <button
            type="button"
            onClick={() => navigate("/login")} // ✅ Login sahifasiga o‘tish
            className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Log in
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
