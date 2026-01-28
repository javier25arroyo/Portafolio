import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: string;
}

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '', color }) => {
  const iconSize = sizes[size] || 24;
  const iconKey = name.charAt(0).toUpperCase() + name.slice(1);
  const LucideIcon = (LucideIcons as any)[iconKey];

  if (LucideIcon) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      >
        <LucideIcon
          size={iconSize}
          color={color}
          className={className}
          aria-label={`${name} icon`}
        />
      </motion.span>
    );
  }
  // Fallback: letra inicial
  return (
    <span
      className={`inline-flex items-center justify-center rounded bg-slate-300 dark:bg-slate-600 text-xs text-slate-600 dark:text-slate-300 ${className}`}
      style={{ width: iconSize, height: iconSize }}
    >
      {name.charAt(0).toUpperCase()}
    </span>

  );
};

export default Icon;
