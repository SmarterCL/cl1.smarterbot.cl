import Link from "next/link";
import Image from "next/image";

export default function Terminos() {
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
                    Términos y Condiciones
                </h1>

                <div className="space-y-8 text-white/70 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Aceptación de los Términos</h2>
                        <p>
                            Al acceder y utilizar los servicios de CL1 Cloud proporcionados por Smarter SPA, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Uso del Servicio</h2>
                        <p>
                            Nuestra plataforma de computación neural está destinada a fines de investigación, desarrollo y aplicaciones empresariales legítimas. Queda prohibido cualquier uso que vulnere las leyes locales o internacionales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Propiedad Intelectual</h2>
                        <p>
                            Todos los derechos sobre la tecnología CL1, interfaces, y marcas asociadas son propiedad exclusiva de Smarter SPA y sus licenciantes. El acceso al servicio no transfiere ningún derecho de propiedad intelectual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Limitación de Responsabilidad</h2>
                        <p>
                            Smarter SPA no se hace responsable de las interrupciones en el servicio debidas a mantenimiento, actualizaciones o causas fuera de nuestro control razonable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Modificaciones</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio constituye la aceptación de los nuevos términos.
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
