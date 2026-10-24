import type { Metadata } from "next";
import LegalPage, { Ph } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service (draft) · MyPrivly",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 20, 2026">
      <h2>1. Agreement</h2>
      <p>
        These terms are between you and <Ph>OPERATOR LEGAL NAME</Ph> (“MyPrivly”, “we”). By creating an account or using Family, Money or myprivly.com
        you agree to them and to our Privacy Policy. If you do not agree, please do not use the service.
      </p>

      <h2>2. Who can use MyPrivly</h2>
      <p>
        You must be at least <Ph>18</Ph> to create an account. A parent or guardian may add children to their family and is responsible for how a
        child uses the service. <Ph>LAWYER TO CONFIRM AGE RULES FOR MEMBERS ADDED BY A PARENT</Ph>
      </p>

      <h2>3. Your account and passphrase</h2>
      <p>
        You sign in with an emailed link, Google or Microsoft. Keep your email account secure; anyone who controls it can sign in as you. Money
        also asks for a <strong>vault passphrase</strong> that encrypts your financial data on your device. We never receive it and cannot reset
        or recover it. If you forget it and have no exported backup, your Money data cannot be recovered by anyone, including us.
      </p>

      <h2>4. Your content</h2>
      <p>
        You own what you put into MyPrivly. You give us a limited permission to store, process and show it as needed to run the service for you
        and the people you share it with, and for nothing else. Money data stays encrypted on your device, and we cannot read it.
      </p>

      <h2>5. Sharing inside a family</h2>
      <p>
        People you invite to your family can see the shared calendar, tasks and member names. Invite only people you trust, and remove people who
        should no longer have access. You are responsible for what you share with them.
      </p>

      <h2>6. Using the service responsibly</h2>
      <p>Do not use MyPrivly to break the law, harm or harass others, send spam, probe or attack the service, or try to access anyone else’s account or data. We may suspend access that does.</p>

      <h2>7. Not financial, tax or legal advice</h2>
      <p>
        Money helps you organize and understand your finances. Budgets, forecasts, insights, health scores, tax estimates and calculators are
        estimates based on the information you enter, and may be wrong or out of date. They are not financial, tax, investment or legal advice.
        MyPrivly is not a bank and does not hold your money. Check important decisions with a qualified professional.
      </p>

      <h2>8. Free and paid plans</h2>
      <p>
        MyPrivly has a Free plan. We plan to offer a paid plan, <strong>Plus</strong>, for features that cost us to run, such as bank connections and
        sync. The terms in this section apply once Plus is on sale. <Ph>CONFIRM FINAL PRICES AND FEATURES</Ph>
      </p>
      <ul>
        <li>Plus is billed in advance each month or year through Stripe, and renews automatically until you cancel.</li>
        <li>You can cancel at any time in the app. Plus then continues until the end of the period you paid for.</li>
        <li>Prices shown at checkout include applicable taxes. We will give you at least <Ph>30</Ph> days’ notice before a price change affects you.</li>
        <li>Any free trial converts to a paid plan only if you add a payment method and do not cancel in time. <Ph>DECIDE: NO CARD TRIAL PLANNED</Ph></li>
        <li>Refunds are covered in the Refunds and Cancellation page.</li>
        <li>Export, backup download and account deletion are always free.</li>
      </ul>

      <h2>9. Third-party services</h2>
      <p>
        The service works with providers such as Plaid (bank connections), Google, Microsoft, Stripe and others. Their own terms and privacy policies
        apply to what they do, and we are not responsible for them.
      </p>

      <h2>10. Changes and availability</h2>
      <p>
        We are still building MyPrivly. Features may change, and we may update, pause or retire parts of it. If we remove something you rely on, we
        will tell you and let you export your data first. We try to keep the service running but do not promise it will always be available or
        error-free.
      </p>

      <h2>11. Ending your use</h2>
      <p>
        You can stop using MyPrivly at any time and delete your data as described in the Privacy Policy. We may suspend or end access if you
        seriously or repeatedly break these terms, or if the law requires. Where we can, we will warn you first and give you time to export your data.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        The service is provided “as is” and “as available”. To the extent the law allows, we do not make any warranties, express or implied,
        including about accuracy, fitness for a particular purpose, or uninterrupted operation.
      </p>

      <h2>13. Limit on our liability</h2>
      <p>
        To the extent the law allows, we are not liable for indirect, incidental, special or consequential damages, or for lost profits, savings or
        data, and our total liability for any claim is limited to the greater of what you paid us in the 12 months before the claim and{" "}
        <Ph>$100</Ph>. Some places do not allow these limits, so they may not apply to you. <Ph>LAWYER TO REVIEW</Ph>
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of <Ph>STATE / COUNTRY</Ph>. Disputes will be handled in the courts of <Ph>COUNTY, STATE</Ph>.{" "}
        <Ph>LAWYER TO DECIDE WHETHER TO USE ARBITRATION OR A CLASS-ACTION WAIVER</Ph>
      </p>

      <h2>15. Changes to these terms</h2>
      <p>If we make a meaningful change we will tell you by email or in the app before it takes effect. Using the service after that means you accept the new terms.</p>

      <h2>16. Contact</h2>
      <p>
        <Ph>OPERATOR LEGAL NAME</Ph>, <Ph>MAILING ADDRESS</Ph>, <Ph>SUPPORT EMAIL</Ph>
      </p>
    </LegalPage>
  );
}
