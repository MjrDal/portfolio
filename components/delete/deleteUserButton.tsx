"use client";

import { deletUserAction } from "@/actions/delete";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export type DeleteButtonProps = {
  dataId: string;
};

export const DeletUserButton = (props: DeleteButtonProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  function onSubmit(values: string) {
    deletUserAction(values).then((data) => {
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
        onSubmit(props.dataId);
      }}
    >
      <FaRegTrashAlt />
    </Button>
  );
};
