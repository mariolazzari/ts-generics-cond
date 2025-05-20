export type Status = "success" | "error";

export function handle(status: Status) {
  if (status === "success") {
    return "Success";
  }

  return "Error";
}
