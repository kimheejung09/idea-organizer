import { useEffect, useState } from "react";





// 랜덤 bg
  const ideaImages  = [
    process.env.PUBLIC_URL + "/images/idea1.jpg",
    process.env.PUBLIC_URL + "/images/idea2.jpg",
    process.env.PUBLIC_URL + "/images/idea3.png",
    process.env.PUBLIC_URL + "/images/idea4.jpg",
    process.env.PUBLIC_URL + "/images/idea6.jpg",
    process.env.PUBLIC_URL + "/images/idea7.jpg",
    process.env.PUBLIC_URL + "/images/idea8.png"
  ];

  const getRandomImage = () =>
    ideaImages[Math.floor(Math.random() * ideaImages.length)];


function IdeaModal({ onAddIdea, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("정리중");
  const [isManual, setIsManual] = useState(false);

  // 자동분류 (수동이 아닐때만)
  useEffect(() => {
    if (isManual) return //수동이면 자동 개입 금지

    if (content.includes("완성") || content.includes("배포")) {
      setStatus("완성");
      return;
    } 
    
    if (content.trim().length > 0) {
      setStatus("정리중");
      return;
    }

    // 입력 멈춤 감지 -> 보류중
    const timeout = setTimeout(() => {
      setStatus("보류중");
    }, 3000);    // 3초 입력 없으면 보류

    return () => clearTimeout(timeout);

  }, [content, isManual]);
    


  // esc 버튼 입력창 끄기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  // 저장
  const handleSave = () => {
  const randomImage = getRandomImage();

  const newIdea = {
    id: Date.now(),
    title,
    content,
    status,
    createdAt: Date.now(),
    image: randomImage, // 랜덤 이미지
  };

  console.log("저장되는 idea:", newIdea); // ✅ 디버깅용

  onAddIdea(newIdea); // ✅ 딱 한 번만 호출
  onClose();
};






  // new idea 창
  const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "8px",
  width: "400px",
};

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h3>New Idea</h3>

        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "8px" }}
        />

        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "100px" }}
        />


        <div style={{ marginTop: "10px", textAlign: "right" }}>
          <button onClick={handleSave}>저장</button>
          {/* <button onClick={handleDelete} style={{ color: "red" }}> */}
            {/* 삭제 */}
          {/* </button> */}
        </div>
      </div>
    </div>

    
  );
}

export default IdeaModal;
