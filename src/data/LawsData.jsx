
export const lawsData = [
  {
    id: "Law of Proximity",
    title: "Law of Proximity",
    short: "Elements close to each other are seen as related",
    explanation: "The Law of Proximity, from Gestalt psychology, states that objects near each other tend to be perceived as a group, even if they differ in color, shape, or size. Designers use spacing to indicate relationships between UI elements.",
  examples: [
    "Form labels should be close to their input fields.",
    "Navigation menus group related items together.",
    "Product cards show image, title, and price in one block."
  ],
  realworld: [
    "Google Forms keeps labels close to input fields for clarity.",
    "E-commerce sites (Amazon, Flipkart) group product details under one card.",
    "Mobile apps use spacing to group buttons and reduce clutter."
  ],    
    image: "/assets/images/proximity.png"
  },
{
  id: "law-of-similarity",
  title: "Law of Similarity",
  short: "Elements that look similar are perceived as related.",
  explanation: "The Law of Similarity states that users naturally group elements that share visual characteristics like color, shape, size, or style. In design, similarity creates consistency, builds patterns, and reduces cognitive load.",
  examples: [
    "All primary buttons share the same color and style.",
    "Navigation links are styled consistently in a menu.",
    "Icons in a toolbar share the same size and shape."
  ],
  realworld: [
    "Google Docs toolbar icons use a consistent style for formatting.",
    "E-commerce sites group products with similar card layouts.",
    "Social media apps (like Instagram) use consistent action icons."
  ],
  image: "/assets/images/similarity.jpg"
},
{
  id: "fitts-law",
  title: "Fitts’s Law",
  short: "The bigger and closer a target, the faster and easier it is to interact with.",
  explanation: "Fitts’s Law explains that the time to acquire a target (like a button) depends on its size and distance. In UI/UX, this means larger, closer buttons are easier to click or tap, improving usability and reducing errors.",
  examples: [
    "Large 'Submit' button at the end of a form.",
    "Sticky navigation bar close to user actions.",
    "Big icons for mobile touch gestures."
  ],
  realworld: [
    "Apple’s Human Interface Guidelines suggest a 44px minimum tap target.",
    "Android Material Design recommends 48dp touch targets.",
    "YouTube and Gmail apps use large, easy-to-reach buttons."
  ],
  image: "/assets/images/fitts.png"
},
{
  id: "hicks-law",
  title: "Hick’s Law",
  short: "The more choices users have, the longer they take to decide.",
  explanation: "Hick’s Law explains that decision time increases with the number and complexity of choices. In UI/UX, simplifying choices helps users act faster, prevents overwhelm, and improves conversions.",
  examples: [
    "Landing page with a single primary CTA.",
    "Grouped filters in e-commerce instead of endless lists.",
    "Progressive disclosure for advanced settings."
  ],
  realworld: [
    "Google Search has one input box and a simple Search button.",
    "Netflix reduces overwhelm by curating recommendations.",
    "Apple’s product pages focus on one or two clear actions."
  ],
  image: "/assets/images/hicks.png"
},
{
  id: "millers-law",
  title: "Miller’s Law (7±2 Rule)",
  short: "Humans can only hold 5–9 items in working memory at once.",
  explanation: "Miller’s Law states that the average person can keep about 7±2 items in their working memory. In UI/UX design, this means avoiding overwhelming users with too many options at once, and instead using chunking, grouping, and progressive disclosure to aid comprehension.",
  examples: [
    "Limit navigation menus to around 7 items.",
    "Break long forms into multiple smaller steps.",
    "Use tabs or accordions to group related content."
  ],
  realworld: [
    "Phone numbers are grouped into chunks (e.g., 123-456-7890).",
    "E-learning platforms divide lessons into modules.",
    "E-commerce sites group products into categories instead of listing hundreds at once."
  ],
  image: "/assets/images/millers.png"
},
{
  id: "jakobs-law",
  title: "Jakob’s Law",
  short: "Users prefer your site to work like the ones they already know.",
  explanation: "Jakob’s Law states that users spend most of their time on other sites, so they expect your site to function similarly. Familiar design patterns reduce the learning curve, increase usability, and build trust, while overly unique interfaces can confuse or frustrate users.",
  examples: [
    "Use a familiar shopping cart icon for e-commerce checkout.",
    "Keep the navigation bar at the top or side where users expect it.",
    "Follow standard form field patterns (labels above inputs, buttons at the bottom)."
  ],
  realworld: [
    "Most e-commerce sites use a cart icon at the top-right for checkout.",
    "Social media apps use a bottom navigation bar for Home, Search, and Profile.",
    "Login forms almost always have username/email, password, and a clear submit button."
  ],
  image: "/assets/images/jacob.jpg"
},
{
  id: "law-of-pragnanz",
  title: "Law of Prägnanz (Simplicity)",
  short: "People perceive complex visuals in the simplest way possible.",
  explanation: "The Law of Prägnanz states that when people see a complex arrangement, they naturally interpret it as the simplest form. Simplicity reduces cognitive effort and helps users quickly understand layouts, icons, and navigation without confusion.",
  examples: [
    "Using simple icons instead of overly detailed ones.",
    "Clear and minimal layouts instead of cluttered designs.",
    "Simplifying charts or graphs to highlight only key insights."
  ],
  realworld: [
    "The Google homepage is minimal with just a logo and search bar.",
    "Apple’s product pages use clean layouts with lots of white space.",
    "Modern app icons use flat design rather than complex 3D effects."
  ],
  image: "/assets/images/pragnanz.jpg"
},
{
  id: "serial-position-effect",
  title: "Serial Position Effect",
  short: "Users remember the first and last items best in a sequence.",
  explanation: "The Serial Position Effect explains that people recall the first (primacy) and last (recency) items in a list more easily than the middle ones. In UI/UX, placing the most important actions or information at the start or end of a sequence improves retention and usability.",
  examples: [
    "Putting critical actions like 'Save' or 'Checkout' at the start or end of menus.",
    "Highlighting the first and last items in onboarding steps.",
    "Positioning important links at the top or bottom of navigation menus."
  ],
  realworld: [
    "Amazon places key options like 'Cart' and 'Sign In' at the edges of the navigation bar.",
    "Mobile apps often place the 'Home' button at the far left and 'Profile/Settings' at the far right in bottom navigation.",
    "Presentation slides start with a strong intro and end with a clear call-to-action."
  ],
  image: "/assets/images/serial.png"
},
{
  id: "teslers-law",
  title: "Tesler’s Law (Law of Conservation of Complexity)",
  short: "Every application has inherent complexity that must be handled by either the system or the user.",
  explanation: "Tesler’s Law states that complexity in a system is unavoidable; it cannot be removed, only shifted. Good UX design minimizes the burden on users by handling complexity behind the scenes, allowing users to focus on their goals with less effort.",
  examples: [
    "E-commerce platforms automatically calculating tax and shipping costs instead of asking users to do it.",
    "Form auto-completion and suggestions that reduce user input effort.",
    "Photo editing apps providing 'auto-enhance' while still allowing manual adjustments."
  ],
  realworld: [
    "Google hides algorithmic complexity but delivers simple search results instantly.",
    "Apple devices abstract hardware/software complexity, giving users a clean and intuitive experience.",
    "TurboTax manages tax complexity by asking users simple questions and handling the calculations internally."
  ],
  image: "/assets/images/teslers.png"
},
{
  id: "pareto-principle",
  title: "Pareto Principle (80/20 Rule)",
  short: "80% of effects come from 20% of causes.",
  explanation: "The Pareto Principle states that a small number of causes are often responsible for the majority of results. In UX, this means focusing on the core 20% of features or actions that deliver 80% of user value, improving efficiency and satisfaction.",
  examples: [
    "Prioritizing the top-used features in an app instead of overwhelming users with all options.",
    "Optimizing the checkout flow in e-commerce since it drives most revenue.",
    "Focusing bug-fixing efforts on issues that impact most users."
  ],
  realworld: [
    "Microsoft discovered that fixing 20% of the most-reported bugs eliminated 80% of related errors.",
    "Amazon emphasizes product search and checkout — the critical 20% of user actions.",
    "Instagram focuses on posting, scrolling, and liking — not every possible feature."
  ],
  image: "/assets/images/pareto.png"
},
{
  id: "postels-law",
  title: "Postel’s Law (Robustness Principle)",
  short: "Be liberal in what you accept, and conservative in what you send.",
  explanation: "Postel’s Law encourages systems to handle varied inputs gracefully while keeping their own outputs clean and predictable. In UX, this means designing flexible input handling for users (tolerating minor errors, formats, or variations), while ensuring the system communicates back consistently and clearly.",
  examples: [
    "Accepting multiple date formats in a form input (e.g., 01/01/25, Jan 1 2025).",
    "Tolerating typos in search queries and showing relevant results.",
    "Auto-correcting phone number formatting instead of rejecting it."
  ],
  realworld: [
    "Google Search handles spelling mistakes like 'gooogle' and still returns relevant results.",
    "Modern browsers tolerate small HTML/CSS errors and still render pages.",
    "Email apps accept different formats but always display emails consistently."
  ],
  image: "/assets/images/postel.jpg"
},





];
