import { projectManagementJson } from "../../public/JSON/projectManagementJson";

export default function handler(req, res) {
  res.status(200).json(projectManagementJson);
}
