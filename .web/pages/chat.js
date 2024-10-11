/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { FacebookIcon as LucideFacebookIcon, InstagramIcon as LucideInstagramIcon, LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, TwitterIcon as LucideTwitterIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextArea as RadixThemesTextArea } from "@radix-ui/themes"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Dropdownmenu__item_eace4d7fd915068dcb5d35628fc0d4eb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_4ffc7f51f643f30776277f32f66f143a = useCallback((...args) => addEvents([Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_home", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_4ffc7f51f643f30776277f32f66f143a}>
  {`Home`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Button_1aeaaa2dae5b8bffcf92fbc1f8e54943 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_421d57e4e278448b150217244616dfd1 = useCallback((...args) => addEvents([Event("reflex___state____state.reflex_gpt___chat___state____chat_state.create_new_and_redirect", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesButton onClick={on_click_421d57e4e278448b150217244616dfd1}>
  {`+ New Chat`}
</RadixThemesButton>
  )
}

        function ComponentMap_4ffb469341e2b6627f60d58f709452af () {
            const { resolvedColorMode } = useContext(ColorModeContext)
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>  {children}</RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>  {children}</RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>  {children}</RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>  {children}</RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>  {children}</RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>  {children}</RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>  {children}</RadixThemesText>, "ul": ({node, children, ...props}) => <ul css={{"listStyleType": "disc", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "direction": "column"}}>  {children}</ul>, "ol": ({node, children, ...props}) => <ol css={{"listStyleType": "decimal", "marginTop": "1em", "marginBottom": "1em", "marginLeft": "1.5rem", "direction": "column"}}>  {children}</ol>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>  {children}</li>, "a": ({node, children, ...props}) => <RadixThemesLink css={{"&:hover": {"color": "var(--accent-8)"}}} {...props}>  {children}</RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode {...props}>  {children}</RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} wrapLongLines={true} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} wrapLongLines={true} children={children} {...props}/>}
            )
        }
        

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Dropdownmenu__item_eacd31a3d82d7a03c6c915ef449938fc () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_b6b2e3b5802123715ce4da654d33e6da = useCallback((...args) => addEvents([Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_about_us", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_b6b2e3b5802123715ce4da654d33e6da}>
  {`About`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Flex_f5d94fb93b1510531ef7d0d9e5eebe8a () {
  const reflex___state____state__reflex_gpt___chat___state____chat_state = useContext(StateContexts.reflex___state____state__reflex_gpt___chat___state____chat_state)



  return (
    <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesHeading size={`5`}>
  {`Chat Here`}
</RadixThemesHeading>
  {isTrue(reflex___state____state__reflex_gpt___chat___state____chat_state.not_found) ? `Not found` : `Found`}
  <Button_1aeaaa2dae5b8bffcf92fbc1f8e54943/>
</RadixThemesFlex>
  )
}

export function Box_f1b38301ffe44e39605e062d0c89fe77 () {
  const reflex___state____state__reflex_gpt___chat___state____chat_state = useContext(StateContexts.reflex___state____state__reflex_gpt___chat___state____chat_state)



  return (
    <RadixThemesBox css={{"width": "100%"}}>
  {reflex___state____state__reflex_gpt___chat___state____chat_state.messages.map((chat_message, index_f7d540c63d32a5de) => (
  <RadixThemesBox css={{"width": "100%"}} key={index_f7d540c63d32a5de}>
  <RadixThemesBox css={{"textAlign": isTrue(chat_message.is_bot) ? `left` : `right`, "marginTop": "1em"}}>
  <ReactMarkdown css={{"backgroundColor": isTrue(chat_message.is_bot) ? `var(--mauve-4)` : `var(--blue-4)`, "color": isTrue(chat_message.is_bot) ? `var(--mauve-12)` : `var(--blue-12)`, "display": "inline-block", "padding": "1em", "borderRadius": "8px", "@media screen and (min-width: 0)": {"maxWidth": "30em"}, "@media screen and (min-width: 30em)": {"maxWidth": "30em"}, "@media screen and (min-width: 48em)": {"maxWidth": "50em"}, "@media screen and (min-width: 62em)": {"maxWidth": "50em"}, "@media screen and (min-width: 80em)": {"maxWidth": "50em"}, "@media screen and (min-width: 96em)": {"maxWidth": "50em"}}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_4ffb469341e2b6627f60d58f709452af()}>
  {chat_message.message}
</ReactMarkdown>
</RadixThemesBox>
</RadixThemesBox>
))}
</RadixThemesBox>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {`Ooops...Unknown Reflex error has occured:`}
</p>
  <p css={{"color": "red"}}>
  {error.message}
</p>
  <p>
  {`Please contact the support.`}
</p>
</div>
                    );
                }
            

export function Fragment_01dd491d2a415a15b8ad60924513ab41 () {
  const reflex___state____state__reflex_gpt___chat___state____chat_state = useContext(StateContexts.reflex___state____state__reflex_gpt___chat___state____chat_state)



  return (
    <Fragment>
  {isTrue(reflex___state____state__reflex_gpt___chat___state____chat_state.user_did_submit) ? (
  <Fragment>
  <RadixThemesText as={`p`}>
  {`Submitted`}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Dropdownmenu__item_4bdf9d74ebfcf8a9c6fd18491f8b643d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_8da49dd625fd7dfa9b0ae88836000590 = useCallback((...args) => addEvents([Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_chat", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_8da49dd625fd7dfa9b0ae88836000590}>
  {`Chat`}
</RadixThemesDropdownMenu.Item>
  )
}

export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Root_b294e6ed67f9a03d5c2e90a83e88dcf1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_a953312d5a2245d0bbbf8fb097904937 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("reflex___state____state.reflex_gpt___chat___state____chat_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_a953312d5a2245d0bbbf8fb097904937}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesTextArea css={{"width": "100%"}} name={`message`} placeholder={`Your message`} required={true}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
  <Fragment_01dd491d2a415a15b8ad60924513ab41/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export default function Component() {
  const ref_my_base_container = useRef(null); refs['ref_my_base_container'] = ref_my_base_container;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesContainer css={{"padding": "16px"}} id={`my-base-container`} ref={ref_my_base_container} size={`3`}>
  <RadixThemesBox css={{"background": "var(--accent-3)", "padding": "1em", "width": "100%"}}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <img css={{"width": "2.25em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading size={`7`} weight={`bold`}>
  {`Reflex GPT`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} justify={`end`} gap={`5`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Home`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/about`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`About`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/chat`} passHref={true}>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Chat`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <img css={{"width": "2em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading size={`6`} weight={`bold`}>
  {`Reflex GPT`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesDropdownMenu.Root css={{"justify": "end"}}>
  <RadixThemesDropdownMenu.Trigger>
  <LucideMenuIcon css={{"color": "var(--current-color)"}} size={30}/>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <Dropdownmenu__item_eace4d7fd915068dcb5d35628fc0d4eb/>
  <Dropdownmenu__item_eacd31a3d82d7a03c6c915ef449938fc/>
  <Dropdownmenu__item_4bdf9d74ebfcf8a9c6fd18491f8b643d/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
  <Fragment>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"margin": "3rem auto", "minHeight": "85vh"}} direction={`column`} justify={`center`} gap={`5`}>
  <Flex_f5d94fb93b1510531ef7d0d9e5eebe8a/>
  <Box_f1b38301ffe44e39605e062d0c89fe77/>
  <Root_b294e6ed67f9a03d5c2e90a83e88dcf1/>
</RadixThemesFlex>
</Fragment>
  <footer css={{"width": "100%"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "column"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}, "width": "100%"}} justify={`between`} gap={`6`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"@media screen and (min-width: 0)": {"alignItems": "center"}, "@media screen and (min-width: 30em)": {"alignItems": "center"}, "@media screen and (min-width: 48em)": {"alignItems": "start"}}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <img css={{"width": "2.25em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading size={`7`} weight={`bold`}>
  {`Reflex`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"whiteSpace": "nowrap"}} size={`3`} weight={`medium`}>
  {`© 2024 Reflex, Inc`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"textAlign": "center"}, "@media screen and (min-width: 30em)": {"textAlign": "center"}, "@media screen and (min-width: 48em)": {"textAlign": "start"}, "flexDirection": "column"}} gap={`4`}>
  <RadixThemesHeading as={`h3`} size={`4`} weight={`bold`}>
  {`PRODUCTS`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Web Design`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Web Development`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`E-commerce`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Content Management`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Mobile Apps`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"textAlign": "center"}, "@media screen and (min-width: 30em)": {"textAlign": "center"}, "@media screen and (min-width: 48em)": {"textAlign": "start"}, "flexDirection": "column"}} gap={`4`}>
  <RadixThemesHeading as={`h3`} size={`4`} weight={`bold`}>
  {`RESOURCES`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Blog`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Case Studies`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Whitepapers`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Webinars`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`E-books`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Privacy Policy`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesText as={`p`} size={`3`}>
  {`Terms of Service`}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}} justify={`end`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <LucideInstagramIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <LucideTwitterIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <LucideFacebookIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <LucideLinkedinIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</footer>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflex Gpt | Chat`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
