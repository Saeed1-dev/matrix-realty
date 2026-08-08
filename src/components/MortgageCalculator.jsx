import React, { useState, useMemo } from 'react';
import { Calculator, PieChart, ShieldCheck, ChevronRight } from 'lucide-react';
export const MortgageCalculator = ({ language, currency, onOpenBooking }) => {
    // State in BDT Lacs
    const [propertyValueLac, setPropertyValueLac] = useState(350); // 3.5 Crore BDT
    const [downPaymentPercent, setDownPaymentPercent] = useState(25); // 25% down payment
    const [interestRate, setInterestRate] = useState(9.5); // 9.5% per annum
    const [tenureYears, setTenureYears] = useState(15); // 15 years
    const calculation = useMemo(() => {
        const downPaymentAmountLac = (propertyValueLac * downPaymentPercent) / 100;
        const loanAmountLac = propertyValueLac - downPaymentAmountLac;
        const principal = loanAmountLac * 100000; // convert Lac to BDT
        const monthlyRate = interestRate / 12 / 100;
        const totalMonths = tenureYears * 12;
        let emi = 0;
        if (monthlyRate > 0) {
            emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        }
        else {
            emi = principal / totalMonths;
        }
        const totalPayment = emi * totalMonths;
        const totalInterest = totalPayment - principal;
        return {
            loanAmountLac,
            downPaymentAmountLac,
            emi,
            totalPayment,
            totalInterest,
            principal
        };
    }, [propertyValueLac, downPaymentPercent, interestRate, tenureYears]);
    const formatCurrency = (amountInBdt) => {
        if (currency === 'USD') {
            const usd = Math.round(amountInBdt / 118);
            return `$${usd.toLocaleString()}`;
        }
        return `৳ ${Math.round(amountInBdt).toLocaleString()}`;
    };
    const formatLacToCurrency = (lacValue) => {
        const bdt = lacValue * 100000;
        return formatCurrency(bdt);
    };
    return (<section id="calculator" className="py-20 bg-slate-900 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-amber-400"/>
            <span>{language === 'bn' ? 'হোম লোন ও ইএমআই হিসেব' : 'Smart Home Loan Calculator'}</span>
          </div>

          <h4 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {language === 'bn' ? (<>আপনার বাজেটে <span className="text-amber-400">সহজ মাসিক কিস্তি</span> হিসেব করুন</>) : (<>Calculate Your <span className="text-amber-400">Monthly EMI & Budget</span></>)}
          </h4>

          <p className="text-slate-400 text-sm font-light">
            {language === 'bn'
            ? 'বাংক লোন ও কিস্তি সুবিধার মাধ্যমে আপনার স্বপ্নের এপার্টমেন্ট কেনার সহজ গাণিতিক হিসেব।'
            : 'Plan your apartment investment with accurate down payment, interest rate, and tenure metrics.'}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Side */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
            
            {/* Property Value Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-200">
                  {language === 'bn' ? 'প্রপার্টির আনুমানিক মূল্য' : 'Property Value'}
                </label>
                <span className="text-amber-400 font-bold font-mono text-base">
                  {formatLacToCurrency(propertyValueLac)}
                </span>
              </div>
              <input type="range" min="100" max="1500" step="25" value={propertyValueLac} onChange={(e) => setPropertyValueLac(Number(e.target.value))} className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"/>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>৳ ১ কোটি (1 Cr)</span>
                <span>৳ ৭.৫ কোটি (7.5 Cr)</span>
                <span>৳ ১৫ কোটি (15 Cr)</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-200">
                  {language === 'bn' ? 'ডাউন পেমেন্ট (Down Payment)' : 'Down Payment Ratio'}
                </label>
                <span className="text-amber-400 font-bold font-mono text-base">
                  {downPaymentPercent}% ({formatLacToCurrency(calculation.downPaymentAmountLac)})
                </span>
              </div>
              <input type="range" min="10" max="60" step="5" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"/>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10%</span>
                <span>30%</span>
                <span>60%</span>
              </div>
            </div>

            {/* Interest Rate & Tenure Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-slate-200">
                    {language === 'bn' ? 'বার্ষিক সুদের হার' : 'Interest Rate'}
                  </label>
                  <span className="text-amber-400 font-bold font-mono text-base">
                    {interestRate}%
                  </span>
                </div>
                <input type="range" min="6" max="15" step="0.25" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"/>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-slate-200">
                    {language === 'bn' ? 'লোনের মেয়াদ' : 'Loan Tenure'}
                  </label>
                  <span className="text-amber-400 font-bold font-mono text-base">
                    {tenureYears} {language === 'bn' ? 'বছর' : 'Years'}
                  </span>
                </div>
                <input type="range" min="5" max="25" step="1" value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))} className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"/>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400"/>
                <span>{language === 'bn' ? 'ব্যাংক লোন প্রসেসিং সহায়তা' : 'Bank Partnership Assistance'}</span>
              </div>
              <p className="font-light">
                {language === 'bn'
            ? 'Matrix Realty-র সাথে Standard Chartered, DBH, EBL, City Bank সহ শীর্ষ ব্যাংকের স্পেশাল হোম লোন পার্টনারশিপ সুবিধা।'
            : 'We assist buyers with direct mortgage processing through DBH, EBL, City Bank, and Standard Chartered Bank.'}
              </p>
            </div>

          </div>

          {/* EMI Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                    {language === 'bn' ? 'আপনার আনুমানিক' : 'Your Estimated'}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {language === 'bn' ? 'মাসিক কিস্তি (Monthly EMI)' : 'Monthly Mortgage Payment'}
                  </h3>
                </div>
                <PieChart className="w-6 h-6 text-amber-400"/>
              </div>

              {/* Big EMI Highlight Box */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1">
                <span className="text-xs text-amber-300/80 font-medium">
                  {language === 'bn' ? 'প্রতি মাসে প্রদান করতে হবে' : 'Estimated Monthly EMI'}
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-amber-400">
                  {formatCurrency(calculation.emi)}
                </div>
                <span className="text-[11px] text-slate-400 block pt-1">
                  {tenureYears * 12} {language === 'bn' ? 'টি সমান মাসিক কিস্তিতে' : 'Equal Monthly Instalments'}
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                  <span>{language === 'bn' ? 'প্রপার্টির মোট মূল্য' : 'Property Total Price'}</span>
                  <span className="font-mono font-bold text-white">{formatLacToCurrency(propertyValueLac)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                  <span>{language === 'bn' ? 'ডাউন পেমেন্ট (নগদ)' : 'Down Payment'}</span>
                  <span className="font-mono font-bold text-emerald-400">{formatLacToCurrency(calculation.downPaymentAmountLac)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                  <span>{language === 'bn' ? 'ব্যাংক লোন পরিমাণ' : 'Bank Loan Principal'}</span>
                  <span className="font-mono font-bold text-amber-300">{formatLacToCurrency(calculation.loanAmountLac)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                  <span>{language === 'bn' ? 'মেয়াদ শেষে মোট সুদ' : 'Total Interest Payable'}</span>
                  <span className="font-mono font-bold text-amber-500">{formatCurrency(calculation.totalInterest)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button onClick={onOpenBooking} className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
                <span>{language === 'bn' ? 'পরামর্শকের সাথে কথা বলুন' : 'Consult Mortgage Specialist'}</span>
                <ChevronRight className="w-4 h-4"/>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>);
};
