from flask import Flask
from .routes.triage import triage_bp
from .routes.health_check import health_bp
from .routes.mental_health import mental_health_bp

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(health_bp)
    app.register_blueprint(triage_bp)
    app.register_blueprint(mental_health_bp)

    return app
