import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Accueil", icon: "🏠" },
  { to: "/subscription", label: "Abonnement", icon: "📄" },
  { to: "/payment", label: "Paiement", icon: "💳" },
  { to: "/apps", label: "Apps", icon: "🧩" },
  { to: "/services", label: "Services", icon: "🎬" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bg-slate-950/95 border-t border-slate-800 px-3 py-2">
      <div className="flex justify-between gap-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex-1 flex flex-col items-center justify-center text-[11px] select-none transition-all ${
                active ? "text-orange-400" : "text-slate-400"
              }`}
            >
              <div
                className={`mb-1 px-3 py-1 rounded-full flex items-center justify-center text-base ${
                  active
                    ? "bg-orange-500/15 border border-orange-500/40"
                    : "bg-transparent"
                }`}
              >
                <span>{item.icon}</span>
              </div>
              <span className={`${active ? "font-semibold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

