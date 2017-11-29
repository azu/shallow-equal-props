/**
 * Return true, if `propsA` is shallow equal to `propsB`.
 *
 * Options:
 *
 * - `debug`: enable debug info to console log. This log will be disable in production build
 */
import { shallowEqual, is } from "shallow-equal-object";
import * as React from "react";

export const isEqualProps = (a: any, b: any): boolean => {
    if (is(a, b)) {
        return true;
    }
    // React.Element
    if (React.isValidElement(a) && React.isValidElement(b)) {
        return a.type === b.type && a.key === b.key;
    }
    return false;
};
export const shallowEqualProps = (
    propsA: any,
    propsB: any,
    options?: {
        customEqual?: <T>(a: T, b: T) => boolean;
        // debug options available in development build
        debug?: true;
        console?: Pick<Console, "log" | "group" | "groupEnd">;
    }
): boolean => {
    return shallowEqual(propsA, propsB, {
        customEqual: isEqualProps,
        debug: options && options.debug,
        console: options && options.console
    });
};
