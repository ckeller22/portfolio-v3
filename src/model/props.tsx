import { ReactNode } from 'react';

/**
 * Base app props.
 * @interface AppProps
 * @property {ReactNode} [children] - Optional ReactNode elements to be
 * rendered inside the component.
 * @property {string} [className] - Optional CSS class name for styling the component.
 */
export interface AppProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Represents text content that is accompanied by a title for screen readers.
 */
export type TextWithScreenReaderTitle = {
  /** The visible text content. */
  value: string;
  /** The text title used by screen readers for accessibility. */
  screenReaderTitle: string;
};

/**
 * Describes the properties for a card item component, including titles, subtitles,
 * timing information, an optional image, and an optional list of descriptions with
 * screen reader titles.
 */
export interface CardInfoItemProps {
  title: TextWithScreenReaderTitle;
  subtitle: TextWithScreenReaderTitle;
  time?: TextWithScreenReaderTitle;
  imageSource?: string;
  url?: string;
  descriptionList?: {
    value: Array<string>;
    screenReaderTitle: string;
  };
  technologiesList?: {
    value: Array<string>;
    screenReaderTitle: string;
  };
}
