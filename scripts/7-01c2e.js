webpackJsonp([7],{218:function(n,t,e){"use strict";var i=this&&this.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n};Object.defineProperty(t,"__esModule",{value:!0});var r=e(22),o=r.default.div;t.FadeInDiv=o(c||(c=i(["\n  opacity: ",";\n  transition: opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n"],["\n  opacity: ",";\n  transition: opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n"])),function(n){return""+(n.fadeIn?1:0)},function(n){return.05*(n.index||0)+"s"});var a=r.default.div;t.VerticalSlideInDiv=a(h||(h=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"])),function(n){return"translateY("+(n.slideIn?"0":n.fromTop?"-100vh":"100vh")+")"},function(n){return""+(n.slideIn?1:0)},function(n){return.05*(n.index||0)+"s"});var l=r.default.div;t.HorizontalSlideInDiv=l(u||(u=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  // display: inherit;\n"])),function(n){return"translateX("+(n.slideIn?"0":n.fromLeft?"-100vh":"100vh")+")"},function(n){return""+(n.slideIn?1:0)},function(n){return.05*(n.index||0)+"s"});var s=r.default.div;t.VerticalSlideOutDiv=s(p||(p=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"])),function(n){return"translateY("+(n.slideOut?"100vh":"0")+")"},function(n){return""+(n.slideOut,1)},function(n){return.05*(n.index||0)+"s"});var d=r.default.div;t.HorizontalSlideOutDiv=d(m||(m=i(["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"],["\n  transform: ",";\n  opacity: ",";\n  transition: transform 1.2s, opacity 0.8s;\n  transition-delay: ",";\n  height: 100%;\n  display: inherit;\n"])),function(n){return"translateY("+(n.slideOut?"100vh":"0")+")"},function(n){return""+(n.slideOut,1)},function(n){return.05*(n.index||0)+"s"}),t.dissolveIn=r.keyframes(f||(f=i(["\n  from {\n    filter: blur(100px);\n    letter-spacing: 4px;\n  }\n  to {\n    filter: blur(0px);\n    letter-spacing:3px;\n  }\n"],["\n  from {\n    filter: blur(100px);\n    letter-spacing: 4px;\n  }\n  to {\n    filter: blur(0px);\n    letter-spacing:3px;\n  }\n"])));var c,h,u,p,m,f,x,g=r.default.div;t.DissolveInDiv=g(x||(x=i(["\n  height: 100%;\n  filter: blur(100px);\n  letter-spacing: 4px;\n  animation: ","\n"],["\n  height: 100%;\n  filter: blur(100px);\n  letter-spacing: 4px;\n  animation: ","\n"])),function(n){return t.dissolveIn+" "+(n.duration||2)+"s ease-in "+.2*(n.delay||0)+"s forwards"}),t.SlideIn={vertical:t.VerticalSlideInDiv,horizontal:t.HorizontalSlideInDiv},t.SlideOut={vertical:t.VerticalSlideOutDiv,horizontal:t.HorizontalSlideOutDiv},t.Fade={in:t.FadeInDiv},t.Dissolve={in:t.DissolveInDiv}},219:function(n,t,e){"use strict";var i=this&&this.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n};Object.defineProperty(t,"__esModule",{value:!0});var r=e(22),o=e(24);r.injectGlobal(h||(h=i(["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  header {\n    padding-top: ",";\n    @media (max-width: 1280px) {\n      padding-top: 1rem;\n    }\n    @media (max-width: 768px) {\n      padding-top: 0;\n    }\n  }\n"],["\n  html, body {\n    background-color: ",";\n    font-size: ",";\n\n    @media (max-width: 1500px) {\n      font-size: 14px;\n    }\n    @media (max-width: 1200px) {\n      font-size: 12px;\n    }\n    @media (max-width: 992px) {\n      font-size: 10px;\n    }\n    @media (max-width: 768px) {\n    }\n    *::selection{\n      background-color: ",";\n    }\n  }\n  header {\n    padding-top: ",";\n    @media (max-width: 1280px) {\n      padding-top: 1rem;\n    }\n    @media (max-width: 768px) {\n      padding-top: 0;\n    }\n  }\n"])),o.default.colors.background,o.default.sizes.root,o.default.colors.highlight,o.default.sizes.header.paddingTop+"rem"),t.Header=r.default.div(u||(u=i(["\n  position: relative;\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    max-width: auto;\n    width: 100vw;\n  }\n"],["\n  position: relative;\n  height: ",";\n  line-height: ",";\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    max-width: auto;\n    width: 100vw;\n  }\n"])),function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.header.height+"rem"},function(n){return n.theme.sizes.screen.blockMaxWidth+"rem"},function(n){return n.theme.sizes.screen.blockWidthPercent}),t.Logo=r.default.img(p||(p=i(["\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n  @media (max-width: 768px) {\n    height: 50%;\n    transform: scale(0.8);\n  }\n"],["\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n  @media (max-width: 768px) {\n    height: 50%;\n    transform: scale(0.8);\n  }\n"]))),t.Navs=r.default.ul(m||(m=i(["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  z-index: 1;\n  @media (max-width: 768px) {\n    width: 100vw;\n    line-height: 1.4;\n    flex: 1;\n    display: flex;\n    justify-content: space-around;\n  }\n"],["\n  height: 100%;\n  color: ",";\n  list-style: none;\n  float: right;\n  z-index: 1;\n  @media (max-width: 768px) {\n    width: 100vw;\n    line-height: 1.4;\n    flex: 1;\n    display: flex;\n    justify-content: space-around;\n  }\n"])),function(n){return n.theme.colors.plain}),t.NavItem=r.default.li(f||(f=i(["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & a,\n  & span {\n    position: relative;\n    cursor: pointer;\n    text-transform: uppercase;\n  }\n  @media (max-width: 768px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"],["\n  float: left;\n  margin-left: ",";\n  font-size: ",";\n  & a,\n  & span {\n    position: relative;\n    cursor: pointer;\n    text-transform: uppercase;\n  }\n  @media (max-width: 768px) {\n    margin-left: 1.125rem;\n  }\n  @media (max-width: 600px) {\n    margin: 0;\n    width: 25vw;\n    text-align: center;\n  }\n"])),function(n){return n.theme.sizes.navSpan+"rem"},function(n){return n.theme.sizes.navItemHeight}),t.ScreenDiv=r.default.div(x||(x=i(["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"],["\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"])),function(n){return n.theme.colors.background}),t.CenterBlock=r.default.div(g||(g=i(["\n  position: relative;\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"],["\n  position: relative;\n  display: flex;\n  max-width: ",";\n  width: ",";\n  margin: 0 auto;\n  margin-top: ",";\n"])),function(n){return n.theme.sizes.centerBlockMaxWidth},function(n){return n.theme.sizes.centerBlockWidth},function(n){return n.theme.sizes.pageBlockMarginTop}),t.CenterBlockTitles=r.default.div(b||(b=i(["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"],["\n  display: inline-block;\n  width: ",";\n  font-size: ",";\n"])),function(n){return n.theme.sizes.centerBlockTitleWidth},function(n){return n.theme.sizes.blockTitleHeight}),t.CenterBlockTitle=r.default.h5(y||(y=i(["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"],["\n  font-size: ",";\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  margin-bottom: ",";\n  cursor: pointer;\n  font-weight: 100;\n"])),function(n){return n.theme.sizes.blockTitleHeight},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.centerBlockTitleVSpan}),t.CenterBlockIndex=r.default.span(w||(w=i(["\n  font-weight: inherit;\n  color: ",";\n"],["\n  font-weight: inherit;\n  color: ",";\n"])),function(n){return n.theme.colors.primary}),t.CenterBlockContent=r.default.div(v||(v=i(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));var a=r.default.div;t.ColorizedDiv=a(z||(z=i(["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"],["\n  position: relative;\n  border-left: ",";\n  padding-left: ",";\n  &:before{\n    display:block;\n    content: '';\n    width: ",";\n    height: ",";\n    position: absolute;\n    top: 0;\n    left: ",";\n    background-color: ",";\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return n.chart?n.theme.sizes.chart.title.paddingLeft+n.theme.sizes.colorizedBlock.color.width+"rem":n.theme.sizes.colorizedBlock.paddingLeft+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.width+"rem"},function(n){return n.theme.sizes.colorizedBlock.color.height*(n.colorBlockHeight||1)+"rem"},function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.primary?n.theme.colors.primary:n.theme.colors.highlight}),t.RippleInput=r.default.input(k||(k=i(["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"],["\n  font-size: ",";\n  line-height: 1.6;\n  background-color: transparent;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 0 3px, 100% 3px;\n  background-position: center bottom;\n  transition: background 0.3s;\n  border: none;\n  color: ",";\n  &:focus {\n    background-size: 100% 3px, 100% 3px;\n  }\n  &:placeholder {\n    color: ",";\n  }\n"])),function(n){return n.theme.sizes.inputFontSize},function(n){return"linear-gradient(to top, "+n.theme.colors.primary+", "+n.theme.colors.primary+"), linear-gradient(to top, "+n.theme.colors.plain+", "+n.theme.colors.plain+")"},function(n){return n.theme.colors.plain},function(n){return n.theme.colors.plain}),t.HighlightButton=r.default.button(_||(_=i(["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"],["\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius; 2px;\n  font-size: ",";\n  width: ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n"])),function(n){return n.theme.colors.plain},function(n){return n.theme.colors.highlight},function(n){return n.theme.sizes.subscribeBtnFontSize},function(n){return n.theme.sizes.highlightBtnWidth},function(n){return n.theme.sizes.highlightBtnHeight},function(n){return n.theme.sizes.highlightBtnHeight});var l=r.default.h1;t.ColorizedTitle=l(B||(B=i(["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  font-weight: 900;\n"],["\n  line-height: 0.8;\n  font-size: ",";\n  color: ",";\n  \n  border-left-width: ",";\n  border-left-style: solid;\n  border-left-color: ",";\n  margin: 0;\n  margin-left: ",";\n  padding-left: ",";\n  font-weight: 900;\n"])),function(n){return""+(n.h1?n.theme.sizes.primaryTitleFontSize:n.theme.sizes.secondaryTitleFontSize)},function(n){return n.theme.colors.plain},function(n){return n.theme.sizes.titleColorBlockWidth},function(n){return""+(n.primary?n.theme.colors.primary:n.theme.colors.highlight)},function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return""+n.theme.sizes.titleColorBlockRightSpan}),t.SubscribeFormLine=r.default.div(I||(I=i(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"],["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: ",";\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"])),function(n){return n.theme.sizes.subscribeFormLineHeight},function(n){return n.theme.sizes.subscribeFormLineWidth}),t.SubscribeButtonContainer=r.default.div(j||(j=i(["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n  @media (max-width: 600px) {\n    position: relative;\n    left: 0;\n    bottom: 0;\n  }\n"],["\n  position: absolute;\n  bottom: 0;\n  left: 120%;\n  @media (max-width: 600px) {\n    position: relative;\n    left: 0;\n    bottom: 0;\n  }\n"]))),t.HistoryCol=r.default.div(H||(H=i(["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n  @media (max-width: 750px) {\n    display: block;\n    margin-bottom: 100px;\n    width: 100%;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  border-right: ",";\n  border-bottom: ",";\n  padding-top: ",";\n  padding-left: ",";\n  &:after {\n    box-sizing: border-box;\n    z-index: 2;\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border: ",";\n    border-radius: 50%;\n    bottom: -2.5px;\n    right: -1px;\n    transform: translate(50%, 50%);\n    background-color: ",";\n    box-shadow: ",";\n  }\n  @media (max-width: 750px) {\n    display: block;\n    margin-bottom: 100px;\n    width: 100%;\n  }\n"])),function(n){return n.theme.sizes.dashLineWidth+"rem dotted "+n.theme.colors.primary},function(n){return n.theme.sizes.historyColBorderBottomWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.sizes.HistoryColPaddingTop},function(n){return n.theme.sizes.HistoryColPaddingLeft},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleDiameter},function(n){return n.theme.sizes.historyCircleBandWidth+" solid "+n.theme.colors.primary},function(n){return n.theme.colors.background},function(n){return"0 0 0 "+n.theme.sizes.historyCircleBandWidth+" "+n.theme.colors.background}),t.HistoryYearLabel=r.default.span(O||(O=i(["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 100%;\n  right: ",";\n  padding-bottom: ",";\n  color: ",";\n"])),function(n){return"-"+n.theme.sizes.dashLineWidth+"rem"},function(n){return n.theme.sizes.HistoryYearLabelPaddingBottom},function(n){return n.theme.colors.plain}),t.HistoryItem=r.default.p(S||(S=i(["\n  margin: 1rem 0;\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"],["\n  margin: 1rem 0;\n  position: relative;\n  padding: ",";\n  text-align: justify;\n  text-align-last: left;\n  font-size: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    top: 0.5rem;\n    left: -5px;\n    box-sizing: border-box;\n    transform: translateY(-50%);\n  }\n"])),function(n){return"0 "+n.theme.sizes.HistoryItemHPadding},function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.sizes.historyItemIconDiameter},function(n){return n.theme.colors.assist}),t.Members=r.default.div(C||(C=i(["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4vh 5%;\n  @media (max-width: 992px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4vh 5%;\n  @media (max-width: 992px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),t.MemberBlock=r.default.div(D||(D=i(["\n  // height: ",";\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  @media (max-width: 992px) {\n    flex-direction: row;\n  }\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n  @media (max-width: 750px) {\n    height: auto;\n    text-align: center;\n  }\n"],["\n  // height: ",";\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  @media (max-width: 992px) {\n    flex-direction: row;\n  }\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n  @media (max-width: 750px) {\n    height: auto;\n    text-align: center;\n  }\n"])),function(n){return n.theme.sizes.memberBlockHeight}),t.MemberAvatar=r.default.img(W||(W=i(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  @media (max-width: 750px) {\n    float: left;\n  }\n"],["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  @media (max-width: 750px) {\n    float: left;\n  }\n"])),function(n){return n.theme.sizes.memberBlockHeight},function(n){return n.theme.sizes.memberBlockHeight}),t.MemberInfo=r.default.div(M||(M=i(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  text-align: justify;\n  text-align-last: left;\n  @media (max-width: 992px) {\n    padding-left: 3.5rem;\n  }\n  @media (max-width: 750px) {\n    padding-left: 0;\n    padding-bottom: 20px;\n  }\n"],["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  text-align: justify;\n  text-align-last: left;\n  @media (max-width: 992px) {\n    padding-left: 3.5rem;\n  }\n  @media (max-width: 750px) {\n    padding-left: 0;\n    padding-bottom: 20px;\n  }\n"]))),t.MemberName=r.default.div(P||(P=i(["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  font-size: ",";\n  font-weight: 100;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.sizes.memberNameFontSize},function(n){return n.theme.colors.plain}),t.MemberDesc=r.default.div(E||(E=i(["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"],["\n  flex: 1;\n  color: ",";\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),function(n){return n.theme.colors.primary}),t.ChartIcon=r.default.img(L||(L=i(["\n  width: ",";\n  height: ",";\n"],["\n  width: ",";\n  height: ",";\n"])),function(n){return n.theme.sizes.chart.icon.size+"rem"},function(n){return n.theme.sizes.chart.icon.size+"rem"}),t.SlideNavs=r.default.div(T||(T=i(["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n  @media (max-width: 768px) {\n    left: 15px;\n  }\n"],["\n  position: fixed;\n  top: 50vh;\n  transform: translateY(-50%);\n  left: ",";\n  @media (max-width: 768px) {\n    left: 15px;\n  }\n"])),function(n){return n.theme.sizes.slideNav.left+"rem"});var s=r.default.div;t.SlideNav=s(F||(F=i(["\n  position:relative;\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n  &:after {\n    position: absolute;\n    display: block;\n    content: attr(title);\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    color: #fff;\n    padding: 3px 5px;\n    white-space: pre;\n    opacity: 0;\n    transition: opacity 0.4s;\n    cursor: ",";\n  }\n  &:hover:after{\n    opacity: 1\n  }\n"],["\n  position:relative;\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  margin: 10px 0;\n  cursor: ",";\n  &:after {\n    position: absolute;\n    display: block;\n    content: attr(title);\n    top: 50%;\n    left: 100%;\n    transform: translateY(-50%);\n    color: #fff;\n    padding: 3px 5px;\n    white-space: pre;\n    opacity: 0;\n    transition: opacity 0.4s;\n    cursor: ",";\n  }\n  &:hover:after{\n    opacity: 1\n  }\n"])),function(n){return""+(n.active?n.theme.colors.highlight:"rgba(255, 255, 255, 0.8)")},function(n){return n.active?"default":"pointer"},function(n){return n.active?"default":"pointer"});var d=r.default.div,c=r.keyframes(N||(N=i(["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"],["{\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n"])));t.Rect=d(Y||(Y=i(["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"],["\n  position: absolute;\n  top:0;\n  left:0;\n  display: block;\n  width: ",";\n  height: ",";\n  opacity: 0;\n  background-color: ",";\n  transform: ",";\n  transform-origin: ",";\n    animation:",";\n    animation-delay: ","\n"])),function(n){return n.theme.sizes.rect.width+"px"},function(n){return 4*n.theme.sizes.rect.width+"px"},function(n){return n.theme.colors.highlight},function(n){return"rotate("+n.deg+"deg) "},function(n){return"center "+(+n.theme.sizes.rect.offset+100)+"%"},function(n){return c+" 0.5s forwards"},function(n){return 1+.1*(n.index||0)+"s"});r.default.div;var h,u,p,m,f,x,g,b,y,w,v,z,k,_,B,I,j,H,O,S,C,D,W,M,P,E,L,T,F,N,Y,V,q,A=r.default.div;t.HomepageWidget=A(V||(V=i(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"],["\n  position: absolute;\n  width: ",";\n  height: ",";\n  transform-origin: center center;\n  transform: ",";\n  &>div{\n    top: ",";\n    left: ",";\n  }\n"])),function(n){return 4*n.theme.sizes.rect.width*2.82+"px"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2+"px"},function(n){return n.primary?"rotate(60deg)":"translateX("+4*n.theme.sizes.rect.width*(2*+n.theme.sizes.rect.offset+100)/100+"px) rotate(-120deg) "},function(n){return"-"+n.theme.sizes.rect.width/2+"px"},function(n){return(4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+n.theme.sizes.rect.width/2)/2+"px"}),t.HomepageWidgets=r.default.div(q||(q=i(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 100%;\n  transform: ",";\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n  @media (max-width: 1920px) {\n    transform: translate(40.3vw, -210px) rotate(60deg);\n  }\n  @media (max-width: 1440px) {\n    transform: translate(30vw, -230px) scale(0.9) rotate(60deg);\n  }\n  @media (max-width: 1280px) {\n    transform: translate(24vw, -310px) scale(0.9) rotate(60deg);\n  }\n  @media (max-width: 1024px) {\n    transform: translate(21vw, -323px) scale(0.7) rotate(60deg);\n  }\n  @media (max-width: 992px) {\n    transform: translate(12.3vw, -260px) rotate(60deg) scale(0.7);\n  }\n  @media (max-width: 768px) {\n    transform: translate(12.3vw, -260px) rotate(60deg) scale(0.7);\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"],["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 100%;\n  transform: ",";\n  transform-origin: ",";\n  width: ",";\n  height: ",";\n  @media (max-width: 1920px) {\n    transform: translate(40.3vw, -210px) rotate(60deg);\n  }\n  @media (max-width: 1440px) {\n    transform: translate(30vw, -230px) scale(0.9) rotate(60deg);\n  }\n  @media (max-width: 1280px) {\n    transform: translate(24vw, -310px) scale(0.9) rotate(60deg);\n  }\n  @media (max-width: 1024px) {\n    transform: translate(21vw, -323px) scale(0.7) rotate(60deg);\n  }\n  @media (max-width: 992px) {\n    transform: translate(12.3vw, -260px) rotate(60deg) scale(0.7);\n  }\n  @media (max-width: 768px) {\n    transform: translate(12.3vw, -260px) rotate(60deg) scale(0.7);\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"])),function(n){return"translate(-"+11*n.theme.sizes.navSpan+"rem, -310px) rotate(60deg)"},function(n){return 100*(100+n.theme.sizes.rect.offset)/(300+4*n.theme.sizes.rect.offset)+"% center"},function(n){return 4*n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset/100*4+3)+"px"},function(n){return 4*+n.theme.sizes.rect.width*(+n.theme.sizes.rect.offset+100)/100*Math.sqrt(3)+ +n.theme.sizes.rect.width/2+"px"})},536:function(n,t,e){"use strict";var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},function(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(219),l=e(537),s=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={loaded:!1},t}return r(t,n),t.prototype.componentDidMount=function(){var n=this;setTimeout(function(){n.setState({loaded:!0})},0)},t.prototype.componentWillUnmount=function(){this.setState({loaded:!1})},t.prototype.render=function(){return o.createElement(a.HomepageWidgets,null,o.createElement(a.HomepageWidget,{primary:!0},o.createElement(l.default,null)),o.createElement(a.HomepageWidget,null,o.createElement(l.default,null)))},t}(o.Component);t.default=s},537:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),r=e(219),o=[0,60,120,180,240,300];t.default=function(n){return i.createElement(i.Fragment,null,o.map(function(n,t){return i.createElement(r.Rect,{index:t,deg:n+30,key:n})}))}},538:function(n,t,e){n.exports=e.p+"images/nerveos-3181f7e4b275977fca1ee0690dc08f93.svg"},75:function(n,t,e){"use strict";var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},function(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(25),l=e(23),s=e(219),d=e(218),c=e(536),h=e(538),u=[{label:"whitepaper",path:"/white-paper"},{label:"FAQ",path:"/faq"},{label:"EN",path:"en"},{label:"CN",path:"zh"}],p=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={loaded:!1},t}return r(t,n),t.prototype.componentDidMount=function(){var n=this;setTimeout(function(){n.setState(function(){return{loaded:!0}})},0)},t.prototype.render=function(){var n=this.props,t=this.state.loaded;return a.createPortal(o.createElement(l.I18n,null,function(e,i){var r=i.i18n;return o.createElement(s.Header,null,o.createElement(c.default,null),o.createElement(s.Logo,{src:h,alt:"NervOS",onClick:function(){return"/"!==n.location.pathname&&n.history.push("/")}}),o.createElement(s.Navs,null,u.map(function(n,i){return o.createElement(s.NavItem,{key:n.path},o.createElement(d.SlideIn.horizontal,{slideIn:t,index:i},n.path.startsWith("/")?o.createElement("a",{href:n.path},e(n.label)):o.createElement("span",{onClick:function(){return r.changeLanguage(n.path)}},e(n.label))))})))}),document.getElementById("header"))},t}(o.Component);t.default=p}});