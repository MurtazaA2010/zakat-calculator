import { useLanguage } from "@/hooks/useLanguage";
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
  const { t } = useLanguage();
  const goldNisab = GOLD_NISAB_GRAMS * goldPricePerGram;
  const silverNisab = SILVER_NISAB_GRAMS * silverPricePerGram;
  const activeNisab = useGoldNisab ? goldNisab : silverNisab;

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-secondary p-4">
        <p className="text-sm text-secondary-foreground">
          <strong>{t.recommended}</strong> {t.nisabRecommendation}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">{t.goldPriceLabel}</Label>
          <Input
            type="number"
            min={0}
            value={goldPricePerGram || ""}
            onChange={(e) => onGoldPriceChange(Number(e.target.value) || 0)}
          />
          <p className="text-xs text-muted-foreground">
            {t.goldNisabLabel} {GOLD_NISAB_GRAMS}g = ৳{goldNisab.toLocaleString("en-BD")}
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">{t.silverPriceLabel}</Label>
          <Input
            type="number"
            min={0}
            value={silverPricePerGram || ""}
            onChange={(e) => onSilverPriceChange(Number(e.target.value) || 0)}
          />
          <p className="text-xs text-muted-foreground">
            {t.silverNisabLabel} {SILVER_NISAB_GRAMS}g = ৳{silverNisab.toLocaleString("en-BD")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border p-4">
        <div>
          <Label className="text-sm font-medium">
            {useGoldNisab ? t.useGoldNisab : t.useSilverNisab}
          </Label>
          <p className="text-xs text-muted-foreground">
            {t.currentThreshold} ৳{activeNisab.toLocaleString("en-BD")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{t.silver}</span>
          <Switch checked={useGoldNisab} onCheckedChange={onToggle} />
          <span className="text-xs text-muted-foreground">{t.gold}</span>
        </div>
      </div>
    </div>
  );
};

export default NisabSettings;
export { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS };
