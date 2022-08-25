import React from 'react';
import axios from "axios";

const Search = React.memo(({date, setDate,datas,setDatas}) => {
    console.log("날짜 컴포넌트");
    const getInfo =(name)=> {
        return {
            url: "https://api.themoviedb.org/3/search/movie",
            method: "get",
            params: {
                api_key: "0fd9487acacd3517ed78243131ba7995",
                language: "ko",
                query: name
            },
            responseType: "json"
        };
    };
    const daily = {
        url: "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        method: "get",
        params: {
            key: "61403030bdb9e0a4075fd0a69b0c1fbf",
            targetDt: date.replaceAll('-','') // 날짜를 입력받고 api 형식에 맞게 변환
        },
        responseType: "json"
    }
    const callAjax = () => {
        axios(daily)
            .then((response) => { //then() => 성공하면 해당 구문 실행
                const newList = response.data.boxOfficeResult.dailyBoxOfficeList.map((info) => ({
                    rank: info.rank,
                    movieNm: info.movieNm
                }));
                let newData=[];
                newList.map((info,index)=>
                    axios(getInfo(info.movieNm))
                        .then((response) => { //then() => 성공하면 해당 구문 실행
                            newData.push({rank:index , data:response.data.results[0]});
                            if (newData.length === newList.length) {
                                let result = newData.sort((a, b) => a.rank - b.rank);
                                console.log(result);
                                setDatas(result);
                            }
                        }).catch((e) => { // catch() => 뭔가 문제가 있으면 이거 실행
                        console.log("뭔가 이상하다");
                        console.log(e);
                    }).finally(() => { // finally() => 얘는 무조건 실행
                        console.log("무조건 출력!!");
                    })
                );
            }).catch((e) => { // catch() => 뭔가 문제가 있으면 이거 실행
            console.log("뭔가 이상하다");
            console.log(e);
        }).finally(() => { // finally() => 얘는 무조건 실행
            console.log("무조건 출력!!");
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        callAjax();
    }
    const handleChange = (e) => {
        setDate(e.target.value);
    }
    console.log(date);
    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-500 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="date" aria-label="Filter projects"
                onChange={handleChange}
                value={date}
            />
            <input type='submit'
                   className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            </input>

        </form>
    );
});

export default Search;
