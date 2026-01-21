// Translation system for CERNO Website
// Supports: 'en' (English), 'fi' (Finnish)

const translations = {
    en: {
        // Navigation - Top Banner
        'nav.about': 'About',
        'nav.events': 'Events',
        'nav.resources': 'Resources',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact us',
        
        // Footer - Bottom Banner
        'footer.links': 'Useful links',
        'footer.aboutus': 'About us',
        'footer.events': 'Events',
        'footer.contact': 'Contact',
        'footer.partners': 'Partners',
        'footer.info': 'LAB Case Club',
        'footer.address': 'Mukkulankatu 19, 15210 Lahti',
        'footer.legal': 'Terms and Conditions',
        'footer.privacy': 'Privacy Policy',
        'footer.copyright': '© 2026 LAB Case Club. All rights reserved.',
        'footer.sponsors.thanks': 'A warm thanks to the first sponsors supporting our launch.',
        
        // Homepage
        'home.title': 'LAB Case Club - CERNO',
        'home.about.title': 'What is LAB Case Club?',
        'home.about.text1': 'LAB case club is a group of self-motivated students who develop their professional skills by solving business cases.',
        'home.about.text2': 'With both internal practice and business cooperation, students gain real-world experience on how to contribute to a challenging and competitive world.',
        'home.about.learnmore': 'Learn More',
        
        // About Page
        'about.title': 'About - LAB Case Club - CERNO',
        'about.hero': 'Board of 2026',
        'about.role.president': 'President',
        'about.role.vicepresident': 'Vice President',
        'about.role.sponsorship': 'Sponsorship Director',
        'about.role.marketing': 'Marketing Director',
        'about.role.marketingleader': 'Marketing Leader',
        'about.role.digitalcontent': 'Digital Content Producer',
        'about.ronja.desc': 'Motivated International Business student who is passionate about communication, sustainability, and marketing.',
        'about.werner.desc': 'Scheduling at CERNO – aims to share experience from the NCC case competition.',
        'about.june.desc': 'Attracting sponsorship for LCC and building partnerships to support our activities. Oversees merchandise production and sales - hoodies, mugs, pens, and more.',
        'about.valentin.desc': 'Ambitious International Business student interested in marketing and economics. Passionate about sustainability and problem-solving.',
        'about.ignat.desc': 'Ambitious Industrial Design student focusing on marketing strategy, digital campaigns, and creative promotion.',
        'about.kristian.desc': 'Final-year Software Engineering student, involved with website development with eLAB, social media advertising, and digital advertising.',
        'about.advisor': 'Supervising Teacher: Jonathan Bradshaw – Oversight and approval of board actions, with veto power in votes.',
        'about.advisor.thanks': 'We are deeply grateful for Jonathan\'s guidance and support. He gave the starting signal for our activities and continues to support the club\'s success.',
        
        // Events Page
        'events.title': 'Events - LAB Case Club - CERNO',
        'events.upcoming': 'Upcoming Events',
        'events.past': 'Past Events',
        'events.duuniexpo.title': 'DuuniExpo 2026',
        'events.duuniexpo.desc': 'Lahti Case Club warmly welcomes you to LUT University\'s DuuniExpo, held at the Lahti campus. You will find our booth among the others! The event takes place on January 28, 2026, from 9:30 AM to 3:30 PM.',
        
        // Calendar
        'calendar.title': 'Calendar',
        'calendar.upcoming': 'Upcoming Events',
        'calendar.noevents': 'No upcoming events',
        'calendar.months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'calendar.days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        
        // Resources Page
        'resources.title': 'Resources - LAB Case Club - CERNO',
        'resources.heading': 'Resources',
        'resources.startheading': 'Start here',
        'resources.businessheading': 'For case companies',
        'resources.ncc.title': 'NCC 2025 Case Competition',
        'resources.ncc.desc': 'Explore insights from the Nordic Case Competition 2025. Learn about the case format, participating companies, and key takeaways from this prestigious business case event.',
        'resources.nibs.title': 'June Yeoh - NIBS Competition China',
        'resources.nibs.desc': 'Explore insights from the NIBS Competition China. Learn about the case format, participating companies, and key takeaways from this international case event.',
        'resources.cerno.en.title': 'Cerno - English (Yellow)',
        'resources.cerno.en.desc': 'Learn about Cerno: overview, collaboration opportunities, and key highlights in this English brochure.',
        'resources.cerno.fi.title': 'Cerno - Finnish (Yellow)',
        'resources.cerno.fi.desc': 'Cerno-esite paikallisesta toiminnasta, yhteistyömahdollisuuksista ja yhteystiedoista.',
        'resources.nutshell.title': 'Cerno in a nutshell',
        'resources.nutshell.desc': 'A concise overview of Cerno\'s mission, activities, and how to get involved.',
        
        // FAQ Page
        'faq.title': 'FAQ - LAB Case Club - CERNO',
        'faq.heading': 'Frequently Asked Questions',
        'faq.q1': 'What is LAB Case Club – CERNO?',
        'faq.a1': 'LAB Case Club, also known as CERNO, is a student organization at LAB University of Applied Sciences dedicated to developing professional skills by solving real-world business cases. We provide students with practical experience in strategic thinking, problem-solving, and business analysis through both internal practice and collaboration with real companies.',
        'faq.q2': 'How can I become a member?',
        'faq.a2': 'We welcome all motivated students who want to develop their professional skills! You can join by contacting us via our Contact page on the website or on Instagram or LinkedIn. We hold regular meetings and events throughout the academic year, and new members are always welcome, regardless of experience level.',
        'faq.q3': 'Do I need previous experience in business competitions to participate?',
        'faq.a3': 'Not at all! While prior experience is helpful, it is not necessary. We provide training and resources for beginners, and our team includes members with varying levels of experience. Our internal practices are designed to help you learn and improve your case-solving skills in a supportive environment before participating in larger competitions.',
        'faq.q4': 'What events does CERNO organize?',
        'faq.a4': 'We organize a variety of events throughout the year, such as case competition workshops, networking sessions with business professionals. We participate in national and international case competitions as well as career and recruitment fairs, such as DuuniExpo. Check our Events page for the current schedule - you\'ll see upcoming events there.',
        'faq.q5': 'How can my company collaborate with CERNO?',
        'faq.a5': 'We\'re always looking for partnership opportunities! Companies can collaborate with us through sponsorships, providing real business cases for our students to solve, offering mentorship, or participating in our events. If you\'re interested in partnering with us, please visit our Contact page and fill out the business collaboration form, and we\'ll get back to you promptly.',
        
        // Contact Page
        'contact.title': 'Contact Us - LAB Case Club - CERNO',
        'contact.business.title': 'Do you want to establish a business collaboration?',
        'contact.business.btn': 'Join us',
        'contact.divider': 'OR',
        'contact.student.title': 'Are you a motivated student?',
        'contact.student.btn': 'Contact us',
        'form.title': 'Contact form',
        'form.fullname': 'Full Name:',
        'form.required': '(required)',
        'form.company': 'Company / Organization:',
        'form.email': 'Email:',
        'form.phone': 'Phone Number:',
        'form.optional': '(optional)',
        'form.message': 'Message:',
        'form.send': 'Send Message',
        'form.sending': 'Sending...',
        
        // Form validation messages
        'form.error.phone': 'Please enter a valid phone number (e.g., +358 40 123 4567 or 040-123-4567)',
        'form.error.emailjs': 'Email service not loaded. Please refresh the page.',
        'form.success': 'Thank you for your submission! We will get back to you soon. You can close this window.',
        'form.error.failed': 'Failed to send message',
        'form.error.unknown': 'Unknown error',
        
        // Privacy Popup
        'privacy.title': 'Privacy Policy',
        'privacy.intro': 'Introduction: LAB Case Club ("we", "us", "our") is committed to protecting the privacy of visitors to our website. This policy explains what personal information we collect, why we collect it, how we use it, and your rights.',
        'privacy.collect.title': 'Information We Collect',
        'privacy.collect.text': 'We collect personal data that you voluntarily provide when you contact us using the contact forms on this site: typically your name, email address, and message content. We may also process basic technical information automatically (e.g., browser type, device, IP address) for site operation and security.',
        'privacy.use.title': 'How We Use Your Data',
        'privacy.use.text': 'We use submitted contact details to respond to enquiries, coordinate events, and manage partnerships. We do not use personal data for marketing unless you explicitly opt in. Technical data may be used to improve website performance and security.',
        'privacy.thirdparty.title': 'Third Parties',
        'privacy.thirdparty.text': 'We use EmailJS to deliver contact-form messages. Please review EmailJS\'s privacy documentation for details on their processing. This site also embeds Google Maps for location display; Google may collect information according to their privacy policy.',
        'privacy.retention.title': 'Retention and Security',
        'privacy.retention.text': 'We retain submissions only as long as necessary to fulfil the purpose for which they were submitted or as required by law. We take reasonable technical and organisational measures to protect your information, but cannot guarantee absolute security for data transmitted over the internet.',
        'privacy.rights.title': 'Your Rights',
        'privacy.rights.text': 'You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, please contact us. We will respond to verified requests within a reasonable timeframe.',
        'privacy.contact': 'Contact: For privacy questions, please reach out via our contact page.',
        
        // Partners Popup
        'partners.title': 'Sponsorship & Partners',
        'partners.overview': 'Overview: LAB Case Club welcomes collaboration with organisations interested in supporting student learning, events, and career connections. We are open to establishing partnerships that provide mutual value for students and organisations.',
        'partners.opportunities.title': 'Partnership Opportunities',
        'partners.opportunities.text': 'Sponsorship options include event support, case cooperation, branded merchandise (hoodies, mugs, pens), recruitment sessions, and workshop collaborations. Partners gain visibility through our events, website, and social channels.',
        'partners.work.title': 'How We Work With Partners',
        'partners.work.text': 'We tailor partnership packages to match your organisation\'s goals and timelines. Packages typically include logo placement, speaking opportunities, recruitment access, and co-branded materials depending on the level of support.',
        'partners.current.title': 'Partners',
        'partners.current.text': 'Current partners are listed on this site when agreements are active. If none are shown, we are actively seeking collaborations.',
        'partners.interested': 'Interested? Please contact us to request a partnership proposal or discuss tailored options.'
    },
    fi: {
        // Navigation - Top Banner
        'nav.about': 'Meistä',
        'nav.events': 'Tapahtumat',
        'nav.resources': 'Resurssit',
        'nav.faq': 'FAQ',
        'nav.contact': 'Ota yhteyttä',
        
        // Footer - Bottom Banner
        'footer.links': 'Hyödylliset linkit',
        'footer.aboutus': 'Meistä',
        'footer.events': 'Tapahtumat',
        'footer.contact': 'Ota yhteyttä',
        'footer.partners': 'Yhteistyö',
        'footer.info': 'LAB Case Club',
        'footer.address': 'Mukkulankatu 19, 15210 Lahti',
        'footer.legal': 'Käyttöehdot',
        'footer.privacy': 'Tietosuojakäytäntö',
        'footer.copyright': '© 2026 LAB Case Club. Kaikki oikeudet pidätetään.',
        'footer.sponsors.thanks': 'Lämpimät kiitokset ensimmäisille sponsoreille, jotka tukevat toimintaamme.',
        
        // Homepage
        'home.title': 'LAB Case Club - CERNO',
        'home.about.title': 'Mikä on LAB Case Club?',
        'home.about.text1': 'LAB Case Club on ryhmä itseohjautuvia opiskelijoita, jotka kehittävät ammatillisia taitojaan ratkaisemalla liiketoimintatapauksia.',
        'home.about.text2': 'Sekä sisäisen harjoittelun että yritysyhteistyön kautta, opiskelijat saavat käytännön kokemusta kuinka osallistua haastavassa kilpailuympäristössä.',
        'home.about.learnmore': 'Lisää',
        
        // About Page
        'about.title': 'Meistä - LAB Case Club - CERNO',
        'about.hero': 'Hallitus 2026',
        'about.role.president': 'Puheenjohtaja',
        'about.role.vicepresident': 'Varapuheenjohtaja',
        'about.role.sponsorship': 'Sponsorointijohtaja',
        'about.role.marketing': 'Markkinointijohtaja',
        'about.role.marketingleader': 'Markkinointijohtaja',
        'about.role.digitalcontent': 'Digitaalisen sisällön tuottaja',
        'about.ronja.desc': 'Motivoitunut kansainvälisen liiketalouden opiskelija, joka on intohimoinen kommunikaatioon, kestävään kehitykseen ja markkinointiin.',
        'about.werner.desc': 'Aikatauluttaa CERNO:lla – pyrkii jakamaan kokemusta NCC case-kilpailusta.',
        'about.june.desc': 'Houkuttelee sponsoreita LCC:lle ja rakentaa kumppanuuksia toiminnan tukemiseksi. Vastaa tuotteiden tuotannosta ja myynnistä – hupparit, mukit, kynät ja muut tuotteet.',
        'about.valentin.desc': 'Kunnianhimoinen kansainvälisen liiketalouden opiskelija, joka on kiinnostunut markkinoinnista ja taloustieteestä. Intohimoinen kestävään kehitykseen ja ongelmanratkaisuun.',
        'about.ignat.desc': 'Kunnianhimoinen teollisen muotoilun opiskelija, joka keskittyy markkinointistrategiaan, digitaalisiin kampanjoihin ja luovaan myynninedistämiseen.',
        'about.kristian.desc': 'Viimeisen vuoden ohjelmistotekniikan opiskelija. Osallistuu verkkosivuston kehittämiseen eLABin kanssa sekä sosiaalisen median ja digitaaliseen mainontaan.',
        'about.advisor': 'Valvova opettaja: Jonathan Bradshaw – Valvoo ja hyväksyy hallituksen toimet sekä käyttää veto-oikeutta äänestyksissä.',
        'about.advisor.thanks': 'Olemme syvästi kiitollisia Jonathanin ohjauksesta ja tuesta. Hän antoi lähtölaukauksen toiminnallemme ja jatkaa edelleen klubin tukemista.',
        
        // Events Page
        'events.title': 'Tapahtumat - LAB Case Club - CERNO',
        'events.upcoming': 'Tulevat tapahtumat',
        'events.past': 'Menneet tapahtumat',
        'events.duuniexpo.title': 'DuuniExpo 2026',
        'events.duuniexpo.desc': 'Lahti Case Club toivottaa sinut lämpimästi tervetulleeksi LUT-yliopiston DuuniExpoon Lahden kampuksella. Löydät kojumme muiden joukosta! Tapahtuma järjestetään 28. tammikuuta 2026 klo 9:30–15:30.',        
        // Calendar
        'calendar.title': 'Kalenteri',
        'calendar.upcoming': 'Tulevat tapahtumat',
        'calendar.noevents': 'Ei tulevia tapahtumia',
        'calendar.months': ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
        'calendar.days': ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'],        
        // Resources Page
        'resources.title': 'Resurssit - LAB Case Club - CERNO',
        'resources.heading': 'Resurssit',
        'resources.startheading': 'Aloita tästä',
        'resources.businessheading': 'Case-yrityksille',
        'resources.ncc.title': 'NCC 2025 Case-kilpailu',
        'resources.ncc.desc': 'Tutustu Nordic Case Competition 2025 -tapahtumaan. Opi case-kilpailuiden rakenteesta, osallistuvista yrityksistä ja tärkeimmistä opeista tästä arvostetuista liiketoimintacase-tapahtumasta.',
        'resources.nibs.title': 'June Yeoh - NIBS-kilpailu Kiina',
        'resources.nibs.desc': 'Tutustu NIBS Competition China -tapahtumaan. Opi case-kilpailuiden rakenteesta, osallistuvista yrityksistä ja tärkeimmistä opeista tästä kansainvälisestä case-tapahtumasta.',
        'resources.cerno.en.title': 'Cerno - Englanti (Keltainen)',
        'resources.cerno.en.desc': 'Tutustu Cernoon: yleiskatsaus, yhteistyömahdollisuudet ja tärkeimmät kohokohdat tässä englanninkielisessä esitteessä.',
        'resources.cerno.fi.title': 'Cerno - Suomi (Keltainen)',
        'resources.cerno.fi.desc': 'Cerno-esite paikallisesta toiminnasta, yhteistyömahdollisuuksista ja yhteystiedoista.',
        'resources.nutshell.title': 'Cerno pähkinänkuoressa',
        'resources.nutshell.desc': 'Tiivis yleiskatsaus Cernon tehtävästä, toiminnasta ja kuinka mukaan pääsee.',
        
        // FAQ Page
        'faq.title': 'FAQ - LAB Case Club - CERNO',
        'faq.heading': 'Usein kysytyt kysymykset',
        'faq.q1': 'Mikä on LAB Case Club – CERNO?',
        'faq.a1': 'LAB Case Club, joka tunnetaan myös nimellä CERNO, on LAB-ammattikorkeakoulun opiskelijajärjestö. Kehitämme ammatillisia taitoja ratkaisemalla tosielämän liiketoimintatapauksia. Tarjoamme opiskelijoille käytännön kokemusta strategisesta ajattelusta, ongelmanratkaisusta ja liiketoiminta-analyysistä sekä sisäisten harjoitusten että yritysten kanssa tehtävän yhteistyön kautta.',
        'faq.q2': 'Kuinka voin liittyä jäseneksi?',
        'faq.a2': 'Toivotamme tervetulleiksi kaikki motivoituneet opiskelijat, jotka haluavat kehittää ammatillisia taitojaan! Voit liittyä mukaan ottamalla yhteyttä verkkosivustomme kautta, Instagramissa tai LinkedInissä. Järjestämme säännöllisiä kokouksia ja tapahtumia lukuvuoden aikana, ja uudet jäsenet ovat aina tervetulleita kokemustasosta riippumatta.',
        'faq.q3': 'Tarvitsenko aikaisempaa kokemusta liiketalouskisoista osallistuakseni?',
        'faq.a3': 'Ei lainkaan! Vaikka aiempi kokemus on hyödyllistä, se ei ole välttämätöntä. Tarjoamme koulutusta ja resursseja aloittelijoille, ja tiimissämme on jäseniä eri kokemustasolta. Sisäiset harjoituksemme on suunniteltu auttamaan sinua oppimaan ja parantamaan case-ratkaisutaitojasi kannustavassa ympäristössä ennen osallistumista suurempiin kilpailuihin.',
        'faq.q4': 'Mitä tapahtumia CERNO järjestää?',
        'faq.a4': 'Järjestämme vuoden aikana erilaisia tapahtumia, kuten case-kilpailujen työpajoja ja verkostoitumistilaisuuksia liike-elämän ammattilaisten kanssa. Osallistumme kansallisiin ja kansainvälisiin case-kilpailuihin sekä ura- ja rekrytointimessuihin, kuten DuuniExpoon. Tarkista Tapahtumat-sivultamme ajankohtainen aikataulu.',
        'faq.q5': 'Kuinka yritykseni voi tehdä yhteistyötä CERNOn kanssa?',
        'faq.a5': 'Etsimme aina kumppanuusmahdollisuuksia! Yritykset voivat tehdä yhteistyötä kanssamme sponsorointien kautta, tarjoamalla todellisia liiketoimintatapauksia opiskelijoidemme ratkaistavaksi, tarjoamalla mentorointia tai osallistumalla tapahtumiimme. Jos olet kiinnostunut yhteistyöstä, käy Yhteystiedot-sivullamme ja täytä yritysyhteistyölomake, niin otamme sinuun yhteyttä pian.',
        
        // Contact Page
        'contact.title': 'Ota yhteyttä - LAB Case Club - CERNO',
        'contact.business.title': 'Haluatko solmia yritysyhteistyötä?',
        'contact.business.btn': 'Liity mukaan',
        'contact.divider': 'TAI',
        'contact.student.title': 'Oletko motivoitunut opiskelija?',
        'contact.student.btn': 'Ota yhteyttä',
        'form.title': 'Yhteydenottolomake',
        'form.fullname': 'Koko nimi:',
        'form.required': '(pakollinen)',
        'form.company': 'Yritys / Organisaatio:',
        'form.email': 'Sähköposti:',
        'form.phone': 'Puhelinnumero:',
        'form.optional': '(valinnainen)',
        'form.message': 'Viesti:',
        'form.send': 'Lähetä viesti',
        'form.sending': 'Lähetetään...',
        
        // Form validation messages
        'form.error.phone': 'Anna kelvollinen puhelinnumero (esim. +358 40 123 4567 tai 040-123-4567)',
        'form.error.emailjs': 'Sähköpostipalvelua ei ole ladattu. Päivitä sivu.',
        'form.success': 'Kiitos viestistäsi! Otamme sinuun yhteyttä pian. Voit sulkea tämän ikkunan.',
        'form.error.failed': 'Viestin lähetys epäonnistui',
        'form.error.unknown': 'Tuntematon virhe',
        
        // Privacy Popup
        'privacy.title': 'Tietosuojakäytäntö',
        'privacy.intro': 'Johdanto: LAB Case Club ("me", "meitä", "meidän") on sitoutunut suojelemaan verkkosivustomme kävijöiden yksityisyyttä. Tässä tietosuojakäytännössä kerromme, mitä henkilötietoja keräämme, miksi keräämme niitä, miten käytämme niitä ja mitkä ovat oikeutesi.',
        'privacy.collect.title': 'Keräämämme tiedot',
        'privacy.collect.text': 'Keräämme henkilötietoja, jotka annat vapaaehtoisesti ottaessasi meihin yhteyttä sivuston yhteydenottolomakkeilla: tyypillisesti nimen, sähköpostiosoitteen ja viestin sisällön. Voimme myös käsitellä automaattisesti teknisiä perustietoja (esim. selaintyyppi, laite, IP-osoite) sivuston toiminnan ja turvallisuuden varmistamiseksi.',
        'privacy.use.title': 'Kuinka käytämme tietojasi',
        'privacy.use.text': 'Käytämme yhteystietoja vastataksemme kysymyksiin, koordinoidaksemme tapahtumia ja hallitaksemme kumppanuuksia. Emme käytä henkilötietoja markkinointiin, ellet nimenomaisesti anna siihen suostumustasi. Teknisiä tietoja voidaan käyttää verkkosivuston suorituskyvyn ja turvallisuuden parantamiseen.',
        'privacy.thirdparty.title': 'Kolmannet osapuolet',
        'privacy.thirdparty.text': 'Käytämme EmailJS:ää yhteydenottolomakeviestien lähettämiseen. Tarkista EmailJS:n tietosuojakäytännöstä lisätietoja heidän tietojenkäsittelystään. Tämä sivusto sisältää myös Google Mapsin sijainnin näyttämiseen; Google voi kerätä tietoja oman tietosuojakäytäntönsä mukaisesti.',
        'privacy.retention.title': 'Säilytys ja turvallisuus',
        'privacy.retention.text': 'Säilytämme lähetettyjä tietoja vain niin kauan kuin on tarpeen niiden alkuperäisen tarkoituksen täyttämiseksi tai lain edellyttämällä tavalla. Toteutamme kohtuullisia teknisiä ja organisatorisia toimenpiteitä tietojesi suojaamiseksi, mutta emme voi taata täydellistä turvallisuutta internetin kautta siirretyille tiedoille.',
        'privacy.rights.title': 'Oikeutesi',
        'privacy.rights.text': 'Sinulla on oikeus tarkastaa, korjata tai pyytää poistamaan hallussamme olevat henkilötietosi. Jos haluat käyttää näitä oikeuksia, ota meihin yhteyttä. Vastaamme vahvistettuihin pyyntöihin kohtuullisessa ajassa.',
        'privacy.contact': 'Yhteystiedot: Tietosuojaan liittyvissä kysymyksissä ota yhteyttä yhteydenottosivumme kautta.',
        
        // Partners Popup
        'partners.title': 'Sponsorointi ja yhteistyökumppanit',
        'partners.overview': 'Yleistä: LAB Case Club toivottaa tervetulleeksi yhteistyöhön organisaatiot, jotka haluavat tukea opiskelijoiden oppimista, tapahtumia ja urayhteyksien luomista. Tavoittelemme kumppanuuksia, jotka tuovat arvoa sekä opiskelijoille että organisaatioille.',
        'partners.opportunities.title': 'Kumppanuusmahdollisuudet',
        'partners.opportunities.text': 'Yhteistyövaihtoehtoja ovat tapahtumatuki, case-yhteistyö, brändätyt tuotteet (hupparit, mukit, kynät), rekrytointitilaisuudet ja työpajayhteistyö. Kumppanit saavat näkyvyyttä tapahtumissamme, verkkosivuillamme ja sosiaalisen median kanavissa.',
        'partners.work.title': 'Miten toimimme kumppaniemme kanssa',
        'partners.work.text': 'Räätälöimme yhteistyöpaketit organisaationne tavoitteiden ja aikataulujen mukaan. Paketit sisältävät tyypillisesti logon sijoittelun, puheenvuoroja, rekrytointitilaisuuksia ja yhteisbrändättyjä tuotteita tuen tasosta riippuen.',
        'partners.current.title': 'Kumppanit',
        'partners.current.text': 'Yhteistyökumppanimme näkyvät kotisivullamme aktiivisen sopimuksen aikana. Jos kumppaneita ei ole listattu, etsimme aktiivisesti uusia yhteistyökumppaneita.',
        'partners.interested': 'Kiinnostuitko? Ole yhteydessä saadaksesi yhteistyötarjouksen tai keskustellaksesi räätälöidyistä vaihtoehdoista.'
    }
};

// Language management
// Always default to English, user can switch if desired
let currentLanguage = 'en';

// Check localStorage, but always start with English on first visit
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
} else {
    currentLanguage = localStorage.getItem('language');
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updatePageContent();
        updateLanguageSelector();
        document.documentElement.lang = lang;
    }
}

function translate(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function updatePageContent() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
        // Handle array indexing for day names (e.g., calendar.days.0)
        let translation;
        if (key.includes('.') && key.match(/\.\d+$/)) {
            const parts = key.split('.');
            const index = parseInt(parts.pop());
            const arrayKey = parts.join('.');
            const array = translations[currentLanguage][arrayKey];
            translation = array ? array[index] : key;
        } else {
            translation = translate(key);
        }
        
        // Check if element is an input or textarea
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else if (element.tagName === 'TITLE') {
            element.textContent = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Re-render calendar if it exists on the page
    if (typeof renderCalendar === 'function') {
        renderCalendar();
    }
    if (typeof renderEventsList === 'function') {
        renderEventsList();
    }
}

function updateLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language system on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
    updateLanguageSelector();
});
