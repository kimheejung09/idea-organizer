import SearchInput from "../common/SearchInput";
import Button from "../common/Button";
import "./Header.css";
import { useState } from "react";
import IdeaModal from "../../pages/IdeaModal";
import SettingModal from "../../pages/SettingModal";

function Header({ filter, setFilter, search, setSearch, onOpenModal }) {

  const [ideaopen, setideaOpen] = useState(false);  //+ new idea 버튼
  const [settingopen, setsettingopen] = useState(false);  //설정 버튼
  const [selectedStatus, setSelectedStatus] = useState("전체");





  return (
    <header className="header">

      {/* 왼쪽 로고 */}
      <div className="header-left">
        <h1 className="logo">Idea Box</h1>
      </div>

      {/* 가운데 검색 + 필터 */}
      <div className="header-center">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <select className="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value={"전체"}>전체</option>
          <option value={"정리중"}> 정리중</option>
          <option value={"보류중"}>보류</option>
          <option value={"완성"}>완성</option>
        </select>

        <select className="sort">
          <option>최신순</option>
          <option>오래된순</option>
        </select>
      </div>  

      {/* 오른쪽 설정 + 새 아이디어 버튼  */}
      <div className="header-right">
        <button onClick={onOpenModal}> + new idea</button>
          
       

        {/* {ideaopen && (
          <IdeaModal 
            onClose={() => setideaOpen(false)} 
            onSave={onAddIdea}  
          />
        )} */}

        <button className="icon-btn" onClick={() => onOpenModal}>
          ⚙️
        </button>

        {settingopen && (
          <SettingModal onClose={() => setsettingopen(false)} />
        )}
      </div>
    </header>
  );
}

export default Header;
