"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[9360],{11879:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var o=a(69307),n=a(55609),c=a(14599),s=a(9818),i=a(67221),r=a(86989),m=a.n(r),l=a(49471),M=a(88679),u=a(42058),y=a(65736);const L={noThanks:(0,y.__)("No thanks","woocommerce"),heading:e=>(0,y.sprintf)((0,y.__)("Hi%s, run your business and manage your payments all in one place, with no setup costs or monthly fees.","woocommerce"),e?` ${e}`:""),limitedTimeOffer:(0,y.__)("Limited time offer","woocommerce"),TosAndPp:(0,o.createInterpolateElement)((0,y.__)("By using WooPayments you agree to our <a1>Terms of Service</a2> and acknowledge that you have read our <a2>Privacy Policy</a2>. Discount will be applied to payments processed via WooPayments upon completion of installation, setup, and connection. ","woocommerce"),{a1:(0,o.createElement)("a",{href:"https://wordpress.com/tos",target:"_blank",rel:"noopener noreferrer"}),a2:(0,o.createElement)("a",{href:"https://automattic.com/privacy/",target:"_blank",rel:"noopener noreferrer"})}),TosAndPpWooPay:(0,o.createInterpolateElement)((0,y.__)("By using WooPayments you agree to our <a1>Terms of Service</a2> (including WooPay <a3>merchant terms</a3>) and acknowledge that you have read our <a2>Privacy Policy</a2>. Discount will be applied to payments processed via WooPayments upon completion of installation, setup, and connection. ","woocommerce"),{a1:(0,o.createElement)("a",{href:"https://wordpress.com/tos",target:"_blank",rel:"noopener noreferrer"}),a2:(0,o.createElement)("a",{href:"https://automattic.com/privacy/",target:"_blank",rel:"noopener noreferrer"}),a3:(0,o.createElement)("a",{href:"https://wordpress.com/tos/#more-woopay-specifically",target:"_blank",rel:"noopener noreferrer"})}),termsAndConditions:e=>(0,o.createInterpolateElement)((0,y.__)("*See <a>Terms and Conditions</a> for details.","woocommerce"),{a:(0,o.createElement)("a",{href:e,target:"_blank",rel:"noopener noreferrer"})}),paymentOptions:(0,y.__)("WooPayments is pre-integrated with all popular payment options","woocommerce"),andMore:(0,y.__)("& more","woocommerce"),learnMore:(0,y.__)("Learn more","woocommerce"),survey:{title:(0,y.__)("No thanks, I don’t want WooPayments","woocommerce"),intro:(0,y.__)("Note that the extension hasn’t been installed. This will simply dismiss our limited time offer. Please take a moment to tell us why you’d like to dismiss the WooPayments offer.","woocommerce"),question:(0,y.__)("Why would you like to dismiss the new payments experience?","woocommerce"),happyLabel:(0,y.__)("I’m already happy with my payments setup","woocommerce"),installLabel:(0,y.__)("I don’t want to install another plugin","woocommerce"),moreInfoLabel:(0,y.__)("I need more information about WooPayments","woocommerce"),anotherTimeLabel:(0,y.__)("I’m open to installing it another time","woocommerce"),somethingElseLabel:(0,y.__)("It’s something else (Please share below)","woocommerce"),commentsLabel:(0,y.__)("Comments (Optional)","woocommerce"),cancelButton:(0,y.__)("Just dismiss WooPayments","woocommerce"),submitButton:(0,y.__)("Dismiss and send feedback","woocommerce")},faq:{haveQuestions:(0,y.__)("Have questions?","woocommerce"),getInTouch:(0,y.__)("Get in touch","woocommerce")},apms:{addMoreWaysToPay:(0,y.__)("Add more ways for buyers to pay","woocommerce"),seeMore:(0,y.__)("See more","woocommerce"),paypal:{title:(0,y.__)("PayPal Payments","woocommerce"),description:(0,y.__)("Enable PayPal Payments alongside WooPayments. Give your customers another way to pay safely and conveniently via PayPal, PayLater, and Venmo.","woocommerce")},amazonpay:{title:(0,y.__)("Amazon Pay","woocommerce"),description:(0,y.__)("Enable Amazon Pay alongside WooPayments and give buyers the ability to pay via Amazon Pay. Transactions take place via Amazon embedded widgets, so the buyer never leaves your site.","woocommerce")},klarna:{title:(0,y.__)("Klarna","woocommerce"),description:(0,y.__)("Enable Klarna alongside WooPayments. With Klarna Payments buyers can choose the payment installment option they want, Pay Now, Pay Later, or Slice It. No credit card numbers, no passwords, no worries.","woocommerce")},affirm:{title:(0,y.__)("Affirm","woocommerce"),description:(0,y.__)("Enable Affirm alongside WooPayments and give buyers the ability to pick the payment option that works for them and their budget — from 4 interest-free payments every 2 weeks to monthly installments.","woocommerce")},installText:e=>{const t=e.split(", ").length;return(0,o.createInterpolateElement)((0,y.sprintf)((0,y._n)("Installing <strong>WooPayments</strong> will automatically activate <strong>%s</strong> extension in your store.","Installing <strong>WooPayments</strong> will automatically activate <strong>%s</strong> extensions in your store.",t,"woocommerce"),e),{strong:(0,o.createElement)("strong",null)})},installTextPost:(0,y.__)("extension in your store.","woocommerce")}},g=function({}){const e=(0,M.O3)("wcpayWelcomePageIncentive"),[t,a]=(0,o.useState)(!0),[r,m]=(0,o.useState)(!1),[l,u]=(0,o.useState)(!1),[y,g]=(0,o.useState)(!1),[N,p]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!1),[d,A]=(0,o.useState)(""),{updateOptions:E}=(0,s.useDispatch)(i.OPTIONS_STORE_NAME),S=(0,s.useSelect)((e=>{const{getOption:t}=e(i.OPTIONS_STORE_NAME);return t("wcpay_welcome_page_incentives_dismissed")||[]})),I=async()=>{a(!1),await E({wcpay_welcome_page_incentives_dismissed:[...S,e.id]}),window.location.href="admin.php?page=wc-admin"};return t?(0,o.createElement)(n.Modal,{className:"woopayments-welcome-page__survey",title:L.survey.title,onRequestClose:I,shouldCloseOnClickOutside:!1},(0,o.createElement)("p",{className:"woopayments-welcome-page__survey-intro"},L.survey.intro),(0,o.createElement)("p",{className:"woopayments-welcome-page__survey-question"},L.survey.question),(0,o.createElement)("div",{className:"woopayments-welcome-page__survey-selection"},(0,o.createElement)(n.CheckboxControl,{label:L.survey.happyLabel,checked:r,onChange:m}),(0,o.createElement)(n.CheckboxControl,{label:L.survey.installLabel,checked:l,onChange:u}),(0,o.createElement)(n.CheckboxControl,{label:L.survey.moreInfoLabel,checked:y,onChange:g}),(0,o.createElement)(n.CheckboxControl,{label:L.survey.anotherTimeLabel,checked:N,onChange:p}),(0,o.createElement)(n.CheckboxControl,{label:L.survey.somethingElseLabel,checked:j,onChange:w})),(0,o.createElement)("div",{className:"woopayments-welcome-page__survey-comments"},(0,o.createElement)(n.TextareaControl,{label:L.survey.commentsLabel,value:d,onChange:e=>A(e),rows:3})),(0,o.createElement)("div",{className:"woopayments-welcome-page__survey-buttons"},(0,o.createElement)(n.Button,{isTertiary:!0,isDestructive:!0,onClick:()=>{(0,c.recordEvent)("wcpay_exit_survey",{just_remove:!0,incentive_id:e.id}),I()},name:"cancel"},L.survey.cancelButton),(0,o.createElement)(n.Button,{isSecondary:!0,onClick:()=>{(0,c.recordEvent)("wcpay_exit_survey",{happy:r?"Yes":"No",install:l?"Yes":"No",more_info:y?"Yes":"No",another_time:N?"Yes":"No",something_else:j?"Yes":"No",comments:d,incentive_id:e.id}),y&&E({wcpay_welcome_page_exit_survey_more_info_needed_timestamp:Math.floor(Date.now()/1e3)}),I()},name:"send"},L.survey.submitButton))):null},N=({isSubmitted:e,handleSetup:t})=>{const{first_name:a}=(0,M.O3)("currentUserData",{}),{description:c,cta_label:s,tc_url:i}=(0,M.O3)("wcpayWelcomePageIncentive"),[r,m]=(0,o.useState)(!1),[y,N]=(0,o.useState)(!1),p=(0,M.O3)("isWooPayEligible");return(0,o.createElement)(n.Card,{className:"__CLASS__"},(0,o.createElement)(n.CardBody,{className:"woopayments-welcome-page__header"},(0,o.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNDQgMzAiPjxwYXRoIGZpbGw9IiM3RjU0QjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNTcuOWgzOS44NWE0LjUgNC41IDAgMCAxIDQuNTYgNC40djE0Ljc0YTQuNSA0LjUgMCAwIDEtNC41NiA0LjQxaC0xNC4zbDEuOTYgNC42Ni04LjY0LTQuNjZINC41NkE0LjUgNC41IDAgMCAxIDAgMjAuMDRWNS4zQTQuNSA0LjUgMCAwIDEgNC41Ny44OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yLjQ3IDQuOWMuMzEtLjM3Ljc3LS42IDEuMjYtLjYxIDEuMDEtLjA2IDEuNi40IDEuNzUgMS40LjYyIDQuMDMgMS4zIDcuNDcgMiAxMC4zbDQuNC04LjA5Yy40LS43Mi44OS0xLjExIDEuNS0xLjE1Ljg4LS4wNiAxLjQyLjQ4IDEuNjQgMS42M2EzNS44OCAzNS44OCAwIDAgMCAxLjkgNi42M2MuNTMtNC45MiAxLjQtOC40OSAyLjY0LTEwLjY4LjI0LS41Ljc1LS44MyAxLjMyLS44Ni40NS0uMDMuOS4xIDEuMjUuNC4zNy4yNi41OS42Ny42MSAxLjExLjAzLjMzLS4wNC42NS0uMi45My0uNzcgMS40LTEuNDIgMy43NC0xLjkyIDctLjUgMy4xNS0uNjkgNS42Mi0uNTYgNy4zOS4wNS40NC0uMDQuODgtLjIzIDEuMjctLjIuNC0uNjEuNjctMS4wNi43LS41My4wNC0xLjA1LS4yLTEuNTgtLjcyLTEuODctMS44NC0zLjM1LTQuNTktNC40My04LjI0bC0yLjkgNS41OGMtMS4xNyAyLjItMi4xOCAzLjMyLTMgMy4zOC0uNTUuMDQtMS4wMi0uNC0xLjQtMS4zMy0xLjAyLTIuNTMtMi4xMi03LjQ0LTMuMy0xNC43Mi0uMS0uNDYuMDItLjk1LjMxLTEuMzNaTTQ1LjQ5IDcuOTRhNC42NyA0LjY3IDAgMCAwLTMuMi0yLjI1IDUuMzQgNS4zNCAwIDAgMC0xLjEtLjFjLTEuOSAwLTMuNDcuOTYtNC43IDIuODlhMTAgMTAgMCAwIDAtMS41NSA1LjQ2YzAgMS41LjMzIDIuNzcuOTYgMy44NC42OCAxLjE2IDEuODQgMiAzLjIgMi4yNC4zNi4wOC43My4xMiAxLjA5LjEyIDEuOTMgMCAzLjUtLjk3IDQuNy0yLjlhMTAuMDkgMTAuMDkgMCAwIDAgMS41NS01LjVjMC0xLjQ4LS4zMi0yLjc1LS45NS0zLjhabS0yLjUzIDUuMzhhNS4wNyA1LjA3IDAgMCAxLTEuNTMgMi44OGMtLjU4LjUxLTEuMTIuNzEtMS42Mi42Mi0uNDktLjEtLjg4LS41MS0xLjE4LTEuMjVhNC44NSA0Ljg1IDAgMCAxLS4zNC0xLjc3IDYuMjggNi4yOCAwIDAgMSAxLjItMy43M2MuNjYtLjk0IDEuMzYtMS4zNCAyLjA4LTEuMTkuNS4xLjg5LjUyIDEuMTggMS4yNi4yMi41Ni4zNSAxLjE1LjM1IDEuNzUgMCAuNDgtLjA0Ljk2LS4xNCAxLjQzWk0zMi45NSA3Ljk0YTQuNjcgNC42NyAwIDAgMC0zLjItMi4yNSA1LjM0IDUuMzQgMCAwIDAtMS4wOS0uMWMtMS45MiAwLTMuNDguOTYtNC43IDIuODlhMTAgMTAgMCAwIDAtMS41NSA1LjQ2YzAgMS41LjMyIDIuNzcuOTUgMy44NC42OCAxLjE2IDEuODQgMiAzLjIgMi4yNC4zNy4wOC43My4xMiAxLjEuMTIgMS45MyAwIDMuNDktLjk3IDQuNy0yLjlhMTAuMiAxMC4yIDAgMCAwIDEuNTYtNS41YzAtMS41LS4zMi0yLjc2LS45Ni0zLjgxaC0uMDF2LjAxWm0tMi41MyA1LjM4YTUuMDMgNS4wMyAwIDAgMS0xLjUzIDIuODhjLS41OC41MS0xLjEyLjcxLTEuNjEuNjItLjUtLjEtLjg5LS41MS0xLjE4LTEuMjVhNC44NCA0Ljg0IDAgMCAxLS4zNS0xLjc3YzAtLjQ4LjA1LS45NS4xNC0xLjQyLjItLjgzLjU2LTEuNiAxLjA2LTIuMy42Ni0uOTUgMS4zNi0xLjM1IDIuMDktMS4yLjQ5LjEuODguNTIgMS4xOCAxLjI2LjIyLjU2LjM1IDEuMTUuMzUgMS43NSAwIC40OC0uMDYuOTYtLjE1IDEuNDNaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTUzLjE0IDYuMThoNC42MmE2LjMgNi4zIDAgMCAxIDMuOTMgMS4xMyAzLjU2IDMuNTYgMCAwIDEgMS40NyAyLjk4YzAgMS4yOS0uNSAyLjMtMS41IDMuMDNzLTIuMzggMS4xLTQuMTYgMS4xaC0uNjR2NS4wNkg1My4xVjYuMThoLjAzWm0zLjczIDIuNTV2My4xNGEzLjYzIDMuNjMgMCAwIDAgMS44NS0uNGMuNC0uMjQuNi0uNjMuNi0xLjE2IDAtLjU4LS4yLS45OC0uNTgtMS4yLS4zOC0uMjQtMS0uMzctMS44Ny0uMzhaTTc0Ljc4IDE5LjQ4SDcwLjlsLS42NC0yLjIyaC0zLjk1bC0uNjUgMi4yMmgtMy44bDQuMzYtMTMuM2g0LjJsNC4zNiAxMy4zWm0tNS4yMy00LjYxYTQ3LjU1IDQ3LjU1IDAgMCAxLTEuMjYtNS42NWgtLjA1QTUyLjcgNTIuNyAwIDAgMSA2NyAxNC44N2gyLjU1Wk03Mi41NCA2LjE4aDQuMmMuOTMgMS45MSAxLjYgMy40IDIuMDIgNC40MmguMDVhNjcuOTIgNjcuOTIgMCAwIDEgMi00LjQyaDQuMjhsLTQuNDEgNy4yOHY2LjAxaC0zLjc5di02bC00LjM1LTcuMjlaTTg2LjI2IDYuMThoNC43MmMuNjggMi44OCAxLjIgNS4zNCAxLjYgNy40bC40LTIuMDVjLjE3LS44LjM0LTEuNTguNTMtMi4zNWwuNzMtMi45OGg0LjgxbDEuODggMTMuM2gtMy43bC0xLTkuMTUtMi4zIDkuMTVIOTEuNGwtMi40Mi05LjE2LS45NiA5LjE2aC0zLjU0bDEuNzgtMTMuMzJaTTEwMi4wNiA2LjE4aDcuNTZ2Mi44M2gtMy44MnYyLjQ0aDMuMzJ2Mi43NmgtMy4zMnYyLjQzaDMuODV2Mi44M2gtNy42VjYuMThaTTExMS4wMyA2LjE4aDMuNzdsNC43NiA3LjY3LS4xMy0xLjQzVjYuMThoMy43NHYxMy4zaC0zLjgzbC00LjY1LTcuNTUuMSAxLjY2djUuOWgtMy43NFY2LjE4aC0uMDJaTTEyNC4xNSA2LjE4aDguOTN2My4wNGgtMi41OHYxMC4yNmgtMy43OFY5LjIyaC0yLjU1VjYuMThoLS4wMlpNMTM0LjYgMTkuMjN2LTMuMWE3LjQgNy40IDAgMCAwIDMgLjg0Yy40NiAwIC44NC0uMSAxLjExLS4zYTEgMSAwIDAgMCAuNC0uODRjMC0uMjYtLjEtLjUxLS4zMi0uNzVhNS42IDUuNiAwIDAgMC0xLjEzLS44NGMtMS4zLS44LTIuMjMtMS41NC0yLjgtMi4yMmEzLjQ3IDMuNDcgMCAwIDEtLjg4LTIuM2MwLTEuMTUuNDYtMi4wOCAxLjM1LTIuOC45LS43NCAyLjA2LTEuMSAzLjQ4LTEuMSAxLjA1IDAgMi4xLjE5IDMuMTQuNTV2Mi45OGMtMS4xMS0uNS0yLS43NC0yLjctLjc0LS40NyAwLS44NC4wOC0xLjEuMjdhLjg3Ljg3IDAgMCAwLS40Ljc1YzAgLjU2LjYyIDEuMTggMS44NyAxLjg5Ljc0LjQxIDEuNDkuOTkgMi4yNSAxLjc0czEuMTQgMS42IDEuMTQgMi42YzAgMS4xNS0uNSAyLjEtMS40OSAyLjg1YTYuMDkgNi4wOSAwIDAgMS0zLjc4IDEuMTMgOS4xNCA5LjE0IDAgMCAxLTMuMTQtLjZaIi8+PC9zdmc+",alt:"WooPayments logo"}),(0,o.createElement)("h1",null,L.heading(a))),(0,o.createElement)(n.CardBody,{className:"woopayments-welcome-page__offer"},(0,o.createElement)("div",{className:"woopayments-welcome-page__offer-pill"},L.limitedTimeOffer),(0,o.createElement)("h2",{dangerouslySetInnerHTML:(0,u.ZP)(c+'<span class="tos-asterix">*</span>')}),(0,o.createElement)(n.Button,{variant:"primary",isBusy:e,disabled:e,onClick:t},s),(0,o.createElement)(n.Button,{variant:"tertiary",isBusy:r&&y,disabled:r&&y,onClick:()=>{m(!0),N(!0)}},L.noThanks),(0,o.createElement)("p",null,p?L.TosAndPpWooPay:L.TosAndPp),(0,o.createElement)("p",null,L.termsAndConditions(i))),(0,o.createElement)(n.CardDivider,null),(0,o.createElement)(n.CardBody,{className:"woopayments-welcome-page__payments"},(0,o.createElement)("p",null,L.paymentOptions),(0,o.createElement)(l.WooPaymentMethodsLogos,{isWooPayEligible:p,maxElements:10})),y&&(0,o.createElement)(g,{setExitSurveyModalOpen:N}))};var p=a(86020),j=a(60247),w=a(70444);const d=(0,o.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(w.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})),A=[{id:"paypal",title:L.apms.paypal.title,icon:`${M.vm}images/payment_methods/72x72/paypal.png`,description:L.apms.paypal.description,link:"https://woocommerce.com/products/woocommerce-paypal-payments/",extension:"woocommerce-paypal-payments"},{id:"amazonpay",title:L.apms.amazonpay.title,icon:`${M.vm}images/payment_methods/72x72/amazonpay.png`,description:L.apms.amazonpay.description,link:"https://woocommerce.com/products/pay-with-amazon/",extension:"woocommerce-gateway-amazon-payments-advanced"}],E=({enabledApms:e})=>{if(!e.size)return null;const t=[...e].map((e=>e.title)).join(", ");return(0,o.createElement)(n.Notice,{status:"info",isDismissible:!1,className:"woopayments-welcome-page__apms-notice"},(0,o.createElement)(j.Z,{icon:d}),(0,o.createElement)("div",null,L.apms.installText(t)))},S=({enabledApms:e,setEnabledApms:t})=>{const a=A.map((a=>({key:a.id,title:a.title,content:(0,o.createElement)(o.Fragment,null,a.description," ",(0,o.createElement)("a",{href:a.link,target:"_blank",rel:"noreferrer"},L.learnMore)),before:(0,o.createElement)("img",{src:a.icon,alt:""}),after:(0,o.createElement)(n.ToggleControl,{checked:e.has(a),onChange:()=>(a=>{e.has(a)?e.delete(a):e.add(a),t(new Set(e))})(a)})})));return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(E,{enabledApms:e}),(0,o.createElement)(n.Card,{size:"large",className:"woopayments-welcome-page__apms"},(0,o.createElement)(n.CardHeader,null,(0,o.createElement)("h1",null,L.apms.addMoreWaysToPay)),(0,o.createElement)(n.CardBody,null,(0,o.createElement)(p.List,{items:a})),(0,o.createElement)(n.CardFooter,null,(0,o.createElement)(n.ExternalLink,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/wallets/?categoryIds=28682&collections=product&page=1"},L.apms.seeMore))))};var I=a(17054);const C=()=>(0,o.createElement)(n.Card,{className:"woopayments-welcome-page__faq"},(0,o.createElement)(j.Z,{icon:I.Z}),(0,o.createElement)("span",null,L.faq.haveQuestions," "),(0,o.createElement)("a",{href:"https://woocommerce.com/my-account/tickets/",target:"_blank",rel:"noreferrer"},L.faq.getInTouch)),_=()=>{const e=(0,M.O3)("wcpayWelcomePageIncentive"),{updateOptions:t}=(0,s.useDispatch)(i.OPTIONS_STORE_NAME),{installAndActivatePlugins:a}=(0,s.useDispatch)("wc/admin/plugins"),[r,l]=(0,o.useState)(!1),[u,y]=(0,o.useState)(""),[L,g]=(0,o.useState)(new Set),{isJetpackConnected:p,connectUrl:j}=(0,s.useSelect)((t=>({isJetpackConnected:t("wc/admin/plugins").isJetpackConnected(),connectUrl:"admin.php?wcpay-connect=1&promo="+encodeURIComponent(e.id)+"&_wpnonce="+(0,M.O3)("wcpay_welcome_page_connect_nonce")+"&from=WCADMIN_PAYMENT_INCENTIVE"}))),w=()=>{let e="wcadmin";switch(new URLSearchParams(window.location.search).get("from")||""){case"WCADMIN_PAYMENT_TASK":e="wcadmin-payment-task";break;case"WCADMIN_PAYMENT_SETTINGS":e="wcadmin-settings-page"}return e};return(0,o.useEffect)((()=>{(0,c.recordEvent)("page_view",{path:"payments_connect_core_test",incentive_id:e.id,source:w()}),t({wcpay_welcome_page_viewed_timestamp:Math.floor(Date.now()/1e3)})}),[]),e?(0,o.createElement)("div",{className:"woopayments-welcome-page"},u&&(0,o.createElement)(n.Notice,{status:"error",isDismissible:!1},u),(0,o.createElement)(N,{isSubmitted:r,handleSetup:async()=>{l(!0),(0,c.recordEvent)("wcpay_connect_account_clicked",{wpcom_connection:p?"Yes":"No",incentive_id:e.id,path:"payments_connect_core_test",source:w()});const t=[...L].map((e=>e.extension));try{const o=await a(["woocommerce-payments"].concat(t));if(!o?.success)throw new Error(o.message);(0,c.recordEvent)("wcpay_extension_installed",{extensions:[...L].map((e=>e.id)).join(", "),incentive_id:e.id}),await(async()=>{const t=await m()({path:`/wc-analytics/admin/notes/experimental-activate-promo/${e.id}`,method:"POST"});t?.success&&(window.location.href=j)})()}catch(e){if(!(e instanceof Error))throw new Error(`Unexpected error occurred. ${e}`);y(e.message),l(!1)}}}),(0,o.createElement)(S,{enabledApms:L,setEnabledApms:g}),(0,o.createElement)(C,null)):null}}}]);