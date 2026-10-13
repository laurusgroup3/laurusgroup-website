# Legal details and privacy notices: publication checklist

Covers four preview branches. **Nothing is merged, published or deployed
until Laurus Group Limited approves the final versions.**

| Site | Repository | Preview branch |
|---|---|---|
| Laurus Group | `laurusgroup-website` | `claude/legal-details-privacy` |
| LOS | `laurustechnology-website` | `claude/los-legal-privacy` |
| PaddockDesk marketing | `paddockdesk-website` | `claude/legal-details-privacy` (built on `claude/paddockdesk-emails-reconciled`) |
| Podium Vehicle Solutions | `podium-vehicle-solutions-website` | `claude/legal-ico-details` |

The PaddockDesk and PitstopDash applications are unchanged. Their own
requirements are in each repository's `docs/PRIVACY-LEGAL-REQUIREMENTS.md`
(branch `claude/privacy-legal-requirements`).

## A. Blocking: verify before anything is published

- [ ] **ICO registration ZC246352.** Check the public register entry (https://ico.org.uk/ESDWebPages/Entry/ZC246352). The organisation name should be Laurus Group Limited, the address should match the registered office, and the registration should be current (note the expiry date). It could not be checked from the build environment.
- [ ] **Company details.** Laurus Group Limited, company number 17295288, registered office 316 Warwick Road, Banbury, OX16 1AZ (already used on the live Podium and LOS sites).
- [ ] **Laurus Technology brand clearance.** Companies House and UK IPO register searches for "Laurus Technology" (see section E). The preview sites don't present "Laurus Technology" as a brand until this is done.

## B. Facts to confirm ("To confirm" in the drafts)

- [ ] **Email provider** for the @laurusgroup.co.uk and @paddockdesk.com mailboxes. Not identifiable from the repositories, and DNS (MX) records couldn't be read from the build environment. A domain's MX records name its provider; check them in Cloudflare DNS or with any MX lookup tool.
- [ ] **That hello@paddockdesk.com is monitored** for privacy requests (PaddockDesk notice).
- [ ] **Cloudflare, for each site's Pages project and zone:**
  - Web Analytics (and whether it is set to inject its script automatically);
  - Bot Fight Mode or other bot features, which can set the `__cf_bm` cookie;
  - Zaraz;
  - any Logpush or log export;
  - any Turnstile or challenge pages.

  See section D for what the code shows.
- [ ] **That Laurus Group Limited keeps no website request logs** of its own.
- [ ] **International transfer safeguards** in Cloudflare's and the email provider's data processing terms.
- [ ] **Effective and last-updated dates** for the three new notices, set on publication.
- [ ] **Podium "Last updated" date**, replacing the placeholder on publication. The effective date stays 25 August 2026.

## C. Proposals for review ("Proposed, for review" in the drafts)

These are suggestions, not decisions. Approve, change or reject each one:

- [ ] **Lawful basis, replying to emails:** legitimate interests; for service enquiries, steps before entering into a contract.
- [ ] **Lawful basis, delivering and securing the website:** legitimate interests.
- [ ] **Lawful basis, legal obligations:** compliance with a legal obligation.
- [ ] **Retention, enquiry emails:** 12 months after last contact (the period Podium already uses). Moved to the agreement's records if a relationship follows; kept longer for complaints or claims.
- [ ] **Retention, website logs:** none kept by Laurus; the hosting provider's own terms apply.
- [ ] **Disclosures:** professional advisers (accountants, lawyers, insurers); public authorities where the law requires. Statement that Laurus Group brands are one legal entity.
- [ ] **International transfers:** UK adequacy regulations or UK-approved safeguards such as the UK International Data Transfer Addendum.

## D. Cloudflare: what the code shows (dashboard not verifiable)

| Site | Code findings | Unverifiable |
|---|---|---|
| Laurus Group | No analytics, beacon, cookie or Turnstile code. No `_headers` file, so no Content Security Policy. | If Web Analytics auto-injection is on, its script would load and run. |
| LOS | No analytics, beacon, cookie or Turnstile code. The build writes `_headers` with noindex only, no CSP. | Same as Laurus Group. |
| PaddockDesk | No analytics, beacon, cookie or Turnstile code. CSP allows scripts from 'self' only. | An auto-injected Web Analytics script would be blocked by the CSP. |
| Podium | Turnstile on the booking and enquiry forms (described in its Cookie Notice). Supabase sign-in storage. CSP allows Turnstile but not the Web Analytics script. | Any auto-injected Web Analytics script would be blocked. Bot features may still set cookies. |

## E. Laurus Technology: brand conflict check (indicative only)

Neither the Companies House register nor the UK IPO trade mark register could be opened from the build environment. Web search results showed:

- **Laurus Tech Limited** (08494770): dissolved, IT services, Kingston upon Thames.
- **Laurus Limited** (06427697): active, London. Business activity not checked.
- **Laurus Technologies Inc.:** a US IT consulting company with no UK presence found.
- No UK company named exactly "Laurus Technology Limited", and no UK trade mark record for "Laurus Technology", appeared in search results. That is **not** a clearance.

Before adopting the brand:
- [ ] Search Companies House for "Laurus Technology", "Laurus Technologies" and "Laurus Tech".
- [ ] Search the UK IPO trade mark register for "LAURUS" word marks in classes 9, 35 and 42, including live applications.
- [ ] Consider professional advice if anything similar is found in the same classes.

## F. Before each site goes live

- [ ] Remove the draft banner, and the noindex tag on the privacy page, from the approved notice.
- [ ] Final solicitor or data-protection review of each notice.
- [ ] Check each site's footer, privacy link and fonts on the deployed preview (desktop and phone).
- [ ] Merge only the approved branch, then deploy.
