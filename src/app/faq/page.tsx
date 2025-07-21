export default function FAQPage() {
  const faqs = [
    {
      question: "What does your NGO do?",
      answer:
        "Our NGO is committed to improving lives through programs focused on health, education, sports development, and social welfare in underserved communities.",
    },
    {
      question: "How can I volunteer with your organization?",
      answer:
        "You can apply to become a volunteer by visiting our Volunteer page and completing the online application form. We will contact you with the next steps after reviewing your submission.",
    },
    {
      question: "Where does your funding come from?",
      answer:
        "We are funded through individual donations, grants from foundations, corporate sponsorships, and fundraising events. We are committed to financial transparency and sustainability.",
    },
    {
      question: "Are my donations tax-deductible?",
      answer:
        "Yes, all donations made to our NGO are tax-deductible, in accordance with local laws and regulations. We provide official receipts for all donations received.",
    },
    {
      question: "How do you ensure accountability and transparency?",
      answer:
        "We undergo regular external audits, publish annual impact reports, and operate with strict internal controls. Our donors and stakeholders are kept informed on how resources are used.",
    },
    {
      question: "Can I donate items instead of money?",
      answer:
        "Yes, we accept in-kind donations such as medical supplies, educational materials, and sports equipment. Please contact us to discuss your intended donation and how it can be delivered.",
    },
    {
      question: "How can I track the impact of my donation?",
      answer:
        "We share updates through newsletters, email reports, and on our website. Our impact stories, testimonials, and financial statements show how your support makes a difference.",
    },
    {
      question: "Do you work only in Nigeria?",
      answer:
        "While our current projects are primarily focused in Nigeria, we are open to partnerships and collaborations in other regions where our expertise and resources are needed.",
    },
    {
      question: "How do you select beneficiaries for scholarships or aid?",
      answer:
        "We use a transparent, merit- and need-based selection process that includes an application review, background verification, and community validation.",
    },
    {
      question: "How can I partner or collaborate with your NGO?",
      answer:
        "Please reach out via our Contact page or send an email to partnerships@ourngo.org. We welcome collaborations with individuals, corporate bodies, and other organizations.",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{faq.question}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
