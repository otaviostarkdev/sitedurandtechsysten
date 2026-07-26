from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SITE = "https://www.durandtechsystem.com.br"
PIX = "00895672006"
JULIANA_ZAP = "https://wa.me/5548998290105?text=Oi%20Juliana!%20Maquininha%20Ton%20200,0"

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    msg = data.get("message", "")
    return jsonify({"reply": f"Juliana recebeu: {msg}", "pix": PIX, "zap": JULIANA_ZAP})

@app.route("/api")
def api():
    return jsonify({"message": "API da Juliana online!"})
