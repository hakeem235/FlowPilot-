import { auth } from "@clerk/nextjs/server";
export class ForbiddenError extends Error {}

export async function requireOrganization(permission?: string) {
  const session = await auth();
  if (!session.userId) throw new ForbiddenError("Authentication required");
  if (!session.orgId) throw new ForbiddenError("Choose an organization to continue");
  if (permission && !session.has({ permission })) throw new ForbiddenError("You do not have permission for this action");
  return { clerkUserId: session.userId, clerkOrganizationId: session.orgId };
}
