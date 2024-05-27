"use client";

import { roleAction } from "@/actions/role";
import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";
import { useEffect, useState } from "react";

export type props = {
  dataId: string;
  role: string;
};

export const ModeButton = ({ dataId, role }: props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [textButton, setTextButton] = useState<string | undefined>("");
  const [newrole, setNewRole] = useState<UserRole>("ADMIN");

  useEffect(() => {
    if (role === "USER") {
      setTextButton("Put role ADMIN");
      setNewRole("ADMIN");
    } else {
      setTextButton("Put role USER");
      setNewRole("USER");
    }
  }, [role]);

  function onSubmit(values: string) {
    roleAction(values, newrole).then((data) => {
      setError(data.error);
      setSuccess(data.success);
      if (data.success) {
        window.location.reload();
      }
    });
  }

  return (
    <Button
      variant="destructive"
      onClick={() => {
        onSubmit(dataId);
      }}
    >
      {textButton}
    </Button>
  );
};
