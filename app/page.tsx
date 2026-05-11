export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Startup Founders &amp; Growth Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find hidden correlations<br />in your growth metrics
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Google Analytics, Mixpanel, or Amplitude and instantly discover which user actions actually drive retention, conversion, and revenue — not just the obvious ones.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to explore.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Google Analytics", "Mixpanel", "Amplitude", "Statistical Correlations", "Retention Insights", "Revenue Drivers"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect your tools", desc: "Link GA4, Mixpanel, or Amplitude in one click via OAuth." },
            { step: "02", title: "Run correlation analysis", desc: "Our ML engine scans thousands of event pairs for statistically significant patterns." },
            { step: "03", title: "Act on real insights", desc: "Get ranked, actionable findings — not vanity metrics." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-xs mb-2">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2 uppercase tracking-widest">Growth</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect up to 3 analytics sources",
              "Unlimited correlation scans",
              "Weekly insight digests",
              "Retention & revenue drivers",
              "CSV export",
              "Email support"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>{feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which analytics platforms are supported?",
              a: "We currently support Google Analytics 4, Mixpanel, and Amplitude. More integrations are on the roadmap."
            },
            {
              q: "How is this different from my existing analytics dashboard?",
              a: "Standard dashboards show you what happened. We show you why — by finding statistically significant correlations between user actions and outcomes like retention and revenue that you'd never spot manually."
            },
            {
              q: "Is my data secure?",
              a: "We use read-only OAuth scopes and never store raw event data. Only aggregated correlation results are retained, and you can revoke access at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        &copy; {new Date().getFullYear()} Growth Metric Correlator. All rights reserved.
      </footer>
    </main>
  );
}
