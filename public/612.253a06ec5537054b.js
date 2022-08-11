"use strict";(self.webpackChunkrick_morty=self.webpackChunkrick_morty||[]).push([[612],{4612:(M,d,i)=>{i.r(d),i.d(d,{PagesModule:()=>P});var c=i(9808),s=i(3370),t=i(1223),u=i(520),m=i(9646),l=i(4004),f=i(262),h=i(9019);let g=(()=>{class o{constructor(e){this.http=e,this.USER_ID="userId",this.baseUrl=h.N.baseUrl}getPersonajes(){return this.http.get("https://rickandmortyapi.com/api/character").pipe((0,l.U)(n=>n.results))}addFavorite(e){const n=`${this.baseUrl}favorite/newFavorite`;return console.log(e),this.http.post(n,e).pipe((0,l.U)(a=>a.ok),(0,f.K)(a=>(alert("Personaje ya est\xe1 en favoritos"),(0,m.of)(a.error))))}getFavorites(){const e=`${this.baseUrl}favorite/${localStorage.getItem("userId")}`;return this.http.get(e).pipe((0,l.U)(n=>n.favoritos))}deleteFavorite(e,n){const a=`${this.baseUrl}favorite/deleteFavorite`,p={headers:new u.WM({"Content-Type":"application/json"}),body:{IdCharacter:e,IdUser:n}};return console.log(p),this.http.delete(a,p)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(u.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function v(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"section",3),t._uU(1),t._UZ(2,"img",4),t.TgZ(3,"button",5),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().addFavorite(p)}),t._uU(4,"Add favorite"),t.qZA()()}if(2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.name," "),t.xp6(1),t.Q6J("src",e.image,t.LSH)}}let C=(()=>{class o{constructor(e,n){this.apiService=e,this.router=n}ngOnInit(){this.charactersObs$=this.apiService.getPersonajes()}addFavorite(e){let n={IdCharacter:e.id,IdUser:localStorage.getItem("userId"),nameCharacter:e.name,caracterUrlImagen:e.image,token:localStorage.getItem("token")};this.apiService.addFavorite(n).subscribe(a=>{console.log(a," Todo est\xe1 ok"),0!=a.ok&&this.router.navigateByUrl("/pages/favorites")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-characters"]],decls:5,vars:3,consts:[["routerLink","/pages/favorites",1,"padding","btn-favorito"],[1,"container-characters"],["class","item",4,"ngFor","ngForOf"],[1,"item"],["alt","",3,"src"],[1,"btn-add-favorite",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"button",0),t._uU(1,"Listar mis Favoritos"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,v,5,2,"section",2),t.ALo(4,"async"),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,n.charactersObs$)))},directives:[s.rH,c.sg],pipes:[c.Ov],styles:[".container-characters[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-gap:20px;gap:20px}.item[_ngcontent-%COMP%]{padding:30px}.item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.btn-add-favorite[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:10px;color:#fff;font-size:19px;background-color:#23b32f;cursor:pointer}.padding[_ngcontent-%COMP%]{margin:0 30px}.btn-favorito[_ngcontent-%COMP%]{padding:15px;border:none;border-radius:10px;color:#fff;font-size:19px;background-color:#01c4c4;cursor:pointer}"]}),o})();function b(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"section",3),t._uU(1),t._UZ(2,"img",4),t.TgZ(3,"button",5),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw().removeFavorite(p)}),t._uU(4,"Remove favorite"),t.qZA()()}if(2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.nameCharacter," "),t.xp6(1),t.Q6J("src",e.caracterUrlImagen,t.LSH)}}let F=(()=>{class o{constructor(e,n){this.apiService=e,this.router=n}ngOnInit(){this.favoritesObs$=this.apiService.getFavorites()}back(){this.router.navigateByUrl("/pages")}removeFavorite(e){console.log(e.IdCharacter),this.apiService.deleteFavorite(e.IdCharacter,e.IdUser).subscribe(n=>{this.favoritesObs$=this.apiService.getFavorites()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-favorites"]],decls:7,vars:3,consts:[[1,"btn-back",3,"click"],[1,"container-characters"],["class","item",4,"ngFor","ngForOf"],[1,"item"],["alt","",3,"src"],[1,"btn-add-favorite",3,"click"]],template:function(e,n){1&e&&(t._UZ(0,"hr")(1,"br"),t.TgZ(2,"button",0),t.NdJ("click",function(){return n.back()}),t._uU(3,"Regresar"),t.qZA(),t.TgZ(4,"div",1),t.YNc(5,b,5,2,"section",2),t.ALo(6,"async"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,1,n.favoritesObs$)))},directives:[c.sg],pipes:[c.Ov],styles:[".container-characters[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-gap:20px;gap:20px}.item[_ngcontent-%COMP%]{padding:30px}.item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.btn-add-favorite[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:10px;color:#fff;font-size:19px;background-color:#a0003d;cursor:pointer}.btn-back[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:10px;color:#fff;font-size:19px;background-color:#750085;cursor:pointer}"]}),o})(),x=(()=>{class o{constructor(e){this.router=e,this.nombreUsuarioLogueado=""}ngOnInit(){this.nombreUsuarioLogueado=localStorage.getItem("name")}cerrarSesion(){localStorage.clear(),this.router.navigateByUrl("/login")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-header"]],decls:5,vars:1,consts:[[1,"flex"],[1,"btn-close-session",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"header",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"a",1),t.NdJ("click",function(){return n.cerrarSesion()}),t._uU(4," Cerrar Sesi\xf3n"),t.qZA()()),2&e&&(t.xp6(2),t.hij("Proyecto de ",n.nombreUsuarioLogueado,""))},styles:[".btn-close-session[_ngcontent-%COMP%]{width:auto;padding:15px;border:none;border-radius:10px;color:#fff;font-size:19px;background-color:#0086bf;cursor:pointer}.flex[_ngcontent-%COMP%]{padding:30px;display:flex;justify-content:space-between;align-items:center;background:#f3f3f3;margin-bottom:25px}"]}),o})(),_=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"h1"),t._uU(1,"ESTE ES EL FOOTER"),t.qZA())},styles:[""]}),o})();const y=[{path:"",component:(()=>{class o{constructor(e){this.router=e}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pages"]],decls:3,vars:0,template:function(e,n){1&e&&t._UZ(0,"app-header")(1,"router-outlet")(2,"app-footer")},directives:[x,s.lC,_],styles:[""]}),o})(),children:[{path:"",redirectTo:"characters"},{path:"characters",component:C},{path:"favorites",component:F}]}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(y)],s.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez]]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,O,U]]}),o})()}}]);