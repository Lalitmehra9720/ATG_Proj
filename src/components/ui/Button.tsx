type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-[10px]
        h-[44px] px-[28px] py-[12px] rounded-[5px] bg-gradient-to-r from-[#FF9898] to-[#8054FF] transform ease-in-out hover:scale-95   hover:shadow-2xl transition-all duration-300
        text-sm font-medium text-white font-poppins  cursor-pointer 
        hover:opacity-90
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}
