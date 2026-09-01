import {
  Bell,
  CarFront,
  ChevronRight,
  CircleDollarSign,
  Gauge,
  LayoutDashboard,
  MessageCircle,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

const DealershipDashboard = ({ compact = false }) => (
  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0c0b10] text-white shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
    <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-600">
          <CarFront className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/35">Operação</p>
          <p className="text-xs font-semibold">Painel da concessionária</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[0.58rem] font-semibold text-emerald-300 sm:block">Online agora</span>
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]"><Bell className="h-3.5 w-3.5 text-white/60" /></span>
      </div>
    </div>

    <div className="grid md:grid-cols-[10.5rem_1fr]">
      <aside className="hidden border-r border-white/[0.08] p-3 md:block">
        {[
          [LayoutDashboard, "Visão geral", true],
          [MessageCircle, "Atendimentos"],
          [CarFront, "Estoque"],
          [CircleDollarSign, "Vendas"],
          [Users, "Clientes"],
          [Gauge, "Equipe"],
        ].map(([Icon, label, active]) => (
          <div key={label} className={`mb-1 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[0.68rem] ${active ? "bg-violet-600 text-white" : "text-white/40"}`}>
            <Icon className="h-3.5 w-3.5" />
            {label}
          </div>
        ))}
      </aside>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-violet-300">Visão comercial</p>
            <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em] sm:text-xl">O que está acontecendo agora.</h3>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-[0.62rem] text-white/35">
            <Search className="h-3.5 w-3.5" /> Buscar cliente ou veículo
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {[
            ["Novos leads", "38", "+12%"],
            ["Em atendimento", "21", "agora"],
            ["Propostas", "09", "esta semana"],
            ["Vendas", "07", "+2"],
          ].map(([label, value, meta], index) => (
            <div key={label} className={`rounded-xl border p-3.5 ${index === 0 ? "border-violet-400/25 bg-violet-500/10" : "border-white/[0.08] bg-white/[0.025]"}`}>
              <p className="text-[0.56rem] uppercase tracking-[0.13em] text-white/35">{label}</p>
              <div className="mt-2 flex items-end justify-between gap-2">
                <strong className="text-xl font-semibold">{value}</strong>
                <span className="text-[0.55rem] text-emerald-300">{meta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-3 grid gap-3 ${compact ? "lg:grid-cols-[1.25fr_.75fr]" : "lg:grid-cols-[1.3fr_.7fr]"}`}>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.56rem] uppercase tracking-[0.14em] text-white/35">Funil de vendas</p>
                <p className="mt-1 text-xs font-medium">Oportunidades por etapa</p>
              </div>
              <TrendingUp className="h-4 w-4 text-violet-300" />
            </div>
            <div className="mt-5 flex h-28 items-end gap-2">
              {[76, 55, 42, 31, 20, 12].map((height, index) => (
                <div key={height} className="flex h-full flex-1 items-end">
                  <div className={`w-full rounded-t-md ${index === 0 ? "bg-violet-500" : "bg-violet-400/25"}`} style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[0.5rem] uppercase tracking-[0.08em] text-white/25">
              <span>Leads</span><span>Contato</span><span>Visita</span><span>Proposta</span><span>Venda</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
            <p className="text-[0.56rem] uppercase tracking-[0.14em] text-white/35">Atendimentos recentes</p>
            <div className="mt-3 space-y-2">
              {[
                ["Marina S.", "SUV híbrido", "WhatsApp"],
                ["Carlos A.", "Avaliação de usado", "Site"],
                ["Rafael M.", "Sedan premium", "Campanha"],
              ].map(([name, interest, origin]) => (
                <div key={name} className="flex items-center gap-2.5 rounded-lg bg-white/[0.035] p-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-500/20 text-[0.55rem] font-semibold text-violet-200">{name.slice(0, 2).toUpperCase()}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.65rem] font-medium">{name}</p>
                    <p className="truncate text-[0.54rem] text-white/30">{interest} · {origin}</p>
                  </div>
                  <ChevronRight className="h-3 w-3 text-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DealershipDashboard;
