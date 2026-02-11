import { useState } from "react";

function SettingModal ({ onClose}) {
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
             />

                 <div>
                    <label>기본 정렬</label>
                        <select>
                            <option>최신순</option>
                            <option>오래된순</option>
                        </select>
                </div>

                <div>
                    <button onClick={onClose}>닫기</button>
                </div>
        </div>
    );
}

export default SettingModal;