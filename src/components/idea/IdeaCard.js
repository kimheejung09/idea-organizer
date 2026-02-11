import IdeaStatus from "./IdeaStatus";
import "./IdeaCard.css";

function IdeaCard({ idea }) {
  if (!idea) return null;   //로딩 


  
  return (
    <div className="idea-card">
      <IdeaStatus status={idea?.status} />
      <h3>{idea.title}</h3>
      <p>{idea.content}</p>
    </div>
  );
}

export default IdeaCard;
