import { ReactNode } from 'react';

/**
 * Base app props.
 * @interface AppProps
 * @property {ReactNode} [children] - Optional ReactNode elements to be
 * rendered inside the component.
 * @property {string} [className] - Optional CSS class name for styling the component.
 */
export declare interface AppProps {
  children?: ReactNode;
  className?: string;
}
