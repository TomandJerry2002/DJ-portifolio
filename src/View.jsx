// Generated from "Benji Beats.dc.html" — the markup. All values come from renderVals() in App.jsx.
import React from 'react';
import './pseudo.css';

export default function View(v) {
  return (
    <>
    <div ref={v.rootRef} onClick={v.onRootClick} style={{"fontFamily": "var(--f-body)", "background": "var(--ink)", "color": "var(--paper)", "position": "relative", "overflowX": "clip"}}>
      <a className="dc1" href="#main" data-skip="" style={{"position": "fixed", "left": "12px", "top": "-60px", "zIndex": "110", "padding": "12px 16px", "background": "#E1301C", "color": "#0A0A0A", "fontFamily": "var(--f-mono)", "fontSize": "12px", "letterSpacing": ".14em", "textTransform": "uppercase", "transition": "top .2s"}}>
        {"Skip to content"}
      </a>
      <div data-bb="progress" aria-hidden="true" style={{"position": "fixed", "top": "0", "left": "0", "right": "0", "height": "2px", "zIndex": "92", "background": "var(--signal)", "boxShadow": "0 0 10px var(--signal-hot)", "transformOrigin": "0 50%", "transform": "scaleX(0)", "pointerEvents": "none"}}></div>
      <nav data-bb="nav" style={{"position": "fixed", "top": "0", "left": "0", "right": "0", "zIndex": "90", "opacity": "0", "background": "linear-gradient(180deg,rgba(10,10,10,.85),rgba(10,10,10,0))"}}>
        <div style={{"maxWidth": "var(--max)", "margin": "0 auto", "padding": "clamp(14px,2.4vh,24px) var(--gutter)", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "24px"}}>
          <a data-bb="logo" href="#top" aria-label="Back to top" style={{"fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(14px,1.3vw,17px)", "letterSpacing": "-.02em", "textShadow": "var(--rgb)"}}>
            {v.stageName}
          </a>
          <span aria-hidden="true" style={{"width": "clamp(48px,7vh,64px)"}}></span>
        </div>
      </nav>
      {(v.menuOpen) ? (
        <>
          <div data-bb="menu" role="dialog" aria-modal="true" aria-label="Menu" style={{"position": "fixed", "inset": "0", "zIndex": "89", "background": "var(--ink)", "display": "grid", "gridTemplateRows": "1fr auto", "padding": "96px var(--gutter) 36px"}}>
            <div style={{"display": "grid", "alignContent": "center", "gap": "6px"}}>
              {(v.navLinks || []).map((n, $index) => (
                <React.Fragment key={$index}>
                  <a data-bb="mlink" href={n?.href} style={{"display": "flex", "alignItems": "baseline", "gap": "16px", "padding": "8px 0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(34px,11vw,64px)", "lineHeight": "1", "letterSpacing": "-.04em", "textTransform": "uppercase", "color": n?.color, "textShadow": "var(--rgb)"}}>
                    {" "}{n?.label}{" "}
                  </a>
                </React.Fragment>
              ))}
            </div>
            <div data-bb="mlink" style={{"display": "flex", "flexWrap": "wrap", "gap": "8px 20px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "borderTop": "1px solid var(--line)", "paddingTop": "20px"}}>
              {(v.socials || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  <a href={s?.url} target="_blank" rel="noopener" style={{"display": "flex", "alignItems": "center", "minHeight": "44px"}}>
                    {s?.label}{" ↗"}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      ) : null}
      <div data-bb="loader" role="status" aria-live="polite" aria-label="Loading" style={{"position": "fixed", "inset": "0", "zIndex": "200", "color": "var(--paper)", "display": "grid", "gridTemplateRows": "minmax(0,1fr) auto", "padding": "clamp(20px,4vw,48px) var(--gutter)"}}>
        <div data-bb="loadBg" style={{"position": "absolute", "inset": "0", "background": "var(--ink)"}}></div>
        <div data-bb="loadName" aria-hidden="true" style={{"position": "relative"}}></div>
        <div data-bb="loadMeta" style={{"position": "relative", "display": "grid", "gap": "12px"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "gap": "16px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--mute)"}}>
            <span>
              {"Loading"}
            </span>
            <span data-bb="loadNum" style={{"color": "var(--paper)", "fontVariantNumeric": "tabular-nums"}}>
              {"000"}
            </span>
          </div>
          <div style={{"position": "relative", "height": "2px", "background": "var(--line)"}}>
            <img data-bb="loadRun" src={v.mascot?.frames?.a} alt="" aria-hidden="true" style={{"position": "absolute", "bottom": "2px", "left": "0", "height": "clamp(40px,6vh,56px)", "width": "auto", "imageRendering": "pixelated", "transform": "translateX(-50%) scaleX(-1)", "pointerEvents": "none"}} />
            <div data-bb="loadBar" style={{"height": "100%", "overflow": "hidden", "background": "var(--signal)", "transformOrigin": "0 50%", "transform": "scaleX(0)"}}></div>
          </div>
        </div>
      </div>
      <main id="main" tabIndex="-1" style={{"outline": "none"}}>
        <section id="top" data-bb="hero" data-screen-label="01 Hero" style={{"position": "relative", "height": v.heroH, "background": "var(--ink)"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100svh", "overflow": "hidden"}}>
            <div data-bb="screen" style={{"position": "absolute", "inset": "0", "overflow": "hidden", "background": "var(--ink)", "clipPath": "inset(50% 50% 50% 50%)", "willChange": "clip-path"}}>
              <div data-bb="photo" style={{"position": "absolute", "inset": "0", "opacity": "0", "transformOrigin": "47% 26%", "willChange": "transform,opacity"}}>
                {(v.heroGL) ? (
                  <>
                    <canvas data-bb="herogl" role="img" aria-label={v.heroAlt} style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block"}}></canvas>
                  </>
                ) : null}
                {(v.heroDom) ? (
                  <>
                    {(v.strips || []).map((s, $index) => (
                      <React.Fragment key={$index}>
                        <div data-bb="strip" style={{"position": "absolute", "inset": "-2% -6%", "clipPath": s?.clip, "willChange": "transform"}}>
                          <img src={v.heroImage} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "45% 32%", "filter": "grayscale(1) contrast(1.3) brightness(.82)", "display": "block"}} />
                        </div>
                      </React.Fragment>
                    ))}
                    <div data-bb="ghost" style={{"position": "absolute", "inset": "-2% -6%", "background": "var(--signal)", "mixBlendMode": "screen", "opacity": "0", "willChange": "transform,opacity"}}>
                      <img src={v.heroImage} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "45% 32%", "filter": "grayscale(1) contrast(1.6)", "mixBlendMode": "multiply", "display": "block"}} />
                    </div>
                  </>
                ) : null}
                {(v.hasVideo) ? (
                  <>
                    <video src={v.heroVideo} autoPlay={true} muted={true} loop={true} playsInline={true} style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "filter": "grayscale(1) contrast(1.3) brightness(.82)"}}></video>
                  </>
                ) : null}
                <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(10,10,10,.35) 0%,rgba(10,10,10,0) 30%,rgba(10,10,10,.25) 55%,rgba(10,10,10,.92) 100%)"}}></div>
              </div>
              <div data-bb="static" style={{"position": "absolute", "inset": "-50%", "opacity": "0", "mixBlendMode": "screen", "backgroundImage": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"}}></div>
              <canvas data-bb="wave" aria-hidden="true" style={{"position": "absolute", "left": "0", "right": "0", "top": "34%", "width": "100%", "height": "32%", "opacity": "0", "mixBlendMode": "screen", "pointerEvents": "none"}}></canvas>
              <div data-bb="portal" aria-hidden="true" style={{"position": "absolute", "inset": "0", "overflow": "hidden", "opacity": "0", "background": "#FFFFFF", "WebkitMaskRepeat": "no-repeat", "maskRepeat": "no-repeat", "WebkitMaskSize": "0 0", "maskSize": "0 0", "pointerEvents": "none"}}>
                <div data-bb="portalEye" style={{"position": "absolute", "inset": "0"}}>
                  <img data-bb="portalImg" src={v.portalImage} alt="" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": v.portalFit, "objectPosition": v.portalPos}} />
                </div>
                <div data-bb="portalInk" style={{"position": "absolute", "inset": "0", "background": "#0A0A0A", "opacity": "0"}}></div>
              </div>
              <div data-bb="titleWrap" style={{"position": "absolute", "inset": "0", "display": "grid", "alignContent": "end", "justifyItems": "center", "padding": "0 clamp(12px,3vw,48px) clamp(104px,17vh,180px)"}}>
                <h1 data-bb="title" aria-label={v.stageName} style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(30px,min(10.6vw,22vh),200px)", "lineHeight": ".84", "letterSpacing": "-.045em", "textAlign": "center", "color": "var(--paper)"}}>
                  {(v.titleLines || []).map((line, $index) => (
                    <React.Fragment key={$index}>
                      <span data-bb="line" aria-hidden="true" style={{"display": "block", "whiteSpace": "nowrap", "willChange": "transform"}}>
                        {(line?.chars || []).map((c, $index) => (
                          <React.Fragment key={$index}>
                            <span data-bb="char" style={{"display": "inline-block", "opacity": "0", "willChange": "transform,opacity"}}>
                              {c}
                            </span>
                          </React.Fragment>
                        ))}
                      </span>
                    </React.Fragment>
                  ))}
                </h1>
              </div>
              <div data-bb="track" style={{"position": "absolute", "left": "0", "right": "0", "top": "-20%", "height": "14%", "opacity": "0", "pointerEvents": "none", "background": "linear-gradient(180deg,transparent,rgba(242,242,242,.14) 40%,rgba(225,48,28,.18) 60%,transparent)", "mixBlendMode": "screen"}}></div>
              <div data-bb="flash" style={{"position": "absolute", "inset": "0", "background": "var(--paper)", "opacity": "0", "pointerEvents": "none"}}></div>
            </div>
          </div>
        </section>
        <section id="about" data-sec="" data-screen-label="02 About" style={{"position": "relative", "zIndex": "2", "marginTop": v.aboutPull, "background": "var(--ink)", "padding": "var(--section-y) var(--gutter)", "borderTop": "1px solid var(--line)", "boxShadow": "0 -40px 80px rgba(10,10,10,.6)"}}>
          <div style={{"maxWidth": "var(--max)", "margin": "0 auto", "display": "grid", "gap": "clamp(48px,7vw,104px)"}}>
            <header style={{"display": "grid", "gap": "18px"}}>
              <h2 data-split="" data-drift="" aria-label={v.H?.about?.text} style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(40px,7.5vw,120px)", "lineHeight": ".88", "letterSpacing": "-.045em", "textTransform": "uppercase", "textShadow": "var(--rgb)"}}>
                {(v.H?.about?.words || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span aria-hidden="true" style={{"display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": ".08em .05em .12em", "margin": "-.08em -.05em -.12em"}}>
                      <span data-hw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                        {w}
                      </span>
                    </span>
                  </React.Fragment>
                ))}
              </h2>
            </header>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,400px),1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "start"}}>
              <figure data-mask="" data-glitch="" style={{"margin": "0", "position": "relative", "aspectRatio": "4/5", "overflow": "hidden", "background": "var(--ink-2)"}}>
                <img data-par="" src={v.about?.image} alt={v.about?.imageAlt} loading="lazy" style={{"position": "absolute", "left": "0", "top": "-7%", "width": "100%", "height": "114%", "objectFit": "cover", "objectPosition": "40% 30%", "filter": "grayscale(1) contrast(1.2)", "display": "block"}} />
                <figcaption style={{"position": "absolute", "left": "14px", "bottom": "14px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "background": "var(--ink)", "padding": "7px 10px"}}>
                  {v.about?.caption}
                </figcaption>
              </figure>
              <div style={{"display": "grid", "gap": "clamp(28px,4vw,44px)"}}>
                <blockquote data-bb="quote" style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "700", "fontSize": "clamp(28px,3.6vw,56px)", "lineHeight": "1.04", "letterSpacing": "-.03em"}}>
                  {(v.quoteWords || []).map((w, $index) => (
                    <React.Fragment key={$index}>
                      {(w?.hl) ? (
                        <>
                          <span data-qhl="" style={{"display": "inline-block", "whiteSpace": "pre", "color": "var(--signal)"}}>
                            {w?.w}
                          </span>
                        </>
                      ) : null}
                      {(w?.plain) ? (
                        <>
                          <span data-qw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                            {w?.w}
                          </span>
                        </>
                      ) : null}
                    </React.Fragment>
                  ))}
                </blockquote>
                <div style={{"display": "grid", "gap": "18px", "maxWidth": "600px"}}>
                  {(v.P?.bio || []).map((p, $index) => (
                    <React.Fragment key={$index}>
                      <p data-lines="" style={{"margin": "0", "fontSize": "clamp(16px,1.25vw,19px)", "lineHeight": "1.6", "color": "var(--paper-dim)"}}>
                        {(p?.words || []).map((w, $index) => (
                          <React.Fragment key={$index}>
                            <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                              {w}
                            </span>
                          </React.Fragment>
                        ))}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,380px),1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "center", "borderTop": "1px solid var(--line)", "paddingTop": "clamp(36px,5vw,64px)"}}>
              <div style={{"display": "grid", "gap": "clamp(20px,2.4vw,32px)", "minWidth": "0", "maxWidth": "720px"}}>
                {(v.statementParas || []).map((p, $index) => (
                  <React.Fragment key={$index}>
                    <p data-lines="" style={{"margin": "0", "fontWeight": "500", "fontSize": "clamp(19px,1.9vw,28px)", "lineHeight": "1.5", "letterSpacing": "-.01em", "textWrap": "pretty"}}>
                      {(p?.words || []).map((w, $index) => (
                        <React.Fragment key={$index}>
                          {(w?.plain) ? (
                            <>
                              <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                                {w?.w}
                              </span>
                            </>
                          ) : null}
                          {(w?.marker) ? (
                            <>
                              <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre", "fontFamily": "'Permanent Marker',cursive", "fontWeight": "400", "fontSize": "1.3em", "lineHeight": "1", "letterSpacing": "0", "color": "var(--signal)", "transform": "rotate(-3deg)"}}>
                                {w?.w}
                              </span>
                            </>
                          ) : null}
                          {(w?.serif) ? (
                            <>
                              <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre", "fontFamily": "'Instrument Serif',serif", "fontStyle": "italic", "fontWeight": "400", "fontSize": "1.32em", "lineHeight": "1", "letterSpacing": "0"}}>
                                {w?.w}
                              </span>
                            </>
                          ) : null}
                          {(w?.neon) ? (
                            <>
                              <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre", "fontFamily": "'Monoton',cursive", "fontWeight": "400", "fontSize": "1.12em", "lineHeight": "1", "letterSpacing": ".02em", "textShadow": "0 0 14px rgba(242,242,242,.35)"}}>
                                {w?.w}
                              </span>
                            </>
                          ) : null}
                          {(w?.glitch) ? (
                            <>
                              <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre", "fontFamily": "'Rubik Glitch',sans-serif", "fontWeight": "400", "fontSize": "1.25em", "lineHeight": "1", "letterSpacing": "0", "color": "var(--signal)"}}>
                                {w?.w}
                              </span>
                            </>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </p>
                  </React.Fragment>
                ))}
                <span data-reveal="" style={{"fontFamily": "var(--f-mono)", "fontSize": "12px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--signal)"}}>
                  {v.about?.signature}
                </span>
              </div>
              <figure data-mask="" data-glitch="" style={{"margin": "0", "position": "relative", "aspectRatio": "4/5", "overflow": "hidden", "background": "var(--ink-2)"}}>
                <img data-par="" src={v.about?.statementImage} alt={v.about?.statementImageAlt} loading="lazy" decoding="async" style={{"position": "absolute", "left": "0", "top": "-7%", "width": "100%", "height": "114%", "objectFit": "cover", "filter": "grayscale(1) brightness(1.15) contrast(1.1)", "display": "block"}} />
              </figure>
            </div>
          </div>
        </section>
        <section aria-hidden="true" data-sec="" data-screen-label="Band" style={{"padding": "clamp(40px,6vw,88px) 0", "borderTop": "1px solid var(--line)", "overflow": "hidden", "display": "grid", "gap": "clamp(4px,1vw,12px)"}}>
          <div data-band-row="" style={{"display": "flex", "gap": ".4em", "whiteSpace": "nowrap", "width": "max-content", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(56px,11vw,190px)", "lineHeight": ".92", "letterSpacing": "-.045em", "textTransform": "uppercase", "textShadow": "var(--rgb)"}}>
            {(v.band || []).map((b, $index) => (
              <React.Fragment key={$index}>
                <span style={{"display": "flex", "alignItems": "center", "gap": ".4em"}}>
                  {b}
                </span>
              </React.Fragment>
            ))}
          </div>
          <div data-band-row="" style={{"display": "flex", "gap": ".4em", "whiteSpace": "nowrap", "width": "max-content", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(56px,11vw,190px)", "lineHeight": ".92", "letterSpacing": "-.045em", "textTransform": "uppercase", "color": "transparent", "WebkitTextStroke": "1.5px var(--paper)"}}>
            {(v.band || []).map((b, $index) => (
              <React.Fragment key={$index}>
                <span style={{"display": "flex", "alignItems": "center", "gap": ".4em"}}>
                  {b}
                </span>
              </React.Fragment>
            ))}
          </div>
        </section>
        <section id="dj" data-sec="" data-screen-label="03 The DJ" style={{"position": "relative", "overflow": "hidden", "background": "var(--ink)"}}>
          <div data-bb="djBg" style={{"position": "absolute", "inset": "0", "overflow": "hidden", "willChange": "clip-path"}}>
            <img data-bb="djImg" src={v.dj?.image} alt={v.dj?.imageAlt} loading="lazy" decoding="async" style={{"position": "absolute", "left": "0", "top": "-10%", "width": "100%", "height": "120%", "objectFit": "cover", "objectPosition": "50% 40%", "filter": "grayscale(1) contrast(1.15) brightness(.6)", "willChange": "transform"}} />
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 70% 60% at 50% 52%,rgba(10,10,10,.62) 0%,rgba(10,10,10,.3) 70%,rgba(10,10,10,.15) 100%)"}}></div>
            <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,#0A0A0A 0%,rgba(10,10,10,0) 24%,rgba(10,10,10,0) 68%,#0A0A0A 100%)"}}></div>
            <div style={{"position": "absolute", "inset": "0", "background": "var(--signal)", "mixBlendMode": "multiply", "opacity": ".14"}}></div>
          </div>
          <div style={{"position": "relative", "minHeight": "100svh", "display": "grid", "placeItems": "center", "padding": "var(--section-y) var(--gutter)"}}>
            <div data-bb="djFg" style={{"width": "100%", "maxWidth": "1040px", "display": "grid", "justifyItems": "center", "gap": "clamp(28px,4vw,48px)", "textAlign": "center"}}>
              <h2 data-split="" aria-label={v.H?.dj?.text} style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(40px,7.5vw,120px)", "lineHeight": ".88", "letterSpacing": "-.045em", "textTransform": "uppercase", "textShadow": "var(--rgb)"}}>
                {(v.H?.dj?.words || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span aria-hidden="true" style={{"display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": ".08em .05em .12em", "margin": "-.08em -.05em -.12em"}}>
                      <span data-hw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                        {w}
                      </span>
                    </span>
                  </React.Fragment>
                ))}
              </h2>
              <div data-reveal="" style={{"width": "100%", "minWidth": "0", "containerType": "inline-size"}}>
                <p data-bb="shout" aria-live="off" style={{"margin": "0 auto", "minHeight": "1.9em", "maxWidth": "100%", "overflowWrap": "anywhere", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(26px,7cqi,84px)", "lineHeight": ".92", "letterSpacing": "-.04em", "textTransform": "uppercase", "textWrap": "balance", "textShadow": "var(--rgb)", "color": "var(--signal)", "transformOrigin": "50% 50%", "willChange": "transform"}}>
                  {v.shoutFirst}
                </p>
              </div>
              <div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "10px"}}>
                {(v.dj?.genres || []).map((gn, $index) => (
                  <React.Fragment key={$index}>
                    <span className="dc2" data-tag="" data-glitch="" style={{"padding": "10px 16px", "border": "1px solid rgba(242,242,242,.28)", "background": "rgba(10,10,10,.4)", "fontFamily": "var(--f-mono)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "transition": "border-color .2s,color .2s"}}>
                      {gn}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <div data-bb="mix" style={{"position": "relative", "width": "min(100%,640px)", "textAlign": "left", "display": "grid", "gap": "18px", "padding": "clamp(18px,2vw,26px)", "background": "rgba(20,20,20,.72)", "WebkitBackdropFilter": "blur(12px)", "backdropFilter": "blur(12px)", "border": "1px solid var(--line)", "boxShadow": "inset 0 0 60px rgba(225,48,28,.09),0 0 40px rgba(225,48,28,.04)", "overflow": "hidden"}}>
                <div style={{"display": "flex", "alignItems": "center", "gap": "16px", "minWidth": "0"}}>
                  <button className="dc3" data-bb="mixPlay" data-magnetic="" data-glitch="" data-cursor={v.playCursor} onClick={v.togglePlay} aria-label={v.playAria} aria-pressed={v.playing} style={{"flex": "none", "width": "56px", "height": "56px", "padding": "0", "border": "0", "borderRadius": "50%", "background": "var(--signal)", "display": "grid", "placeItems": "center", "cursor": "pointer", "transition": "box-shadow .25s", "boxShadow": "0 0 14px rgba(255,65,40,.4)"}}>
                    <span data-mag-inner="" style={{"display": "grid", "placeItems": "center"}}>
                      {(v.notPlaying) ? (
                        <>
                          <span style={{"display": "block", "width": "0", "height": "0", "borderLeft": "15px solid var(--ink)", "borderTop": "9px solid transparent", "borderBottom": "9px solid transparent", "marginLeft": "4px"}}></span>
                        </>
                      ) : null}
                      {(v.playing) ? (
                        <>
                          <span style={{"display": "flex", "gap": "5px"}}>
                            <span style={{"width": "5px", "height": "18px", "background": "var(--ink)"}}></span>
                            <span style={{"width": "5px", "height": "18px", "background": "var(--ink)"}}></span>
                          </span>
                        </>
                      ) : null}
                    </span>
                  </button>
                  <div style={{"display": "grid", "gap": "4px", "minWidth": "0"}}>
                    <span style={{"fontFamily": "var(--f-display)", "fontWeight": "700", "fontSize": "clamp(14px,1.3vw,17px)", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis"}}>
                      {v.dj?.mix?.title}
                    </span>
                    <span style={{"fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "var(--mute)"}}>
                      {v.dj?.mix?.artists}{" · "}{v.dj?.mix?.year}
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" style={{"display": "flex", "alignItems": "center", "gap": "2px", "height": "56px"}}>
                  {(v.mixBars || []).map((b, $index) => (
                    <React.Fragment key={$index}>
                      <span data-bar="" style={{"flex": "1", "height": b?.h, "background": b?.c, "boxShadow": b?.glow}}></span>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "var(--mute)"}}>
                  <span data-bb="mixTime" style={{"fontVariantNumeric": "tabular-nums"}}>
                    {v.mixTimeLabel}
                  </span>
                  <a data-scramble="" href={v.dj?.mix?.url} target="_blank" rel="noopener" style={{"display": "flex", "alignItems": "center", "minHeight": "44px", "color": "var(--paper)"}}>
                    {v.dj?.mix?.cta}{" ↗"}
                  </a>
                </div>
                <span aria-hidden="true" style={{"position": "absolute", "inset": "0", "pointerEvents": "none", "background": "repeating-linear-gradient(to bottom,transparent 0 2px,rgba(0,0,0,.35) 2px 3px)"}}></span>
              </div>
            </div>
          </div>
          <div style={{"position": "relative", "maxWidth": "var(--max)", "margin": "0 auto", "padding": "0 var(--gutter)"}}>
            {(v.hasStats) ? (
              <>
                <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,220px),1fr))", "borderTop": "1px solid var(--line)"}}>
                  {(v.stats || []).map((st, $index) => (
                    <React.Fragment key={$index}>
                      <div data-reveal="" style={{"display": "grid", "gap": "10px", "padding": "clamp(28px,3.5vw,44px) 0", "borderBottom": "1px solid var(--line)"}}>
                        <span data-count="" data-num={st?.num} data-pre={st?.pre} data-suf={st?.suf} style={{"fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(48px,6.5vw,96px)", "lineHeight": ".9", "letterSpacing": "-.04em", "textShadow": "var(--rgb)", "fontVariantNumeric": "tabular-nums"}}>
                          {st?.value}
                        </span>
                        <span data-scramble="" style={{"fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--mute)"}}>
                          {st?.label}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>
        <section id="beatbox" data-sec="" data-screen-label="04 The Beatboxer" style={{"padding": "var(--section-y) 0"}}>
          <div style={{"maxWidth": "var(--max)", "margin": "0 auto", "padding": "0 var(--gutter)"}}></div>
          <div data-bb="bbStage" style={{"position": "relative", "height": v.bbStageH}}>
            <div style={{"position": v.bbSticky, "top": "0", "height": v.bbInnerH, "overflow": "hidden", "display": "grid", "placeItems": "center", "gap": v.bbGap, "padding": v.bbPad}}>
              <h2 data-bb="bbHead" data-split="" aria-label={v.H?.beatbox?.text} style={{"position": v.bbHeadPos, "left": "0", "right": "0", "top": v.bbHeadTop, "transform": v.bbHeadTf, "margin": "0", "padding": "0 var(--gutter)", "textAlign": "center", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(40px,10.5vw,200px)", "lineHeight": ".86", "letterSpacing": "-.045em", "textTransform": "uppercase", "textShadow": "var(--rgb)"}}>
                {(v.H?.beatbox?.words || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span aria-hidden="true" style={{"display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": ".08em .05em .12em", "margin": "-.08em -.05em -.12em"}}>
                      <span data-hw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                        {w}
                      </span>
                    </span>
                  </React.Fragment>
                ))}
              </h2>
              <button data-bb="bbCard" data-glitch="" data-cursor="Play" onClick={v.openFeatured} aria-label="Play featured beatbox video" style={{"position": "relative", "display": "block", "width": "min(calc(100vw - 2 * var(--gutter)),calc((100vh - 140px) * 16 / 9),1328px)", "aspectRatio": "16/9", "padding": "0", "border": "0", "background": "var(--ink-2)", "overflow": "hidden", "cursor": "pointer", "willChange": "transform"}}>
                <img src={v.beatbox?.featured?.thumb} alt="" loading="lazy" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "50% 35%", "filter": "grayscale(1) contrast(1.25) brightness(.75)"}} />
                <span className="dc4" style={{"position": "absolute", "inset": "0", "background": "var(--signal)", "mixBlendMode": "multiply", "opacity": "0", "transition": "opacity .2s ease"}} data-hov=""></span>
                <span style={{"position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "width": "clamp(72px,8vw,112px)", "height": "clamp(72px,8vw,112px)", "borderRadius": "50%", "border": "1px solid var(--paper)", "display": "grid", "placeItems": "center", "pointerEvents": "none", "boxShadow": "0 0 24px rgba(242,242,242,.15)"}}>
                  <span style={{"width": "0", "height": "0", "borderLeft": "20px solid var(--paper)", "borderTop": "12px solid transparent", "borderBottom": "12px solid transparent", "marginLeft": "6px"}}></span>
                </span>
                <span style={{"position": "absolute", "left": "clamp(14px,2vw,28px)", "bottom": "clamp(14px,2vw,28px)", "display": "flex", "alignItems": "center", "gap": "10px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "pointerEvents": "none"}}>
                  {v.beatbox?.featured?.title}
                </span>
              </button>
            </div>
          </div>
          <div style={{"maxWidth": "var(--max)", "margin": "clamp(56px,8vw,120px) auto 0", "padding": "0 var(--gutter)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,420px),1fr))", "gap": "clamp(40px,7vw,112px)", "alignItems": "start"}}></div>
          <div style={{"maxWidth": "var(--max)", "margin": "clamp(56px,7vw,104px) auto 0", "padding": "0 var(--gutter)", "display": "grid", "gap": "24px"}}></div>
          <div data-bb="reel" data-reveal="" onPointerEnter={v.reelHold} onPointerLeave={v.reelGo} onFocus={v.reelHold} onBlur={v.reelGo} style={{"position": "relative", "marginTop": "24px", "overflow": "hidden", "borderTop": "1px solid var(--line)", "borderBottom": "1px solid var(--line)", "padding": "14px 0"}}>
            <div data-bb="reelTrack" style={{"display": "flex", "gap": "clamp(10px,1.4vw,18px)", "width": "max-content", "willChange": "transform"}}>
              {(v.reelClips || []).map((cl, $index) => (
                <React.Fragment key={$index}>
                  <button data-glitch="" data-cursor="Play" onClick={cl?.open} aria-label={cl?.aria} aria-hidden={cl?.dupe} tabIndex={cl?.tab} style={{"position": "relative", "flex": "none", "display": "block", "width": "clamp(140px,15vw,210px)", "aspectRatio": "9/16", "padding": "0", "border": "0", "background": "var(--ink-2)", "overflow": "hidden", "cursor": "pointer"}}>
                    <img src={cl?.thumb} alt="" loading="lazy" decoding="async" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "filter": "grayscale(1) contrast(1.25) brightness(.7)"}} />
                    <span className="dc5" style={{"position": "absolute", "inset": "0", "background": "var(--signal)", "mixBlendMode": "multiply", "opacity": "0", "transition": "opacity .2s ease"}} data-hov=""></span>
                    <span style={{"position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "width": "52px", "height": "52px", "borderRadius": "50%", "border": "1px solid var(--paper)", "display": "grid", "placeItems": "center", "pointerEvents": "none"}}>
                      <span style={{"width": "0", "height": "0", "borderLeft": "12px solid var(--paper)", "borderTop": "7px solid transparent", "borderBottom": "7px solid transparent", "marginLeft": "4px"}}></span>
                    </span>
                    <span style={{"position": "absolute", "left": "10px", "bottom": "10px", "fontFamily": "var(--f-mono)", "fontSize": "10px", "letterSpacing": ".16em", "textTransform": "uppercase", "pointerEvents": "none"}}>
                      {cl?.title}
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <span aria-hidden="true" style={{"position": "absolute", "inset": "0", "pointerEvents": "none", "background": "linear-gradient(90deg,#0A0A0A 0%,rgba(10,10,10,0) 8%,rgba(10,10,10,0) 92%,#0A0A0A 100%)"}}></span>
          </div>
        </section>
        <section id="gallery" data-sec="" data-screen-label="05 Gallery" style={{"padding": "var(--section-y) var(--gutter)", "borderTop": "1px solid var(--line)"}}>
          <div style={{"maxWidth": "var(--max)", "margin": "0 auto", "display": "grid", "gap": "clamp(48px,6vw,88px)"}}>
            <header style={{"display": "grid", "gap": "18px"}}>
              <h2 data-split="" data-drift="" aria-label={v.H?.gallery?.text} style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(40px,7.5vw,120px)", "lineHeight": ".88", "letterSpacing": "-.045em", "textTransform": "uppercase", "textShadow": "var(--rgb)"}}>
                {(v.H?.gallery?.words || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span aria-hidden="true" style={{"display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": ".08em .05em .12em", "margin": "-.08em -.05em -.12em"}}>
                      <span data-hw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                        {w}
                      </span>
                    </span>
                  </React.Fragment>
                ))}
              </h2>
            </header>
            <div data-bb="gal" style={{"display": "grid", "justifyItems": "center"}}>
              <button data-gitem="" data-bb="folder" data-cursor="Open" onClick={v.openFolder} onPointerEnter={v.folderFan} onPointerLeave={v.folderUnfan} onFocus={v.folderFan} onBlur={v.folderUnfan} aria-label={v.folderAria} style={{"position": "relative", "display": "grid", "justifyItems": "center", "gap": "clamp(20px,3vw,32px)", "width": "min(100%,520px)", "margin": "0", "padding": "0", "border": "0", "background": "none", "color": "var(--paper)", "cursor": "pointer"}}>
                <span style={{"position": "relative", "display": "block", "width": "100%", "aspectRatio": "4/3"}}>
                  {(v.folderStack || []).map((ph, $index) => (
                    <React.Fragment key={$index}>
                      <span data-fcard="" style={{"position": "absolute", "inset": "0", "display": "block", "overflow": "hidden", "background": "var(--ink-2)", "border": "1px solid var(--line)", "boxShadow": "0 24px 60px rgba(0,0,0,.55)", "transform": `rotate(${ph?.rot ?? ''}) translate(${ph?.dx ?? ''},${ph?.dy ?? ''})`, "transformOrigin": "50% 100%", "zIndex": ph?.z}}>
                        <img src={ph?.src} alt="" loading="lazy" decoding="async" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "50% 30%", "filter": "grayscale(1) brightness(1.15) contrast(1.05)"}} />
                      </span>
                    </React.Fragment>
                  ))}
                </span>
                <span style={{"display": "flex", "alignItems": "center", "gap": "14px", "fontFamily": "var(--f-mono)", "fontSize": "12px", "letterSpacing": ".18em", "textTransform": "uppercase"}}>
                  <span style={{"color": "var(--signal)"}}>
                    {"Open folder"}
                  </span>
                  <span style={{"width": "28px", "height": "1px", "background": "var(--line)"}}></span>
                  <span style={{"color": "var(--paper-dim)", "fontVariantNumeric": "tabular-nums"}}>
                    {v.galCount}{" photos"}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <section id="finale" data-sec="" data-bb="finale" data-screen-label="06 Finale" style={{"position": "relative", "height": v.finaleH, "background": "var(--ink)", "borderTop": "1px solid var(--line)"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100svh", "overflow": "hidden"}}>
            <div data-bb="finScreen" style={{"position": "absolute", "inset": "0", "overflow": "hidden", "willChange": "clip-path"}}>
              <img data-bb="finImg" src={v.finale?.image} alt={v.finale?.imageAlt} loading="lazy" decoding="async" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "62% 38%", "filter": "grayscale(1) contrast(1.25) brightness(.9)", "willChange": "transform"}} />
              <div data-bb="finTint" style={{"position": "absolute", "inset": "0", "background": "var(--signal)", "mixBlendMode": "multiply", "opacity": "0"}}></div>
              <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(90deg,rgba(10,10,10,.7) 0%,rgba(10,10,10,.08) 55%,rgba(10,10,10,0)),linear-gradient(0deg,rgba(10,10,10,.85) 0%,rgba(10,10,10,0) 50%)"}}></div>
            </div>
            <div style={{"position": "absolute", "left": "0", "right": "0", "bottom": "clamp(64px,12vh,140px)", "padding": "0 var(--gutter)", "display": "grid", "gap": "16px"}}>
              <h2 data-bb="finText" aria-label={v.finale?.text} style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(44px,8.6vw,164px)", "lineHeight": ".88", "letterSpacing": "-.045em", "textTransform": "uppercase", "maxWidth": "11ch", "textShadow": "var(--rgb)"}}>
                {(v.finaleWords || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span data-fw="" aria-hidden="true" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                      {w}
                    </span>
                  </React.Fragment>
                ))}
              </h2>
            </div>
            <div data-bb="finFlash" aria-hidden="true" style={{"position": "absolute", "inset": "0", "background": "var(--paper)", "opacity": "0", "pointerEvents": "none"}}></div>
          </div>
        </section>
      </main>
      <footer data-bb="foot" data-sec="" data-screen-label="06 Footer" style={{"position": "relative", "zIndex": "2", "marginTop": v.footPull, "background": "var(--ink)", "padding": "clamp(72px,10vw,140px) var(--gutter) 96px", "borderTop": "1px solid var(--line)", "overflow": "hidden", "boxShadow": "0 -40px 80px rgba(10,10,10,.6)"}}>
        <div style={{"maxWidth": "var(--max)", "margin": "0 auto", "display": "grid", "gap": "clamp(56px,8vw,120px)"}}>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "clamp(24px,4vw,64px)"}}>
            <span data-reveal="" style={{"flex": "1 1 200px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--signal)"}}>
              {v.footer?.noteLabel}
            </span>
            <div style={{"flex": "2.2 1 min(100%,480px)", "display": "grid", "gap": "18px", "minWidth": "0"}}>
              <p data-lines="" style={{"margin": "0", "fontFamily": "var(--f-display)", "fontWeight": "400", "fontSize": "clamp(20px,2.2vw,32px)", "lineHeight": "1.3", "letterSpacing": "-.02em", "textWrap": "pretty"}}>
                {(v.P?.note?.words || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    <span data-lw="" style={{"display": "inline-block", "whiteSpace": "pre"}}>
                      {w}
                    </span>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "borderTop": "1px solid var(--line)"}}>
            {(v.socials || []).map((s, $index) => (
              <React.Fragment key={$index}>
                <li data-reveal="" style={{"borderBottom": "1px solid var(--line)"}}>
                  <a data-glitch="" href={s?.url} target="_blank" rel="noopener" style={{"display": "grid", "gridTemplateColumns": "minmax(0,1fr) auto", "alignItems": "center", "gap": "16px", "padding": "clamp(18px,2.2vw,28px) 4px"}}>
                    <span style={{"display": "grid", "gap": "6px", "minWidth": "0"}}>
                      <span style={{"fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(20px,2.2vw,30px)", "lineHeight": "1", "letterSpacing": "-.03em", "textTransform": "uppercase"}}>
                        {s?.label}
                      </span>
                      <span data-scramble="" style={{"fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".12em", "color": "var(--mute)", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>
                        {s?.handle}
                      </span>
                    </span>
                    <span style={{"fontFamily": "var(--f-mono)", "fontSize": "18px"}}>
                      {"↗"}
                    </span>
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div aria-label={v.stageName} role="img" style={{"overflow": "hidden", "textAlign": "center", "whiteSpace": "nowrap", "fontFamily": "var(--f-display)", "fontWeight": "900", "fontSize": "clamp(22px,6.4vw,110px)", "lineHeight": ".86", "letterSpacing": "-.05em", "textShadow": "var(--rgb)", "padding": ".04em 0 .08em"}}>
            {(v.footerChars || []).map((c, $index) => (
              <React.Fragment key={$index}>
                <span data-fchar="" aria-hidden="true" style={{"display": "inline-block"}}>
                  {c}
                </span>
              </React.Fragment>
            ))}
          </div>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px 32px", "flexWrap": "wrap", "paddingTop": "24px", "borderTop": "1px solid var(--line)", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "var(--mute)"}}>
            <span>
              {v.footer?.copyright}
            </span>
            <a data-magnetic="" href="#top" style={{"display": "flex", "alignItems": "center", "minHeight": "44px", "padding": "0 4px", "color": "var(--paper-dim)"}}>
              <span data-mag-inner="" data-scramble="" style={{"display": "inline-block"}}>
                {"Back to top ↑"}
              </span>
            </a>
          </div>
        </div>
      </footer>
      {(v.ringOpen) ? (
        <>
          <div data-bb="ringWrap" aria-hidden="true" onClick={v.closeRingClick} style={{"position": "fixed", "inset": "0", "zIndex": "104", "background": "rgba(10,10,10,.94)", "display": "grid", "placeItems": "center", "perspective": "1100px", "overflow": "hidden", "opacity": "0"}}>
            <div data-bb="ring" style={{"position": "relative", "width": v.ringCardW, "aspectRatio": "9/16", "transformStyle": "preserve-3d", "willChange": "transform"}}>
              {(v.ringClips || []).map((rc, $index) => (
                <React.Fragment key={$index}>
                  <div style={{"position": "absolute", "inset": "0", "transform": rc?.tf, "backfaceVisibility": "hidden", "background": "var(--ink-2)", "overflow": "hidden", "outline": `1px solid ${rc?.edge ?? ''}`, "boxShadow": rc?.glow}}>
                    <img src={rc?.thumb} alt="" style={{"width": "100%", "height": "100%", "objectFit": "cover", "filter": "grayscale(1) contrast(1.25) brightness(.75)", "display": "block"}} />
                    <span style={{"position": "absolute", "left": "8px", "bottom": "8px", "fontFamily": "var(--f-mono)", "fontSize": "10px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "var(--paper)"}}>
                      {rc?.title}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {(v.lbOpen) ? (
        <>
          <div data-bb="lb" role="dialog" aria-modal="true" aria-label={v.lb?.title} onClick={v.closeLb} style={{"position": "fixed", "inset": "0", "zIndex": "105", "background": "rgba(10,10,10,.97)", "display": "grid", "gridTemplateRows": "auto minmax(0,1fr) auto", "padding": "clamp(14px,2.5vw,32px)"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase"}}>
              <span style={{"color": "var(--signal)"}}>
                {v.lb?.counter}
              </span>
              <button className="dc6" data-glitch="" onClick={v.closeLb} style={{"minHeight": "48px", "padding": "0 4px", "background": "none", "border": "0", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase"}}>
                {"Close ✕"}
              </button>
            </div>
            <div data-bb="lbbody" style={{"display": "grid", "placeItems": "center", "minHeight": "0", "overflow": "hidden", "padding": "12px 0"}}>
              {(v.lb?.isImage) ? (
                <>
                  <img onClick={v.stop} src={v.lb?.imgSrc} alt={v.lb?.alt} style={{"width": "auto", "height": "auto", "maxWidth": "min(100%,calc(100vw - 2 * clamp(14px,2.5vw,32px)))", "maxHeight": "calc(100svh - 2 * clamp(14px,2.5vw,32px) - 150px)", "objectFit": "contain", "filter": "grayscale(1) brightness(1.2) contrast(1.05)", "display": "block"}} />
                </>
              ) : null}
              {(v.lb?.isEmbed) ? (
                <>
                  <iframe onClick={v.stop} loading="lazy" src={v.lb?.embed} title={v.lb?.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen={true} style={{"width": v.lb?.frameW, "aspectRatio": v.lb?.ratio, "border": "0", "background": "#000", "filter": "grayscale(1) contrast(1.15)"}}></iframe>
                </>
              ) : null}
              {(v.lb?.isPlaceholder) ? (
                <>
                  <div onClick={v.stop} style={{"position": "relative", "width": "min(100%,calc((100vh - 200px)*16/9))", "aspectRatio": "16/9", "overflow": "hidden", "background": "var(--ink-2)", "display": "grid", "placeItems": "center"}}>
                    <img src={v.lb?.src} alt="" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "filter": "grayscale(1) contrast(1.2) brightness(.35)"}} />
                    <div style={{"position": "relative", "display": "grid", "gap": "16px", "justifyItems": "center", "textAlign": "center", "padding": "24px"}}>
                      <span style={{"fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--signal)"}}>
                        {"No signal · placeholder"}
                      </span>
                      <span style={{"fontFamily": "var(--f-display)", "fontWeight": "700", "fontSize": "clamp(18px,2.4vw,32px)", "lineHeight": "1.15", "maxWidth": "640px"}}>
                        {v.lb?.title}
                      </span>
                      <a className="dc7" href={v.lb?.link} target="_blank" rel="noopener" style={{"padding": "14px 22px", "border": "1px solid var(--paper)", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase"}}>
                        {"Watch on "}{v.lb?.platform}{" ↗"}
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "minHeight": "48px", "paddingTop": "8px", "borderTop": "1px solid var(--line)"}}>
              <span style={{"flex": "1", "minWidth": "0", "fontSize": "clamp(14px,1.2vw,16px)", "lineHeight": "1.4", "color": "var(--paper)", "textWrap": "pretty"}}>
                {v.lb?.caption}
              </span>
              {(v.lb?.isImage) ? (
                <>
                  <div style={{"display": "flex", "gap": "8px"}}>
                    <button className="dc8" data-glitch="" onClick={v.prevLb} aria-label="Previous photo" style={{"width": "48px", "height": "48px", "background": "none", "border": "1px solid var(--line)", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "16px"}}>
                      {"←"}
                    </button>
                    <button className="dc9" data-glitch="" onClick={v.nextLb} aria-label="Next photo" style={{"width": "48px", "height": "48px", "background": "none", "border": "1px solid var(--line)", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "16px"}}>
                      {"→"}
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
      <div data-bb="cursor" aria-hidden="true" style={{"position": "fixed", "left": "0", "top": "0", "zIndex": "99", "width": "12px", "height": "12px", "margin": "-6px 0 0 -6px", "borderRadius": "50%", "background": "#F2F2F2", "pointerEvents": "none", "opacity": "0", "willChange": "transform"}}></div>
      <div data-bb="cursorLabel" aria-hidden="true" style={{"position": "fixed", "left": "0", "top": "0", "zIndex": "99", "pointerEvents": "none", "opacity": "0", "fontFamily": "var(--f-mono)", "fontSize": "10px", "fontWeight": "500", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "#0A0A0A", "whiteSpace": "nowrap"}}></div>
      <div data-bb="mascot" style={{"position": "fixed", "top": "clamp(6px,1.4vh,14px)", "right": "var(--gutter)", "zIndex": "95", "opacity": "0", "pointerEvents": "none", "willChange": "transform"}}>
        <div data-bb="bubble" role="status" aria-live="polite" style={{"position": "absolute", "top": "calc(100% + 10px)", "right": "0", "opacity": "0", "whiteSpace": "nowrap", "fontFamily": "var(--f-mono)", "fontSize": "11px", "fontWeight": "500", "letterSpacing": ".12em", "textTransform": "uppercase", "background": "var(--paper)", "color": "var(--ink)", "padding": "7px 10px", "boxShadow": "3px 3px 0 var(--signal)"}}></div>
        <div data-bb="mascotBody" style={{"willChange": "transform"}}>
          <button data-bb="mascotBtn" data-cursor={v.mascotCursor} onClick={v.toggleMenu} onPointerDown={v.mascotDown} onPointerUp={v.mascotUp} onPointerLeave={v.mascotUp} onPointerCancel={v.mascotUp} onContextMenu={v.noCtx} aria-label={v.menuAria} aria-expanded={v.menuOpen} aria-haspopup="dialog" style={{"pointerEvents": "auto", "display": "block", "minWidth": "44px", "minHeight": "44px", "padding": "0", "border": "0", "background": "none", "cursor": "pointer"}}>
            <span data-bb="mascotImg" style={{"position": "relative", "display": "block", "height": "clamp(52px,7.5vh,76px)", "aspectRatio": "230/365", "filter": "drop-shadow(0 0 8px rgba(225,48,28,.25))"}}>
              {(v.mascot?.frameList || []).map((fr, $index) => (
                <React.Fragment key={$index}>
                  <img data-frame={fr?.key} src={fr?.src} alt="" draggable="false" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "imageRendering": "pixelated", "visibility": fr?.vis}} />
                </React.Fragment>
              ))}
            </span>
          </button>
        </div>
        <span data-bb="mascotShadow" aria-hidden="true" style={{"position": "absolute", "left": "12%", "right": "12%", "bottom": "-4px", "height": "6px", "borderRadius": "50%", "background": "rgba(0,0,0,.6)", "filter": "blur(3px)"}}></span>
      </div>
      {(v.miniOn) ? (
        <>
          <div data-bb="mini" style={{"position": "fixed", "right": "max(clamp(20px,2.6vw,36px),env(safe-area-inset-right))", "bottom": "max(clamp(20px,3.2vh,36px),env(safe-area-inset-bottom))", "zIndex": "101", "width": "44px", "height": "44px", "pointerEvents": "none"}}>
            <div data-bb="fab" style={{"position": "absolute", "inset": "0", "willChange": "transform"}}>
              <button className="dc10" data-glitch="" onClick={v.togglePlay} aria-label={v.playAria} aria-pressed={v.playing} style={{"position": "absolute", "inset": "0", "width": "44px", "height": "44px", "borderRadius": "50%", "border": "0", "padding": "0", "background": "var(--signal)", "display": "grid", "placeItems": "center", "cursor": "pointer", "pointerEvents": "auto", "boxShadow": "0 0 10px rgba(255,65,40,.35)", "transition": "box-shadow .25s"}}>
                {(v.notPlaying) ? (
                  <>
                    <span style={{"display": "block", "width": "0", "height": "0", "borderLeft": "11px solid var(--ink)", "borderTop": "7px solid transparent", "borderBottom": "7px solid transparent", "marginLeft": "3px"}}></span>
                  </>
                ) : null}
                {(v.playing) ? (
                  <>
                    <span style={{"display": "flex", "gap": "4px"}}>
                      <span style={{"width": "4px", "height": "13px", "background": "var(--ink)"}}></span>
                      <span style={{"width": "4px", "height": "13px", "background": "var(--ink)"}}></span>
                    </span>
                  </>
                ) : null}
              </button>
              <svg aria-hidden="true" viewBox="0 0 64 64" style={{"position": "absolute", "left": "-4px", "top": "-4px", "width": "52px", "height": "52px", "transform": "rotate(-90deg)", "pointerEvents": "none", "overflow": "visible"}}>
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(242,242,242,.14)" strokeWidth="2"></circle>
                <circle data-bb="fabRing" cx="32" cy="32" r="30" fill="none" stroke="#14A3A8" strokeWidth="2" strokeDasharray="188.5" strokeDashoffset="188.5" style={{"filter": "drop-shadow(0 0 4px rgba(20,163,168,.8))"}}></circle>
              </svg>
            </div>
          </div>
        </>
      ) : null}
      {(v.bkOpen) ? (
        <>
          <div data-bb="bk" role="dialog" aria-modal="true" aria-label="Beat back with Lil Benji" style={{"position": "fixed", "inset": "0", "zIndex": "97", "display": "grid", "gridTemplateRows": "auto minmax(0,1fr) auto", "gap": "clamp(12px,2vh,24px)", "padding": "clamp(16px,3vh,36px) var(--gutter)", "background": "rgba(10,10,10,.97)", "color": "var(--paper)", "touchAction": "manipulation", "userSelect": "none", "WebkitUserSelect": "none"}}>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "16px", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase"}}>
              <span style={{"color": "var(--signal)"}}>
                {v.bk?.title}
              </span>
              <span style={{"display": "flex", "gap": "clamp(12px,2.4vw,28px)", "color": "var(--mute)", "fontVariantNumeric": "tabular-nums"}}>
                <span>
                  {"Round "}
                  <span style={{"color": "var(--paper)"}}>
                    {v.bk?.round}
                  </span>
                </span>
                <span>
                  {"Best "}
                  <span style={{"color": "var(--paper)"}}>
                    {v.bk?.best}
                  </span>
                </span>
              </span>
              <button className="dc11" data-glitch="" onClick={v.closeBk} style={{"minHeight": "44px", "padding": "0 4px", "background": "none", "border": "0", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--paper)"}}>
                {"Exit ✕"}
              </button>
            </div>
            <div style={{"display": "grid", "placeItems": "center", "minHeight": "0"}}>
              <div style={{"position": "relative", "height": "min(100%,560px)", "maxHeight": "calc(100vw * 365 / 230 * .7)", "aspectRatio": "230/365"}}>
                <div data-bb="bkBody" style={{"position": "absolute", "inset": "0", "transformOrigin": "50% 100%"}}>
                  <img src={v.mascot?.frames?.smile} alt="" draggable="false" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "imageRendering": "pixelated", "filter": "drop-shadow(0 0 28px rgba(225,48,28,.28))"}} />
                </div>
                <span data-bb="bkWave" aria-hidden="true" style={{"position": "absolute", "left": "46%", "top": "32%", "width": "24%", "aspectRatio": "1", "translate": "-50% -50%", "border": "3px solid var(--signal)", "borderRadius": "50%", "opacity": "0", "pointerEvents": "none"}}></span>
                <span data-bb="bkWave2" aria-hidden="true" style={{"position": "absolute", "left": "46%", "top": "32%", "width": "24%", "aspectRatio": "1", "translate": "-50% -50%", "border": "2px solid var(--paper)", "borderRadius": "50%", "opacity": "0", "pointerEvents": "none"}}></span>
                <span data-bb="bkWord" aria-hidden="true" style={{"position": "absolute", "left": "46%", "top": "24%", "opacity": "0", "pointerEvents": "none", "whiteSpace": "nowrap", "fontFamily": "var(--f-display)", "fontWeight": "800", "fontSize": "clamp(22px,4vh,40px)", "letterSpacing": "-.01em", "textTransform": "uppercase", "color": "var(--signal)", "textShadow": "-2px 0 rgba(242,242,242,.35)"}}></span>
                {(v.bkZones || []).map((z, $index) => (
                  <React.Fragment key={$index}>
                    <button data-bkzone={z?.i} onPointerDown={z?.hit} tabIndex="-1" aria-hidden="true" style={{"position": "absolute", "left": "-10%", "right": "-10%", "top": z?.top, "height": z?.h, "padding": "0", "border": "0", "background": "rgba(225,48,28,0)", "cursor": "pointer"}}></button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{"display": "grid", "justifyItems": "center", "gap": "14px"}}>
              <p data-bb="bkMsg" role="status" aria-live="polite" style={{"margin": "0", "minHeight": "1.4em", "textAlign": "center", "fontFamily": "var(--f-mono)", "fontSize": "12px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "var(--paper-dim)", "textWrap": "pretty"}}>
                {v.bk?.msg}
              </p>
              <div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "8px"}}>
                {(v.bkZones || []).map((z, $index) => (
                  <React.Fragment key={$index}>
                    <button data-bkkey={z?.i} onClick={z?.click} aria-label={z?.aria} style={{"display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "padding": "0 14px", "background": "#141414", "border": "1px solid var(--line)", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "var(--paper)"}}>
                      <span style={{"color": "var(--mute)"}}>
                        {z?.key}
                      </span>
                      <span>
                        {z?.label}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
              {(v.bkOver) ? (
                <>
                  <button data-glitch="" onClick={v.againBk} style={{"minHeight": "44px", "padding": "0 22px", "background": "var(--signal)", "border": "0", "cursor": "pointer", "fontFamily": "var(--f-mono)", "fontSize": "11px", "fontWeight": "500", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "var(--ink)"}}>
                    {"Go again"}
                  </button>
                </>
              ) : null}
            </div>
            <span aria-hidden="true" style={{"position": "absolute", "inset": "0", "pointerEvents": "none", "background": "repeating-linear-gradient(to bottom,transparent 0 2px,rgba(0,0,0,.35) 2px 3px)"}}></span>
          </div>
        </>
      ) : null}
      <div data-bb="hitFlash" aria-hidden="true" style={{"position": "fixed", "inset": "0", "zIndex": "99", "pointerEvents": "none", "opacity": "0", "background": "linear-gradient(90deg,rgba(225,48,28,.55),rgba(242,242,242,.18) 50%,rgba(225,48,28,.55))", "mixBlendMode": "screen"}}></div>
      <div aria-hidden="true" style={{"pointerEvents": "none", "position": "fixed", "inset": "0", "zIndex": "210"}}>
        <div data-bb="scan" style={{"position": "absolute", "inset": "0", "background": "repeating-linear-gradient(to bottom,rgba(0,0,0,0) 0 2px,rgba(0,0,0,.95) 2px 3px)", "opacity": v.scanOpacity}}></div>
        <div style={{"position": "absolute", "inset": "0", "background": "repeating-linear-gradient(to right,rgba(225,48,28,.05) 0 1px,rgba(242,242,242,.03) 1px 2px,transparent 2px 3px)", "opacity": v.grille}}></div>
        {(v.glOn) ? (
          <>
            <canvas data-bb="crtgl" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block"}}></canvas>
          </>
        ) : null}
        {(v.cssFallback) ? (
          <>
            <div data-bb="grain" style={{"position": "absolute", "inset": "-100%", "opacity": v.grainOpacity, "mixBlendMode": "overlay", "backgroundImage": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"}}></div>
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(130% 100% at 50% 50%,transparent 50%,rgba(0,0,0,.55) 85%,rgba(0,0,0,.9) 100%)", "opacity": v.vignetteOpacity}}></div>
            <div style={{"position": "absolute", "inset": "0", "borderRadius": "clamp(14px,2.2vw,30px)", "boxShadow": "0 0 0 80px #000,inset 0 0 24px rgba(0,0,0,.8)", "opacity": v.crt}}></div>
          </>
        ) : null}
      </div>
    </div>
    </>
  );
}
