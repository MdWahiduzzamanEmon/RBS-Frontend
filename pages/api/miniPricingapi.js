import { miniPricingDemoData } from "../../public/JSON/miniPricing/miniPricing";

export default function handler(req, res) {
  res.status(200).json(miniPricingDemoData);
}
