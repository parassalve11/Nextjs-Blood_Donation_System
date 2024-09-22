import { withClerkMiddleware } from "@clerk/nextjs";

export default withClerkMiddleware();

export const config = {
  matcher: [
    "/FindBlood", "/DonorForm", "/OrgForm", "/ThankYou"
  ],
};