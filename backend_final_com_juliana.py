from flask import Flask, request, jsonify
from flask_cors import CORS
import csv, os
from datetime import datetime

app = Flask(__name__)
CORS(app)

PIX = "durandtechsysten@gmail.com"
NUMERO = "(53) 99707-3648"
SITE = "https://www.durandtechsysten.com.br"
JULIANA_ZAP = "https://wa.me/5548998290105?text=Oi%20Juliana!%20Maquininha%20Ton%200,74%25"

memoria = {}

def responder(user_id, msg):
    m = msg.lower()
    
    # MAQUININHA - JULIANA
    if any(x in m for x in ["maquina", "maquininha", "ton", "cartão", "cartao"]):
        return f"💳 Maquininha Ton 0,74% + Frete Grátis!\n\nJuliana especialista Ton\n👉 {JULIANA_ZAP}\n\nOu clique no banner verde no topo do site! Ver Máquina →"

    if m in ["1", "site"]:
        memoria[user_id] = "nicho"
        return f"🌐 Site R$ 997 - {SITE}\nQual seu nicho? Loja, Advocacia, Barbearia..."

    if memoria.get(user_id) == "nicho":
        memoria[user_id] = "empresa"
        memoria[user_id+"_nicho"] = msg
        # Salva lead
        with open("leads_site.csv","a",newline="",encoding="utf-8") as f:
            csv.writer(f).writerow([datetime.now().strftime("%d/%m %H:%M"), user_id, f"Nicho: {msg}"])
        return f"✅ {msg.upper()} anotado!\nQual nome da empresa?"

    if memoria.get(user_id) == "empresa":
        memoria[user_id] = ""
        nicho = memoria.get(user_id+"_nicho","")
        with open("leads_site.csv","a",newline="",encoding="utf-8") as f:
            csv.writer(f).writerow([datetime.now().strftime("%d/%m %H:%M"), user_id, f"LEAD QUENTE - {nicho} - {msg}"])
        return f"🔥 {msg} - FECHADO!\n\n📋 Finalize: {SITE}/#orcamento\nPIX: {PIX}\nZap: {NUMERO}"

    return f"👋 Durand Tech {SITE}\n1️⃣ Site R$ 997\n2️⃣ Sistema\n3️⃣ CondoManager\n4️⃣ Maquininha Ton\n📋 {SITE}/#orcamento"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    msg = data.get("message","")
    uid = data.get("user_id","anon")
    return jsonify({"reply": responder(uid, msg), "pix": PIX})

@app.route("/")
def home():
    return jsonify({"status":"Durand Tech Bot Online com Juliana", "site": SITE, "pix": PIX})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
