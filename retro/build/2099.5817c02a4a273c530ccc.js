(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2099],{52099:(e,t,s)=>{"use strict";s.r(t),s.d(t,{editorSyntaxStatus:()=>b,default:()=>v});var o,n=s(67599),r=s(6256),i=s(63804),c=s(86785),a=s(86942),d=s(2832),l=s(76150),m=s(57630),u=s(26260),g=s.n(u);!function(e){e.changeKeyMap="codemirror:change-keymap",e.changeTheme="codemirror:change-theme",e.changeMode="codemirror:change-mode",e.find="codemirror:find",e.goToLine="codemirror:go-to-line"}(o||(o={}));const h={id:"@jupyterlab/codemirror-extension:codemirror",provides:i.ICodeMirror,activate:function(e){return new k}},p={id:"@jupyterlab/codemirror-extension:services",provides:r.IEditorServices,activate:function(e){return g().prototype.save=()=>{e.commands.execute("docmanager:save")},i.editorServices}},y={id:"@jupyterlab/codemirror-extension:commands",requires:[c.IEditorTracker,d.ISettingRegistry,m.ITranslator,i.ICodeMirror],optional:[a.IMainMenu],activate:function(e,t,n,r,c,a){var d;const l=r.load("jupyterlab"),{commands:m,restored:u}=e;let{theme:g,keyMap:h,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k}=i.CodeMirrorEditor.defaultConfig;async function x(e){var t,o,n,r,i;if(h=e.get("keyMap").composite||h,"vim"===h&&await c.ensureVimKeymap(),g=e.get("theme").composite||g,"jupyter"!==g&&"default"!==g){const e="solarized light"===g||"solarized dark"===g?"solarized":g;await s(98908)(`./${e}.css`)}p=null!==(t=e.get("scrollPastEnd").composite)&&void 0!==t?t:p,y=null!==(o=e.get("styleActiveLine").composite)&&void 0!==o?o:y,b=null!==(n=e.get("styleSelectedText").composite)&&void 0!==n?n:b,v=null!==(r=e.get("selectionPointer").composite)&&void 0!==r?r:v,k=null!==(i=e.get("lineWiseCopyCut").composite)&&void 0!==i?i:k}function M(){const e={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.forEach((t=>{t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(e)}))}function C(){return null!==t.currentWidget&&t.currentWidget===e.shell.currentWidget}if(Promise.all([n.load(f),u]).then((async([e])=>{await x(e),M(),e.changed.connect((async()=>{await x(e),M()}))})).catch((e=>{console.error(e.message),M()})),t.widgetAdded.connect(((e,t)=>{const s={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(s)})),m.addCommand(o.changeTheme,{label:e=>{var t;return"default"===e.theme?l.__("codemirror"):l.__(null!==(t=e.theme)&&void 0!==t?t:g)},execute:e=>{var t;const s=g=null!==(t=e.theme)&&void 0!==t?t:g;return n.set(f,"theme",s).catch((e=>{console.error(`Failed to set ${f}:theme - ${e.message}`)}))},isToggled:e=>e.theme===g}),m.addCommand(o.changeKeyMap,{label:e=>{var t;const s=null!==(t=e.keyMap)&&void 0!==t?t:h;return"sublime"===s?l.__("Sublime Text"):l.__(s)},execute:e=>{var t;const s=h=null!==(t=e.keyMap)&&void 0!==t?t:h;return n.set(f,"keyMap",s).catch((e=>{console.error(`Failed to set ${f}:keyMap - ${e.message}`)}))},isToggled:e=>e.keyMap===h}),m.addCommand(o.find,{label:l.__("Find…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("find")},isEnabled:C}),m.addCommand(o.goToLine,{label:l.__("Go to Line…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("jumpToLine")},isEnabled:C}),m.addCommand(o.changeMode,{label:e=>e.name,execute:e=>{const s=e.name,o=t.currentWidget;if(s&&o){const e=i.Mode.findByName(s);e&&(o.content.model.mimeType=e.mime)}},isEnabled:C,isToggled:e=>{const s=t.currentWidget;if(!s)return!1;const o=s.content.model.mimeType,n=i.Mode.findByMIME(o),r=n&&n.name;return e.name===r}}),a){const e=null===(d=a.viewMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-view-codemirror-theme"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===d?void 0:d.submenu;e&&i.Mode.getModeInfo().sort(((e,t)=>{const s=e.name||"",o=t.name||"";return s.localeCompare(o)})).forEach((t=>{0!==t.mode.indexOf("brainf")&&e.addItem({command:o.changeMode,args:Object.assign({},t)})})),a.editMenu.goToLiners.add({tracker:t,goToLine:e=>{e.content.editor.execCommand("jumpToLine")}})}},autoStart:!0},b={id:"@jupyterlab/codemirror-extension:editor-syntax-status",autoStart:!0,requires:[c.IEditorTracker,n.ILabShell,m.ITranslator],optional:[l.IStatusBar],activate:(e,t,s,o,n)=>{if(!n)return;const r=new i.EditorSyntaxStatus({commands:e.commands,translator:o});s.currentChanged.connect((()=>{const e=s.currentWidget;e&&t.has(e)&&r.model&&(r.model.editor=e.content.editor)})),n.registerStatusItem("@jupyterlab/codemirror-extension:editor-syntax-status",{item:r,align:"left",rank:0,isActive:()=>!!s.currentWidget&&!!t.currentWidget&&s.currentWidget===t.currentWidget})}},v=[y,p,b,h],f=y.id;class k{get CodeMirror(){return g()}async ensureVimKeymap(){"Vim"in g()||await Promise.all([s.e(3326),s.e(8133),s.e(832)]).then(s.t.bind(s,50832,23))}}},98908:(e,t,s)=>{var o={"./3024-day.css":[5210,5210],"./3024-night.css":[37123,7123],"./abbott.css":[54896,4896],"./abcdef.css":[55169,5169],"./ambiance-mobile.css":[17677,7677],"./ambiance.css":[22607,2607],"./ayu-dark.css":[29335,9335],"./ayu-mirage.css":[59304,9304],"./base16-dark.css":[95273,5273],"./base16-light.css":[19554,9554],"./bespin.css":[49078,9078],"./blackboard.css":[75086,5086],"./cobalt.css":[66866,6866],"./colorforth.css":[27497,7497],"./darcula.css":[23989,3989],"./dracula.css":[86764,6764],"./duotone-dark.css":[41626,1626],"./duotone-light.css":[41831,1831],"./eclipse.css":[14606,4606],"./elegant.css":[33993,3993],"./erlang-dark.css":[76649,6649],"./gruvbox-dark.css":[25124,5124],"./hopscotch.css":[48797,8797],"./icecoder.css":[66074,6074],"./idea.css":[56787,6787],"./isotope.css":[96502,6502],"./lesser-dark.css":[30406,406],"./liquibyte.css":[30111,111],"./lucario.css":[18587,8587],"./material-darker.css":[74855,4855],"./material-ocean.css":[50257,257],"./material-palenight.css":[56756,6756],"./material.css":[10382,382],"./mbo.css":[50451,451],"./mdn-like.css":[86472,6472],"./midnight.css":[53217,3217],"./monokai.css":[98078,8078],"./moxer.css":[55185,5185],"./neat.css":[44911,4911],"./neo.css":[76092,6092],"./night.css":[5792,5792],"./nord.css":[86322,6322],"./oceanic-next.css":[93515,3515],"./panda-syntax.css":[31609,1609],"./paraiso-dark.css":[1361,1361],"./paraiso-light.css":[98142,8142],"./pastel-on-dark.css":[90141,141],"./railscasts.css":[59854,9854],"./rubyblue.css":[96724,6724],"./seti.css":[12763,2763],"./shadowfox.css":[53569,3569],"./solarized.css":[29496,9496],"./ssms.css":[61307,1307],"./the-matrix.css":[18035,8035],"./tomorrow-night-bright.css":[58585,8585],"./tomorrow-night-eighties.css":[99656,9656],"./ttcn.css":[42336,2336],"./twilight.css":[36946,6946],"./vibrant-ink.css":[96089,6089],"./xq-dark.css":[8464,8464],"./xq-light.css":[41885,1885],"./yeti.css":[22980,2980],"./yonce.css":[6570,6570],"./zenburn.css":[39439,9439]};function n(e){if(!s.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return s.e(t[1]).then((()=>s.t(n,23)))}n.keys=()=>Object.keys(o),n.id=98908,e.exports=n}}]);
//# sourceMappingURL=2099.5817c02a4a273c530ccc.js.map