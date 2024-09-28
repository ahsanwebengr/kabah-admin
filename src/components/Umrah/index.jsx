import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export const CheckboxField = ({ name, label, checked, onChange }) => (
  <label className="flex items-center space-x-2 capitalize">
    <Checkbox name={name} checked={checked} onChange={onChange} />
    <span>{label.replace(/_/g, " ")}</span>
  </label>
);

export const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="">
    <label
      htmlFor={name}
      className="mb-2 text-sm font-medium md:mb-4 md:text-base"
    >
      {label}
    </label>
    <Input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
    />
  </div>
);

export const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="">
    <label
      htmlFor={name}
      className="mb-2 text-sm font-medium md:mb-4 md:text-base"
    >
      {label}
    </label>
    <select name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const FormSection = ({ title, children }) => (
  <div className="rounded-lg bg-white px-5 py-10 shadow-xl">
    <h3>{title}</h3>
    {children}
  </div>
);
