import{g as zt,a as Dt,s as Oe,c as it,_ as me,r as m,u as Rt,b as Ft,j as e,d as Wt,e as Vt,F as p,T as _,f as d,h as x,i as ee,k as te,l as ae,m as W,n as Gt,S as Ut,o as Ht,p as Yt,q as at,t as lt,v as Fe,Y as We,R as Ve,w as Zt,x as le,y as Me,z as Kt,A as ct,B as qt,C as Xt,D as je,E as Qt,G as N,H as Jt,I as en,J as tn,K as nn,L as rn,M as on,N as sn,O as dt,P as an,Q as ln}from"./index-c638bc9b.js";import{A as cn,a as pt,C as P,u as dn,B as H,I as G,b as ce,S as ht,c as de,F as pe,Q as pn,d as hn,G as un,L as xn,v as fn}from"./react-toastify.esm-ce1e09ea.js";import{f as Ge,G as mn,u as gn,c as Ue,D as ut,a as yn,E as jn,L as Se,b as xe,C as bn,A as Cn,i as re,d as vn,e as Ee,g as wn,h as Sn,j as xt,k as He,l as _n,X as ft,Y as mt,m as Tn,n as kn,T as An,P as Ln,S as $n,o as En,p as In}from"./generateCategoricalChart-0baee852.js";import{M as Nn,a as Pn,b as Bn,c as gt,d as On}from"./index.esm-e6dd1f6b.js";import{T as Mn,a as X,b as zn,F as Ie,M as be,C as yt,N as Dn,c as Rn}from"./NoFilterResultIcon-fe225f5a.js";import{s as Q,T as jt,u as D,A as ze,E as Fn,D as Wn,a as Ye,b as bt,Q as Ct,V as vt,S as Vn}from"./index-1166f0b3.js";import{P as wt,I as St,a as _t}from"./Popover-72adf21b.js";import{B as Gn,T as se}from"./index-5ef66a02.js";import{D as Un,P as Hn}from"./PlusIcon-f6719d8f.js";import{u as U}from"./index-223abcd5.js";import{B as De}from"./index-bd1e827e.js";import{e as Yn,A as Re,T as Tt,S as Zn}from"./index-54e69bd6.js";import{C as kt}from"./CheckIcon-e160516f.js";import{T as Kn,a as qn,B as At}from"./index-82b30fdd.js";function Xn(t){return zt("MuiTypography",t)}Dt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Qn=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Jn=t=>{const{align:n,gutterBottom:r,noWrap:s,paragraph:i,variant:a,classes:l}=t,o={root:["root",a,t.align!=="inherit"&&`align${it(n)}`,r&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return Vt(o,Xn,l)},er=Oe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,r.variant&&n[r.variant],r.align!=="inherit"&&n[`align${it(r.align)}`],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})(({theme:t,ownerState:n})=>me({margin:0},n.variant==="inherit"&&{font:"inherit"},n.variant!=="inherit"&&t.typography[n.variant],n.align!=="inherit"&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})),Ze={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},tr={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nr=t=>tr[t]||t,rr=m.forwardRef(function(n,r){const s=Rt({props:n,name:"MuiTypography"}),i=nr(s.color),a=Yn(me({},s,{color:i})),{align:l="inherit",className:o,component:c,gutterBottom:h=!1,noWrap:g=!1,paragraph:f=!1,variant:u="body1",variantMapping:j=Ze}=a,b=Ft(a,Qn),C=me({},a,{align:l,color:i,className:o,component:c,gutterBottom:h,noWrap:g,paragraph:f,variant:u,variantMapping:j}),y=c||(f?"p":j[u]||Ze[u])||"span",w=Jn(C);return e.jsx(er,me({as:y,ref:r,ownerState:C,className:Wt(w.root,o)},b))}),Ke=rr;function Ne(t){const n=new Date(Number(t)*1e3),r=n.getFullYear(),s=(1+n.getMonth()).toString().padStart(2,"0");return`${n.getDate().toString().padStart(2,"0")}/${s}/${r}`}const or=({twitterHandle:t})=>e.jsx(e.Fragment,{children:e.jsx(p,{direction:"row",children:e.jsx(p,{align:"flex-start",pb:12,children:e.jsxs(_,{children:["Tweet by @",t]})})})}),sr=d(p)(({theme:t})=>({position:"absolute",top:"65px",right:"55px",width:"300px",pointerEvents:"none",background:x.dashboardHeader,boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.1)",color:x.primaryText1,zIndex:100,transition:"opacity 0.6s",padding:t.spacing(2,3),[t.breakpoints.down("sm")]:{padding:t.spacing(1,1.5)}})),ir=d(p)`
  width: 22.5%;
`,ar=({node:t})=>{if(!t)return null;const{node_type:n,show_title:r,episode_title:s,description:i,label:a,text:l,type:o,twitter_handle:c}=t,h=t.guests;let g=!1,f=!1;h&&(h.length&&h[0]!==null&&(g=!0),typeof h[0]=="object"&&(f=!0));let u=t.image_url;if(o==="twitter_space"&&(u="twitter_placeholder.png"),u==null)switch(n){case"guest":u="person_placeholder2.png";break;default:u="noimage.jpeg"}return n==="topic"?null:e.jsx(sr,{borderRadius:8,px:24,py:16,children:n==="tweet"?e.jsx(or,{twitterHandle:c}):e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"row",children:[e.jsx(ir,{}),e.jsx(p,{align:"flex-start",pb:12,children:e.jsx(_,{children:n==null?void 0:n.toUpperCase()})})]}),e.jsxs(p,{direction:"row",children:[e.jsx(p,{pr:12,children:e.jsx(cn,{src:u,type:"person"})}),e.jsxs("div",{children:[o==="guest"?e.jsxs(p,{direction:"column",children:[e.jsx(_,{children:a}),l&&e.jsx(p,{pt:4,children:e.jsxs(_,{color:"primaryText1",kind:"tiny",children:["@",l]})})]}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:r}),e.jsxs(p,{pt:4,children:[n==="clip"||n==="episode"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),n==="clip"?e.jsx(_,{as:"div",kind:"regularBold",children:Ge(i)}):e.jsx(_,{color:"primaryText1",kind:"tiny",children:s})]}),e.jsxs(p,{pt:12,children:[n==="clip"&&e.jsx(_,{color:"primaryText1",children:"Episode"}),e.jsx(_,{color:"primaryText1",kind:"tiny",children:n==="clip"?s:Ge(i)})]}),g&&e.jsxs(p,{pt:12,children:[e.jsx(_,{color:"primaryText1",children:"People"}),e.jsx(p,{pt:4,children:e.jsx(_,{color:"primaryText1",kind:"tiny",children:f?h.map(j=>j.name?j.name:`@${j.twitter_handle}`).join(", "):h==null?void 0:h.join(", ")})})]})]})]})]})})},lr=()=>{const[t]=ee(n=>[n.hoveredNode]);return e.jsxs(cr,{children:[t&&e.jsx("div",{id:"tooltip-portal",children:e.jsx(ar,{node:t})}),e.jsx(pt,{})]})},cr=d("div")(({theme:t})=>({position:"absolute",zIndex:1,top:0,left:0,userSelect:"none",pointerEvents:"none",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",height:"100%",width:"100%",padding:"16px",[t.breakpoints.down("sm")]:{top:50}})),dr=({fullSize:t=!0})=>{const n=te(r=>r.sidebarIsOpen);return e.jsx(pr,{align:"center",className:ae({"sidebar-is-open":n&&!t}),justify:"center",children:e.jsx(P,{color:x.SECONDARY_BLUE,size:64})})},pr=d(p)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${x.black};
  z-index: 1;
`,hr=m.lazy(()=>W(()=>import("./index-baff9a41.js"),["assets/index-baff9a41.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/index-82b30fdd.js","assets/useSlotProps-d3250adc.js","assets/index-5ef66a02.js","assets/index.esm-e6dd1f6b.js","assets/InfoIcon-6f87a854.js","assets/PlusIcon-f6719d8f.js","assets/Selection-3da08d19.js","assets/index-01d0d57b.js","assets/index-54e69bd6.js","assets/index-b25de6ed.js","assets/Popover-72adf21b.js","assets/Popper-1bb4f19d.js","assets/index-30d16895.js","assets/NoFilterResultIcon-fe225f5a.js","assets/generateCategoricalChart-0baee852.js","assets/index-1166f0b3.js","assets/CheckIcon-e160516f.js"]).then(({SettingsModal:t})=>({default:t}))),ur=m.lazy(()=>W(()=>import("./index-7953cf7b.js"),["assets/index-7953cf7b.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/index-87dcb0c7.js","assets/index.esm-e6dd1f6b.js","assets/CheckIcon-e160516f.js","assets/index-5ef66a02.js","assets/InfoIcon-6f87a854.js"]).then(({AddContentModal:t})=>({default:t}))),xr=m.lazy(()=>W(()=>import("./index-8eae2b9e.js"),["assets/index-8eae2b9e.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/index-87dcb0c7.js","assets/index.esm-e6dd1f6b.js","assets/CheckIcon-e160516f.js","assets/index-30d16895.js","assets/index-5ef66a02.js","assets/InfoIcon-6f87a854.js","assets/index-54e69bd6.js","assets/index-b25de6ed.js","assets/Popover-72adf21b.js","assets/useSlotProps-d3250adc.js","assets/Popper-1bb4f19d.js","assets/generateCategoricalChart-0baee852.js","assets/NoFilterResultIcon-fe225f5a.js","assets/index-82b30fdd.js","assets/index-1166f0b3.js","assets/PlusIcon-f6719d8f.js"]).then(({AddItemModal:t})=>({default:t}))),fr=m.lazy(()=>W(()=>import("./index-316699dd.js"),["assets/index-316699dd.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-0baee852.js","assets/Popover-72adf21b.js","assets/useSlotProps-d3250adc.js","assets/InfoIcon-6f87a854.js","assets/index.esm-e6dd1f6b.js","assets/NoFilterResultIcon-fe225f5a.js","assets/index-82b30fdd.js","assets/index-1166f0b3.js","assets/index-5ef66a02.js","assets/PlusIcon-f6719d8f.js","assets/index-54e69bd6.js","assets/index-b25de6ed.js","assets/Popper-1bb4f19d.js","assets/CheckIcon-e160516f.js"]).then(({SourcesTableModal:t})=>({default:t}))),mr=m.lazy(()=>W(()=>import("./index-fa9148a9.js"),["assets/index-fa9148a9.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/index-5ef66a02.js","assets/index.esm-e6dd1f6b.js","assets/InfoIcon-6f87a854.js","assets/Skeleton-b4ddd061.js"]).then(({EditNodeNameModal:t})=>({default:t}))),gr=m.lazy(()=>W(()=>import("./index-ab847789.js"),["assets/index-ab847789.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/Skeleton-b4ddd061.js"]).then(({RemoveNodeModal:t})=>({default:t}))),yr=m.lazy(()=>W(()=>import("./index-34a5e6c1.js"),["assets/index-34a5e6c1.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/index-bd1e827e.js","assets/index-223abcd5.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/index-54e69bd6.js","assets/index-b25de6ed.js","assets/Popover-72adf21b.js","assets/useSlotProps-d3250adc.js","assets/Popper-1bb4f19d.js","assets/index-1166f0b3.js","assets/generateCategoricalChart-0baee852.js","assets/InfoIcon-6f87a854.js","assets/index.esm-e6dd1f6b.js","assets/NoFilterResultIcon-fe225f5a.js","assets/index-82b30fdd.js","assets/index-5ef66a02.js","assets/PlusIcon-f6719d8f.js","assets/CheckIcon-e160516f.js"]).then(({AddNodeEdgeModal:t})=>({default:t}))),jr=()=>e.jsxs(e.Fragment,{children:[e.jsx(xr,{}),e.jsx(ur,{}),e.jsx(hr,{}),e.jsx(mr,{}),e.jsx(gr,{}),e.jsx(fr,{}),e.jsx(yr,{})]}),br=()=>{const t=te(n=>n.appMetaData);return t?e.jsxs(Cr,{children:[e.jsxs(vr,{children:[e.jsx(e.Fragment,{children:t.title&&e.jsx(_,{className:"title",color:"white",children:t.title})}),e.jsx(_,{className:"subtitle",children:" Second Brain"})]}),e.jsx(Ut,{})]}):null},Cr=d(p).attrs({align:"center",direction:"row",grow:1,justify:"flex-start"})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 32px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`,vr=d.div`
  ${Gt.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
  }

  .subtitle {
    color: ${x.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`,wr=()=>{const[t,n]=m.useState(!0),r=dn();m.useEffect(()=>{n(!0)},[r]);const s=()=>{n(!1)};return r&&t?e.jsxs(Sr,{align:"center",direction:"column",justify:"center",onClick:s,children:[e.jsx("img",{alt:"screen",src:"jamboard_kiosk.png"}),e.jsxs(p,{align:"center",direction:"column",justify:"center",children:[e.jsx(_e,{children:"Second Brain is currently"}),e.jsx(_e,{style:{fontWeight:600},children:"optimized for Desktop."}),e.jsx(_e,{children:"Mobile support coming soon."})]}),e.jsx(H,{color:"secondary",onClick:s,variant:"contained",children:"Got It"})]}):null},Sr=d(p)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,_e=d(_)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`,_r={},Tr=m.createContext(_r),kr=()=>{const[t,n]=m.useState(!1),r=m.useMemo(()=>({isShow:t,setIsShow:n}),[t]);return e.jsx(Tr.Provider,{value:r})},S=d(Mn)`
  && {
    color: ${x.white};
    border: none;
    padding: 6px 2px 6px 0;
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.empty {
    width: 36px;
    padding: 0;
  }
`,Ce=d(X)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${x.BG3};
  }
  &:hover {
    background-color: rgba(97, 138, 255, 0.05);
    .checkbox-section {
      visibility: visible;
    }
  }
  &.checked {
    background-color: rgba(100, 149, 237, 0.2);

    .checkbox-section {
      visibility: visible;
    }
  }
`,ve=d(zn)`
  && {
    border-bottom: 1px solid ${x.black};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${x.BG1};
  }

  ${S} {
    color: ${x.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`,ge=d(H)`
  &:first-child.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + &.selected {
    background: ${x.white};
    color: ${x.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`,we=d(p)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${_} {
    margin-bottom: 0;
  }
`,Ar=({data:t})=>{const n=ee(l=>l.setQueuedSources),[r,s]=m.useState(""),i=async l=>{if(t!=null&&t.length)try{const o=await Ht.enable();await Yt(l,o.pubkey),n(t.filter(c=>c.ref_id!==l))}catch(o){console.warn(o)}},a=async l=>{if(!(!l||!(t!=null&&t.length))){s(l);try{await at(l),n(t==null?void 0:t.filter(o=>o.ref_id!==l))}catch(o){console.warn(o)}finally{s("")}}};return t!=null&&t.length?e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Type"}),e.jsx(S,{children:"Source"}),e.jsx(S,{}),e.jsx(S,{className:"empty"})]})}),(t==null?void 0:t.length)&&e.jsx("tbody",{children:t==null?void 0:t.map(l=>e.jsxs(Ce,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:Q[l.source_type]}),e.jsx(S,{width:"268px",children:l.source_type==="twitter_handle"?e.jsxs(Xe,{href:`${jt}/${l.source}?open=system`,target:"_blank",children:["@",l.source]}):e.jsx(Xe,{href:`${l.source}?open=system`,target:"_blank",children:l.source})}),e.jsx(S,{className:"cell-center",children:e.jsxs(p,{direction:"row",justify:"space-between",children:[e.jsx("div",{className:"approve-wrapper",children:e.jsx(qe,{className:"centered",onClick:()=>i(l.ref_id),children:e.jsx(Nn,{color:x.primaryGreen,fontSize:24})})}),e.jsx("div",{className:"delete-wrapper",children:r===l.ref_id?e.jsx(P,{color:x.white,size:16}):e.jsx(yt,{message:"Are you sure ?",onConfirm:()=>a(l.ref_id),children:e.jsx(qe,{className:"centered",children:e.jsx(Pn,{color:x.primaryRed,fontSize:24})})})})]})}),e.jsx(S,{className:"empty"})]},l.source))})]}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},qe=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${x.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`,Xe=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
  &:hover {
    cursor: pointer;
  }
`,Lr=()=>{const[t,n]=m.useState(!0),[r,s]=m.useState(""),[i,a]=ee(c=>[c.queuedSources,c.setQueuedSources]);m.useEffect(()=>{(async()=>{n(!0);try{const h=await lt({approved:"False"});a(h.data)}catch(h){console.warn(h)}finally{n(!1)}})()},[a]);const l=c=>{s(r===c||!c?"":c)},o=i==null?void 0:i.filter(c=>!r||c.source_type===r);return e.jsxs($r,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsxs(we,{align:"flex-start",justify:"space-between",children:[e.jsx(_,{className:"title",children:"Queued Sources"}),e.jsx(_,{className:"subtitle",children:"This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add it to the source table, and if the content is popular you will earn from it. If content is not relevant to the graph, you should deny it."})]}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>l(""),size:"small",children:"All"}),Object.keys(Q).map(c=>e.jsx(ge,{className:ae({selected:c===r}),onClick:()=>l(c),size:"small",children:Q[c]},c))]}),e.jsx(Er,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:x.white}):e.jsx(Ar,{data:o})})]})},$r=d(p)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Er=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Ir=({onSearch:t,placeholder:n,activeIcon:r,loadingIcon:s,defaultIcon:i,...a})=>{const[l,o]=m.useState(""),[c,h]=m.useState(!1),g=()=>{o(""),t(""),h(!1)},f=b=>{!b.target.value&&g(),o(b.target.value)},u=b=>{const{value:C}=b.currentTarget;o(C),!c&&(h(!0),setTimeout(()=>{t(C),C||g(),h(!1)},1e3),C||g())},j=()=>c?e.jsx(Qe,{children:e.jsx(Te,{type:"button",children:s})}):e.jsx(Qe,{children:l?e.jsx(Te,{onClick:g,type:"button",children:r}):e.jsx(Te,{type:"button",children:i})});return e.jsxs(Nr,{children:[e.jsx(Pr,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:f,onKeyDown:b=>{b.key==="Enter"&&u(b)},placeholder:n,value:l,...a}),j()]})},Qe=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Te=d(G)`
  font-size: 24px;
`,Nr=d(wt)`
  && {
    width: 100%;
    height: 40px;
    display: flex;
    max-width: 637px;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding-top: 0px;
  }
`,Pr=d(St)`
  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  .MuiInputBase-input {
    z-index: 2;
    width: 100%;
    height: 48px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${x.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${x.white};
      background-color: ${x.BG2_ACTIVE_INPUT};
      outline: 1px solid ${x.primaryBlue};
    }

    &:hover {
      background-color: ${x.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${x.GRAY7};
    }
  }
  width: 100%;
`,Br=({data:t,canEdit:n=!1})=>{const r=ee(o=>o.setSources),[s,i]=m.useState(""),a=async(o,c)=>{if(t!=null&&t.length)try{await Zt(o,c);const h=t==null?void 0:t.findIndex(f=>f.ref_id===o),g=[...t];g[h]={...g[h],source:c.source},r(g)}catch(h){console.warn(h)}},l=async o=>{if(!(!o||!(t!=null&&t.length))){i(o);try{await at(o),r(t==null?void 0:t.filter(c=>c.ref_id!==o))}catch(c){console.warn(c)}finally{i("")}}};return t!=null&&t.length?e.jsxs(be,{"aria-label":"a dense table",component:"table",id:"sources-table",size:"small",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Type"}),e.jsx(S,{align:"left",children:"Source"}),n&&e.jsx(S,{align:"left"}),e.jsx(S,{className:"empty"})]})}),e.jsx(Rn,{component:"tbody",children:t==null?void 0:t.map(o=>e.jsxs(Ce,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{align:"left",children:Q[o.source_type]}),e.jsx(S,{align:"left",children:e.jsx(Or,{condition:n,wrapper:c=>e.jsx(Mr,{id:o.ref_id,onSave:h=>a(o.ref_id,{source:h,source_type:o.source_type}),value:o.source,children:c}),children:o.source_type===Fe||o.source_type===We||o.source_type===Ve?e.jsxs(e.Fragment,{children:[o.source_type===Fe&&e.jsxs(ke,{href:`${jt}/${o.source}`,target:"_blank",children:["@",o.source]}),o.source_type===We&&e.jsx(ke,{href:`${o.source}${o.source.includes("?")?"&":"?"}open=system`,target:"_blank",children:o.source}),o.source_type===Ve&&e.jsx(ke,{href:o.source,target:"_blank",children:o.source})]}):e.jsx("div",{children:o.source})})}),n&&e.jsx(S,{align:"left",children:e.jsx("div",{className:"delete-wrapper",id:`delete-${o.source}`,children:s===o.ref_id?e.jsx(Lt,{"data-testid":`delete-loader-${o.ref_id}`,children:e.jsx(P,{color:x.white,size:16})}):e.jsx(yt,{"data-testid":`delete-icon-${o.ref_id}`,message:"Are you sure?",onConfirm:()=>l(o.ref_id),children:e.jsx(q,{className:"centered","data-testid":`delete-icon-${o.ref_id}`,children:e.jsx(Un,{})})})})}),e.jsx(S,{className:"empty"})]},o.source))})]}):e.jsxs(Dr,{children:[e.jsx(Dn,{}),e.jsx(_,{className:"text",children:"There is not any results for selected filters"})]})};function Or({condition:t,wrapper:n,children:r}){return t?n(r):r}const Mr=({value:t,onSave:n,id:r,children:s})=>{const[i,a]=m.useState(!1),[l,o]=m.useState(t),[c,h]=m.useState(!1),g=async()=>{if(r){h(!0);try{await n(l),a(!1)}catch(f){console.warn(f)}finally{h(!1)}}};return e.jsx("div",{children:i?e.jsxs(zr,{align:"center",direction:"row",children:[e.jsx(Gn,{className:"editable-cell__input",name:"cell-input",onChange:f=>o(f),value:l}),e.jsx(q,{align:"center",justify:"center",children:c?e.jsx(Lt,{"data-testid":`edit-loader-${r}`,children:e.jsx(P,{color:x.white,size:12})}):e.jsx(Bn,{"data-testid":`check-icon-${r}`,onClick:g})}),e.jsx(q,{align:"center",className:"secondary",justify:"center",onClick:()=>a(!1),children:e.jsx(gt,{})})]}):e.jsxs(Rr,{direction:"row",children:[s,e.jsx(q,{onClick:()=>a(!0),children:e.jsx(On,{"data-testid":`edit-icon-${r}`,size:20})})]})})},zr=d(p)`
  display: flex;
  width: 250px;
  border: 2px solid ${x.lightBlue300};
  padding: 4px;
  height: 28px;
  border-radius: 8px;
  box-sizing: border-box;

  .editable-cell__input {
    flex: 1;
    -webkit-text-fill-color: #fff;
    padding: 0 4px;
    color: #fff;
  }
`,q=d(p)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: center;
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Dr=d(p)`
  margin-top: 120px;
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .text {
    text-align: center;
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${x.GRAY6};
  }
`,Rr=d(p)`
  display: flex;
  padding: 4px;
  position: relative;

  ${q} {
    visibility: hidden;
  }

  &:hover {
    ${q} {
      visibility: visible;
    }
  }
`,ke=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,Lt=d(p)`
  display: flex;
  justify-content: center;
  align-items: center;
`,Fr=()=>{const[t,n]=m.useState(!0),[r,s]=m.useState(""),[i,a]=ee(f=>[f.sources,f.setSources]),[l]=le(f=>[f.isAdmin]),[o,c]=m.useState("");m.useEffect(()=>{(async()=>{n(!0);try{const u=await lt();a(u.data)}catch(u){console.warn(u)}finally{n(!1)}})()},[a]);const h=f=>{s(r===f||!f?"":f)},g=m.useMemo(()=>i==null?void 0:i.filter(f=>(!r||f.source_type===r)&&(f.source.toLowerCase().startsWith(o.toLowerCase())||f.source.toLowerCase().includes(o.toLowerCase()))),[o,r,i]);return e.jsxs(Wr,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Sources for this Graph"})}),e.jsx(Gr,{children:e.jsx(Ir,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ht,{}),loadingIcon:e.jsx(P,{color:x.PRIMARY_BLUE,size:24}),onSearch:c,placeholder:"Find Source"})}),e.jsxs(p,{className:"filters",direction:"row",pb:16,px:36,children:[e.jsx(ge,{className:ae({selected:!r}),onClick:()=>h(""),size:"small",children:"All"}),Object.keys(Q).map(f=>e.jsx(ge,{className:ae({selected:f===r}),onClick:()=>h(f),size:"small",children:Q[f]},f))]}),e.jsx(Vr,{align:"center",justify:t?"center":"flex-start",children:t?e.jsx(P,{color:x.white}):e.jsx(Br,{canEdit:l,data:g})})]})},Wr=d(p)`
  flex: 1;
  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`,Vr=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Gr=d(p)`
  margin: 0 0 16px 36px;
`,Ur=({placeholder:t,activeIcon:n,loadingIcon:r,defaultIcon:s,loading:i,...a})=>{const[l,o]=D(C=>[C.filters,C.setFilters]),[c,h]=m.useState(""),g=()=>{o({search:""})},f=m.useCallback(C=>{o({search:C})},[o]),u=m.useMemo(()=>Me.debounce(f,300),[f]),j=C=>{const{value:y}=C.target;h(y),C.target.value||o({search:""}),C.target.value.length>2&&u(C.target.value)},b=()=>i?e.jsx(Je,{children:e.jsx(Ae,{type:"button",children:r})}):e.jsx(Je,{children:l.search?e.jsx(Ae,{onClick:g,type:"button",children:n}):e.jsx(Ae,{type:"button",children:s})});return e.jsxs(Hr,{children:[e.jsx(Yr,{autoComplete:"off",autoCorrect:"off",inputProps:{"aria-label":"search sources"},onChange:j,placeholder:t,value:c,...a}),b()]})},Je=d(p)`
  top: -50%;
  right: -3%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`,Ae=d(G)`
  font-size: 24px;
`,Hr=d(wt)`
  && {
    width: 100%;
    height: 40px;
    display: flex;
    max-width: 637px;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding-top: 0px;
  }
`,Yr=d(St)`
  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  .MuiInputBase-input {
    z-index: 2;
    width: 100%;
    height: 48px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${x.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${x.white};
      background-color: ${x.BG2_ACTIVE_INPUT};
      outline: 1px solid ${x.primaryBlue};
    }

    &:hover {
      background-color: ${x.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${x.GRAY7};
    }
  }
  width: 100%;
`,$t=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 6 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 5L6.90043e-08 9.33013L4.47556e-07 0.669872L6 5Z",fill:"currentColor"})}),Et=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4.5 6.04386L7.83333 2.83398V13.6673",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M15.5 13.9581L12.1667 17.168L12.1667 6.33463",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),It=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 10 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"5",cy:"5",r:"4.5",fill:"currentColor",stroke:"#6B7A8D"})}),Zr=({selectedType:t,setSelectedType:n})=>{const[r,s]=m.useState([]);m.useEffect(()=>{(async()=>{try{const{data:o}=await Kt();s(o.edge_types)}catch(o){console.warn(o)}})()},[s]);const i=l=>({label:l,value:l}),a=l=>{n((l==null?void 0:l.value)||"")};return e.jsx(Re,{onSelect:a,options:r.map(i),selectedValue:t?i(t):null})},mi={label:"Not Selected",value:"Not Selected"},gi={label:"No Parent",value:"No Parent"},yi=[{label:"number",value:"int"},{label:"string",value:"string"}],Nt=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],Kr=({onSelect:t,selectedValue:n,topicId:r})=>{const[s,i]=m.useState([]),[a,l]=m.useState(!1),o=m.useMemo(()=>{const u=async j=>{const b={is_muted:"False",sort_by:ze,search:j,skip:"0",limit:"1000"};l(!0);try{const y=(await ct(b.search)).data.filter(w=>(w==null?void 0:w.ref_id)!==r);i(y)}catch{i([])}finally{l(!1)}};return Me.debounce(u,300)},[r]),c=u=>{if(!u){i([]);return}u.length>2&&o(u)},h=u=>{const j=u?s.find(b=>b.ref_id===u.value):null;t(j||null)},g=u=>({label:u.search_value,value:u.ref_id,type:u.node_type}),f=u=>u.map(g);return n?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:n.search_value}),e.jsx(G,{onClick:()=>t(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:a,onSelect:h,options:f(s)||Nt,selectedValue:n?g(n):null})},qr=({from:t,onSelect:n,selectedType:r,setSelectedType:s,isSwapped:i,setIsSwapped:a,selectedToNode:l})=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(Xr,{children:"Add edge"})})}),e.jsxs(eo,{swap:i,children:[e.jsx(p,{children:e.jsx(to,{disabled:!0,label:i?"To":"From",swap:i,value:t==null?void 0:t.name})}),e.jsxs(p,{my:16,children:[e.jsx(Jr,{children:"Type"}),e.jsx(Zr,{selectedType:r,setSelectedType:s})]}),e.jsx(p,{children:e.jsxs(no,{children:[e.jsx(ro,{children:i?"From":"To"}),e.jsx(Kr,{onSelect:n,selectedValue:l,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(Qr,{children:[e.jsx(oo,{children:e.jsx(It,{})}),e.jsx(so,{onClick:a,children:e.jsx(Et,{})}),e.jsx(io,{children:e.jsx($t,{})})]})]})]}),Xr=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Qr=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,Jr=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,eo=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,to=d(Tt)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,no=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,ro=d.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,oo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,so=d.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,io=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,ao=({topic:t,onClose:n})=>{const{close:r}=U("addEdge"),[s]=D(y=>[y.data]),i=de({mode:"onChange"}),[a,l]=m.useState(!1),[o,c]=m.useState(!1),[h,g]=m.useState(""),[f,u]=m.useState(null),j=()=>{n(),r()},b=async()=>{if(!(!f||!s)){c(!0);try{await qt({from:t.ref_id,to:f==null?void 0:f.ref_id,relationship:h});const{ref_id:y}=t,{ref_id:w}=f;if(s){const A={...s};A[y]={...A[y],edgeList:[...A[y].edgeList,h]},A[w]&&(A[w]={...A[w],edgeList:[...A[w].edgeList,h]}),D.setState({data:A})}j()}catch(y){console.warn(y)}finally{c(!1)}}},C=o||!f||!h;return e.jsx(De,{id:"addEdge",kind:"small",onClose:j,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(qr,{from:t,isSwapped:a,onSelect:u,selectedToNode:f,selectedType:h,setIsSwapped:()=>l(!a),setSelectedType:g}),e.jsxs(H,{color:"secondary",disabled:C,onClick:b,size:"large",variant:"contained",children:["Confirm",o&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},lo=()=>e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(co,{children:"Edit topic"})})}),e.jsx(p,{mb:12,children:e.jsx(se,{id:"cy-topic",maxLength:50,name:"name",placeholder:"Add your topic",rules:{...Xt}})})]}),co=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,po=({topic:t,onClose:n})=>{const{close:r}=U("editTopic"),[s]=D(j=>[j.data]),i=de({mode:"onChange"}),{watch:a,setValue:l,reset:o}=i,[c,h]=m.useState(!1);m.useEffect(()=>(t&&l("name",t==null?void 0:t.name),()=>{o()}),[t,l,o]);const g=a("name"),f=()=>{n(),r()},u=async()=>{h(!0);try{if(await je((t==null?void 0:t.ref_id)||"",{name:g.trim()}),s){const j={...s};j[t==null?void 0:t.ref_id].name=g.trim(),D.setState({data:j})}f()}catch(j){console.warn(j)}finally{h(!1)}};return e.jsx(De,{id:"editTopic",kind:"regular",onClose:f,preventOutsideClose:!0,children:e.jsxs(pe,{...i,children:[e.jsx(lo,{}),e.jsxs(H,{color:"secondary",disabled:c,onClick:u,size:"large",variant:"contained",children:["Save",c&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},ho=({topicId:t,onSelect:n,selectedValue:r})=>{const[s,i]=m.useState([]),[a,l]=m.useState(!1),o=m.useMemo(()=>{const u=async j=>{const b={is_muted:"False",sort_by:ze,search:j,skip:"0",limit:"1000"};l(!0);try{const y=(await ct(b.search)).data.filter(w=>(w==null?void 0:w.ref_id)!==t);i(y)}catch{i([])}finally{l(!1)}};return Me.debounce(u,300)},[t]),c=u=>{if(!u){i([]);return}u.length>2&&o(u)},h=u=>{const j=u?s.find(b=>b.ref_id===u.value):null;n(j||null)},g=u=>({label:u.search_value,value:u.ref_id,type:u.node_type}),f=u=>u.map(g);return r?e.jsxs(p,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:r.search_value}),e.jsx(G,{onClick:()=>n(null),size:"small",children:e.jsx(ce,{})})]}):e.jsx(Re,{handleInputChange:c,isLoading:a,onSelect:h,options:f(s)||Nt,selectedValue:r?g(r):null})},uo=({from:t,onSelect:n,selectedToNode:r,isSwapped:s,setIsSwapped:i})=>{var o;const a=t==null?void 0:t.map(c=>c.name).join(", "),l=t&&t.length===1?t[0].name:`${a==null?void 0:a.substring(0,25)} ...`;return e.jsxs(p,{children:[e.jsx(p,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(p,{align:"center",direction:"row",children:e.jsx(xo,{children:"Merge topic"})})}),e.jsxs(go,{swap:s,children:[e.jsx(fo,{children:e.jsx(yo,{disabled:!0,label:s?"To":"From",swap:s,value:l})}),e.jsxs(p,{my:16,children:[e.jsx(bo,{children:"Type"}),e.jsx(_,{children:"IS AlIAS"})]}),e.jsx(p,{children:e.jsxs(jo,{children:[e.jsx(Co,{children:s?"From":"To"}),e.jsx(ho,{onSelect:n,selectedValue:r,topicId:(o=t[t.length-1])==null?void 0:o.ref_id})]})}),e.jsxs(mo,{children:[e.jsx(vo,{children:e.jsx(It,{})}),e.jsx(wo,{disabled:(t==null?void 0:t.length)!==1,onClick:(t==null?void 0:t.length)===1?i:void 0,children:e.jsx(Et,{})}),e.jsx(So,{children:e.jsx($t,{})})]})]})]})},xo=d(_)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,fo=d(p)`
  flex: 1 1 100%;
`,mo=d.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,go=d.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,yo=d(Tt)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,jo=d.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,bo=d.label`
  background-color: #23252f;
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`,Co=d.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,vo=d.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,wo=d.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,So=d.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,_o=({onClose:t,multiTopics:n})=>{const{close:r}=U("mergeTopic"),[s,i]=D(y=>[y.ids,y.total]),a=de({mode:"onChange"}),{setValue:l,reset:o}=a,[c,h]=m.useState(!1),[g,f]=m.useState(!1),[u,j]=m.useState(null);m.useEffect(()=>{if(n&&n.length>0){const y=n.map(w=>w.name).join(", ");l("name",y)}return()=>{o()}},[n,l,o]);const b=()=>{t(),r()},C=async()=>{h(!0);const y=n==null?void 0:n.map(w=>w.ref_id).filter(w=>!!w);try{y.length&&u&&(await Qt({from:y,to:u==null?void 0:u.ref_id}),D.setState({ids:s.filter(w=>!(y!=null&&y.includes(w))),total:i-(y?y.length:0)}),b())}catch(w){console.warn(w)}finally{h(!1)}};return e.jsx(De,{id:"mergeTopic",kind:"small",onClose:b,preventOutsideClose:!0,children:e.jsxs(pe,{...a,children:[e.jsx(uo,{from:n,isSwapped:g,onSelect:j,selectedToNode:u,setIsSwapped:()=>f(!g)}),e.jsxs(H,{color:"secondary",disabled:c||g,onClick:C,size:"large",variant:"contained",children:["Merge topics",c&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]})]})})},To=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.37516 8.625V11.3334C7.37516 11.5104 7.43508 11.6589 7.55491 11.7786C7.67476 11.8984 7.82326 11.9583 8.00041 11.9583C8.17758 11.9583 8.32599 11.8984 8.44564 11.7786C8.5653 11.6589 8.62512 11.5104 8.62512 11.3334V8.625H11.3335C11.5106 8.625 11.659 8.56508 11.7788 8.44525C11.8986 8.3254 11.9585 8.1769 11.9585 7.99975C11.9585 7.82258 11.8986 7.67417 11.7788 7.55452C11.659 7.43487 11.5106 7.37504 11.3335 7.37504H8.62512V4.66669C8.62512 4.4896 8.56521 4.34117 8.44537 4.22137C8.32553 4.1016 8.17702 4.04171 7.99987 4.04171C7.82271 4.04171 7.6743 4.1016 7.55464 4.22137C7.43499 4.34117 7.37516 4.4896 7.37516 4.66669V7.37504H4.66681C4.48973 7.37504 4.3413 7.43496 4.22152 7.55479C4.10173 7.67464 4.04183 7.82314 4.04183 8.00029C4.04183 8.17746 4.10173 8.32587 4.22152 8.44552C4.3413 8.56517 4.48973 8.625 4.66681 8.625H7.37516ZM8.00154 15.9167C6.90659 15.9167 5.8774 15.7089 4.91395 15.2933C3.9505 14.8778 3.11243 14.3138 2.39975 13.6015C1.68705 12.8891 1.12284 12.0514 0.7071 11.0884C0.291364 10.1253 0.0834961 9.09636 0.0834961 8.00142C0.0834961 6.90647 0.291274 5.87728 0.70683 4.91383C1.12239 3.95037 1.68634 3.11231 2.3987 2.39963C3.11108 1.68693 3.94878 1.12272 4.91181 0.706979C5.87482 0.291243 6.9038 0.083374 7.99875 0.083374C9.09369 0.083374 10.1229 0.291153 11.0863 0.706708C12.0498 1.12226 12.8879 1.68622 13.6005 2.39858C14.3132 3.11096 14.8774 3.94866 15.2932 4.91169C15.7089 5.8747 15.9168 6.90368 15.9168 7.99863C15.9168 9.09357 15.709 10.1228 15.2935 11.0862C14.8779 12.0497 14.3139 12.8877 13.6016 13.6004C12.8892 14.3131 12.0515 14.8773 11.0885 15.2931C10.1255 15.7088 9.09648 15.9167 8.00154 15.9167ZM8.00014 14.6667C9.86125 14.6667 11.4376 14.0209 12.7293 12.7292C14.021 11.4375 14.6668 9.86113 14.6668 8.00002C14.6668 6.13891 14.021 4.56252 12.7293 3.27085C11.4376 1.97919 9.86125 1.33335 8.00014 1.33335C6.13903 1.33335 4.56264 1.97919 3.27098 3.27085C1.97931 4.56252 1.33348 6.13891 1.33348 8.00002C1.33348 9.86113 1.97931 11.4375 3.27098 12.7292C4.56264 14.0209 6.13903 14.6667 8.00014 14.6667Z",fill:"currentColor"})}),ko=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1765 0.310088L4.72809 5.70971C4.63832 5.79868 4.56637 5.90372 4.51607 6.01926L3.74627 7.78746C3.63822 8.03565 3.89191 8.28707 4.14234 8.17999L5.92651 7.41707C6.04309 7.36722 6.14907 7.29592 6.23885 7.20695L11.6872 1.80733C12.1044 1.39388 12.1044 0.723539 11.6872 0.310088C11.27 -0.103363 10.5936 -0.103363 10.1765 0.310088ZM9.80835 7.14088C9.80835 6.81895 10.072 6.55777 10.3969 6.55777C10.723 6.55777 10.9854 6.82017 10.9854 7.14088L10.9191 10.2508C10.9191 11.2153 10.1489 12.0001 9.17571 12.0001H1.74343C0.79227 12.0001 0 11.2153 0 10.2289V2.84292C0 1.89999 0.79227 1.11523 1.74343 1.11523L5.29651 1.11548C5.62264 1.11548 5.88501 1.37666 5.88501 1.69858C5.88501 2.0205 5.62141 2.28168 5.29651 2.28168H1.7655C1.44134 2.28168 1.177 2.54335 1.177 2.86479V10.2508C1.177 10.5722 1.44134 10.8339 1.7655 10.8339H9.21985C9.54402 10.8339 9.80835 10.5722 9.80835 10.2508V7.14088Z",fill:"currentColor"})}),et=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.33317 15.5L0.166504 14.3333L4.18734 10.2917C4.50678 9.97222 4.74984 9.61111 4.9165 9.20833C5.08317 8.80556 5.1665 8.38194 5.1665 7.9375L5.1665 3.6875L3.83317 5L2.6665 3.83333L5.99984 0.5L9.33317 3.83333L8.1665 5L6.83317 3.6875L6.83317 7.9375C6.83317 8.38194 6.9165 8.80556 7.08317 9.20833C7.24984 9.61111 7.49289 9.97222 7.81234 10.2917L11.8332 14.3333L10.6665 15.5L5.99984 10.8333L1.33317 15.5Z",fill:"currentColor"})}),Le=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 12 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.333496 7.66704V6.66706H3.91681V7.66704H0.333496ZM0.333496 4.50037V3.50041H7.7886V4.50037H0.333496ZM0.333496 1.33372V0.33374H11.6668V1.33372H0.333496Z",fill:"currentColor"})}),tt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 15",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0716 15L10.8994 11.7764C10.437 11.9597 9.96181 12.0919 9.47381 12.1732C8.98581 12.2545 8.49002 12.2952 7.98643 12.2952C6.33597 12.2952 4.82448 11.8457 3.45194 10.9466C2.07941 10.0476 0.991584 8.86271 0.188459 7.39193C0.123124 7.27666 0.0753836 7.15933 0.045238 7.03994C0.0150793 6.92055 0 6.7991 0 6.67559C0 6.55208 0.0163338 6.42935 0.0490013 6.30739C0.0816688 6.18543 0.13067 6.06938 0.196005 5.95925C0.508607 5.42714 0.84081 4.91226 1.19261 4.41462C1.54443 3.91699 1.95353 3.47673 2.41992 3.09386L0.24877 0.846015L1.07501 0L14.8978 14.154L14.0716 15ZM7.98643 9.94854C8.16032 9.94854 8.32642 9.93799 8.48473 9.91689C8.64305 9.89579 8.7976 9.84973 8.94838 9.77871L4.95591 5.69059C4.89158 5.84498 4.84786 6.00324 4.82475 6.16535C4.80162 6.32745 4.79005 6.49753 4.79005 6.67559C4.79005 7.58645 5.10039 8.35966 5.72108 8.99521C6.34176 9.63076 7.09688 9.94854 7.98643 9.94854ZM13.4384 10.3561L10.9792 7.85816C11.0456 7.66673 11.0961 7.47375 11.1308 7.27922C11.1655 7.0847 11.1828 6.88349 11.1828 6.67559C11.1828 5.76473 10.8725 4.99152 10.2518 4.35597C9.63109 3.72042 8.87598 3.40264 7.98643 3.40264C7.78339 3.40264 7.58689 3.42168 7.39692 3.45976C7.20694 3.49784 7.02099 3.56011 6.83907 3.64657L4.87751 1.64575C5.37606 1.44402 5.88441 1.29529 6.40257 1.19957C6.92071 1.10385 7.44867 1.05599 7.98643 1.05599C9.64191 1.05599 11.1604 1.50756 12.542 2.41072C13.9236 3.31387 15.0134 4.50598 15.8115 5.98705C15.8718 6.08894 15.9183 6.19829 15.951 6.31511C15.9837 6.43192 16 6.55208 16 6.67559C16 6.7991 15.9857 6.91926 15.957 7.03607C15.9284 7.15289 15.8839 7.26225 15.8236 7.36414C15.52 7.94669 15.1738 8.49038 14.7848 8.99521C14.3958 9.50005 13.947 9.95369 13.4384 10.3561ZM10.0912 6.95657L7.73162 4.54816C8.06131 4.48126 8.38246 4.50545 8.69506 4.62072C9.00767 4.736 9.27754 4.9156 9.5047 5.15952C9.7369 5.40036 9.90451 5.67723 10.0075 5.99012C10.1106 6.30301 10.1385 6.62516 10.0912 6.95657Z",fill:"currentColor"})}),nt=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 18 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.00204 9.98073C9.94628 9.98073 10.7483 9.65024 11.408 8.98927C12.0677 8.32829 12.3976 7.52567 12.3976 6.58142C12.3976 5.63718 12.0671 4.8352 11.4061 4.17548C10.7451 3.51576 9.9425 3.1859 8.99825 3.1859C8.05401 3.1859 7.25203 3.51638 6.59231 4.17735C5.93259 4.83834 5.60273 5.64096 5.60273 6.58521C5.60273 7.52944 5.93321 8.33142 6.59419 8.99115C7.25517 9.65087 8.05779 9.98073 9.00204 9.98073ZM9.00014 8.83331C8.37514 8.83331 7.84389 8.61456 7.40639 8.17706C6.96889 7.73956 6.75014 7.20831 6.75014 6.58331C6.75014 5.95831 6.96889 5.42706 7.40639 4.98956C7.84389 4.55206 8.37514 4.33331 9.00014 4.33331C9.62514 4.33331 10.1564 4.55206 10.5939 4.98956C11.0314 5.42706 11.2501 5.95831 11.2501 6.58331C11.2501 7.20831 11.0314 7.73956 10.5939 8.17706C10.1564 8.61456 9.62514 8.83331 9.00014 8.83331ZM9.00129 12.4166C7.08494 12.4166 5.33884 11.888 3.76298 10.8309C2.18713 9.77374 1.02688 8.35788 0.282227 6.58331C1.02688 4.80874 2.18675 3.39288 3.76185 2.33573C5.33694 1.27858 7.08265 0.75 8.999 0.75C10.9153 0.75 12.6614 1.27858 14.2373 2.33573C15.8132 3.39288 16.9734 4.80874 17.7181 6.58331C16.9734 8.35788 15.8135 9.77374 14.2384 10.8309C12.6634 11.888 10.9176 12.4166 9.00129 12.4166Z",fill:"currentColor"})}),Ao=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{opacity:"0.4",children:[e.jsx("mask",{id:"mask0_5162_13105",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13105)",children:e.jsx("path",{d:"M19.7615 21.8691L15.7154 17.8537C15.1256 18.0819 14.5195 18.2467 13.8971 18.348C13.2747 18.4493 12.6423 18.4999 12 18.4999C9.89486 18.4999 7.96698 17.94 6.21635 16.8201C4.46572 15.7002 3.07822 14.2243 2.05385 12.3922C1.97052 12.2486 1.90963 12.1025 1.87118 11.9538C1.83271 11.8051 1.81348 11.6538 1.81348 11.4999C1.81348 11.3461 1.83431 11.1932 1.87598 11.0413C1.91764 10.8894 1.98014 10.7448 2.06348 10.6076C2.46219 9.9448 2.88591 9.30345 3.33463 8.68357C3.78336 8.0637 4.30516 7.51531 4.90003 7.0384L2.13078 4.2384L3.18463 3.18457L20.8153 20.8153L19.7615 21.8691ZM12 15.5768C12.2218 15.5768 12.4336 15.5637 12.6356 15.5374C12.8375 15.5111 13.0346 15.4537 13.2269 15.3653L8.13463 10.273C8.05258 10.4653 7.99681 10.6624 7.96733 10.8643C7.93783 11.0663 7.92308 11.2781 7.92308 11.4999C7.92308 12.6345 8.31891 13.5977 9.11058 14.3893C9.90224 15.181 10.8654 15.5768 12 15.5768ZM18.9538 16.0845L15.8173 12.973C15.9019 12.7345 15.9663 12.4941 16.0105 12.2518C16.0548 12.0095 16.0769 11.7589 16.0769 11.4999C16.0769 10.3653 15.681 9.40219 14.8894 8.61052C14.0977 7.81885 13.1346 7.42302 12 7.42302C11.741 7.42302 11.4904 7.44674 11.2481 7.49417C11.0058 7.5416 10.7686 7.61917 10.5366 7.72687L8.03463 5.23457C8.67051 4.98329 9.3189 4.79803 9.9798 4.6788C10.6407 4.55956 11.3141 4.49995 12 4.49995C14.1115 4.49995 16.0484 5.06245 17.8105 6.18745C19.5727 7.31245 20.9628 8.79738 21.9807 10.6422C22.0576 10.7692 22.1169 10.9054 22.1586 11.0509C22.2003 11.1964 22.2211 11.3461 22.2211 11.4999C22.2211 11.6538 22.2028 11.8034 22.1663 11.9489C22.1297 12.0945 22.073 12.2307 21.9961 12.3576C21.6089 13.0832 21.1673 13.7605 20.6711 14.3893C20.175 15.0182 19.6025 15.5832 18.9538 16.0845ZM14.6846 11.8499L11.675 8.84992C12.0955 8.76659 12.5051 8.79671 12.9038 8.9403C13.3025 9.0839 13.6468 9.30761 13.9365 9.61145C14.2327 9.91145 14.4465 10.2563 14.5779 10.6461C14.7093 11.0358 14.7449 11.4371 14.6846 11.8499Z",fill:"currentColor"})})]})}),Lo=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5162_13106",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5162_13106)",children:e.jsx("path",{d:"M12.0023 15.5769C13.1354 15.5769 14.0978 15.1803 14.8895 14.3871C15.6811 13.5939 16.077 12.6308 16.077 11.4977C16.077 10.3646 15.6804 9.40224 14.8872 8.61058C14.094 7.81891 13.1309 7.42308 11.9978 7.42308C10.8647 7.42308 9.90234 7.81966 9.11067 8.61282C8.31901 9.40601 7.92317 10.3692 7.92317 11.5023C7.92317 12.6353 8.31976 13.5977 9.11293 14.3894C9.90611 15.181 10.8692 15.5769 12.0023 15.5769ZM12.0001 14.2C11.2501 14.2 10.6126 13.9375 10.0876 13.4125C9.56258 12.8875 9.30007 12.25 9.30007 11.5C9.30007 10.75 9.56258 10.1125 10.0876 9.58748C10.6126 9.06248 11.2501 8.79998 12.0001 8.79998C12.7501 8.79998 13.3876 9.06248 13.9126 9.58748C14.4376 10.1125 14.7001 10.75 14.7001 11.5C14.7001 12.25 14.4376 12.8875 13.9126 13.4125C13.3876 13.9375 12.7501 14.2 12.0001 14.2ZM12.0014 18.5C9.70183 18.5 7.60651 17.8657 5.71547 16.5971C3.82446 15.3285 2.43216 13.6295 1.53857 11.5C2.43216 9.37049 3.82401 7.67146 5.71412 6.40288C7.60422 5.13429 9.69908 4.5 11.9987 4.5C14.2983 4.5 16.3936 5.13429 18.2847 6.40288C20.1757 7.67146 21.568 9.37049 22.4616 11.5C21.568 13.6295 20.1761 15.3285 18.286 16.5971C16.3959 17.8657 14.3011 18.5 12.0014 18.5Z",fill:"currentColor"})})]}),$o=t=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_5577_416",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"22",height:"22",children:e.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),e.jsx("g",{mask:"url(#mask0_5577_416)",children:e.jsx("path",{d:"M11 17.6634C10.6219 17.6634 10.2982 17.5287 10.0289 17.2595C9.75964 16.9902 9.625 16.6665 9.625 16.2884C9.625 15.9103 9.75964 15.5866 10.0289 15.3173C10.2982 15.0481 10.6219 14.9134 11 14.9134C11.3781 14.9134 11.7018 15.0481 11.971 15.3173C12.2403 15.5866 12.375 15.9103 12.375 16.2884C12.375 16.6665 12.2403 16.9902 11.971 17.2595C11.7018 17.5287 11.3781 17.6634 11 17.6634ZM11 12.3749C10.6219 12.3749 10.2982 12.2403 10.0289 11.971C9.75964 11.7018 9.625 11.3781 9.625 11C9.625 10.6218 9.75964 10.2982 10.0289 10.0289C10.2982 9.75962 10.6219 9.62498 11 9.62498C11.3781 9.62498 11.7018 9.75962 11.971 10.0289C12.2403 10.2982 12.375 10.6218 12.375 11C12.375 11.3781 12.2403 11.7018 11.971 11.971C11.7018 12.2403 11.3781 12.3749 11 12.3749ZM11 7.08648C10.6219 7.08648 10.2982 6.95184 10.0289 6.68257C9.75964 6.41332 9.625 6.08963 9.625 5.7115C9.625 5.33339 9.75964 5.0097 10.0289 4.74043C10.2982 4.47118 10.6219 4.33655 11 4.33655C11.3781 4.33655 11.7018 4.47118 11.971 4.74043C12.2403 5.0097 12.375 5.33339 12.375 5.7115C12.375 6.08963 12.2403 6.41332 11.971 6.68257C11.7018 6.95184 11.3781 7.08648 11 7.08648Z",fill:"currentColor"})})]}),Eo=({topic:t,onClick:n,onSearch:r,checkedStates:s,setCheckedStates:i,isMuteDisabled:a})=>{const[l,o]=D(v=>[v.ids,v.total]),[c,h]=m.useState(!1),g=Ne(t.date_added_to_graph),f=async(v,E)=>{h(!0);try{await je(v,{is_muted:E}),D.setState({ids:l.filter(T=>T!==v),total:o-1})}catch(T){console.warn(T)}},u=v=>{i(E=>({...E,[v]:!E[v]}))},j=(v,E)=>{var T;(T=window.getSelection())!=null&&T.toString()?v.preventDefault():r(E.name)},b=t.edgeList.slice(0,1),C=t.edgeList.length-b.length,[y,w]=N.useState(null),A=v=>{w(v.currentTarget)},L=()=>{w(null)},B=!!y,I=s[t.ref_id]?"visible":"";return e.jsxs(Ce,{className:s[t.ref_id]?"checked":"",children:[e.jsx(S,{children:e.jsx(Po,{className:`checkbox-section ${I}`,onClick:()=>u(t.ref_id),children:e.jsx(Bo,{checked:s[t.ref_id],children:e.jsx(Oo,{children:s[t.ref_id]&&e.jsx(kt,{})})})})}),e.jsx(S,{onClick:v=>j(v,t),children:e.jsx(No,{children:t.name})}),e.jsx(S,{children:t.node_type}),e.jsx(S,{children:t.edgeCount}),e.jsxs(S,{children:[e.jsx(_t,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,id:"mouse-over-popover",onClose:L,open:B,sx:{pointerEvents:"none","& .MuiPaper-root":{backgroundColor:"rgba(0, 0, 0, 0.9)",borderRadius:"4px",width:"160px"}},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(Ke,{sx:{p:1.5,fontSize:"13px",fontWeight:400,lineHeight:"1.8",wordWrap:"break-word"},children:t.edgeList.join(", ")})}),b.join(", "),C>0&&e.jsx(Ke,{"aria-haspopup":"true","aria-owns":B?"mouse-over-popover":void 0,component:"span",onMouseEnter:A,onMouseLeave:L,sx:{cursor:"context-menu"},children:",..."})]}),e.jsx(S,{children:e.jsx("span",{children:g})}),e.jsx(S,{className:"cell-center",children:e.jsx(p,{direction:"row",justify:"space-between",children:e.jsx("div",{className:"approve-wrapper",children:c?e.jsx(Io,{children:e.jsx(P,{color:x.white,size:16})}):e.jsxs(p,{direction:"row",children:[t.is_muted?e.jsx(G,{className:"centered",disabled:a,onClick:()=>f(t.ref_id,!1),children:e.jsx(Lo,{})}):e.jsx(G,{className:"centered",disabled:a,onClick:()=>f(t.ref_id,!0),children:e.jsx(Ao,{})}),e.jsx(G,{disabled:a,onClick:v=>n(v,t.ref_id),children:e.jsx($o,{"data-testid":"ThreeDotsIcons"})})]})})})})]},t.name)},Io=d.span`
  margin-left: 12px;
`,No=d.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Po=d.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`,Bo=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`,Oo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,Mo=m.memo(Eo),zo=({setShowMuteUnmute:t,showMuted:n,onTopicEdit:r,onChangeFilter:s,checkedStates:i,setCheckedStates:a})=>{const{close:l}=U("sourcesTable"),[o,c]=m.useState(!1),[h,g]=N.useState(null),[f,u]=N.useState(""),j=Object.values(i).filter(k=>k).length,[b,C]=te(k=>[k.setSearchFormValue,k.setCurrentSearch]),[y,w,A]=D(k=>[k.data,k.ids,k.total]),L=m.useCallback((k,R)=>{g(k.currentTarget),u(R)},[]),B=()=>{g(null)},I=k=>{b(k),C(k),l()},v=k=>{r(f,k),B()},E=k=>{s(k)},T=!!h,M=T?"simple-popover":void 0,O=async()=>{c(!0);try{const k=Object.keys(i).map(async $=>{if(i[$])try{return await je($,{is_muted:!n}),$}catch(Y){return console.error("Error updating node data:",Y),null}return null}),R=await Promise.all(k);D.setState({ids:w.filter($=>!R.includes($)),total:A-R.length}),a({}),c(!1)}catch(k){console.error("Error:",k),c(!1)}};return y?e.jsx(e.Fragment,{children:Object.keys(y).length?e.jsx(Yo,{align:"center",justify:o?"center":"flex-start",children:o?e.jsx(P,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:e.jsxs($e,{onClick:()=>E(ze),children:["Name ",e.jsx(Le,{})]})}),e.jsx(S,{children:"Type"}),e.jsx(S,{children:e.jsxs($e,{onClick:()=>E(Fn),children:["Count ",e.jsx(Le,{})]})}),e.jsx(S,{children:"Edge list"}),e.jsx(S,{children:e.jsxs($e,{onClick:()=>E(Wn),children:["Date ",e.jsx(Le,{})]})}),e.jsx(S,{children:e.jsx(p,{px:8,children:e.jsxs(Do,{onClick:t,children:[e.jsx(Ro,{checked:n,children:e.jsx(Fo,{children:n&&e.jsx(kt,{})})}),"Muted"]})})})]})}),j>0&&e.jsxs(X,{component:"tr",children:[e.jsx(S,{children:e.jsx(G,{onClick:()=>a({}),children:e.jsx(ce,{})})}),e.jsx(S,{children:e.jsxs(Ho,{children:[e.jsxs(Uo,{children:[e.jsx(Vo,{children:j}),"selected"]}),e.jsx(Go,{onClick:O,role:"button",children:n?e.jsxs(e.Fragment,{children:[e.jsx(nt,{})," Unmute All"]}):e.jsxs(e.Fragment,{children:[e.jsx(tt,{})," Mute All"]})}),e.jsxs(Zo,{onClick:()=>v("mergeTopic"),children:[e.jsx(et,{})," Merge"]})]})})]}),y&&e.jsx("tbody",{children:w==null?void 0:w.map(k=>e.jsx(Mo,{checkedStates:i,isMuteDisabled:Object.values(i).filter(R=>R).length>1,onClick:L,onSearch:I,setCheckedStates:a,topic:y[k]},k))})]}),f?e.jsxs(Wo,{anchorEl:h,anchorOrigin:{vertical:"bottom",horizontal:"right"},id:M,onClose:B,open:T,transformOrigin:{vertical:"top",horizontal:"right"},children:[n?e.jsxs(oe,{"data-testid":"unmute",onClick:()=>v("unMute"),children:[" ",e.jsx(nt,{"data-testid":""})," Unmute"]}):e.jsxs(oe,{"data-testid":"mute",onClick:()=>v("mute"),children:[" ",e.jsx(tt,{"data-testid":"VisibilityOff"})," Mute"]}),e.jsxs(oe,{"data-testid":"rename",onClick:()=>v("editTopic"),children:[e.jsx(ko,{"data-testid":"EditTopicIcon"})," Rename"]}),e.jsxs(oe,{"data-testid":"merge",onClick:()=>v("mergeTopic"),children:[e.jsx(et,{"data-testid":"MergeIcon"})," Merge"]}),e.jsxs(oe,{"data-testid":"add_edge",onClick:()=>v("addEdge"),children:[e.jsx(To,{"data-testid":"AddCircleIcon"})," Add edge"]})]}):null]})}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})}):e.jsxs(p,{children:[e.jsx(_,{children:"There is not any results for selected filters"}),e.jsx(Ie,{})]})},Do=d.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Ro=d.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({checked:t})=>t?"#618AFF":"2px solid #CCCCCC"};
  background-color: ${({checked:t})=>t?"#618AFF":"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`,Fo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`,$e=d.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,oe=d(p).attrs({direction:"row",px:12,py:8})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${x.BUTTON1};
  color: ${x.white};

  &:hover {
    background: ${x.BUTTON1_HOVER};
    color: ${x.GRAY3};
  }
`,Wo=d(_t)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${x.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`,Vo=d.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`,Go=d.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  padding: 1px 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 8px;
    border-radius: 4px;
  }
`,Uo=d.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,Ho=d.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Yo=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Zo=d.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
  padding: 1px 6px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 6px;
    border-radius: 4px;
  }
`,Ko=()=>{const[t,n,r,s,i,a,l,o]=D(T=>[T.data,T.ids,T.total,T.setTopics,T.filters,T.setFilters,T.terminate,T.loading]),{open:c}=U("editTopic"),{open:h}=U("mergeTopic"),{open:g}=U("addEdge"),[f,u]=m.useState(null),[j,b]=m.useState([]),[C,y]=m.useState({}),w={editTopic:c,mergeTopic:h,addEdge:g},A=m.useRef([]);m.useEffect(()=>{n.length&&(A.current=n)},[n]),m.useEffect(()=>{(async()=>{try{await s()}catch{console.error("err")}})()},[s,i]);const L=async()=>{a({page:i.page+1})};m.useEffect(()=>()=>{l()},[l]);const B=T=>{a({sortBy:T})},I=()=>{u(null),b([])},v=async(T,M)=>{try{await je(T,{is_muted:M==="mute"}),D.setState({ids:n.filter(O=>O!==T),total:r-1})}catch(O){console.warn(O)}},E=async(T,M)=>{if(t)if(M==="mergeTopic")if(Object.values(C).filter(O=>O).length>0){const O=Object.entries(C).filter(([,k])=>k).map(([k])=>t[k]);b(O),h()}else b([t[T]]),u(t[T]),h();else["mute","unMute"].includes(M)&&await v(T,M),typeof w[M]=="function"&&w[M]()};return e.jsxs(e.Fragment,{children:[e.jsxs(qo,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"flex-start",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Topics"})}),e.jsx(Qo,{children:e.jsx(Ur,{activeIcon:e.jsx(ce,{}),defaultIcon:e.jsx(ht,{}),loading:o,loadingIcon:e.jsx(P,{color:x.PRIMARY_BLUE,size:24}),placeholder:"Search ..."})}),e.jsx(Xo,{align:"center",justify:o&&!t?"center":"flex-start",children:o&&!t?e.jsx(P,{color:x.white}):e.jsxs(e.Fragment,{children:[e.jsx(zo,{checkedStates:C,onChangeFilter:B,onTopicEdit:E,setCheckedStates:y,setShowMuteUnmute:()=>a({is_muted:!i.is_muted}),showMuted:i.is_muted}),r>n.length?e.jsxs(H,{className:"load-more",disabled:o,onClick:L,children:["Load more",o&&e.jsx(P,{color:x.BLUE_PRESS_STATE,size:10})]}):null]})})]}),j.length>0&&e.jsx(_o,{multiTopics:j,onClose:I}),f&&e.jsx(po,{onClose:I,topic:f}),f&&e.jsx(ao,{onClose:I,topic:f})]})},qo=d(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`,Xo=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,Qo=d(p)`
  margin: 0 0 16px 36px;
`;function Jo(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}const es=({node:t})=>{var n,r,s,i,a,l,o,c,h;return e.jsxs(Ce,{children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:(n=t==null?void 0:t.properties)!=null&&n.date_added_to_graph?Ne((r=t==null?void 0:t.properties)==null?void 0:r.date_added_to_graph):Ne((s=t==null?void 0:t.properties)==null?void 0:s.date)}),e.jsx(S,{children:t==null?void 0:t.node_type}),e.jsx(S,{children:(t==null?void 0:t.node_type)==="Tweet"?e.jsx(rt,{href:`${Ye}${(i=t==null?void 0:t.properties)==null?void 0:i.tweet_id}${Ye.includes("?")?"&":"?"}open=system`,target:"_blank",children:(a=t==null?void 0:t.properties)==null?void 0:a.tweet_id}):e.jsx(rt,{href:`${(l=t==null?void 0:t.properties)==null?void 0:l.source_link}${((o=t==null?void 0:t.properties)==null?void 0:o.source_link).includes("?")?"&":"?"}open=system`,target:"_blank",children:(c=t==null?void 0:t.properties)==null?void 0:c.source_link})}),e.jsx(S,{children:(h=t==null?void 0:t.properties)!=null&&h.status?Jo(t.properties.status):"Processing"})]})},rt=d.a`
  color: ${x.white};
  text-decoration: underline;
  &:visited {
    color: ${x.white};
  }
`,ts=m.memo(es),ns=({nodes:t})=>{const{open:n}=U("addContent"),r=async()=>{n()};return!t||(t==null?void 0:t.length)===0?e.jsx(e.Fragment,{children:e.jsxs(rs,{children:[e.jsx(os,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"subtitle",children:"Contribute to the graph by adding content."})}),e.jsx(p,{children:e.jsx(H,{color:"secondary",onClick:r,size:"medium",startIcon:e.jsx(Hn,{}),type:"submit",variant:"contained",children:"Add Content"})})]})}):e.jsxs(be,{component:"table",children:[e.jsx(ve,{children:e.jsxs(X,{component:"tr",children:[e.jsx(S,{className:"empty"}),e.jsx(S,{children:"Date"}),e.jsx(S,{children:"Type"}),e.jsx(S,{children:"Source"}),e.jsx(S,{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(s=>e.jsx(ts,{node:s},s==null?void 0:s.ref_id))})]})},rs=Oe(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 100%;
`,os=Oe(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`,ss=()=>{const[t,n]=m.useState([]),[r,s]=m.useState(!0),[i,a]=m.useState(10),[l,o]=m.useState(!0),c={only_content:"true",sort_by:"date",limit:i.toString()},h=async()=>{s(!0);try{const f=await Jt(c);n(f.nodes),s(!1)}catch(f){console.error("Error fetching data:",f),s(!1)}};m.useEffect(()=>{h()},[i]);const g=()=>{a(i+10),h()};return e.jsxs(is,{direction:"column",justify:"flex-end",children:[e.jsx(we,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"Content I've added to the graph"})}),e.jsxs(as,{align:"center",justify:r?"center":"flex-start",children:[r?e.jsx(P,{color:x.white}):e.jsx(e.Fragment,{children:e.jsx(ns,{nodes:t})}),r?null:l?e.jsx(H,{onClick:g,size:"medium",children:"Load More"}):e.jsx(ls,{children:"No new nodes available"})]})]})},is=d(p)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${x.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${x.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`,as=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ls=d.div`
  margin-top: 10px;
  color: ${x.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`,cs=[{label:vt,component:ss},{label:Vn,component:Fr},{label:Ct,component:Lr},{label:bt,component:Ko}],ds=t=>{const{children:n,value:r,index:s,...i}=t;return r===s?e.jsx(fs,{"aria-labelledby":`simple-tab-${s}`,hidden:r!==s,id:`simple-tabpanel-${s}`,role:"tabpanel",...i,children:n}):null};function ps(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const hs=()=>{const[t,n]=m.useState(0),[r]=le(o=>[o.isAdmin]),[s]=en(o=>[o.queuedSourcesFlag]),i=tn(),a=(o,c)=>{n(c)},l=cs.filter(({label:o})=>o===bt?r:o===Ct?r&&s:o===vt?i:!0);return e.jsxs(ms,{"data-testid":"sources-table",direction:"column",children:[e.jsx(us,{"aria-label":"sources tabs",onChange:a,value:t,children:l.map((o,c)=>e.jsx(xs,{color:x.white,disableRipple:!0,label:o.label,...ps(c)},o.label))}),l.map((o,c)=>e.jsx(ds,{index:c,value:t,children:e.jsx(o.component,{})},o.label))]})},us=d(Kn)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${x.primaryBlue};
    }
  }
`,xs=d(qn)`
  && {
    padding: 30px 0 24px;
    color: ${x.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${x.white};
    }
  }
`,fs=d(p)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`,ms=d(p)`
  min-height: 0;
  flex: 1;
`,fe={required:{message:"The field is required",value:!0}},gs=({initialValues:t})=>{const n=de({defaultValues:t,mode:"onSubmit"}),{isSubmitting:r}=n.formState,s=n.handleSubmit(async i=>{try{await nn(i)}catch(a){console.warn(a)}});return e.jsx(pe,{...n,children:e.jsx("form",{id:"add-node-form",onSubmit:s,children:e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-mission_statement-id",label:"Mission Statement",maxLength:50,name:"mission_statement",placeholder:"Type mission statement here...",rules:{...fe}})}),e.jsx(p,{pt:12,children:e.jsx(se,{id:"cy-about-search_term-id",label:"Search Term",maxLength:50,name:"search_term",placeholder:"Type search term here...",rules:{...fe}})})]}),e.jsx(p,{pt:8,children:r?e.jsx(ys,{children:e.jsx(P,{color:x.white,size:20})}):e.jsx(At,{disabled:r,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},ys=d(p).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,js=({initialValues:t})=>e.jsxs(e.Fragment,{children:[t.title&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Title"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.title})})]}),t.description&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Graph Description"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.description})})]}),t.mission_statement&&e.jsxs(p,{pt:12,children:[e.jsx(_,{kind:"regular",children:"Mission Statement"}),e.jsx(p,{pt:12,children:e.jsx(_,{className:"value",kind:"medium",children:t.mission_statement})})]})]}),bs=()=>{const[t]=le(r=>[r.isAdmin]),n=te(r=>r.appMetaData);return n?e.jsxs(Cs,{align:"stretch",direction:"column",justify:"flex-end",children:[e.jsx(ws,{align:"center",direction:"row",justify:"space-between",children:e.jsx(_,{className:"title",children:"About"})}),e.jsx(vs,{align:"stretch",justify:"flex-start",children:t?e.jsx(gs,{initialValues:n}):e.jsx(js,{initialValues:n})})]}):null},Cs=d(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value {
    color: ${x.lightBlue400};
  }
`,vs=d(p)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`,ws=d(p)`
  margin-bottom: 16px;
  ${_} {
    margin-bottom: 0;
  }
`;var Ss=["type","layout","connectNulls","ref"];function J(t){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},J(t)}function _s(t,n){if(t==null)return{};var r=Ts(t,n),s,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)s=a[i],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}function Ts(t,n){if(t==null)return{};var r={},s=Object.keys(t),i,a;for(a=0;a<s.length;a++)i=s[a],!(n.indexOf(i)>=0)&&(r[i]=t[i]);return r}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},ie.apply(this,arguments)}function ot(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function z(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?ot(Object(r),!0).forEach(function(s){F(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ot(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function K(t){return $s(t)||Ls(t)||As(t)||ks()}function ks(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function As(t,n){if(t){if(typeof t=="string")return Pe(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(t,n)}}function Ls(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $s(t){if(Array.isArray(t))return Pe(t)}function Pe(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=new Array(n);r<n;r++)s[r]=t[r];return s}function Es(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function st(t,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,Pt(s.key),s)}}function Is(t,n,r){return n&&st(t.prototype,n),r&&st(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ns(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Be(t,n)}function Be(t,n){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Be(t,n)}function Ps(t){var n=Os();return function(){var s=ye(t),i;if(n){var a=ye(this).constructor;i=Reflect.construct(s,arguments,a)}else i=s.apply(this,arguments);return Bs(this,i)}}function Bs(t,n){if(n&&(J(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}function V(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Os(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ye(t){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ye(t)}function F(t,n,r){return n=Pt(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Pt(t){var n=Ms(t,"string");return J(n)==="symbol"?n:String(n)}function Ms(t,n){if(J(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,n||"default");if(J(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var he=function(t){Ns(r,t);var n=Ps(r);function r(){var s;Es(this,r);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return s=n.call.apply(n,[this].concat(a)),F(V(s),"state",{isAnimationFinished:!0,totalLength:0}),F(V(s),"generateSimpleStrokeDasharray",function(o,c){return"".concat(c,"px ").concat(o-c,"px")}),F(V(s),"getStrokeDasharray",function(o,c,h){var g=h.reduce(function(A,L){return A+L});if(!g)return s.generateSimpleStrokeDasharray(c,o);for(var f=Math.floor(o/g),u=o%g,j=c-o,b=[],C=0,y=0;C<h.length;y+=h[C],++C)if(y+h[C]>u){b=[].concat(K(h.slice(0,C)),[u-y]);break}var w=b.length%2===0?[0,j]:[j];return[].concat(K(r.repeat(h,f)),K(b),w).map(function(A){return"".concat(A,"px")}).join(", ")}),F(V(s),"id",gn("recharts-line-")),F(V(s),"pathRef",function(o){s.mainCurve=o}),F(V(s),"handleAnimationEnd",function(){s.setState({isAnimationFinished:!0}),s.props.onAnimationEnd&&s.props.onAnimationEnd()}),F(V(s),"handleAnimationStart",function(){s.setState({isAnimationFinished:!1}),s.props.onAnimationStart&&s.props.onAnimationStart()}),s}return Is(r,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();this.setState({totalLength:i})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var i=this.getTotalLength();i!==this.state.totalLength&&this.setState({totalLength:i})}}},{key:"getTotalLength",value:function(){var i=this.mainCurve;try{return i&&i.getTotalLength&&i.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(i,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var l=this.props,o=l.points,c=l.xAxis,h=l.yAxis,g=l.layout,f=l.children,u=yn(f,jn);if(!u)return null;var j=function(y,w){return{x:y.x,y:y.y,value:y.value,errorVal:xt(y.payload,w)}},b={clipPath:i?"url(#clipPath-".concat(a,")"):null};return N.createElement(Se,b,u.map(function(C){return N.cloneElement(C,{key:"bar-".concat(C.props.dataKey),data:o,xAxis:c,yAxis:h,layout:g,dataPointFormatter:j})}))}},{key:"renderDots",value:function(i,a,l){var o=this.props.isAnimationActive;if(o&&!this.state.isAnimationFinished)return null;var c=this.props,h=c.dot,g=c.points,f=c.dataKey,u=xe(this.props),j=xe(h,!0),b=g.map(function(y,w){var A=z(z(z({key:"dot-".concat(w),r:3},u),j),{},{value:y.value,dataKey:f,cx:y.x,cy:y.y,index:w,payload:y.payload});return r.renderDotItem(h,A)}),C={clipPath:i?"url(#clipPath-".concat(a?"":"dots-").concat(l,")"):null};return N.createElement(Se,ie({className:"recharts-line-dots",key:"dots"},C),b)}},{key:"renderCurveStatically",value:function(i,a,l,o){var c=this.props,h=c.type,g=c.layout,f=c.connectNulls;c.ref;var u=_s(c,Ss),j=z(z(z({},xe(u,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(l,")"):null,points:i},o),{},{type:h,layout:g,connectNulls:f});return N.createElement(bn,ie({},j,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(i,a){var l=this,o=this.props,c=o.points,h=o.strokeDasharray,g=o.isAnimationActive,f=o.animationBegin,u=o.animationDuration,j=o.animationEasing,b=o.animationId,C=o.animateNewValues,y=o.width,w=o.height,A=this.state,L=A.prevPoints,B=A.totalLength;return N.createElement(Cn,{begin:f,duration:u,isActive:g,easing:j,from:{t:0},to:{t:1},key:"line-".concat(b),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(I){var v=I.t;if(L){var E=L.length/c.length,T=c.map(function($,ue){var Y=Math.floor(ue*E);if(L[Y]){var ne=L[Y],Z=re(ne.x,$.x),Bt=re(ne.y,$.y);return z(z({},$),{},{x:Z(v),y:Bt(v)})}if(C){var Ot=re(y*2,$.x),Mt=re(w/2,$.y);return z(z({},$),{},{x:Ot(v),y:Mt(v)})}return z(z({},$),{},{x:$.x,y:$.y})});return l.renderCurveStatically(T,i,a)}var M=re(0,B),O=M(v),k;if(h){var R="".concat(h).split(/[,\s]+/gim).map(function($){return parseFloat($)});k=l.getStrokeDasharray(O,B,R)}else k=l.generateSimpleStrokeDasharray(B,O);return l.renderCurveStatically(c,i,a,{strokeDasharray:k})})}},{key:"renderCurve",value:function(i,a){var l=this.props,o=l.points,c=l.isAnimationActive,h=this.state,g=h.prevPoints,f=h.totalLength;return c&&o&&o.length&&(!g&&f>0||!vn(g,o))?this.renderCurveWithAnimation(i,a):this.renderCurveStatically(o,i,a)}},{key:"render",value:function(){var i,a=this.props,l=a.hide,o=a.dot,c=a.points,h=a.className,g=a.xAxis,f=a.yAxis,u=a.top,j=a.left,b=a.width,C=a.height,y=a.isAnimationActive,w=a.id;if(l||!c||!c.length)return null;var A=this.state.isAnimationFinished,L=c.length===1,B=Ue("recharts-line",h),I=g&&g.allowDataOverflow,v=f&&f.allowDataOverflow,E=I||v,T=Ee(w)?this.id:w,M=(i=xe(o))!==null&&i!==void 0?i:{r:3,strokeWidth:2},O=M.r,k=O===void 0?3:O,R=M.strokeWidth,$=R===void 0?2:R,ue=wn(o)?o:{},Y=ue.clipDot,ne=Y===void 0?!0:Y,Z=k*2+$;return N.createElement(Se,{className:B},I||v?N.createElement("defs",null,N.createElement("clipPath",{id:"clipPath-".concat(T)},N.createElement("rect",{x:I?j:j-b/2,y:v?u:u-C/2,width:I?b:b*2,height:v?C:C*2})),!ne&&N.createElement("clipPath",{id:"clipPath-dots-".concat(T)},N.createElement("rect",{x:j-Z/2,y:u-Z/2,width:b+Z,height:C+Z}))):null,!L&&this.renderCurve(E,T),this.renderErrorBar(E,T),(L||o)&&this.renderDots(E,ne,T),(!y||A)&&Sn.renderCallByParent(this.props,c))}}],[{key:"getDerivedStateFromProps",value:function(i,a){return i.animationId!==a.prevAnimationId?{prevAnimationId:i.animationId,curPoints:i.points,prevPoints:a.curPoints}:i.points!==a.curPoints?{curPoints:i.points}:null}},{key:"repeat",value:function(i,a){for(var l=i.length%2!==0?[].concat(K(i),[0]):i,o=[],c=0;c<a;++c)o=[].concat(K(o),K(l));return o}},{key:"renderDotItem",value:function(i,a){var l;if(N.isValidElement(i))l=N.cloneElement(i,a);else if(rn(i))l=i(a);else{var o=Ue("recharts-line-dot",i?i.className:"");l=N.createElement(ut,ie({},a,{className:o}))}return l}}]),r}(m.PureComponent);F(he,"displayName","Line");F(he,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!mn.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});F(he,"getComposedData",function(t){var n=t.props,r=t.xAxis,s=t.yAxis,i=t.xAxisTicks,a=t.yAxisTicks,l=t.dataKey,o=t.bandSize,c=t.displayedData,h=t.offset,g=n.layout,f=c.map(function(u,j){var b=xt(u,l);return g==="horizontal"?{x:He({axis:r,ticks:i,bandSize:o,entry:u,index:j}),y:Ee(b)?null:s.scale(b),value:b,payload:u}:{x:Ee(b)?null:r.scale(b),y:He({axis:s,ticks:a,bandSize:o,entry:u,index:j}),value:b,payload:u}});return z({points:f,layout:g},h)});var zs=_n({chartName:"LineChart",GraphicalChild:he,axisComponents:[{axisType:"xAxis",AxisComp:ft},{axisType:"yAxis",AxisComp:mt}],formatAxisMap:Tn});const Ds=({cx:t,cy:n})=>e.jsx(ut,{cx:t,cy:n,fill:x.blueTextAccent,r:2}),Rs=({data:t,width:n=500,height:r=300})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)&&e.jsxs(zs,{data:t,height:r,id:"cy-sentiment-chart",margin:{bottom:5,left:-20,right:30,top:5},width:n,children:[e.jsx(kn,{stroke:x.lightBlue300,strokeDasharray:"5 5"}),e.jsx(ft,{dataKey:"date",interval:Math.floor(t.length/3),stroke:x.blueTextAccent}),e.jsx(mt,{domain:[0,10],stroke:x.blueTextAccent}),e.jsx(An,{}),e.jsx(he,{dataKey:"score",dot:e.jsx(Ds,{}),stroke:"#8884d8",type:"monotone"})]})}),Fs=()=>{const[t,n]=m.useState(void 0),[r]=le(l=>[l.setBudget]),[s,i]=m.useState(!1),a=async()=>{i(!0),on(r).then(async l=>{n(l==null?void 0:l.data.filter(o=>o.date).map(o=>({date:sn.unix(Number(String(o.date).split(".")[0])).format("MM/DD/YY"),score:o.sentiment_score}))),await dt(r)}).catch().finally(()=>{i(!1)})};return e.jsxs(Ws,{align:"flex-start",direction:"column",id:"cy-sentiment-chart-wrapper",justify:"flex-end",children:[e.jsx(_,{className:"title",children:"Sentiment chart"}),s&&e.jsx(Zn,{alignItems:"center",component:"div",flexGrow:1,p:4,spacing:2,width:"100%",children:e.jsx(Ln,{color:x.white})}),!(t!=null&&t.length)&&e.jsx(Vs,{className:"button",id:"cy-get-sentiments-btn",onClick:a,children:"Get top 100 sentiments"}),e.jsx(Rs,{data:t})]})},Ws=d(p)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`,Vs=d(At)`
  height: 48px;
`,Gs=600,Us={about:e.jsx(bs,{}),sentiment:e.jsx(Fs,{}),sources:e.jsx(hs,{}),"":null},Hs=()=>{const[t,n]=te(r=>[r.secondarySidebarActiveTab,r.setSecondarySidebarActiveTab]);return e.jsx($n,{direction:"left",in:!!t,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(Ys,{id:"secondary-sidebar-wrapper",children:[e.jsx(Zs,{id:"cy-close-secondary-sidebar",onClick:()=>n(""),children:e.jsx(gt,{})}),Us[t]]})})},Ys=d(p)(({theme:t})=>({background:x.BG1,height:"100vh",padding:"16px 20px",width:"100%",zIndex:30,display:"flex",[t.breakpoints.up("sm")]:{width:Gs}})),Zs=d(p).attrs({align:"center",justify:"center",p:5})`
  background-color: ${x.inputBg1};
  border-radius: 50%;
  color: ${x.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${x.gray200};
  }
`,Ks=d(pn)`
  .Toastify__toast {
    background-color: #49c998ff;
    width: fit-content;
    min-height: 100%;
    border-radius: 12px;
    padding: 6px;
  }
  .Toastify__toast-body {
    background-color: #49c998ff;
    color: ${x.white};
    font-weight: 500;
    font-family: 'Barlow';
  }
  .Toastify__close-button {
    color: ${x.white};
  }
  .Toastify__progress-bar--error {
    background-color: ${x.primaryRed};
  }
  .Toastify__progress-bar--success {
    background-color: ${x.primaryGreen};
  }
  &.Toastify__toast-container--top-right {
    width: fit-content;
    height: auto;
    top: 60px;
    right: 48px;
  }
`,qs=d(p)`
  height: 100%;
  width: 100%;
  background-color: ${x.black};
`,Xs=d(p)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${x.white};
  font-size: 12px;
  opacity: 0.5;
`,Qs=m.lazy(()=>W(()=>import("./index-fe7da18b.js"),["assets/index-fe7da18b.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/SourcesTableIcon-fce6146d.js","assets/SettingsIcon-7054630b.js","assets/index-223abcd5.js"]).then(({MainToolbar:t})=>({default:t}))),Js=m.lazy(()=>W(()=>import("./index-3ba42bec.js"),["assets/index-3ba42bec.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/Selection-3da08d19.js","assets/EditIcon-68f611cd.js","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/generateCategoricalChart-0baee852.js","assets/Popover-72adf21b.js","assets/useSlotProps-d3250adc.js","assets/InfoIcon-6f87a854.js","assets/index-b25de6ed.js","assets/index.esm-e6dd1f6b.js","assets/PlusIcon-f6719d8f.js","assets/index-223abcd5.js","assets/index-01d0d57b.js","assets/NoFilterResultIcon-fe225f5a.js","assets/index-82b30fdd.js","assets/index-1166f0b3.js","assets/index-5ef66a02.js","assets/index-bd1e827e.js","assets/index-54e69bd6.js","assets/Popper-1bb4f19d.js","assets/CheckIcon-e160516f.js"]).then(({Universe:t})=>({default:t}))),ei=m.lazy(()=>W(()=>import("./index-701fd78a.js"),["assets/index-701fd78a.js","assets/index-c638bc9b.js","assets/index-3f17fe3b.css","assets/react-toastify.esm-ce1e09ea.js","assets/react-toastify-b60658ac.css","assets/CheckIcon-e160516f.js","assets/ChevronDownIcon-54fe1a3d.js","assets/ChevronUpIcon-ac9ded88.js","assets/Popover-72adf21b.js","assets/useSlotProps-d3250adc.js","assets/ChevronRightIcon-03cbbb6e.js","assets/index-b25de6ed.js","assets/generateCategoricalChart-0baee852.js","assets/InfoIcon-6f87a854.js","assets/index.esm-e6dd1f6b.js","assets/ChevronRightIcon-6125620a.css","assets/index-07baa60e.js","assets/Skeleton-b4ddd061.js","assets/PlusIcon-f6719d8f.js","assets/index-223abcd5.js","assets/index-bd1e827e.js"]).then(({SideBar:t})=>({default:t}))),ti=()=>{const[t,n]=le(v=>[v.setBudget,v.setNodeCount]),[r,s]=m.useState(!1),{setSidebarOpen:i,currentSearch:a,setCurrentSearch:l,setRelevanceSelected:o,setTranscriptOpen:c}=te(v=>v),h=En(v=>v.setTeachMeAnswer),{data:g,setData:f,fetchData:u,graphStyle:j,setSelectedNode:b,setCategoryFilter:C}=ee(v=>v),y=hn(),w=de({mode:"onChange"}),A=w.handleSubmit(({search:v})=>{c(!1),b(null),o(!1),l(v),h(""),C(null)}),L=m.useCallback(async()=>{await u(t,{...a?{word:a}:{}}),i(!0),a?await dt(t):b(null)},[u,t,a,i,b]);m.useEffect(()=>{L()},[a,L]);const B=()=>{if(g){s(!0);const v=ln(j,g.nodes);f(v),s(!1)}};m.useEffect(()=>{B()},[j]);const I=m.useCallback(()=>{n("INCREMENT")},[n]);return m.useEffect(()=>(y&&(y.connect(),y.on("connect_error",v=>{console.error("Socket connection error:",v)}),y.on("newnode",I)),()=>{y&&y.off()}),[y,I]),e.jsxs(e.Fragment,{children:[e.jsx(un,{}),e.jsx(wr,{}),e.jsx(xn,{hidden:!an}),e.jsx(m.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsxs(qs,{direction:"row",children:[e.jsx(In,{children:e.jsxs(pe,{...w,children:[e.jsx(Qs,{}),e.jsx(ei,{onSubmit:A}),e.jsx(Js,{}),r&&e.jsx(dr,{fullSize:!1}),e.jsx(lr,{}),e.jsx(Hs,{}),e.jsx(br,{}),e.jsxs(Xs,{children:["v",fn]}),e.jsx(pt,{})]})}),e.jsx(jr,{}),e.jsx(Ks,{}),e.jsx(kr,{})]})})]})},ji=Object.freeze(Object.defineProperty({__proto__:null,App:ti},Symbol.toStringTag,{value:"Module"}));export{$t as A,Et as F,gi as N,lr as O,dr as P,Ce as S,yi as a,S as b,ve as c,Nt as d,hs as e,It as f,ji as g,mi as i};