/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { FacebookIcon as LucideFacebookIcon, InstagramIcon as LucideInstagramIcon, LinkedinIcon as LucideLinkedinIcon, MenuIcon as LucideMenuIcon, TwitterIcon as LucideTwitterIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
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

export function Link_45925b1e7b16944cfa98bcd9d4959bc7 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} size={`3`}>
  <NextLink href={`https://reflex.dev`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"textAlign": "center", "padding": "1em"}} direction={`row`} gap={`3`}>
  {`Built with `}
  <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z\" fill=\"#110F1F\"/>\n<path d=\"M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z\" fill=\"#110F1F\"/>\n<path d=\"M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z\" fill=\"#110F1F\"/>\n<path d=\"M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z\" fill=\"#110F1F\"/>\n<path d=\"M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z\" fill=\"#110F1F\"/>\n<path d=\"M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z\" fill=\"#110F1F\"/>\n</svg>"}}/>
</Fragment>
) : (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z\" fill=\"white\"/>\n<path d=\"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z\" fill=\"white\"/>\n<path d=\"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z\" fill=\"white\"/>\n<path d=\"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z\" fill=\"white\"/>\n<path d=\"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z\" fill=\"white\"/>\n<path d=\"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z\" fill=\"white\"/>\n</svg>"}}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
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

export function Link_7d0bb5237df999b20f279635c15c7e4d () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesButton>
  {`Check out our docs!`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
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
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"minHeight": "85vh"}} direction={`column`} justify={`center`} gap={`5`}>
  <RadixThemesHeading size={`9`}>
  {`Welcome to Reflex GPT!`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`5`}>
  {`Get started by editing something like `}
  <RadixThemesCode>
  {`reflex_gpt/reflex_gpt.py`}
</RadixThemesCode>
</RadixThemesText>
  <Link_7d0bb5237df999b20f279635c15c7e4d/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}}>
  <Link_45925b1e7b16944cfa98bcd9d4959bc7/>
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
  {`Reflex Gpt | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
