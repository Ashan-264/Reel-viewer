import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch the authentication object
  const userAuth = await auth();

  // Safely access sessionClaims and metadata
  const onboardingComplete =
    userAuth?.sessionClaims?.metadata?.onboardingComplete ?? false;

  // Redirect if onboarding is complete
  if (onboardingComplete === true) {
    redirect("/");
  }

  return <>{children}</>;
}
