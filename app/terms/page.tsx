import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use — ChefWars",
  description: "Rules for using the ChefWars website and entering competitions.",
};

export default function TermsOfUse() {
  return (
    <PolicyPage title="Terms of Use" updated="August 26, 2026">
      <section>
        <h2>1. Acceptance</h2>
        <p>
          By using the ChefWars website or submitting an entry, you agree to
          these Terms of Use. If you do not agree, please do not use the site or
          enter a competition.
        </p>
      </section>

      <section>
        <h2>2. The arena</h2>
        <p>
          ChefWars organizes culinary battles, showcases, and related content.
          Event formats, judging criteria, prizes, and schedules may change.
          Official rules for each battle are provided at registration or at the
          event.
        </p>
      </section>

      <section>
        <h2>3. Eligibility & entries</h2>
        <p>
          Entrants must meet any age, location, and experience requirements
          stated for a given battle. Entries must be truthful. Incomplete,
          late, or fraudulent submissions may be disqualified.
        </p>
      </section>

      <section>
        <h2>4. Conduct</h2>
        <p>
          Participants and visitors must act respectfully toward chefs, judges,
          staff, and guests. Harassment, unsafe kitchen behavior, or misuse of
          the brand may result in removal from events or the platform.
        </p>
      </section>

      <section>
        <h2>5. Content & brand</h2>
        <p>
          ChefWars name, visuals, and site content are protected. You may not
          copy or commercially reuse them without permission. By entering, you
          may grant ChefWars limited rights to use your name, likeness, and
          dish imagery for event coverage — as described in the event rules.
        </p>
      </section>

      <section>
        <h2>6. Disclaimers</h2>
        <p>
          The site is provided “as is.” We work to keep information accurate,
          but we do not guarantee uninterrupted access or that every listing
          will remain unchanged.
        </p>
      </section>

      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent allowed by law, ChefWars is not liable for
          indirect or consequential damages arising from use of the site or
          participation in events, except where liability cannot be limited.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Questions about these terms can be sent through the contact options
          on our website.
        </p>
      </section>
    </PolicyPage>
  );
}
