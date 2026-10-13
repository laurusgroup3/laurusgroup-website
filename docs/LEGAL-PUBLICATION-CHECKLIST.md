# Legal details and privacy notices: publication checklist

**Nothing is merged, published or deployed until Laurus Group Limited
approves the final versions.** This is a working checklist, not legal advice.

| Site | Repository | Preview branch |
|---|---|---|
| Laurus Group | `laurusgroup-website` | `claude/legal-details-privacy` |
| LOS | `laurustechnology-website` | `claude/los-legal-privacy` |
| PaddockDesk marketing | `paddockdesk-website` | `claude/legal-details-privacy`, stacked on unapproved earlier work (see that repo's `docs/CHANGE-COMPARISON.md`) |
| Podium Vehicle Solutions | `podium-vehicle-solutions-website` | `claude/legal-ico-details` |

The PaddockDesk and PitstopDash applications are unchanged. Their own
requirements are in `docs/PRIVACY-LEGAL-REQUIREMENTS.md` in each repository
(branch `claude/privacy-legal-requirements`).

## 1. Blocks publication: legal content of the privacy notices

A privacy notice must accurately give the information UK GDPR requires
(Article 13). Each item below is something the notices can't yet state
accurately:

- [ ] **International transfers.** The notice must say whether personal information leaves the UK and which safeguards apply. Confirm this for Cloudflare and for the email provider, from their data processing terms. The drafts currently make no claim.
- [ ] **Retention, beyond ordinary enquiries.** The provisional 12 months covers ordinary business enquiries. Still needed: how long correspondence is kept when an enquiry leads to an agreement, complaint or claim (a period or the criteria used), and whether any website request information is kept, by whom and for how long.
- [ ] **What the website collects through Cloudflare.** Which Cloudflare features are on for each site (Web Analytics, bot protection, Zaraz, log export). This decides what section 2 must disclose and whether the cookie statement is complete. If a non-essential cookie is set, consent is needed before it is set.
- [ ] **Recipients.** Approve or remove the proposed disclosure to professional advisers and to public authorities where the law requires it. Recipients can be described by category, so naming the email provider is not required here (see section 4).
- [ ] **Final sign-off of the provisional wording:** legitimate interests (and steps before a contract for service enquiries) as the lawful basis, and 12 months for ordinary business enquiries.
- [ ] **A working privacy contact.** Confirm that hello@laurusgroup.co.uk, and hello@paddockdesk.com for the PaddockDesk site, are monitored, so rights requests are received.

## 2. Blocks publication: displaying the ICO number

- [ ] **Verify ZC246352 on the ICO public register** (https://ico.org.uk/ESDWebPages/Entry/ZC246352). The organisation name should be Laurus Group Limited, the address should match the registered office, and the registration should be current (note the expiry date). Showing the number on a website isn't itself a legal requirement, but a number that doesn't match the register must not be published. If it can't be verified in time, remove it from the footers and notices and publish the rest.

## 3. Blocks publication: procedural

- [ ] Remove the draft banner, the "To confirm" and "Proposed, for review" markers, and the privacy page's noindex tag from each approved notice.
- [ ] Set the effective and last-updated dates, including Podium's "Last updated" placeholder. Podium's effective date stays 25 August 2026.
- [ ] PaddockDesk: decide on the earlier unapproved site work (A) before or together with the legal changes (B). B is built on A.
- [ ] Check each deployed preview (desktop and phone) after the final edits, then merge only the approved branches.

## 4. Legal obligations outside the notices (don't block publishing them)

- [ ] **Company details on websites** (Companies Act trading disclosures): company name, number, registered office and place of registration. **Met on all four preview branches.** The current live Laurus Group site shows only "Laurus Group Ltd", so publishing this change fixes that gap.
- [ ] **Processor contracts.** A data processing agreement in place with Cloudflare and the email provider (often accepted through their online terms). Confirm.
- [ ] **Data protection fee.** Keep the ICO registration current. The register entry shows the expiry date.

## 5. Optional improvements (recommended, not required)

- **Name the email provider** in the notices. Categories are enough legally; naming it is clearer. Its MX records identify it (not readable from the build environment).
- **Solicitor or data-protection review** of the final notices.
- **Self-hosted fonts.** Done on LOS and PaddockDesk, so no visitor information goes to Google. Laurus Group and Podium never used Google Fonts.
- **Laurus Technology branding.** Unchanged until the name checks are complete. These are not needed to publish the privacy notices, which don't use the name. Before adopting it:
  - search Companies House for "Laurus Technology", "Laurus Technologies" and "Laurus Tech";
  - search the UK IPO for "LAURUS" word marks in classes 9, 35 and 42.

  Indicative web search results found:
  - Laurus Tech Limited (08494770): dissolved, IT services.
  - Laurus Limited (06427697): active, activity not checked.
  - Laurus Technologies Inc.: US, IT consulting.
- **Privacy information for the PaddockDesk and PitstopDash apps**, before real customers use them (see the apps' requirements documents).

## Cloudflare: what the code shows (dashboard not checked)

| Site | Code findings |
|---|---|
| Laurus Group | No analytics, cookie or Turnstile code. No Content Security Policy, so any script Cloudflare injects would run. |
| LOS | No analytics, cookie or Turnstile code. No Content Security Policy (the build writes noindex only). |
| PaddockDesk | No analytics, cookie or Turnstile code. The policy allows scripts from the site only, so an injected script would be blocked. |
| Podium | Turnstile on forms (in its Cookie Notice) and Supabase sign-in storage. The policy allows Turnstile only. |

None of this shows which features are switched on in the Cloudflare dashboard.
