import{a as e,r as t,R as n,b as a}from"./vendor.c8e094d7.js";e.defaults.baseURL="/api";var o="_commentContainer_xxe5p_1";const l=({comment:e,deleteComment:a})=>{const[l,s]=(e=>{const[n]=t.exports.useState(new Audio(e)),[a,o]=t.exports.useState(!1);return t.exports.useEffect((()=>{a?n.play():n.pause()}),[a]),t.exports.useEffect((()=>(n.addEventListener("ended",(()=>o(!1))),()=>{n.removeEventListener("ended",(()=>o(!1)))})),[]),[a,()=>o(!a)]})(e.audio);return n.createElement("div",{className:o},n.createElement("p",null,e.description),n.createElement("button",{onClick:()=>a(e)}," Delete"),n.createElement("button",{onClick:s},l?"Pausar":"Ouvir"))};var s="_feedContainer_1sh2v_1";const r=({comments:t,updateFeed:a})=>{const o=async t=>{if(window.confirm("Should delete this comment?"))try{await(async t=>e.delete(`/comment/${t}`).then((e=>e.data)))(t.id),a()}catch(n){console.log(n.message)}};return n.createElement("section",null,n.createElement("div",{className:s},n.createElement("h2",null,"Comentários"),t.map((e=>n.createElement(l,{key:e.id,comment:e,deleteComment:o})))))};var c="_loaderContainer_tpnnt_1",m="_loader_tpnnt_1",i="_buttonLoader_tpnnt_17";const u=({isButton:e})=>n.createElement("div",{className:c},n.createElement("div",{className:e?i:m}));var d="_form_19if1_1";const p=({updateFeed:a})=>{const[o,l]=t.exports.useState(""),[s,r]=t.exports.useState(!1);return t.exports.useEffect((()=>{const e=document.getElementById("comment-input");e&&(e.oninvalid=e=>{var t;null==(t=null==e?void 0:e.target)||t.setCustomValidity("Coloque pelo menos 6 caracteres e no máximo 200")},e.oninput=e=>{var t;null==(t=null==e?void 0:e.target)||t.setCustomValidity("")})}),[]),n.createElement("section",null,n.createElement("form",{className:d,onSubmit:async t=>{t.preventDefault();try{r(!0),await(async t=>e.post("/comment",{description:t}).then((e=>e.data)))(o),l(""),a()}catch(n){console.log(n.message)}finally{r(!1)}}},n.createElement("label",null,"Comentário"),n.createElement("textarea",{id:"comment-input",placeholder:"Coloque algum texto, e.g: Hoje o dia está ensolarado",minLength:6,title:"Coloque pelo menos 6 caracteres e no máximo 200",maxLength:200,required:!0,name:"comment description",onChange:e=>{l(e.target.value)}}),n.createElement("button",{type:"submit"},s?n.createElement(u,{isButton:!0}):"Cadastrar")))};function E(){const[a,o]=t.exports.useState([]),[l,s]=t.exports.useState(!1),c=async()=>{try{s(!0);const t=await(async()=>e.get("/comment").then((e=>e.data)))();o(t.comments)}catch(t){console.log(t.message)}finally{s(!1)}};return t.exports.useEffect((()=>{(async()=>{await c()})()}),[]),n.createElement("main",{className:"App"},n.createElement(p,{updateFeed:c}),l?n.createElement("div",null,n.createElement(u,null)):n.createElement(r,{comments:a,updateFeed:c}))}a.render(n.createElement(n.StrictMode,null,n.createElement(E,null)),document.getElementById("root"));
