const ticker = [
  ["AEM", "+36.2%", "up"],
  ["DBS", "+10.4%", "up"],
  ["DFI", "+48.0%", "up"],
  ["IFAST", "+48.1%", "up"],
  ["SATS", "+20.2%", "up"],
  ["SCI", "+25.0%", "up"],
  ["CSE", "+32.7%", "up"],
  ["ITSL", "+51.9%", "up"],
  ["MPM", "+50.0%", "up"],
  ["PAN", "+33.3%", "up"],
  ["GENS", "-19.9%", "down"],
  ["STM", "-7.4%", "down"],
];

const themes = [
  {
    idx: "01",
    title: "Living with higher inflation",
    body: "Elevated energy prices are pushing rate-hike odds back onto the table. Banks with cheap deposit funding stand to benefit most as margins recover.",
  },
  {
    idx: "02",
    title: "AI capex finds local beneficiaries",
    body: "Hyperscaler spending is no longer a distant tailwind — it is showing up directly in order books for data-centre infrastructure and semiconductor testing names.",
  },
  {
    idx: "03",
    title: "Earnings that don't flinch",
    body: "A shortlist of names with cost pass-through, new business lines, market-share gains, or margin expansion working in their favour regardless of the macro noise.",
  },
];

const largeCaps = [
  { name: "AEM Holdings", ticker: "AEM SP", price: "10.90", target: "14.79", upside: "+36%" },
  { name: "DBS Group", ticker: "DBS SP", price: "66.29", target: "69.90", upside: "+10%" },
  { name: "DFI Retail Group", ticker: "DFI SP", price: "3.82", target: "5.50", upside: "+48%" },
  { name: "iFAST Corporation", ticker: "IFAST SP", price: "9.15", target: "13.45", upside: "+48%" },
  { name: "SATS", ticker: "SATS SP", price: "4.39", target: "5.20", upside: "+20%" },
  { name: "Sembcorp Industries", ticker: "SCI SP", price: "6.36", target: "7.68", upside: "+25%" },
];

const smallCaps = [
  { name: "CSE Global", ticker: "CSE SP", price: "1.53", target: "2.00", upside: "+33%" },
  { name: "Info-Tech Systems", ticker: "ITSL SP", price: "0.92", target: "1.35", upside: "+52%" },
  { name: "Marco Polo Marine", ticker: "MPM SP", price: "0.14", target: "0.21", upside: "+50%" },
  { name: "Pan-United Corp", ticker: "PAN SP", price: "1.43", target: "1.85", upside: "+33%" },
];

const sectors = [
  { name: "Financials", call: "Overweight", cls: "call-ow" },
  { name: "Construction", call: "Overweight", cls: "call-ow" },
  { name: "Healthcare", call: "Overweight", cls: "call-ow" },
  { name: "Internet services", call: "Overweight", cls: "call-ow" },
  { name: "Property", call: "Overweight", cls: "call-ow" },
  { name: "REITs", call: "Overweight", cls: "call-ow" },
  { name: "Technology", call: "Overweight", cls: "call-ow" },
  { name: "Telcos", call: "Overweight", cls: "call-ow" },
  { name: "Land transport", call: "Overweight", cls: "call-ow" },
  { name: "Agribusiness", call: "Neutral", cls: "call-n" },
  { name: "Capital goods", call: "Neutral", cls: "call-n" },
  { name: "Consumer", call: "Neutral", cls: "call-n" },
  { name: "Gaming", call: "Neutral", cls: "call-n" },
  { name: "Air transport", call: "Neutral", cls: "call-n" },
];

export default function Page() {
  return (
    <>
      <div className="ticker-outer">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>
              <b>{t[0]}</b> <span className={t[2] as string}>{t[1]}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <header className="hero">
          <div className="eyebrow">Singapore Equities · 2H26 Outlook</div>
          <h1>
            Consequences of a <em>liquidity slush</em>
          </h1>
          <p className="lede">
            Cash is flooding the Singapore market faster than conviction is returning. Large caps
            are absorbing the flow as a beta trade while investors wait for clearer skies on the
            Middle East crisis — setting up a rotation opportunity once 1H26 earnings clarify the
            picture.
          </p>
          <div className="statline">
            <div className="stat">
              <div className="num">520</div>
              <div className="lbl">End-2026F index target (pts)</div>
            </div>
            <div className="stat">
              <div className="num">17x</div>
              <div className="lbl">Forward P/E underpinning target</div>
            </div>
            <div className="stat">
              <div className="num">+8%</div>
              <div className="lbl">EPS growth assumption</div>
            </div>
            <div className="stat">
              <div className="num">S$2bn+</div>
              <div className="lbl">Daily turnover, 4 months running</div>
            </div>
          </div>
        </header>

        <section>
          <div className="section-head">
            <h2>Three themes for the second half</h2>
            <div className="section-note">WHERE TO LOOK NEXT</div>
          </div>
          <div className="themes">
            {themes.map((t) => (
              <div className="theme-card" key={t.idx}>
                <div className="idx">{t.idx}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Macro snapshot</h2>
            <div className="section-note">AS OF JUN 2026</div>
          </div>
          <div className="macro-grid">
            <div className="macro-card">
              <div className="v">6.0%</div>
              <div className="l">1Q26 GDP growth, yoy</div>
            </div>
            <div className="macro-card">
              <div className="v">38.4%</div>
              <div className="l">Non-oil domestic exports, yoy</div>
            </div>
            <div className="macro-card">
              <div className="v">1.8%</div>
              <div className="l">Headline inflation, yoy</div>
            </div>
            <div className="macro-card">
              <div className="v">~$80</div>
              <div className="l">Oil price (US$/bbl), eased from ~$120 peak</div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Alpha picks</h2>
            <div className="section-note">PRICES AS OF 18 JUN 2026</div>
          </div>
          <div className="picks-grid">
            <div className="pick-group">
              <h4>Large-cap</h4>
              {largeCaps.map((p) => (
                <div className="pick-row" key={p.ticker}>
                  <div className="pick-name">
                    {p.name}
                    <span className="ticker">{p.ticker}</span>
                  </div>
                  <div className="pick-target">
                    {p.target}
                    <span className="up">{p.upside} upside</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pick-group">
              <h4>Small / mid-cap</h4>
              {smallCaps.map((p) => (
                <div className="pick-row" key={p.ticker}>
                  <div className="pick-name">
                    {p.name}
                    <span className="ticker">{p.ticker}</span>
                  </div>
                  <div className="pick-target">
                    {p.target}
                    <span className="up">{p.upside} upside</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="section-head">
            <h2>Sector positioning</h2>
            <div className="section-note">CALLS AT A GLANCE</div>
          </div>
          <div className="sector-grid">
            {sectors.map((s) => (
              <div className="sector-tile" key={s.name}>
                <div className="name">{s.name}</div>
                <span className={`call ${s.cls}`}>{s.call}</span>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <p className="fine">
            For informational purposes only — not investment advice. Figures and views summarised
            from independent market research as of June 2026; targets and ratings are
            forward-looking estimates and may not be realised. Always do your own due diligence
            before trading.
          </p>
        </footer>
      </div>
    </>
  );
}
