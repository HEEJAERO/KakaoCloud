import React from "react";
import ListItem from "./ListItem";
const List = React.memo(({data,setData, children}) => {
    console.log("리스트1 컴포넌트")
    return (
        <ul className="divide-y divide-slate-100">
            {children}
            {data.page > 0
                ? (data.results.map((movie) => (<ListItem key={movie.id} movie={movie}/>)))
                : (<div></div>)
            }
        </ul>
    )
});
export default List;