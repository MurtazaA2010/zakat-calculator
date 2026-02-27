export type Language = "en" | "bn";

export const translations = {
  en: {
    // Navbar
    navTitle: "Zakat Calculator",
    navSubtitle: "Hanafi School — Accurate & Simple",

    // Hero
    heroTitle: "Calculate Your Zakat",
    heroDesc: "A simple, accurate Zakat calculator following the Hanafi school of thought. Enter your assets and liabilities to determine your Zakat obligation.",

    // Section A
    sectionATitle: "Zakatable Assets",
    sectionASubtitle: "What you own",
    cashSavings: "Cash & Savings",
    cashOnHand: "Cash on Hand",
    cashInBank: "Cash in Bank Accounts",
    cashInBankHint: "Checking & savings accounts",
    cashSaved: "Cash Saved for Specific Purposes",
    cashSavedHint: "Hajj, wedding, house deposit, etc.",
    goldSilver: "Gold & Silver (Hanafi: Include ALL jewelry)",
    goldValue: "Value of Gold",
    goldHint: "Market value of all gold including jewelry",
    silverValue: "Value of Silver",
    silverHint: "Market value of all silver",
    investments: "Investments & Retirement",
    stocks: "Shares, Stocks & Mutual Funds",
    stocksHint: "Current market value",
    crypto: "Cryptocurrency",
    cryptoHint: "Current market value",
    pension: "Pensions & Retirement Funds",
    pensionHint: "Currently withdrawable amount minus penalties",
    businessAssets: "Business Assets",
    businessInventory: "Business Inventory / Merchandise",
    businessInventoryHint: "Market value of goods held for sale",
    businessCash: "Cash in Business Accounts",
    moneyOwed: "Money Owed to You",
    strongDebts: "Strong Debts",
    strongDebtsHint: "Money lent that you expect to be repaid",

    // Section B
    sectionBTitle: "Deductible Liabilities",
    sectionBSubtitle: "What you owe",
    immediateDebts: "Immediate Debts",
    immediateDebtsHint: "Credit cards, personal loans due, overdrafts",
    pendingBills: "Pending Bills",
    pendingBillsHint: "Rent, utilities, taxes currently due",
    longTermInstallments: "Long-Term Debt Installments",
    longTermInstallmentsHint: "Next 12 months of mortgage, student loans, etc.",
    businessLiabilities: "Business Liabilities",
    businessLiabilitiesHint: "Unpaid wages, immediate business debts",

    // Section C
    sectionCTitle: "Nisab Settings",
    sectionCSubtitle: "Zakat eligibility threshold",
    nisabRecommendation: "Hanafi scholars recommend using the Silver Nisab, as its lower threshold means more people qualify to pay Zakat, benefiting the poor.",
    recommended: "Recommended:",
    goldPriceLabel: "Gold Price per Gram (৳)",
    silverPriceLabel: "Silver Price per Gram (৳)",
    goldNisabLabel: "Gold Nisab:",
    silverNisabLabel: "Silver Nisab:",
    useGoldNisab: "Use Gold Nisab",
    useSilverNisab: "Use Silver Nisab",
    currentThreshold: "Current threshold:",
    silver: "Silver",
    gold: "Gold",

    // Results
    zakatSummary: "Zakat Summary",
    totalAssets: "Total Assets",
    totalLiabilities: "Total Liabilities",
    netZakatableWealth: "Net Zakatable Wealth",
    nisabThreshold: "Nisab Threshold",
    zakatDue: "Your Zakat Due (2.5%)",
    noZakatDue: "No Zakat Due",
    belowNisab: "Your net wealth is below the Nisab threshold.",

    // Footer
    footer: "This calculator follows the Hanafi school of thought. Consult a scholar for specific rulings.",

    // Language
    langToggle: "বাংলা",
  },
  bn: {
    // Navbar
    navTitle: "যাকাত ক্যালকুলেটর",
    navSubtitle: "হানাফী মাযহাব — সঠিক ও সহজ",

    // Hero
    heroTitle: "আপনার যাকাত হিসাব করুন",
    heroDesc: "হানাফী মাযহাব অনুসারে একটি সহজ ও সঠিক যাকাত ক্যালকুলেটর। আপনার সম্পদ ও দায় লিখুন এবং যাকাতের পরিমাণ জানুন।",

    // Section A
    sectionATitle: "যাকাতযোগ্য সম্পদ",
    sectionASubtitle: "আপনার যা আছে",
    cashSavings: "নগদ অর্থ ও সঞ্চয়",
    cashOnHand: "হাতে নগদ",
    cashInBank: "ব্যাংকে জমা অর্থ",
    cashInBankHint: "চলতি ও সঞ্চয়ী হিসাব",
    cashSaved: "নির্দিষ্ট উদ্দেশ্যে সঞ্চিত অর্থ",
    cashSavedHint: "হজ্জ, বিয়ে, বাড়ি কেনা ইত্যাদি",
    goldSilver: "স্বর্ণ ও রৌপ্য (হানাফী: সকল অলংকার অন্তর্ভুক্ত)",
    goldValue: "স্বর্ণের মূল্য",
    goldHint: "অলংকারসহ সকল স্বর্ণের বাজারমূল্য",
    silverValue: "রৌপ্যের মূল্য",
    silverHint: "সকল রৌপ্যের বাজারমূল্য",
    investments: "বিনিয়োগ ও অবসর তহবিল",
    stocks: "শেয়ার, স্টক ও মিউচুয়াল ফান্ড",
    stocksHint: "বর্তমান বাজারমূল্য",
    crypto: "ক্রিপ্টোকারেন্সি",
    cryptoHint: "বর্তমান বাজারমূল্য",
    pension: "পেনশন ও অবসর তহবিল",
    pensionHint: "বর্তমানে উত্তোলনযোগ্য পরিমাণ (জরিমানা বাদে)",
    businessAssets: "ব্যবসায়িক সম্পদ",
    businessInventory: "ব্যবসায়িক পণ্য / মজুদ",
    businessInventoryHint: "বিক্রয়ের জন্য রাখা পণ্যের বাজারমূল্য",
    businessCash: "ব্যবসায়িক অ্যাকাউন্টে নগদ",
    moneyOwed: "আপনার কাছে পাওনা",
    strongDebts: "নিশ্চিত পাওনা",
    strongDebtsHint: "ধার দেওয়া অর্থ যা ফেরত আসবে বলে আশা করেন",

    // Section B
    sectionBTitle: "বাদযোগ্য দায়",
    sectionBSubtitle: "আপনার যা দেনা আছে",
    immediateDebts: "তাৎক্ষণিক ঋণ",
    immediateDebtsHint: "ক্রেডিট কার্ড, ব্যক্তিগত ঋণ, ওভারড্রাফট",
    pendingBills: "বকেয়া বিল",
    pendingBillsHint: "ভাড়া, ইউটিলিটি, কর যা বর্তমানে বকেয়া",
    longTermInstallments: "দীর্ঘমেয়াদী ঋণের কিস্তি",
    longTermInstallmentsHint: "আগামী ১২ মাসের বন্ধকী, শিক্ষা ঋণ ইত্যাদি",
    businessLiabilities: "ব্যবসায়িক দায়",
    businessLiabilitiesHint: "অপরিশোধিত বেতন, তাৎক্ষণিক ব্যবসায়িক ঋণ",

    // Section C
    sectionCTitle: "নিসাব সেটিংস",
    sectionCSubtitle: "যাকাত যোগ্যতার সীমা",
    nisabRecommendation: "হানাফী আলেমগণ রৌপ্যের নিসাব ব্যবহার করার পরামর্শ দেন, কারণ এর নিম্ন সীমার কারণে বেশি মানুষ যাকাত দিতে পারেন, যা গরীবদের জন্য উপকারী।",
    recommended: "প্রস্তাবিত:",
    goldPriceLabel: "স্বর্ণের দাম প্রতি গ্রাম (৳)",
    silverPriceLabel: "রৌপ্যের দাম প্রতি গ্রাম (৳)",
    goldNisabLabel: "স্বর্ণের নিসাব:",
    silverNisabLabel: "রৌপ্যের নিসাব:",
    useGoldNisab: "স্বর্ণের নিসাব ব্যবহার করুন",
    useSilverNisab: "রৌপ্যের নিসাব ব্যবহার করুন",
    currentThreshold: "বর্তমান সীমা:",
    silver: "রৌপ্য",
    gold: "স্বর্ণ",

    // Results
    zakatSummary: "যাকাত সারসংক্ষেপ",
    totalAssets: "মোট সম্পদ",
    totalLiabilities: "মোট দায়",
    netZakatableWealth: "নিট যাকাতযোগ্য সম্পদ",
    nisabThreshold: "নিসাব সীমা",
    zakatDue: "আপনার যাকাত (২.৫%)",
    noZakatDue: "যাকাত প্রযোজ্য নয়",
    belowNisab: "আপনার নিট সম্পদ নিসাব সীমার নিচে।",

    // Footer
    footer: "এই ক্যালকুলেটরটি হানাফী মাযহাব অনুসরণ করে। নির্দিষ্ট মাসআলার জন্য একজন আলেমের সাথে পরামর্শ করুন।",

    // Language
    langToggle: "English",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
