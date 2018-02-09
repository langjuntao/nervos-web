webpackJsonp([8],{222:function(n,e,t){"use strict";var i=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var o=t(23),r=t(25);o.injectGlobal(h||(h=i(["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  body{\n    position: relative;\n    padding-bottom: ","\n  }\n  header {\n    padding-top: ",";\n    @media (max-width: 1280px) {\n      padding-top: 1rem;\n    }\n    @media (max-width: 768px) {\n      padding-top: 0;\n    }\n  }\n  footer {\n    position: absolute;\n    left:0;\n    bottom: 0;\n    width: 100%;\n    margin-top: ",";\n    background-color: ",";\n  }\n"],["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  body{\n    position: relative;\n    padding-bottom: ","\n  }\n  header {\n    padding-top: ",";\n    @media (max-width: 1280px) {\n      padding-top: 1rem;\n    }\n    @media (max-width: 768px) {\n      padding-top: 0;\n    }\n  }\n  footer {\n    position: absolute;\n    left:0;\n    bottom: 0;\n    width: 100%;\n    margin-top: ",";\n    background-color: ",";\n  }\n"])),r.default.colors.background,r.default.sizes.root+"px",r.default.colors.highlight,r.default.sizes.footer.logo.height+r.default.sizes.footer.paddingTop+r.default.sizes.footer.paddingBottom+r.default.sizes.footer.marginTop+"rem",r.default.sizes.header.paddingTop+"rem",r.default.sizes.footer.marginTop+"rem",r.default.colors.darkBackgroud),e.Header=o.default.div(c||(c=i(["\n  position: relative;\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    max-width: auto;\n    width: 100vw;\n  }\n"],["\n  position: relative;\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    max-width: auto;\n    width: 100vw;\n  }\n"])),function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.screen.blockMaxWidth+"rem"},function(n){return n.theme.sizes.screen.blockWidthPercent}),e.Logo=o.default.img(m||(m=i(["\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n  @media (max-width: 768px) {\n    height: 50%;\n    transform: scale(0.8);\n  }\n"],["\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n  @media (max-width: 768px) {\n    height: 50%;\n    transform: scale(0.8);\n  }\n"]))),e.Navs=o.default.ul(p||(p=i(["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  z-index: 1;\n  @media (max-width: 768px) {\n    width: 100vw;\n    line-height: 1.4;\n    flex: 1;\n    display: flex;\n    justify-content: space-around;\n  }\n"],["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  z-index: 1;\n  @media (max-width: 768px) {\n    width: 100vw;\n    line-height: 1.4;\n    flex: 1;\n    display: flex;\n    justify-content: space-around;\n  }\n"])),function(n){return n.theme.colors.plain}),e.NavItem=o.default.li(u||(u=i(["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & a,\n  & span {\n    position: relative;\n    cursor: pointer;\n    text-transform: uppercase;\n  }\n  @media (max-width: 768px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"],["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & a,\n  & span {\n    position: relative;\n    cursor: pointer;\n    text-transform: uppercase;\n  }\n  @media (max-width: 768px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"])),function(n){return n.theme.sizes.navSpan+"rem"},function(n){return n.theme.sizes.navItemHeight+"rem"}),e.ScreenDiv=o.default.div(f||(f=i(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"],["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"])),function(n){return n.theme.colors.background});var a=o.default.div;e.ColorizedDiv=a(g||(g=i(["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"],["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return n.chart?n.theme.sizes.chart.title.paddingLeft+n.theme.sizes.colorizedBlock.color.width+"rem":n.theme.sizes.colorizedBlock.paddingLeft+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.width+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.height*(n.colorBlockHeight||1)+"rem"},function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.primary?n.theme.colors.primary:n.theme.colors.highlight}),e.RippleInput=o.default.input(x||(x=i(["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"],["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"])),function(n){return n.theme.sizes.inputFontSize+"rem"},function(n){return"linear-gradient(to top, "+n.theme.colors.primary+", "+n.theme.colors.primary+"), linear-gradient(to top, "+n.theme.colors.plain+", "+n.theme.colors.plain+")"},function(n){return n.theme.colors.plain},function(n){return n.theme.colors.plain}),e.HighlightButton=o.default.button(b||(b=i(["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"],["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.colors.highlight},function(n){return n.theme.sizes.subscribeBtnFontSize},function(n){return n.theme.sizes.highlightBtnWidth+"rem"},function(n){return n.theme.sizes.highlightBtnHeight+"rem"},function(n){return n.theme.sizes.highlightBtnHeight+"rem"}),e.SubscribeFormLine=o.default.div(w||(w=i(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"],["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"])),function(n){return n.theme.sizes.subscribeFormLineHeight+"rem"},function(n){return n.theme.sizes.subscribeFormLineWidth+"rem"}),e.SubscribeButtonContainer=o.default.div(z||(z=i(["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n  @media (max-width: 600px) {\n    position: relative;\n    left: 0;\n    bottom: 0;\n  }\n"],["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n  @media (max-width: 600px) {\n    position: relative;\n    left: 0;\n    bottom: 0;\n  }\n"]))),e.HistoryCol=o.default.div(y||(y=i(["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n  @media (max-width: 750px) {\n    display: block;\n    margin-bottom: 100px;\n    width: 100%;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n  @media (max-width: 750px) {\n    display: block;\n    margin-bottom: 100px;\n    width: 100%;\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+n.theme.colors.primary},function(n){return n.theme.sizes.historyColBorderBottomWidth+"rem solid "+n.theme.colors.primary},function(n){return n.theme.sizes.HistoryColPaddingTop+"rem"},function(n){return n.theme.sizes.HistoryColPaddingLeft+"rem"},function(n){return n.theme.sizes.historyCircleDiameter+"rem"},function(n){return n.theme.sizes.historyCircleDiameter+"rem"},function(n){return n.theme.sizes.historyCircleBandWidth+"rem solid "+n.theme.colors.primary},function(n){return n.theme.colors.background},function(n){return"0 0 0 "+n.theme.sizes.historyCircleBandWidth+"rem "+n.theme.colors.background}),e.HistoryYearLabel=o.default.span(v||(v=i(["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"])),function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.theme.sizes.HistoryYearLabelPaddingBottom+"rem"},function(n){return n.theme.colors.primary}),e.HistoryItem=o.default.p(k||(k=i(["\n  margin: ",";\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  color: ",";\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"],["\n  margin: ",";\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  color: ",";\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"])),function(n){return n.theme.sizes.HistoryItemMarginBottom+"rem 0"},function(n){return"0 "+n.theme.sizes.HistoryItemHPadding+"rem"},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.historyItemIconDiameter+"rem"},function(n){return n.theme.sizes.historyItemIconDiameter+"rem"},function(n){return n.theme.colors.assist}),e.Members=o.default.div(j||(j=i(["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4vh 5%;\n  @media (max-width: 992px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4vh 5%;\n  @media (max-width: 992px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),e.MemberBlock=o.default.div(B||(B=i(["\n  display: flex;\n  min-width: 30%;\n  flex: 1;\n  text-align: center;\n  flex-direction: column;\n  @media (max-width: 992px) {\n    flex-direction: row;\n  }\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n  @media (max-width: 750px) {\n    height: auto;\n    text-align: center;\n  }\n"],["\n  display: flex;\n  min-width: 30%;\n  flex: 1;\n  text-align: center;\n  flex-direction: column;\n  @media (max-width: 992px) {\n    flex-direction: row;\n  }\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n  @media (max-width: 750px) {\n    height: auto;\n    text-align: center;\n  }\n"]))),e.MemberAvatar=o.default.img(H||(H=i(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  @media (max-width: 750px) {\n    float: left;\n  }\n"],["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  @media (max-width: 750px) {\n    float: left;\n  }\n"])),function(n){return n.theme.sizes.memberBlockHeight+"rem"},function(n){return n.theme.sizes.memberBlockHeight+"rem"}),e.MemberInfo=o.default.div(L||(L=i(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  text-align: justify;\n  text-align-last: left;\n  padding-top: 15px;\n  @media (max-width: 992px) {\n    padding-left: 3.5rem;\n  }\n  @media (max-width: 750px) {\n    padding-left: 0;\n    padding-bottom: 20px;\n  }\n"],["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  text-align: justify;\n  text-align-last: left;\n  padding-top: 15px;\n  @media (max-width: 992px) {\n    padding-left: 3.5rem;\n  }\n  @media (max-width: 750px) {\n    padding-left: 0;\n    padding-bottom: 20px;\n  }\n"]))),e.MemberName=o.default.div(W||(W=i(["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.sizes.memberNameFontSize+"rem"},function(n){return n.theme.colors.plain}),e.MemberDesc=o.default.div(_||(_=i(["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.colors.primary}),e.ChartIcon=o.default.img(C||(C=i(["\n  width: ",";\n  height: ",";\n"],["\n  width: ",";\n  height: ",";\n"])),function(n){return n.theme.sizes.chart.icon.size+"rem"},function(n){return n.theme.sizes.chart.icon.size+"rem"}),e.SlideNavs=o.default.div(F||(F=i(["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n  @media (max-width: 768px) {\n    left: 15px;\n  }\n"],["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n  @media (max-width: 768px) {\n    left: 15px;\n  }\n"])),function(n){return n.theme.sizes.slideNav.left+"rem"});var d=o.default.div;e.SlideNav=d(I||(I=i(["\n  position:relative;\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n  &:after {\n    position: absolute;\n    display: block;\n    content: attr(title);\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    color: #fff;\n    padding: 3px 5px;\n    white-space: pre;\n    opacity: 0;\n    transition: opacity 0.4s;\n    cursor: ",";\n  }\n  &:hover:after{\n    opacity: 1\n  }\n"],["\n  position:relative;\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n  &:after {\n    position: absolute;\n    display: block;\n    content: attr(title);\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    color: #fff;\n    padding: 3px 5px;\n    white-space: pre;\n    opacity: 0;\n    transition: opacity 0.4s;\n    cursor: ",";\n  }\n  &:hover:after{\n    opacity: 1\n  }\n"])),function(n){return""+(n.active?n.theme.colors.highlight:"rgba(255, 255, 255, 0.8)")},function(n){return n.active?"default":"pointer"},function(n){return n.active?"default":"pointer"});var s=o.default.div,l=o.keyframes(M||(M=i(["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"],["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"])));e.Rect=s(S||(S=i(["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"],["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"])),function(n){return n.theme.sizes.rect.width+"px"},function(n){return 4*n.theme.sizes.rect.width+"px"},function(n){return n.theme.colors.highlight},function(n){return"rotate("+n.deg+"deg) "},function(n){return"center "+(+n.theme.sizes.rect.offset+100)+"%"},function(n){return l+" 0.5s forwards"},function(n){return 1+.1*(n.index||0)+"s"});o.default.div;var h,c,m,p,u,f,g,x,b,w,z,y,v,k,j,B,H,L,W,_,C,F,I,M,S,N,P,O,Y,E,D,T=o.default.div;e.HomepageWidget=T(N||(N=i(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"],["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"])),function(n){return 4*n.theme.sizes.rect.width*2.82+"px"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2+"px"},function(n){return n.primary?"rotate(60deg)":"translateX("+4*n.theme.sizes.rect.width*(2*+n.theme.sizes.rect.offset+100)/100+"px) rotate(-120deg) "},function(n){return"-"+n.theme.sizes.rect.width/2+"px"},function(n){return(4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2)/2+"px"}),e.HomepageWidgets=o.default.div(P||(P=i(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 100%;\n  transform: ",";\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n  @media (max-width: 1440px) {\n    transform: ",";\n  }\n  @media (max-width: 1024px) {\n    transform: ",";\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"],["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 100%;\n  transform: ",";\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n  @media (max-width: 1440px) {\n    transform: ",";\n  }\n  @media (max-width: 1024px) {\n    transform: ",";\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"])),function(n){return"translate(-"+(11*n.theme.sizes.navSpan+.5)+"rem, -310px) rotate(60deg)"},function(n){return 100*(100+n.theme.sizes.rect.offset)/(300+4*n.theme.sizes.rect.offset)+"% center"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset/100*4+3)+"px"},function(n){return 4*+n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+ +n.theme.sizes.rect.width/2+"px"},function(n){return"translate(-"+(11*n.theme.sizes.navSpan+.5)+"rem, -320px) scale(0.9) rotate(60deg)"},function(n){return"translate(-"+(11*n.theme.sizes.navSpan+.5)+"rem, -320px) scale(0.6) rotate(60deg)"}),e.Footer=o.default.div(O||(O=i(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  padding-top: ",";\n  padding-bottom: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  padding-top: ",";\n  padding-bottom: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n"])),function(n){return n.theme.sizes.footer.paddingTop+"rem"},function(n){return n.theme.sizes.footer.paddingBottom+"rem"},function(n){return n.theme.sizes.screen.blockMaxWidth+"rem"},function(n){return n.theme.sizes.screen.blockWidthPercent}),e.FooterLogo=o.default.img(Y||(Y=i(["\n  height: ",";\n"],["\n  height: ",";\n"])),function(n){return n.theme.sizes.footer.logo.height+"rem"}),e.FooterNavs=o.default.div(E||(E=i(["\n  padding: ",";\n  display: flex;\n  width: 80%;\n"],["\n  padding: ",";\n  display: flex;\n  width: 80%;\n"])),function(n){return n.theme.sizes.footer.logo.height/4+"rem 0"}),e.FooterNav=o.default.div(D||(D=i(["\n  font-size: ",";\n  flex: 1;\n  text-align: right;\n  & > a,\n  & > span {\n    position: relative;\n    color: ",";\n    cursor: pointer;\n    &:before {\n      position: absolute;\n      top: 50%;\n      right: 120%;\n      transform: translateY(-50%);\n      content: '';\n      display: block;\n      width: 9px;\n      height: 9px;\n      border-radius: 50%;\n      background-color: ",";\n    }\n  }\n"],["\n  font-size: ",";\n  flex: 1;\n  text-align: right;\n  & > a,\n  & > span {\n    position: relative;\n    color: ",";\n    cursor: pointer;\n    &:before {\n      position: absolute;\n      top: 50%;\n      right: 120%;\n      transform: translateY(-50%);\n      content: '';\n      display: block;\n      width: 9px;\n      height: 9px;\n      border-radius: 50%;\n      background-color: ",";\n    }\n  }\n"])),function(n){return n.theme.sizes.footer.nav.fontSize+"rem"},function(n){return n.theme.colors.plain},function(n){return n.theme.colors.highlight})},540:function(n,e,t){n.exports=t.p+"images/logoIcon-a5d7b96124ca671cdb0a47a8056a65d7.svg"},78:function(n,e,t){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),a=t(26),d=t(222),s=t(24),l=t(540),h=[{label:"whitepaper",path:"/white-paper"},{label:"FAQ",path:"/faq"},{label:"EN",path:"en"},{label:"CN",path:"zh"}],c=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.state={loaded:!1},e}return o(e,n),e.prototype.componentDidMount=function(){var n=this;setTimeout(function(){n.setState(function(){return{loaded:!0}})},0)},e.prototype.render=function(){var n=this.props;this.state.loaded;return a.createPortal(r.createElement(s.I18n,null,function(e,t){var i=t.i18n;return r.createElement(d.Footer,null,r.createElement(d.FooterLogo,{src:l,alt:"NervOS",onClick:function(){return"/"!==n.location.pathname&&n.history.push("/")}}),r.createElement(d.FooterNavs,null,h.map(function(n,t){return r.createElement(d.FooterNav,{key:n.path},n.path.startsWith("/")?r.createElement("a",{href:n.path},e(n.label)):r.createElement("span",{onClick:function(){return i.changeLanguage(n.path)}},e(n.label)))})))}),document.getElementById("footer"))},e}(r.Component);e.default=c}});