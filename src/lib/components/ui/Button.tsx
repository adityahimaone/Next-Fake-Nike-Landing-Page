import Image from 'next/image';

import { cn } from '@/lib/styles/utils';

type Props = {
  label: string;
  iconUrl?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
};

const Button = ({
  label,
  iconUrl,
  onClick,
  variant = 'primary',
  fullWidth = false,
}: Props) => {
  const buttonStyles = cn(
    'flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none',
    {
      'bg-coral-red text-white': variant === 'primary',
      'border-slate-gray bg-white text-slate-gray': variant === 'secondary',
      'w-full': fullWidth,
    }
  );

  return (
    <button type="button" onClick={onClick} className={buttonStyles}>
      <span className="font-montserrat text-lg font-semibold">{label}</span>
      {iconUrl && (
        <Image
          src={iconUrl}
          width={24}
          height={24}
          alt="icon"
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
