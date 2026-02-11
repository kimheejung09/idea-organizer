import "./IdeaStatus.css";

function IdeaStatus({ status }) {
  return (
    <span className={`idea-status ${status}`}>
      {status}
    </span>
  );
}

export default IdeaStatus;
