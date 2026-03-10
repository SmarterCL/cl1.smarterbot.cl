"use client";

import { useState, useEffect } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-[#0d1420] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6]" />

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-white mb-2">Contacto</h2>
                    <p className="text-white/50 mb-8">Envíanos un mensaje y te responderemos lo antes posible.</p>

                    {status === "success" ? (
                        <div className="py-12 text-center">
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                            <p className="text-white/50 mb-8">Gracias por contactarnos. Hemos recibido tu mensaje.</p>
                            <button
                                onClick={onClose}
                                className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-2">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Tu nombre completo"
                                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="hola@tuempresa.com"
                                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white/70 mb-2">Mensaje</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-400 text-sm">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    "Enviar Mensaje"
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
