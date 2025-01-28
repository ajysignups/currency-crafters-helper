import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How accurate are the conversion rates?</AccordionTrigger>
            <AccordionContent>
              Our conversion rates are updated regularly from reliable financial data sources to ensure accuracy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Which currencies are supported?</AccordionTrigger>
            <AccordionContent>
              We support major world currencies including USD, EUR, GBP, JPY, AUD, CAD, and many more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How often are rates updated?</AccordionTrigger>
            <AccordionContent>
              Exchange rates are updated every hour to ensure you get the most current rates available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is this service free?</AccordionTrigger>
            <AccordionContent>
              Yes, our basic currency conversion calculator is completely free to use.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;