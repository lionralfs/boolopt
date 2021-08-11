declare module 'boolopt' {
  export default function boolopt(...initialValues: boolean[]): {
    get: (index: number) => boolean;
    set: (index: number, value: boolean) => void;
  };
}
