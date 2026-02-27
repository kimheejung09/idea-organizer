💡 Idea Organizer
떠오른 아이디어를 기록하고 상태별로 정리할 수 있도록 구현한 React 기반 웹 애플리케이션 입니다.

 🔗 Live Demo
 배포 링크 : https://kimheejung09.github.io/idea-organizer/

 🛠 Tech Stack

- React
- JavaScript (ES6+)
- CSS
- React Hooks (useState, useEffect, useRef)

✨ 주요 기능
- 날짜별 아이디어 자동 그룹화 (createdAt 기준)
- 아이디어 상태 변경 가능( 드롭다운 UI)
- 커스텀 드롭다운 UI 구현
- 랜덤 이미지 배경 적용
- 아이디어 삭제 기능

💡 구현 포인트

커스텀 드롭다운 구현
- 기본 `<select>` 대신 `ul / li` 구조로 직접 구현
- `useState`로 열림/닫힘 상태 관리
- `useRef + useEffect`를 활용한 외부 클릭 감지 기능 구현

날짜별 그룹화 로직
- `reduce()`를 활용해 아이디어를 날짜 기준으로 그룹화
- 조건부 렌더링으로 섹션 단위 출력

컴포넌트 분리 설계
- StatusSelect 컴포넌트 분리
- 재사용성과 유지보수성을 고려한 구조 설계

🛠 Trouble Shooting

- `useRef is not defined` 오류 → React Hook import 누락 문제 해결
- 드롭다운 외부 클릭 시 닫히지 않는 문제 → ref 연결 위치 수정으로 해결
