import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | ChefWars",
  description: "How ChefWars collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" updated="August 26, 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          ChefWars (“we”, “us”) hosts culinary competitions and related
          experiences. This Privacy Policy explains how we handle information
          when you visit our website, enter a battle, or contact us.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>
            <strong>Registration details</strong>: name, email, city, culinary
            background, and answers you submit through our entry forms.
          </li>
          <li>
            <strong>Usage data</strong>: pages viewed, device type, approximate
            location, and referral source.
          </li>
          <li>
            <strong>Communications</strong>: messages you send us about events,
            partnerships, or support.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Process competition entries and communicate with participants</li>
          <li>Operate, secure, and improve the ChefWars website</li>
          <li>Share event updates you opt into</li>
          <li>Meet legal or safety obligations related to live events</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with trusted
          providers who help us run forms, email, hosting, or analytics, only as
          needed to deliver ChefWars. We may also disclose information if required
          by law.
        </p>
      </section>

      <section>
        <h2>5. Retention</h2>
        <p>
          We keep entry and contact information for as long as needed for the
          competition cycle, follow-up communications, and legal requirements,
          then delete or anonymize it when no longer necessary.
        </p>
      </section>

      <section>
        <h2>6. Your choices</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information, or opt out of non-essential emails, by contacting us
          through the channels listed on our site.
        </p>
      </section>

      <section>
        <h2>7. Updates</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date
          at the top reflects the latest revision.
        </p>
      </section>
    </PolicyPage>
  );
}
