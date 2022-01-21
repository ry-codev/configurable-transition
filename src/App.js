import './App.css';
import Pagination from "./Pagination";

const App = () => {
    const imagePaginationProps = {
        CssProps: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 15
        },
        pages: [
            {
                Type: "Image",
                CssProps: {},
                Transition: {
                    DisplayTime: 4000,
                    TransitionInTime: 1000,
                    TransitionOutTime: 1000
                },
                Delay: 3000,
                TransitionInKeyFrame: "0% { left: -100%; opacity: 0; } 100% { left: 0; opacity: 1; }",
                TransitionOutKeyFrame: "0% { left: 0; opacity: 1; } 100% { left: -100%; opacity: 0; }",
                Url: "https://media.istockphoto.com/photos/farmer-holds-in-hands-wooden-box-with-vegetables-produce-in-garden-picture-id1162332668"
            },
            {
                Type: "Image",
                CssProps: {},
                Transition: {
                    DisplayTime: 4000,
                    TransitionInTime: 1000,
                    TransitionOutTime: 1000
                },
                Delay: 0,
                TransitionInKeyFrame: "0% { left: -100%; opacity: 0; } 100% { left: 0; opacity: 1; }",
                TransitionOutKeyFrame: "0% { left: 0; opacity: 1; } 100% { left: -100%; opacity: 0; }",
                Url: "https://media.istockphoto.com/photos/farmer-woman-holding-wooden-box-full-of-fresh-raw-vegetables-picture-id1222581489"
            },
            {
                Type: "Image",
                CssProps: {},
                Transition: {
                    DisplayTime: 4000,
                    TransitionInTime: 1000,
                    TransitionOutTime: 1000
                },
                Delay: 3000,
                TransitionInKeyFrame: "0% { left: -100%; opacity: 0; } 100% { left: 0; opacity: 1; }",
                TransitionOutKeyFrame: "0% { left: 0; opacity: 1; } 100% { left: -100%; opacity: 0; }",
                Url: "https://media.istockphoto.com/photos/young-farmer-with-crate-full-of-vegetables-picture-id901653798"
            }
        ]
    }
    const textPaginationProps = {
        CssProps: {
            position: "absolute",
            left: 0,
            top: "400px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 10
        },
        pages: [
            {
                Type: "Text",
                Text: "Next Departure 09:00AM",
                CssProps: {
                    fontSize: "50px",
                    color: "#ff0000",
                    fontWeight: "bold"
                },
                Transition: {
                    DisplayTime: 5000,
                    TransitionInTime: 4000,
                    TransitionOutTime: 4000
                },
                Delay: 2000,
                TransitionInKeyFrame: "0% { left: 0; opacity: 1; } 100% { left: 1100px; opacity: 1; }",
                TransitionOutKeyFrame: "0% { left: 1100px; opacity: 1; } 100% { left: -100%; opacity: 0; }",
            }
        ]
    }
    const imagePagination2Props= {
        CssProps: {
            position: "absolute",
            right: 0,
            top: 0,
            width: "600px",
            height: "500px",
            overflow: "hidden",
            zIndex: 10
        },
        pages: [
            {
                Type: "Image",
                CssProps: {
                    width: "600px",
                    overflow: "hidden"
                },
                Transition: {
                    DisplayTime: 3000,
                    TransitionInTime: 1000,
                    TransitionOutTime: 2000
                },
                Delay: 5000,
                TransitionInKeyFrame: "0% { opacity: 0; width: 600px; } 100% { opacity: 1; width: 600px; }",
                TransitionOutKeyFrame: "0% { opacity: 1; width: 600px; } 100% { opacity: 0; width: 0; }",
                Url: "https://media.istockphoto.com/photos/farmer-holds-in-hands-wooden-box-with-vegetables-produce-in-garden-picture-id1162332668"
            },
            {
                Type: "Image",
                CssProps: {
                    width: "600px",
                    overflow: "hidden"
                },
                Transition: {
                    DisplayTime: 3000,
                    TransitionInTime: 1000,
                    TransitionOutTime: 2000
                },
                Delay: 3000,
                TransitionInKeyFrame: "0% { opacity: 0; width: 600px; } 100% { opacity: 1; width: 600px; }",
                TransitionOutKeyFrame: "0% { opacity: 1;  width: 600px; } 100% { opacity: 0; width: 0; }",
                Url: "https://media.istockphoto.com/photos/farmer-woman-holding-wooden-box-full-of-fresh-raw-vegetables-picture-id1222581489"
            }
        ]
    }

    return (
    <div className="App">
        <Pagination {...imagePaginationProps} />
        <Pagination {...textPaginationProps} />
        <Pagination {...imagePagination2Props} />
    </div>);
}

export default App;
