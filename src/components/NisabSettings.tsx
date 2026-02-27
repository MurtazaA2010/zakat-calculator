import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface NisabSettingsProps {
  useGoldNisab: boolean;
  onToggle: (value: boolean) => void;
  goldPricePerGram: number;
  silverPricePerGram: number;
  onGoldPriceChange: (value: number) => void;
  onSilverPriceChange: (value: number) => void;
}

const GOLD_NISAB_GRAMS = 87.48;
const SILVER_NISAB_GRAMS = 612.36;

const NisabSettings = ({
  useGoldNisab,
  onToggle,
  goldPricePerGram,
  silverPricePerGram,
  onGoldPriceChange,
  onSilverPriceChange,
}: NisabSettingsProps) => {
  const goldNisab = GOLD_NISAB_GRAMS * goldPricePerGram;
  const silverNisab = SILVER_NISAB_GRAMS * silverPricePerGram;
  const activeNisab = useGoldNisab ? goldNisab : silverNisab;

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-secondary p-4">
        <p className="text-sm text-secondary-foreground">
          <strong>Recommended:</strong> Hanafi scholars recommend using the Silver Nisab, 
          as its lower threshold means more people qualify to pay Zakat, benefiting the poor.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Gold Price per Gram (৳)</Label>
          <Input
            type="number"
            min={0}
            value={goldPricePerGram || ""}
            onChange={(e) => onGoldPriceChange(Number(e.target.value) || 0)}
            placeholder="Enter current gold price"
          />
          <p className="text-xs text-muted-foreground">
            Gold Nisab: {GOLD_NISAB_GRAMS}g = ৳{goldNisab.toLocaleString("en-BD")}
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Silver Price per Gram (৳)</Label>
          <Input
            type="number"
            min={0}
            value={silverPricePerGram || ""}
            onChange={(e) => onSilverPriceChange(Number(e.target.value) || 0)}
            placeholder="Enter current silver price"
          />
          <p className="text-xs text-muted-foreground">
            Silver Nisab: {SILVER_NISAB_GRAMS}g = ৳{silverNisab.toLocaleString("en-BD")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border p-4">
        <div>
          <Label className="text-sm font-medium">
            Use {useGoldNisab ? "Gold" : "Silver"} Nisab
          </Label>
          <p className="text-xs text-muted-foreground">
            Current threshold: ৳{activeNisab.toLocaleString("en-BD")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Silver</span>
          <Switch checked={useGoldNisab} onCheckedChange={onToggle} />
          <span className="text-xs text-muted-foreground">Gold</span>
        </div>
      </div>
    </div>
  );
};

export default NisabSettings;
export { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS };
