import Link from "next/link";
import Image from "next/image";

export default function Privacidad() {
    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-[#0ea5e9]/30">
            <header className="header-gradient border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <Image
                            src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg"
                            alt="Cortical Labs Cloud Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover border border-white/10"
                        />
                        <div>
                            <span className="text-lg font-bold text-white uppercase tracking-tight">CORTICAL</span>
                            <span className="text-lg font-bold text-[#0ea5e9]">CLOUD</span>
                        </div>
                    </Link>
                    <Link href="/" className="text-sm text-white/40 hover:text-[#0ea5e9] transition-colors">
                        Volver al Inicio
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                    Política de Privacidad
                </h1>

                <div className="space-y-8 text-white/70 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Recolección de Datos</h2>
                        <p>
                            Recopilamos información básica de contacto (nombre, correo electrónico, empresa) únicamente con el fin de procesar sus solicitudes de acceso a la plataforma CL1 Cloud.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Uso de la Información</h2>
                        <p>
                            Sus datos se utilizan exclusivamente para:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Gestionar su registro y reserva.</li>
                            <li>Enviar comunicaciones técnicas sobre el estado del servicio.</li>
                            <li>Mejorar nuestra oferta tecnológica basada en casos de uso.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Seguridad</h2>
                        <p>
                            Implementamos medidas de seguridad estándar de la industria para proteger su información personal contra el acceso no autorizado o la divulgación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Terceros</h2>
                        <p>
                            No vendemos ni compartimos sus datos personales con terceros para fines comerciales. Solo utilizamos proveedores de servicios críticos (como plataformas de correo) bajo estrictos contratos de confidencialidad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Sus Derechos</h2>
                        <p>
                            Usted tiene derecho a solicitar la eliminación de sus datos de nuestra base de datos de registro en cualquier momento enviando un correo a hola@smarterbot.cl.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-white/5 py-10 text-center text-sm text-white/40">
                © 2026 Smarter SPA. Santiago, Chile.
            </footer>
        </div>
    );
}
