import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the pricing work?",
    answer: "Our pricing is subscription-based, billed monthly or annually. We offer different tiers to accommodate businesses of all sizes. You can start with our free trial to test the platform before committing."
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
    answer: "Yes, all plans include customer support. Our Starter plan includes email support with a 24-hour response time. Professional and Enterprise plans include priority support with faster response times and additional support channels."
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Yes, our platform offers a range of integrations with popular business tools. We also provide a robust API for custom integrations. Our Professional and Enterprise plans include additional integration capabilities."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "If you cancel your subscription, you'll have 30 days to export your data. After that period, we'll delete your data from our systems in accordance with our data retention policy and privacy commitments."
  },
  {
    question: "Is training available for my team?",
    answer: "Yes, we provide comprehensive documentation and video tutorials for all users. Enterprise plans also include personalized onboarding and training sessions for your team."
  }
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
              Find answers to common questions about SaaSify.
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
