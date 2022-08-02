function loadDetail(){
    console.log("클릭됨")
    let boardId = $('.getId').val();
    console.log("222")
    let requestURL = "http://localhost:8080/board?id=" + boardId;
    window.location.href = requestURL; // 현재 브라우저의 주소를 requestURL 로 바꾼다.
}