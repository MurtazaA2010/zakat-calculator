import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import SectionCard from "@/components/SectionCard";
import FormField from "@/components/FormField";
import NisabSettings, { GOLD_NISAB_GRAMS, SILVER_NISAB_GRAMS } from "@/components/NisabSettings";
import ResultsPanel from "@/components/ResultsPanel";

const Index = () => {
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
            Calculate Your Zakat
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A simple, accurate Zakat calculator following the Hanafi school of thought. 
            Enter your assets and liabilities to determine your Zakat obligation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Forms Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Section A */}
            <SectionCard title="Zakatable Assets" subtitle="What you own" icon="💰">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Cash & Savings
              </p>
              <FormField label="Cash on Hand" value={cashOnHand} onChange={setCashOnHand} />
              <FormField label="Cash in Bank Accounts" value={cashInBank} onChange={setCashInBank} hint="Checking & savings accounts" />
              <FormField label="Cash Saved for Specific Purposes" value={cashSaved} onChange={setCashSaved} hint="Hajj, wedding, house deposit, etc." />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Gold & Silver (Hanafi: Include ALL jewelry)
                </p>
              </div>
              <FormField label="Value of Gold" value={goldValue} onChange={setGoldValue} hint="Market value of all gold including jewelry" />
              <FormField label="Value of Silver" value={silverValue} onChange={setSilverValue} hint="Market value of all silver" />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Investments & Retirement
                </p>
              </div>
              <FormField label="Shares, Stocks & Mutual Funds" value={stocksValue} onChange={setStocksValue} hint="Current market value" />
              <FormField label="Cryptocurrency" value={cryptoValue} onChange={setCryptoValue} hint="Current market value" />
              <FormField label="Pensions & Retirement Funds" value={pensionValue} onChange={setPensionValue} hint="Currently withdrawable amount minus penalties" />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Business Assets
                </p>
              </div>
              <FormField label="Business Inventory / Merchandise" value={businessInventory} onChange={setBusinessInventory} hint="Market value of goods held for sale" />
              <FormField label="Cash in Business Accounts" value={businessCash} onChange={setBusinessCash} />

              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Money Owed to You
                </p>
              </div>
              <FormField label="Strong Debts" value={strongDebts} onChange={setStrongDebts} hint="Money lent that you expect to be repaid" />
            </SectionCard>

            {/* Section B */}
            <SectionCard title="Deductible Liabilities" subtitle="What you owe" icon="📋">
              <FormField label="Immediate Debts" value={immediateDebts} onChange={setImmediateDebts} hint="Credit cards, personal loans due, overdrafts" />
              <FormField label="Pending Bills" value={pendingBills} onChange={setPendingBills} hint="Rent, utilities, taxes currently due" />
              <FormField label="Long-Term Debt Installments" value={longTermInstallments} onChange={setLongTermInstallments} hint="Next 12 months of mortgage, student loans, etc." />
              <FormField label="Business Liabilities" value={businessLiabilities} onChange={setBusinessLiabilities} hint="Unpaid wages, immediate business debts" />
            </SectionCard>

            {/* Section C */}
            <SectionCard title="Nisab Settings" subtitle="Zakat eligibility threshold" icon="⚖️">
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
        <p>This calculator follows the Hanafi school of thought. Consult a scholar for specific rulings.</p>
      </footer>
    </div>
  );
};

export default Index;
