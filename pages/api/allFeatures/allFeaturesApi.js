import { allFeaturesDemoData } from "../../../public/JSON/allFeatures/allFeatures";

export function handler(req, res) {
  res.status(200).json(allFeaturesDemoData);
}
