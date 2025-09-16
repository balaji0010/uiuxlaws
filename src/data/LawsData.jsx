
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
}

];
