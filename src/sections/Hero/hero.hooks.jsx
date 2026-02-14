import { useEffect } from "react";
import {
  entryAnimation,
  typingAnimation,
  parallaxAnimation,
} from "./hero.animations";

export function useHeroAnimations(refs) {
  useEffect(() => entryAnimation(refs), []);
  useEffect(() => typingAnimation(), []);
  useEffect(() => parallaxAnimation(refs), []);
}
