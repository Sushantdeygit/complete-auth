"use client";

import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";

export const RoleGate = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }
  return <>{children}</>;
};
