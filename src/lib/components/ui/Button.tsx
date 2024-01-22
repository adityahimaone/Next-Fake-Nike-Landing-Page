import Image from 'next/image';

type Props = {
  label: string;
  iconUrl?: string;
  onClick?: () => void;
};

const Button = ({ label, iconUrl, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-full border bg-coral-red px-7 py-4 text-lg leading-none text-white"
    >
      <span className="font-montserrat text-lg font-bold">{label}</span>
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
