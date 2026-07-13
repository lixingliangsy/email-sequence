export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "DripSmith",
  slug: "email-sequence",
  tagline: "A 5-email onboarding sequence, done",
  description: "Give your product and goal; get a 5-email welcome / drip sequence with subject and body. For founders setting up lifecycle email without an agency.",
  toolTitle: "Draft sequence",
  resultLabel: "Your sequence",
  ctaLabel: "Generate",
  features: [
  "Subject + body",
  "Goal-aligned",
  "Copy-ready",
  "Save time"
],
  inputs: [
  {
    "key": "product",
    "label": "Product / Brand",
    "type": "input",
    "placeholder": "e.g. TaskNinja"
  },
  {
    "key": "goal",
    "label": "Sequence goal",
    "type": "input",
    "placeholder": "e.g. activate trial users"
  },
  {
    "key": "length",
    "label": "Emails",
    "type": "select",
    "options": [
      "3",
      "5",
      "7"
    ]
  }
] as InputField[],
  systemPrompt: "You are a lifecycle email specialist. Given a product, a sequence goal, and a length, write that many onboarding emails each with a subject line and a short body that drives the goal. Vary the angle across emails.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$12/mo",
    "desc": "Full bodies, save"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Brand voice, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const product = inputs['product'] || 'your product'
  const goal = inputs['goal'] || 'activate users'
  const n = parseInt((inputs['length'] || '5').replace(/\D/g, '')) || 5
  const subs = ['Welcome - let\'s get you to first win', 'Quick tip to get value fast', 'How others hit their goal with ' + product, 'Stuck? We can help', 'Your 7-day check-in', 'A power feature you missed', 'Time to upgrade?']
  let out = 'ONBOARDING SEQUENCE for ' + product + ' (goal: ' + goal + ')\n\n'
  for (let i = 1; i <= n; i++) {
    out += 'Email ' + i + ': ' + (subs[(i - 1) % subs.length]) + '\n'
  }
  return out + '\n\n--- (Mock skeleton. Add OPENAI_API_KEY for full bodies + send timing.)'
}
}
