from flask import Blueprint, request, jsonify

triage_bp = Blueprint('triage', __name__)

@triage_bp.route('/api/triage', methods=['POST'])
def process_triage():
    # Connects to LangGraph workflow
    data = request.json
    return jsonify({"message": "Triage route active", "data": data}), 200
