import { apps as mockApps } from "../data/apps";
import { useState } from "react";

export default function AppStore() {
  const [apps, setApps] = useState(mockApps);

  const install = (id) => {
    setApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, installed: true } : a))
    );
  };

  return (
    <div className="p-4 pb-5 space-y-4">
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-[0.25em] mb-1">
          Mini App Store
        </p>
        <h2 className="text-xl font-semibold text-slate-50">
          Extensions disponibles
        </h2>
      </div>

      <div className="space-y-3">
        {apps.map((app) => (
          <div
            key={app.id}
            className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-2xl bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-lg">
              🧩
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-50">
                {app.name}
              </p>
              <p className="text-xs text-slate-400">
                Intégration démo, installation simulée.
              </p>
            </div>
            {app.installed ? (
              <span className="text-xs font-semibold text-emerald-300">
                Installée
              </span>
            ) : (
              <button
                onClick={() => install(app.id)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-950 hover:bg-orange-400 hover:text-slate-950 transition"
              >
                Installer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

