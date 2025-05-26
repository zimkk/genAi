import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  required?: boolean;
  name?: string;
  icon?: React.ReactNode;
}
const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  error,
  required = false,
  name,
  icon
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = type === 'password' ? showPassword ? 'text' : 'password' : type;
  return <div className={`mb-4 ${className}`}>
      {label && <label className="block text-sm font-medium text-white/80 mb-1">
          {label}
          {required && <span className="text-secondary-400 ml-1">*</span>}
        </label>}
      <div className={`
        relative rounded-lg border transition-all duration-200
        ${error ? 'border-red-500' : isFocused ? 'border-primary-400' : 'border-white/20'}
        ${error ? 'bg-red-500/5' : 'bg-white/5'}
        backdrop-blur-sm
      `}>
        <div className="flex items-center">
          {icon && <div className="pl-3 text-white/50">{icon}</div>}
          <input type={inputType} name={name} className={`
              w-full bg-transparent py-2.5 px-3 text-white placeholder:text-white/40
              focus:outline-none
              ${icon ? 'pl-2' : ''}
            `} placeholder={placeholder} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} required={required} />
          {type === 'password' && <button type="button" onClick={togglePasswordVisibility} className="pr-3 text-white/50 hover:text-white/80 transition-colors">
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>}
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>;
};
export default Input;