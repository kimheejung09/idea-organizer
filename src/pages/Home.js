import IdeaList from "../components/idea/IdeaList";



function Home() {
    const ideas = [{
        id:1,
        title:"아이디어 1",
        content:"내용",
        status: "💡",
    },];


    return(
        <div>
            <h1 className="home-title">아이디어 목록</h1>
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
            <IdeaList ideas={ideas} />
        </div>
    )
};


export default Home;