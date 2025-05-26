import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
const ForgotPassword = () => {
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-300 to-dark-200 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              ImaginAI
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">
            Reset your password
          </h1>
          <p className="mt-2 text-white/70">
            We'll send you a link to reset your password
          </p>
        </div>
        <Card variant="glass" className="p-6">
          <form>
            <Input label="Email" type="email" placeholder="Enter your email" icon={<MailIcon size={18} />} required />
            <Button type="submit" variant="primary" fullWidth className="mt-2">
              Send Reset Link
            </Button>
          </form>
        </Card>
        <div className="mt-8 text-center">
          <Link to="/signin" className="text-sm text-primary-400 hover:text-primary-300">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>;
};
export default ForgotPassword;