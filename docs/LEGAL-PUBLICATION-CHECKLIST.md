# Final publication checklist: legal details and privacy notices

Nothing is merged or deployed until this checklist is complete and the final
versions are approved.

| Site | Preview branch |
|---|---|
| Laurus Group | `laurusgroup-website` → `claude/legal-details-privacy` |
| LOS | `laurustechnology-website` → `claude/los-legal-privacy` |
| PaddockDesk marketing | `paddockdesk-website` → `claude/legal-details-privacy` (includes the approved 9–12 October site work) |
| Podium | `podium-vehicle-solutions-website` → `claude/legal-ico-details` |

**Already decided:**
- Laurus Group Limited is the legal entity.
- PaddockDesk is described as "a product of Laurus Group Limited, powered by LOS".
- Lawful basis is legitimate interests.
- Ordinary business enquiries are kept for 12 months; information is kept longer where needed for contracts, accounting, complaints or legal claims.
- Information is disclosed to advisers where necessary and to authorities where the law requires.
- Fonts are self-hosted.

## 1. ICO register: COMPLETED

Verified by Laurus Group Limited on the ICO public register
(https://ico.org.uk/ESDWebPages/Entry/ZC246352) and approved for all four sites.

- [x] Registration number: **ZC246352**
- [x] Organisation: **Laurus Group Limited**
- [x] Address: **316 Warwick Road, Banbury, Oxfordshire, OX16 1AZ**, matching the websites
- [x] Registered **2 October 2026**, expires **1 October 2027**. Renew before expiry and keep the number on the sites in step.

## 2. Cloudflare (you)

Check each site: **laurusgroup.co.uk**, **los.laurusgroup.co.uk**, **paddockdesk.com** and **podiumvehiclesolutions.co.uk**.

**In the Cloudflare dashboard**
- [ ] **Web Analytics** (Analytics & Logs → Web Analytics; and Workers & Pages → each project → Metrics): is it on for this site? Record: ______
- [ ] **Bot protection** (each domain → Security → Bots): is Bot Fight Mode or Super Bot Fight Mode on? These can set a `__cf_bm` cookie. Record: ______
- [ ] **Zaraz** (each domain → Zaraz): is it on, and with which tools? Record: ______
- [ ] **Logs** (Analytics & Logs → Logpush): are any log export jobs set up, and where do they send logs? Record: ______
- [ ] **Data processing agreement:** confirm Laurus Group Limited's account accepts Cloudflare's customer DPA, and note the transfer safeguard it uses for data leaving the UK.

**In a browser, on each live site (a quick cross-check)**
- [ ] Developer tools → Application → Cookies: list any cookies present: ______
- [ ] Developer tools → Network: note any request to `static.cloudflareinsights.com` (Web Analytics) or any other third party: ______

## 3. Email provider (you)

- [ ] In Cloudflare, open each domain → **DNS** → **MX records**, for **laurusgroup.co.uk** and **paddockdesk.com**. Record the mail server names: ______
  - `*.google.com` or `*.googlemail.com` means Google Workspace.
  - `*.mail.protection.outlook.com` means Microsoft 365.
- [ ] From that provider's data processing terms, note whether email data leaves the UK and the safeguard it uses: ______
- [ ] Confirm **hello@laurusgroup.co.uk** and **hello@paddockdesk.com** are monitored for privacy requests.

## 4. Business decision (you)

- [ ] Documented retention rules (periods or criteria) for contracts, accounting records, complaints and legal claims. The notices say these rules exist, so they must be written down before publication.

## 5. Then (me, after your answers)

- [ ] Replace every "To confirm" marker with the confirmed facts, or remove the statement.
- [ ] Remove the draft banners and the privacy pages' hide-from-search tags.
- [ ] Set the effective and last-updated dates. Podium keeps its effective date of 25 August 2026 and gains a last-updated date.
- [ ] Re-run the tests and the desktop and phone checks, then share the final previews for your approval.
- [ ] Merge and deploy only after your final approval.

## Optional (not needed to publish)

- Name the email provider in the notices (describing it by category is enough legally).
- Solicitor or data-protection review.
- Laurus Technology name checks (Companies House; UK IPO classes 9, 35 and 42) before using that brand anywhere.
