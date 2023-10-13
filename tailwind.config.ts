import type { Config } from "tailwindcss";
type RecursiveKeyValuePair<T, U> = {
  [K in keyof T]: U | RecursiveKeyValuePair<T[K], U>;
};
function withOpacity(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variableName: any
): string | RecursiveKeyValuePair<string, string> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      textColor: {
        skin: {
          dark_gray_shade: withOpacity("--e-global-dark-gray-shade"),
          medium_light_gray: withOpacity("--e-global-medium-light-gray"),
          green_shade: withOpacity("--e-global-green-shade"),
          white_shade: withOpacity("--e-global-white-color-shade"),
          off_white_shade: withOpacity("--e-global-off-white-shade"),
          cool_gray_shade: withOpacity("--e-global-cool-gray-shade"),
          peach_shade: withOpacity("--e-global-peach-shade"),
        },
      },
      backgroundColor: {
        skin: {
          dark_gray_shade: withOpacity("--e-global-dark-gray-shade"),
          medium_light_gray: withOpacity("--e-global-medium-light-gray"),
          green_shade: withOpacity("--e-global-green-shade"),
          white_shade: withOpacity("--e-global-white-color-shade"),
          off_white_shade: withOpacity("--e-global-off-white-shade"),
          cool_gray_shade: withOpacity("--e-global-cool-gray-shade"),
          peach_shade: withOpacity("--e-global-peach-shade"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--e-global-color-secondary_background_g)",
        },
      },
      borderColor: {
        dark_gray_shade: "var(--e-global-headings-color)",
        green_shade: withOpacity("--e-global-primary-color"),
        cool_gray_shade: withOpacity("--e-global-cool-gray-shade"),
      },
      boxShadow: {
        primary_shadow: "var(--e-global-primary-shadow)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
