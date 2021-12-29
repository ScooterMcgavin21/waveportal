import { useEffect, useState } from "react";
/**
 * Hook to focus metamask window, comes straight from the ts source
 * source: https://github.com/jpalumickas/use-window-focus/blob/master/src/index.ts
 * license: MIT
 */
const hasFocus = () => typeof document !== "undefined" && document.hasFocus();

const useWindowFocus = () => {
	const [focused, setFocused] = useState(hasFocus); // Focus for first render

	useEffect(() => {
		setFocused(hasFocus()); // Focus for additional renders

		const onFocus = () => setFocused(true);
		const onBlur = () => setFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);

	return focused;
};

export default useWindowFocus;
