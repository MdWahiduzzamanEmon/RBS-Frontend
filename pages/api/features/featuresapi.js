import { featuresDemoData } from "../../../public/JSON/features/features";

export default function handler(req, res) {
  res.status(200).json(featuresDemoData);
}
