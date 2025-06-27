import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { ArrowLeftOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { requestPasswordReset } from "../../../utils/auth";

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");

    try {
      const result = requestPasswordReset(values.email);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="text-center mb-6">
          <CheckCircleOutlined className="text-6xl text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-primary-700 mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600">
            We've sent password reset instructions to your email address.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or try again.
          </p>

          <Button
            onClick={() => setSuccess(false)}
            className="w-full h-12 text-base font-medium"
          >
            Try Different Email
          </Button>

          <Button
            type="primary"
            onClick={onBackToLogin}
            className="w-full h-12 text-base font-semibold bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"
          >
            Back to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      // className="flex flex-col mt-[50%] justify-center bg-white p-8 rounded-lg shadow-lg mb-[100%]"
      className="flex flex-col my-[42%] bg-white p-8 rounded-lg shadow-lg"
    >
      <div className=" flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-2">
          Forgot Password
        </h1>
        <p className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your
          password.
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full h-12 text-base font-semibold bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700"
          >
            Send Reset Instructions
          </Button>
        </Form.Item>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeftOutlined />
            Back to Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
