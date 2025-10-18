"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
    privacidade: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você pode adicionar a lógica de envio
  }

  return (
    <div className="min-h-screen bg-white p-1 md:p-2">
      <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-1rem)] bg-[#002266] relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 opacity-10 border border-solid border-white">
{/* aqui vao os azuleijos em png */}
        </div>

        <div className="relative z-10 min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 items-center">
             {/* Form Section */}
            <div className="bg-[rgba(255,255,255,0.9)] rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Tem um projeto?</h1>
                <p className="text-xl md:text-2xl font-semibold text-blue-800">Mande uma mensagem!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome e Sobrenome */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700 mb-2">
                      Sobrenome *
                    </label>
                    <Input
                      id="sobrenome"
                      type="text"
                      placeholder="Sobrenome"
                      value={formData.sobrenome}
                      onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Escreva aqui sua mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    required
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacidade"
                    checked={formData.privacidade}
                    onCheckedChange={(checked) => setFormData({ ...formData, privacidade: checked as boolean })}
                    required
                  />
                  <label htmlFor="privacidade" className="text-sm text-gray-600 leading-tight cursor-pointer">
                    Você concorda com nossa política de privacidade.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
                >
                  Enviar
                </Button>
              </form>
            </div>

            {/* Decorative Icon Section */}
            {/* <div className="hidden md:flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                  <circle cx="12" cy="12" r="8" strokeWidth="2" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeWidth="2" />
                  <path
                    d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
