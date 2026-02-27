import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import SectionCard from "@/components/SectionCard";
import FormField from "@/components/FormField";
import NisabSettings, { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/components/NisabSettings";
import ResultsPanel from "@/components/ResultsPanel";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();

  // Section A: Assets
  const [cashOnHand, setCashOnHand] = useState(0);
  const [cashInBank, setCashInBank] = useState(0);
  const [cashSaved, setCashSaved] = useState(0);
  const [goldValue, setGoldValue] = useState(0);
  const [silverValue, setSilverValue] = useState(0);
  const [stocksValue, setStocksValue] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(0);
  const [pensionValue, setPensionValue] = useState(0);
  const [businessInventory, setBusinessInventory] = useState(0);
  const [businessCash, setBusinessCash] = useState(0);
  const [strongDebts, setStrongDebts] = useState(0);

  // Section B: Liabilities
  const [immediateDebts, setImmediateDebts] = useState(0);
  const [pendingBills, setPendingBills] = useState(0);
  const [longTermInstallments, setLongTermInstallments] = useState(0);
  const [businessLiabilities, setBusinessLiabilities] = useState(0);

  // Section C: Nisab
  const [useGoldNisab, setUseGoldNisab] = useState(false);
  const [goldPricePerGram, setGoldPricePerGram] = useState(9500);
  const [silverPricePerGram, setSilverPricePerGram] = useState(120);

  const totalAssets = useMemo(
    () =>
      cashOnHand + cashInBank + cashSaved + goldValue + silverValue +
      stocksValue + cryptoValue + pensionValue + businessInventory +
      businessCash + strongDebts,
    [cashOnHand, cashInBank, cashSaved, goldValue, silverValue, stocksValue, cryptoValue, pensionValue, businessInventory, businessCash, strongDebts]
  );

  const totalLiabilities = useMemo(
    () => immediateDebts + pendingBills + longTermInstallments + businessLiabilities,
    [immediateDebts, pendingBills, longTermInstallments, businessLiabilities]
  );

  const netWealth = Math.max(totalAssets - totalLiabilities, 0);

  const nisab = useGoldNisab
    ? GOLD_NISAB_GRAMS * goldPricePerGram
    : SILVER_NISAB_GRAMS * silverPricePerGram;

  const isEligible = netWealth >= nisab && nisab > 0;
  const zakatDue = isEligible ? netWealth * 0.025 : 0;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="border-b bg-card py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t.heroDesc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Forms Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Section A */}
            <SectionCard title={t.sectionATitle} subtitle={t.sectionASubtitle} icon="💰">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.cashSavings}
              </p>
              <FormField label={t.cashOnHand} value={cashOnHand} onChange={setCashOnHand} />
              <FormField label={t.cashInBank} value={cashInBank} onChange={setCashInBank} hint={t.cashInBankHint} />
              <FormField label={t.cashSaved} value={cashSaved} onChange={setCashSaved} hint={t.cashSavedHint} />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.goldSilver}
                </p>
              </div>
              <FormField label={t.goldValue} value={goldValue} onChange={setGoldValue} hint={t.goldHint} />
              <FormField label={t.silverValue} value={silverValue} onChange={setSilverValue} hint={t.silverHint} />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.investments}
                </p>
              </div>
              <FormField label={t.stocks} value={stocksValue} onChange={setStocksValue} hint={t.stocksHint} />
              <FormField label={t.crypto} value={cryptoValue} onChange={setCryptoValue} hint={t.cryptoHint} />
              <FormField label={t.pension} value={pensionValue} onChange={setPensionValue} hint={t.pensionHint} />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.businessAssets}
                </p>
              </div>
              <FormField label={t.businessInventory} value={businessInventory} onChange={setBusinessInventory} hint={t.businessInventoryHint} />
              <FormField label={t.businessCash} value={businessCash} onChange={setBusinessCash} />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.moneyOwed}
                </p>
              </div>
              <FormField label={t.strongDebts} value={strongDebts} onChange={setStrongDebts} hint={t.strongDebtsHint} />
            </SectionCard>

            {/* Section B */}
            <SectionCard title={t.sectionBTitle} subtitle={t.sectionBSubtitle} icon="📋">
              <FormField label={t.immediateDebts} value={immediateDebts} onChange={setImmediateDebts} hint={t.immediateDebtsHint} />
              <FormField label={t.pendingBills} value={pendingBills} onChange={setPendingBills} hint={t.pendingBillsHint} />
              <FormField label={t.longTermInstallments} value={longTermInstallments} onChange={setLongTermInstallments} hint={t.longTermInstallmentsHint} />
              <FormField label={t.businessLiabilities} value={businessLiabilities} onChange={setBusinessLiabilities} hint={t.businessLiabilitiesHint} />
            </SectionCard>

            {/* Section C */}
            <SectionCard title={t.sectionCTitle} subtitle={t.sectionCSubtitle} icon="⚖️">
              <NisabSettings
                useGoldNisab={useGoldNisab}
                onToggle={setUseGoldNisab}
                goldPricePerGram={goldPricePerGram}
                silverPricePerGram={silverPricePerGram}
                onGoldPriceChange={setGoldPricePerGram}
                onSilverPriceChange={setSilverPricePerGram}
              />
            </SectionCard>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-1">
            <ResultsPanel
              totalAssets={totalAssets}
              totalLiabilities={totalLiabilities}
              netWealth={netWealth}
              nisab={nisab}
              zakatDue={zakatDue}
              isEligible={isEligible}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default Index;
