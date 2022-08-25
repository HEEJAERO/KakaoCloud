import React from "react";
const List = React.memo(({children}) => {
    console.log("리스트1 컴포넌트")
    return (
        <ul className="divide-y divide-slate-100">
            {children}
        </ul>
    )
});
export default List;