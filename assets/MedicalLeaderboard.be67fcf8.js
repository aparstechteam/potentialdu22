import"./lodash.65e89194.js";import{_ as g,s as _,r as b,o as i,c as a,a as e,b as u,w as m,d as f,v as x,F as p,e as v,g as y,n as w,t as d}from"./index.8bbf8bf9.js";import{r as R}from"./responses.71823e89.js";const k={data(){return{search:"",testResults:[],allresult:[],results:[],limit:50}},methods:{loadMore(){this.limit+=50},modeltestResults(){let t=R;this.testResults=t.map((s,r)=>({rank:r+1,...s})),this.allresult=this.testResults},millisToMinutesAndSeconds(t){var s=Math.floor(t/6e4),r=(t%6e4/1e3).toFixed(0);return s+":"+(r<10?"0":"")+r},searchResult(){this.testResults=this.allresult.filter(t=>{if(t.name.toLowerCase().includes(this.search.toLowerCase())||t.college.toLowerCase().includes(this.search.toLowerCase())||t.roll.toLowerCase().includes(this.search.toLowerCase()))return t})},getStyle(t){return t==1?"success":t==2?"orange darken-2":t==3?"indigo":""},getborderStyle(t){let s={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return s[t]?s[t]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return _.state.user}}},C={class:"leaderboard py-5 min-h-screen px-2"},L=e("h1",{class:"text-2xl font-bold text-gray-900 text-center uppercase"}," POTENTIAL DU'IAN 2023 ",-1),N=e("div",{class:"text-center"},[e("p",{class:"bg-gray-50 font-bold text-lg s inline-flex p-2"},"Batch 2023")],-1),T=e("div",{class:"flex justify-end my-2 md:mx-auto md:w-1/2"},[e("a",{href:"https://drive.google.com/file/d/1s9QyfGAJWuzR-jl7TPt7fbeN-tEQK9pz/view",target:"_blank",class:"btn bg-gray-800 text-white"},[e("span",{class:"material-icons"}," download "),y(" Others Batch result ")])],-1),M={class:"p-5 mx-1 mt-5 rounded md:w-1/2 md:mx-auto bg-white"},S={class:"flex gap-2"},B={class:"mt-4"},j={key:0},A=["id"],V={class:"flex items-center justify-center w-10 h-10 font-semibold rounded-full bg-gradient-to-t frbg-indigo-600 text-white bg-indigo-600"},z={class:"flex-1 ml-2 text-gray-900 md:ml-4"},D={class:"text-lg font-semibold"},E=e("span",{class:"material-icons"},"visibility",-1),F={class:"text-center mt-3"},I={key:1,class:"text-center"},K=e("button",{class:"btn loading"},"Loading...",-1),O=[K];function P(t,s,r,Q,o,n){const c=b("router-link");return i(),a("div",C,[e("div",null,[u(c,{to:"/",class:"py-4"},{default:m(()=>[L,N]),_:1}),T,e("div",M,[e("div",S,[f(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>o.search=l),placeholder:"Search by Name/College",onKeyup:s[1]||(s[1]=(...l)=>n.searchResult&&n.searchResult(...l)),class:"input input-bordered flex-1"},null,544),[[x,o.search]]),e("button",{class:"btn bg-gray-800 text-white",onClick:s[2]||(s[2]=(...l)=>n.searchResult&&n.searchResult(...l))}," Result ")]),e("div",B,[o.allresult.length>0?(i(),a("div",j,[(i(!0),a(p,null,v(o.testResults.slice(0,o.limit),(l,h)=>(i(),a("div",{key:h,id:l.ttrx,class:w(["border",`${n.getborderStyle(l.rank)} flex justify-between items-center p-5   rounded  shadow-md `]),style:{"scroll-margin":"100px"}},[e("span",V,d(l.rank),1),e("div",z,[e("h2",D,d(l.name),1),e("p",null,d(l.college),1)]),e("div",null,[u(c,{to:`/result/${l.roll}?rank=${l.rank}`,class:"btn bg-gray-800 text-white btn-circle"},{default:m(()=>[E]),_:2},1032,["to"])])],10,A))),128)),e("div",F,[e("button",{class:"btn btn-sm",onClick:s[3]||(s[3]=l=>o.limit+=50)},"Load More")])])):(i(),a("div",I,O))])])])])}const W=g(k,[["render",P]]);export{W as default};
