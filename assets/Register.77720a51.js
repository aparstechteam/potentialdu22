import{_ as p,a as c,o as _,c as b,d as o,w as d,b as e,n as u,t as g,e as y}from"./index.d1a98c0b.js";const f={name:"RegisterFrom",beforeRouteEnter(l,n,r){if(localStorage.getItem("ssrb")==null){r();return}r({path:"/"})},data(){return{schema:{name:"required|min:3|max:100",email:"required|min:3|max:100|email",phone:"required|min:10|max:15",college:"required",ssc_board:"required",ssc_roll:"required:min:4",ssc_reg:"required|min:5",facebook_link:"required",why_buet:"required",batch:"required"},userData:{phone:this.$route.query.phone},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Untill your registration has been completed."}},methods:{async register(l){this.reg_show_alert=!0,this.reg_in_submission=!0,this.reg_alert_variant="bg-blue-500",this.reg_alert_msg="Please wait! Untill your registration has been completed";let n=l.phone.length,r=l.phone.substring(n-10,n);try{this.$store.dispatch("register",{body:JSON.stringify({...l,phone:r}),router:this.$router,phone:r})}catch(i){console.log(i),this.reg_in_submission=!1,this.reg_alert_variant="bg-green-500",this.reg_alert_msg="An Unexpected error occurred. Please try again later.";return}this.reg_alert_variant="bg-green-500",this.reg_alert_msg="Success! Your account has been registered."}}},x={class:"mt-10 mx-2 md:w-1/2 md:mx-auto poppins pb-10"},k=e("div",{class:"py-4 text-center space-y-2"},[e("h1",{class:"text-2xl font-bold text-gray-900"}," POTENTIAL DU'IAN 2023 "),e("h2",{class:"text-2xl font-bold text-gray-700"},"BATCH 23 REGISTRATION")],-1),v={class:"mb-3"},w=e("label",{class:"inline-block mb-2"},"Name",-1),S={class:"mb-3"},C=e("label",{class:"inline-block mb-2"},"Email",-1),N={class:"mb-3"},q=e("label",{class:"inline-block mb-2"},"Phone Number",-1),B={class:"mb-3"},E=e("label",{class:"inline-block mb-2"},"College",-1),R={class:"mb-3"},D=e("label",{class:"inline-block mb-2"},"SSC Board",-1),I=e("option",{value:"",disabled:"",selected:""},"Select Board",-1),T=e("option",{value:"barisal"},"Barisal",-1),j=e("option",{value:"chittagong"},"Chittagong",-1),A=e("option",{value:"comilla"},"Comilla",-1),M=e("option",{value:"dhaka"},"Dhaka",-1),O=e("option",{value:"dinajpur"},"Dinajpur",-1),P=e("option",{value:"jessore"},"Jessore",-1),U=e("option",{value:"madrasah"},"Madrasah",-1),F=e("option",{value:"rajshahi"},"Rajshahi",-1),L=e("option",{value:"sylhet"},"Sylhet",-1),V=e("option",{value:"mymensingh"},"Mymensingh",-1),z=e("option",{value:"tec"},"Technical",-1),H={class:"mb-3"},J=e("label",{class:"inline-block mb-2"},"SSC Roll",-1),G={class:"mb-3"},W=e("label",{class:"inline-block mb-2"},"SSC Registration",-1),Y={class:"mb-3"},K=e("label",{class:"inline-block mb-2"},"HSC Batch",-1),Q=e("option",{value:"",disabled:""},"Select Batch",-1),X=e("option",{value:"2025",selected:""},"2025 ",-1),Z=e("option",{value:"2024",selected:""},"2024 ",-1),$=e("option",{value:"2023",selected:""},"2023 ",-1),ee=e("option",{value:"2022"},"2022 ",-1),oe=e("option",{value:"others"},"Others",-1),te={class:"mb-3"},se=e("label",{class:"inline-block mb-2"},"Facebook ID Link",-1),ae=e("p",{class:"text-sm"},"Exp. https://www.facebook.com/xyz",-1),re={class:"mb-3"},le=e("label",{class:"inline-block mb-2"},"\u0995\u09C7\u09A8 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AE\u09C7\u09A1\u09BF\u0995\u09C7\u09B2\u09C7 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4?",-1),ne=["disabled"];function ie(l,n,r,i,a,h){const t=c("vee-field"),s=c("ErrorMessage"),m=c("vee-form");return _(),b("div",x,[k,o(m,{"validation-schema":a.schema,onSubmit:h.register,"initial-values":a.userData},{default:d(()=>[e("div",v,[w,o(t,{type:"text",name:"name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),o(s,{class:"text-red-600",name:"name"})]),e("div",S,[C,o(t,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),o(s,{class:"text-red-600",name:"email"})]),e("div",N,[q,o(t,{type:"tel",name:"phone",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"e.g. 01612345678"}),o(s,{class:"text-red-600",name:"phone"})]),e("div",B,[E,o(t,{type:"college",name:"college",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"College Name"}),o(s,{class:"text-red-600",name:"college"})]),e("div",R,[D,o(t,{as:"select",name:"ssc_board",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Board"},{default:d(()=>[I,T,j,A,M,O,P,U,F,L,V,z]),_:1}),o(s,{class:"text-red-600",name:"ssc_board"})]),e("div",H,[J,o(t,{type:"tel",name:"ssc_roll",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"SSC Roll"}),o(s,{class:"text-red-600",name:"ssc_roll"})]),e("div",G,[W,o(t,{type:"tel",name:"ssc_reg",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"SSC Registration NO"}),o(s,{class:"text-red-600",name:"ssc_reg"})]),e("div",Y,[K,o(t,{as:"select",name:"batch",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Batch"},{default:d(()=>[Q,X,Z,$,ee,oe]),_:1}),o(s,{class:"text-red-600",name:"batch"})]),e("div",te,[se,o(t,{type:"text",name:"facebook_link",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Facebook ID Link"}),o(s,{class:"text-red-600",name:"facebook_link"}),ae]),e("div",re,[le,o(t,{as:"textarea",type:"text",name:"why_buet",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Why Medical?"}),o(s,{class:"text-red-600",name:"why_buet"})]),a.reg_show_alert?(_(),b("div",{key:0,class:u([a.reg_alert_variant,"text-white text-center font-bold p-5 my-4"])},g(a.reg_alert_msg),3)):y("",!0),e("button",{type:"submit",class:u(["btn btn-block",{loading:a.reg_in_submission}]),disabled:a.reg_in_submission}," Register ",10,ne)]),_:1},8,["validation-schema","onSubmit","initial-values"])])}const de=p(f,[["render",ie]]);export{de as default};
