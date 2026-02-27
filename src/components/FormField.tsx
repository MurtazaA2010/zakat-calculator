import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
}

const FormField = ({ label, value, onChange, hint }: FormFieldProps) => {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          ৳
        </span>
        <Input
          type="number"
          min={0}
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="0"
          className="pl-7"
        />
      </div>
    </div>
  );
};

export default FormField;
