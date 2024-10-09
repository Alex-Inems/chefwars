'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const faqData = [
  {
    question: 'What is Chef Wars?',
    answer: 'Chef Wars is an exciting event that showcases the culinary skills of chefs across Nigeria in a competitive format.',
  },
  {
    question: 'How can I participate in Chef Wars?',
    answer: 'To participate, you need to register online and meet the eligibility criteria outlined on our website.',
  },
  {
    question: 'What are the competition categories?',
    answer: 'Competitions are held in various categories including traditional cuisine, modern cuisine, and pastry arts.',
  },
  {
    question: 'Is there an entry fee?',
    answer: 'Yes, there is a nominal entry fee to cover the costs of the event. Please check our website for details.',
  },
  {
    question: 'How are winners selected?',
    answer: 'Winners are selected based on creativity, presentation, taste, and adherence to the theme of the competition.',
  },
  {
    question: 'What prizes are offered to winners?',
    answer: 'Winners receive cash prizes, cooking equipment, and opportunities for internships or collaborations with top restaurants.',
  },
  {
    question: 'Will there be any workshops during the event?',
    answer: 'Yes, we will host workshops and masterclasses featuring renowned chefs from around the world.',
  },
  {
    question: 'How can I get updates about Chef Wars?',
    answer: 'You can subscribe to our newsletter on the website or follow us on social media for the latest updates.',
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <Accordion.Root type="single" collapsible>
        {faqData.map((item, index) => (
          <Accordion.Item key={index} value={`faq-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full text-left text-lg font-semibold bg-gradient-to-br from-orange-700 to-yellow-600 p-4 mb-2 rounded-lg">
                {item.question}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="bg-white p-4 mb-2 rounded-lg text-gray-600">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;
