type ApiResponse<T> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: string;
    };

type UnwrapResponse<T> = T extends { status: "success"; data: infer D }
  ? D
  : never;

type A = ApiResponse<{ status: "success"; data: string }>; // string
type B = ApiResponse<{ status: "error"; error: string }>; // never
