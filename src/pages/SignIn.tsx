import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LockIcon, GithubIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
const SignIn = () => {
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-300 to-dark-200 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              ImaginAI
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-white/70">Sign in to your account</p>
        </div>
        <Card variant="glass" className="p-6">
          <form>
            <Input label="Email" type="email" placeholder="Enter your email" icon={<MailIcon size={18} />} required />
            <Input label="Password" type="password" placeholder="Enter your password" icon={<LockIcon size={18} />} required />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary-400 hover:text-primary-300">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              Sign In
            </Button>
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-200 text-white/50">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="secondary" fullWidth>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </Button>
              <Button variant="secondary" fullWidth icon={<GithubIcon size={20} />}>
                GitHub
              </Button>
            </div>
          </form>
        </Card>
        <p className="mt-8 text-center text-sm text-white/70">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-primary-400 hover:text-primary-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>;
};
export default SignIn;