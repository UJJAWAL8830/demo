export default function MicButton({ onRecordingStart, onRecordingStop }) {
  return (
    <button onClick={onRecordingStart} className="mic-btn">
      🎤
    </button>
  );
}
