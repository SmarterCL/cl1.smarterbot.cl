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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reserva:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen grid-pattern">
      {/* Header */}
      <header className="header-gradient border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/logo.jpg"
                alt="SmarterOS Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-cover border border-[#1e293b]"
              />
              <div>
                <span className="text-xl font-bold text-white uppercase tracking-tight">SMARTER</span>
                <span className="text-xl font-bold text-[#0ea5e9]">OS</span>
              </div>
            </Link>
          </div>
            <nav className="hidden md:flex gap-8">
            <a href="#demo" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors">Demo</a>
            <a href="#pricing" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors">Planes</a>
            <a href="#reserve" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors">Reservar</a>
          </nav>
          <a href="https://www.smarterbot.cl" className="text-sm text-[#94a3b8] hover:text-[#0ea5e9]">
            Volver a SmarterOS
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
              CL1 Cloud
            </span>
            <br />
            <span className="text-white">Computación Neural</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
            La plataforma de computación neural más avanzada. Ejecuta modelos de IA con células cerebrales humanas reales.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#reserve" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold inline-block">
              Reservar Acceso
            </a>
            <a href="#demo" className="btn-secondary px-8 py-4 rounded-xl text-[#0ea5e9] font-semibold inline-block">
              Ver Demo
            </a>
          </div>

          <div className="flex justify-center gap-16 mt-16 flex-wrap">
            <div>
              <div className="text-4xl font-bold text-[#0ea5e9]">10K+</div>
              <div className="text-[#94a3b8]">Neuronas CL1</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0ea5e9]">50ms</div>
              <div className="text-[#94a3b8]">Latencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0ea5e9]">99.9%</div>
              <div className="text-[#94a3b8]">Uptime</div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#111827] rounded-xl overflow-hidden border border-[#1e293b]">
                <Image
                  src="/smarteros_box_v1_mockup_1772989966038.png"
                  alt="SmarterOS Box Mockup"
                  width={800}
                  height={450}
                  className="w-full rounded-xl object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Demo: Células Cerebrales Jugando Doom</h2>
          <p className="text-[#94a3b8] text-center mb-10">
            Observa cómo células cerebrales humanas aprenden a jugar Doom mediante reinforcement learning
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#1e293b]">
            <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] px-6 py-4 flex justify-between items-center border-b border-[#1e293b]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                <span className="font-semibold">doom-neuron Live Demo</span>
              </div>
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-[#0a0f1a] px-4 py-1 rounded-full text-sm font-semibold">
                CL1 Neural Interface
              </span>
            </div>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/2ejt6eT3NtE?rel=0"
              title="DOOM CL1 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="bg-[#1f2937] px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#1e293b]">
              <div className="flex items-center gap-4">
                <Image
                  src="https://rjfcmmzjlguiititkmyh.supabase.co/storage/v1/object/public/DRIVE/cortical.png"
                  alt="Cortical Labs"
                  width={100}
                  height={40}
                  className="h-10 opacity-80 hover:opacity-100 transition-opacity"
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

      {/* Reservation Form */}
      <section id="reserve" className="py-20 px-6 bg-[#111827]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Reserva tu Acceso</h2>
          <p className="text-[#94a3b8] text-center mb-10">
            Completa el formulario y únete a la revolución de la computación neural
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="card-gradient border border-[#1e293b] rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="input-field w-full px-5 py-4 rounded-xl text-white placeholder-[#64748b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="input-field w-full px-5 py-4 rounded-xl text-white placeholder-[#64748b]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Tu empresa"
                    className="input-field w-full px-5 py-4 rounded-xl text-white placeholder-[#64748b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#94a3b8] mb-2 uppercase tracking-wide">
                    Plan
                  </label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="input-field w-full px-5 py-4 rounded-xl text-white"
                  >
                    <option value="starter">Starter - $99.000/mes</option>
                    <option value="pro">Pro - $399.000/mes</option>
                    <option value="enterprise">Enterprise - Custom</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#94a3b8] mb-2 uppercase tracking-wide">
                  Caso de Uso
                </label>
                <textarea
                  name="use_case"
                  value={formData.use_case}
                  onChange={handleChange}
                  placeholder="Describe cómo planeas usar CL1 Cloud..."
                  rows={4}
                  className="input-field w-full px-5 py-4 rounded-xl text-white placeholder-[#64748b] resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-lg">
                Reservar Ahora
              </button>
              <p className="text-center text-[#94a3b8] text-sm mt-4">
                Sin compromiso. Te contactaremos en 24h.
              </p>
            </form>
          ) : (
            <div className="card-gradient border border-[#1e293b] rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-4">¡Reserva Exitosa!</h3>
              <p className="text-[#94a3b8]">
                Gracias por tu interés en CL1 Cloud. Te hemos enviado un email de confirmación.
                Nuestro equipo te contactará en las próximas 24 horas.
              </p>
            </div>
          )}
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
