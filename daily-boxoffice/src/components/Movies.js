
import List from './List.js'
import Search from './Search.js';
import React,{useState} from "react";
import ListItem from "./ListItem";


const Movies = React.memo(() => {
    const [date, setDate] = useState("");
    const [datas, setDatas] = useState([]);
    console.log("영화 컴포넌트 실행");
    console.log(datas.length);
    console.log(datas);
    console.log(date)
    return (
        <div className="divide-y divide-slate-100">
            <Search date={date}
                    setDate={setDate}
                    datas={datas}
                    setDatas={setDatas}
            />
            <List>
                {datas.length > 0
                    ? (datas.map((data, index) => {
                        if(data!==undefined)
                            return (<ListItem key={index} data={data.data}  datas={datas} setDatas={setDatas}/>)
                        })

                    )
                    : (<div></div>)
                }
            </List>
        </div>
    );
});
export default Movies;