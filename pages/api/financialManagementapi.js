import { financialManagementDemoData } from "../../public/JSON/financialManagement/financialManagement";

export default function handler(req, res) {
  res.status(200).json(financialManagementDemoData);
}
