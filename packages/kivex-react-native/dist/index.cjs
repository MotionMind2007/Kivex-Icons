'use strict';

var react = require('react');
var Svg = require('react-native-svg');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/activity.tsx
var IconBase = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Svg__default.default,
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children
      }
    );
  }
);
IconBase.displayName = "IconBase";
var Activity = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h2.42a.1.1 0 0 0 .1-.08l2.4-9.57c.02-.1.16-.1.18 0l5.81 19.37c.03.09.16.1.2 0l3.62-9.66a.1.1 0 0 1 .09-.06H21" })
      }
    );
  }
);
Activity.displayName = "Activity";
var Alert = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 16, r: 0.5 })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var Angry = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 16c1.77-2.67 6.23-2.67 8 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 7 2 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 8 2-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 11, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 11, r: 0.5 })
        ]
      }
    );
  }
);
Angry.displayName = "Angry";
var Annoyed = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 15h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 9h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9h2" })
        ]
      }
    );
  }
);
Annoyed.displayName = "Annoyed";
var ArrowLeftFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 7-5.87 5.8c-.17.1-.17.29 0 .4L9 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 13h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 6v14" })
        ]
      }
    );
  }
);
ArrowLeftFromLine.displayName = "ArrowLeftFromLine";
var ArrowLeftToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 6-5.87 5.8c-.17.1-.17.29 0 .4L13 18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5v14" })
        ]
      }
    );
  }
);
ArrowLeftToLine.displayName = "ArrowLeftToLine";
var ArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 12h13" })
        ]
      }
    );
  }
);
ArrowLeft.displayName = "ArrowLeft";
var ArrowRightFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 6 5.85 5.65c.2.2.2.5 0 .7L15 18" })
        ]
      }
    );
  }
);
ArrowRightFromLine.displayName = "ArrowRightFromLine";
var ArrowRightToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12.05h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11 6 5.65 5.65c.2.2.2.5 0 .7L11 18" })
        ]
      }
    );
  }
);
ArrowRightToLine.displayName = "ArrowRightToLine";
var ArrowUpFromLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 9 5.65-5.85c.2-.2.5-.2.7 0L18 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3.8V17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 21h14" })
        ]
      }
    );
  }
);
ArrowUpFromLine.displayName = "ArrowUpFromLine";
var ArrowUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 8 9 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 17V7.5c0-.28.22-.5.5-.5H17" })
        ]
      }
    );
  }
);
ArrowUpLeft.displayName = "ArrowUpLeft";
var ArrowUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 7h9.5c.28 0 .5.22.5.5V17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 17 9-9" })
        ]
      }
    );
  }
);
ArrowUpRight.displayName = "ArrowUpRight";
var ArrowUpToLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m5 13 5.65-5.85c.2-.2.5-.2.7 0L17 13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 8v13.2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 3h14" })
        ]
      }
    );
  }
);
ArrowUpToLine.displayName = "ArrowUpToLine";
var BarChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 6h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 16h8" })
        ]
      }
    );
  }
);
BarChart.displayName = "BarChart";
var BarcodeRead = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.4 4H5a2 2 0 0 0-2 2v3.33M15.6 4H19a2 2 0 0 1 2 2v3.33M8.4 20H5a2 2 0 0 1-2-2v-3.33M15.6 20H19a2 2 0 0 0 2-2v-3.33" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 7v2m0 8v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 7v2m0 8v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 7v2m0 8v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 7v2m0 8v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 7v2m0 8v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 12h14" })
        ]
      }
    );
  }
);
BarcodeRead.displayName = "BarcodeRead";
var Baseline = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 20h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 16 12.02 4.04a.02.02 0 0 0-.04 0L6 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 12h8" })
        ]
      }
    );
  }
);
Baseline.displayName = "Baseline";
var BellRing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.02 2.17q.38.8.38 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.68z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 22h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 8c.17-.83.5-3.5 3-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 2c.83.83 2.6 3.2 3 6" })
        ]
      }
    );
  }
);
BellRing.displayName = "BellRing";
var Bitcoin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10.11 2.79-2.2 17.86" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7.85 4.5 5.46.67a3.5 3.5 0 1 1-.85 6.95L7 11.45" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7.07 11.46 5.46.67a3.5 3.5 0 0 1-.86 6.94l-5.45-.67" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14.09 3.23-.25 1.99M11.9 21.1l.25-1.98" })
        ]
      }
    );
  }
);
Bitcoin.displayName = "Bitcoin";
var Bolt = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18v7.64a2 2 0 0 1-1.03 1.75l-7 3.89a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 4 })
        ]
      }
    );
  }
);
Bolt.displayName = "Bolt";
var Bookmark = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.86l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.23z" })
      }
    );
  }
);
Bookmark.displayName = "Bookmark";
var BotSmile = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 9c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.04a2 2 0 0 0-1.56.75l-1.01 1.26a.5.5 0 0 1-.78 0l-1-1.26A2 2 0 0 0 9.03 19H7a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 16H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.5 14.5c-.52.6-1.4 1-2.5 1q-1.79.01-2.5-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 11, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 15, cy: 11, r: 0.5 })
        ]
      }
    );
  }
);
BotSmile.displayName = "BotSmile";
var Braces = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 3h1a2 2 0 0 1 2 2v4.76a2 2 0 0 0 1.1 1.8l.54.26a.2.2 0 0 1 0 .36l-.53.27A2 2 0 0 0 19 14.24V19a2 2 0 0 1-2 2h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 21H7a2 2 0 0 1-2-2v-4.76a2 2 0 0 0-1.1-1.8l-.54-.26a.2.2 0 0 1 0-.36l.53-.27A2 2 0 0 0 5 9.76V5c0-1.1.9-2 2-2h1" })
        ]
      }
    );
  }
);
Braces.displayName = "Braces";
var BrainCircuit = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 4c.27-1.17 1.3-2 2.5-2h1.59c.5 0 .91.4.91.91V21.1c0 .5-.4.91-.91.91H9.5c-1.2 0-2.24-.83-2.51-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 4c-.27-1.17-1.3-2-2.5-2h-1.6a.9.9 0 0 0-.91.91V21.1c0 .5.4.91.91.91h1.58c1.2 0 2.24-.83 2.51-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 15a3 3 0 1 1 0-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 15a3 3 0 1 0 0-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v5a4 4 0 0 0 4-4v-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 17c0 1.1.9 2 2 2h1v-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 7a1 1 0 0 0-1-1h-2v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 15c.67 1.33 1.2 4.2-2 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 4c1.33.33 3.6 1.8 2 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 4c-1.33.33-3.6 1.8-2 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 15c-.67 1.33-1.2 4.2 2 5" })
        ]
      }
    );
  }
);
BrainCircuit.displayName = "BrainCircuit";
var BriefcaseConveyorBelt = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 19h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 19v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 19v2" })
        ]
      }
    );
  }
);
BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
var BriefcaseMedical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 20, height: 14, x: 2, y: 6, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 6v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 11v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 13h4" })
        ]
      }
    );
  }
);
BriefcaseMedical.displayName = "BriefcaseMedical";
var Briefcase = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 20, height: 14, x: 2, y: 6, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 20V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16" })
        ]
      }
    );
  }
);
Briefcase.displayName = "Briefcase";
var Brush = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 14a2 2 0 1 1 0-4h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 10h4a2 2 0 1 1 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 10V4a2 2 0 1 1 4 0v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 22 1-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 22-1-4" })
        ]
      }
    );
  }
);
Brush.displayName = "Brush";
var CalendarCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 16.4 1.93 1.54q.07.05.13 0L15 14" })
        ]
      }
    );
  }
);
CalendarCheck.displayName = "CalendarCheck";
var CalendarClock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 17, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 15v2.51l1.5.99" })
        ]
      }
    );
  }
);
CalendarClock.displayName = "CalendarClock";
var CalendarDays = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 14, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 14, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 14, r: 0.5 })
        ]
      }
    );
  }
);
CalendarDays.displayName = "CalendarDays";
var CalendarX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 4H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 14 4 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 18 4-4" })
        ]
      }
    );
  }
);
CalendarX.displayName = "CalendarX";
var Calendar = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 4, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 10h18" })
        ]
      }
    );
  }
);
Calendar.displayName = "Calendar";
var Chat = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2H7.66a2 2 0 0 0-1.19.4L2.8 20.4A.5.5 0 0 1 2 20z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 8h11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 13h9" })
        ]
      }
    );
  }
);
Chat.displayName = "Chat";
var Check = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 11.61 5.28 5.24c.2.2.55.2.75 0L20 6" })
      }
    );
  }
);
Check.displayName = "Check";
var ChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 9 5.65 5.65c.2.2.5.2.7 0L18 9" })
      }
    );
  }
);
ChevronDown.displayName = "ChevronDown";
var ChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 15 5.65-5.65c.2-.2.5-.2.7 0L18 15" })
      }
    );
  }
);
ChevronUp.displayName = "ChevronUp";
var ChevronsDownUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 20 4.65-4.65c.2-.2.5-.2.7 0L17 20" })
        ]
      }
    );
  }
);
ChevronsDownUp.displayName = "ChevronsDownUp";
var ChevronsDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13" })
        ]
      }
    );
  }
);
ChevronsDown.displayName = "ChevronsDown";
var ChevronsUpDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 9 4.65-4.65c.2-.2.5-.2.7 0L17 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 15 4.65 4.65c.2.2.5.2.7 0L17 15" })
        ]
      }
    );
  }
);
ChevronsUpDown.displayName = "ChevronsUpDown";
var ChevronsUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 11 4.65-4.65c.2-.2.5-.2.7 0L17 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 18 4.65-4.65c.2-.2.5-.2.7 0L17 18" })
        ]
      }
    );
  }
);
ChevronsUp.displayName = "ChevronsUp";
var CircleArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 8-3.91 3.8a.3.3 0 0 0 0 .4L12 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
CircleArrowLeft.displayName = "CircleArrowLeft";
var CircleArrowOutUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 3 8 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 8V2.5c0-.28.22-.5.5-.5H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12A10 10 0 1 0 12 2" })
        ]
      }
    );
  }
);
CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft";
var CircleArrowOutUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2h5.5c.28 0 .5.22.5.5V8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 11 8-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12A10 10 0 1 1 12 2" })
        ]
      }
    );
  }
);
CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";
var CircleCheckBig = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.54 9A10 10 0 1 1 15 2.46" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3" })
        ]
      }
    );
  }
);
CircleCheckBig.displayName = "CircleCheckBig";
var CircleCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 13 1.73 1.35a1 1 0 0 0 1.44-.23L15 10" })
        ]
      }
    );
  }
);
CircleCheck.displayName = "CircleCheck";
var CircleChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 10 3.76 3.9c.13.13.35.13.48 0L16 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
CircleChevronDown.displayName = "CircleChevronDown";
var CircleChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" })
        ]
      }
    );
  }
);
CircleChevronUp.displayName = "CircleChevronUp";
var CircleUser = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
CircleUser.displayName = "CircleUser";
var Clapperboard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 11v8c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 11h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 11 17-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 6 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.5 4.5 15 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 11-.53-2.14a2 2 0 0 1 1.37-2.4L17 2.59a2 2 0 0 1 2.5 1.43L20 6" })
        ]
      }
    );
  }
);
Clapperboard.displayName = "Clapperboard";
var ClipboardCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 4, x: 8, y: 2, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 14.12 1.98 1.98q.14.12.28 0L15 12" })
        ]
      }
    );
  }
);
ClipboardCheck.displayName = "ClipboardCheck";
var ClipboardList = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 4, x: 8, y: 2, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 18h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 14h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 10h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 14, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 10, r: 0.5 })
        ]
      }
    );
  }
);
ClipboardList.displayName = "ClipboardList";
var ClipboardPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 11v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 14h6" })
        ]
      }
    );
  }
);
ClipboardPlus.displayName = "ClipboardPlus";
var ClipboardX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 2h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 11 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 17 6-6" })
        ]
      }
    );
  }
);
ClipboardX.displayName = "ClipboardX";
var Clipboard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 4H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 4, x: 8, y: 2, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 14h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 18h5" })
        ]
      }
    );
  }
);
Clipboard.displayName = "Clipboard";
var ClockArrowLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12a10 10 0 1 0-10 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 13-3.91 3.9c-.12.05-.12.15 0 .2L18 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 17h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 6v5l1 1" })
        ]
      }
    );
  }
);
ClockArrowLeft.displayName = "ClockArrowLeft";
var CodeXml = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 8 3.86 3.86a.2.2 0 0 1 0 .28L18 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 8-3.86 3.86a.2.2 0 0 0 0 .28L6 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 4-4 16" })
        ]
      }
    );
  }
);
CodeXml.displayName = "CodeXml";
var Code = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6 5.86 5.86a.2.2 0 0 1 0 .28L16 18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 6-5.86 5.86a.2.2 0 0 0 0 .28L8 18" })
        ]
      }
    );
  }
);
Code.displayName = "Code";
var Cog = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 2v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 20v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 12h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.07 4.93 18 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 15-4.07 4.07" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.93 4.93 9 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 18 1.07 1.07" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 4 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.83 2.76-.39.93M8.17 21.24l.39-.93" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21.24 8.17-.92.39" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.69 15.44-.93.39" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21.24 15.83-.93-.39" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.69 8.56-.93-.39" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.83 21.24-.39-.93" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.56 3.69-.39-.93" })
        ]
      }
    );
  }
);
Cog.displayName = "Cog";
var Coin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 9h.8q.18.02.2.2V15" })
        ]
      }
    );
  }
);
Coin.displayName = "Coin";
var ColumnChartPlainIncreasing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 21v-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21V9" })
        ]
      }
    );
  }
);
ColumnChartPlainIncreasing.displayName = "ColumnChartPlainIncreasing";
var ColumnChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 3v17a1 1 0 0 0 1 1h17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 17v-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 17V9" })
        ]
      }
    );
  }
);
ColumnChart.displayName = "ColumnChart";
var Columns2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" })
        ]
      }
    );
  }
);
Columns2.displayName = "Columns2";
var Columns3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v18" })
        ]
      }
    );
  }
);
Columns3.displayName = "Columns3";
var Compass = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.55-4.67a2 2 0 0 1 1.27-1.27l4.67-1.55c.16-.06.3.1.25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27" })
        ]
      }
    );
  }
);
Compass.displayName = "Compass";
var CopyCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 15.12 1.98 1.98q.14.12.28 0L18 13" })
        ]
      }
    );
  }
);
CopyCheck.displayName = "CopyCheck";
var CopyX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 8H10a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 12 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 18 6-6" })
        ]
      }
    );
  }
);
CopyX.displayName = "CopyX";
var Copy = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 16a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 14, x: 8, y: 8, rx: 2 })
        ]
      }
    );
  }
);
Copy.displayName = "Copy";
var CreditCardDisabled = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 17, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 16 4 2" })
        ]
      }
    );
  }
);
CreditCardDisabled.displayName = "CreditCardDisabled";
var CreditCardPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10v7c0 1.1.9 2 2 2h7m-9-9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20m0 0v3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 15v6" })
        ]
      }
    );
  }
);
CreditCardPlus.displayName = "CreditCardPlus";
var CreditCard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10v7c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-7M2 10V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3M2 10h20" })
      }
    );
  }
);
CreditCard.displayName = "CreditCard";
var Crown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2.13 5.5a.2.2 0 0 1 .3-.21l5.4 3.6c.09.06.22.02.28-.08l3.72-6.5a.2.2 0 0 1 .34 0l3.72 6.5c.06.1.2.14.29.07l5.39-3.6a.2.2 0 0 1 .3.22L19.2 16.24a1 1 0 0 1-.97.76H5.78a1 1 0 0 1-.97-.76z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 21h14" })
        ]
      }
    );
  }
);
Crown.displayName = "Crown";
var Divide = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 12h14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 7, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 17, r: 1 })
        ]
      }
    );
  }
);
Divide.displayName = "Divide";
var DollarSign = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 6H9a3 3 0 0 0 0 6h4.36" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.45 12H13a3 3 0 1 1 0 6H7" })
        ]
      }
    );
  }
);
DollarSign.displayName = "DollarSign";
var Download = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v11" })
        ]
      }
    );
  }
);
Download.displayName = "Download";
var DraftBook = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 18v2c0 1.1.9 2 2 2h13.86M4 18h15.86M4 18V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13.86q-.01.13-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5c.28 0 .5.22.5.5v1.28" })
        ]
      }
    );
  }
);
DraftBook.displayName = "DraftBook";
var Equal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 15h14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 9h14" })
        ]
      }
    );
  }
);
Equal.displayName = "Equal";
var Equalizer = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 10v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 6v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 5v13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 3v17.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 8v8" })
        ]
      }
    );
  }
);
Equalizer.displayName = "Equalizer";
var Eraser = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .05-1.35L13.3 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.64 10.59 14 19" })
        ]
      }
    );
  }
);
Eraser.displayName = "Eraser";
var Euro = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 5.07a8 8 0 1 0 0 13.86" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 9h11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 14h8" })
        ]
      }
    );
  }
);
Euro.displayName = "Euro";
var ExternalLink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h5.5c.28 0 .5.22.5.5V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 14 20 4" })
        ]
      }
    );
  }
);
ExternalLink.displayName = "ExternalLink";
var EyeClosed = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m5 12-3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 12 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 14-1 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 14 1 4" })
        ]
      }
    );
  }
);
EyeClosed.displayName = "EyeClosed";
var Eye = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12C5 6.72 13.2-.68 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 12.02c-3 5.29-11.2 12.68-20 0" })
        ]
      }
    );
  }
);
Eye.displayName = "Eye";
var FastForward = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.3 10.6a1.8 1.8 0 0 1 0 2.8L4.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 4.45 5z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.58 10.84c.73.6.73 1.72 0 2.32L14.45 19c-.98.8-2.45.1-2.45-1.17V6.17A1.5 1.5 0 0 1 14.45 5z" })
        ]
      }
    );
  }
);
FastForward.displayName = "FastForward";
var FileDiff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 4c0-1.1.9-2 2-2h8.17a2 2 0 0 1 1.42.59L19.4 6.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 7v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 10h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 17h6" })
        ]
      }
    );
  }
);
FileDiff.displayName = "FileDiff";
var FileSymlink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 11V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3c0-1.1.9-2 2-2h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 12 2.96 2.96q.03.04 0 .08L8 18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 3v5a1 1 0 0 0 1 1h5" })
        ]
      }
    );
  }
);
FileSymlink.displayName = "FileSymlink";
var FileVolume = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 10V4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 2v5c0 1.1.9 2 2 2h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.25l1.11-.96a.5.5 0 0 1 .83.38v6.94a.5.5 0 0 1-.79.41l-1.73-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.99 14.53c.76.79 1.82 2.98.02 5.5" })
        ]
      }
    );
  }
);
FileVolume.displayName = "FileVolume";
var File = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 4c0-1.1.9-2 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 2v5c0 1.1.9 2 2 2h5" })
        ]
      }
    );
  }
);
File.displayName = "File";
var Film = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 3v18M17 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 16.5h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 7.5h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 7.5h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 16.5h4" })
        ]
      }
    );
  }
);
Film.displayName = "Film";
var FingerPrint = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 6c-1.61-2.43-4.87-4-8-4C7.03 2 2 5 2 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 16v3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.5 10c.5 1.5.5 5 .5 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17.78 10.5q.21.75.22 1.5v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 6.87A5.7 5.7 0 0 0 12 6a6.1 6.1 0 0 0-5.11 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 13v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 22v-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 22v-5m-4-2v-3a2 2 0 1 1 4 0v1" })
        ]
      }
    );
  }
);
FingerPrint.displayName = "FingerPrint";
var Folder = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 7c0-1.1.9-2 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      }
    );
  }
);
Folder.displayName = "Folder";
var Frown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 16a4.6 4.6 0 0 1 8 0" })
        ]
      }
    );
  }
);
Frown.displayName = "Frown";
var GalleryHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 12, height: 18, x: 6, y: 3, rx: 2 })
        ]
      }
    );
  }
);
GalleryHorizontal.displayName = "GalleryHorizontal";
var GalleryVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2.99 2h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3.01 22h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 12, x: 3, y: 6, rx: 2 })
        ]
      }
    );
  }
);
GalleryVertical.displayName = "GalleryVertical";
var Gem = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.02 21.98h-.04L2.02 9.03A.02.02 0 0 1 2.04 9h19.92q.03 0 .02.03z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 9 3.4-5.1A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.9L22 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.67 3 8.32 8.3a2 2 0 0 0-.07 1.44L12 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13.33 3 2.36 5.3a2 2 0 0 1 .06 1.44L12 21" })
        ]
      }
    );
  }
);
Gem.displayName = "Gem";
var GenericLayout = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 9v12" })
        ]
      }
    );
  }
);
GenericLayout.displayName = "GenericLayout";
var Gift = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 10, x: 4, y: 11, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 7v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7" })
        ]
      }
    );
  }
);
Gift.displayName = "Gift";
var GlobeCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.05A10 10 0 1 0 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 6 2.62 1.75c.21.14.5.1.67-.1L20 3" })
        ]
      }
    );
  }
);
GlobeCheck.displayName = "GlobeCheck";
var GlobeLock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.8 14A10 10 0 1 1 11 2.05" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10 1.64 0 3.38-3.47 4-7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 5, x: 13, y: 6, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 5V4a2 2 0 1 1 4 0v1" })
        ]
      }
    );
  }
);
GlobeLock.displayName = "GlobeLock";
var GlobeOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.17 16q.81-1.85.83-4A10 10 0 0 0 8 2.83" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.86 5A10 10 0 0 0 19 19.14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 12h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.2 9Q8 10.42 8 12c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
GlobeOff.displayName = "GlobeOff";
var GlobeX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.05A10 10 0 1 0 22 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2.31C9.27 3.43 8 7.34 8 12c0 5.52 1.8 10 4 10s4-4.48 4-10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 3 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 8 5-5" })
        ]
      }
    );
  }
);
GlobeX.displayName = "GlobeX";
var Globe = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 12h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 2c.75 0 1.75.71 2.63 2.64A18 18 0 0 1 16 12c0 2.93-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64A18 18 0 0 1 8 12c0-2.93.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2" })
        ]
      }
    );
  }
);
Globe.displayName = "Globe";
var Grid2x2Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" })
        ]
      }
    );
  }
);
Grid2x2Plus.displayName = "Grid2x2Plus";
var Grid2x2X = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 16 6 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 21 6-5" })
        ]
      }
    );
  }
);
Grid2x2X.displayName = "Grid2x2X";
var Grid2x2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v18" })
        ]
      }
    );
  }
);
Grid2x2.displayName = "Grid2x2";
var Grid3x3Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" })
        ]
      }
    );
  }
);
Grid3x3Plus.displayName = "Grid3x3Plus";
var Grid3x3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h18" })
        ]
      }
    );
  }
);
Grid3x3.displayName = "Grid3x3";
var Hammer = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.5 7.5-8.15 9a2.12 2.12 0 0 0 3.15 2.85L16 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19.6 11.88-2.5-1.97a.8.8 0 0 0-1.07.07.8.8 0 0 1-1.1.04l-2.3-1.99a.76.76 0 0 1-.05-1.11c.25-.25.3-.64.05-.88-1.2-1.18-3.84-1.63-5.58-2.33q0 0 0 0c5.97-3.43 9.4-.31 11.08 1.8.2.26.12.63-.17.8a.27.27 0 0 0-.04.44l3.58 2.91M18.7 13 22 9" })
        ]
      }
    );
  }
);
Hammer.displayName = "Hammer";
var Handbag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 12V6a4 4 0 0 0-8 0v6" })
        ]
      }
    );
  }
);
Handbag.displayName = "Handbag";
var Hashtag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 9h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 15h16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 21 3-18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 21 3-18" })
        ]
      }
    );
  }
);
Hashtag.displayName = "Hashtag";
var HatGlasses = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 11-.68-6.15a2 2 0 0 0-2.89-1.57L14.02 4a2 2 0 0 1-1.1.2L9 3.8H7.74a2 2 0 0 0-1.98 1.72L5 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 11h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7, cy: 18, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 18, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 18.5c.5-.83 2-2 4 0" })
        ]
      }
    );
  }
);
HatGlasses.displayName = "HatGlasses";
var HeartCrack = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 8-1 1.98.02.03 1.96.98v.03l-1.97 1.97V13L13 15" })
        ]
      }
    );
  }
);
HeartCrack.displayName = "HeartCrack";
var HeartOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16.73 16.82-4.54 4.01c-.1.1-.27.1-.38 0l-8.1-7.16A5.07 5.07 0 0 1 5 5.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 14.81 1.29-1.14a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
HeartOff.displayName = "HeartOff";
var Heart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.G, { clipPath: "url(#a)", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16c.1.1.27.1.38 0l8.1-7.16a5.07 5.07 0 1 0-7.06-7.25L12.04 7.7z" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
Heart.displayName = "Heart";
var Home = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" })
        ]
      }
    );
  }
);
Home.displayName = "Home";
var ImageMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 5h6" })
        ]
      }
    );
  }
);
ImageMinus.displayName = "ImageMinus";
var ImageOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 15V5a2 2 0 0 0-2-2H9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.32 20.5A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .5-1.32" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 21 7-7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 12 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.73 10a2 2 0 1 1-3.05-2.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
ImageOff.displayName = "ImageOff";
var ImagePlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 2v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 5h6" })
        ]
      }
    );
  }
);
ImagePlus.displayName = "ImagePlus";
var Image = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 21 8.13-8.13a2 2 0 0 1 2.04-.48L21 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 9, r: 2 })
        ]
      }
    );
  }
);
Image.displayName = "Image";
var Images = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 14, x: 8, y: 2, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m11 16 4.98-4.87a2 2 0 0 1 1.8-.53l4.22.84" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 13, cy: 7, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3.47 8C2.66 8 2 8.66 2 9.47V20c0 1.1.9 2 2 2h10.44c.86 0 1.56-.7 1.56-1.56" })
        ]
      }
    );
  }
);
Images.displayName = "Images";
var Infinity = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12 7.73 8.73C5.32 6.88 2 8.77 2 12s3.08 4.97 5.5 3.12zm0 0 4.5-3.27C18.92 6.88 22 8.77 22 12s-3.32 5.12-5.73 3.27z" })
      }
    );
  }
);
Infinity.displayName = "Infinity";
var Info = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 8, r: 0.5 })
        ]
      }
    );
  }
);
Info.displayName = "Info";
var KeyRound = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 8q0 1.2.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98Q6 22 6 21.98v-1.96q0-.02.02-.02h2.96Q9 20 9 19.98v-2.96q0-.02.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31A6.02 6.02 0 0 0 22 8a6 6 0 0 0-12 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16.5, cy: 7.5, r: 0.5 })
        ]
      }
    );
  }
);
KeyRound.displayName = "KeyRound";
var Key = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7.5, cy: 15.5, r: 5.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.5 11.5 20 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55" })
        ]
      }
    );
  }
);
Key.displayName = "Key";
var LaughWink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 9c.6-.94 1.69-1.68 3 0" })
        ]
      }
    );
  }
);
LaughWink.displayName = "LaughWink";
var Laugh = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
Laugh.displayName = "Laugh";
var LayoutDashboard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 9, x: 3, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 9, x: 14, y: 12, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 5, x: 3, y: 16, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 5, x: 14, y: 3, rx: 0.5 })
        ]
      }
    );
  }
);
LayoutDashboard.displayName = "LayoutDashboard";
var LayoutGrid = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 14, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 14, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 14, y: 14, rx: 0.5 })
        ]
      }
    );
  }
);
LayoutGrid.displayName = "LayoutGrid";
var LayoutKanban = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 4h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 4h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 12, x: 4, y: 8, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 6, x: 14, y: 8, rx: 2 })
        ]
      }
    );
  }
);
LayoutKanban.displayName = "LayoutKanban";
var LayoutList = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 7, x: 3, y: 14, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 20h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 15h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 4h7" })
        ]
      }
    );
  }
);
LayoutList.displayName = "LayoutList";
var LayoutPanelLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 7, height: 18, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
LayoutPanelLeft.displayName = "LayoutPanelLeft";
var LayoutPanelRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 3h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" })
        ]
      }
    );
  }
);
LayoutPanelRight.displayName = "LayoutPanelRight";
var LayoutPanelTop = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 7, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
LayoutPanelTop.displayName = "LayoutPanelTop";
var LayoutTemplate = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" })
        ]
      }
    );
  }
);
LayoutTemplate.displayName = "LayoutTemplate";
var Link2Off = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 17a5 5 0 0 0 0-10h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 17H7A5 5 0 0 1 7 7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
Link2Off.displayName = "Link2Off";
var Link2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 12h9" })
        ]
      }
    );
  }
);
Link2.displayName = "Link2";
var LinkOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 15 3.75-3.72a4.99 4.99 0 1 0-7.04-7.06" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 9-3.75 3.72a4.99 4.99 0 1 0 7.04 7.06" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
LinkOff.displayName = "LinkOff";
var Link = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.7 4.22a5 5 0 0 1 7.08 7.07l-2.83 2.83a5 5 0 0 1-7.07 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.3 19.78a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0" })
        ]
      }
    );
  }
);
Link.displayName = "Link";
var ListChevronsDownUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 5 3.25 2.9c.14.13.36.13.5 0L21 5" })
        ]
      }
    );
  }
);
ListChevronsDownUp.displayName = "ListChevronsDownUp";
var ListChevronsUpDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 16 3.25 2.9c.14.13.36.13.5 0L21 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h7" })
        ]
      }
    );
  }
);
ListChevronsUpDown.displayName = "ListChevronsUpDown";
var ListFilter = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 5h20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 12h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 19h4" })
        ]
      }
    );
  }
);
ListFilter.displayName = "ListFilter";
var ListOrdered = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 19h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.5 4h1c.28 0 .5.22.5.5V10m0 0H4.5M6 10h1.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9" })
        ]
      }
    );
  }
);
ListOrdered.displayName = "ListOrdered";
var ListTodo = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 12h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 19h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 6, x: 3, y: 4, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 18 1.65 1.65c.2.2.5.2.7 0L9 16" })
        ]
      }
    );
  }
);
ListTodo.displayName = "ListTodo";
var List = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 5, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 3, cy: 19, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 5h13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 12h13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 19h13" })
        ]
      }
    );
  }
);
List.displayName = "List";
var LockCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 19.12 1.98 1.98q.14.12.28 0L21 17" })
        ]
      }
    );
  }
);
LockCheck.displayName = "LockCheck";
var LockKeyhole = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 16, r: 1 })
        ]
      }
    );
  }
);
LockKeyhole.displayName = "LockKeyhole";
var LockOpenKeyhole = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 10H4c-.55 0-1 .49-1 1.1v9.8c0 .61.45 1.1 1 1.1h16c.55 0 1-.49 1-1.1v-9.8c0-.61-.45-1.1-1-1.1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" })
        ]
      }
    );
  }
);
LockOpenKeyhole.displayName = "LockOpenKeyhole";
var LockOpen = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 6a5.1 5.1 0 0 0-5-4 5 5 0 0 0-5 5v4" })
        ]
      }
    );
  }
);
LockOpen.displayName = "LockOpen";
var LockSquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.44 11H7.56a.55.55 0 0 0-.56.55v4.9c0 .3.25.55.56.55h8.88c.31 0 .56-.24.56-.55v-4.9c0-.3-.25-.55-.56-.55" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 11V9.22C10 8 10.9 7 12 7s2 1 2 2.22V11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" })
        ]
      }
    );
  }
);
LockSquare.displayName = "LockSquare";
var Lock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 11, x: 3, y: 11, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11V7a5 5 0 0 1 10 0v4" })
        ]
      }
    );
  }
);
Lock.displayName = "Lock";
var LogIn = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 7 5.08 4.23a1 1 0 0 1 0 1.54L10 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h11" })
        ]
      }
    );
  }
);
LogIn.displayName = "LogIn";
var LogOut = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 21H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 7 5.08 4.23a1 1 0 0 1 0 1.54L16 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12h11" })
        ]
      }
    );
  }
);
LogOut.displayName = "LogOut";
var MailCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 19 2.99 2 .02-.01L22 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailCheck.displayName = "MailCheck";
var MailMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailMinus.displayName = "MailMinus";
var MailOpen = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 10.9a2 2 0 0 1 .66-1.5l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 10 7.9 5.26a2 2 0 0 0 2.2 0L21 10" })
        ]
      }
    );
  }
);
MailOpen.displayName = "MailOpen";
var MailPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
MailPlus.displayName = "MailPlus";
var MailX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 20H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 17 4 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 21 4-4" })
        ]
      }
    );
  }
);
MailX.displayName = "MailX";
var Mail = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 18V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8" })
        ]
      }
    );
  }
);
Mail.displayName = "Mail";
var MapPinCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 9.5 1.56 1.46q.04.03.07 0L14 8" })
        ]
      }
    );
  }
);
MapPinCheck.displayName = "MapPinCheck";
var MapPin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64q.04.05.08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 9, r: 2 })
        ]
      }
    );
  }
);
MapPin.displayName = "MapPin";
var MapPinned = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03q.04.04.08 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 5.5, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 11v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 14v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 11v8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 10.5 3 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11" })
        ]
      }
    );
  }
);
MapPinned.displayName = "MapPinned";
var Map = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 8 4.74-3.26a2 2 0 0 1 2.2-.04l4.12 2.6a2 2 0 0 0 2.2-.04L21 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 20 4.93-2.54a2 2 0 0 1 1.8-.01l4.3 2.11a2 2 0 0 0 1.77 0L21 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 4v13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 5v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 8v11" })
        ]
      }
    );
  }
);
Map.displayName = "Map";
var MehBlank = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
MehBlank.displayName = "MehBlank";
var Meh = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15h10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
        ]
      }
    );
  }
);
Meh.displayName = "Meh";
var MenuHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 5, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 19, cy: 12, r: 1 })
        ]
      }
    );
  }
);
MenuHorizontal.displayName = "MenuHorizontal";
var MenuVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 4, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 11, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 2, height: 2, x: 11, y: 18, rx: 1 })
        ]
      }
    );
  }
);
MenuVertical.displayName = "MenuVertical";
var Menu = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 19h15" })
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
var MessageSquarePlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 11h6" })
        ]
      }
    );
  }
);
MessageSquarePlus.displayName = "MessageSquarePlus";
var MessageSquareText = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 7h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11h10" })
        ]
      }
    );
  }
);
MessageSquareText.displayName = "MessageSquareText";
var MessageSquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 0-1.8.6l-2.88 2.16A.2.2 0 0 1 2 21.6z" })
      }
    );
  }
);
MessageSquare.displayName = "MessageSquare";
var MicOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.17 4A3 3 0 0 1 15 5v5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 14.24A3 3 0 0 1 9 12V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.84 13.5q.16-.73.16-1.5v-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
MicOff.displayName = "MicOff";
var MicVintage = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3" })
        ]
      }
    );
  }
);
MicVintage.displayName = "MicVintage";
var Mic = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 13, x: 9, y: 2, rx: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3" })
        ]
      }
    );
  }
);
Mic.displayName = "Mic";
var Minus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 12h14" })
      }
    );
  }
);
Minus.displayName = "Minus";
var MoonStar = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.01h1.73a1 1 0 0 0 .95-.7L19 1.62z" })
        ]
      }
    );
  }
);
MoonStar.displayName = "MoonStar";
var Moon = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.38-1.16-.99-1.08A9 9 0 0 0 12 21" })
      }
    );
  }
);
Moon.displayName = "Moon";
var MousePointer = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.06l16.77 6.9c.04.02.04.08 0 .1l-6.43 2.13a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 13 6 6" })
        ]
      }
    );
  }
);
MousePointer.displayName = "MousePointer";
var Navigation2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.98 2.04h.04l7.96 18.92q0 .03-.02.02l-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z" })
      }
    );
  }
);
Navigation2.displayName = "Navigation2";
var Navigation = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.G, { clipPath: "url(#a)", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.96 2.02q.03-.01.02.02l-7.96 18.91q-.01.03-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
Navigation.displayName = "Navigation";
var Notification = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.78l1.16 2.32a4 4 0 0 1 .42 1.78V19H3v-.06a4 4 0 0 1 .42-1.78l1.16-2.32A4 4 0 0 0 5 13.06z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 22h4" })
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var Nut = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 10c0 3.2 1.53 6.22 4.1 8.1l2.9 2.11M19 10c0 3.2-1.53 6.22-4.1 8.1L12 20.21m0 0V21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 3v1m0 0H8a5 5 0 0 0-5 5v.27c0 .36.35.61.7.5L6 9q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2 1q0 0 0 0l2-1q0 0 0 0l2.3.77c.35.11.7-.14.7-.5V9a5 5 0 0 0-5-5z" })
        ]
      }
    );
  }
);
Nut.displayName = "Nut";
var PackageCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.5 4.5 8 5" })
        ]
      }
    );
  }
);
PackageCheck.displayName = "PackageCheck";
var PaintBucket = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95c.2.2.2.5 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 3.5 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12.5h14.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.98 15.06q.01-.03.04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z" })
        ]
      }
    );
  }
);
PaintBucket.displayName = "PaintBucket";
var Paperclip = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21" })
      }
    );
  }
);
Paperclip.displayName = "Paperclip";
var PauseCircle = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 9v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 })
        ]
      }
    );
  }
);
PauseCircle.displayName = "PauseCircle";
var PauseSquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 9v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9v6" })
        ]
      }
    );
  }
);
PauseSquare.displayName = "PauseSquare";
var Pause = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 5, height: 18, x: 5, y: 3, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 5, height: 18, x: 14, y: 3, rx: 0.5 })
        ]
      }
    );
  }
);
Pause.displayName = "Pause";
var PenLine = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Svg.G, { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26" }),
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 21h9" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
PenLine.displayName = "PenLine";
var PenTool = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.69a1 1 0 0 1 .67.56l2.07 4.6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 10, height: 4, x: 10.66, y: 17.68, rx: 1, transform: "rotate(-45.78 10.66 17.68)" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.53 3.53 4.5 4.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8.53, cy: 8.53, r: 0.5 })
        ]
      }
    );
  }
);
PenTool.displayName = "PenTool";
var Pencil = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35a1 1 0 0 0-.19.28l-2.27 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .38-.26" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.5 4.5 19 8" })
        ]
      }
    );
  }
);
Pencil.displayName = "Pencil";
var Percent = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 19 19 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7, cy: 7, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 17, r: 2 })
        ]
      }
    );
  }
);
Percent.displayName = "Percent";
var PhoneCall = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 6c2.59-.52 5 1.46 5 4.1v.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 2h1a7 7 0 0 1 7 7v2" })
        ]
      }
    );
  }
);
PhoneCall.displayName = "PhoneCall";
var PhoneForward = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 6h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 2 3.82 3.6c.24.22.24.58 0 .8L18 10" })
        ]
      }
    );
  }
);
PhoneForward.displayName = "PhoneForward";
var PhoneIncoming = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 2v5a1 1 0 0 0 1 1h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 7 5-5" })
        ]
      }
    );
  }
);
PhoneIncoming.displayName = "PhoneIncoming";
var PhoneOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 13.33a19 19 0 0 0 3.9 2.62q.1.04.19 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 22 22 2" })
        ]
      }
    );
  }
);
PhoneOff.displayName = "PhoneOff";
var PhoneOutgoing = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.86a.2.2 0 0 1-.18.01 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3c0-.57-.45-1.03-1-1.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 8V3a1 1 0 0 0-1-1h-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 3-5 5" })
        ]
      }
    );
  }
);
PhoneOutgoing.displayName = "PhoneOutgoing";
var PhoneX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 3 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 3-6 6" })
        ]
      }
    );
  }
);
PhoneX.displayName = "PhoneX";
var Phone = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1" })
      }
    );
  }
);
Phone.displayName = "Phone";
var PieChart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 13.1A10.8 10.8 0 0 0 10.9 2a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 17.63A9.82 9.82 0 1 1 6.37 4" })
        ]
      }
    );
  }
);
PieChart.displayName = "PieChart";
var Pin = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 4c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 17v5" })
        ]
      }
    );
  }
);
Pin.displayName = "Pin";
var Pipette = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.31 5.41 2.7-2.7a2.36 2.36 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83" })
        ]
      }
    );
  }
);
Pipette.displayName = "Pipette";
var PlaySquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 15.12V8.88c0-.29.3-.47.55-.34l5.25 2.78c.25.13.27.5.03.65l-5.25 3.47a.37.37 0 0 1-.58-.32" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" })
        ]
      }
    );
  }
);
PlaySquare.displayName = "PlaySquare";
var Play = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15" })
      }
    );
  }
);
Play.displayName = "Play";
var Plus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 5v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 12h14" })
        ]
      }
    );
  }
);
Plus.displayName = "Plus";
var PoundSterling = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 9V7a4 4 0 0 0-8 0v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 21h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 14h10" })
        ]
      }
    );
  }
);
PoundSterling.displayName = "PoundSterling";
var Radio = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 20a9.98 9.98 0 0 0 0-16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 20A9.98 9.98 0 0 1 6 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.26 16.69a6 6 0 0 1 0-9.38" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.74 7.3a6 6 0 0 1 0 9.4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" })
        ]
      }
    );
  }
);
Radio.displayName = "Radio";
var ReceiptText = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.07.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 9h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 17h5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 13h8" })
        ]
      }
    );
  }
);
ReceiptText.displayName = "ReceiptText";
var Receipt = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8v10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 9h-3.33C9.75 9 9 9.9 9 11s.75 2 1.67 2h2.42" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.36 13h1.97c.92 0 1.67.9 1.67 2s-.75 2-1.67 2H10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 2.72a.5.5 0 0 1 .68-.47l1.77.67q.22.08.42-.03l1.33-.75a.5.5 0 0 1 .49 0l1.29.72a.5.5 0 0 0 .49 0l1.28-.72a.5.5 0 0 1 .5 0l1.28.72a.5.5 0 0 0 .5 0l1.28-.72a.5.5 0 0 1 .5 0l1.32.75a.5.5 0 0 0 .42.03l1.77-.67a.5.5 0 0 1 .68.47V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" })
        ]
      }
    );
  }
);
Receipt.displayName = "Receipt";
var Redo2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 9H9.5a5.5 5.5 0 1 0 0 11H12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 4 4.86 4.86a.2.2 0 0 1 0 .28L15 14" })
        ]
      }
    );
  }
);
Redo2.displayName = "Redo2";
var RefreshCw = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.9 11.61q.05 1-.14 2a9 9 0 0 1-10.48 7.23C7.22 20.28 5.15 17.66 4 15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 14H3.5a.5.5 0 0 0-.5.5V19" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 3v4.5a.5.5 0 0 1-.5.5H15" })
        ]
      }
    );
  }
);
RefreshCw.displayName = "RefreshCw";
var Repeat1 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 11V9a3 3 0 0 1 3-3h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.5 10h1.3q.18.02.2.2V14" })
        ]
      }
    );
  }
);
Repeat1.displayName = "Repeat1";
var Repeat = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 11V9a3 3 0 0 1 3-3h15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13v2.04A2.96 2.96 0 0 1 18.04 18H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 2 2.64 3.01c.5.57.5 1.41 0 1.98L18 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 22-2.64-3.01a1.5 1.5 0 0 1 0-1.98L6 14" })
        ]
      }
    );
  }
);
Repeat.displayName = "Repeat";
var Rewind = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.73 13.41a1.8 1.8 0 0 1 0-2.78l6.85-5.6a1.5 1.5 0 0 1 2.45 1.15v11.67a1.5 1.5 0 0 1-2.45 1.16z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2.45 13.21a1.5 1.5 0 0 1 0-2.32l7.13-5.83a1.5 1.5 0 0 1 2.45 1.16v11.67a1.5 1.5 0 0 1-2.45 1.16z" })
        ]
      }
    );
  }
);
Rewind.displayName = "Rewind";
var RotateCwSquare = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8" })
        ]
      }
    );
  }
);
RotateCwSquare.displayName = "RotateCwSquare";
var Rows2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 12h18" })
        ]
      }
    );
  }
);
Rows2.displayName = "Rows2";
var Rows3 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h18" })
        ]
      }
    );
  }
);
Rows3.displayName = "Rows3";
var Save = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5c0-1.1.9-2 2-2h9.17a2 2 0 0 1 1.42.59L20.4 8.4a2 2 0 0 1 .6 1.43V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 3v4a1 1 0 0 0 1 1h6" })
        ]
      }
    );
  }
);
Save.displayName = "Save";
var ScanQr = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8V5a2 2 0 0 0-2-2h-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 16v3a2 2 0 0 1-2 2h-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 16v3c0 1.1.9 2 2 2h3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8V5c0-1.1.9-2 2-2h3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 7v1m-5 9h3a2 2 0 0 0 2-2v-3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 6, x: 7, y: 7, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7, cy: 17, r: 0.5 })
        ]
      }
    );
  }
);
ScanQr.displayName = "ScanQr";
var Scissors = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6, cy: 6, r: 3 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Ellipse, { cx: 2.97, cy: 3, rx: 2.97, ry: 3, transform: "rotate(269.5 11.92 9)skewY(-.02)" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8.5 8.5 3 3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 15 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.5 15.5 20 4" })
        ]
      }
    );
  }
);
Scissors.displayName = "Scissors";
var SearchMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.95 17.05 21 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 11h6" })
        ]
      }
    );
  }
);
SearchMinus.displayName = "SearchMinus";
var SearchPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.95 17.05 21 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 8v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 11h6" })
        ]
      }
    );
  }
);
SearchPlus.displayName = "SearchPlus";
var Search = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 11, r: 8 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.95 17.05 21 21" })
        ]
      }
    );
  }
);
Search.displayName = "Search";
var Send = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53c.4.17.4.73 0 .9Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4.16 12.02h17.39" })
        ]
      }
    );
  }
);
Send.displayName = "Send";
var SettingsControl = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5" })
        ]
      }
    );
  }
);
SettingsControl.displayName = "SettingsControl";
var Settings = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82a2 2 0 0 0-3.09-1.68l-1.33.87a1 1 0 0 1-1.46-.43l-.94-2.1a1 1 0 0 1 .42-1.29l1.45-.8a2 2 0 0 0 0-3.5l-1.45-.8a1 1 0 0 1-.42-1.29l.94-2.1a1 1 0 0 1 1.46-.43l1.33.87a2 2 0 0 0 3.09-1.68V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82a2 2 0 0 0 3.09 1.68l1.33-.87a1 1 0 0 1 1.46.43l.94 2.1a1 1 0 0 1-.42 1.29l-1.45.8a2 2 0 0 0 0 3.5l1.45.8a1 1 0 0 1 .42 1.29l-.94 2.1a1 1 0 0 1-1.46.43l-1.33-.87a2 2 0 0 0-3.09 1.68V21a1 1 0 0 1-1 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3 })
        ]
      }
    );
  }
);
Settings.displayName = "Settings";
var ShieldAlert = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8v5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 16, r: 0.5 })
        ]
      }
    );
  }
);
ShieldAlert.displayName = "ShieldAlert";
var ShieldCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 12 1.74 1.63c.22.2.56.17.74-.06L15 9" })
        ]
      }
    );
  }
);
ShieldCheck.displayName = "ShieldCheck";
var ShieldEllipsis = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 12, r: 0.5 })
        ]
      }
    );
  }
);
ShieldEllipsis.displayName = "ShieldEllipsis";
var ShieldLock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 5, x: 9, y: 11, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 11v-1a2 2 0 1 0-4 0v1" })
        ]
      }
    );
  }
);
ShieldLock.displayName = "ShieldLock";
var ShieldOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.68 14.5q.32-1.22.32-2.53V5.26q-.02-.21-.23-.23a11.5 11.5 0 0 1-6.79-2.3l-.8-.6a.3.3 0 0 0-.35 0l-.81.6q-1 .75-2.13 1.27" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17.98 18.1a10.3 10.3 0 0 1-6 3.9A10.3 10.3 0 0 1 4 11.96v-6.7q.02-.21.23-.23.38 0 .77-.03" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
ShieldOff.displayName = "ShieldOff";
var ShieldQuestion = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.18q.02-.2.23-.23a11.4 11.4 0 0 0 6.79-2.29l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.22v6.72a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.9z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 17, r: 0.5 })
        ]
      }
    );
  }
);
ShieldQuestion.displayName = "ShieldQuestion";
var ShieldUser = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.2q.02-.21.23-.23c2.45-.02 4.83-.83 6.79-2.3l.8-.61c.1-.08.25-.08.35 0l.81.6a11.4 11.4 0 0 0 6.8 2.3q.2.01.22.24v6.73A10.3 10.3 0 0 1 11.98 22 10.3 10.3 0 0 1 4 11.93z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17.5 18.5c0-2.2-2.74-4.5-5.5-4.5s-5.5 2.3-5.5 4.5" })
        ]
      }
    );
  }
);
ShieldUser.displayName = "ShieldUser";
var ShieldX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 10 4 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 14 4-4" })
        ]
      }
    );
  }
);
ShieldX.displayName = "ShieldX";
var Shield = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 5.26q.02-.21.23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6c.1-.08.25-.08.35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3q.2.02.22.23v6.71a10.3 10.3 0 0 1-8.02 10.02A10.3 10.3 0 0 1 4 11.97z" })
      }
    );
  }
);
Shield.displayName = "Shield";
var ShoppingBagCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 22H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4h11a1 1 0 0 1 .8.4L21 6v7m0-7H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10a4 4 0 0 1-8 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 19.12 1.98 1.98q.14.12.28 0L22 17" })
        ]
      }
    );
  }
);
ShoppingBagCheck.displayName = "ShoppingBagCheck";
var ShoppingBagPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13V6l-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h9m8-16H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 17v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 19h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10a4 4 0 0 1-8 0" })
        ]
      }
    );
  }
);
ShoppingBagPlus.displayName = "ShoppingBagPlus";
var ShoppingBag = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10a4 4 0 0 1-8 0" })
        ]
      }
    );
  }
);
ShoppingBag.displayName = "ShoppingBag";
var ShoppingCartPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 2 1 5 1.65 7.43A2 2 0 0 0 8.6 16h9.8a2 2 0 0 0 1.95-1.57l1.1-5M5 7h7.25" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 2h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 4v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 6h4" })
        ]
      }
    );
  }
);
ShoppingCartPlus.displayName = "ShoppingCartPlus";
var ShoppingCart = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 2h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 21, r: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 21, r: 1 })
        ]
      }
    );
  }
);
ShoppingCart.displayName = "ShoppingCart";
var Shuffle = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 18h4.93a2 2 0 0 0 1.66-.9l6.82-10.2a2 2 0 0 1 1.66-.9H22" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.1 9.14 8.6 6.89A2 2 0 0 0 6.92 6H2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 18h-4.93a2 2 0 0 1-1.66-.9L14 15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 2 2.92 3.34a1 1 0 0 1 0 1.32L19 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19 22 2.92-3.34a1 1 0 0 0 0-1.32L19 14" })
        ]
      }
    );
  }
);
Shuffle.displayName = "Shuffle";
var SimCard = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4c0-1.1.9-2 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 8, height: 9, x: 8, y: 9, rx: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 9v2.98q0 .02.02.02H16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8.5 15h3.48q.02 0 .02.02V18" })
        ]
      }
    );
  }
);
SimCard.displayName = "SimCard";
var SkipBack = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4v16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7.77 13.38a1.62 1.62 0 0 1 0-2.76L18.8 4.2c.99-.58 2.2.18 2.2 1.38v12.84c0 1.2-1.21 1.96-2.2 1.38z" })
        ]
      }
    );
  }
);
SkipBack.displayName = "SkipBack";
var SkipForward = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Svg.G, { clipPath: "url(#a)", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 4v16" }),
            /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16.61 10.69a1.5 1.5 0 0 1 0 2.62L5.47 19.44a1.5 1.5 0 0 1-2.22-1.32V5.88a1.5 1.5 0 0 1 2.22-1.32z" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Defs, { children: /* @__PURE__ */ jsxRuntime.jsx(Svg.ClipPath, { id: "a", children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 24, height: 24 }) }) })
        ]
      }
    );
  }
);
SkipForward.displayName = "SkipForward";
var SlidersHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 5V3m0 2v2m0-2h7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 12v-2m0 2v2m0-2H3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 19h9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19v-2m0 2v2m0-2h5" })
        ]
      }
    );
  }
);
SlidersHorizontal.displayName = "SlidersHorizontal";
var SlidersVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 3v7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 14v7m0-7H3m2 0h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 8h2m-2 0h-2m2 0V3" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 12v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 3v9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16h2m-2 0h-2m2 0v5" })
        ]
      }
    );
  }
);
SlidersVertical.displayName = "SlidersVertical";
var SmilePlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.95 11q.05.5.05 1a10 10 0 1 1-9-9.95" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.14 6.14 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 2v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 5h6" })
        ]
      }
    );
  }
);
SmilePlus.displayName = "SmilePlus";
var SmileWink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.14 6.14 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 10c.6-.94 1.69-1.68 3 0" })
        ]
      }
    );
  }
);
SmileWink.displayName = "SmileWink";
var Smile = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 15a6.14 6.14 0 0 0 10 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 8, cy: 10, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16, cy: 10, r: 0.5 })
        ]
      }
    );
  }
);
Smile.displayName = "Smile";
var SparklesText = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15.99 6.8-1.96-.83a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.84-1.96a.05.05 0 0 1 .09 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.96.84c.04.01.04.07 0 .09l-1.96.84a2 2 0 0 0-1.05 1.05l-.84 1.96a.05.05 0 0 1-.1 0l-.83-1.96a2 2 0 0 0-1.05-1.05Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 5h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 13h15.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 17h12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 21h17.5" })
        ]
      }
    );
  }
);
SparklesText.displayName = "SparklesText";
var Sparkles = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10.86 12.08-4.43-1.9a.2.2 0 0 1 0-.36l4.43-1.9a2 2 0 0 0 1.06-1.06l1.9-4.43a.2.2 0 0 1 .36 0l1.9 4.43a2 2 0 0 0 1.06 1.06l4.43 1.9a.2.2 0 0 1 0 .36l-4.43 1.9a2 2 0 0 0-1.06 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.06" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4.06 18.88-1.95-.83a.05.05 0 0 1 0-.1l1.95-.83a2 2 0 0 0 1.06-1.06l.83-1.95a.05.05 0 0 1 .1 0l.83 1.95a2 2 0 0 0 1.06 1.06l1.95.83q.06.05 0 .1l-1.95.83a2 2 0 0 0-1.06 1.06l-.83 1.95a.05.05 0 0 1-.1 0l-.83-1.95a2 2 0 0 0-1.06-1.06" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 2v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 4h4" })
        ]
      }
    );
  }
);
Sparkles.displayName = "Sparkles";
var Split = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8V3.5c0-.28.22-.5.5-.5H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 8V3.5a.5.5 0 0 0-.5-.5H16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m20 4-5 4" })
        ]
      }
    );
  }
);
Split.displayName = "Split";
var SquareActivity = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 11.98h1.35q.03 0 .05-.04l1.33-4.9c.01-.05.09-.05.1 0l3.23 9.92c.02.05.09.05.1 0l2.02-4.94q.01-.03.05-.04H17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 })
        ]
      }
    );
  }
);
SquareActivity.displayName = "SquareActivity";
var SquareArrowOutUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9V3.5c0-.28.22-.5.5-.5H9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 4 8 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 13v7.5c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13" })
        ]
      }
    );
  }
);
SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft";
var SquareArrowOutUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5H11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3h5.5c.28 0 .5.22.5.5V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 12 8-8" })
        ]
      }
    );
  }
);
SquareArrowOutUpRight.displayName = "SquareArrowOutUpRight";
var SquareArrowUpLeft = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 10 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 15V9.5c0-.28.22-.5.5-.5H15" })
        ]
      }
    );
  }
);
SquareArrowUpLeft.displayName = "SquareArrowUpLeft";
var SquareArrowUpRight = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 9h5.7c.17 0 .3.13.3.3V15" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m9 15 5-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.5 21h-17a.5.5 0 0 1-.5-.5v-17c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5v17a.5.5 0 0 1-.5.5" })
        ]
      }
    );
  }
);
SquareArrowUpRight.displayName = "SquareArrowUpRight";
var SquareChevronDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 10 3.76 3.9c.13.13.35.13.48 0L16 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1.5 })
        ]
      }
    );
  }
);
SquareChevronDown.displayName = "SquareChevronDown";
var SquareChevronUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 14 3.65-3.65c.2-.2.5-.2.7 0L16 14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 1 })
        ]
      }
    );
  }
);
SquareChevronUp.displayName = "SquareChevronUp";
var SquareUser = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 20c0-2.76-2.69-5-6-5s-6 2.24-6 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 })
        ]
      }
    );
  }
);
SquareUser.displayName = "SquareUser";
var Star = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42q.02.03.06.03h7.8c.05 0 .07.06.03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33q0-.03-.02-.05l-6.3-4.59a.05.05 0 0 1 .02-.09h7.8q.04 0 .05-.03z" })
      }
    );
  }
);
Star.displayName = "Star";
var StopCircle = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 6, x: 9, y: 9, rx: 1 })
        ]
      }
    );
  }
);
StopCircle.displayName = "StopCircle";
var SunDim = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 4, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 4, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 20, cy: 12, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 20, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6, cy: 18, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6, cy: 6, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 6, r: 0.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 18, cy: 18, r: 0.5 })
        ]
      }
    );
  }
);
SunDim.displayName = "SunDim";
var SunMoon = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9.05 21c3.08 0 5.33-2.26 5.94-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.72A6 6 0 0 0 3 14.98 6.04 6.04 0 0 0 9.05 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.97 12C15.8 10 15 8.07 12 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 12h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6.5 19.5 5" })
        ]
      }
    );
  }
);
SunMoon.displayName = "SunMoon";
var Sun = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 4 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 20v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 12H2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 12h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 5.5 5 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17.5 5.5 19 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18.5 18.5 20 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 20 1.5-1.5" })
        ]
      }
    );
  }
);
Sun.displayName = "Sun";
var SwapHorizontal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6 7h14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 13 3.65 3.65c.2.2.2.5 0 .7L16 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 17h14" })
        ]
      }
    );
  }
);
SwapHorizontal.displayName = "SwapHorizontal";
var SwapVertical = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 4v14" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3 16 3.65 3.65c.2.2.5.2.7 0L11 16" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 8 3.65-3.65c.2-.2.5-.2.7 0L21 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 6v14" })
        ]
      }
    );
  }
);
SwapVertical.displayName = "SwapVertical";
var TableProperties = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 9h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 15h18" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 3v18" })
        ]
      }
    );
  }
);
TableProperties.displayName = "TableProperties";
var TagCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m14 10.12 1.98 1.98q.14.12.28 0L20 8" })
        ]
      }
    );
  }
);
TagCheck.displayName = "TagCheck";
var TagMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 11h6" })
        ]
      }
    );
  }
);
TagMinus.displayName = "TagMinus";
var TagPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 8v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 11h6" })
        ]
      }
    );
  }
);
TagPlus.displayName = "TagPlus";
var TagX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.49 9.01a1 1 0 0 0 1.41-.04L17.27 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 13 4-4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 9 4 4" })
        ]
      }
    );
  }
);
TagX.displayName = "TagX";
var Tags = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55c-.3.3-.78.32-1.08.03l-7.27-6.9A.8.8 0 0 1 7 9.33" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20" })
        ]
      }
    );
  }
);
Tags.displayName = "Tags";
var Target = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 10 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 6 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 2 })
        ]
      }
    );
  }
);
Target.displayName = "Target";
var Terminal = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m4 5 5.86 5.86a.2.2 0 0 1 0 .28L4 17" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 19h8" })
        ]
      }
    );
  }
);
Terminal.displayName = "Terminal";
var ThumbsDown = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.4.4 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2" })
      }
    );
  }
);
ThumbsDown.displayName = "ThumbsDown";
var ThumbsUp = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.26a1 1 0 0 0 .96-.7l2.16-6.93c.07-.2.29-.31.48-.24a4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12" })
      }
    );
  }
);
ThumbsUp.displayName = "ThumbsUp";
var Ticket = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 9V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2M2 15v2c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15a3 3 0 1 0 0-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M22 15a3 3 0 1 1 0-6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M13 5v3m0 11v-2m0-5v1" })
        ]
      }
    );
  }
);
Ticket.displayName = "Ticket";
var Trash2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 6h2m0 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 11v6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14 11v6" })
        ]
      }
    );
  }
);
Trash2.displayName = "Trash2";
var Trash = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 6h2m16 0h-2M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V6" })
      }
    );
  }
);
Trash.displayName = "Trash";
var TruckElectric = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 2 2.13 5.74c-.05.1.04.2.14.17l2.51-.84c.1-.03.18.06.16.15L4 8.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" })
        ]
      }
    );
  }
);
TruckElectric.displayName = "TruckElectric";
var Truck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 7, cy: 18, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17, cy: 18, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14" })
        ]
      }
    );
  }
);
Truck.displayName = "Truck";
var Undo2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M4 9h10.5a5.5 5.5 0 1 1 0 11H12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 4 4.14 8.86a.2.2 0 0 0 0 .28L9 14" })
        ]
      }
    );
  }
);
Undo2.displayName = "Undo2";
var Unlink = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16.46 20.21.68 2.13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m3.93 7.3-2.11-.75" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m19.68 17.09 2.1.74" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7.15 4.17-.68-2.13" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12.95 4.46a5 5 0 1 1 7.07 7.08l-2.83 2.82a5 5 0 0 1-7.07 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11.54 20.02a5 5 0 1 1-7.08-7.07l2.83-2.83a5 5 0 0 1 7.07 0" })
        ]
      }
    );
  }
);
Unlink.displayName = "Unlink";
var Upload = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 14v5c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 8 4.65-4.65c.2-.2.5-.2.7 0L17 8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 4v11" })
        ]
      }
    );
  }
);
Upload.displayName = "Upload";
var UserCheck = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14.75A8 8 0 0 0 2 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16" })
        ]
      }
    );
  }
);
UserCheck.displayName = "UserCheck";
var UserCog = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.15 13.64A8 8 0 0 0 4 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 19, cy: 19, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 21v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 19h1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 17 .5.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m20.5 20.5.5.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 21 .5-.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m20.5 17.5.5-.5" })
        ]
      }
    );
  }
);
UserCog.displayName = "UserCog";
var UserLock = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.15 12.64A8 8 0 0 0 3 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21.61 18H15.4c-.22 0-.39.16-.39.36v3.28c0 .2.17.36.39.36h6.22c.22 0 .39-.16.39-.36v-3.28c0-.2-.17-.36-.39-.36Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 18v-1.33c0-.92.67-1.67 1.5-1.67s1.5.75 1.5 1.67V18" })
        ]
      }
    );
  }
);
UserLock.displayName = "UserLock";
var UserMinus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.15 13.64A8 8 0 0 0 4 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" })
        ]
      }
    );
  }
);
UserMinus.displayName = "UserMinus";
var UserPlus = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.15 13.64A8 8 0 0 0 4 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 19h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 16v6" })
        ]
      }
    );
  }
);
UserPlus.displayName = "UserPlus";
var UserSearch = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.15 13.64A8 8 0 0 0 4 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 19, cy: 19, r: 2 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20.5 20.5 22 22" })
        ]
      }
    );
  }
);
UserSearch.displayName = "UserSearch";
var UserX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15.15 13.64A8 8 0 0 0 4 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 17 5 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m17 22 5-5" })
        ]
      }
    );
  }
);
UserX.displayName = "UserX";
var User = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 21a8 8 0 1 0-16 0" })
        ]
      }
    );
  }
);
User.displayName = "User";
var UsersShield = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.15 12.64A8 8 0 0 0 3 20" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 16.12q0-.08.09-.08c.91 0 1.8-.29 2.54-.8l.3-.22q.07-.04.14 0l.3.21c.73.52 1.63.8 2.54.8q.08 0 .09.09v2.36A3.7 3.7 0 0 1 19 22a3.7 3.7 0 0 1-3-3.52z" })
        ]
      }
    );
  }
);
UsersShield.displayName = "UsersShield";
var Users = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 10, cy: 8, r: 5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 21a8 8 0 1 0-16 0" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 4c.83 1.33 2 4.9 0 8.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 12.5c1.5 1.33 4.4 4.9 4 8.5" })
        ]
      }
    );
  }
);
Users.displayName = "Users";
var Van = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M9 18h6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6" })
        ]
      }
    );
  }
);
Van.displayName = "Van";
var VideoCamera = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75Z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m15 12.1 3.7 1.8c.56.27 1.3-.02 1.3-.5V9.6c0-.48-.74-.77-1.3-.5L15 10.9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6.5, cy: 3.5, r: 1.5 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11.5, cy: 3.5, r: 1.5 })
        ]
      }
    );
  }
);
VideoCamera.displayName = "VideoCamera";
var Video = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 12, x: 2, y: 6, rx: 1 }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11" })
        ]
      }
    );
  }
);
Video.displayName = "Video";
var Volume1 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 7c1.17 1.33 2.8 5.2 0 10" })
        ]
      }
    );
  }
);
Volume1.displayName = "Volume1";
var Volume2 = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 9c.83 1 2 3.6 0 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 5c2.33 2.33 5.6 8.4 0 14" })
        ]
      }
    );
  }
);
Volume2.displayName = "Volume2";
var VolumeOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10 5.75.2-.15a.5.5 0 0 1 .8.4v1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M16 9a5 5 0 0 1 1.08 3.5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 5c1.92 1.92 4.47 6.37 2.2 11" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
VolumeOff.displayName = "VolumeOff";
var VolumeX = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m16 9 6 6" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m22 9-6 6" })
        ]
      }
    );
  }
);
VolumeX.displayName = "VolumeX";
var Volume = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M2 15.57V8.43a1 1 0 0 1 1-1h4.21a1 1 0 0 0 .62-.21l3.36-2.6a.5.5 0 0 1 .81.4V19.1a.5.5 0 0 1-.76.43l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1" })
      }
    );
  }
);
Volume.displayName = "Volume";
var WalletCards = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 9H5a2 2 0 1 1 0-4h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 13V9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 16.63V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 15c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18.5 9.04.26-.26a2 2 0 0 0 0-2.83l-3.53-3.54a2 2 0 0 0-2.83 0L5.8 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10.59 9.17 5.65-5.66" })
        ]
      }
    );
  }
);
WalletCards.displayName = "WalletCards";
var Wallet = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 7h-3m0 0H5a2 2 0 1 1 0-4h11a2 2 0 0 1 2 2z" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 12V7" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 14c0-1.1.9-2 2-2h2.93q.06 0 .07.07v3.86q0 .06-.07.07H19a2 2 0 0 1-2-2" })
        ]
      }
    );
  }
);
Wallet.displayName = "Wallet";
var WandSparkles = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 4, height: 25.5, x: 19.53, y: 1.5, rx: 1, transform: "rotate(45 19.53 1.5)" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m13 9 2 2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M19 14v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M5 6v4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M17 16h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M3 8h4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M11 2v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 3h2" })
        ]
      }
    );
  }
);
WandSparkles.displayName = "WandSparkles";
var Wand = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 12-9 9" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M10 9H8" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m12 6-1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 4V2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M20 9h2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M15 14v2" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 12 1 1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 6 1-1" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 15, cy: 9, r: 0.5 })
        ]
      }
    );
  }
);
Wand.displayName = "Wand";
var Wrench = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m10.5 10.5-5.72 5.72a1.98 1.98 0 0 0 2.75 2.85l5.97-5.57" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18 2.5-2.86 3.22a1.82 1.82 0 0 0 2.65 2.5L21 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 2.5a4 4 0 0 0-2-.5 6 6 0 0 0-5.5 8.4" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M21 5c.56.91 1 1.85 1 3a6 6 0 0 1-8.4 5.5" })
        ]
      }
    );
  }
);
Wrench.displayName = "Wrench";
var X = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m6 6 12 12" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M18 6 6 18" })
        ]
      }
    );
  }
);
X.displayName = "X";
var ZapOff = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m18.48 12 1.8-2.1a.5.5 0 0 0-.37-.83h-4.66a.5.5 0 0 1-.5-.52l.2-6.2a.5.5 0 0 0-.86-.36L11.3 5" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m8 8.55-4.23 4.63a.5.5 0 0 0 .37.84h5.1a.5.5 0 0 1 .5.54l-.6 6.9a.5.5 0 0 0 .87.37l5.45-6.33" }),
          /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "m2 2 20 20" })
        ]
      }
    );
  }
);
ZapOff.displayName = "ZapOff";
var Zap = react.forwardRef(
  ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconBase,
      {
        ref,
        size,
        color,
        strokeWidth,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { d: "M14.09 1.99a.5.5 0 0 1 .86.36l-.2 6.2a.5.5 0 0 0 .5.52h4.66c.43 0 .66.5.38.83L10 21.83a.5.5 0 0 1-.88-.37l.6-6.9a.5.5 0 0 0-.5-.54H4.14a.5.5 0 0 1-.37-.84z" })
      }
    );
  }
);
Zap.displayName = "Zap";

exports.Activity = Activity;
exports.Alert = Alert;
exports.Angry = Angry;
exports.Annoyed = Annoyed;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftFromLine = ArrowLeftFromLine;
exports.ArrowLeftToLine = ArrowLeftToLine;
exports.ArrowRightFromLine = ArrowRightFromLine;
exports.ArrowRightToLine = ArrowRightToLine;
exports.ArrowUpFromLine = ArrowUpFromLine;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.ArrowUpToLine = ArrowUpToLine;
exports.BarChart = BarChart;
exports.BarcodeRead = BarcodeRead;
exports.Baseline = Baseline;
exports.BellRing = BellRing;
exports.Bitcoin = Bitcoin;
exports.Bolt = Bolt;
exports.Bookmark = Bookmark;
exports.BotSmile = BotSmile;
exports.Braces = Braces;
exports.BrainCircuit = BrainCircuit;
exports.Briefcase = Briefcase;
exports.BriefcaseConveyorBelt = BriefcaseConveyorBelt;
exports.BriefcaseMedical = BriefcaseMedical;
exports.Brush = Brush;
exports.Calendar = Calendar;
exports.CalendarCheck = CalendarCheck;
exports.CalendarClock = CalendarClock;
exports.CalendarDays = CalendarDays;
exports.CalendarX = CalendarX;
exports.Chat = Chat;
exports.Check = Check;
exports.ChevronDown = ChevronDown;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsDownUp = ChevronsDownUp;
exports.ChevronsUp = ChevronsUp;
exports.ChevronsUpDown = ChevronsUpDown;
exports.CircleArrowLeft = CircleArrowLeft;
exports.CircleArrowOutUpLeft = CircleArrowOutUpLeft;
exports.CircleArrowOutUpRight = CircleArrowOutUpRight;
exports.CircleCheck = CircleCheck;
exports.CircleCheckBig = CircleCheckBig;
exports.CircleChevronDown = CircleChevronDown;
exports.CircleChevronUp = CircleChevronUp;
exports.CircleUser = CircleUser;
exports.Clapperboard = Clapperboard;
exports.Clipboard = Clipboard;
exports.ClipboardCheck = ClipboardCheck;
exports.ClipboardList = ClipboardList;
exports.ClipboardPlus = ClipboardPlus;
exports.ClipboardX = ClipboardX;
exports.ClockArrowLeft = ClockArrowLeft;
exports.Code = Code;
exports.CodeXml = CodeXml;
exports.Cog = Cog;
exports.Coin = Coin;
exports.ColumnChart = ColumnChart;
exports.ColumnChartPlainIncreasing = ColumnChartPlainIncreasing;
exports.Columns2 = Columns2;
exports.Columns3 = Columns3;
exports.Compass = Compass;
exports.Copy = Copy;
exports.CopyCheck = CopyCheck;
exports.CopyX = CopyX;
exports.CreditCard = CreditCard;
exports.CreditCardDisabled = CreditCardDisabled;
exports.CreditCardPlus = CreditCardPlus;
exports.Crown = Crown;
exports.Divide = Divide;
exports.DollarSign = DollarSign;
exports.Download = Download;
exports.DraftBook = DraftBook;
exports.Equal = Equal;
exports.Equalizer = Equalizer;
exports.Eraser = Eraser;
exports.Euro = Euro;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeClosed = EyeClosed;
exports.FastForward = FastForward;
exports.File = File;
exports.FileDiff = FileDiff;
exports.FileSymlink = FileSymlink;
exports.FileVolume = FileVolume;
exports.Film = Film;
exports.FingerPrint = FingerPrint;
exports.Folder = Folder;
exports.Frown = Frown;
exports.GalleryHorizontal = GalleryHorizontal;
exports.GalleryVertical = GalleryVertical;
exports.Gem = Gem;
exports.GenericLayout = GenericLayout;
exports.Gift = Gift;
exports.Globe = Globe;
exports.GlobeCheck = GlobeCheck;
exports.GlobeLock = GlobeLock;
exports.GlobeOff = GlobeOff;
exports.GlobeX = GlobeX;
exports.Grid2x2 = Grid2x2;
exports.Grid2x2Plus = Grid2x2Plus;
exports.Grid2x2X = Grid2x2X;
exports.Grid3x3 = Grid3x3;
exports.Grid3x3Plus = Grid3x3Plus;
exports.Hammer = Hammer;
exports.Handbag = Handbag;
exports.Hashtag = Hashtag;
exports.HatGlasses = HatGlasses;
exports.Heart = Heart;
exports.HeartCrack = HeartCrack;
exports.HeartOff = HeartOff;
exports.Home = Home;
exports.Image = Image;
exports.ImageMinus = ImageMinus;
exports.ImageOff = ImageOff;
exports.ImagePlus = ImagePlus;
exports.Images = Images;
exports.Infinity = Infinity;
exports.Info = Info;
exports.Key = Key;
exports.KeyRound = KeyRound;
exports.Laugh = Laugh;
exports.LaughWink = LaughWink;
exports.LayoutDashboard = LayoutDashboard;
exports.LayoutGrid = LayoutGrid;
exports.LayoutKanban = LayoutKanban;
exports.LayoutList = LayoutList;
exports.LayoutPanelLeft = LayoutPanelLeft;
exports.LayoutPanelRight = LayoutPanelRight;
exports.LayoutPanelTop = LayoutPanelTop;
exports.LayoutTemplate = LayoutTemplate;
exports.Link = Link;
exports.Link2 = Link2;
exports.Link2Off = Link2Off;
exports.LinkOff = LinkOff;
exports.List = List;
exports.ListChevronsDownUp = ListChevronsDownUp;
exports.ListChevronsUpDown = ListChevronsUpDown;
exports.ListFilter = ListFilter;
exports.ListOrdered = ListOrdered;
exports.ListTodo = ListTodo;
exports.Lock = Lock;
exports.LockCheck = LockCheck;
exports.LockKeyhole = LockKeyhole;
exports.LockOpen = LockOpen;
exports.LockOpenKeyhole = LockOpenKeyhole;
exports.LockSquare = LockSquare;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.Mail = Mail;
exports.MailCheck = MailCheck;
exports.MailMinus = MailMinus;
exports.MailOpen = MailOpen;
exports.MailPlus = MailPlus;
exports.MailX = MailX;
exports.Map = Map;
exports.MapPin = MapPin;
exports.MapPinCheck = MapPinCheck;
exports.MapPinned = MapPinned;
exports.Meh = Meh;
exports.MehBlank = MehBlank;
exports.Menu = Menu;
exports.MenuHorizontal = MenuHorizontal;
exports.MenuVertical = MenuVertical;
exports.MessageSquare = MessageSquare;
exports.MessageSquarePlus = MessageSquarePlus;
exports.MessageSquareText = MessageSquareText;
exports.Mic = Mic;
exports.MicOff = MicOff;
exports.MicVintage = MicVintage;
exports.Minus = Minus;
exports.Moon = Moon;
exports.MoonStar = MoonStar;
exports.MousePointer = MousePointer;
exports.Navigation = Navigation;
exports.Navigation2 = Navigation2;
exports.Notification = Notification;
exports.Nut = Nut;
exports.PackageCheck = PackageCheck;
exports.PaintBucket = PaintBucket;
exports.Paperclip = Paperclip;
exports.Pause = Pause;
exports.PauseCircle = PauseCircle;
exports.PauseSquare = PauseSquare;
exports.PenLine = PenLine;
exports.PenTool = PenTool;
exports.Pencil = Pencil;
exports.Percent = Percent;
exports.Phone = Phone;
exports.PhoneCall = PhoneCall;
exports.PhoneForward = PhoneForward;
exports.PhoneIncoming = PhoneIncoming;
exports.PhoneOff = PhoneOff;
exports.PhoneOutgoing = PhoneOutgoing;
exports.PhoneX = PhoneX;
exports.PieChart = PieChart;
exports.Pin = Pin;
exports.Pipette = Pipette;
exports.Play = Play;
exports.PlaySquare = PlaySquare;
exports.Plus = Plus;
exports.PoundSterling = PoundSterling;
exports.Radio = Radio;
exports.Receipt = Receipt;
exports.ReceiptText = ReceiptText;
exports.Redo2 = Redo2;
exports.RefreshCw = RefreshCw;
exports.Repeat = Repeat;
exports.Repeat1 = Repeat1;
exports.Rewind = Rewind;
exports.RotateCwSquare = RotateCwSquare;
exports.Rows2 = Rows2;
exports.Rows3 = Rows3;
exports.Save = Save;
exports.ScanQr = ScanQr;
exports.Scissors = Scissors;
exports.Search = Search;
exports.SearchMinus = SearchMinus;
exports.SearchPlus = SearchPlus;
exports.Send = Send;
exports.Settings = Settings;
exports.SettingsControl = SettingsControl;
exports.Shield = Shield;
exports.ShieldAlert = ShieldAlert;
exports.ShieldCheck = ShieldCheck;
exports.ShieldEllipsis = ShieldEllipsis;
exports.ShieldLock = ShieldLock;
exports.ShieldOff = ShieldOff;
exports.ShieldQuestion = ShieldQuestion;
exports.ShieldUser = ShieldUser;
exports.ShieldX = ShieldX;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingBagCheck = ShoppingBagCheck;
exports.ShoppingBagPlus = ShoppingBagPlus;
exports.ShoppingCart = ShoppingCart;
exports.ShoppingCartPlus = ShoppingCartPlus;
exports.Shuffle = Shuffle;
exports.SimCard = SimCard;
exports.SkipBack = SkipBack;
exports.SkipForward = SkipForward;
exports.SlidersHorizontal = SlidersHorizontal;
exports.SlidersVertical = SlidersVertical;
exports.Smile = Smile;
exports.SmilePlus = SmilePlus;
exports.SmileWink = SmileWink;
exports.Sparkles = Sparkles;
exports.SparklesText = SparklesText;
exports.Split = Split;
exports.SquareActivity = SquareActivity;
exports.SquareArrowOutUpLeft = SquareArrowOutUpLeft;
exports.SquareArrowOutUpRight = SquareArrowOutUpRight;
exports.SquareArrowUpLeft = SquareArrowUpLeft;
exports.SquareArrowUpRight = SquareArrowUpRight;
exports.SquareChevronDown = SquareChevronDown;
exports.SquareChevronUp = SquareChevronUp;
exports.SquareUser = SquareUser;
exports.Star = Star;
exports.StopCircle = StopCircle;
exports.Sun = Sun;
exports.SunDim = SunDim;
exports.SunMoon = SunMoon;
exports.SwapHorizontal = SwapHorizontal;
exports.SwapVertical = SwapVertical;
exports.TableProperties = TableProperties;
exports.TagCheck = TagCheck;
exports.TagMinus = TagMinus;
exports.TagPlus = TagPlus;
exports.TagX = TagX;
exports.Tags = Tags;
exports.Target = Target;
exports.Terminal = Terminal;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.Ticket = Ticket;
exports.Trash = Trash;
exports.Trash2 = Trash2;
exports.Truck = Truck;
exports.TruckElectric = TruckElectric;
exports.Undo2 = Undo2;
exports.Unlink = Unlink;
exports.Upload = Upload;
exports.User = User;
exports.UserCheck = UserCheck;
exports.UserCog = UserCog;
exports.UserLock = UserLock;
exports.UserMinus = UserMinus;
exports.UserPlus = UserPlus;
exports.UserSearch = UserSearch;
exports.UserX = UserX;
exports.Users = Users;
exports.UsersShield = UsersShield;
exports.Van = Van;
exports.Video = Video;
exports.VideoCamera = VideoCamera;
exports.Volume = Volume;
exports.Volume1 = Volume1;
exports.Volume2 = Volume2;
exports.VolumeOff = VolumeOff;
exports.VolumeX = VolumeX;
exports.Wallet = Wallet;
exports.WalletCards = WalletCards;
exports.Wand = Wand;
exports.WandSparkles = WandSparkles;
exports.Wrench = Wrench;
exports.X = X;
exports.Zap = Zap;
exports.ZapOff = ZapOff;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map