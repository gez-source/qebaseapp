import * as React from 'react';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
	<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
	 width="109.000000pt" height="28.000000pt" viewBox="0 0 109.000000 28.000000"
	 preserveAspectRatio="xMidYMid meet" className={props.className}>

	<g transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)"
	fill="var(--primary-text-color)" stroke="none">
	<path d="M0 140 l0 -140 545 0 545 0 0 140 0 140 -545 0 -545 0 0 -140z m245
	63 c14 -13 16 -28 12 -70 -4 -42 -2 -55 9 -60 15 -5 20 -33 6 -33 -5 0 -17 7
	-28 15 -10 8 -36 15 -56 15 -27 0 -41 6 -52 22 -22 31 -20 84 4 108 25 25 82
	26 105 3z m75 -37 c0 -56 17 -83 45 -72 11 4 15 21 15 66 0 55 2 60 21 60 20
	0 21 -4 16 -60 -3 -34 -11 -67 -17 -75 -16 -20 -75 -19 -94 1 -22 22 -23 134
	-1 134 11 0 15 -13 15 -54z m223 -21 c25 -72 25 -75 6 -75 -10 0 -19 7 -19 15
	0 10 -11 15 -35 15 -24 0 -35 -5 -35 -15 0 -8 -7 -15 -15 -15 -19 0 -19 9 3
	67 11 26 22 56 25 66 4 9 15 17 26 17 15 0 25 -16 44 -75z m111 28 l25 -48 1
	48 c0 35 4 47 15 47 12 0 15 -15 15 -75 0 -65 -2 -75 -17 -75 -11 0 -30 21
	-48 53 l-30 52 -3 -52 c-5 -81 -22 -63 -22 22 0 68 2 75 20 75 13 0 27 -15 44
	-47z m196 38 c0 -5 -10 -11 -22 -13 -21 -3 -23 -9 -26 -65 -2 -47 -7 -63 -17
	-63 -12 0 -15 15 -15 65 0 58 -2 65 -20 65 -11 0 -20 5 -20 10 0 6 27 10 60
	10 33 0 60 -4 60 -9z m90 -46 c33 -96 33 -95 15 -95 -8 0 -18 7 -21 15 -8 20
	-60 20 -68 0 -3 -8 -12 -15 -20 -15 -12 0 -10 14 11 76 21 64 28 75 46 72 14
	-2 25 -17 37 -53z"/>
	<path d="M160 179 c-18 -33 2 -88 32 -89 16 0 38 34 38 59 0 50 -49 71 -70 30z"/>
	<path d="M486 165 c-10 -26 -7 -35 9 -35 17 0 19 18 6 38 -7 11 -10 10 -15 -3z"/>
	<path d="M890 171 c0 -5 -3 -16 -6 -25 -4 -12 0 -16 16 -16 16 0 20 4 16 16
	-3 9 -6 20 -6 25 0 5 -4 9 -10 9 -5 0 -10 -4 -10 -9z"/>
	</g>
	</svg>
);
