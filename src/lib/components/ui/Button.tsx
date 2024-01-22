import Image from 'next/image';

import { cn } from '@/lib/styles/utils';

type Props = {
  label: string;
  iconUrl?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button = ({ label, iconUrl, onClick, variant = 'primary' }: Props) => {
  const buttonStyles = cn(
    'flex items-center justify-center gap-2 rounded-full border text-lg leading-none px-7 py-4',
    {
      'bg-coral-red text-white': variant === 'primary',
      'bg-white border-slate-gray text-slate-gray': variant === 'secondary',
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
