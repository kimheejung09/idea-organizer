import { useState } from "react";
import "../layout/IdeaPage.css";

function IdeaPage({ ideas, onDeleteIdea }) {
  // 날짜 그룹 / 정렬용
  const formatDate = (ts) =>
    new Date(ts).toISOString().slice(0, 10);

  const groupedIdeas = ideas.reduce((acc, idea) => {
    const dateKey = formatDate(idea.createdAt);

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(idea);
    return acc;
  }, {});
  
  // 카드 날짜 표시
  const formatDateLabel = (ts) => {
    const d = new Date(ts);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${(String(d.getDate()).padStart(2, "0"))}`;

  };

  return (
    <div>
      {Object.entries(groupedIdeas).map(([date, ideas]) => (
        <section key={date}>
          <ul className="idea-list">
            {ideas.map((idea) => (

              <li key={idea.id} className="idea-item">
                
                <div className="idea-card">
                  {idea.image && (
                    <img 
                      src={process.env.PUBLIC_URL + idea.image}
                      alt={idea.title}
                      className="idea-image"
                    />
                  )}
                </div>

                <div className="idea-content">
                  <h3>{idea.title}</h3>
                  <p>{idea.content}</p>
                </div>
                
                  <span className="idea-date">{idea.status}</span>
                  <h2>{date}</h2>

                <button onClick={() => onDeleteIdea(idea.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default IdeaPage;
