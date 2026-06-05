const MEMORY_KEY = "inlight-memory";

export const memory = {
  save(data: unknown) {
    if (typeof window === "undefined")
      return;

    localStorage.setItem(
      MEMORY_KEY,
      JSON.stringify(data)
    );
  },

  get() {
    if (typeof window === "undefined")
      return null;

    const data =
      localStorage.getItem(
        MEMORY_KEY
      );

    return data
      ? JSON.parse(data)
      : null;
  },

  clear() {
    if (typeof window === "undefined")
      return;

    localStorage.removeItem(
      MEMORY_KEY
    );
  },
};

export const companyBrain = {
  saveVision(
    vision: string
  ) {
    if (typeof window === "undefined")
      return;

    localStorage.setItem(
      "company-vision",
      vision
    );
  },

  getVision() {
    if (typeof window === "undefined")
      return "";

    return (
      localStorage.getItem(
        "company-vision"
      ) || ""
    );
  },
};