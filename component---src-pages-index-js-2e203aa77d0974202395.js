(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{216:function(M,L,N){"use strict";N.r(L);N(18);var j=N(0),D=N.n(j),w=N(217),C=N.n(w),T=N(213),z=N(218),y=N.n(z),u=function(M){var L=M.title,N=M.text,j=M.ribbonColor,w=M.cardIcon,C=M.cardState,T={background:j};return D.a.createElement("div",{className:y.a.card},D.a.createElement("div",{className:y.a.cardRibbon,style:T}),D.a.createElement("div",{className:y.a.cardContent},D.a.createElement("div",{className:y.a.cardState},D.a.createElement("img",{className:y.a.cardIcon,src:w,alt:""}),C),D.a.createElement("h2",{className:y.a.cardTitle},L),D.a.createElement("p",{className:y.a.cardText},N)))},t=N(212),c=N(219),O=N.n(c),x=N(220),I=N.n(x);N.d(L,"query",(function(){return i}));var i="2250417478";L.default=function(M){var L=M.data,N=Object(j.useState)({}),w=N[0],z=N[1];Object(j.useEffect)((function(){z(JSON.parse(localStorage.getItem("completedItems"))||{})}),[]);var y=L.allCheckListItem.nodes;return D.a.createElement(T.a,null,D.a.createElement(t.a,{title:"Home"}),D.a.createElement("div",{className:C.a.checklist},y.map((function(M){return D.a.createElement("div",{className:C.a.checklistItem,key:M.id,onClick:function(){return function(M){var L,N;w[M]?delete(L=Object.assign({},w))[M]:L=Object.assign({},w,((N={})[M]=!0,N));z(L),localStorage.setItem("completedItems",JSON.stringify(L))}(M.id)}},D.a.createElement(u,{title:M.title,text:M.description,ribbonColor:w[M.id]?"green":"red",cardIcon:w[M.id]?O.a:I.a,cardState:w[M.id]?"Complete!":"In progress!"}))}))))}},219:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTIgNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyIDUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjYsMEMxMS42NjQsMCwwLDExLjY2MywwLDI2czExLjY2NCwyNiwyNiwyNnMyNi0xMS42NjMsMjYtMjZTNDAuMzM2LDAsMjYsMHogTTI2LDUwQzEyLjc2Nyw1MCwyLDM5LjIzMywyLDI2DQoJCVMxMi43NjcsMiwyNiwyczI0LDEwLjc2NywyNCwyNFMzOS4yMzMsNTAsMjYsNTB6Ii8+DQoJPHBhdGggZD0iTTM4LjI1MiwxNS4zMzZsLTE1LjM2OSwxNy4yOWwtOS4yNTktNy40MDdjLTAuNDMtMC4zNDUtMS4wNjEtMC4yNzQtMS40MDUsMC4xNTZjLTAuMzQ1LDAuNDMyLTAuMjc1LDEuMDYxLDAuMTU2LDEuNDA2DQoJCWwxMCw4QzIyLjU1OSwzNC45MjgsMjIuNzgsMzUsMjMsMzVjMC4yNzYsMCwwLjU1MS0wLjExNCwwLjc0OC0wLjMzNmwxNi0xOGMwLjM2Ny0wLjQxMiwwLjMzLTEuMDQ1LTAuMDgzLTEuNDExDQoJCUMzOS4yNTEsMTQuODg1LDM4LjYyLDE0LjkyMiwzOC4yNTIsMTUuMzM2eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},220:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4OC43NjVweCIgaGVpZ2h0PSI0ODguNzY2cHgiIHZpZXdCb3g9IjAgMCA0ODguNzY1IDQ4OC43NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC43NjUgNDg4Ljc2NjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDYuOTU5LDg3LjA0N2wwLjA0Ni0wLjk2MmMwLjE4OC0zLjk5NC0xLjEyMi03Ljg2OS0zLjUwNC0xMC4zNjRjLTIuMDk4LTIuMTk0LTQuODkxLTMuMzExLTguMzAzLTMuMzExaC01Ny4zNDENCgkJCWwtMC4wMy0yLjU2OWMtMC4wNDYtMy40NTgtMC4wNzEtNi45MTEtMC4wNzEtMTAuMzc0YzAtMS4xNDctMC4xNDYtMi4yOTMtMC40ODEtMy41OThsLTAuMDk3LTAuMzc4bDAuMDIxLTAuMzkxDQoJCQljMC4xOTctMy45OTktMS4xMDMtNy44ODQtMy40ODktMTAuMzk1Yy0yLjA5Ny0yLjIwNC00Ljg5Ni0zLjMyMy04LjMxNy0zLjMyM2MtMTAuODM3LDAtMjEuNjczLTAuMDQ2LTMyLjQ5OS0wLjA5NGwtMi41MzktMC4wMQ0KCQkJbC0wLjA1MS0yLjUzNmMtMC4yMTktMTEuMjc4LTAuOTQ0LTIwLjY3LTIuMjg1LTI5LjU1N2MtMC44NjMtNS42OTItNi44NjUtOS4wOTUtMTIuMTgzLTkuMDk1bC0wLjcyNiwwLjAwNWwtMC42Mi0wLjA2NUwyMjMuODIyLDANCgkJCWMtMy43NTgsMC02Ljg2MywxLjQwOS04Ljk4LDQuMDg4Yy0yLjU0MiwzLjIyLTMuNDczLDcuOTg3LTIuNDE3LDEyLjQ0OWwwLjE4MywwLjc2NGwtMC4yNzcsMC43NDQNCgkJCWMtMC41NzYsMS41NDktMC44NzMsMy4wODctMC44NzMsNC41NzV2MTcuNTE0bC0yLjY4NC0wLjA4NGMtMTEuMDIyLTAuMzM3LTIyLjA0Ni0wLjcyNC0zMy4wNzEtMS4yNTdsLTAuNTM2LTAuMDE4DQoJCQljLTEuMDUxLDAtMi4wNzksMC4xNDctMy4yNTUsMC40NmwtMC4zNDMsMC4wOTFsLTAuMzU4LTAuMDA1aC0wLjAwNWMtNi4xNjcsMC0xMi42MjEsMy44ODUtMTIuNzEsMTIuNDE4DQoJCQljLTAuMDQ2LDQuMzczLTAuMjEzLDguNzM3LTAuNDc4LDEzLjA4NGwtMC4xNDcsMi40MzhsLTIuNDQzLDAuMDA1Yy0xOC45NDMsMC4wNTMtMzkuMjEyLDAuNDAxLTU5LjA3NCwyLjU0OQ0KCQkJYy0wLjY3OCwwLjA3MS0xLjI3NCwwLjIzOS0xLjg3OSwwLjQwMWwtMC44MjUsMC4xMjRjLTYuMjE1LDAtMTIuNDI4LDMuODMyLTEyLjQyOCwxMi40MDF2NDkuMTM5YzAsMi43NTUsMC42OSw1LjE5LDIuMDU0LDcuMjIxDQoJCQlsMC40NDIsMC42NTh2MC43OWMtMC4wMjEsMTEwLjUxMi0wLjQxMSwyMTAuMjc5LTQuOTkyLDMxMi4xMjNjLTAuMDU4LDEuMjM5LDAuMDc5LDIuNDc0LDAuNDAxLDMuODdsMC4xMjUsMC41MjdsLTAuMDk5LDAuNTM4DQoJCQljLTAuNjIsMy40MDItMC4wNzQsNi41MTEsMS41NDMsOC43NjZjMS40NTUsMi4wMzYsMy43NSwzLjMsNi43OTcsMy43NTdjOTkuODk0LDE0LjgxNywxOTguNDU4LDE2LjAyNiwzMDcuNzEsMTYuMDM2bDAuMDExLDIuNjAxDQoJCQl2LTIuNjAxYzcuODg2LDAsMTAuNDcxLTYuMDEyLDExLjIxMi04LjU5MmwwLjE2Ny0wLjU3OGwwLjQwNi0wLjQ0N2MyLjAyNi0yLjIzNCwzLjA1My01LjA3OCwzLjA1My04LjQ3Vjk1LjY3Mg0KCQkJYzAtMy4wOTMtMC44NDQtNS43MzgtMi41MDQtNy44NjZMNDA2Ljk1OSw4Ny4wNDd6IE0yMzYuMTc3LDI1LjgzNGgyOS4wOTdsMC4xMTEsMi40NzZjMC4xNjgsMy4zNjQsMC4yNjUsNi43MzMsMC4yOSwxMC4xMDMNCgkJCWwwLjAxNSwyLjY0MWwtOS4wNzktMC4wOTFjLTUuOTYyLTAuMDU5LTExLjkyMS0wLjExNy0xNy44OC0wLjIxOWwtMi41NTQtMC4wNDhWMjUuODM0eiBNMTc5LjE4MiwxMjAuMDk3DQoJCQljMC45MjctNy4wMSwxLjgxMS0yMy45NzYsMi41MTEtMzcuNjFjMC4zMjItNi4yNzYsMC42MDktMTEuNzU4LDAuODM4LTE1LjA3NGwwLjE3OC0yLjUyOWwyLjUyNiwwLjEwOQ0KCQkJYzQzLjEzMiwxLjg1MSw4NS42OTUsMi4xNTMsMTI1LjI3MywyLjE5NmgyLjU2OWwwLjAyNSwyLjU2N2MwLjI5NSwyNy43ODQsMC44MzgsNDcuMTc0LDEuNTQ5LDU0LjU5OGwwLjI3OSwyLjk2NmwtMi45NzYtMC4xMTkNCgkJCWMtMjIuNjM4LTAuOTI3LTQ1LjY3Ny0xLjU3Mi02Ny45NTEtMi4xOTFjLTIwLjc4NC0wLjU4Mi00MS41NjMtMS4xNjMtNjIuMzQyLTEuOTdsLTIuODQ5LTAuMTA5TDE3OS4xODIsMTIwLjA5N3oNCgkJCSBNMzg1LjMzMyw0NjAuMzA5aC0yLjYwMWMtOTguMDc1LTAuMDYyLTE4Ni41OTgtMS4xMTctMjc2LjcyMS0xMy40OTdsLTIuMzQxLTAuMzJsMC4wOTktMi4zNjYNCgkJCWM0LjI5Ni0xMDAuNTg1LDQuNjU0LTIwMC45MjMsNC42NTktMzEyLjI1YzAtMi43NjItMC42OS01LjItMi4wNTktNy4yMzhsLTAuNDM3LTAuNjU1Vjk0LjczN2wyLjQwNy0wLjE3OA0KCQkJYzE1Ljk5MS0xLjE4MSwzMS44NjQtMS4zOTksNDMuODk2LTEuNDU1bDIuOTY1LTAuMDE1bC0wLjM3LDIuOTQ3Yy0wLjExNCwwLjkxNC0wLjI1OSw3Ljc3NC0wLjM3NCwxMy4yODQNCgkJCWMtMC4xODgsOS4wMzktMC4yOTIsMTMuNDE2LTAuNDQyLDE0LjQ5MmMtMC4zMjIsMi4zOTctMC4yMzMsNC43NjQsMC4yNyw3LjAyNWwwLjEwOSwwLjUxMWwtMC4wOTQsMC41MjENCgkJCWMtMC43OCw0LjI4OCwwLjI5Miw4LjkwMSwyLjc5MiwxMi4wMzdjMi4xMzMsMi42ODIsNS4yMDUsNC4xODksOC44ODIsNC4zNTdjMjYuMTQxLDEuMTk1LDUyLjc0NywxLjkwNCw3OC40NzgsMi41ODQNCgkJCWMyNS43NTMsMC42ODEsNTIuMzgyLDEuMzg5LDc4LjU2OSwyLjU5bDAuNjgsMC4wMTZjNy44OTYsMCwxMC4wOC02LjMwNywxMC42NTktOS4wMjFsMC4xOTgtMC45NTdsMC43ODEtMC41ODkNCgkJCWMzLjUzNC0yLjY0MSw1LjM3My02LjMwMiw0LjkyNi05Ljc5NWMtMC4yNDQtMS45MjQtMC40MzItOS4wNDQtMC42NjUtMTguODljLTAuMTM3LTUuNzU4LTAuMjg0LTExLjcxLTAuNDAxLTEzLjEzN2wtMC4yNDMtMi44MjMNCgkJCWg0Ni4zNzJ2MzYyLjA2N0gzODUuMzMzeiIvPg0KCQk8cGF0aCBkPSJNMzM2LjU5NCwzNTQuNzg4Yy0xNS4yNjUtMTYuODY0LTMwLjQyOC0zMy44MDktNDUuMDc3LTUxLjE5Nmw0NC4zLTQ0LjNjNC45MTUtNC45MTYsMy4zNjEtMTEuMjEzLTAuNTk0LTE0Ljg2OQ0KCQkJYy0wLjM1MS0wLjYxMS0wLjc2Mi0xLjIxNi0xLjI1NS0xLjc5MmMtMTAuODExLTEyLjYwNC0yMi41MTYtMjQuMzYxLTM0LjI1MS0zNi4xMDJjLTEwLjU2Ny0xMC41NzMtMjEuNTc2LDEwLjA5Mi0yOC4xNTcsMTYuMjE5DQoJCQljLTEzLjQzMSwxMi40ODktMTcuNDAyLDE1Ljk5My0zMC44MjgsMjguNDljLTEyLjM5Ni0xMi40OTItMjguNDcyLTI4LjkyNy00MC4yMjUtNDIuMDMzYy0yLjgwMy0zLjEyOC02LjE2Ny0zLjg0Mi05LjE5NC0zLjA1Mg0KCQkJYy0yLjUxNi0wLjEzLTUuMTQ2LDAuNzI5LTcuNDcyLDMuMDUybC0zMC41NDksMzAuNTQ5Yy00Ljc0Myw0Ljc0LTMuNDczLDEwLjc3MywwLjE2MywxNC40OGMwLjQ1MiwwLjc1MSwwLjk4MywxLjQ4MiwxLjY4MywyLjE4NA0KCQkJYzEzLjM3MSwxMy4zNzUsMjUuMjQ2LDMwLjY1NSwzOC4wMTIsNDQuNjA0Yy0xNi4xMSwxNy4zNTYtMjcuNDQ0LDM0LjMyNy00My40NCw1MS43OTVjLTUuODE0LDYuMzU4LTEuODU2LDE0LjY5Niw0LjEzNCwxNy4yODYNCgkJCWM5LjIyNCwxMC43NiwxOS4xNzcsMjAuODQsMjkuMTkzLDMwLjg1OGMzLjcwNywzLjcwNyw4LjE5MywzLjcyMywxMS43NTEsMS44MjNjMS4zODktMC41MTgsMi43NDItMS4zODEsMy45OTQtMi43NTINCgkJCWMxNS43MDQtMTcuMjIsMzIuMDM3LTMzLjgxOSw0OC40ODQtNTAuMzEyYzEzLjk5OCwxNi44MDMsMjguNTMxLDMzLjEyOCw0My4xNjYsNDkuMzg4YzMuODk5LDQuMzM3LDguODUxLDQuMDI3LDEyLjUxNywxLjQ4Mw0KCQkJYzEuNzMyLTAuMzE1LDMuNDU5LTEuMDQ2LDUuMDczLTIuNDA3YzExLjY4OS05Ljg4MiwxOC44MDktMTYuNzY4LDMwLjQzMy0yNi43M2M1LjM3Mi00LjYwMSwzLjgyOC0xMC44MDYtMC4zLTE0LjQ1Mg0KCQkJQzMzNy43MzEsMzU2LjI1MSwzMzcuMjM5LDM1NS41MDQsMzM2LjU5NCwzNTQuNzg4eiBNMjk5LjQ1OCwzNzcuODUzYy0xNC43MjEtMTYuNDEyLTI5LjMzNS0zMi45MzYtNDMuMjc5LTUwLjAyOA0KCQkJYy0yLjg3OS0zLjUyLTYuNDQxLTQuMTI5LTkuNjAzLTMuMDM3Yy0yLjM5Mi0wLjAyNS00Ljg3MiwwLjgzOC03LjA2NiwzLjAzN2MtMTYuNjYxLDE2LjY2Ni0zMy4yNDMsMzMuNDAzLTQ5LjI3OSw1MC42NjMNCgkJCWMtNi4xNjItNi4yMy0xMi4xNTItMTIuNjI0LTE3Ljk3MS0xOS4xOGMxNS44ODItMTcuMDMxLDI2LjkyMS0zMy43MTgsNDIuNjA5LTUwLjkyMmM0LjQ1Ni00Ljg5NiwzLjE0MS0xMC45NTktMC40MTYtMTQuNjg2DQoJCQljLTAuMzkxLTAuNjgxLTAuODU4LTEuMzQxLTEuNDM4LTEuOThjLTEyLjUzLTEzLjk5NS0yNC4yNzItMzEuMjQtMzcuNTIxLTQ0LjU0NGwxNi40MDItMTYuMzk5DQoJCQljMTIuNzA4LDEzLjgxNCwyOS43MDYsMzEuMDA0LDQzLDQ0LjI5OGMxNC43OCwxNC43MjYsNTMuNTYyLTUwLjE1Myw1OS4wOTMtNDQuNTMxYzYuNzczLDYuODc4LDEzLjQ5NywxMy44MTQsMTkuOTM2LDIxLjAxDQoJCQlsLTQyLjEzNyw0Mi4xMzhjLTAuOTA5LDAuOTA4LTEuNTMzLDEuODc4LTIuMDM2LDIuODU0Yy0yLjc5MywzLjc3Ny0zLjU4NSw5LjIzMSwwLjE4MywxMy44MTINCgkJCWMxNC44OTQsMTguMDY3LDMwLjQ2MywzNS41NDYsNDYuMTQ4LDUyLjkzNEMzMDkuMjY0LDM2OS40MDcsMzA2LjMzLDM3MS43ODQsMjk5LjQ1OCwzNzcuODUzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-pages-index-js-2e203aa77d0974202395.js.map