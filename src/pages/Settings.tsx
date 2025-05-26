import React, { useState } from 'react';
import { UserIcon, MailIcon, LockIcon, CreditCardIcon, BellIcon, TrashIcon, MoonIcon, SunIcon, AlertTriangleIcon } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Toggle from '../components/ui/Toggle';
interface SettingsProps {
  setTheme: (theme: string) => void;
}
const Settings: React.FC<SettingsProps> = ({
  setTheme
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
  };
  return <Layout>
      <div className="p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Settings</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-3">
            <Card variant="glass" className="p-4 sticky top-6">
              <nav>
                <ul className="space-y-1">
                  <li>
                    <a href="#account" className="flex items-center p-3 rounded-lg bg-white/10 text-white">
                      <UserIcon size={18} className="mr-3" />
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#appearance" className="flex items-center p-3 rounded-lg text-white/60 hover:bg-white/5 hover:text-white">
                      <SunIcon size={18} className="mr-3" />
                      Appearance
                    </a>
                  </li>
                  <li>
                    <a href="#billing" className="flex items-center p-3 rounded-lg text-white/60 hover:bg-white/5 hover:text-white">
                      <CreditCardIcon size={18} className="mr-3" />
                      Billing
                    </a>
                  </li>
                  <li>
                    <a href="#notifications" className="flex items-center p-3 rounded-lg text-white/60 hover:bg-white/5 hover:text-white">
                      <BellIcon size={18} className="mr-3" />
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#danger" className="flex items-center p-3 rounded-lg text-white/60 hover:bg-white/5 hover:text-white">
                      <AlertTriangleIcon size={18} className="mr-3" />
                      Danger Zone
                    </a>
                  </li>
                </ul>
              </nav>
            </Card>
          </div>
          {/* Settings Content */}
          <div className="lg:col-span-9 space-y-8">
            {/* Account Settings */}
            <section id="account">
              <h2 className="text-xl font-bold mb-4">Account Settings</h2>
              <Card variant="glass" className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                        A
                      </div>
                      <button className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 text-white hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                          <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <form className="space-y-4">
                      <Input label="Full Name" type="text" placeholder="Your name" value="Alex Chen" icon={<UserIcon size={18} />} />
                      <Input label="Email Address" type="email" placeholder="Your email" value="alex@example.com" icon={<MailIcon size={18} />} />
                      <Button type="submit" variant="primary">
                        Save Changes
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
              <Card variant="glass" className="p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <form className="space-y-4">
                  <Input label="Current Password" type="password" placeholder="Enter current password" icon={<LockIcon size={18} />} />
                  <Input label="New Password" type="password" placeholder="Enter new password" icon={<LockIcon size={18} />} />
                  <Input label="Confirm New Password" type="password" placeholder="Confirm new password" icon={<LockIcon size={18} />} />
                  <Button type="submit" variant="primary">
                    Update Password
                  </Button>
                </form>
              </Card>
            </section>
            {/* Appearance Settings */}
            <section id="appearance">
              <h2 className="text-xl font-bold mb-4">Appearance</h2>
              <Card variant="glass" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Theme</h3>
                    <div className="flex items-center">
                      <div className={`flex items-center space-x-2 p-3 rounded-l-lg ${isDarkMode ? 'bg-white/10' : 'bg-white/5'}`}>
                        <MoonIcon size={20} className={isDarkMode ? 'text-primary-400' : 'text-white/60'} />
                        <span className={isDarkMode ? 'text-white' : 'text-white/60'}>
                          Dark
                        </span>
                      </div>
                      <div className="p-2 bg-white/10">
                        <div className="relative">
                          <input type="checkbox" id="theme-toggle" className="sr-only" checked={!isDarkMode} onChange={handleThemeToggle} />
                          <label htmlFor="theme-toggle" className={`
                              block w-14 h-7 rounded-full transition-colors duration-200 ease-in-out cursor-pointer
                              ${isDarkMode ? 'bg-primary-500/20' : 'bg-primary-500'}
                            `}>
                            <span className={`
                                block w-5 h-5 mt-1 ml-1 bg-white rounded-full transition-transform duration-200 ease-in-out
                                ${!isDarkMode ? 'transform translate-x-7' : ''}
                              `}></span>
                          </label>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-2 p-3 rounded-r-lg ${!isDarkMode ? 'bg-white/10' : 'bg-white/5'}`}>
                        <SunIcon size={20} className={!isDarkMode ? 'text-primary-400' : 'text-white/60'} />
                        <span className={!isDarkMode ? 'text-white' : 'text-white/60'}>
                          Light
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
            {/* Billing Settings */}
            <section id="billing">
              <h2 className="text-xl font-bold mb-4">Billing</h2>
              <Card variant="glass" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold">Current Plan</h3>
                    <p className="text-white/70">Free</p>
                  </div>
                  <Button variant="primary">Upgrade Plan</Button>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <h3 className="font-semibold mb-4">Available Plans</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Free</h4>
                          <p className="text-white/70">5 generations per day</p>
                        </div>
                        <div className="text-xl font-bold">$0</div>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">
                          Current Plan
                        </span>
                      </div>
                    </div>
                    <div className="p-4 border border-primary-500 rounded-lg bg-primary-500/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Creator</h4>
                          <p className="text-white/70">
                            50 generations per day
                          </p>
                        </div>
                        <div className="text-xl font-bold">
                          $15
                          <span className="text-sm font-normal text-white/70">
                            /month
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded">
                          Popular
                        </span>
                        <Button variant="primary" size="sm">
                          Select Plan
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Professional</h4>
                          <p className="text-white/70">Unlimited generations</p>
                        </div>
                        <div className="text-xl font-bold">
                          $39
                          <span className="text-sm font-normal text-white/70">
                            /month
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <Button variant="secondary" size="sm">
                          Select Plan
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
            {/* Notification Settings */}
            <section id="notifications">
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              <Card variant="glass" className="p-6">
                <div className="space-y-6">
                  <Toggle enabled={true} onChange={() => {}} label="Email Notifications" description="Receive email updates about your account and generations" />
                  <Toggle enabled={false} onChange={() => {}} label="Marketing Emails" description="Receive promotional offers and news about new features" />
                  <Toggle enabled={true} onChange={() => {}} label="Generation Completion" description="Get notified when your image generations are complete" />
                </div>
              </Card>
            </section>
            {/* Danger Zone */}
            <section id="danger">
              <h2 className="text-xl font-bold mb-4">Danger Zone</h2>
              <Card variant="glass" className="p-6 border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-red-400">
                      Delete Account
                    </h3>
                    <p className="text-white/70">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button variant="secondary" className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20" icon={<TrashIcon size={18} />} onClick={() => setShowDeleteConfirm(true)}>
                    Delete Account
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>
        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <Card variant="glass" className="p-6 max-w-md w-full">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <AlertTriangleIcon size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">
                  Delete Account
                </h3>
                <p className="mt-2 text-white/70">
                  This action cannot be undone. All your data, including
                  generated images, will be permanently deleted.
                </p>
              </div>
              <div className="space-y-4">
                <Input label="Type 'delete' to confirm" type="text" placeholder="delete" />
                <div className="flex space-x-4">
                  <Button variant="secondary" fullWidth onClick={() => setShowDeleteConfirm(false)}>
                    Cancel
                  </Button>
                  <Button variant="secondary" fullWidth className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20">
                    Delete Forever
                  </Button>
                </div>
              </div>
            </Card>
          </div>}
      </div>
    </Layout>;
};
export default Settings;