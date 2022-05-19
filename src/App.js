import React from "react";
import Header from "./component/Header/Header";
import FirstSection from "./component/FirstSection/FirstSection";
import SecondSection from "./component/SecondSection/SecondSection";
import ThirdSection from "./component/ThirdSection/ThirdSection";
import Comments from "./component/Comments/Comments";
import Footer from "./component/Footer/Footer";

const App = () => {
    return (
        <div className="w3-content" style={{maxWidth: "1400px"}}>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Comments/>
            <Footer/>
        </div>
    )
}

export default App;