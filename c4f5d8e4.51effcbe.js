(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{99:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(130),l=a.n(n),i=a(121),s=a(114),c=a(22),m=a(115),u=a(118),d=a(100),g=a.n(d),p=[{title:"Less Boilerplate",imageUrl:"img/boilerplate.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is designed from ground up to let you focus on what matters -- your model -- by providing boilerplate code for distributed training, common datasets and state-of-the-art pretrained baselines out-of-the-box.")},{title:"Powered by PyTorch",imageUrl:"img/pytorch_logo.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is built on top of PyTorch that brings all of its power in your hands. MMF is not strongly opinionated. So you can use all of your PyTorch knowledge here.")},{title:"Modular and Composable",imageUrl:"img/puzzle_pieces.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is created to be easily extensible and composable. Through our modular design, you can use specific components from MMF that you care about. Our configuration system allows MMF to easily adapt to your needs.")}];function b(){var e=Object(u.a)().isDarkTheme,t=Object(m.a)("img/logo_white_text.svg"),a=Object(m.a)("img/logo.svg");return o.a.createElement("img",{className:l()(g.a.heroImg),src:e?t:a,alt:"MMF Logo"})}function h(e){var t=e.imageUrl,a=e.title,r=e.description,n=Object(u.a)().isDarkTheme,i=t.split(".")[0],s=Object(m.a)(i+"_white.svg"),c=Object(m.a)(t),d=n?s:c;return o.a.createElement("div",{className:l()("col col--4",g.a.feature,"text--center")},d&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:g.a.featureImage,src:d,alt:a})),o.a.createElement("h3",null,a),o.a.createElement("p",null,r))}t.default=function(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(i.a,{title:"",description:"MMF is a modular framework powered by PyTorch for multimodal vision and language research from Facebook AI Research"},o.a.createElement("header",{className:l()("hero hero--primary",g.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"hero__title"},o.a.createElement(b,null)),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:g.a.buttons},o.a.createElement(s.a,{className:l()("button button--primary button--lg",g.a.getStarted),to:Object(m.a)("docs")},"Get Started")))),o.a.createElement("main",null,p&&p.length&&o.a.createElement("section",{className:g.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},p.map((function(e,t){var a=e.title,r=e.imageUrl,n=e.description;return o.a.createElement(h,{key:"feature"+t.toString(),title:a,imageUrl:r,description:n})})))))))}}}]);