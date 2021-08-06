(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(19),i=a.n(c),s=(a(25),a(11)),o=a(2),l=a(8),d=a(0),j=function(){var e=Object(r.useState)("about"),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(o.f)();return Object(r.useEffect)((function(){var e=c.pathname.slice(1);n(e||"about")}),[c]),Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{children:["About me","Portfolio","Contact","Resume"].map((function(e,t){return Object(d.jsx)(s.b,{to:e.split(" ")[0].toLowerCase(),children:Object(d.jsx)("button",{className:a===e.split(" ")[0].toLowerCase()?"navLink active":"navLink",children:e})},t)}))})})},b=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"dark-layer primary-dl"}),Object(d.jsx)("div",{className:"logo-wrapper",children:Object(d.jsxs)("h1",{children:["Daniel Baffour ",Object(d.jsx)("br",{})," ",Object(d.jsx)("span",{id:"title",children:"Full Stact Web Developer"})]})}),Object(d.jsx)(j,{})]})},h=a.p+"static/media/profile-picture.213d0c42.jpg",u=function(e){var t=e.setCurrentPage;return Object(d.jsxs)("section",{id:"about-me",className:"main-sec",children:[Object(d.jsx)("h2",{children:"About me"}),Object(d.jsx)("div",{className:"logo-wrapper",children:Object(d.jsx)("img",{className:"prof-pic",src:h,alt:"Daniel Baffour"})}),Object(d.jsxs)("p",{children:["Full Stack Web Developer with experience earning a certificate in full stack web development from the University of Arizona. Skills in HTML, CSS and JavaScript and strengths in problem solving, teamwork, meeting deadlines and creativity. Productively rebranded an agency, which resulted an increase in number of leads. ",Object(d.jsx)("br",{}),"Known as an innovative problem solver passionate about approaching programming challenges at different levels and collaborating with others to create meaningful web applications. Positioned to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on software applications. ",Object(d.jsx)("br",{}),"Passionate about music, piano playing to be specific, which has had a major impact of my life by improving my self-confidence and discipline. I\u2019m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project",Object(d.jsxs)("a",{href:"/about",onClick:function(){return t("Contact")},children:[" ",Object(d.jsx)("span",{children:"here."})]})]})]})},p=function(e){var t=e.technologies,a=e.themeColor;return t.map((function(e){return Object(d.jsx)("span",{className:"tech",style:{border:"1px solid ".concat(a)},children:e},e)}))},m=a(7),f=function(e){var t=e.project,a=t.proj_id,n=t.deployedLink,c=t.gitHubLink,i=t.name,s=t.technologies,o=t.imgSource,j=Object(r.useState)(!1),b=Object(l.a)(j,2),h=b[0],u=b[1];return Object(d.jsxs)("article",{id:a,className:"web-app",children:[Object(d.jsx)("div",{className:"app-info dark-layer",children:h?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{width:"100%",paddingLeft:"2%",paddingTop:"2%",cursor:"pointer",display:"flex",alignItems:"center"},children:[Object(d.jsx)(m.a,{onClick:function(){return u(!1)}})," ",Object(d.jsx)("div",{style:{marginLeft:"10px"},children:"Tools/Technologies"})]}),Object(d.jsx)("p",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},children:Object(d.jsx)(p,{technologies:s,themeColor:"White"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:i}),Object(d.jsxs)("div",{style:{width:"45%",display:"flex",justifyContent:"space-evenly"},children:[Object(d.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",style:{color:"#fff"},children:Object(d.jsx)(m.b,{})}),Object(d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",style:{color:"#fff"},children:Object(d.jsx)(m.c,{})}),Object(d.jsx)(m.f,{onClick:function(){return u(!0)},style:{cursor:"pointer"}})]})]})}),Object(d.jsx)("img",{src:o,alt:i})]},a)},x={techBlog:a.p+"static/media/techBlog.55f20251.png",inventoryTracker:a.p+"static/media/inventory-tracker.3b743101.png",budgetTracker:a.p+"static/media/budgetTracker.0398ac1e.png",weatherDashboard:a.p+"static/media/weather-dashboard.9f1f3e87.png",noteTaker:a.p+"static/media/noteTaker.b72d5ffb.png",timedQuiz:a.p+"static/media/timed-quiz.9333dec5.PNG"},g=[{proj_id:"budgetTracker",deployedLink:"https://dkbaffour777-budget-tracker.herokuapp.com/",gitHubLink:"https://github.com/dkbaffour777/budget-tracker",name:"Budget Tracker",technologies:["Node.js","Express.js","mongoDB","mongoose"],imgSource:x.budgetTracker},{proj_id:"techBlog",deployedLink:" https://dkbaffour-tech-blog.herokuapp.com/",gitHubLink:"https://github.com/dkbaffour777/tech-blog",name:"Tech Blog",technologies:["Node.js","Express.js","Sequelize","mysql2","express-handlebars"],imgSource:x.techBlog},{proj_id:"inventoryTracker",deployedLink:"https://dkbaffour777.github.io/inventory-tracker/",gitHubLink:"https://github.com/dkbaffour777/inventory-tracker",name:"Inventory Tracker",technologies:["HTML","CSS/Bulma CSS","JavaScript","Ebay.com API"],imgSource:x.inventoryTracker},{proj_id:"weatherDashboard",deployedLink:"https://dkbaffour777.github.io/weather-dashboard/",gitHubLink:"https://github.com/dkbaffour777/weather-dashboard",name:"Weather Dashboard",technologies:["HTML","CSS","JavaScript","Weather API"],imgSource:x.weatherDashboard},{proj_id:"noteTaker",deployedLink:"http://dkbaffour777-note-taker.herokuapp.com/",gitHubLink:"https://github.com/dkbaffour777/note-taker",name:"Note Taker",technologies:["HTML","CSS","JavaScript","Node.js","Express.js","Jest"],imgSource:x.noteTaker},{proj_id:"timedQuiz",deployedLink:"https://dkbaffour777.github.io/timed-quiz/.",gitHubLink:"https://github.com/dkbaffour777/timed-quiz",name:"Timed Quiz",technologies:["HTML","CSS","JavaScript"],imgSource:x.timedQuiz}],O=function(){return Object(d.jsxs)("section",{id:"work",className:"main-sec",children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)("div",{className:"work-cont",children:g.map((function(e,t){return Object(d.jsx)(f,{project:e},t)}))})]})},k=a(12),v=a(17),y=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),i=Object(l.a)(c,2),s=i[0],o=i[1],j=a.name,b=a.email,h=a.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));s||n(Object(v.a)(Object(v.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("section",{className:"main-sec",children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{className:"f-inp",type:"text",name:"name",defaultValue:j,onBlur:u})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(d.jsx)("input",{className:"f-inp",type:"email",name:"email",defaultValue:b,onBlur:u})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{className:"f-inp",name:"message",rows:"5",defaultValue:h,onBlur:u})]}),s&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:s})}),Object(d.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},w=a.p+"static/media/resume.DanielBaffour.b7fdff61.pdf",S=function(){return Object(d.jsxs)("section",{className:"main-sec",children:[Object(d.jsx)("h2",{children:"Resume"}),Object(d.jsxs)("div",{style:{margin:"40px auto"},children:["Download my ",Object(d.jsx)("a",{href:w,target:"_blank",rel:"noopener noreferrer",download:!0,children:"resume"})]}),Object(d.jsx)("h3",{children:"Front-end Proficiencies"}),Object(d.jsx)("div",{style:{display:"flex",flexWrap:"wrap",margin:"40px auto"},children:Object(d.jsx)(p,{technologies:["HTML","CSS","JavaScript","JQuery","Bootstrap","Responsive design","React"],themeColor:"black"})}),Object(d.jsx)("h3",{children:"Back-end Proficiencies"}),Object(d.jsx)("div",{style:{display:"flex",flexWrap:"wrap",margin:"40px auto"},children:Object(d.jsx)(p,{technologies:["Mysql, sequelize","API's","Express","Node.js","MongoDB","Mongoose"],themeColor:"black"})})]})},L=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsxs)("div",{id:"ft-icons",children:[Object(d.jsx)("a",{href:"https://github.com/dkbaffour777",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(m.b,{})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/daniel-baffour-7a1885190/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(m.d,{})}),Object(d.jsx)("a",{href:"https://www.quora.com/profile/Daniel-Baffour-5",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(m.e,{})})]}),Object(d.jsxs)("p",{id:"copy-right",children:["\xa9"," Daniel Baffour - ".concat((new Date).getFullYear())]})]})},T=function(){return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"main-content-wrapper",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(o.a,{exact:!0,path:"/about",component:u}),Object(d.jsx)(o.a,{exact:!0,path:"/portfolio",component:O}),Object(d.jsx)(o.a,{exact:!0,path:"/contact",component:y}),Object(d.jsx)(o.a,{exact:!0,path:"/resume",component:S}),Object(d.jsx)(o.a,{component:function(){return Object(d.jsx)("h1",{children:"Page does not exist :("})}})]})}),Object(d.jsx)(L,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),C()}},[[32,1,2]]]);
//# sourceMappingURL=main.d8377b8b.chunk.js.map