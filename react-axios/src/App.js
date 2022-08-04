import './App.css';
import Movies from "./components/Movies";

const App = () => {
    console.log("앱 컴포넌트실행");
    return (
        <div className="divide-y divide-slate-100">
            <Movies/>
        </div>
    );
};

export default App;
