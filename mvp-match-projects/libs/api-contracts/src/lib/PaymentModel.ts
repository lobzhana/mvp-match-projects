export interface PaymentModel {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: string;
  created: string;
}
