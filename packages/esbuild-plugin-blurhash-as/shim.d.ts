
declare module '*?blurhash=css' {
  export interface BlurhashStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: 'no-repeat';
  }

  export const hash: string;
  export const source: string;
  export const style: BlurhashStyle;
}

declare module '*?blurhash=svg' {
  export const hash: string;
  export const source: string;
  export const svg: string;
}

declare module '*?blurhash=png' {
  export const hash: string;
  export const source: string;
  export const image: string;
}

declare module '*?blurhash=jpg' {
  export const hash: string;
  export const source: string;
  export const image: string;
}

declare module '*?blurhash=webp' {
  export const hash: string;
  export const source: string;
  export const image: string;
}