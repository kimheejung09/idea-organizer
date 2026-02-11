import IdeaCard from "./IdeaCard";
import "./IdeaList.css";

function IdeaList({ ideas = [] }) {
    // console.log("ideas:", ideas);
    


  return (
    <div className="idea-grid">
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
}

export default IdeaList;