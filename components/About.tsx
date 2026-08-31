import { APPLICATION_FORM_URL } from "@/lib/constants";

const PRIZES = [
  {
    title: "Grand cash prize",
    value: "₦1,000,000",
    detail: "The ultimate reward for Nigeria's next culinary champion.",
  },
  {
    title: "Premium utensils",
    value: "Pro kit",
    detail: "High-quality cooking tools built for serious chefs.",
  },
  {
    title: "Equipment bundle",
    value: "Full gear",
    detail: "Cooking equipment and valuable prizes for top performers.",
  },
  {
    title: "Extra cash prizes",
    value: "More wins",
    detail: "Additional cash rewards across rounds and special challenges.",
  },
  {
    title: "Champion title",
    value: "The crown",
    detail: "Earn the official title of Chef Wars Champion.",
  },
] as const;

export function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="shell">
          <div className="about-top">
            <div className="about-intro-block">
              <p className="eyebrow">About Chef Wars</p>
              <h2 className="section-title">
                Where passion meets creativity, and every dish is a chance to win.
              </h2>
              <div className="about-copy">
                <p>
                  Chef Wars is an exciting culinary reality show created for food
                  lovers, talented chefs, and aspiring culinary stars ready to
                  showcase their skills, creativity, passion, and originality in
                  the kitchen.
                </p>
                <p>
                  Contestants battle through thrilling cooking challenges for
                  amazing prizes and the chance to earn the title of Chef Wars
                  Champion, filmed, judged, and broadcast for audiences to
                  witness every moment.
                </p>
              </div>
            </div>

            <div className="about-stats">
              <article className="stat-card stat-card-featured">
                <p className="stat-label">Grand prize</p>
                <p className="stat-value">₦1M</p>
              </article>
              <article className="stat-card">
                <p className="stat-label">Application fee</p>
                <p className="stat-value">₦10K</p>
              </article>
              <article className="stat-card">
                <p className="stat-label">Your shot at</p>
                <p className="stat-value">Champion</p>
              </article>
            </div>
          </div>

          <p className="about-audience">
            Whether you&apos;re a professional chef, an experienced home cook, or
            someone with a deep passion for food. Chef Wars is your opportunity
            to step into the spotlight and prove what you can do.
          </p>
        </div>
      </section>

      <section className="prizes" id="prizes">
        <div className="shell">
          <div className="prizes-header">
            <p className="eyebrow">What&apos;s up for grabs</p>
            <h2 className="section-title section-title-light">
              Prizes worth fighting for.
            </h2>
          </div>

          <ul className="prize-grid">
            {PRIZES.map((prize) => (
              <li key={prize.title} className="prize-card">
                <p className="prize-value">{prize.value}</p>
                <h3 className="prize-title">{prize.title}</h3>
                <p className="prize-detail">{prize.detail}</p>
              </li>
            ))}
          </ul>

          <div className="apply-banner">
            <div className="apply-banner-copy">
              <p className="eyebrow eyebrow-light">Ready for the battle?</p>
              <h2 className="apply-banner-title">
                Apply now. Fee: ₦10,000
              </h2>
              <p className="apply-banner-text">
                Spots are limited. Complete the official application to join the
                next season of Chef Wars.
              </p>
            </div>
            <a
              className="btn btn-fire btn-lg"
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start application
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
