const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center
                       gap-2 px-7 py-4 border font-montserrat
                        text-lg leading-none rounded-full
                        ${textColor || "text-white"}
                        ${backgroundColor || "bg-coral-red"}
                        ${borderColor || "border-coral-red"}
                        ${fullWidth && "w-full"}
                        transition ease delay-100 hover:bg-opacity-90 duration-200`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
