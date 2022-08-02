function getData(){
    // 서버 프로르램을 호출해서 결과를 받아오고 화면처리
    // 비동기방식으로 처리
    // AJAX 를 이용하여 처리
    let today = $('#searchDate').val();
    today = today.replace(/-/g, '');

    let movieInfo;
    $.ajax({
        async: true, // ajax의 기본 동적(비동기) //동기적 처리를 할것인가 비동기적 처리를 할것인가?
        url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json' ,
        // 쿼리스트링을 제외한 url
        type: "GET",
        data : {
            key:'61403030bdb9e0a4075fd0a69b0c1fbf',
            targetDt:today //2022.07.30 => .(혹은 -) 을 제거해줘야함
        }, // url 에 붙여서 나갈 데이터
        timeout: 3000 ,// ms 단위로 적음(1/1000 초) 이시간내에 서버로부터 결과가 안오면  실패로 간주
        dataType: 'json',
        success: function(result){
            $('tbody').empty();
            // 만약 서버호출이 성공하면 이 함수가 호출된다.
            movieInfo = result['boxOfficeResult']['dailyBoxOfficeList'];
            console.log(result);
            for(let i=0;i<movieInfo.length;i++) {
                let movieName =movieInfo[i]['movieNm'];
                let tr = $("<tr></tr>");
                let orderTd = $("<td></td>").text(result['boxOfficeResult']['dailyBoxOfficeList'][i]['rank']);
                tr.append(orderTd);
                let postTd = $("<td></td>");
                let img = $("<img/>");
                // 클로저를 이용하여 해당 변수에 접근이 가능하다.
                // 이런식으로 선언을 하면 ajax는 이후에 선언되더라도 이미 테이블은 다 만들어진 상태이기때문에
                // 해당 함수가 끝나고 변수에 속성과 값을 추가할 수 있다.
                $.ajax({
                    async: true,
                    url: 'https://dapi.kakao.com/v2/search/image',
                    type: 'GET',
                    headers: {'Authorization': 'KakaoAK bc6a29f2bfa0a8ccd02aeb329145a454'},
                    data: {
                        query: movieInfo[i]['movieNm']
                    },
                    timeout: 3000,
                    dataType: 'json',
                    success: function (result) {
                        img.attr('src', result['documents'][0]['thumbnail_url']);
                        img.attr('width', 200);
                    },
                    error: function () {
                        console.log("이미지 못가져옴");
                    }
                })
                postTd.append(img);
                tr.append(postTd);
                let titleTd = $("<td></td>").text(movieInfo[i]['movieNm']);
                tr.append(titleTd);
                let actorTd = $("<td></td>");
                $.ajax({
                    async: true,
                    url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                    type: 'GET',

                    data: {
                        key: '61403030bdb9e0a4075fd0a69b0c1fbf',
                        movieCd: movieInfo[i]['movieCd']
                    },
                    timeout: 3000,
                    dataType: 'json',
                    success: function (result) {
                        console.log(result)
                        actorTd.text(result['movieInfoResult']['movieInfo']['actors'][0]['peopleNm'])
                    },
                    error: function () {
                        console.log("주연배우들 못가져옴");
                    }
                })
                tr.append(actorTd);
                let deleteTd = $("<td></td>");
                tr.append(deleteTd);
                $('tbody').append(tr);
            }
        },
        error:function(){
             // 만약 서버호출이 실패하면 이 함수가 호출된다.
            alert('뭔가 이상하다...?');
        }
    });
}
