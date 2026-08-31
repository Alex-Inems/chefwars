import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | ChefWars",
  description: "How ChefWars uses cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <PolicyPage title="Cookie Policy" updated="August 26, 2026">
      <section>
        <h2>1. What cookies are</h2>
        <p>
          Cookies are small text files stored on your device. Similar tools
          (such as local storage or pixels) may be used for the same purposes.
        </p>
      </section>

      <section>
        <h2>2. How ChefWars uses them</h2>
        <p>We may use cookies and similar technologies to:</p>
        <ul>
          <li>Keep the site secure and working as expected</li>
          <li>Remember basic preferences</li>
          <li>Understand how visitors move through ChefWars pages</li>
          <li>Measure the performance of campaigns or entry forms</li>
        </ul>
      </section>

      <section>
        <h2>3. Types we may use</h2>
        <ul>
          <li>
            <strong>Essential</strong>: required for core site functions.
          </li>
          <li>
            <strong>Analytics</strong>: help us improve layout, content, and
            load performance.
          </li>
          <li>
            <strong>Functional</strong>: remember choices such as language or
            dismissed notices.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Your controls</h2>
        <p>
          You can block or delete cookies in your browser settings. Some site
          features may not work fully if essential cookies are disabled. Where
          required by law, we will ask for consent before non-essential cookies
          run.
        </p>
      </section>

      <section>
        <h2>5. More information</h2>
        <p>
          For how we handle personal data more broadly, see our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </PolicyPage>
  );
}
