# node logic (ask_questions, classify, suggest)
def ask_questions(state):
    return {"messages": ["What are your symptoms?"]}

def classify_urgency(state):
    return {"urgency_level": "medium"}

def suggest_actions(state):
    return {"suggestion": "Rest and drink water."}
