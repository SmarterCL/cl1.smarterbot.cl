"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HardwareComparison() {
    const [activeTab, setActiveTab] = useState("specs");

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white font-sans selection:bg-[#0ea5e9]/30">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0ea5e9]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6366f1]/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0f1a]/80 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg"
                                alt="Cortical Labs Cloud Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-lg object-cover border border-white/10 transition-transform group-hover:scale-110"
                            />
                            <span className="text-xl font-bold tracking-tight uppercase">CORTICAL<span className="text-[#0ea5e9]">CLOUD</span></span>
                        </Link>
                        <nav className="flex items-center gap-6">
                            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Volver al Inicio</Link>
                            <a href="#contacto" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-semibold border border-white/10 transition-all">Soporte Técnico</a>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-bold mb-6 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
                            </span>
                            REPORTE DE DISPONIBILIDAD Y COSTOS 2026
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                            Gemini <span className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">Dijo.</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            La comparativa definitiva para escalar la infraestructura de <span className="text-white font-medium">Smarter SPA</span> en Chile. Orange Pi 5 Plus vs 6 Plus.
                        </p>
                    </div>
                </section>

                {/* Main Interface Group */}
                <main className="max-w-7xl mx-auto px-6 pb-24">

                    {/* Status Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Orange Pi 5 Plus Card */}
                        <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#0ea5e9]/30 transition-all duration-500 overflow-hidden">
                            <div className="relative h-full bg-[#111827] rounded-[22px] p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">Orange Pi 5 Plus</h2>
                                        <p className="text-[#0ea5e9] text-sm font-medium">Lanzamiento: Mayo 2023</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20 uppercase">Maduro & Consolidado</span>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        La opción "segura" para producción hoy en día. Software estable y compatibilidad total con Debian/Ubuntu.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40">RK3588</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40">LPDDR4x</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40">6 TOPS NPU</span>
                                    </div>
                                </div>
                                <div className="mt-auto flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-xs text-white/40">Disponibilidad en Chile</span>
                                    <span className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                        Stock Local
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Orange Pi 6 Plus Card */}
                        <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#6366f1]/30 transition-all duration-500 overflow-hidden">
                            <div className="relative h-full bg-[#111827] rounded-[22px] p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">Orange Pi 6 Plus</h2>
                                        <p className="text-[#6366f1] text-sm font-medium">Lanzamiento: Octubre 2025</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-[10px] font-bold border border-[#6366f1]/20 uppercase">Vanguardia (Bleeding Edge)</span>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Ideal para I+D y proyectos de IA generativa local. Un salto masivo en potencia de procesamiento neural.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="px-2 py-1 bg-[#6366f1]/10 rounded text-[10px] text-[#6366f1]">RK3588 Gen2</span>
                                        <span className="px-2 py-1 bg-[#6366f1]/10 rounded text-[10px] text-[#6366f1]">LPDDR5</span>
                                        <span className="px-2 py-1 bg-[#6366f1]/10 rounded text-[10px] text-[#6366f1]">45 TOPS NPU</span>
                                    </div>
                                </div>
                                <div className="mt-auto flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-xs text-white/40">Disponibilidad en Chile</span>
                                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                                        Importación Directa
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Tabs */}
                    <div className="mb-16">
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/10">
                                <button
                                    onClick={() => setActiveTab("specs")}
                                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "specs" ? "bg-[#0ea5e9] text-[#0a0f1a]" : "text-white/60 hover:text-white"}`}
                                >
                                    Comparativa RAM
                                </button>
                                <button
                                    onClick={() => setActiveTab("pricing")}
                                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "pricing" ? "bg-[#0ea5e9] text-[#0a0f1a]" : "text-white/60 hover:text-white"}`}
                                >
                                    Costos de Importación (CLP)
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="min-w-[800px] border border-white/10 rounded-2xl bg-[#111827]/50 backdrop-blur-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="p-6 text-xs font-bold uppercase text-white/40">RAM</th>
                                            <th className="p-6 text-xs font-bold uppercase text-white/40">Orange Pi 5 Plus (USD)</th>
                                            <th className="p-6 text-xs font-bold uppercase text-white/40">Orange Pi 6 Plus (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeTab === "specs" ? (
                                            <>
                                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 font-semibold">8GB</td>
                                                    <td className="p-6 text-white/60">~$125 USD <span className="text-[10px]">(AliExpress)</span></td>
                                                    <td className="p-6 text-white/20">—</td>
                                                </tr>
                                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 font-semibold">16GB</td>
                                                    <td className="p-6 text-white/60">~$160 USD <span className="text-[10px]">(AliExpress)</span></td>
                                                    <td className="p-6 text-[#6366f1] font-bold">~$240 USD <span className="text-[10px]">(AliExpress)</span></td>
                                                </tr>
                                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 font-semibold">32GB</td>
                                                    <td className="p-6 text-white/60">~$200 USD <span className="text-[10px]">(AliExpress)</span></td>
                                                    <td className="p-6 text-[#6366f1] font-bold">~$310 USD <span className="text-[10px]">(AliExpress)</span></td>
                                                </tr>
                                                <tr className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 font-semibold">64GB</td>
                                                    <td className="p-6 text-white/20">—</td>
                                                    <td className="p-6 text-[#6366f1] font-bold">~$380+ USD <span className="text-[10px]">(AliExpress)</span></td>
                                                </tr>
                                            </>
                                        ) : (
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td colSpan={3} className="p-12 text-center">
                                                    <div className="max-w-md mx-auto">
                                                        <h4 className="text-2xl font-bold mb-4">Estimación Aduanas Chile</h4>
                                                        <p className="text-white/60 text-sm mb-6">
                                                            Las compras sobre $30 USD aplican 6% arancel + 19% IVA. Una OPi 6 Plus de 32GB puesta en Providencia cuesta aprox:
                                                        </p>
                                                        <div className="text-4xl font-bold text-[#0ea5e9] mb-2">$350.000 CLP</div>
                                                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Valor final estimado</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Strategic Analysis */}
                    <section className="mb-24">
                        <h3 className="text-3xl font-bold mb-10">Análisis para Smarter SPA</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-[#0ea5e9]/50 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mb-6 text-2xl">⚡</div>
                                <h4 className="text-xl font-bold mb-4">Costo de Oportunidad (Software)</h4>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    La <span className="text-white">Pi 5 Plus</span> ya tiene imágenes estables. Usarla hoy ahorra decenas de horas de troubleshooting en drivers de NPU o aceleración de video. Es ideal para despliegues inmediatos de Cortical Cloud.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-[#6366f1]/50 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/20 flex items-center justify-center text-[#6366f1] mb-6 text-2xl">🧠</div>
                                <h4 className="text-xl font-bold mb-4">Factor IA (El Gran Salto)</h4>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    La <span className="text-[#6366f1]">Pi 6 Plus</span> ofrece 45 TOPS. Si la arquitectura Cortical Cloud procesará LLMs locales o YOLO pesado, el costo extra se paga solo al evitar facturas de APIs externas como OpenAI o Anthropic.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pack de Inicio */}
                    <section className="p-12 rounded-[40px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/4 -translate-y-1/4">
                            <div className="w-64 h-64 border-[1px] border-white/20 rounded-full"></div>
                        </div>

                        <h3 className="text-3xl font-bold mb-8 relative z-10">Pack de Inicio Recomendado (6 Plus)</h3>
                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            <div className="space-y-3">
                                <div className="text-[#0ea5e9] font-bold text-lg">01. Energía</div>
                                <h5 className="font-semibold">Fuente de Poder PD 100W</h5>
                                <p className="text-white/40 text-xs">Requiere 20V/5A vía USB-C. Una fuente estándar no soportará cargas neurales.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-[#0ea5e9] font-bold text-lg">02. Cooling</div>
                                <h5 className="font-semibold">Refrigeración Activa</h5>
                                <p className="text-white/40 text-xs">El RK3588 Gen2 es un "horno" de 12 núcleos. Se requiere cooler PWM u oficial.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-[#0ea5e9] font-bold text-lg">03. Storage</div>
                                <h5 className="font-semibold">NVMe Gen4 x2 Slots</h5>
                                <p className="text-white/40 text-xs">Para acelerar Odoo y bases de datos intensivas, el NVMe es mandatorio.</p>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer Shortcut */}
                <footer className="py-12 border-t border-white/5 text-center">
                    <p className="text-white/20 text-xs uppercase tracking-widest font-bold">Generado para Smarter SPA • 2026</p>
                </footer>
            </div>

            <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0f1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
        </div>
    );
}
