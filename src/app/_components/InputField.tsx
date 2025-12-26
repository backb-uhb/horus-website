interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = ({ label, error, ...props }: InputFieldProps) => {
  return (
    <div>
      <label className="mb-1 block text-sm text-white/70">
        {label}
      </label>

      <input
        {...props}
        autoComplete="off"
        className={`w-full rounded-xl px-4 py-3 bg-black/50 text-white placeholder-white/40 outline-none border
          ${error ? "border-red-500" : "border-white/10"}
          focus:border-[#ECB76A] focus:bg-black/50
          [&:-webkit-autofill]:!bg-black/50
          [&:-webkit-autofill]:[-webkit-text-fill-color:white]
          [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_rgba(0,0,0,0.5)_inset]
          [&:-webkit-autofill:hover]:[-webkit-box-shadow:0_0_0_1000px_rgba(0,0,0,0.5)_inset]
          [&:-webkit-autofill:focus]:[-webkit-box-shadow:0_0_0_1000px_rgba(0,0,0,0.5)_inset]`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;