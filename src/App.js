import './App.css';
import List from "./List";

const App = () => {
    const slide1Images = [
        "https://media.istockphoto.com/photos/sunrise-on-a-lake-picture-id1043560968",
        "https://media.istockphoto.com/photos/moraine-lake-in-banff-national-park-canada-picture-id500177214",
        "https://media.istockphoto.com/photos/lupins-of-lake-tekapo-picture-id607280514"
    ]
    const slide2Images = [
        "https://media.istockphoto.com/photos/farmer-holds-in-hands-wooden-box-with-vegetables-produce-in-garden-picture-id1162332668",
        "https://media.istockphoto.com/photos/farmer-woman-holding-wooden-box-full-of-fresh-raw-vegetables-picture-id1222581489",
        "https://media.istockphoto.com/photos/young-farmer-with-crate-full-of-vegetables-picture-id901653798"
    ]

    const fadeIn = "0% { opacity: 0; } 100% { opacity: 1; }"
    const fadeOut = "0% { opacity: 1; } 100% { opacity: 0; }"
    const slideIn = "0% { left: 100%; } 100% { left: 0; }"
    const slideOut = "0% { left: 0; } 100% { left: -100%; }"

  return (
    <div className="App">
        <List
            keyframeIn={fadeIn}
            keyframeOut={fadeOut}
            slides={slide1Images}
            styles={{ width: 450, height: 300 }}
            animation={{ delay: "2s", direction: "normal", duration: "1s", iterationCount: 1, timingFunction: "ease-in" }}
            transition={{ transitionInTime: 500, displayTime: 2000, transitionOutTime: 500 }}
        />
        <List
            keyframeIn={slideIn}
            keyframeOut={slideOut}
            slides={slide2Images}
            styles={{ width: 450, height: 300 }}
            animation={{ delay: "2s", direction: "normal", duration: "1s", iterationCount: 1, timingFunction: "ease-in" }}
            transition={{ transitionInTime: 500, displayTime: 2000, transitionOutTime: 500 }}
        />
    </div>
  );
}

export default App;
