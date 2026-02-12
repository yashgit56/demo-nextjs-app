type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function Dropdown({ value, onChange, options }: DropdownProps) {
  return (
    <div className="relative w-64">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 rounded-xl px-4 py-3 pr-10 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 cursor-pointer"
      >
        {options.map((option: Option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      {/* Custom Arrow */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        ▼
      </div>
    </div>
  );
}
