import "./Sidebar.css";

function Sidebar({ ideas}) {
    const countByStatus = (status) =>
        ideas.filter((ideas) => ideas.status === status).length;
    
    return (
        <aside className="sidebar">
            <ul>
                <li>전체 ({ideas.length})</li>
                <li>💡 떠오름 (+{countByStatus("떠오름")})</li>
                <li>✍️ 정리중 (+{countByStatus("정리중")})</li>
                <li>⏸ 보류 (+{countByStatus("보류중")})</li>
                <li>✅ 완성 (+{countByStatus("완성")})</li>
            </ul>
            
            {/* <div className="">

            </div> */}


        </aside>
    )
};

export default Sidebar;