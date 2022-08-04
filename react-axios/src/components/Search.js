import React from 'react';
import axios from "axios";

const Search = React.memo(({keyword, setKeyword, data, setData,images,setImages}) => {
    console.log("찾기 컴포넌트");
    const option = {
        url: "https://api.themoviedb.org/3/search/movie",
        method: "get",
        params: {
            api_key: "0fd9487acacd3517ed78243131ba7995",
            language: "ko",
            query: keyword
        },
        responseType: "json"
    }
    const callAjax = () => {
        axios(option)
            .then((response) => { //then() => 성공하면 해당 구문 실행
                setData(response.data); // 영화 정보 받아오기
            }).catch((e) => { // catch() => 뭔가 문제가 있으면 이거 실행
            console.log("뭔가 이상하다");
        }).finally(() => { // finally() => 얘는 무조건 실행
            console.log("무조건 출력!!");
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
        callAjax();
    }
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-500 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text" aria-label="Filter projects" placeholder="Filter projects..."
                onChange={handleChange}
                value={keyword}
            />
            <input type='submit'
                   className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            </input>

        </form>
    );
});

export default Search;
