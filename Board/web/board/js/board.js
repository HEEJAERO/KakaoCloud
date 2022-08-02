function loadDetail(i){
    console.log("클릭됨");
    let boardId = $('#'+i).text();
    console.log(boardId);
    console.log("222");
    let requestURL = "/board?id=" + boardId;
    window.location.href = requestURL; // 현재 브라우저의 주소를 requestURL 로 바꾼다.
}
function write(){
    let requestURL = "http://localhost:8080/board/write.jsp";
    window.location.href = requestURL;

}