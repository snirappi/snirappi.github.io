(this.webpackJsonpshawnnirappil=this.webpackJsonpshawnnirappil||[]).push([[0],{13:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/face.0b0a72b7.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/albums.8c71b154.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/ShawnNirappilResume.856b8414.pdf"},33:function(e,t,a){e.exports=a.p+"static/media/twitter.111765af.svg"},34:function(e,t,a){e.exports=a.p+"static/media/twitter-filled.c95cbd88.svg"},35:function(e,t,a){e.exports=a.p+"static/media/soundcloud.c1e8aa70.svg"},36:function(e,t,a){e.exports=a.p+"static/media/soundcloud-filled.fe674518.svg"},37:function(e,t,a){e.exports=a.p+"static/media/lastfm.1757505f.svg"},38:function(e,t,a){e.exports=a.p+"static/media/lastfm-filled.e711b7f8.svg"},39:function(e,t,a){e.exports=a.p+"static/media/linkedin.c1f220ee.svg"},40:function(e,t,a){e.exports=a.p+"static/media/linkedin-filled.838f6035.svg"},42:function(e,t,a){e.exports=a(70)},47:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a(28),s=a.n(c),l=(a(47),a(6)),i=a(7),u=a(9),m=a(8),p=a(1),h=a(29),d=a.n(h),f=(a(13),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).tweets=["Taste cannot be bought","Reality hears our desires","Crucify Yourself","\u201cEverything is a social construct\u201d is preparation for a post physical reality","First Sunburn Age 25","Anger is Energy","The first step is awareness","No greater feeling than winning a 6 hour board game","TLC shows feed our schadenfreude","Just tell people their opinion","The most important thing in life is boolin","You have never spoken to another person\nYou are only ever speaking to yourself","Belief -> Heuristic -> Action","Currently Playing: Girly Pop & Dark Techno","What ideologies are you enslaved to?","Everything is a cult","Saying 'Obviously' is rude","It wouldn't be a good story if everything went smoothly","Two people experience the same phenomenon and walk away with different interpretations","You are free to interpret the reality you wish","Thought/Belief <--\x3e Reality\nChoose wisely","There is no greater feeling than finding out the name of that song","Every thought, every word spoken, is a conversation convincing ourselves of the reality we truly wish to live in."],n}return Object(i.a)(a,[{key:"randomTweet",value:function(e){return e[Math.round(Math.random()*e.length)]}},{key:"render",value:function(){return r.a.createElement("div",{class:"Div-box"},r.a.createElement("img",{class:"Face-img",src:d.a,alt:"My Face"}),r.a.createElement("h3",null,"About Me"),r.a.createElement("p",null,"Full Stack Engineer | I \u2665 Music | Chicago"),r.a.createElement("div",{class:"Tweet-box"},r.a.createElement("p",{class:"Tweet"},this.randomTweet(this.tweets))))}}]),a}(n.Component)),b=a(30),v=a.n(b),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"Div-box"},r.a.createElement("div",null,r.a.createElement("h3",null,"My Tracks"),r.a.createElement("iframe",{title:"tracks",height:"450",width:"70%",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1130901286&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"})),r.a.createElement("div",{class:"Albums"},r.a.createElement("h3",null,"Albums I've Been Listening To"),r.a.createElement("img",{class:"Albums",src:v.a,alt:"Albums"})),r.a.createElement("div",{class:"Dance-section"},r.a.createElement("h3",null,"Dance Music"),r.a.createElement("div",{class:"Dance-section"},r.a.createElement("h4",null,"Mixes"),r.a.createElement("iframe",{class:"Youtube",title:"Dance Mixes",width:"560",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGIKvh5s6EMdln5fZjpCn9U7",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{class:"Dance-section"},r.a.createElement("h4",null,"Singles"),r.a.createElement("iframe",{class:"Youtube",title:"Dance Singles",width:"560",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGJnkEgPssrwsaM3nBp1cKeb",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),r.a.createElement("div",null,r.a.createElement("h3",null,"My Taste"),r.a.createElement("p",null,"I have found myself all over the musical spectrum. These days, I primarily listen to Techno, Baroque Pop, and Alternative Pop.")))}}]),a}(n.Component),g=a(31),w=a.n(g),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"Div-box Resume-box"},r.a.createElement("embed",{title:"Shawn Nirappil Resume",class:"Resume",src:w.a}))}}]),a}(n.Component),k=a(32),x=a.n(k),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.post?r.a.createElement("div",null,r.a.createElement("h1",null,this.props.post.title),r.a.createElement("h5",null,new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(this.props.post.date))),r.a.createElement("div",{className:"Blog-post",dangerouslySetInnerHTML:{__html:this.props.post.content}})):null}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://public-api.wordpress.com/rest/v1/sites/shawnnirappil.wordpress.com/posts").then((function(t){e.setState({posts:t.data.posts}),console.log(e.state.posts)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Div-box"},this.state.posts.map((function(e){return r.a.createElement(j,{key:e.ID,post:e})})))}}]),a}(n.Component),O=a(33),T=a.n(O),L=a(34),H=a.n(L),D=a(35),M=a.n(D),S=a(36),_=a.n(S),C=a(37),A=a.n(C),B=a(38),P=a.n(B),F=a(39),N=a.n(F),R=a(40),Y=a.n(R),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement("div",{class:"Overview"},r.a.createElement("header",{class:"Header"},r.a.createElement("h1",{class:"Header-title"},r.a.createElement(o.b,{to:"/"},"Shawn Nirappil")),r.a.createElement("h2",{class:"Header-title"},r.a.createElement(o.b,{to:"/blog"},"Blog")),r.a.createElement("h2",{class:"Header-title"},r.a.createElement(o.b,{to:"/music"},"Music")),r.a.createElement("h2",{class:"Header-title"},r.a.createElement(o.b,{to:"/resume"},"Resume")),r.a.createElement("div",{class:"Header-border"})),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/blog",component:I}),r.a.createElement(p.a,{path:"/music",component:E}),r.a.createElement(p.a,{path:"/resume",component:y})),r.a.createElement("footer",{class:"Footer"},r.a.createElement("div",{class:"Icon-section"},r.a.createElement("div",{class:"Icon-box"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/ShawnNirappil"},r.a.createElement("img",{class:"Link-icon",src:T.a,alt:"Twitter Icon"}),r.a.createElement("img",{class:"Hover-icon",src:H.a,alt:"Twitter Icon"}))),r.a.createElement("div",{class:"Icon-box"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/nappysama"},r.a.createElement("img",{class:"Link-icon",src:M.a,alt:"Soundcloud Icon"}),r.a.createElement("img",{class:"Hover-icon",src:_.a,alt:"Soundcloud Icon"}))),r.a.createElement("div",{class:"Icon-box"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://last.fm/user/beat80"},r.a.createElement("img",{class:"Link-icon",src:A.a,alt:"Last.fm Icon"}),r.a.createElement("img",{class:"Hover-icon",src:P.a,alt:"Last.fm Icon"}))),r.a.createElement("div",{class:"Icon-box"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/shawn-nirappil-81b72214a/"},r.a.createElement("img",{class:"Link-icon",src:N.a,alt:"LinkedIn Icon"}),r.a.createElement("img",{class:"Hover-icon",src:Y.a,alt:"LinkedIn Icon"})))),r.a.createElement("p",{class:"Credits"},"Icons made by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")," from ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.59483fff.chunk.js.map