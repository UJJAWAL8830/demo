export default function ModeToggle({ currentMode, onToggle }) {
  return (
    <button onClick={onToggle} className="mode-toggle">
      {currentMode === 'medical' ? 'Switch to Mental Health' : 'Switch to Medical Triage'}
    </button>
  );
}
