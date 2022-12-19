The **Attribution Pattern** is a `footer` element for digital products by the Mayor’s Office for Economic Opportunity and its partners. It includes a byline, several NYC logo lockups, NYC trademark, copyright information, <a href="https://www1.nyc.gov/home/terms-of-use.page" target="_blank" rel="noopener nofollow">NYC.gov terms of use</a>, and <a href="https://www1.nyc.gov/home/privacy-policy.page" target="_blank" rel="noopener nofollow">privacy policy</a>. This Pattern helps our office establish credibility and trust with our resources and highlights partnerships we maintain to deliver services.

---

The Pattern should use the `role` attribute with the value of `contentinfo` to identify the element as the page footer for screen readers.

---

The Pattern may include tertiary footer navigation that restates or expands on the available items found in the [Navigation](navigation) or [Menu](menu) Patterns.

---

The Pattern may use the "Learn More" toggle to show a summary of the Mayor’s Office for Economic Opportunity and its partners. The "Learn More" region will be hidden from screen readers using the `aria-hidden` attribute. Potentially focusable children will have their `tabindex` attribute set to `-1` when the region is hidden.

You may replace the "Learn More" toggle with an "About" link if it links to a page containing more information about our office and partner offices. You may also omit it if there is a similar "About" link in the tertiary navigation.

---

Following the <a href="https://blueprint.cityofnewyork.us/design/city-design-guidelines/" target="_blank" rel="noopener nofollow">NYC Logo Technical Guidelines</a>, the Pattern uses the "Partnership within City agencies–horizontal" lockup to highlight more than one agency responsible for the website's creation and maintenance.

![New York City Technical Logo Guidelines for Agency Partnerships](/img/nyc-logo-technical-guidelines-partnerships.png)

---

The following line must be present where the "NYC" mark is used in public to protect the intellectual property of the City and combat misuse of the logo.

*"The NYC mark is a trademark and service mark of the City of New York."*

Additionally, a reference to the nyc.gov terms of service also reinforces its terms of use. See <a href="https://www1.nyc.gov/home/terms-of-use.page" target="_blank" rel="noopener nofollow">section IV. INTELLECTUAL PROPERTY in the nyc.gov terms of service</a>.

**Section IV.** states (which may have been updated since the writing of this document) the following.

*"The City respects the intellectual property of others and it asks its users to do the same. Service marks and trademarks contained in or displayed on NYC.gov, and the contents of linked sites operated by third parties, are the property of their respective owners (which may be the City). All other design, information, text, graphics, images, pages, interfaces, links, software, and other items and materials contained in or displayed on NYC.gov, and the selection and arrangements thereof, are the property of the City of New York. All rights are reserved."*
