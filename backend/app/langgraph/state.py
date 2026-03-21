from typing import TypedDict, List

class TriageState(TypedDict):
    messages: List[str]
    history: List[str]
    urgency: str
    mode: str  # Medical vs Mental Health
