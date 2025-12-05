export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-slate-950 px-4 pt-4 pb-3 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            Prototype Mobile
          </p>
          <h1 className="text-lg font-bold leading-tight">
            Mon Portefeuille Services
          </h1>
        </div>
        <div className="h-8 w-8 rounded-2xl bg-slate-950/10 border border-white/40 flex items-center justify-center text-xs font-semibold">
          Pass
        </div>
      </div>
    </header>
  );
}

