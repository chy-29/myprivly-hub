import type { Metadata } from "next";
import LegalPage, { Ph } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy (draft) · MyPrivly",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 20, 2026">
      <h2>1. Who we are</h2>
      <p>
        MyPrivly (“we”, “us”) is run by <Ph>OPERATOR LEGAL NAME</Ph>, <Ph>MAILING ADDRESS</Ph>. We make a small set of apps: Family
        (family.myprivly.com), Money (money.myprivly.com) and this website (myprivly.com). This policy explains what we collect, why, who
        else touches it, and what you can do about it. Questions: <Ph>SUPPORT EMAIL</Ph>.
      </p>

      <h2>2. The short version</h2>
      <ul>
        <li>
          <strong>Money is encrypted on your device.</strong> Your accounts, transactions and budgets live in a database that is encrypted with
          a passphrase only you know. We never receive that passphrase, so we cannot read your financial data, and we cannot recover it if you
          forget the passphrase.
        </li>
        <li>
          <strong>Family is shared on purpose.</strong> Calendar events, tasks and member names are stored on our servers so the people in your
          family can see them.
        </li>
        <li>We do not show ads, we do not sell your information, and we do not share it for advertising.</li>
        <li>You can export your Money data and delete it. See section 8 for what is available today.</li>
      </ul>

      <h2>3. What we collect and why</h2>
      <h3>Your account</h3>
      <p>
        Your email address and how you sign in (an emailed link, Google or Microsoft). If you use Google or Microsoft, we also receive the basic
        profile details they share, such as your name. We use this to sign you in and to send you messages about your account. There is no
        password for your MyPrivly account.
      </p>
      <h3>Family</h3>
      <p>
        The family name and invite code; each member’s display name, color, role (parent or child), time zone, language and reminder choices;
        and everything you add: events, calendars, categories, tasks and records of schedules you import. We use this to run the shared
        calendar and, if you turn them on, reminder emails.
      </p>
      <h3>Money</h3>
      <p>
        Your financial data is kept in an encrypted database in your browser. It is not sent to us in readable form. If you use cloud backup, an
        encrypted copy of that database is stored for you in private storage; we cannot decrypt it. If you link a bank (a feature that is not
        available yet), Plaid collects your bank login under its own privacy policy and sends account and transaction data to your device;
        the access token is stored inside your encrypted database, not on our servers. We never see your bank username or password.
      </p>
      <h3>Technical information</h3>
      <p>
        Our hosting and database providers keep logs that include IP addresses and browser details. We use them to keep the service secure and
        working. We do not use advertising or analytics trackers.
      </p>
      <h3>Payments (when Plus launches)</h3>
      <p>
        Cards are handled by Stripe. We keep your plan, subscription status and a Stripe customer ID. We do not receive or store your full card
        number.
      </p>

      <h2>4. Cookies and device storage</h2>
      <ul>
        <li>A sign-in cookie that keeps you signed in across family.myprivly.com, money.myprivly.com and myprivly.com.</li>
        <li>Small preference cookies for your theme (light or dark) and typeface, shared across the apps, and a marker used to move old sign-ins to the shared cookie.</li>
        <li>Your encrypted Money database, stored in your browser’s own storage on your device.</li>
      </ul>
      <p>We do not use cookies for advertising or tracking, so there is no cookie banner. <Ph>CONFIRM AFTER LEGAL REVIEW</Ph></p>

      <h2>5. How we use information</h2>
      <p>
        To provide the apps; to sign you in and keep your account secure; to send sign-in links and the messages you ask for; to answer support
        requests; to prevent abuse; and to meet legal duties. We do not use your information to build advertising profiles.
      </p>

      <h2>6. Who else handles it</h2>
      <p>We use these service providers, only to run the service:</p>
      <ul>
        <li><strong>Supabase</strong>: sign-in, the Family database and private file storage (including encrypted Money backups).</li>
        <li><strong>Vercel</strong>: hosting of the websites and small server functions.</li>
        <li><strong>Resend</strong>: sending sign-in and reminder emails.</li>
        <li><strong>Google or Microsoft</strong>: only if you choose to sign in with them.</li>
        <li><strong>Plaid</strong>: only if you link a bank, once that feature is available.</li>
        <li><strong>Stripe</strong>: payments, once paid plans launch.</li>
        <li>
          <strong>An AI provider (Anthropic)</strong>: only for importing a schedule from a photo, a feature that is currently off. If it is
          turned on, the photo you choose is sent to that provider to read it.
        </li>
      </ul>
      <p>
        We may disclose information if the law requires it, to protect people’s safety or our rights, or in a sale or reorganization of the
        business (we would tell you first). We do not sell personal information or share it for cross-context advertising.
      </p>

      <h2>7. Where it is stored</h2>
      <p>
        Account and Family data are stored with our providers in <Ph>REGION, e.g. United States</Ph>. If you are outside that region, your
        information is transferred there. <Ph>ADD TRANSFER SAFEGUARDS IF SERVING THE EU/UK</Ph>
      </p>

      <h2>8. Keeping and deleting your information</h2>
      <ul>
        <li>
          <strong>Money:</strong> in Settings, Security you can download an encrypted backup, export transactions as CSV, delete your Money data, or
          delete it and deactivate your Money account. Your MyPrivly sign-in stays, because your other MyPrivly apps use it.
        </li>
        <li>
          <strong>Family:</strong> you can edit or delete events and tasks yourself. To export or delete your Family data or your whole account today,
          email <Ph>SUPPORT EMAIL</Ph>; <Ph>SELF-SERVICE EXPORT AND DELETE COMING, SET A DATE</Ph>. We aim to act within <Ph>30 DAYS</Ph>.
        </li>
        <li>Server logs are kept for about <Ph>NUMBER OF DAYS</Ph> days. Deleted data may remain in provider backups for up to <Ph>NUMBER OF DAYS</Ph> days.</li>
      </ul>

      <h2>9. Security</h2>
      <p>
        Money data is encrypted on your device before anything is backed up, and connections to our sites use HTTPS. Database access is limited so
        each person reaches only their own records. No system is perfectly secure. Because we cannot recover your passphrase, keep it safe and
        keep an exported backup.
      </p>

      <h2>10. Your choices and rights</h2>
      <p>
        You can ask to see, correct, export or delete your personal information, and to object to or limit certain uses. If you live in California,
        you have the rights described in the California Consumer Privacy Act, including to know, delete, correct, and to opt out of sale or sharing
        (we do neither). If you live in the EU or UK you have rights under the GDPR, including to complain to your data protection authority; our
        legal bases are performing our contract with you, our legitimate interests in running a secure service, and your consent where we ask for it.{" "}
        <Ph>LAWYER TO CONFIRM WHICH JURISDICTIONS APPLY</Ph>
      </p>
      <p>To use any of these rights, email <Ph>SUPPORT EMAIL</Ph>. We may need to confirm it is really you.</p>

      <h2>11. Children</h2>
      <p>
        Family is for households. A parent or guardian can add children to their family. Our apps are not directed to children under 13, and we do
        not knowingly collect personal information from a child under 13 without a parent or guardian’s involvement. A parent who believes a child’s
        information should be removed can contact us. <Ph>LAWYER TO REVIEW COPPA OBLIGATIONS, SINCE EACH MEMBER SIGNS IN SEPARATELY</Ph>
      </p>

      <h2>12. Changes to this policy</h2>
      <p>If we make a meaningful change we will tell you by email or in the app before it takes effect, and update the date above.</p>

      <h2>13. Contact</h2>
      <p>
        <Ph>OPERATOR LEGAL NAME</Ph>, <Ph>MAILING ADDRESS</Ph>, <Ph>SUPPORT EMAIL</Ph>
      </p>
    </LegalPage>
  );
}
