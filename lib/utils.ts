if (typeof navigator !== "undefined") {
  const userAgent = navigator.userAgent;
  console.log(userAgent);
} else {
  console.error("The navigator object is not available.");
}

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export function getMobileUrl() {
  let platform = navigator.userAgent;
  console.log(platform);

  switch (platform) {
    case "Android":
      return "exp://u.expo.dev/update/6695134a-43d2-4307-8f6b-aa9689dc12cd";
      break;
    case "iOS":
      return "exp://u.expo.dev/update/84b6878b-d878-4fd6-b3e4-45856be0ada0";
      break;
    case "Win32":
      return "exp://u.expo.dev/update/6695134a-43d2-4307-8f6b-aa9689dc12cd";
      break;
    default:
      console.log(`${platform} is not a mobile os`);
      return "";
  }
}
