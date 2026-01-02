type WhatsAppButtonProps = {
  message?: string;
};

export default function WhatsAppButton({
  message = "Hi, I visited your website and would like to learn more about the courses you offer.",
}: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/919074188818?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="relative p-[1px] rounded-full bg-gradient-to-l from-[#DFAB60] to-[#DFAB601A] w-fit">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] hover:bg-transparent bg-[#111111]"
      >
        <span className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-0.012em]">
          Talk to our Mentor
        </span>
      </a>
    </div>
  );
}
