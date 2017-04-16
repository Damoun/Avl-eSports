import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#121212"
    },
    "site-drop-shadow canvas canvas-mod": {
        "boxShadow": "0 0 40px rgba(0,0,0,.05)"
    },
    "canvas-mod": {
        "width": 1400,
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "backgroundColor": "#00070e",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "canvas": {
        "width": 1400,
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "backgroundColor": "#00070e",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "header": {
        "backgroundColor": "#0f0f0f",
        "marginTop": 9,
        "width": "100%",
        "height": 67
    },
    "navbar-red a": {
        "color": "red"
    },
    "navbar-blue a": {
        "color": "blue"
    },
    "navbar-container": {
        "position": "relative",
        "width": "100%",
        "maxWidth": 1177,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "boxSizing": "border-box"
    },
    "logo img": {
        "position": "absolute",
        "maxWidth": 54.063,
        "maxHeight": 8.063,
        "marginTop": 27
    },
    "main-banner": {
        "backgroundImage": "url(../images/bgimage.jpg)",
        "zIndex": -99999,
        "width": "100%",
        "height": 680
    },
    "header nav": {
        "float": "left",
        "marginLeft": 8
    },
    "menu_bar": {
        "display": "none"
    },
    "header ul": {
        "overflow": "hidden",
        "listStyle": "none"
    },
    "rightirons": {
        "float": "right",
        "paddingLeft": 15,
        "fontSize": "15pt"
    },
    "header > li": {
        "float": "left",
        "display": "inline"
    },
    "header nav > ul > li": {
        "float": "left"
    },
    "header nav ul li a": {
        "color": "#393939",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "font": "1.113em \"Roboto\"",
        "textTransform": "uppercase",
        "textDecoration": "none",
        "display": "block"
    },
    "header a:hover": {
        "textDecoration": "none"
    },
    "header nav aactive": {
        "color": "#ffffff"
    },
    "header nav a:hover": {
        "color": "#ffffff"
    },
    "li": {
        "listStyle": "none"
    },
    "mainreadmore": {
        "backgroundColor": "#198fd8",
        "textAlign": "center",
        "border": "1px solid #198fd8",
        "fontSize": 1,
        "color": "white",
        "width": 195,
        "height": 52
    },
    "banner-text h1": {
        "marginBottom": 0,
        "paddingTop": 3,
        "textAlign": "center",
        "textTransform": "uppercase",
        "color": "#fff",
        "font": "800 5em \"Roboto\"",
        "letterSpacing": 1
    },
    "banner-text p": {
        "marginTop": 0,
        "textAlign": "center",
        "textTransform": "uppercase",
        "font": "100 11pt \"Roboto\"",
        "letterSpacing": 1,
        "color": "#fff"
    },
    "news-section inner": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "first-images": {
        "width": "75%",
        "height": "100%"
    },
    "news-wapper item": {
        "float": "left",
        "width": "29%",
        "position": "relative",
        "paddingRight": 0
    },
    "news-page item": {
        "float": "left",
        "width": "37%",
        "position": "relative",
        "paddingRight": 0
    },
    "news-section-page news-content-one": {
        "position": "absolute",
        "bottom": 134,
        "left": 0,
        "right": 0,
        "zIndex": 999,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "news-section-page news-content-two": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "zIndex": 999,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "news-section-page inner": {
        "marginTop": 5,
        "marginRight": "auto",
        "marginBottom": 5,
        "marginLeft": "auto",
        "boxSizing": "border-box",
        "width": "141%"
    },
    "news-section news-content-one": {
        "position": "absolute",
        "bottom": 134,
        "left": 0,
        "right": 0,
        "zIndex": 999,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "news-content-one h2": {
        "color": "white",
        "width": "82%",
        "marginBottom": 2,
        "textTransform": "uppercase",
        "textAlign": "left",
        "font": "400 25pt \"Roboto\"",
        "letterSpacing": 1
    },
    "news-content-one p": {
        "textAlign": "left",
        "textTransform": "uppercase",
        "color": "#198fd8",
        "font": "500 11pt \"Roboto\"",
        "letterSpacing": 1
    },
    "news-section news-content-two": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "right": 0,
        "zIndex": 999,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "news-content-two h2": {
        "color": "white",
        "width": "82%",
        "marginBottom": 2,
        "textTransform": "uppercase",
        "textAlign": "left",
        "font": "400 15pt \"Roboto\"",
        "letterSpacing": 1
    },
    "news-content-two p": {
        "textAlign": "left",
        "textTransform": "uppercase",
        "color": "#198fd8",
        "font": "500 11pt \"Roboto\"",
        "letterSpacing": 1
    },
    "videowrapper": {
        "display": "inline-block",
        "top": 0,
        "left": 0,
        "maxWidth": "100%",
        "maxHeight": "100%"
    },
    "tweetwrapper": {
        "display": "inline-block",
        "paddingLeft": 5.1,
        "width": "100%",
        "maxWidth": 19.5
    },
    "video_title": {
        "color": "white",
        "textTransform": "uppercase",
        "font": "100 16pt \"Roboto\"",
        "letterSpacing": 1
    },
    "avl_partners": {
        "marginBottom": 0,
        "marginTop": 3,
        "backgroundColor": "#000",
        "maxWidth": "100%",
        "maxHeight": 15
    },
    "partnerlogo": {
        "display": "inline-block",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12
    },
    "footer": {
        "backgroundColor": "#000",
        "width": "100%",
        "height": 3
    },
    "footer p": {
        "float": "right",
        "font": "100 9pt \"Roboto\""
    },
    "team-banner": {
        "backgroundImage": "url(../images/team-banner.jpg)",
        "zIndex": -99999,
        "width": "100%",
        "height": 480
    },
    "team-quton": {
        "paddingTop": 193
    },
    "team-quton h1": {
        "color": "white",
        "textTransform": "uppercase",
        "textAlign": "left",
        "marginBottom": 1,
        "font": "500 25pt \"Roboto\"",
        "letterSpacing": 1
    },
    "team-quton p": {
        "color": "white",
        "textTransform": "uppercase",
        "textAlign": "left",
        "font": "100 15pt \"Roboto\"",
        "letterSpacing": 1
    },
    "team-images img": {
        "borderBottom": "3px solid #198fd8",
        "maxWidth": "89%",
        "height": "auto",
        "marginBottom": 5,
        "marginTop": 15
    },
    "team-section h2": {
        "color": "white",
        "textTransform": "uppercase",
        "font": "500 15pt \"Roboto\"",
        "letterSpacing": 1
    },
    "next-events": {
        "backgroundColor": "#000d19",
        "width": 255,
        "marginBottom": 2
    },
    "next-events h2": {
        "borderBottom": "3px solid #198fd8",
        "marginBottom": 0,
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13
    },
    "next-events p": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "font": "500 10pt \"Roboto\"",
        "letterSpacing": 1,
        "textTransform": "uppercase",
        "color": "#3880b2",
        "marginBottom": 0
    },
    "next-events hr": {
        "borderTop": "1px solid #198fd8",
        "marginTop": 0,
        "marginBottom": 0
    },
    "live-stream": {
        "backgroundColor": "#000d19",
        "width": 255,
        "marginBottom": 19
    },
    "live-stream h2": {
        "borderBottom": "3px solid #198fd8",
        "marginBottom": 0,
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13
    },
    "LeftTeam": {
        "display": "inline-block"
    },
    "RightTeam": {
        "display": "inline-block",
        "verticalAlign": "top"
    },
    "CalgarySection": {
        "marginTop": 15
    },
    "Calgary-tweet-feed": {
        "maxWidth": 255,
        "height": 431
    },
    "senion-team": {
        "backgroundColor": "#000d19",
        "width": 255,
        "marginBottom": 5
    },
    "a": {
        "textDecoration": "none"
    },
    "about-section": {
        "marginBottom": 5,
        "marginTop": 1,
        "paddingRight": 26
    },
    "about-section img": {
        "maxWidth": "74%"
    },
    "subtitle": {
        "marginTop": 1,
        "font": "100 12e \"Roboto\"",
        "letterSpacing": 1
    },
    "article": {
        "maxWidth": 34,
        "font": "300 13pt \"Roboto\"",
        "letterSpacing": 1,
        "lineHeight": 25,
        "color": "#4a5d6c"
    },
    "staffPage": {
        "paddingBottom": 55,
        "textAlign": "center",
        "textTransform": "uppercase",
        "marginBottom": 40
    },
    "staffPage img": {
        "borderRadius": 200,
        "paddingLeft": 15,
        "marginTop": 3,
        "width": "92%"
    },
    "box": {
        "display": "inline-block",
        "paddingLeft": 5.9,
        "paddingRight": 5.9,
        "maxWidth": 200,
        "height": 75,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "staffContent": {
        "backgroundColor": "#000d19",
        "borderRadius": "5px 5px 0 0",
        "marginTop": -100,
        "paddingTop": 111,
        "paddingRight": 10,
        "paddingBottom": 28,
        "paddingLeft": 10,
        "width": "100%",
        "color": "white"
    },
    "p": {
        "color": "white"
    },
    "span": {
        "color": "white"
    },
    "h3": {
        "color": "white"
    },
    "staffContent h3": {
        "font": "300 13pt \"Roboto\"",
        "letterSpacing": 1
    }
});