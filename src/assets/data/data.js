import svgIcons from "../svg/svgIcons";

const up = "arrowup";
const down = "arrowdown";
const left = "arrowleft";
const right = "arrowright";
const A = "a";
const B = "b";

export const socialIconsData = [
  {
    href: "https://www.linkedin.com/in/k%C3%A9vin-jayat-952b56207/",
    shape: svgIcons.linkedIn,
    rounded: true,
    ariaLabel: "Read more about Kevin on Linkedin",
  },
  {
    href: "https://github.com/KevinJayke",
    shape: svgIcons.gitHub,
    marginTop: true,
    ariaLabel: "Read more about my projects on Github",
  },
  {
    href: "https://twitter.com/kevin_jyt",
    shape: svgIcons.twitter,
    marginTop: true,
    ariaLabel: "Follow me on Twitter",
  },
];

export const altData = {
  photo:
    "A man with a smile, a mustache and glasses, standing in front of the camera",
};

export const cheat = {
  konamicode: `${up}${up}${down}${down}${left}${right}${left}${right}${B}${A}`,
};
