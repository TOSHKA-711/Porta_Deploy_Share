"use client";

import Swal, { SweetAlertIcon } from "sweetalert2";

export interface ConfirmOptions {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  icon?: SweetAlertIcon;
  theme?:string;
}

export function useConfirm() {
  const confirm = async ({
    title = "Are you sure?",
    text = "",
    confirmButtonText = "Yes",
    cancelButtonText = "Cancel",
    theme= 'dark',
    icon = "warning", //"warning" | "error" | "success" | "info" | "question"
  }: ConfirmOptions = {}): Promise<boolean> => {
    const result = await Swal.fire({
      title,
      text,
      icon,
      theme,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true,
    });

    return result.isConfirmed;
  };

  return { confirm };
}
