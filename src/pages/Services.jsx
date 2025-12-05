import { videos } from "../data/videos";

export default function Services() {
  return (
    <div className="p-4 pb-5 space-y-5">
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-[0.25em] mb-1">
          Services
        </p>
        <h2 className="text-xl font-semibold text-slate-50">
          Services additionnels & streaming
        </h2>
      </div>

      <section>
        <h3 className="text-sm font-semibold text-slate-100 mb-2 flex items-center gap-2">
          🎬 Streaming vidéo
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40">
            Démo
          </span>
        </h3>
        <div className="grid gap-3">
          {videos.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800"
            >
              <div className="h-32 bg-slate-800 relative">
                <img
                  src={v.thumbnail}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-50">
                    {v.title}
                  </p>
                  <span className="text-xs bg-slate-950/70 px-2 py-0.5 rounded-full text-slate-100 border border-slate-700">
                    12 min
                  </span>
                </div>
              </div>
              <div className="p-3 flex justify-between items-center">
                <p className="text-xs text-slate-400">
                  Lecture simulée pour démonstration.
                </p>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950">
                  Regarder
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-100 mb-2">
          Autres services
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-slate-300">
            <span className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs">
              ⭐
            </span>
            Assistance premium 24/7 (démo)
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <span className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs">
              ☁️
            </span>
            Stockage cloud partenaire
          </li>
          <li className="flex items-center gap-2 text-slate-300">
            <span className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs">
              🎁
            </span>
            Offres partenaires & bundles
          </li>
        </ul>
      </section>
    </div>
  );
}

