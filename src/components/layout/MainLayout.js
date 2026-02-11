import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import IdeaPage from "./IdeaPage";
import IdeaModal from "../../pages/IdeaModal";
import "./MainLayout.css";
import IdeaCard from "../idea/IdeaCard";

function MainLayout() {
  // const [selectedIdea, setSelectedIdea] = useState(null);
  const [search, setSearch] = useState("");   //검색어
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  // 저장
  const [ideas, setIdeas] = useState(() => {
    const saved = localStorage.getItem("ideas");
    return saved? JSON.parse(saved) : [];
  });


  const [filter, setFilter] = useState("전체");   

  const filteredIdeas = ideas.filter((idea) => {
    const matchStatus = 
      filter === "전체" || idea.status === filter;

      const matchSearch =
        idea.title.includes(search) || 
        idea.content.includes(search);

      return matchStatus && matchSearch;  
  });

  // 삭제 
  const onDeleteIdea = (id) => {
    setIdeas((prev) => prev.filter((idea) => idea.id !== id));
  };
  
  //바뀔때마다 저장 + 삭제
  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const onAddIdea = (newIdea) => {
    setIdeas((prev) => [...prev, newIdea]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="layout">
      {/* 상단 헤더 */}
      <Header onOpenModal={() => setIsModalOpen(true)} filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />

      <div className="layout-body">
        {/* 사이드바 */}
        <Sidebar ideas={filteredIdeas} />

        {/* 메인 콘텐츠 */}
        <main className="layout-content">
          <IdeaPage ideas={filteredIdeas} onDeleteIdea={onDeleteIdea}/>  
          {/* <IdeaCard ideas={ideas} /> */}
        </main>
      </div>

      {/* modal 열기 */}
      {isModalOpen  && (
        <IdeaModal
          onAddIdea={onAddIdea}
          onClose={() => setIsModalOpen(false)}
        />
      )}

    </div>
  );
}

export default MainLayout;
