function Person(){
    // this
    // this라는 keyword는 생성자 함수일 경우일 경우도 있고
    // 일반 함수인 경우에ㅇ도 있음
    // 생성자함수에서의 this => 생성자 함수에 의해서 만들어질 instance 를 가리키는 reference, 즉 생성된 객체를 가리킨다.
    // 일반함수에서의 this => window(global) 객체를 가리킴
    // 자바스크립트가 실행될떄 브라우저는 window 라는 전역객체 node 는 global 이라는 전역객체를 만든다(환경마다 다름()
    console.log(this);
}

Person();
new Person();
