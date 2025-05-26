import React from 'react';
interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
  label?: string;
  description?: string;
  className?: string;
}
const Toggle: React.FC<ToggleProps> = ({
  enabled,
  onChange,
  label,
  description,
  className = ''
}) => {
  return <div className={`flex items-center justify-between ${className}`}>
      <div className="flex flex-col">
        {label && <span className="font-medium text-white">{label}</span>}
        {description && <span className="text-sm text-white/60">{description}</span>}
      </div>
      <button type="button" className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:outline-none
          ${enabled ? 'bg-primary-500' : 'bg-white/20'}
        `} role="switch" aria-checked={enabled} onClick={onChange}>
        <span className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg
            transition duration-200 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}
          `} />
      </button>
    </div>;
};
export default Toggle;