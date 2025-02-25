import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What are goals?", answer: "Goals define what you want to achieve with your health and fitness. Whether it is loosing weight, gaining muscles or maintaining your current physical state." },
  {
    question: "How does Senseii personalize my fitness plan?",
    answer: "Depending on your goals, Senseii will intelligently ask you questions regarding your diet preferences, lifestyle, allergies, likings/dislikings, equipment availability and so on. The plans will be generated keeping them in mind."
  },
  {
    question: "Can I alter my plans later on?",
    answer: "Yes, Senseii is smart enough to encorporate changes in your plans in real time, still keeping you on the timeline for your goals."
  },
  {
    question: "Do I need special equipments?",
    answer: "The plans are generated keeping your preferences in mind, whether you have equipments available or not will decide what is included in the plans."
  },
  {
    question: "How does the pricing work?",
    answer: "Our pricing is subscription-based, billed monthly or annually. We offer different tiers to accommodate users of all requirements. You can start with our free trial to test the platform before committing."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all our plans. No credit card required to get started. You'll have access to all features during the trial period."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and maintain compliance with SOC 2, GDPR, and other security frameworks. Your data is backed up regularly and stored in secure, redundant systems."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, all plans include customer support. Our Starter plan includes email support with a 24-hour response time. Professional and Family plans includes priority support with faster response times and additional support channels."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Yes, our platform offers a range of integrations with popular health and fitness tools. Our Professional and Enterprise plans include additional integration capabilities giving you access to Senseii Mobile App to automate syncing with other apps"
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "If you cancel your subscription, you'll have 30 days to export your data. After that period, we'll delete your data from our systems in accordance with our data retention policy and privacy commitments."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Find answers to common questions about Senseii.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
