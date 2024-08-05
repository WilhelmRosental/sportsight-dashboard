import { css, CSSObject, SimpleInterpolation } from 'styled-components';
import theme from './theme';

type FlexboxProps = {
    display?: string;
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
};

export const flexbox = ({
    display = 'flex',
    direction = 'unset',
    justify = 'unset',
    align = 'unset',
    wrap = 'unset',
    gap = 'unset',
}: FlexboxProps) => css`
  display: ${display};
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap};
`;

export const responsive = (
    breakpoint: keyof typeof theme.breakpoints,
    type: 'min' | 'max' = 'min'
) => (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => {
    const size = theme.breakpoints[breakpoint];
    if (size) {
        return css`
      @media (${type}-width: ${size}) {
        ${css(first, ...interpolations)}
      }
    `;
    }
    return null;
};

export const text = (fontSize: string = '0px', fontWeight: number = 0) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`;
