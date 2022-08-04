
import List from './List.js'

import Search from './Search.js';
import React,{useState} from "react";


const Movies = React.memo(() => {
    const [keyword, setKeyword] = useState("");

    const [data, setData] = useState({
        page: 0,
        result: []

    });
    const [images, setImages] = useState([]);
    console.log("영화 컴포넌트 실행");

    return (
        <div className="divide-y divide-slate-100">
            <Search keyword={keyword}
                    setKeyword={setKeyword}
                    data={data}
                    setData={setData}
                    images={images}
                    setImages = {setImages}
            />
            <List data={data} setData={setData}/>
        </div>
    );
});
export default Movies;