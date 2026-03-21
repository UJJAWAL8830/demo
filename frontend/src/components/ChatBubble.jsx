export default function ChatBubble({ message, isUser }) {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
      <p>{message}</p>
    </div>
  );
}
