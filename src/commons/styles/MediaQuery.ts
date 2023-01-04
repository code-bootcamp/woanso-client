// import { css } from "styled-components";

// type MediaQueryProps = {
//   mobile: number;
//   tablet: number;
//   desktop: number;
// };

// const sizes:MediaQueryProps = {
//   mobile: 580,
//   tablet: 768,
//   desktop: 1024
// };

// export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
//   (acc, label) => {
//     acc[label] = (style: String) =>
//       `@media (max-width: ${sizes[label]/ 16}em) { ${style} }`;
//     return acc;
//   },
//   {} as { [index: string]: Function }
// );

// export const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media screen and (max-width: ${sizes[label]}px) {
//       ${css(...args)};
//     }
//   `;
//   return acc;
// }, {});

export const size = {
  tablet: "(max-width: 1023px)",
  mobile: "(max-width: 767px)",
};
