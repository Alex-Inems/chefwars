import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — ChefWars",
  description:
    "Terms and conditions for applying to and participating in the Chef Wars culinary reality show.",
};

export default function TermsOfUse() {
  return (
    <PolicyPage title="Terms & Conditions" updated="August 31, 2026">
      <section>
        <p>
          Chef Wars is a culinary reality competition created to showcase
          cooking talent, creativity, personality, and passion for food. By
          applying to participate, applicants agree to the following Terms
          &amp; Conditions.
        </p>
      </section>

      <section>
        <h2>1. Eligibility</h2>
        <ol>
          <li>
            Applicants must meet the age and eligibility requirements specified
            by the Chef Wars production team.
          </li>
          <li>
            Applicants must provide accurate and complete information during
            registration.
          </li>
          <li>
            Providing false, misleading, or fraudulent information may result in
            immediate disqualification.
          </li>
          <li>
            The production team reserves the right to verify information
            provided by applicants.
          </li>
        </ol>
      </section>

      <section>
        <h2>2. Application</h2>
        <ol>
          <li>
            The application fee is ₦10,000 and must be paid through the official
            payment channel provided by Chef Wars.
          </li>
          <li>
            The application fee is non-refundable, except where otherwise
            determined by the organizers.
          </li>
          <li>
            Payment of the application fee does not guarantee selection as a
            contestant.
          </li>
          <li>
            Only applicants who successfully complete the application process
            and meet the selection criteria will be considered for the next
            stage.
          </li>
          <li>
            Applicants may be required to submit a cooking video, photograph,
            personal information, and other materials requested by the
            production team.
          </li>
        </ol>
      </section>

      <section>
        <h2>3. Selection of contestants</h2>
        <ol>
          <li>
            Submission of an application does not guarantee participation in the
            reality show.
          </li>
          <li>
            Contestants will be selected at the sole discretion of the Chef
            Wars production and judging team, subject to applicable law.
          </li>
          <li>
            Selected contestants may be required to attend auditions,
            interviews, rehearsals, orientation sessions, or other production
            activities.
          </li>
          <li>
            The production team reserves the right to replace a selected
            contestant who becomes unavailable or fails to meet the required
            conditions.
          </li>
        </ol>
      </section>

      <section>
        <h2>4. Reality show &amp; filming consent</h2>
        <ol>
          <li>
            Chef Wars is a filmed reality television/digital production.
          </li>
          <li>
            By participating, contestants acknowledge and agree that they may
            be filmed, photographed, recorded, interviewed, and otherwise
            captured during activities connected with the show.
          </li>
          <li>
            Contestants grant Chef Wars and its authorized production partners
            permission to use their name, image, likeness, voice, performance,
            cooking demonstrations, interviews, and other recorded material
            for the production, promotion, advertising, broadcast, streaming,
            social media, and related purposes, subject to applicable law and
            any separate release forms provided by the organizers.
          </li>
          <li>
            Contestants understand that footage may be edited for storytelling,
            entertainment, and production purposes.
          </li>
          <li>
            Participation in the show does not guarantee that every recorded
            appearance will be included in the final production.
          </li>
        </ol>
      </section>

      <section>
        <h2>5. Contestant conduct</h2>
        <p>
          Contestants are expected to maintain professional and respectful
          conduct throughout the competition.
        </p>
        <p>The following may result in warnings, penalties, or disqualification:</p>
        <ul>
          <li>Violence, threats, harassment, bullying, or intimidation.</li>
          <li>Discriminatory or abusive behavior.</li>
          <li>
            Theft or deliberate damage to production or contestants&apos;
            property.
          </li>
          <li>
            Cheating, sabotage, or deliberate interference with another
            contestant&apos;s dish.
          </li>
          <li>
            Possession or use of prohibited substances or items during
            production.
          </li>
          <li>
            Failure to follow reasonable production, safety, or competition
            instructions.
          </li>
          <li>
            Any conduct that seriously disrupts the production or threatens the
            safety of others.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Cooking challenges &amp; judging</h2>
        <ol>
          <li>
            Contestants must follow the rules and instructions provided for each
            cooking challenge.
          </li>
          <li>
            Ingredients, cooking equipment, time limits, themes, and challenge
            requirements may vary.
          </li>
          <li>
            Judging will be conducted according to the criteria established for
            each challenge.
          </li>
          <li>
            Judges&apos; decisions regarding competition results will be final,
            subject to any formal review process established by the production
            team.
          </li>
          <li>
            Contestants must not attempt to influence judges or interfere with
            the judging process.
          </li>
        </ol>
      </section>

      <section>
        <h2>7. Disqualification</h2>
        <p>A contestant may be disqualified for:</p>
        <ul>
          <li>Breaching these Terms &amp; Conditions.</li>
          <li>Cheating or deliberately violating competition rules.</li>
          <li>Providing false information.</li>
          <li>
            Tampering with ingredients, equipment, or another contestant&apos;s
            work.
          </li>
          <li>Engaging in serious misconduct.</li>
          <li>
            Failing to attend required production activities without
            authorization.
          </li>
          <li>
            Any conduct that creates a serious safety, legal, or production
            concern.
          </li>
        </ul>
        <p>
          Where appropriate, the production team may issue warnings or penalties
          before disqualification.
        </p>
      </section>

      <section>
        <h2>8. Prizes</h2>
        <ol>
          <li>
            The advertised ₦1,000,000 Grand Prize, additional cash prizes,
            cooking equipment, quality cooking utensils, and other prizes are
            subject to the official prize structure announced by Chef Wars.
          </li>
          <li>
            Prizes are not transferable unless expressly permitted by the
            organizers.
          </li>
          <li>
            Winners may be required to provide valid identification and any
            information reasonably required for prize verification and
            fulfillment.
          </li>
          <li>
            Any applicable taxes, charges, or statutory obligations relating to
            prizes shall be handled in accordance with applicable Nigerian law.
          </li>
          <li>
            The production team reserves the right to substitute a prize with
            another prize of comparable value where circumstances beyond its
            reasonable control make the advertised prize unavailable.
          </li>
        </ol>
      </section>

      <section>
        <h2>9. Originality &amp; intellectual property</h2>
        <ol>
          <li>
            Contestants must ensure that recipes, cooking demonstrations,
            photographs, videos, and other materials submitted by them do not
            knowingly infringe another person&apos;s intellectual property
            rights.
          </li>
          <li>
            Contestants remain responsible for obtaining any permissions required
            for materials they submit.
          </li>
          <li>
            Contestants agree not to deliberately submit another person&apos;s
            work as their own.
          </li>
        </ol>
      </section>

      <section>
        <h2>10. Confidentiality &amp; spoilers</h2>
        <p>
          Contestants may be required to keep confidential certain information
          about the competition, challenges, results, production activities,
          other contestants, and unreleased content.
        </p>
        <p>
          Contestants must not publicly disclose confidential production
          information or competition results before the official release without
          permission from the production team.
        </p>
      </section>

      <section>
        <h2>11. Safety</h2>
        <ol>
          <li>
            Contestants must follow all reasonable food-safety, kitchen-safety,
            equipment, and production instructions.
          </li>
          <li>
            Contestants must immediately inform the production team of any
            injury, illness, allergy, dietary restriction, or safety concern
            relevant to their participation.
          </li>
          <li>
            Dangerous or reckless behavior may result in removal from a
            challenge or disqualification.
          </li>
        </ol>
      </section>

      <section>
        <h2>12. Production changes</h2>
        <p>
          Chef Wars reserves the right, where reasonably necessary, to modify
          schedules, challenges, locations, filming arrangements, judging
          procedures, or other production details.
        </p>
        <p>
          Where significant changes affect contestants, reasonable notice will
          be provided where practicable.
        </p>
      </section>

      <section>
        <h2>13. Personal information</h2>
        <p>
          Information collected during the application and production process
          may be used for contestant selection, administration, communication,
          production, publicity, and other purposes connected with Chef Wars,
          subject to applicable data-protection laws and the show&apos;s privacy
          arrangements.
        </p>
      </section>

      <section>
        <h2>14. Acceptance of terms</h2>
        <p>
          By submitting an application to Chef Wars, the applicant confirms that
          they have read, understood, and agreed to these Terms &amp;
          Conditions.
        </p>
        <p>
          Selected contestants may also be required to sign additional
          Contestant Release Forms, Appearance Releases, Confidentiality
          Agreements, and other production documents as a condition of
          participation.
        </p>
      </section>
    </PolicyPage>
  );
}
