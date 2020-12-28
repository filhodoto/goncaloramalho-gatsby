// Declare "blank" modules for node-modules without types
declare module 'react-animation';

// Types for svg images we use in the background
declare module '*.svg' {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const value: any;
  export default value;
}
declare module '*.png' {
  const value: any;
  export default value;
}
