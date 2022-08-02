<%@ page import="Board.dto.Board" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: heejae
  Date: 2022/07/27
  Time: 3:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%   // 로그인 하지않고 접근시 login.html 창으로 redirect
    if (session.getAttribute("userId") == null) {
        response.sendRedirect("/login");
    }
%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>게시판</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="/board/js/board.js"></script>
    <!-- Favicons -->

    <meta name="theme-color" content="#712cf9">
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        .b-example-divider {
            height: 3rem;
            background-color: rgba(0, 0, 0, .1);
            border: solid rgba(0, 0, 0, .15);
            border-width: 1px 0;
            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }

        .b-example-vr {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
        }

        .bi {
            vertical-align: -.125em;
            fill: currentColor;
        }

        .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
        }

        .nav-scroller .nav {
            display: flex;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }
    </style>


    <!-- Custom styles for this template -->
    <link href="/board/css/board.css" rel="stylesheet">
</head>
<body>

<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
        환영합니다. <%=session.getAttribute("userId")%>
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
    <div class="navbar-nav">
        <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">검색</a>
        </div>
    </div>
</header>

<div class="container-fluid">
    <div class="row">

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">게시판</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="location.href='http://localhost:8080/board/write.jsp'">글 작성</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                </div>
            </div>
            <h2>게시글 목록</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <%
                        List<Board> list = (List<Board>) request.getAttribute("list");
                    %>
                    <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성일</th>
                        <th scope="col">조회수</th>
                        <th scope="col">좋아요</th>
                    </tr>
                    </thead>
                    <tbody>
                        <% for (Board board:list) {%>
                        <tr>
                        <td onclick="loadDetail(<%=board.getBoard_id()%>)" id="<%=board.getBoard_id()%>"><%=board.getBoard_id()%></td>
                        <td><%=board.getBoard_title()%></td>
                        <td><%= board.getBoard_createDate()%></td>
                        <td><%= board.getBoard_views()%></td>
                        <td><%= board.getBoard_likes()%></td>
                        </tr>
                        <%}%>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</div>


</body>
</html>
