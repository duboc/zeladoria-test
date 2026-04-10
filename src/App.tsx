import {
  AlertTriangle,
  Bell,
  UserCircle,
  LayoutDashboard,
  Building2,
  Radio,
  CircleDollarSign,
  Terminal,
  HelpCircle,
  LogOut,
  Brain,
  Wifi
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background text-on-surface antialiased overflow-hidden h-screen flex flex-col font-sans">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-cyan-900/10 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-8">
          <span className="text-xl font-black tracking-tight text-cyan-400">Zeladoria Autônoma</span>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="font-sans antialiased text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#">Visão Geral</a>
            <a className="font-sans antialiased text-slate-400 hover:text-slate-100 transition-colors" href="#">Relatórios</a>
            <a className="font-sans antialiased text-slate-400 hover:text-slate-100 transition-colors" href="#">Configurações</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-br from-tertiary to-tertiary-container text-on-tertiary font-bold px-6 py-2 rounded-lg flex items-center gap-2 animate-pulse-red transition-transform active:scale-95 duration-75 cursor-pointer">
            <AlertTriangle size={20} />
            Simular Vazamento
          </button>
          <div className="flex items-center gap-3 text-slate-400 ml-4">
            <Bell size={24} className="hover:bg-white/5 p-1 rounded transition-colors cursor-pointer" />
            <UserCircle size={24} className="hover:bg-white/5 p-1 rounded transition-colors cursor-pointer" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16 h-full overflow-hidden">
        {/* SideNavBar */}
        <aside className="fixed left-0 h-full w-64 pt-4 bg-slate-950 flex flex-col py-4 gap-2">
          <div className="px-6 mb-8">
            <h2 className="text-lg font-bold text-slate-100 tracking-tight">Command Center</h2>
            <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold opacity-70">Sentinel Insight v2.0</p>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 rounded text-cyan-400 bg-cyan-400/10 border-r-4 border-cyan-400 font-semibold transition-all hover:translate-x-1 duration-200" href="#">
              <LayoutDashboard size={20} />
              <span className="text-sm font-sans tracking-tight">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all hover:translate-x-1 duration-200" href="#">
              <Building2 size={20} />
              <span className="text-sm font-sans tracking-tight">Edifícios</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all hover:translate-x-1 duration-200" href="#">
              <Radio size={20} />
              <span className="text-sm font-sans tracking-tight">Sensores IoT</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all hover:translate-x-1 duration-200" href="#">
              <CircleDollarSign size={20} />
              <span className="text-sm font-sans tracking-tight">Financeiro</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all hover:translate-x-1 duration-200" href="#">
              <Terminal size={20} />
              <span className="text-sm font-sans tracking-tight">Logs AI</span>
            </a>
          </nav>
          <div className="px-3 border-t border-slate-900 pt-4 mt-auto mb-20">
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-300 transition-all" href="#">
              <HelpCircle size={20} />
              <span className="text-sm font-sans tracking-tight">Suporte</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-300 transition-all" href="#">
              <LogOut size={20} />
              <span className="text-sm font-sans tracking-tight">Logout</span>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8 overflow-y-auto grid grid-cols-12 gap-6 bg-background scanline pb-20">
          {/* Header Section */}
          <div className="col-span-12 mb-2">
            <h1 className="text-3xl font-black tracking-tight text-on-surface">Unidade: <span className="text-primary">Residencial Futuro 01</span></h1>
            <p className="text-on-surface-variant flex items-center gap-2 mt-1">
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              Monitoramento Ativo: 142 sensores operacionais
            </p>
          </div>

          {/* Hub de Facilities (IoT) - Flow Chart */}
          <div className="col-span-8 bg-surface-container rounded-xl p-6 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Monitoramento de Fluxo</span>
                <h3 className="text-xl font-bold text-on-surface">Hub de Facilities (IoT)</h3>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-primary">0.00 <span className="text-sm font-medium text-on-surface-variant">m³/h</span></div>
                <span className="text-[10px] text-tertiary font-bold uppercase">Anomalia Estancada</span>
              </div>
            </div>
            <div className="h-64 flex items-end gap-1 px-2 relative">
              {/* Fake Chart Grid */}
              <div className="absolute inset-0 border-b border-outline-variant opacity-20 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-1/4 border-b border-outline-variant opacity-5 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-2/4 border-b border-outline-variant opacity-5 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-3/4 border-b border-outline-variant opacity-5 pointer-events-none"></div>
              
              {/* Flow Bars */}
              <div className="w-full h-8 bg-primary/20 rounded-t-sm transition-all duration-500"></div>
              <div className="w-full h-10 bg-primary/20 rounded-t-sm transition-all duration-500"></div>
              <div className="w-full h-9 bg-primary/20 rounded-t-sm transition-all duration-500"></div>
              <div className="w-full h-48 bg-tertiary/40 rounded-t-sm animate-pulse"></div> {/* Simulation Spike */}
              <div className="w-full h-2 bg-secondary/10 rounded-t-sm"></div>
              <div className="w-full h-1 bg-secondary/10 rounded-t-sm"></div>
              <div className="w-full h-1 bg-secondary/10 rounded-t-sm"></div>
              <div className="w-full h-1 bg-secondary/10 rounded-t-sm"></div>
              <div className="w-full h-1 bg-secondary/10 rounded-t-sm"></div>
              <div className="w-full h-1 bg-secondary/10 rounded-t-sm"></div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] text-on-surface-variant uppercase">Status Válvula</p>
                <p className="font-bold text-tertiary">FECHADA (SOLENOIDE)</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] text-on-surface-variant uppercase">Pressão Rede</p>
                <p className="font-bold">4.2 bar</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] text-on-surface-variant uppercase">Última Leitura</p>
                <p className="font-bold">Agora mesmo</p>
              </div>
            </div>
          </div>

          {/* Cérebro RPA (SuperAgent) - AI Logs */}
          <div className="col-span-4 bg-surface-container-high rounded-xl flex flex-col">
            <div className="p-6 border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain size={24} className="text-primary" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">RPA Autônomo</span>
                  <h3 className="text-xl font-bold text-on-surface">Cérebro RPA</h3>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 space-y-4 font-mono text-xs overflow-y-auto max-h-[400px]">
              <div className="flex gap-3 text-on-surface-variant">
                <span className="text-primary shrink-0">[14:30:02]</span>
                <span>Analisando telemetria em tempo real...</span>
              </div>
              <div className="flex gap-3 text-tertiary font-bold bg-tertiary/10 p-2 rounded">
                <span className="shrink-0">[14:31:15]</span>
                <span>CRITICAL: ANOMALIA DETECTADA! FLUXO +300% ACIMA DA MÉDIA.</span>
              </div>
              <div className="flex gap-3 text-primary">
                <span className="shrink-0">[14:31:16]</span>
                <span className="italic underline decoration-primary/30">Acionando Protocolo de Emergência 'SafeBlock'...</span>
              </div>
              <div className="flex gap-3 text-secondary">
                <span className="shrink-0">[14:31:17]</span>
                <span className="font-bold">SUCESSO: Válvula solenoide 04 fechada remotamente.</span>
              </div>
              <div className="flex gap-3 text-on-surface-variant">
                <span className="text-primary shrink-0">[14:31:20]</span>
                <span>Pesquisando Marketplace Superlógica por manutenção disponível...</span>
              </div>
              <div className="flex gap-3 text-secondary">
                <span className="shrink-0">[14:31:25]</span>
                <span>Encanador 'QuickFix' aceitou chamado. Estimativa: 15 min.</span>
              </div>
              <div className="flex gap-3 text-primary font-bold">
                <span className="shrink-0">[14:31:26]</span>
                <span>Smart Contract executado via Conta Garantida.</span>
              </div>
              <div className="flex gap-3 text-on-surface-variant opacity-50">
                <span className="text-primary shrink-0">[14:31:30]</span>
                <span>Notificação Gruvi enviada ao síndico e moradores...</span>
              </div>
            </div>
          </div>

          {/* Marketplace & Financeiro */}
          <div className="col-span-8 bg-surface-container rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-on-surface">Marketplace & Financeiro</h3>
              <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Conta Garantida Ativa</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-low rounded-lg p-5 border border-outline-variant/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">Smart Contract #8821</span>
                  <span className="text-[10px] bg-primary/20 text-primary px-2 rounded">ASSINADO</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Serviço:</span>
                    <span className="text-on-surface">Reparo Hidráulico Emergencial</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Fornecedor:</span>
                    <span className="text-on-surface">QuickFix Soluções</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold border-t border-outline-variant/10 pt-2 mt-2">
                    <span className="text-on-surface-variant">Valor Provisionado:</span>
                    <span className="text-secondary">R$ 450,00</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-surface-container-highest to-surface-container-high rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">Impacto Financeiro</p>
                  <p className="text-sm text-on-surface-variant">Economia estimada pelo bloqueio preventivo:</p>
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-black text-on-surface">R$ 12.400,00</span>
                  <p className="text-xs text-secondary mt-1">Danos estruturais evitados pelo RPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gruvi Proativo Mockup */}
          <div className="col-span-4 row-span-1 flex justify-center items-start">
            <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl p-3 overflow-hidden">
              {/* Phone Header */}
              <div className="w-24 h-6 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
              
              {/* Phone Screen Content */}
              <div 
                className="h-full w-full bg-cover bg-center rounded-[2rem] p-4 flex flex-col gap-4 relative" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4m-TyFP5gdnBOyzuZfdDm2vtM3Kef1t7RTAbzlogJyhbsvT_PhcWhbSUPJr2LcV6FQbcY8Y2D7hvPOsuJ9iRvIg7RLqZO1RH55hv64L-43UUqB0OWmv4uGqbWzPK7Zj56MDP3qRpdoA7qGvdyxyGhvkJuYzm8BnVsIREEPEQMtenKItKWNM2POxxBFazgWmy1CEnosT-J9IdJMqOvgtKqvRGW3zLoFw8p7wziGxDURTHwxnEYb8SWV_9I5SQTaZA5BiEXYA7mqXA')"}}
              >
                {/* Notification Card */}
                <div className="mt-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-5 w-5 bg-cyan-500 rounded flex items-center justify-center text-[10px] text-white font-bold">G</div>
                    <span className="text-[10px] font-bold text-white uppercase opacity-70">Gruvi Proativo</span>
                    <span className="text-[10px] text-white/50 ml-auto font-medium">Agora</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">Alerta: Fluxo anormal detectado</h4>
                  <p className="text-[10px] leading-relaxed text-white/90">
                    Água cortada preventivamente na Unidade 04. Encanador a caminho (15 min). Smart Contract ativo.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 bg-cyan-500 py-1.5 rounded text-[10px] font-bold text-white cursor-pointer hover:bg-cyan-400 transition-colors">Ver Detalhes</button>
                    <button className="flex-1 bg-white/10 py-1.5 rounded text-[10px] font-bold text-white cursor-pointer hover:bg-white/20 transition-colors">Ok</button>
                  </div>
                </div>
              </div>
              
              {/* Bottom Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </main>
      </div>

      {/* HUD Simulation Footer */}
      <footer className="fixed bottom-0 w-full h-12 bg-surface-container-highest/80 backdrop-blur-xl border-t border-primary/20 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-4 text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-secondary uppercase">Sistemas Nominais</span>
          </div>
          <div className="h-4 w-px bg-outline-variant"></div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <Wifi size={14} />
            <span>MESH NETWORK STABLE</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-on-surface-variant font-mono">LATENCY: 14ms</span>
          <span className="text-[10px] text-on-surface-variant font-mono">ENCRYPTION: AES-256</span>
          <div className="flex gap-1">
            <span className="h-1 w-4 bg-primary rounded-full"></span>
            <span className="h-1 w-4 bg-primary rounded-full"></span>
            <span className="h-1 w-4 bg-primary/20 rounded-full"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
