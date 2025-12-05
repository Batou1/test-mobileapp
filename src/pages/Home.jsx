import { Link } from "react-router-dom";

export default function Home() {
  const items = [
    {
      to: "/subscription",
      label: "Gérer mon abonnement",
      desc: "Voir mon statut, renouveler, ajuster ma formule.",
      icon: "📄",
    },
    {
      to: "/payment",
      label: "Payer via QR Code",
      desc: "Générer un QR et simuler un paiement.",
      icon: "💳",
    },
    {
      to: "/apps",
      label: "Mini App Store",
      desc: "Installer des mini-apps partenaires.",
      icon: "🧩",
    },
    {
      to: "/services",
      label: "Services & Streaming",
      desc: "Accéder à des services additionnels.",
      icon: "🎬",
    },
  ];

  return (
    <div className="p-4 pb-5">
      <div className="mb-4">
        <p className="text-xs text-slate-400 uppercase tracking-[0.25em] mb-1">
          Tableau de bord
        </p>
        <h2 className="text-xl font-semibold text-slate-50">
          Tout ton univers en un clic
        </h2>
      </div>

      <div className="grid gap-3">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 p-4 flex gap-3 items-start"
          >
            <div className="h-10 w-10 rounded-2xl bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-xl">
              {i.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-50">
                {i.label}
              </p>
              <p className="text-xs text-slate-400 mt-1">{i.desc}</p>
            </div>
            <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition">
              ▶
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

