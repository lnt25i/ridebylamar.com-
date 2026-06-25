/**
 * LEGAL CONTENT — edit section text here when counsel provides final policies.
 *
 * Every document uses draft placeholders until you remove the draft banner in
 * components/LegalDocument.tsx after attorney approval.
 *
 * Do NOT claim attorney review is complete on draft pages.
 */

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export const legalDraftNotice = 'Draft — pending legal review.';

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description: 'Platform terms for riders, drivers, and visitors.',
    sections: [
      {
        heading: '1. Agreement to these terms',
        paragraphs: [
          'These Terms of Service (the "Terms") are a legal agreement between you and Lamar Technology LLC, doing business as RIDE ("RIDE," "we," "us," or "our"). By creating an account, accessing the RIDE app or website, requesting a ride, driving through the platform, or using any related services, you agree to these Terms and to all policies incorporated by reference, including the Privacy Policy, Rider Agreement, Driver Agreement, Payment Policy, Safety Policy, and Community Guidelines.',
          'If you do not agree to these Terms, you must not create an account or use RIDE services. We may incorporate additional policies by reference, and those policies form part of your agreement with us.',
        ],
      },
      {
        heading: '2. Description of the service',
        paragraphs: [
          'RIDE provides a technology platform that connects riders seeking transportation with independent drivers willing to provide transportation using their own vehicles. RIDE does not itself provide transportation services, does not own or operate the vehicles used by independent drivers, and does not employ drivers as transportation employees unless a separate written agreement states otherwise.',
          'Drivers are independent contractors or independent transportation providers, subject to applicable law, insurance requirements, and platform rules. RIDE does not guarantee that a driver will be available, that any ride request will be accepted, or that the service will be available in every area or at every time.',
        ],
      },
      {
        heading: '3. Minimum age requirement',
        paragraphs: [
          'You must be at least 21 years old to create an account, request a ride, provide rides, or otherwise use RIDE. By using RIDE, you represent that you are at least 21 years old and legally able to enter into this agreement.',
          'RIDE may request date of birth, identity verification, payment verification, or other information to confirm eligibility, and may suspend or terminate accounts where age eligibility cannot be verified.',
        ],
      },
      {
        heading: '4. Account registration and security',
        paragraphs: [
          'You agree to provide accurate, current, and complete information when creating or updating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You must notify RIDE immediately if you believe your account has been accessed without authorization.',
        ],
      },
      {
        heading: '5. User conduct',
        paragraphs: [
          'Safety and lawful use are conditions of using RIDE. You agree not to misuse the platform or interfere with its operation.',
        ],
        bullets: [
          'Do not misuse the app, interfere with its operation, or attempt unauthorized access to systems.',
          'Do not harass, harm, threaten, or discriminate against another person.',
          'Do not commit fraud, use another person\'s account, or provide false information.',
          'Do not use RIDE for illegal, unsafe, or unauthorized purposes.',
          'Comply with all applicable laws, traffic rules, seatbelt laws, and vehicle safety rules.',
        ],
      },
      {
        heading: '6. Payments and fees',
        paragraphs: [
          'Riders agree to pay all charges shown in the app, including ride fares, service fees, tolls, surcharges, cancellation fees, waiting-time fees, and other permitted charges. Payments are processed by Stripe or another authorized payment processor. RIDE may place temporary authorizations, verify payment methods, and charge saved payment methods according to the app flow and these Terms.',
          'Drivers receive payouts according to the Driver Agreement, the app\'s payout rules, Stripe Connect requirements, tax-compliance rules, and any hold, reserve, fraud, refund, chargeback, or safety-review rules that apply.',
        ],
      },
      {
        heading: '7. Third-party services',
        paragraphs: [
          'RIDE relies on third-party services including Supabase, Amazon Web Services, Stripe and Stripe Connect, Google Maps Platform, and background-check providers such as Checkr or another approved provider. Your use of RIDE may involve those providers processing data as described in the Privacy Policy and Third-Party Services Notice.',
        ],
      },
      {
        heading: '8. Service availability',
        paragraphs: [
          'RIDE may not always be available. We do not guarantee that pricing will always be the same or that the app will be error-free. We may change, suspend, restrict, or discontinue features at any time, subject to applicable law.',
        ],
      },
      {
        heading: '9. Suspension and termination',
        paragraphs: [
          'RIDE may suspend, restrict, deactivate, or terminate an account if we believe the account violates these Terms, creates safety risk, contains false information, fails screening or payment requirements, causes fraud risk, violates law, or harms the platform, riders, drivers, or the public.',
        ],
      },
      {
        heading: '10. Disclaimers and limitation of liability',
        paragraphs: [
          'To the maximum extent allowed by law, RIDE provides the app and services on an "as is" and "as available" basis. RIDE does not guarantee uninterrupted service, perfect accuracy of maps or ETAs, availability of drivers, or specific rider or driver outcomes.',
          'To the maximum extent allowed by law, RIDE will not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages, loss of profits, loss of data, personal injury caused by third parties, or damages resulting from rider or driver conduct, except where liability cannot be limited by law.',
        ],
      },
      {
        heading: '11. Governing law',
        paragraphs: [
          'These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law rules, unless applicable law requires otherwise. Effective Date: [Effective Date]. Questions about these Terms may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '12. Changes to these terms',
        paragraphs: [
          'Lamar Technology LLC may update or change these Terms at any time. When we do, we will post the updated version here with a revised effective date. Your continued use of RIDE after changes take effect means you accept the updated Terms, unless applicable law requires additional consent.',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect personal information.',
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          'This Privacy Policy explains how Lamar Technology LLC, doing business as RIDE, collects, uses, shares, protects, retains, and deletes personal information. It applies to riders, drivers, applicants, website visitors, and other users of RIDE services.',
        ],
      },
      {
        heading: '2. Categories of personal information collected',
        paragraphs: [
          'Depending on whether you are a rider, driver, applicant, or website visitor, RIDE may collect the following categories of personal information:',
        ],
        bullets: [
          'Identifiers: name, email, phone number, account ID, device ID, and IP address.',
          'Account information: login records, password-reset status, authentication metadata, and profile settings.',
          'Payment information: payment token, last four digits, billing details, payment status, receipts, and chargebacks. Full card numbers are processed by Stripe and are not stored by RIDE.',
          'Driver payout information: bank payout details and tax information handled through Stripe Connect.',
          'Location information: approximate and precise location while using the app, pickup and destination addresses, route data, and trip history.',
          'Driver eligibility information: driver license details, vehicle information, registration, insurance, profile photo, date of birth, background-check status, motor vehicle record status, and document expiration dates.',
          'Communications: support messages, emails, safety reports, complaint records, and app notifications.',
          'Technical data: app logs, crash reports, device model, operating system, network status, security logs, and fraud-prevention signals.',
          'Marketing preferences: opt-ins, opt-outs, referral codes, and communication preferences.',
        ],
      },
      {
        heading: '3. Why we collect personal information',
        bullets: [
          'To create and manage rider and driver accounts.',
          'To verify identity, eligibility, driver documents, tax information, and payout information.',
          'To provide rides, match riders and drivers, show maps, estimate prices, calculate ETAs, and complete trips.',
          'To process payments, payouts, refunds, chargebacks, cancellations, and receipts.',
          'To conduct background checks and motor vehicle record checks for drivers and applicants.',
          'To prevent fraud, protect safety, investigate incidents, enforce policies, and secure the platform.',
          'To provide customer support and respond to legal, privacy, and safety requests.',
          'To comply with tax, accounting, law enforcement, legal, insurance, and regulatory obligations.',
        ],
      },
      {
        heading: '4. Third-party services and processors',
        paragraphs: [
          'RIDE works with service providers that process data on our behalf. Supabase supports authentication, the backend database, user profiles, and storage. Amazon Web Services provides hosting, storage, server infrastructure, and logs. Stripe and Stripe Connect handle payments, rider payment methods, driver payouts, tax reporting, and verification flows. Google Maps Platform provides maps, address autocomplete, geocoding, routes, distance, ETA, and location features. A background-check provider such as Checkr handles background checks, motor vehicle record checks, and identity and license screening. Support and analytics tools, where used, help resolve tickets and review app performance and crashes.',
        ],
      },
      {
        heading: '5. Location data',
        paragraphs: [
          'RIDE collects location data only as needed to provide ride-related features, including pickup, destination, matching, navigation, ETA, fare calculation, fraud prevention, and safety support. Riders and drivers may be asked to enable location permissions, and some features may not work if those permissions are denied.',
          'The app discloses whether location is used only while the app is open, while a trip is active, or in the background for drivers during active availability or trips. RIDE does not sell location data or use it for unrelated advertising.',
        ],
      },
      {
        heading: '6. Payment and financial data',
        paragraphs: [
          'RIDE uses Stripe to process payments and payouts. RIDE does not store full credit or debit card numbers, full bank account numbers, or full tax identifiers on its own servers unless legally required. RIDE may store limited transaction metadata, payment status, receipts, last four digits, dispute records, refund status, payout status, and Stripe customer or account identifiers.',
        ],
      },
      {
        heading: '7. Background check data',
        paragraphs: [
          'For driver applicants and drivers, RIDE may collect and process information needed for identity verification, driver license validation, motor vehicle record checks, criminal background checks, and related safety screening. Before running a consumer report or investigative consumer report, RIDE obtains required authorization and provides legally required disclosures, as described in the Background Check Disclosure.',
        ],
      },
      {
        heading: '8. How we share information',
        paragraphs: [
          'RIDE may share information with riders, drivers, service providers, payment processors, background-check providers, hosting providers, mapping providers, insurance partners, legal advisors, auditors, law enforcement, courts, regulators, and parties involved in business transfers, only as needed for the purposes described in this Privacy Policy and as permitted by law.',
        ],
      },
      {
        heading: '9. Your choices and rights',
        paragraphs: [
          'You may access or update account information in the app, and may request account deletion, data export, correction, or support assistance through the app or by contacting support@ridebylamar.com. RIDE may retain certain records where necessary for legal, tax, safety, fraud, dispute, insurance, or compliance reasons. See the Data Retention & Deletion Policy for more detail.',
        ],
      },
      {
        heading: '10. Security',
        paragraphs: [
          'RIDE uses reasonable administrative, technical, and organizational safeguards, including access controls, authentication, secure third-party providers, encryption in transit, restricted administrative access, logging, and security review. No system can be guaranteed to be completely secure.',
        ],
      },
      {
        heading: '11. Children and age restriction',
        paragraphs: [
          'RIDE is not intended for anyone under 21 and does not knowingly allow users under 21 to create accounts, request rides, or drive. If RIDE learns that an account was created by someone under 21, RIDE may delete or suspend the account and retain limited records where required for safety, fraud prevention, or legal compliance.',
        ],
      },
      {
        heading: '12. SMS and text messaging',
        paragraphs: [
          'If you provide a mobile number, RIDE (Lamar Technology LLC) may send SMS text messages for account security and service notifications — most importantly one-time verification passcodes (2FA) to confirm your phone number. You opt in within the RIDE mobile app: during sign-up and in Account → Phone you enter your own mobile number and tap "Send code," and the screen discloses that you agree to receive a one-time verification passcode by SMS. Message frequency depends on your verification requests. Message and data rates may apply.',
          'You can opt out at any time by replying STOP to any message; reply HELP for help. Opting out of verification texts may prevent you from completing phone verification. We do not sell or share your mobile number or SMS consent with third parties or affiliates for their marketing. See our SMS Messaging Terms at https://www.ridebylamar.com/legal/sms-terms.',
        ],
      },
      {
        heading: '13. Contact',
        paragraphs: [
          'Privacy questions, deletion requests, and data requests may be sent to support@ridebylamar.com. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '14. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Privacy Policy at any time. Updated versions are posted here with a revised effective date, and your continued use of RIDE after the changes take effect means you accept the updated policy, unless applicable law requires additional consent.',
        ],
      },
    ],
  },
  {
    slug: 'sms-terms',
    title: 'SMS Messaging Terms',
    description: 'How RIDE sends text messages: opt-in consent, frequency, and opt-out.',
    sections: [
      {
        heading: 'Program description',
        paragraphs: [
          'RIDE (Lamar Technology LLC) uses SMS text messaging to send account-security and service messages — primarily one-time verification passcodes (2FA) used to confirm your mobile number during sign-up and when you add or change your phone number. RIDE does not send marketing or promotional text messages.',
        ],
      },
      {
        heading: 'How you opt in',
        paragraphs: [
          'You opt in inside the RIDE mobile app. During sign-up, and in Account → Phone, you enter your own mobile number and tap “Send code.” Directly above that button the app states: “By tapping Send code, you agree to receive a one-time verification passcode by SMS from RIDE at the number provided. Message frequency depends on your verification requests. Msg & data rates may apply. Reply STOP to opt out, HELP for help.” Exactly one passcode is sent per request, only to verify the number you just entered.',
        ],
      },
      {
        heading: 'Message frequency and cost',
        paragraphs: [
          'Message frequency depends on how many verification requests you make (typically one message per request). Message and data rates may apply, depending on your mobile carrier and plan.',
        ],
      },
      {
        heading: 'Opt-out and help',
        paragraphs: [
          'Reply STOP to any message to stop receiving texts; reply HELP for help. You can also contact support@ridebylamar.com. Opting out of verification messages may prevent you from completing phone verification and using features that require a verified number.',
        ],
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'We do not sell or share your mobile number or your SMS consent with third parties or affiliates for their own marketing. See our Privacy Policy at https://www.ridebylamar.com/legal/privacy-policy.',
        ],
      },
    ],
  },
  {
    slug: 'rider-agreement',
    title: 'Rider Agreement',
    description: 'Rider-specific terms and ride request rules.',
    sections: [
      {
        heading: '1. Rider eligibility',
        paragraphs: [
          'These Rider Terms apply to anyone who requests or receives rides through RIDE, operated by Lamar Technology LLC. Riders must be at least 21 years old. A rider may not request rides for unaccompanied minors or persons not permitted by the app, unless RIDE launches a separate, legally reviewed feature for that purpose.',
        ],
      },
      {
        heading: '2. Information collected from riders',
        bullets: [
          'Name, email address, and phone number.',
          'Payment method information processed by Stripe.',
          'Pickup and destination addresses.',
          'Location while using the app and during trips.',
          'Trip history.',
          'Support messages and safety reports.',
        ],
      },
      {
        heading: '3. Rider responsibilities',
        paragraphs: [
          'Riders must be respectful, wear a seatbelt, follow reasonable safety instructions, avoid damaging vehicles, avoid harassment or discrimination, and refrain from requesting illegal transportation or unsafe stops. Riders are responsible for entering correct pickup and destination information and for being ready at the pickup location.',
        ],
      },
      {
        heading: '4. Rider payments',
        paragraphs: [
          'Riders authorize RIDE and Stripe to charge the selected payment method for rides and related fees. Riders are responsible for failed payments, disputed charges, chargebacks, fraud, cleaning fees, damage fees, cancellation fees, or unpaid balances where permitted by law and policy. Fares and fees are shown in the app before confirmation where available.',
        ],
      },
      {
        heading: '5. Safety',
        paragraphs: [
          'Riders should use in-app safety tools and contact support for non-emergency issues. For emergencies or immediate danger, contact local authorities first. RIDE may suspend accounts based on safety reports, fraud indicators, or other risk signals.',
        ],
      },
      {
        heading: '6. Account deletion',
        paragraphs: [
          'Riders may initiate account deletion from within the app where required by app store rules. Some records may be retained if required for fraud prevention, safety, tax, accounting, chargebacks, disputes, legal claims, or regulatory obligations. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '7. Changes to this agreement',
        paragraphs: [
          'Lamar Technology LLC may update or change this Rider Agreement at any time. We post updated versions here with a revised effective date, and continued use of RIDE as a rider after the changes take effect indicates your acceptance of the updated agreement.',
        ],
      },
    ],
  },
  {
    slug: 'driver-agreement',
    title: 'Driver Agreement',
    description: 'Driver onboarding, conduct, and platform standards.',
    sections: [
      {
        heading: '1. Independent contractor status',
        paragraphs: [
          'This Driver Agreement applies to drivers who apply to or use RIDE, operated by Lamar Technology LLC, to receive ride requests and provide transportation services. Drivers are intended to be independent contractors, not employees, agents, franchisees, joint venturers, or partners of RIDE.',
          'Drivers choose whether, when, where, and for how long to use the platform, subject to app availability, safety policies, insurance rules, local law, and platform standards. Drivers are responsible for their own taxes, vehicle costs, insurance obligations, licenses, permits, and compliance with applicable law. RIDE does not guarantee trip volume or income.',
        ],
      },
      {
        heading: '2. Minimum requirements',
        bullets: [
          'Be at least 21 years old, or older if required by law, insurance, or RIDE policy.',
          'Hold a valid, active, non-suspended driver license.',
          'Have lawful authority to work as an independent contractor in the United States, if applicable.',
          'Provide accurate identity, contact, tax, payout, license, insurance, registration, and vehicle information.',
          'Pass background check, motor vehicle record check, identity verification, and any additional screening required by RIDE or its partners.',
          'Maintain an eligible, safe, registered, insured vehicle that meets RIDE standards.',
          'Comply with RIDE safety, anti-discrimination, cancellation, service, and community policies.',
        ],
      },
      {
        heading: '3. Required driver documents',
        bullets: [
          'Driver license (front and back) for license validity and identity matching.',
          'Selfie or profile photo for identity and rider trust.',
          'Date of birth for age eligibility and screening.',
          'Vehicle registration and insurance card or policy for eligibility and compliance.',
          'Vehicle make, model, year, color, and plate for rider matching and safety.',
          'Tax information and bank payout details handled through Stripe Connect.',
          'Background-check authorization for legal consent and screening.',
        ],
      },
      {
        heading: '4. Driver screening',
        paragraphs: [
          'Driver activation is conditional. RIDE may require identity verification, driver license validation, motor vehicle records, criminal background screening, tax verification, payment and payout verification, insurance review, and vehicle eligibility review. RIDE may also re-screen drivers periodically, after incidents, after document expiration, or where legally required.',
        ],
      },
      {
        heading: '5. Payouts and taxes',
        paragraphs: [
          'Driver payouts are processed through Stripe Connect or a similar payout provider. Drivers must complete all required tax and identity steps before payouts are enabled. Drivers are responsible for all federal, state, and local taxes, including income tax, self-employment tax, and business expenses. RIDE may use Stripe Connect to collect tax forms, verify tax information, and create, file, and deliver 1099 forms where legally required.',
        ],
      },
      {
        heading: '6. Holds, reserves, and chargebacks',
        paragraphs: [
          'RIDE may delay, hold, adjust, reverse, or offset payouts when needed because of fraud review, safety incidents, chargebacks, rider refunds, account errors, legal orders, tax holds, background-check issues, or suspected violations. Payout timing depends on verification status, bank connectivity, and third-party payout providers.',
        ],
      },
      {
        heading: '7. Deactivation or suspension',
        paragraphs: [
          'RIDE may suspend or deactivate a driver account for safety concerns, fraudulent activity, failed or expired documents, failed background screening, invalid license, insurance concerns, rider complaints, discrimination, harassment, unsafe driving, repeated cancellations, payment fraud, or violation of platform policies. Where a decision is based on a consumer report or background-check report, RIDE follows the legally required adverse-action process. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '8. Changes to this agreement',
        paragraphs: [
          'Lamar Technology LLC may update or change this Driver Agreement at any time. Updated terms are posted here with a revised effective date, and your continued use of RIDE as a driver after the changes take effect means you accept the updated agreement.',
        ],
      },
    ],
  },
  {
    slug: 'community-guidelines',
    title: 'Community Guidelines',
    description: 'Respectful conduct standards for riders and drivers.',
    sections: [
      {
        heading: '1. Respect for one another',
        paragraphs: [
          'RIDE, operated by Lamar Technology LLC, expects riders and drivers to treat each other with respect and professionalism. These guidelines apply to all users of the platform.',
        ],
        bullets: [
          'Be respectful and professional in every interaction.',
          'Respect vehicle property and personal boundaries.',
          'Do not threaten, harass, touch, or intimidate another person.',
        ],
      },
      {
        heading: '2. Non-discrimination',
        paragraphs: [
          'Do not discriminate based on race, color, religion, national origin, sex, gender identity, sexual orientation, disability, age, or other protected status. Drivers may not refuse lawful service based on protected characteristics.',
        ],
      },
      {
        heading: '3. Safety expectations',
        bullets: [
          'Wear seatbelts and follow all safety laws.',
          'Do not use RIDE while impaired or to enable unsafe behavior.',
          'Do not request or provide off-platform rides for trips arranged through RIDE.',
          'Report safety concerns through in-app support and safety reporting tools.',
        ],
      },
      {
        heading: '4. Enforcement',
        paragraphs: [
          'Violations of these guidelines may result in warnings, suspension, or removal from the platform under our Terms of Service. Serious safety complaints may trigger an account suspension review. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '5. Changes to these guidelines',
        paragraphs: [
          'Lamar Technology LLC may update or change these Community Guidelines at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated guidelines.',
        ],
      },
    ],
  },
  {
    slug: 'safety-policy',
    title: 'Safety Policy',
    description: 'Safety principles, reporting, and support access.',
    sections: [
      {
        heading: '1. Safety-first design',
        paragraphs: [
          'RIDE, operated by Lamar Technology LLC, is designed to support safer rides for riders and drivers. Safety tools should be easy to access in the app, especially during active trips.',
        ],
        bullets: [
          'Emergency button visible during active rides.',
          'Trip sharing feature where implemented.',
          'Driver and rider identity display before pickup.',
          'Vehicle make, model, color, and plate displayed to the rider.',
          'Rider first name or display name shown to the driver.',
          'Automatic trip status records: requested, accepted, arriving, started, completed, and canceled.',
        ],
      },
      {
        heading: '2. Reporting safety concerns',
        paragraphs: [
          'Users can report safety concerns through in-app support and safety reporting. The safety report flow covers harassment, discrimination, unsafe driving, accidents, wrong vehicle, fraud, assault, and other incidents. For immediate danger, contact local emergency services first.',
        ],
      },
      {
        heading: '3. Prohibited safety conduct',
        paragraphs: [
          'Riders and drivers may not threaten, harass, assault, discriminate against, stalk, or sexually harass another person, carry illegal weapons, transport illegal items, drive impaired, refuse lawful service based on protected characteristics, commit fraud, damage property, or engage in conduct that creates danger or fear.',
        ],
      },
      {
        heading: '4. Verification and review',
        paragraphs: [
          'Driver verification requirements are described in onboarding materials and the Driver Agreement. Serious safety complaints may lead to an account suspension review. RIDE does not claim that every screening type is active in every market before operational launch. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '5. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Safety Policy at any time. We post updated versions here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'payment-policy',
    title: 'Payment Policy',
    description: 'Payments, fares, payouts, and tax-related terms.',
    sections: [
      {
        heading: '1. Rider payments',
        paragraphs: [
          'Rider payments are processed through Stripe by Lamar Technology LLC, doing business as RIDE. Riders authorize RIDE and Stripe to charge their selected payment method for ride fares, service fees, cancellation fees, tolls, surcharges, cleaning or damage fees where permitted, and other disclosed charges. RIDE may place temporary authorizations and verify payment methods.',
        ],
      },
      {
        heading: '2. Driver payouts',
        paragraphs: [
          'Driver payouts are processed through Stripe Connect or another approved payout provider. Drivers must complete onboarding, identity verification, payout verification, tax information, and any required risk review before receiving payouts. RIDE does not promise specific income or payout schedules.',
        ],
      },
      {
        heading: '3. Tax information',
        paragraphs: [
          'Drivers are independent contractors for tax purposes unless a final legal agreement says otherwise, and are responsible for reporting income and paying their own taxes. RIDE may use Stripe Connect to collect tax forms, verify tax information, and create, file, and deliver 1099 forms where legally required.',
        ],
      },
      {
        heading: '4. Holds, reserves, and chargebacks',
        paragraphs: [
          'RIDE may delay, hold, adjust, reverse, or offset payouts when needed because of fraud review, safety incidents, chargebacks, rider refunds, account errors, legal orders, tax holds, background-check issues, or suspected violations.',
        ],
      },
      {
        heading: '5. No off-platform payments',
        paragraphs: [
          'Unless RIDE launches a separate, attorney-reviewed cash payment feature, all payments must occur through the app. Drivers may not solicit cash or off-platform payments for rides arranged through RIDE. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '6. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Payment Policy at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'background-check-disclosure',
    title: 'Background Check Disclosure & Authorization',
    description: 'FCRA disclosure and authorization for driver applicants.',
    sections: [
      {
        heading: '1. Purpose of screening',
        paragraphs: [
          'This disclosure applies to driver applicants and drivers for RIDE, operated by Lamar Technology LLC. Driver activation is conditional on screening that may include identity verification, driver license validation, motor vehicle record checks, criminal background screening, and related safety review. The scope of screening depends on applicable law, market, and operational readiness, and may not be active in all regions until launch procedures are complete.',
        ],
      },
      {
        heading: '2. Disclosure',
        paragraphs: [
          'RIDE may obtain a consumer report and/or investigative consumer report about you for purposes of evaluating your eligibility to access the RIDE driver platform, continue using the platform, or comply with safety and legal requirements. The report may include information about your identity, driving record, criminal history, license status, employment or credential history where applicable, and other legally permitted information.',
        ],
      },
      {
        heading: '3. Authorization',
        paragraphs: [
          'By selecting "I authorize" or signing in the onboarding flow, you authorize RIDE and its designated background-check provider to obtain consumer reports and/or investigative consumer reports about you, and to use those reports for driver eligibility, safety, compliance, and platform access decisions, as permitted by law. You also authorize ongoing or periodic checks where permitted by law and disclosed by RIDE.',
        ],
      },
      {
        heading: '4. Your rights and the adverse action process',
        paragraphs: [
          'RIDE uses a reputable background-check provider, such as Checkr, that supports applicant consent, identity verification, motor vehicle records, criminal background screening, and FCRA compliance workflows. Where required or recommended, RIDE considers the nature and gravity of an offense, the time passed since the offense or completion of sentence, and the relationship of the offense to safe passenger transportation.',
          'If RIDE is considering adverse action based at least in part on a background-check report, you will receive a pre-adverse action notice that includes a copy of the report and a summary of your rights under the Fair Credit Reporting Act. You have the right to review the report and to dispute inaccurate or incomplete information directly with the background-check company, and to provide additional context before a final decision is made. A final adverse action notice is provided if a final decision to deny or deactivate is made.',
        ],
      },
      {
        heading: '5. Effective date and contact',
        paragraphs: [
          'Effective Date: [Effective Date]. Questions about background-check screening or to dispute a decision may be directed to support@ridebylamar.com, in addition to contacting the background-check company directly.',
        ],
      },
      {
        heading: '6. Changes to this disclosure',
        paragraphs: [
          'Lamar Technology LLC may update or change this Background Check Disclosure & Authorization at any time. Updated versions are posted here with a revised effective date, and your continued participation in screening or use of the driver platform after the changes take effect means you accept the updated disclosure.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    description: 'How this website may use cookies and similar technologies.',
    sections: [
      {
        heading: '1. Website cookies',
        paragraphs: [
          'If RIDE, operated by Lamar Technology LLC, operates a website or web app, it may use cookies or similar technologies for login sessions, security, analytics, performance, and preferences. This marketing site may use essential cookies for basic functionality, and analytics only where enabled.',
        ],
      },
      {
        heading: '2. Future tracking technologies',
        paragraphs: [
          'If marketing pixels, advertising tracking, or cross-site tracking are added later, RIDE will update the Privacy Policy, cookie banner, and consent flows as required by law before expanding tracking.',
        ],
      },
      {
        heading: '3. Mobile app',
        paragraphs: [
          'The RIDE mobile application may use additional technologies and logging described in the Privacy Policy. Effective Date: [Effective Date]. Questions may be sent to support@ridebylamar.com.',
        ],
      },
      {
        heading: '4. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Cookie Policy at any time. Updated versions are posted here with a revised effective date, and continued use of the site after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    description: 'Our commitment to accessible and non-discriminatory service.',
    sections: [
      {
        heading: '1. Our commitment',
        paragraphs: [
          'RIDE, operated by Lamar Technology LLC, aims to provide services without unlawful discrimination and to improve accessibility across our website and mobile applications as we prepare for launch and gather user feedback.',
        ],
      },
      {
        heading: '2. Non-discrimination',
        paragraphs: [
          'Riders and drivers must not discriminate based on protected characteristics. Any service animal, disability accommodation, or accessible vehicle policy will be drafted and reviewed before launch and made available to users as it is finalized.',
        ],
      },
      {
        heading: '3. Feedback',
        paragraphs: [
          'If you encounter accessibility barriers on this site or in the app, contact support@ridebylamar.com with a description of the issue and your preferred contact method, and we will work to address it. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '4. Changes to this statement',
        paragraphs: [
          'Lamar Technology LLC may update or change this Accessibility Statement at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated statement.',
        ],
      },
    ],
  },
  {
    slug: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    description: 'Trip cancellations, no-shows, and payment adjustments.',
    sections: [
      {
        heading: '1. Rider cancellations',
        paragraphs: [
          'This policy is provided by Lamar Technology LLC, doing business as RIDE. Riders may cancel rides through the app. RIDE may charge a cancellation fee if a rider cancels after a driver has accepted the request, after the driver has started traveling to pickup, after a grace period expires, or where the rider is not present at pickup after the waiting time. The app discloses cancellation fees before the rider confirms a ride or inside the ride confirmation flow.',
        ],
      },
      {
        heading: '2. Driver cancellations and no-shows',
        paragraphs: [
          'Drivers may reject or cancel requests, but repeated, unsafe, or discriminatory cancellations, or cancellations after acceptance, may affect driver account standing, eligibility, incentives, or platform access. A rider may be treated as a no-show if the driver arrives and waits the required time but the rider does not appear or cannot be contacted. A driver may be treated as a no-show if app records show the driver did not arrive or did not make a reasonable pickup attempt.',
        ],
      },
      {
        heading: '3. When refunds may be considered',
        bullets: [
          'Duplicate charge or billing error.',
          'Driver no-show confirmed by app records.',
          'Trip cancelled by the driver after the rider was charged.',
          'Material service failure caused by RIDE systems.',
          'Safety concern or serious incident verified by RIDE review.',
          'Incorrect fare caused by a technical error.',
        ],
      },
      {
        heading: '4. When refunds may be denied',
        bullets: [
          'Completed trips where the fare was correctly displayed and accepted.',
          'Rider entered the wrong pickup or destination.',
          'Rider was not at the pickup location after the waiting period.',
          'Rider violated safety or conduct rules.',
          'Off-platform payment arrangements.',
          'False, abusive, or fraudulent refund claims.',
        ],
      },
      {
        heading: '5. Processing time',
        paragraphs: [
          'Approved refunds are usually submitted to the payment processor within a few business days. The rider\'s bank or card issuer may take additional time to post the refund, and RIDE is not responsible for delays caused by banks, card issuers, or payment processors. For help with a specific trip, contact support@ridebylamar.com. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '6. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Refund & Cancellation Policy at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'support-policy',
    title: 'Support Policy',
    description: 'Support channels, response targets, and escalation.',
    sections: [
      {
        heading: '1. How to reach support',
        paragraphs: [
          'RIDE, operated by Lamar Technology LLC, provides support through in-app help and a dedicated support email at support@ridebylamar.com. We aim to provide clear support channels even where the support team is small.',
        ],
      },
      {
        heading: '2. Support categories and response targets',
        bullets: [
          'Login and account issues: typically within 24 to 48 hours, handled by technical support.',
          'Billing and refunds: typically within 24 to 72 hours, handled by finance and support review.',
          'Driver onboarding: typically within 2 to 5 business days, handled by operations and compliance.',
          'Safety incidents: immediate triage where possible, escalated to safety, legal, and insurance.',
          'Legal and privacy requests: handled as required by law by the legal and privacy team.',
          'Background-check disputes: handled following the provider and FCRA workflow.',
        ],
      },
      {
        heading: '3. Human review for sensitive matters',
        paragraphs: [
          'Automated or AI support may help answer common questions, but sensitive topics — including safety incidents, background-check denials, account deactivation, payment disputes, data deletion, subpoenas, and legal threats — are escalated to a human reviewer. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '4. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Support Policy at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'data-retention',
    title: 'Data Retention & Deletion Policy',
    description: 'How long RIDE keeps data and how deletion works.',
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          'This policy explains how long RIDE, operated by Lamar Technology LLC, may keep different types of data. Retention periods are set to match tax, insurance, FCRA, transportation, dispute, and consumer-protection requirements, and may be adjusted as those requirements change.',
        ],
      },
      {
        heading: '2. Retention by data category',
        bullets: [
          'Active account profile: retained while the account is active, for account operation and support.',
          'Deleted account records: a minimal record is retained as needed for fraud prevention, legal defense, and compliance.',
          'Trip history: retained for the period needed for receipts, disputes, safety, tax, and insurance.',
          'Payment transaction records: retained for accounting, disputes, taxes, and chargebacks.',
          'Driver tax and payout records: retained for the legally required tax period for 1099 and tax compliance.',
          'Background-check authorization and decision records: retained for the legally required period for FCRA, EEOC, and dispute defense.',
          'Support tickets: retained for support quality, disputes, and safety.',
          'Safety incidents: retained for the period needed for insurance, legal, and safety investigations.',
          'App and crash logs: retained for a limited period, typically 30 to 180 days, unless needed longer.',
        ],
      },
      {
        heading: '3. Account deletion',
        paragraphs: [
          'RIDE allows users to initiate account deletion inside the app where the app supports account creation. Deletion removes data that RIDE is not legally required or permitted to retain. Some records may be retained where necessary for fraud prevention, safety, tax, accounting, chargebacks, disputes, legal claims, or regulatory obligations.',
        ],
      },
      {
        heading: '4. Requests and contact',
        paragraphs: [
          'You can request account deletion, data export, or correction through the app or by contacting support@ridebylamar.com. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '5. Changes to this policy',
        paragraphs: [
          'Lamar Technology LLC may update or change this Data Retention & Deletion Policy at any time. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated policy.',
        ],
      },
    ],
  },
  {
    slug: 'third-party-services',
    title: 'Third-Party Services Notice',
    description: 'The third-party providers RIDE relies on and what they do.',
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          'RIDE, operated by Lamar Technology LLC, relies on third-party services to operate the platform. These providers are disclosed in the Privacy Policy and reviewed in our Apple App Privacy and Google Play Data Safety declarations. Your use of RIDE may involve these providers processing data as described below.',
        ],
      },
      {
        heading: '2. Mapping and location',
        paragraphs: [
          'RIDE uses Google Maps Platform to provide maps, address search, geocoding, route calculation, distance estimates, ETAs, navigation-related features, and location-based ride matching. Use of Google Maps features may be subject to Google\'s terms and privacy policies, and RIDE complies with Google Maps Platform attribution, caching, display, and data-use requirements.',
        ],
      },
      {
        heading: '3. Infrastructure, payments, and screening',
        bullets: [
          'Supabase: authentication and backend data, including user profiles and app records.',
          'Amazon Web Services: hosting, storage, and server infrastructure.',
          'Stripe and Stripe Connect: payments, driver payouts, tax reporting, and verification flows.',
          'Background-check provider such as Checkr: driver background checks, motor vehicle record checks, and identity and license screening.',
        ],
      },
      {
        heading: '4. Data use and contact',
        paragraphs: [
          'These services process only the data needed for their function, as described in the Privacy Policy. Questions about third-party services may be sent to support@ridebylamar.com. Effective Date: [Effective Date].',
        ],
      },
      {
        heading: '5. Changes to this notice',
        paragraphs: [
          'Lamar Technology LLC may update or change this Third-Party Services Notice at any time, including as we add or replace providers. Updated versions are posted here with a revised effective date, and continued use of RIDE after the changes take effect means you accept the updated notice.',
        ],
      },
    ],
  },
];

export const legalSlugs = legalDocuments.map((d) => d.slug);

export type LegalSlug = (typeof legalSlugs)[number];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((d) => d.slug === slug);
}
