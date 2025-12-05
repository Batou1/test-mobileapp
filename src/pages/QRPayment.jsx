import QRCodeBox from "../components/QRCodeBox";
import { useState } from "react";

export default function QRPayment() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="p-4 pb-5 space-y-4">
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-[0.25em] mb-1">
          Paiement
        </p>
        <h2 className="text-xl font-semibold text-slate-50">
          Payer via QR Code
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Scénario de démonstration, sans vrai paiement.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4">
        <div className="text-center text-xs text-slate-400 mb-2">
          QR Code de paiement (démo)
        </div>
        <QRCodeBox value="payment-demo-12345" />
        <button
          onClick={() => setPaid(true)}
          className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-semibold py-2.5 text-sm shadow-md"
        >
          Simuler le paiement
        </button>

        {paid && (
          <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-400/40 px-3 py-2 text-sm text-emerald-300 flex items-center gap-2">
            <span>✔</span>
            <span>Paiement validé (simulation).</span>
          </div>
        )}
      </div>
    </div>
  );
}

