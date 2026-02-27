import { useLanguage } from "@/hooks/useLanguage";

interface ResultsPanelProps {
  totalAssets: number;
  totalLiabilities: number;
  netWealth: number;
  nisab: number;
  zakatDue: number;
  isEligible: boolean;
}

const ResultsPanel = ({
  totalAssets,
  totalLiabilities,
  netWealth,
  nisab,
  zakatDue,
  isEligible,
}: ResultsPanelProps) => {
  const { t } = useLanguage();

  return (
    <div className="sticky top-20 rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 font-display text-xl font-bold text-foreground">
        {t.zakatSummary}
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t.totalAssets}</span>
          <span className="font-medium text-foreground">৳{totalAssets.toLocaleString("en-BD")}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t.totalLiabilities}</span>
          <span className="font-medium text-foreground">− ৳{totalLiabilities.toLocaleString("en-BD")}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t.netZakatableWealth}</span>
            <span className="font-semibold text-foreground">৳{netWealth.toLocaleString("en-BD")}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t.nisabThreshold}</span>
          <span className="font-medium text-foreground">৳{nisab.toLocaleString("en-BD")}</span>
        </div>

        <div className={`mt-2 rounded-lg p-4 ${isEligible ? "bg-primary/10" : "bg-secondary"}`}>
          {isEligible ? (
            <>
              <p className="text-sm text-muted-foreground">{t.zakatDue}</p>
              <p className="font-display text-3xl font-bold text-primary">
                ৳{zakatDue.toLocaleString("en-BD", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-foreground">{t.noZakatDue}</p>
              <p className="text-xs text-muted-foreground">{t.belowNisab}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;
