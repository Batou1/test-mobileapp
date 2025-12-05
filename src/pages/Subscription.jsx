import { subscription } from "../data/subscription";
import { useState } from "react";

export default function Subscription() {
  const [status, setStatus] = useState(subscription.status);
  const [loading, setLoading] = useState(false);

  const renew = () => {
    setLoading(true);
    setTimeout(() => {
      setStatus("Renouvelé (démo)");
      setLoading(false);
    }, 900);
  };

  return (
    <div className="p-4 pb-5 space-y-4">
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-[0.25em] mb-1">
          Abonnement
        </p>
        <h2 className="text-xl font-semibold text-slate-50">
          Mon offre actuelle
        </h2>
      </div>

      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-2">
        <p className="text-xs font-medium text-orange-400 uppercase">
          Statut
        </p>
        <p className="text-lg font-semibold text-slate-50">{status}</p>

        <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
          <div>
            <p className="text-xs text-slate-500 uppercase mb-1">Formule</p>
            <p className="font-medium text-slate-100">{subscription.plan}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase mb-1">Prix</p>
            <p className="font-medium text-slate-100">{subscription.price}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase mb-1">
              Renouvellement
            </p>
            <p className="font-medium text-slate-100">
              {subscription.renewalDate}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={renew}
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 font-semibold py-3 text-sm shadow-md disabled:opacity-60"
      >
        {loading ? "Renouvellement..." : "Renouveler mon abonnement (démo)"}
      </button>
    </div>
  );
}

