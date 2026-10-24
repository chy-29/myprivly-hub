import type { Metadata } from "next";
import LegalPage, { Ph } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Refunds and Cancellation (draft) · MyPrivly",
  robots: { index: false, follow: false },
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refunds and Cancellation" updated="October 20, 2026">
      <p>
        This page applies once the paid plan, Plus, is on sale. The Free plan costs nothing and has nothing to refund. The numbers below are
        proposals for you to confirm. <Ph>DECIDE EACH BRACKETED ITEM</Ph>
      </p>

      <h2>Cancel any time</h2>
      <p>
        You can cancel Plus whenever you like from Plan &amp; billing in the app. Plus stays active until the end of the period you already paid
        for, then your account returns to Free. You keep all your data and can still export, back up and delete it.
      </p>

      <h2>Refunds</h2>
      <ul>
        <li>
          <strong>First purchase of a yearly plan:</strong> a full refund if you ask within <Ph>14</Ph> days of paying.
        </li>
        <li>
          <strong>Monthly plans:</strong> no refund for a month that has already started; cancel before the next renewal to avoid another charge.
        </li>
        <li>
          <strong>Renewals:</strong> if you were charged for a renewal and did not mean to be, ask us within <Ph>7</Ph> days and we will refund it.
        </li>
        <li>
          <strong>Founding Member lifetime plan (if offered):</strong> a full refund within <Ph>30</Ph> days of purchase.
        </li>
        <li>
          <strong>Mistakes and outages:</strong> if we charged you in error, or a paid feature you bought was unavailable for a long period, we will
          make it right.
        </li>
      </ul>

      <h2>How to ask</h2>
      <p>
        Email <Ph>SUPPORT EMAIL</Ph> from the address on your account. Refunds go back to the original payment method through Stripe and usually
        appear in 5 to 10 business days, depending on your bank.
      </p>

      <h2>If you live in the EU or UK</h2>
      <p>
        You may have a legal right to cancel digital purchases within 14 days. <Ph>LAWYER TO CONFIRM WHETHER AND HOW THIS APPLIES</Ph>
      </p>
    </LegalPage>
  );
}
