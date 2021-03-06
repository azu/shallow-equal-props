import * as assert from "assert";
import { shallowEqualProps } from "../src/shallow-equal-props";
import * as React from "react";

describe("shallow-equal-props", () => {
    it("should check equality React.Element", () => {
        const elementA = React.createElement("div", { key: "a" });
        const elementB = React.createElement("div", { key: "a" });
        assert.equal(
            shallowEqualProps(
                {
                    child: elementA
                },
                {
                    child: elementB
                }
            ),
            true,
            "should be equal"
        );
    });
    it("should check equality Array", () => {
        assert.equal(shallowEqualProps([1, 2, 3], [1, 2, 3]), true, "array should be equal");
    });
    it("should check `type` of React.Element", () => {
        const elementA = React.createElement("div", { key: "a" });
        const elementB = React.createElement("span", { key: "a" });
        assert.equal(
            shallowEqualProps(
                {
                    child: elementA
                },
                {
                    child: elementB
                }
            ),
            false,
            "element is not same type"
        );
    });
    it("should check `key` of React.Element", () => {
        const elementA = React.createElement("div", { key: "a" });
        const elementB = React.createElement("div", { key: "b" });
        assert.equal(
            shallowEqualProps(
                {
                    child: elementA
                },
                {
                    child: elementB
                }
            ),
            false,
            "elementA is not equal elementB"
        );
    });
    it("pass customEqual", () => {
        assert.equal(
            shallowEqualProps(
                { a: 1 },
                { a: 2 },
                {
                    customEqual() {
                        return true;
                    }
                }
            ),
            true,
            "should be equal"
        );
    });
});
