import{R as l,v as d,Y as u,Z as E,z as S}from"./index-ce90e457.js";const A={[l]:"RSS link",[d]:"Twitter Handle",[u]:"Youtube channel"},w="Sources table",C="Queued sources",L="Topics",N="View Content",_="date",h="edge_count",m="alphabetically",D="https://twitter.com",y="IS_ALIAS",R="https://www.twitter.com/anyuser/status/",i={data:null,ids:[],total:0,filters:{muted:!1,sortBy:_,page:0,pageSize:50}},O=E((t,c)=>({...i,setTopics:async()=>{const{data:e,ids:T,filters:a}=c(),p=I(a);a.page===0&&t({data:null,ids:[],total:0});try{const s=await S(p),n=a.page===0?{}:{...e||{}},r=a.page===0?[]:[...T];s.data.forEach(o=>{n[o.ref_id]=o,r.push(o.ref_id)}),t({data:n,ids:r,total:s.topicCount})}catch(s){console.log(s)}},setFilters:e=>t({filters:{...c().filters,page:0,...e}}),terminate:()=>t(i)})),I=t=>({muted:t.muted?"True":"False",skip:String(t.page*t.pageSize),limit:String(t.pageSize),sort_by:t.sortBy,search:t.search||""});export{m as A,_ as D,h as E,y as I,C as Q,w as S,D as T,N as V,R as a,L as b,A as s,O as u};