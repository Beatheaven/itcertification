interface myComponentProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  autoComplete?: string;
  className?: string;
}

export default function InputForm({ type, name, id, placeholder, onChange, autoComplete, onBlur, value, className }: myComponentProps) {
  return <input type={type} name={name} id={id} placeholder={placeholder} className={`w-full py-3 outline-none ${className}`} onChange={onChange} autoComplete={autoComplete} onBlur={onBlur} value={value} />;
}
