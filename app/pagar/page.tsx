"use client";
import { useState } from "react";

const QR_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcAQAAAACVhUrRAAAD8ElEQVR4nO2dTW7lIBCEq0dvDzeY+x8rN4AT9CygfyCRskjiIaLYPIztT2ZRaiganii+XPqfrzMAQgghhBBCboGIlwp0QY8KgFkHpEIkKvHKYd0hhJBHIC8AKG1cyPgpKn1W0atafVSkNN1fOac7hBDyNMQiCFBURFBUGwDIX0VRVfW7MCnFK+d1hxBC/g8kCwdz8KYNKKpvog0mmZ//EkIIORfy2ht6Hc6bpDYZ7b2iqJT3ztw53SGEkMcgUzuuBwEE0F7njKaLFpXSXEraZdxKEjqnO4QQ8iykT88MAIqi6BitSQVKzHRmow3k4pXTukMIIU9AXlgiCHRcDkOgi47JThe1S/VnvvlLCCHkd0GgqsMcGG4Aio5G1akPv7W1qJd2TncIIeQxCKYihmTabFkax6XLqsUDU1PUDiE3QizumDpmTGkz0Jg6MOo5AKVnzukOIYQ8BsEikBahB2k4N0sxfWk0UjuE3AoZOTmKLihqOTltJt5YUUBKm4ukW+O3fQkhhPwuyAtjQQfDRqtiyWziZlpRr6u3j7nPlNI53SGEkMcgNpFJ/kAekoU/0NaZkd2iV0DI5RARS1rrIjVSQAHTCGIDAhDWgbZv/hJCCPklELMF3ENrdiM70i0UFDEozIRzukMIIY9BYvnGiw/MtoUer2ThUDuE3ApBlsxsaQB2vUSlWBjifIeQqyHhFURmTlr0caUsIclf5JiNkHshMd/Z3TNz26KSL5esg3O6Qwghj0FS3Mm+QQpGkYSzzn0iI5TaIeRGyD7xz0ZBPFCWNaDdT6B2CLkR8kGsydnUEWvSxGe+6dYctUPIjRDTSEvbEJKfFkrBMoRbRnTUDiG3QmzrtMWgtzhjCmmEFsfjjNyDam72Yd0hhJBHIDFImyWPyvIDria3sn3Kw7hDyI0QG3ohZdqsO0Pzxjc3q6OF8x1CLoXs6ztxiYg17/dZr2HonO4QQshjEDsnZ2zS6dWOm1bYWW1Il75/x3bugPt3CLkVkjZWp5M98vhtWfdJ1kEKQOd0hxBCHoMsYtnrbVnl8SlPNrQ53yHkVkheprEmDytxilRKPEA8Nh+mdgi5EZLCjcUXIOcMhDOQ98Et4zdqh5AbIUvmwDKRQUr7zFvhyhKAOGYj5FbIR7rw9rTv4P2xh+EtUDuE3AiJtdEtV20/0hBpx2guHLMRQgiA8T+81f4PMRsI7ld3yW72z30JIYScDdn/920seo4DP8Vl0kV7BYBeMddGqx0K+l1fQgghvxKSB2n+p/DzUgRFRzwakWge0fYm9thx3SGEkJ+H7D7bYkfnPderBRfeNb0CQi6FiH7+zGeln9MdQgghhBBCDof8A59dW3ZlX20SAAAAAElFTkSuQmCC";
const PIX_PAYLOAD = "0002011226480014BR.GOV.BCB.PIX0126durandtechsysten@gmail.com520400005303986540597.005802BR5913OTAVIO DURAND6007PELOTAS62140510CONDOPRO976304F55A";
const PIX_KEY = "durandtechsysten@gmail.com";

export default function PagarPage() {
  const [copied, setCopied] = useState("");
  const copy = (text:string, type:string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(()=>setCopied(""), 2000);
  };
  return (
    <div className="min-h-screen bg-[#020208] text-white flex items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-[#00D1FF] rounded-full blur-[100px] opacity-20 -top-40 -left-40" />
      <div className="absolute w-[500px] h-[500px] bg-[#7c3aed] rounded-full blur-[90px] opacity-20 -bottom-40 -right-40" />
      <div className="relative z-10 w-full max-w-[460px] bg-[#12121a] border border-white/10 rounded-[28px] p-8 backdrop-blur-xl">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#00D1FF] to-[#0A84FF] grid place-items-center font-black text-xl">D</div>
          <h1 className="mt-3 text-xl font-black">Assinar CondoManager PRO</h1>
          <p className="text-sm text-white/50 mt-1">R$ 97,00 / mes - Acesso imediato apos comprovante</p>
        </div>
        <div className="mt-6 bg-white rounded-[18px] p-4 grid place-items-center">
          <img src={QR_B64} alt="PIX QR Code" className="w-[220px] h-[220px]" />
        </div>
        <div className="mt-5 space-y-3">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] text-white/40">PIX Copia e Cola</div>
            <div className="mt-1 text-[10px] font-mono break-all text-white/70 leading-tight">{PIX_PAYLOAD}</div>
            <button onClick={()=>copy(PIX_PAYLOAD, "payload")} className="mt-2 w-full py-2.5 rounded-xl bg-[#00D1FF] text-black font-bold text-xs">
              {copied==="payload" ? "Copiado!" : "Copiar codigo PIX"}
            </button>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
            <div>
              <div className="text-[11px] text-white/40">Chave PIX (e-mail)</div>
              <div className="text-sm font-mono font-bold">{PIX_KEY}</div>
            </div>
            <button onClick={()=>copy(PIX_KEY, "key")} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-bold">
              {copied==="key" ? "OK" : "Copiar"}
            </button>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-xl bg-[rgba(0,209,255,0.08)] border border-[rgba(0,209,255,0.15)]">
          <div className="text-xs font-bold text-[#7DD3FC]">Apos pagar, envie o comprovante:</div>
          <div className="mt-2 text-[12px] text-white/70 leading-relaxed">
            <b>WhatsApp:</b> (53) 99707-3648<br/>
            <b>E-mail:</b> durandtechsysten@gmail.com<br/>
            <span className="text-white/40">Informe seu e-mail de cadastro</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href="https://wa.me/5553997073648?text=Ol%C3%A1!%20Paguei%20CondoManager%20PRO%20R%2497%20-%20Meu%20email:%20" target="_blank" className="py-2.5 rounded-xl bg-[#25D366] text-center font-bold text-xs">WhatsApp</a>
            <a href="mailto:durandtechsysten@gmail.com?subject=Comprovante PIX CondoManager PRO" className="py-2.5 rounded-xl bg-white/10 border border-white/10 text-center font-bold text-xs">E-mail</a>
          </div>
        </div>
        <p className="text-center mt-5 text-[10px] text-white/25">Liberacao em ate 2h - Suporte (53) 99707-3648</p>
        <a href="/" className="block text-center mt-3 text-xs text-white/40 underline">Voltar ao site</a>
      </div>
    </div>
  );
}
