import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, ImageIcon, SettingsIcon, GalleryHorizontalIcon, MenuIcon, XIcon, LogOutIcon } from 'lucide-react';
import Button from './ui/Button';
interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  hideNav = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon size={20} />
  }, {
    name: 'Generate',
    path: '/generate',
    icon: <ImageIcon size={20} />
  }, {
    name: 'Gallery',
    path: '/gallery',
    icon: <GalleryHorizontalIcon size={20} />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon size={20} />
  }];
  if (hideNav) {
    return <div className="min-h-screen bg-dark-300 text-white">{children}</div>;
  }
  return <div className="flex flex-col md:flex-row min-h-screen bg-dark-300 text-white">
      {/* Mobile Navigation Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10">
        <NavLink to="/dashboard" className="flex items-center">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            ImaginAI
          </span>
        </NavLink>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white/70 hover:text-white">
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden fixed inset-0 z-50 bg-dark-300 pt-16">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `
                  flex items-center p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}
                `} onClick={() => setMobileMenuOpen(false)}>
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>)}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Button variant="ghost" fullWidth className="justify-start" icon={<LogOutIcon size={20} />}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>}
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-dark-200 border-r border-white/10">
        <div className="p-6">
          <NavLink to="/dashboard" className="flex items-center">
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              ImaginAI
            </span>
          </NavLink>
        </div>
        <nav className="flex-1 px-4 pb-4">
          <div className="space-y-2">
            {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
            isActive
          }) => `
                  flex items-center p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}
                `}>
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>)}
          </div>
          <div className="pt-6 mt-6 border-t border-white/10">
            <Button variant="ghost" fullWidth className="justify-start" icon={<LogOutIcon size={20} />}>
              Sign Out
            </Button>
          </div>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>;
};
export default Layout;