"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "pro",
    use_case: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 neural-hero -z-10 opacity-30"></div>

      {/* Header */}
      <header className="header-gradient border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg"
                alt="SmarterOS Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-cover border border-white/10 transition-transform group-hover:scale-110"
              />
              <div>
                <span className="text-xl font-bold text-white uppercase tracking-tight">SMARTER</span>
                <span className="text-xl font-bold text-[#0ea5e9]">OS</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/comparativa-hardware" className="relative text-white/60 hover:text-[#0ea5e9] transition-colors">
              Comparar Placas
              <span className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-red-500 text-[8px] font-bold text-white rounded-full">NUEVO</span>
            </Link>
            <a href="#demo" className="text-white/60 hover:text-[#0ea5e9] transition-colors">Tecnología</a>
            <a href="#pricing" className="text-white/60 hover:text-[#0ea5e9] transition-colors">Planes</a>
            <a href="#reserve" className="text-white/60 hover:text-[#0ea5e9] transition-colors">Reservar</a>
          </nav>
          <a href="https://www.smarterbot.cl" className="text-sm text-white/40 hover:text-[#0ea5e9]">
            Volver a SmarterOS
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="text-[#0ea5e9] text-xs font-bold tracking-widest uppercase">Del Bit al Átomo • 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              Cortical Cloud
            </span>
            <br />
            <span className="text-white">Cómputo Biológico</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Sé uno de los primeros desarrolladores del mundo en experimentar y construir sobre la CL1 desde cualquier lugar. Nuestra computadora biológica requiere menos energía y datos que los sistemas tradicionales, habilitando una nueva era de descubrimientos.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#reserve" className="btn-primary px-10 py-4 rounded-full text-white font-semibold inline-block">
              Solicitar Acceso
            </a>
            <a href="#demo" className="btn-secondary px-10 py-4 rounded-full text-[#0ea5e9] font-semibold inline-block border-white/10 hover:bg-white/5">
              Ver Demo Local
            </a>
          </div>

          <div className="mt-20 max-w-4xl mx-auto relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d1420]/80 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <Image
                src="/images/smarteros_box_mockup.png"
                alt="SmarterOS Box Mockup"
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Demo: El Futuro del Cómputo es Biológico</h2>
          <p className="text-[#94a3b8] text-center mb-10">
            Descubre cómo Cortical Labs está integrando neuronas reales con silicio para crear la CL1
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#1e293b]">
            <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] px-6 py-4 flex justify-between items-center border-b border-[#1e293b]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                <span className="font-semibold">Cortical Labs • CL1 Demo</span>
              </div>
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-[#0a0f1a] px-4 py-1 rounded-full text-sm font-semibold">
                CL1 Neural Interface
              </span>
            </div>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/yRV8fSw6HaE?rel=0"
              title="Cortical Labs Cloud Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="bg-[#1f2937] px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#1e293b]">
              <div className="flex items-center gap-4">
                <Image
                  src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/cortical.png"
                  alt="Cortical Labs"
                  width={1156}
                  height={352}
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  quality={85}
                />
                <span className="text-sm text-[#94a3b8]">Powered by Cortical Labs Technology</span>
              </div>
              <a
                href="https://corticallabs.com/cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5e9] text-sm font-semibold hover:underline flex items-center gap-2"
              >
                Learn more about Neural Cloud
                <span>→</span>
              </a>
            </div>
            <div className="p-6 bg-[#1f2937] border-t border-[#1e293b]">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] rounded-lg flex items-center justify-center text-xl shrink-0">
                    🧠
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interfaz Neural CL1</h4>
                    <p className="text-sm text-[#94a3b8]">Células cerebrales humanas controlan el juego</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] rounded-lg flex items-center justify-center text-xl shrink-0">
                    🎮
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reinforcement Learning</h4>
                    <p className="text-sm text-[#94a3b8]">Aprendizaje por refuerzo con PPO</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] rounded-lg flex items-center justify-center text-xl shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">VizDoom Engine</h4>
                    <p className="text-sm text-[#94a3b8]">Entorno de entrenamiento optimizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Planes CL1 Cloud</h2>
          <p className="text-[#94a3b8] text-center mb-12">
            Valores en pesos chilenos + IVA. Solo para empresas con RUT chileno.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="pricing-card card-gradient border border-[#1e293b] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-[#94a3b8] text-sm mb-6">Para pruebas y desarrollo</p>
              <div className="text-4xl font-bold mb-6">
                $99.000<span className="text-lg text-[#94a3b8] font-normal">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> 1,000 neuronas CL1
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> 10 horas de compute/mes
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> API REST básica
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Soporte por email
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Dashboard básico
                </li>
              </ul>
              <a href="#reserve" className="btn-secondary block text-center py-3 rounded-xl font-semibold">
                Reservar
              </a>
            </div>

            {/* Pro */}
            <div className="pricing-card featured card-gradient border-2 border-[#0ea5e9] rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-[#0a0f1a] px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-[#94a3b8] text-sm mb-6">Para producción</p>
              <div className="text-4xl font-bold mb-6">
                $399.000<span className="text-lg text-[#94a3b8] font-normal">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> 10,000 neuronas CL1
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> 100 horas de compute/mes
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> API REST completa
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Soporte prioritario
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Dashboard avanzado
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Modelos pre-entrenados
                </li>
              </ul>
              <a href="#reserve" className="btn-primary block text-center py-3 rounded-xl font-semibold">
                Reservar
              </a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card card-gradient border border-[#1e293b] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-[#94a3b8] text-sm mb-6">Para grandes proyectos</p>
              <div className="text-4xl font-bold mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Neuronas ilimitadas
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Compute ilimitado
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> API dedicada
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Soporte 24/7
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Custom solutions
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <span className="text-green-500">✓</span> Opción on-premise
                </li>
              </ul>
              <a href="#reserve" className="btn-secondary block text-center py-3 rounded-xl font-semibold">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section (Mockup Inspiration) */}
      <section id="reserve" className="py-24 px-6 bg-[#f6f5f2] text-[#000000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="https://corticallabs.com/images/cloud-3d-logo.jpg"
              alt="Cortical Cloud 3D Logo"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Regístrate en <br />
              Cortical Cloud
            </h2>
            <p className="text-xl text-black/60 mb-10 max-w-md">
              Sé uno de los primeros en desplegar código en neuronas reales y desbloquea el futuro.
            </p>

            {!submitted ? (
              <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico"
                  className="w-full px-6 py-4 rounded-full border border-black/10 bg-white text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-neutral-800 transition-colors shadow-lg"
                >
                  Regístrate Ahora
                </button>
              </div>
            ) : (
              <div className="bg-green-500/10 text-green-700 p-6 rounded-2xl flex items-center gap-4">
                <span className="text-2xl">✓</span>
                <p className="font-semibold text-lg">¡Registro recibido! Te contactaremos pronto.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">CL1</span>
            <span className="text-lg font-bold text-[#0ea5e9]">SMARTEROS</span>
          </div>
          <div className="flex gap-8 text-sm text-[#94a3b8]">
            <a href="https://www.smarterbot.cl/terminos" className="hover:text-[#0ea5e9]">Términos</a>
            <a href="https://www.smarterbot.cl/privacidad" className="hover:text-[#0ea5e9]">Privacidad</a>
            <a href="mailto:hola@smarterbot.cl" className="hover:text-[#0ea5e9]">Contacto</a>
          </div>
          <div className="text-sm text-[#94a3b8]">
            © 2026 Smarter SPA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
