import {createRequire} from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS((exports, module) => {
  function decodeURIComponent2(uri) {
    var percentPosition = uri.indexOf("%");
    if (percentPosition === -1)
      return uri;
    var length = uri.length;
    var decoded = "";
    var last = 0;
    var codepoint = 0;
    var startOfOctets = percentPosition;
    var state = UTF8_ACCEPT;
    while (percentPosition > -1 && percentPosition < length) {
      var high = hexCodeToInt(uri[percentPosition + 1], 4);
      var low = hexCodeToInt(uri[percentPosition + 2], 0);
      var byte = high | low;
      var type47 = UTF8_DATA[byte];
      state = UTF8_DATA[256 + state + type47];
      codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type47];
      if (state === UTF8_ACCEPT) {
        decoded += uri.slice(last, startOfOctets);
        decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
        codepoint = 0;
        last = percentPosition + 3;
        percentPosition = startOfOctets = uri.indexOf("%", last);
      } else if (state === UTF8_REJECT) {
        return null;
      } else {
        percentPosition += 3;
        if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
          continue;
        return null;
      }
    }
    return decoded + uri.slice(last);
  }
  function hexCodeToInt(c, shift) {
    var i = HEX[c];
    return i === undefined ? 255 : i << shift;
  }
  var UTF8_ACCEPT = 12;
  var UTF8_REJECT = 0;
  var UTF8_DATA = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  var HEX = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  module.exports = decodeURIComponent2;
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS((exports, module) => {
  var isLinux = () => process.platform === "linux";
  var report = null;
  var getReport = () => {
    if (!report) {
      if (isLinux() && process.report) {
        const orig = process.report.excludeNetwork;
        process.report.excludeNetwork = true;
        report = process.report.getReport();
        process.report.excludeNetwork = orig;
      } else {
        report = {};
      }
    }
    return report;
  };
  module.exports = { isLinux, getReport };
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS((exports, module) => {
  var fs = __require("fs");
  var LDD_PATH = "/usr/bin/ldd";
  var readFileSync = (path) => fs.readFileSync(path, "utf-8");
  var readFile = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  module.exports = {
    LDD_PATH,
    readFileSync,
    readFile
  };
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS((exports, module) => {
  var childProcess = __require("child_process");
  var { isLinux, getReport } = require_process();
  var { LDD_PATH, readFile, readFileSync } = require_filesystem();
  var cachedFamilyFilesystem;
  var cachedVersionFilesystem;
  var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
  var commandOut = "";
  var safeCommand = () => {
    if (!commandOut) {
      return new Promise((resolve) => {
        childProcess.exec(command, (err, out) => {
          commandOut = err ? " " : out;
          resolve(commandOut);
        });
      });
    }
    return commandOut;
  };
  var safeCommandSync = () => {
    if (!commandOut) {
      try {
        commandOut = childProcess.execSync(command, { encoding: "utf8" });
      } catch (_err) {
        commandOut = " ";
      }
    }
    return commandOut;
  };
  var GLIBC = "glibc";
  var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
  var MUSL = "musl";
  var isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
  var familyFromReport = () => {
    const report = getReport();
    if (report.header && report.header.glibcVersionRuntime) {
      return GLIBC;
    }
    if (Array.isArray(report.sharedObjects)) {
      if (report.sharedObjects.some(isFileMusl)) {
        return MUSL;
      }
    }
    return null;
  };
  var familyFromCommand = (out) => {
    const [getconf, ldd1] = out.split(/[\r\n]+/);
    if (getconf && getconf.includes(GLIBC)) {
      return GLIBC;
    }
    if (ldd1 && ldd1.includes(MUSL)) {
      return MUSL;
    }
    return null;
  };
  var getFamilyFromLddContent = (content) => {
    if (content.includes("musl")) {
      return MUSL;
    }
    if (content.includes("GNU C Library")) {
      return GLIBC;
    }
    return null;
  };
  var familyFromFilesystem = async () => {
    if (cachedFamilyFilesystem !== undefined) {
      return cachedFamilyFilesystem;
    }
    cachedFamilyFilesystem = null;
    try {
      const lddContent = await readFile(LDD_PATH);
      cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
    } catch (e) {
    }
    return cachedFamilyFilesystem;
  };
  var familyFromFilesystemSync = () => {
    if (cachedFamilyFilesystem !== undefined) {
      return cachedFamilyFilesystem;
    }
    cachedFamilyFilesystem = null;
    try {
      const lddContent = readFileSync(LDD_PATH);
      cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
    } catch (e) {
    }
    return cachedFamilyFilesystem;
  };
  var family = async () => {
    let family2 = null;
    if (isLinux()) {
      family2 = await familyFromFilesystem();
      if (!family2) {
        family2 = familyFromReport();
      }
      if (!family2) {
        const out = await safeCommand();
        family2 = familyFromCommand(out);
      }
    }
    return family2;
  };
  var familySync = () => {
    let family2 = null;
    if (isLinux()) {
      family2 = familyFromFilesystemSync();
      if (!family2) {
        family2 = familyFromReport();
      }
      if (!family2) {
        const out = safeCommandSync();
        family2 = familyFromCommand(out);
      }
    }
    return family2;
  };
  var isNonGlibcLinux = async () => isLinux() && await family() !== GLIBC;
  var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
  var versionFromFilesystem = async () => {
    if (cachedVersionFilesystem !== undefined) {
      return cachedVersionFilesystem;
    }
    cachedVersionFilesystem = null;
    try {
      const lddContent = await readFile(LDD_PATH);
      const versionMatch = lddContent.match(RE_GLIBC_VERSION);
      if (versionMatch) {
        cachedVersionFilesystem = versionMatch[1];
      }
    } catch (e) {
    }
    return cachedVersionFilesystem;
  };
  var versionFromFilesystemSync = () => {
    if (cachedVersionFilesystem !== undefined) {
      return cachedVersionFilesystem;
    }
    cachedVersionFilesystem = null;
    try {
      const lddContent = readFileSync(LDD_PATH);
      const versionMatch = lddContent.match(RE_GLIBC_VERSION);
      if (versionMatch) {
        cachedVersionFilesystem = versionMatch[1];
      }
    } catch (e) {
    }
    return cachedVersionFilesystem;
  };
  var versionFromReport = () => {
    const report = getReport();
    if (report.header && report.header.glibcVersionRuntime) {
      return report.header.glibcVersionRuntime;
    }
    return null;
  };
  var versionSuffix = (s) => s.trim().split(/\s+/)[1];
  var versionFromCommand = (out) => {
    const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
    if (getconf && getconf.includes(GLIBC)) {
      return versionSuffix(getconf);
    }
    if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
      return versionSuffix(ldd2);
    }
    return null;
  };
  var version2 = async () => {
    let version3 = null;
    if (isLinux()) {
      version3 = await versionFromFilesystem();
      if (!version3) {
        version3 = versionFromReport();
      }
      if (!version3) {
        const out = await safeCommand();
        version3 = versionFromCommand(out);
      }
    }
    return version3;
  };
  var versionSync = () => {
    let version3 = null;
    if (isLinux()) {
      version3 = versionFromFilesystemSync();
      if (!version3) {
        version3 = versionFromReport();
      }
      if (!version3) {
        const out = safeCommandSync();
        version3 = versionFromCommand(out);
      }
    }
    return version3;
  };
  module.exports = {
    GLIBC,
    MUSL,
    family,
    familySync,
    isNonGlibcLinux,
    isNonGlibcLinuxSync,
    version: version2,
    versionSync
  };
});

// node_modules/node-gyp-build-optional-packages/node-gyp-build.js
var require_node_gyp_build = __commonJS((exports, module) => {
  function load(dir) {
    return runtimeRequire(load.resolve(dir));
  }
  function readdirSync(dir) {
    try {
      return fs.readdirSync(dir);
    } catch (err) {
      return [];
    }
  }
  function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
  }
  function matchBuild(name) {
    return /\.node$/.test(name);
  }
  function parseTuple(name) {
    var arr = name.split("-");
    if (arr.length !== 2)
      return;
    var platform2 = arr[0];
    var architectures = arr[1].split("+");
    if (!platform2)
      return;
    if (!architectures.length)
      return;
    if (!architectures.every(Boolean))
      return;
    return { name, platform: platform2, architectures };
  }
  function matchTuple(platform2, arch2) {
    return function(tuple8) {
      if (tuple8 == null)
        return false;
      if (tuple8.platform !== platform2)
        return false;
      return tuple8.architectures.includes(arch2);
    };
  }
  function compareTuples(a, b) {
    return a.architectures.length - b.architectures.length;
  }
  function parseTags(file) {
    var arr = file.split(".");
    var extension = arr.pop();
    var tags = { file, specificity: 0 };
    if (extension !== "node")
      return;
    for (var i = 0;i < arr.length; i++) {
      var tag = arr[i];
      if (tag === "node" || tag === "electron" || tag === "node-webkit") {
        tags.runtime = tag;
      } else if (tag === "napi") {
        tags.napi = true;
      } else if (tag.slice(0, 3) === "abi") {
        tags.abi = tag.slice(3);
      } else if (tag.slice(0, 2) === "uv") {
        tags.uv = tag.slice(2);
      } else if (tag.slice(0, 4) === "armv") {
        tags.armv = tag.slice(4);
      } else if (tag === "glibc" || tag === "musl") {
        tags.libc = tag;
      } else {
        continue;
      }
      tags.specificity++;
    }
    return tags;
  }
  function matchTags(runtime2, abi2) {
    return function(tags) {
      if (tags == null)
        return false;
      if (tags.runtime !== runtime2 && !runtimeAgnostic(tags))
        return false;
      if (tags.abi !== abi2 && !tags.napi)
        return false;
      if (tags.uv && tags.uv !== uv)
        return false;
      if (tags.armv && tags.armv !== armv)
        return false;
      if (tags.libc && tags.libc !== libc)
        return false;
      return true;
    };
  }
  function runtimeAgnostic(tags) {
    return tags.runtime === "node" && tags.napi;
  }
  function compareTags(runtime2) {
    return function(a, b) {
      if (a.runtime !== b.runtime) {
        return a.runtime === runtime2 ? -1 : 1;
      } else if (a.abi !== b.abi) {
        return a.abi ? -1 : 1;
      } else if (a.specificity !== b.specificity) {
        return a.specificity > b.specificity ? -1 : 1;
      } else {
        return 0;
      }
    };
  }
  function isNwjs() {
    return !!(process.versions && process.versions.nw);
  }
  function isElectron() {
    if (process.versions && process.versions.electron)
      return true;
    if (process.env.ELECTRON_RUN_AS_NODE)
      return true;
    return typeof window !== "undefined" && window.process && window.process.type === "renderer";
  }
  function isMusl(platform2) {
    if (platform2 !== "linux")
      return false;
    const { familySync, MUSL } = require_detect_libc();
    return familySync() === MUSL;
  }
  var fs = __require("fs");
  var path = __require("path");
  var url = __require("url");
  var os = __require("os");
  var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
  var vars = process.config && process.config.variables || {};
  var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
  var versions = process.versions;
  var abi = versions.modules;
  if (versions.deno || process.isBun) {
    abi = "unsupported";
  }
  var runtime = isElectron() ? "electron" : isNwjs() ? "node-webkit" : "node";
  var arch = process.env.npm_config_arch || os.arch();
  var platform = process.env.npm_config_platform || os.platform();
  var libc = process.env.LIBC || (isMusl(platform) ? "musl" : "glibc");
  var armv = process.env.ARM_VERSION || (arch === "arm64" ? "8" : vars.arm_version) || "";
  var uv = (versions.uv || "").split(".")[0];
  module.exports = load;
  load.resolve = load.path = function(dir) {
    dir = path.resolve(dir || ".");
    var packageName = "";
    var packageNameError;
    try {
      packageName = runtimeRequire(path.join(dir, "package.json")).name;
      var varName = packageName.toUpperCase().replace(/-/g, "_");
      if (process.env[varName + "_PREBUILD"])
        dir = process.env[varName + "_PREBUILD"];
    } catch (err) {
      packageNameError = err;
    }
    if (!prebuildsOnly) {
      var release = getFirst(path.join(dir, "build/Release"), matchBuild);
      if (release)
        return release;
      var debug = getFirst(path.join(dir, "build/Debug"), matchBuild);
      if (debug)
        return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild)
      return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby)
      return nearby;
    var platformPackage = (packageName[0] == "@" ? "" : "@" + packageName + "/") + packageName + "-" + platform + "-" + arch;
    var packageResolutionError;
    try {
      var prebuildPackage = path.dirname(__require("module").createRequire(url.pathToFileURL(path.join(dir, "package.json"))).resolve(platformPackage));
      return resolveFile(prebuildPackage);
    } catch (error23) {
      packageResolutionError = error23;
    }
    var target = [
      "platform=" + platform,
      "arch=" + arch,
      "runtime=" + runtime,
      "abi=" + abi,
      "uv=" + uv,
      armv ? "armv=" + armv : "",
      "libc=" + libc,
      "node=" + process.versions.node,
      process.versions.electron ? "electron=" + process.versions.electron : "",
      typeof __webpack_require__ === "function" ? "webpack=true" : ""
    ].filter(Boolean).join(" ");
    let errMessage = "No native build was found for " + target + "\n    attempted loading from: " + dir + " and package:" + " " + platformPackage + "\n";
    if (packageNameError) {
      errMessage += "Error finding package.json: " + packageNameError.message + "\n";
    }
    if (packageResolutionError) {
      errMessage += "Error resolving package: " + packageResolutionError.message + "\n";
    }
    throw new Error(errMessage);
    function resolve(dir2) {
      var tuples = readdirSync(path.join(dir2, "prebuilds")).map(parseTuple);
      var tuple8 = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
      if (!tuple8)
        return;
      return resolveFile(path.join(dir2, "prebuilds", tuple8.name));
    }
    function resolveFile(prebuilds) {
      var parsed = readdirSync(prebuilds).map(parseTags);
      var candidates = parsed.filter(matchTags(runtime, abi));
      var winner = candidates.sort(compareTags(runtime))[0];
      if (winner)
        return path.join(prebuilds, winner.file);
    }
  };
  load.parseTags = parseTags;
  load.matchTags = matchTags;
  load.compareTags = compareTags;
  load.parseTuple = parseTuple;
  load.matchTuple = matchTuple;
  load.compareTuples = compareTuples;
});

// node_modules/node-gyp-build-optional-packages/index.js
var require_node_gyp_build_optional_packages = __commonJS((exports, module) => {
  var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
  if (typeof runtimeRequire.addon === "function") {
    module.exports = runtimeRequire.addon.bind(runtimeRequire);
  } else {
    module.exports = require_node_gyp_build();
  }
});

// node_modules/msgpackr-extract/index.js
var require_msgpackr_extract = __commonJS((exports, module) => {
  var __dirname = "E:\\_@Bun\\@API_Server\\node_modules\\msgpackr-extract";
  module.exports = require_node_gyp_build_optional_packages()(__dirname);
});

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && Symbol.asyncIterator in value;
}
function IsIterator(value) {
  return IsObject(value) && Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof Promise;
}
function IsDate(value) {
  return value instanceof Date && Number.isFinite(value.getTime());
}
function IsTypedArray(value) {
  return ArrayBuffer.isView(value);
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsObject(value) {
  return value !== null && typeof value === "object";
}
function IsArray(value) {
  return Array.isArray(value) && !ArrayBuffer.isView(value);
}
function IsUndefined(value) {
  return value === undefined;
}
function IsNull(value) {
  return value === null;
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return Number.isInteger(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsString(value) {
  return typeof value === "string";
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}
// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));
// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => Set2,
  Has: () => Has,
  Get: () => Get,
  Entries: () => Entries,
  Delete: () => Delete,
  Clear: () => Clear
});
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
var map = new Map;
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var exports_type = {};
__export(exports_type, {
  Set: () => Set3,
  Has: () => Has2,
  Get: () => Get2,
  Entries: () => Entries2,
  Delete: () => Delete2,
  Clear: () => Clear2
});
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
var map2 = new Map;
// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");
// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return {
    ...options,
    [Kind]: options[Kind] ?? "Unsafe"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}
// node_modules/@sinclair/typebox/build/esm/system/system.mjs
class TypeSystemDuplicateTypeKind extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
}

class TypeSystemDuplicateFormat extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
}
var TypeSystem;
(function(TypeSystem2) {
  function Type(kind, check) {
    if (exports_type.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    exports_type.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  TypeSystem2.Type = Type;
  function Format(format, check) {
    if (exports_format.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    exports_format.Set(format, check);
    return format;
  }
  TypeSystem2.Format = Format;
})(TypeSystem || (TypeSystem = {}));
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return {
    [Kind]: "MappedResult",
    properties
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => IsUndefined2,
  IsUint8Array: () => IsUint8Array2,
  IsSymbol: () => IsSymbol2,
  IsString: () => IsString2,
  IsRegExp: () => IsRegExp,
  IsObject: () => IsObject2,
  IsNumber: () => IsNumber2,
  IsNull: () => IsNull2,
  IsIterator: () => IsIterator2,
  IsFunction: () => IsFunction2,
  IsDate: () => IsDate2,
  IsBoolean: () => IsBoolean2,
  IsBigInt: () => IsBigInt2,
  IsAsyncIterator: () => IsAsyncIterator2,
  IsArray: () => IsArray2
});
function IsAsyncIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.asyncIterator in value;
}
function IsArray2(value) {
  return Array.isArray(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsDate2(value) {
  return value instanceof globalThis.Date;
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.iterator in value;
}
function IsNull2(value) {
  return value === null;
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsObject2(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString2(value) {
  return typeof value === "string";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined2(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray2(value) ? ArrayType(value) : IsDate2(value) ? DateType(value) : IsUint8Array2(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject2(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneRest(schemas) {
  return schemas.map((schema) => CloneType(schema));
}
function CloneType(schema, options = {}) {
  return { ...Clone(schema), ...options };
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value2, key) {
  const { [key]: _, ...rest } = value2;
  return rest;
}
function Discard(value2, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value2);
}
// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(schema, options = {}) {
  return {
    ...options,
    [Kind]: "Array",
    type: "array",
    items: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "AsyncIterator",
    type: "AsyncIterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Constructor",
    type: "Constructor",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Function",
    type: "Function",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options = {}) {
  return {
    ...options,
    [Kind]: "Never",
    not: {}
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value2) {
  return IsObject2(value2) && value2[ReadonlyKind] === "Readonly";
}
function IsOptional(value2) {
  return IsObject2(value2) && value2[OptionalKind] === "Optional";
}
function IsAny(value2) {
  return IsKindOf(value2, "Any");
}
function IsArray3(value2) {
  return IsKindOf(value2, "Array");
}
function IsAsyncIterator3(value2) {
  return IsKindOf(value2, "AsyncIterator");
}
function IsBigInt3(value2) {
  return IsKindOf(value2, "BigInt");
}
function IsBoolean3(value2) {
  return IsKindOf(value2, "Boolean");
}
function IsConstructor(value2) {
  return IsKindOf(value2, "Constructor");
}
function IsDate3(value2) {
  return IsKindOf(value2, "Date");
}
function IsFunction3(value2) {
  return IsKindOf(value2, "Function");
}
function IsInteger2(value2) {
  return IsKindOf(value2, "Integer");
}
function IsIntersect(value2) {
  return IsKindOf(value2, "Intersect");
}
function IsIterator3(value2) {
  return IsKindOf(value2, "Iterator");
}
function IsKindOf(value2, kind) {
  return IsObject2(value2) && Kind in value2 && value2[Kind] === kind;
}
function IsLiteral(value2) {
  return IsKindOf(value2, "Literal");
}
function IsMappedKey(value2) {
  return IsKindOf(value2, "MappedKey");
}
function IsMappedResult(value2) {
  return IsKindOf(value2, "MappedResult");
}
function IsNever(value2) {
  return IsKindOf(value2, "Never");
}
function IsNot(value2) {
  return IsKindOf(value2, "Not");
}
function IsNull3(value2) {
  return IsKindOf(value2, "Null");
}
function IsNumber3(value2) {
  return IsKindOf(value2, "Number");
}
function IsObject3(value2) {
  return IsKindOf(value2, "Object");
}
function IsPromise2(value2) {
  return IsKindOf(value2, "Promise");
}
function IsRecord(value2) {
  return IsKindOf(value2, "Record");
}
function IsRef(value2) {
  return IsKindOf(value2, "Ref");
}
function IsRegExp2(value2) {
  return IsKindOf(value2, "RegExp");
}
function IsString3(value2) {
  return IsKindOf(value2, "String");
}
function IsSymbol3(value2) {
  return IsKindOf(value2, "Symbol");
}
function IsTemplateLiteral(value2) {
  return IsKindOf(value2, "TemplateLiteral");
}
function IsThis(value2) {
  return IsKindOf(value2, "This");
}
function IsTransform(value2) {
  return IsObject2(value2) && TransformKind in value2;
}
function IsTuple(value2) {
  return IsKindOf(value2, "Tuple");
}
function IsUndefined3(value2) {
  return IsKindOf(value2, "Undefined");
}
function IsUnion(value2) {
  return IsKindOf(value2, "Union");
}
function IsUint8Array3(value2) {
  return IsKindOf(value2, "Uint8Array");
}
function IsUnknown(value2) {
  return IsKindOf(value2, "Unknown");
}
function IsUnsafe(value2) {
  return IsKindOf(value2, "Unsafe");
}
function IsVoid(value2) {
  return IsKindOf(value2, "Void");
}
function IsKind(value2) {
  return IsObject2(value2) && Kind in value2 && IsString2(value2[Kind]);
}
function IsSchema(value2) {
  return IsAny(value2) || IsArray3(value2) || IsBoolean3(value2) || IsBigInt3(value2) || IsAsyncIterator3(value2) || IsConstructor(value2) || IsDate3(value2) || IsFunction3(value2) || IsInteger2(value2) || IsIntersect(value2) || IsIterator3(value2) || IsLiteral(value2) || IsMappedKey(value2) || IsMappedResult(value2) || IsNever(value2) || IsNot(value2) || IsNull3(value2) || IsNumber3(value2) || IsObject3(value2) || IsPromise2(value2) || IsRecord(value2) || IsRef(value2) || IsRegExp2(value2) || IsString3(value2) || IsSymbol3(value2) || IsTemplateLiteral(value2) || IsThis(value2) || IsTuple(value2) || IsUndefined3(value2) || IsUnion(value2) || IsUint8Array3(value2) || IsUnknown(value2) || IsUnsafe(value2) || IsVoid(value2) || IsKind(value2);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return Discard(CloneType(schema), [OptionalKind]);
}
function AddOptional(schema) {
  return { ...CloneType(schema), [OptionalKind]: "Optional" };
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult(R, F) {
  return FromProperties(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: CloneType(options.unevaluatedProperties) } : {};
  return options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: CloneRest(T) } : { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(T) {
  return T.every((L) => IsOptional(L));
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function RemoveOptionalFromRest(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType(L) : L);
}
function ResolveIntersect(T, options) {
  return IsIntersectOptional(T) ? Optional(IntersectCreate(RemoveOptionalFromRest(T), options)) : IntersectCreate(RemoveOptionalFromRest(T), options);
}
function IntersectEvaluated(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return { ...options, [Kind]: "Union", anyOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(T) {
  return T.some((L) => IsOptional(L));
}
function RemoveOptionalFromRest2(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType2(L) : L);
}
function RemoveOptionalFromType2(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(T, options) {
  return IsUnionOptional(T) ? Optional(UnionCreate(RemoveOptionalFromRest2(T), options)) : UnionCreate(RemoveOptionalFromRest2(T), options);
}
function UnionEvaluated(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : ResolveUnion(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : UnionCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value2, index) {
    if (!IsOpenParen(value2, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value2.length; scan++) {
      if (IsOpenParen(value2, scan))
        count += 1;
      if (IsCloseParen(value2, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

class TemplateLiteralParserError extends TypeBoxError {
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

class TemplateLiteralFiniteError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

class TemplateLiteralGenerateError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value2, options = {}) {
  return {
    ...options,
    [Kind]: "Literal",
    const: value2,
    type: typeof value2
  };
}
// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options = {}) {
  return {
    ...options,
    [Kind]: "Boolean",
    type: "boolean"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options = {}) {
  return {
    ...options,
    [Kind]: "BigInt",
    type: "bigint"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options = {}) {
  return {
    ...options,
    [Kind]: "Number",
    type: "number"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options = {}) {
  return { ...options, [Kind]: "String", type: "string" };
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal3) => Literal(literal3.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternBooleanExact = `^${PatternBoolean}\$`;
var PatternNumberExact = `^${PatternNumber}\$`;
var PatternStringExact = `^${PatternString}\$`;
// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
function Escape(value2) {
  return value2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

class TemplateLiteralPatternError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options = {}) {
  const pattern2 = IsString2(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return { ...options, [Kind]: "TemplateLiteral", type: "string", pattern: pattern2 };
}
// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(T) {
  const R = TemplateLiteralGenerate(T);
  return R.map((S) => S.toString());
}
function FromUnion2(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexPropertyKeys(L));
  return Acc;
}
function FromLiteral(T) {
  return [T.toString()];
}
function IndexPropertyKeys(T) {
  return [...new Set(IsTemplateLiteral(T) ? FromTemplateLiteral(T) : IsUnion(T) ? FromUnion2(T.anyOf) : IsLiteral(T) ? FromLiteral(T.const) : IsNumber3(T) ? ["[number]"] : IsInteger2(T) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties2(T, P, options) {
  const Acc = {};
  for (const K2 of Object.getOwnPropertyNames(P)) {
    Acc[K2] = Index(T, IndexPropertyKeys(P[K2]), options);
  }
  return Acc;
}
function FromMappedResult2(T, R, options) {
  return FromProperties2(T, R.properties, options);
}
function IndexFromMappedResult(T, R, options) {
  const P = FromMappedResult2(T, R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(T, K) {
  return T.map((L) => IndexFromPropertyKey(L, K));
}
function FromIntersectRest(T) {
  return T.filter((L) => !IsNever(L));
}
function FromIntersect(T, K) {
  return IntersectEvaluated(FromIntersectRest(FromRest(T, K)));
}
function FromUnionRest(T) {
  return T.some((L) => IsNever(L)) ? [] : T;
}
function FromUnion3(T, K) {
  return UnionEvaluated(FromUnionRest(FromRest(T, K)));
}
function FromTuple(T, K) {
  return K in T ? T[K] : K === "[number]" ? UnionEvaluated(T) : Never();
}
function FromArray(T, K) {
  return K === "[number]" ? T : Never();
}
function FromProperty(T, K) {
  return K in T ? T[K] : Never();
}
function IndexFromPropertyKey(T, K) {
  return IsIntersect(T) ? FromIntersect(T.allOf, K) : IsUnion(T) ? FromUnion3(T.anyOf, K) : IsTuple(T) ? FromTuple(T.items ?? [], K) : IsArray3(T) ? FromArray(T.items, K) : IsObject3(T) ? FromProperty(T.properties, K) : Never();
}
function IndexFromPropertyKeys(T, K) {
  return K.map((L) => IndexFromPropertyKey(T, L));
}
function FromSchema(T, K) {
  return UnionEvaluated(IndexFromPropertyKeys(T, K));
}
function Index(T, K, options = {}) {
  return IsMappedResult(K) ? CloneType(IndexFromMappedResult(T, K, options)) : IsMappedKey(K) ? CloneType(IndexFromMappedKey(T, K, options)) : IsSchema(K) ? CloneType(FromSchema(T, IndexPropertyKeys(K)), options) : CloneType(FromSchema(T, K), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(T, K, options) {
  return { [K]: Index(T, [K], options) };
}
function MappedIndexPropertyKeys(T, K, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
  }, {});
}
function MappedIndexProperties(T, K, options) {
  return MappedIndexPropertyKeys(T, K.keys, options);
}
function IndexFromMappedKey(T, K, options) {
  const P = MappedIndexProperties(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "Iterator",
    type: "Iterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function _Object(properties, options = {}) {
  const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
  const optionalKeys = propertyKeys.filter((key) => IsOptional(properties[key]));
  const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
  const clonedAdditionalProperties = IsSchema(options.additionalProperties) ? { additionalProperties: CloneType(options.additionalProperties) } : {};
  const clonedProperties = {};
  for (const key of propertyKeys)
    clonedProperties[key] = CloneType(properties[key]);
  return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties };
}
var Object2 = _Object;
// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options = {}) {
  return {
    ...options,
    [Kind]: "Promise",
    type: "Promise",
    item: CloneType(item)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return Discard(CloneType(schema), [ReadonlyKind]);
}
function AddReadonly(schema) {
  return { ...CloneType(schema), [ReadonlyKind]: "Readonly" };
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties3(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult3(R, F) {
  return FromProperties3(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult3(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(items, options = {}) {
  const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
  return items.length > 0 ? { ...options, [Kind]: "Tuple", type: "array", items: CloneRest(items), additionalItems, minItems, maxItems } : { ...options, [Kind]: "Tuple", type: "array", minItems, maxItems };
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult4(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult4(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties4(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult4(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items)) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items)) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf)) : IsUnion(T) ? Union(FromRest2(K, T.anyOf)) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? [])) : IsObject3(T) ? Object2(FromProperties4(K, T.properties)) : IsArray3(T) ? Array2(FromSchemaType(K, T.items)) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item)) : T;
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map3, options = {}) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return CloneType(Object2(R), options);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest3(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(KeyOfPropertyKeys(L));
  return Acc;
}
function FromIntersect2(T) {
  const C = FromRest3(T);
  const R = SetUnionMany(C);
  return R;
}
function FromUnion4(T) {
  const C = FromRest3(T);
  const R = SetIntersectMany(C);
  return R;
}
function FromTuple2(T) {
  return T.map((_, I) => I.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(T) {
  return IsIntersect(T) ? FromIntersect2(T.allOf) : IsUnion(T) ? FromUnion4(T.anyOf) : IsTuple(T) ? FromTuple2(T.items ?? []) : IsArray3(T) ? FromArray2(T.items) : IsObject3(T) ? FromProperties5(T.properties) : IsRecord(T) ? FromPatternProperties(T.patternProperties) : [];
}
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern3 = keys.map((key) => `(${key})`);
  return `^(${pattern3.join("|")})\$`;
}
var includePatternProperties = false;

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function KeyOfPropertyKeysToRest(T) {
  return T.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(T, options = {}) {
  if (IsMappedResult(T)) {
    return KeyOfFromMappedResult(T, options);
  } else {
    const K = KeyOfPropertyKeys(T);
    const S = KeyOfPropertyKeysToRest(K);
    const U = UnionEvaluated(S);
    return CloneType(U, options);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = KeyOf(K[K2], options);
  return Acc;
}
function FromMappedResult5(R, options) {
  return FromProperties6(R.properties, options);
}
function KeyOfFromMappedResult(R, options) {
  const P = FromMappedResult5(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error7) {
  switch (error7.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error7.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error7.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error7.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error7.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error7.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error7.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error7.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error7.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error7.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error7.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error7.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error7.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error7.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error7.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error7.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error7.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error7.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error7.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error7.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error7.schema.const === "string" ? `'${error7.schema.const}'` : error7.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error7.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error7.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error7.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error7.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error7.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error7.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error7.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error7.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error7.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error7.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error7.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error7.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error7.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error7.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error7.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error7.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
function GetErrorFunction() {
  return errorFunction;
}
var errorFunction = DefaultErrorFunction;

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with \$id '${schema.$id}'`);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
function* NumberToBytes(value3) {
  const byteCount = value3 === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value3) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value3 >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value3) {
  FNV1A64(ByteMarker.Array);
  for (const item of value3) {
    Visit3(item);
  }
}
function BooleanType(value3) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value3 ? 1 : 0);
}
function BigIntType(value3) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value3);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value3) {
  FNV1A64(ByteMarker.Date);
  Visit3(value3.getTime());
}
function NullType(value3) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value3) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value3);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value3) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value3).sort()) {
    Visit3(key);
    Visit3(value3[key]);
  }
}
function StringType(value3) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value3.length; i++) {
    for (const byte of NumberToBytes(value3.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value3) {
  FNV1A64(ByteMarker.Symbol);
  Visit3(value3.description);
}
function Uint8ArrayType2(value3) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value3.length; i++) {
    FNV1A64(value3[i]);
  }
}
function UndefinedType(value3) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit3(value3) {
  if (IsArray(value3))
    return ArrayType2(value3);
  if (IsBoolean(value3))
    return BooleanType(value3);
  if (IsBigInt(value3))
    return BigIntType(value3);
  if (IsDate(value3))
    return DateType2(value3);
  if (IsNull(value3))
    return NullType(value3);
  if (IsNumber(value3))
    return NumberType(value3);
  if (IsStandardObject(value3))
    return ObjectType2(value3);
  if (IsString(value3))
    return StringType(value3);
  if (IsSymbol(value3))
    return SymbolType(value3);
  if (IsUint8Array(value3))
    return Uint8ArrayType2(value3);
  if (IsUndefined(value3))
    return UndefinedType(value3);
  throw new ValueHashError(value3);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value3) {
  Accumulator = BigInt("14695981039346656037");
  Visit3(value3);
  return Accumulator;
}

class ValueHashError extends TypeBoxError {
  constructor(value3) {
    super(`Unable to hash value`);
    this.value = value3;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined(value3) {
  return value3 !== undefined;
}
function Create(errorType, schema, path, value3) {
  return { type: errorType, schema, path, value: value3, message: GetErrorFunction()({ errorType, path, schema, value: value3 }) };
}
function* FromAny(schema, references, path, value3) {
}
function* FromArray3(schema, references, path, value3) {
  if (!IsArray(value3)) {
    return yield Create(ValueErrorType.Array, schema, path, value3);
  }
  if (IsDefined(schema.minItems) && !(value3.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value3);
  }
  if (IsDefined(schema.maxItems) && !(value3.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value3);
  }
  for (let i = 0;i < value3.length; i++) {
    yield* Visit4(schema.items, references, `${path}/${i}`, value3[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value3) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value3);
  }
  if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value3.reduce((acc, value4, index) => Visit4(containsSchema, references, `${path}${index}`, value4).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value3);
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value3);
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value3);
  }
}
function* FromAsyncIterator(schema, references, path, value3) {
  if (!IsAsyncIterator(value3))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value3);
}
function* FromBigInt(schema, references, path, value3) {
  if (!IsBigInt(value3))
    return yield Create(ValueErrorType.BigInt, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value3);
  }
}
function* FromBoolean(schema, references, path, value3) {
  if (!IsBoolean(value3))
    yield Create(ValueErrorType.Boolean, schema, path, value3);
}
function* FromConstructor(schema, references, path, value3) {
  yield* Visit4(schema.returns, references, path, value3.prototype);
}
function* FromDate(schema, references, path, value3) {
  if (!IsDate(value3))
    return yield Create(ValueErrorType.Date, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value3.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value3.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.maximumTimestamp) && !(value3.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.minimumTimestamp) && !(value3.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value3.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value3);
  }
}
function* FromFunction(schema, references, path, value3) {
  if (!IsFunction(value3))
    yield Create(ValueErrorType.Function, schema, path, value3);
}
function* FromInteger(schema, references, path, value3) {
  if (!IsInteger(value3))
    return yield Create(ValueErrorType.Integer, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value3);
  }
}
function* FromIntersect3(schema, references, path, value3) {
  for (const inner of schema.allOf) {
    const next = Visit4(inner, references, path, value3).next();
    if (!next.done) {
      yield Create(ValueErrorType.Intersect, schema, path, value3);
      yield next.value;
    }
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value3)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value3);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value3)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit4(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value3[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator(schema, references, path, value3) {
  if (!IsIterator(value3))
    yield Create(ValueErrorType.Iterator, schema, path, value3);
}
function* FromLiteral2(schema, references, path, value3) {
  if (!(value3 === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value3);
}
function* FromNever(schema, references, path, value3) {
  yield Create(ValueErrorType.Never, schema, path, value3);
}
function* FromNot(schema, references, path, value3) {
  if (Visit4(schema.not, references, path, value3).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value3);
}
function* FromNull(schema, references, path, value3) {
  if (!IsNull(value3))
    yield Create(ValueErrorType.Null, schema, path, value3);
}
function* FromNumber(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsNumberLike(value3))
    return yield Create(ValueErrorType.Number, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value3);
  }
}
function* FromObject(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsObjectLike(value3))
    return yield Create(ValueErrorType.Object, schema, path, value3);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value3);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value3);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value3);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value3[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value3[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value3[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value3)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value3, knownKey)) {
        yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value3[knownKey]);
      }
    }
  }
}
function* FromPromise(schema, references, path, value3) {
  if (!IsPromise(value3))
    yield Create(ValueErrorType.Promise, schema, path, value3);
}
function* FromRecord(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsRecordLike(value3))
    return yield Create(ValueErrorType.Object, schema, path, value3);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value3);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value3);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value3)) {
    if (regex.test(propertyKey))
      yield* Visit4(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value3)) {
      if (!regex.test(propertyKey))
        yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value3)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef(schema, references, path, value3) {
  yield* Visit4(Deref(schema, references), references, path, value3);
}
function* FromRegExp(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  if (IsDefined(schema.minLength) && !(value3.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value3);
  }
  if (IsDefined(schema.maxLength) && !(value3.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value3);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value3)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value3);
  }
}
function* FromString(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  if (IsDefined(schema.minLength) && !(value3.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value3);
  }
  if (IsDefined(schema.maxLength) && !(value3.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value3);
  }
  if (IsString(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value3)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value3);
    }
  }
  if (IsString(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value3);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value3)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value3);
      }
    }
  }
}
function* FromSymbol(schema, references, path, value3) {
  if (!IsSymbol(value3))
    yield Create(ValueErrorType.Symbol, schema, path, value3);
}
function* FromTemplateLiteral2(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value3)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value3);
  }
}
function* FromThis(schema, references, path, value3) {
  yield* Visit4(Deref(schema, references), references, path, value3);
}
function* FromTuple3(schema, references, path, value3) {
  if (!IsArray(value3))
    return yield Create(ValueErrorType.Tuple, schema, path, value3);
  if (schema.items === undefined && !(value3.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value3);
  }
  if (!(value3.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value3);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit4(schema.items[i], references, `${path}/${i}`, value3[i]);
  }
}
function* FromUndefined(schema, references, path, value3) {
  if (!IsUndefined(value3))
    yield Create(ValueErrorType.Undefined, schema, path, value3);
}
function* FromUnion5(schema, references, path, value3) {
  let count = 0;
  for (const subschema of schema.anyOf) {
    const errors2 = [...Visit4(subschema, references, path, value3)];
    if (errors2.length === 0)
      return;
    count += errors2.length;
  }
  if (count > 0) {
    yield Create(ValueErrorType.Union, schema, path, value3);
  }
}
function* FromUint8Array(schema, references, path, value3) {
  if (!IsUint8Array(value3))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value3);
  if (IsDefined(schema.maxByteLength) && !(value3.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value3);
  }
  if (IsDefined(schema.minByteLength) && !(value3.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value3);
  }
}
function* FromUnknown(schema, references, path, value3) {
}
function* FromVoid(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsVoidLike(value3))
    yield Create(ValueErrorType.Void, schema, path, value3);
}
function* FromKind(schema, references, path, value3) {
  const check = exports_type.Get(schema[Kind]);
  if (!check(schema, value3))
    yield Create(ValueErrorType.Kind, schema, path, value3);
}
function* Visit4(schema, references, path, value3) {
  const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny(schema_, references_, path, value3);
    case "Array":
      return yield* FromArray3(schema_, references_, path, value3);
    case "AsyncIterator":
      return yield* FromAsyncIterator(schema_, references_, path, value3);
    case "BigInt":
      return yield* FromBigInt(schema_, references_, path, value3);
    case "Boolean":
      return yield* FromBoolean(schema_, references_, path, value3);
    case "Constructor":
      return yield* FromConstructor(schema_, references_, path, value3);
    case "Date":
      return yield* FromDate(schema_, references_, path, value3);
    case "Function":
      return yield* FromFunction(schema_, references_, path, value3);
    case "Integer":
      return yield* FromInteger(schema_, references_, path, value3);
    case "Intersect":
      return yield* FromIntersect3(schema_, references_, path, value3);
    case "Iterator":
      return yield* FromIterator(schema_, references_, path, value3);
    case "Literal":
      return yield* FromLiteral2(schema_, references_, path, value3);
    case "Never":
      return yield* FromNever(schema_, references_, path, value3);
    case "Not":
      return yield* FromNot(schema_, references_, path, value3);
    case "Null":
      return yield* FromNull(schema_, references_, path, value3);
    case "Number":
      return yield* FromNumber(schema_, references_, path, value3);
    case "Object":
      return yield* FromObject(schema_, references_, path, value3);
    case "Promise":
      return yield* FromPromise(schema_, references_, path, value3);
    case "Record":
      return yield* FromRecord(schema_, references_, path, value3);
    case "Ref":
      return yield* FromRef(schema_, references_, path, value3);
    case "RegExp":
      return yield* FromRegExp(schema_, references_, path, value3);
    case "String":
      return yield* FromString(schema_, references_, path, value3);
    case "Symbol":
      return yield* FromSymbol(schema_, references_, path, value3);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral2(schema_, references_, path, value3);
    case "This":
      return yield* FromThis(schema_, references_, path, value3);
    case "Tuple":
      return yield* FromTuple3(schema_, references_, path, value3);
    case "Undefined":
      return yield* FromUndefined(schema_, references_, path, value3);
    case "Union":
      return yield* FromUnion5(schema_, references_, path, value3);
    case "Uint8Array":
      return yield* FromUint8Array(schema_, references_, path, value3);
    case "Unknown":
      return yield* FromUnknown(schema_, references_, path, value3);
    case "Void":
      return yield* FromVoid(schema_, references_, path, value3);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind(schema_, references_, path, value3);
  }
}
function Errors(...args) {
  const iterator3 = args.length === 3 ? Visit4(args[0], args[1], "", args[2]) : Visit4(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator3);
}
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class ValueErrorIterator {
  constructor(iterator3) {
    this.iterator = iterator3;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options = {}) {
  return { ...options, [Kind]: "Any" };
}
// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options = {}) {
  return {
    ...options,
    [Kind]: "Unknown"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError,
  IsVoid: () => IsVoid2,
  IsUnsafe: () => IsUnsafe2,
  IsUnknown: () => IsUnknown2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnion: () => IsUnion2,
  IsUndefined: () => IsUndefined4,
  IsUint8Array: () => IsUint8Array4,
  IsTuple: () => IsTuple2,
  IsTransform: () => IsTransform2,
  IsThis: () => IsThis2,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsSymbol: () => IsSymbol4,
  IsString: () => IsString4,
  IsSchema: () => IsSchema2,
  IsRegExp: () => IsRegExp3,
  IsRef: () => IsRef2,
  IsRecursive: () => IsRecursive,
  IsRecord: () => IsRecord2,
  IsReadonly: () => IsReadonly2,
  IsProperties: () => IsProperties,
  IsPromise: () => IsPromise3,
  IsOptional: () => IsOptional2,
  IsObject: () => IsObject4,
  IsNumber: () => IsNumber4,
  IsNull: () => IsNull4,
  IsNot: () => IsNot2,
  IsNever: () => IsNever2,
  IsMappedResult: () => IsMappedResult2,
  IsMappedKey: () => IsMappedKey2,
  IsLiteralValue: () => IsLiteralValue,
  IsLiteralString: () => IsLiteralString,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteral: () => IsLiteral2,
  IsKindOf: () => IsKindOf2,
  IsKind: () => IsKind2,
  IsIterator: () => IsIterator4,
  IsIntersect: () => IsIntersect2,
  IsInteger: () => IsInteger3,
  IsFunction: () => IsFunction4,
  IsDate: () => IsDate4,
  IsConstructor: () => IsConstructor2,
  IsBoolean: () => IsBoolean4,
  IsBigInt: () => IsBigInt4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsArray: () => IsArray4,
  IsAny: () => IsAny2
});
function IsPattern(value3) {
  try {
    new RegExp(value3);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value3) {
  if (!IsString2(value3))
    return false;
  for (let i = 0;i < value3.length; i++) {
    const code = value3.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value3) {
  return IsOptionalBoolean(value3) || IsSchema2(value3);
}
function IsOptionalBigInt(value3) {
  return IsUndefined2(value3) || IsBigInt2(value3);
}
function IsOptionalNumber(value3) {
  return IsUndefined2(value3) || IsNumber2(value3);
}
function IsOptionalBoolean(value3) {
  return IsUndefined2(value3) || IsBoolean2(value3);
}
function IsOptionalString(value3) {
  return IsUndefined2(value3) || IsString2(value3);
}
function IsOptionalPattern(value3) {
  return IsUndefined2(value3) || IsString2(value3) && IsControlCharacterFree(value3) && IsPattern(value3);
}
function IsOptionalFormat(value3) {
  return IsUndefined2(value3) || IsString2(value3) && IsControlCharacterFree(value3);
}
function IsOptionalSchema(value3) {
  return IsUndefined2(value3) || IsSchema2(value3);
}
function IsReadonly2(value3) {
  return IsObject2(value3) && value3[ReadonlyKind] === "Readonly";
}
function IsOptional2(value3) {
  return IsObject2(value3) && value3[OptionalKind] === "Optional";
}
function IsAny2(value3) {
  return IsKindOf2(value3, "Any") && IsOptionalString(value3.$id);
}
function IsArray4(value3) {
  return IsKindOf2(value3, "Array") && value3.type === "array" && IsOptionalString(value3.$id) && IsSchema2(value3.items) && IsOptionalNumber(value3.minItems) && IsOptionalNumber(value3.maxItems) && IsOptionalBoolean(value3.uniqueItems) && IsOptionalSchema(value3.contains) && IsOptionalNumber(value3.minContains) && IsOptionalNumber(value3.maxContains);
}
function IsAsyncIterator4(value3) {
  return IsKindOf2(value3, "AsyncIterator") && value3.type === "AsyncIterator" && IsOptionalString(value3.$id) && IsSchema2(value3.items);
}
function IsBigInt4(value3) {
  return IsKindOf2(value3, "BigInt") && value3.type === "bigint" && IsOptionalString(value3.$id) && IsOptionalBigInt(value3.exclusiveMaximum) && IsOptionalBigInt(value3.exclusiveMinimum) && IsOptionalBigInt(value3.maximum) && IsOptionalBigInt(value3.minimum) && IsOptionalBigInt(value3.multipleOf);
}
function IsBoolean4(value3) {
  return IsKindOf2(value3, "Boolean") && value3.type === "boolean" && IsOptionalString(value3.$id);
}
function IsConstructor2(value3) {
  return IsKindOf2(value3, "Constructor") && value3.type === "Constructor" && IsOptionalString(value3.$id) && IsArray2(value3.parameters) && value3.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value3.returns);
}
function IsDate4(value3) {
  return IsKindOf2(value3, "Date") && value3.type === "Date" && IsOptionalString(value3.$id) && IsOptionalNumber(value3.exclusiveMaximumTimestamp) && IsOptionalNumber(value3.exclusiveMinimumTimestamp) && IsOptionalNumber(value3.maximumTimestamp) && IsOptionalNumber(value3.minimumTimestamp) && IsOptionalNumber(value3.multipleOfTimestamp);
}
function IsFunction4(value3) {
  return IsKindOf2(value3, "Function") && value3.type === "Function" && IsOptionalString(value3.$id) && IsArray2(value3.parameters) && value3.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value3.returns);
}
function IsInteger3(value3) {
  return IsKindOf2(value3, "Integer") && value3.type === "integer" && IsOptionalString(value3.$id) && IsOptionalNumber(value3.exclusiveMaximum) && IsOptionalNumber(value3.exclusiveMinimum) && IsOptionalNumber(value3.maximum) && IsOptionalNumber(value3.minimum) && IsOptionalNumber(value3.multipleOf);
}
function IsProperties(value3) {
  return IsObject2(value3) && Object.entries(value3).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value3) {
  return IsKindOf2(value3, "Intersect") && (IsString2(value3.type) && value3.type !== "object" ? false : true) && IsArray2(value3.allOf) && value3.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value3.type) && (IsOptionalBoolean(value3.unevaluatedProperties) || IsOptionalSchema(value3.unevaluatedProperties)) && IsOptionalString(value3.$id);
}
function IsIterator4(value3) {
  return IsKindOf2(value3, "Iterator") && value3.type === "Iterator" && IsOptionalString(value3.$id) && IsSchema2(value3.items);
}
function IsKindOf2(value3, kind14) {
  return IsObject2(value3) && Kind in value3 && value3[Kind] === kind14;
}
function IsLiteralString(value3) {
  return IsLiteral2(value3) && IsString2(value3.const);
}
function IsLiteralNumber(value3) {
  return IsLiteral2(value3) && IsNumber2(value3.const);
}
function IsLiteralBoolean(value3) {
  return IsLiteral2(value3) && IsBoolean2(value3.const);
}
function IsLiteral2(value3) {
  return IsKindOf2(value3, "Literal") && IsOptionalString(value3.$id) && IsLiteralValue(value3.const);
}
function IsLiteralValue(value3) {
  return IsBoolean2(value3) || IsNumber2(value3) || IsString2(value3);
}
function IsMappedKey2(value3) {
  return IsKindOf2(value3, "MappedKey") && IsArray2(value3.keys) && value3.keys.every((key) => IsNumber2(key) || IsString2(key));
}
function IsMappedResult2(value3) {
  return IsKindOf2(value3, "MappedResult") && IsProperties(value3.properties);
}
function IsNever2(value3) {
  return IsKindOf2(value3, "Never") && IsObject2(value3.not) && Object.getOwnPropertyNames(value3.not).length === 0;
}
function IsNot2(value3) {
  return IsKindOf2(value3, "Not") && IsSchema2(value3.not);
}
function IsNull4(value3) {
  return IsKindOf2(value3, "Null") && value3.type === "null" && IsOptionalString(value3.$id);
}
function IsNumber4(value3) {
  return IsKindOf2(value3, "Number") && value3.type === "number" && IsOptionalString(value3.$id) && IsOptionalNumber(value3.exclusiveMaximum) && IsOptionalNumber(value3.exclusiveMinimum) && IsOptionalNumber(value3.maximum) && IsOptionalNumber(value3.minimum) && IsOptionalNumber(value3.multipleOf);
}
function IsObject4(value3) {
  return IsKindOf2(value3, "Object") && value3.type === "object" && IsOptionalString(value3.$id) && IsProperties(value3.properties) && IsAdditionalProperties(value3.additionalProperties) && IsOptionalNumber(value3.minProperties) && IsOptionalNumber(value3.maxProperties);
}
function IsPromise3(value3) {
  return IsKindOf2(value3, "Promise") && value3.type === "Promise" && IsOptionalString(value3.$id) && IsSchema2(value3.item);
}
function IsRecord2(value3) {
  return IsKindOf2(value3, "Record") && value3.type === "object" && IsOptionalString(value3.$id) && IsAdditionalProperties(value3.additionalProperties) && IsObject2(value3.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject2(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value3);
}
function IsRecursive(value3) {
  return IsObject2(value3) && Hint in value3 && value3[Hint] === "Recursive";
}
function IsRef2(value3) {
  return IsKindOf2(value3, "Ref") && IsOptionalString(value3.$id) && IsString2(value3.$ref);
}
function IsRegExp3(value3) {
  return IsKindOf2(value3, "RegExp") && IsOptionalString(value3.$id) && IsString2(value3.source) && IsString2(value3.flags) && IsOptionalNumber(value3.maxLength) && IsOptionalNumber(value3.minLength);
}
function IsString4(value3) {
  return IsKindOf2(value3, "String") && value3.type === "string" && IsOptionalString(value3.$id) && IsOptionalNumber(value3.minLength) && IsOptionalNumber(value3.maxLength) && IsOptionalPattern(value3.pattern) && IsOptionalFormat(value3.format);
}
function IsSymbol4(value3) {
  return IsKindOf2(value3, "Symbol") && value3.type === "symbol" && IsOptionalString(value3.$id);
}
function IsTemplateLiteral2(value3) {
  return IsKindOf2(value3, "TemplateLiteral") && value3.type === "string" && IsString2(value3.pattern) && value3.pattern[0] === "^" && value3.pattern[value3.pattern.length - 1] === "$";
}
function IsThis2(value3) {
  return IsKindOf2(value3, "This") && IsOptionalString(value3.$id) && IsString2(value3.$ref);
}
function IsTransform2(value3) {
  return IsObject2(value3) && TransformKind in value3;
}
function IsTuple2(value3) {
  return IsKindOf2(value3, "Tuple") && value3.type === "array" && IsOptionalString(value3.$id) && IsNumber2(value3.minItems) && IsNumber2(value3.maxItems) && value3.minItems === value3.maxItems && (IsUndefined2(value3.items) && IsUndefined2(value3.additionalItems) && value3.minItems === 0 || IsArray2(value3.items) && value3.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value3) {
  return IsKindOf2(value3, "Undefined") && value3.type === "undefined" && IsOptionalString(value3.$id);
}
function IsUnionLiteral(value3) {
  return IsUnion2(value3) && value3.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion2(value3) {
  return IsKindOf2(value3, "Union") && IsOptionalString(value3.$id) && IsObject2(value3) && IsArray2(value3.anyOf) && value3.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value3) {
  return IsKindOf2(value3, "Uint8Array") && value3.type === "Uint8Array" && IsOptionalString(value3.$id) && IsOptionalNumber(value3.minByteLength) && IsOptionalNumber(value3.maxByteLength);
}
function IsUnknown2(value3) {
  return IsKindOf2(value3, "Unknown") && IsOptionalString(value3.$id);
}
function IsUnsafe2(value3) {
  return IsKindOf2(value3, "Unsafe");
}
function IsVoid2(value3) {
  return IsKindOf2(value3, "Void") && value3.type === "void" && IsOptionalString(value3.$id);
}
function IsKind2(value3) {
  return IsObject2(value3) && Kind in value3 && IsString2(value3[Kind]) && !KnownTypes.includes(value3[Kind]);
}
function IsSchema2(value3) {
  return IsObject2(value3) && (IsAny2(value3) || IsArray4(value3) || IsBoolean4(value3) || IsBigInt4(value3) || IsAsyncIterator4(value3) || IsConstructor2(value3) || IsDate4(value3) || IsFunction4(value3) || IsInteger3(value3) || IsIntersect2(value3) || IsIterator4(value3) || IsLiteral2(value3) || IsMappedKey2(value3) || IsMappedResult2(value3) || IsNever2(value3) || IsNot2(value3) || IsNull4(value3) || IsNumber4(value3) || IsObject4(value3) || IsPromise3(value3) || IsRecord2(value3) || IsRef2(value3) || IsRegExp3(value3) || IsString4(value3) || IsSymbol4(value3) || IsTemplateLiteral2(value3) || IsThis2(value3) || IsTuple2(value3) || IsUndefined4(value3) || IsUnion2(value3) || IsUint8Array4(value3) || IsUnknown2(value3) || IsUnsafe2(value3) || IsVoid2(value3) || IsKind2(value3));
}

class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return exports_type2.IsNever(right) || exports_type2.IsIntersect(right) || exports_type2.IsUnion(right) || exports_type2.IsUnknown(right) || exports_type2.IsAny(right);
}
function StructuralRight(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) && right.anyOf.some((schema) => exports_type2.IsAny(schema) || exports_type2.IsUnknown(schema)) ? ExtendsResult.True : exports_type2.IsUnion(right) ? ExtendsResult.Union : exports_type2.IsUnknown(right) ? ExtendsResult.True : exports_type2.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromAsyncIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromBigInt2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return exports_type2.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type2.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromDate2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger2(left, right) {
  return exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromLiteral3(left, right) {
  return exports_type2.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever2(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type2.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot2(left, right) {
  return exports_type2.IsNot(left) ? Visit5(UnwrapTNot(left), right) : exports_type2.IsNot(right) ? Visit5(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return exports_type2.IsLiteralNumber(left) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type2.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type2.IsString(schema.properties.description.anyOf[0]) && exports_type2.IsUndefined(schema.properties.description.anyOf[1]) || exports_type2.IsString(schema.properties.description.anyOf[1]) && exports_type2.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit5(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit5(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type2.IsOptional(left) && !exports_type2.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) || exports_type2.IsLiteralString(left) && IsObjectStringLike(right) || exports_type2.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type2.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type2.IsString(left) && IsObjectStringLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsNumber(left) && IsObjectNumberLike(right) || exports_type2.IsInteger(left) && IsObjectNumberLike(right) || exports_type2.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type2.IsDate(left) && IsObjectDateLike(right) || exports_type2.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type2.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type2.IsRecord(left) && exports_type2.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type2.IsRecord(left) && exports_type2.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : !exports_type2.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type2.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type2.IsLiteralString(left) && exports_type2.IsNumber(Key) && IntoBooleanResult(Visit5(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type2.IsUint8Array(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsString(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsArray(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsRecord(right) ? ExtendsResult.False : Visit5(RecordValue(left), RecordValue(right));
}
function FromRegExp2(left, right) {
  const L = exports_type2.IsRegExp(left) ? String2() : left;
  const R = exports_type2.IsRegExp(right) ? String2() : right;
  return Visit5(L, R);
}
function FromStringRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type2.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral3(left, right) {
  return exports_type2.IsTemplateLiteral(left) ? Visit5(TemplateLiteralToUnion(left), right) : exports_type2.IsTemplateLiteral(right) ? Visit5(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return exports_type2.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit5(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return exports_type2.IsNever(left) ? ExtendsResult.True : exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple4(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type2.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type2.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit5(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsVoid(right) ? FromVoidRight(left, right) : exports_type2.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown2(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type2.IsArray(right) ? FromArrayRight(left, right) : exports_type2.IsTuple(right) ? FromTupleRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return exports_type2.IsUndefined(left) ? ExtendsResult.True : exports_type2.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit5(left, right) {
  return exports_type2.IsTemplateLiteral(left) || exports_type2.IsTemplateLiteral(right) ? FromTemplateLiteral3(left, right) : exports_type2.IsRegExp(left) || exports_type2.IsRegExp(right) ? FromRegExp2(left, right) : exports_type2.IsNot(left) || exports_type2.IsNot(right) ? FromNot2(left, right) : exports_type2.IsAny(left) ? FromAny2(left, right) : exports_type2.IsArray(left) ? FromArray4(left, right) : exports_type2.IsBigInt(left) ? FromBigInt2(left, right) : exports_type2.IsBoolean(left) ? FromBoolean2(left, right) : exports_type2.IsAsyncIterator(left) ? FromAsyncIterator2(left, right) : exports_type2.IsConstructor(left) ? FromConstructor2(left, right) : exports_type2.IsDate(left) ? FromDate2(left, right) : exports_type2.IsFunction(left) ? FromFunction2(left, right) : exports_type2.IsInteger(left) ? FromInteger2(left, right) : exports_type2.IsIntersect(left) ? FromIntersect4(left, right) : exports_type2.IsIterator(left) ? FromIterator2(left, right) : exports_type2.IsLiteral(left) ? FromLiteral3(left, right) : exports_type2.IsNever(left) ? FromNever2(left, right) : exports_type2.IsNull(left) ? FromNull2(left, right) : exports_type2.IsNumber(left) ? FromNumber2(left, right) : exports_type2.IsObject(left) ? FromObject2(left, right) : exports_type2.IsRecord(left) ? FromRecord2(left, right) : exports_type2.IsString(left) ? FromString2(left, right) : exports_type2.IsSymbol(left) ? FromSymbol2(left, right) : exports_type2.IsTuple(left) ? FromTuple4(left, right) : exports_type2.IsPromise(left) ? FromPromise2(left, right) : exports_type2.IsUint8Array(left) ? FromUint8Array2(left, right) : exports_type2.IsUndefined(left) ? FromUndefined2(left, right) : exports_type2.IsUnion(left) ? FromUnion6(left, right) : exports_type2.IsUnknown(left) ? FromUnknown2(left, right) : exports_type2.IsVoid(left) ? FromVoid2(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit5(left, right);
}

class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties7(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, options);
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties7(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options = {}) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CloneType(ExtendsFromMappedKey(L, R, T, F, options)) : CloneType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, options)
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined2(value3) {
  return value3 !== undefined;
}
function FromAny3(schema, references, value3) {
  return true;
}
function FromArray5(schema, references, value3) {
  if (!IsArray(value3))
    return false;
  if (IsDefined2(schema.minItems) && !(value3.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined2(schema.maxItems) && !(value3.length <= schema.maxItems)) {
    return false;
  }
  if (!value3.every((value4) => Visit6(schema.items, references, value4))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value3) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined2(schema.contains) || IsNumber(schema.minContains) || IsNumber(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value3.reduce((acc, value4) => Visit6(containsSchema, references, value4) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator3(schema, references, value3) {
  return IsAsyncIterator(value3);
}
function FromBigInt3(schema, references, value3) {
  if (!IsBigInt(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean3(schema, references, value3) {
  return IsBoolean(value3);
}
function FromConstructor3(schema, references, value3) {
  return Visit6(schema.returns, references, value3.prototype);
}
function FromDate3(schema, references, value3) {
  if (!IsDate(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value3.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value3.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value3.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value3.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value3.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction3(schema, references, value3) {
  return IsFunction(value3);
}
function FromInteger3(schema, references, value3) {
  if (!IsInteger(value3)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect5(schema, references, value3) {
  const check1 = schema.allOf.every((schema2) => Visit6(schema2, references, value3));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value3).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema2(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value3).every((key) => keyCheck.test(key) || Visit6(schema.unevaluatedProperties, references, value3[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator3(schema, references, value3) {
  return IsIterator(value3);
}
function FromLiteral4(schema, references, value3) {
  return value3 === schema.const;
}
function FromNever3(schema, references, value3) {
  return false;
}
function FromNot3(schema, references, value3) {
  return !Visit6(schema.not, references, value3);
}
function FromNull3(schema, references, value3) {
  return IsNull(value3);
}
function FromNumber3(schema, references, value3) {
  if (!TypeSystemPolicy.IsNumberLike(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject3(schema, references, value3) {
  if (!TypeSystemPolicy.IsObjectLike(value3))
    return false;
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit6(property, references, value3[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value3)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value3, knownKey) && !Visit6(property, references, value3[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value3);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value3);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit6(schema.additionalProperties, references, value3[key]));
  } else {
    return true;
  }
}
function FromPromise3(schema, references, value3) {
  return IsPromise(value3);
}
function FromRecord3(schema, references, value3) {
  if (!TypeSystemPolicy.IsRecordLike(value3)) {
    return false;
  }
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value3).every(([key, value4]) => {
    return regex.test(key) ? Visit6(patternSchema, references, value4) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value3).every(([key, value4]) => {
    return !regex.test(key) ? Visit6(schema.additionalProperties, references, value4) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value3).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef2(schema, references, value3) {
  return Visit6(Deref(schema, references), references, value3);
}
function FromRegExp3(schema, references, value3) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined2(schema.minLength)) {
    if (!(value3.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value3.length <= schema.maxLength))
      return false;
  }
  return regex.test(value3);
}
function FromString3(schema, references, value3) {
  if (!IsString(value3)) {
    return false;
  }
  if (IsDefined2(schema.minLength)) {
    if (!(value3.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value3.length <= schema.maxLength))
      return false;
  }
  if (IsDefined2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value3))
      return false;
  }
  if (IsDefined2(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value3);
  }
  return true;
}
function FromSymbol3(schema, references, value3) {
  return IsSymbol(value3);
}
function FromTemplateLiteral4(schema, references, value3) {
  return IsString(value3) && new RegExp(schema.pattern).test(value3);
}
function FromThis2(schema, references, value3) {
  return Visit6(Deref(schema, references), references, value3);
}
function FromTuple5(schema, references, value3) {
  if (!IsArray(value3)) {
    return false;
  }
  if (schema.items === undefined && !(value3.length === 0)) {
    return false;
  }
  if (!(value3.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit6(schema.items[i], references, value3[i]))
      return false;
  }
  return true;
}
function FromUndefined3(schema, references, value3) {
  return IsUndefined(value3);
}
function FromUnion7(schema, references, value3) {
  return schema.anyOf.some((inner) => Visit6(inner, references, value3));
}
function FromUint8Array3(schema, references, value3) {
  if (!IsUint8Array(value3)) {
    return false;
  }
  if (IsDefined2(schema.maxByteLength) && !(value3.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined2(schema.minByteLength) && !(value3.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown3(schema, references, value3) {
  return true;
}
function FromVoid3(schema, references, value3) {
  return TypeSystemPolicy.IsVoidLike(value3);
}
function FromKind2(schema, references, value3) {
  if (!exports_type.Has(schema[Kind]))
    return false;
  const func = exports_type.Get(schema[Kind]);
  return func(schema, value3);
}
function Visit6(schema, references, value3) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny3(schema_, references_, value3);
    case "Array":
      return FromArray5(schema_, references_, value3);
    case "AsyncIterator":
      return FromAsyncIterator3(schema_, references_, value3);
    case "BigInt":
      return FromBigInt3(schema_, references_, value3);
    case "Boolean":
      return FromBoolean3(schema_, references_, value3);
    case "Constructor":
      return FromConstructor3(schema_, references_, value3);
    case "Date":
      return FromDate3(schema_, references_, value3);
    case "Function":
      return FromFunction3(schema_, references_, value3);
    case "Integer":
      return FromInteger3(schema_, references_, value3);
    case "Intersect":
      return FromIntersect5(schema_, references_, value3);
    case "Iterator":
      return FromIterator3(schema_, references_, value3);
    case "Literal":
      return FromLiteral4(schema_, references_, value3);
    case "Never":
      return FromNever3(schema_, references_, value3);
    case "Not":
      return FromNot3(schema_, references_, value3);
    case "Null":
      return FromNull3(schema_, references_, value3);
    case "Number":
      return FromNumber3(schema_, references_, value3);
    case "Object":
      return FromObject3(schema_, references_, value3);
    case "Promise":
      return FromPromise3(schema_, references_, value3);
    case "Record":
      return FromRecord3(schema_, references_, value3);
    case "Ref":
      return FromRef2(schema_, references_, value3);
    case "RegExp":
      return FromRegExp3(schema_, references_, value3);
    case "String":
      return FromString3(schema_, references_, value3);
    case "Symbol":
      return FromSymbol3(schema_, references_, value3);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value3);
    case "This":
      return FromThis2(schema_, references_, value3);
    case "Tuple":
      return FromTuple5(schema_, references_, value3);
    case "Undefined":
      return FromUndefined3(schema_, references_, value3);
    case "Union":
      return FromUnion7(schema_, references_, value3);
    case "Uint8Array":
      return FromUint8Array3(schema_, references_, value3);
    case "Unknown":
      return FromUnknown3(schema_, references_, value3);
    case "Void":
      return FromVoid3(schema_, references_, value3);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind2(schema_, references_, value3);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit6(args[0], args[1], args[2]) : Visit6(args[0], [], args[1]);
}

class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function ObjectType3(value3) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value3)) {
    Acc[key] = Clone2(value3[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value3)) {
    Acc[key] = Clone2(value3[key]);
  }
  return Acc;
}
function ArrayType3(value3) {
  return value3.map((element) => Clone2(element));
}
function TypedArrayType(value3) {
  return value3.slice();
}
function DateType3(value3) {
  return new Date(value3.toISOString());
}
function ValueType(value3) {
  return value3;
}
function Clone2(value3) {
  if (IsArray(value3))
    return ArrayType3(value3);
  if (IsDate(value3))
    return DateType3(value3);
  if (IsStandardObject(value3))
    return ObjectType3(value3);
  if (IsTypedArray(value3))
    return TypedArrayType(value3);
  if (IsValueType(value3))
    return ValueType(value3);
  throw new Error("ValueClone: Unable to clone value");
}
// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
function FromDefault(value3) {
  return typeof value3 === "function" ? value3 : Clone2(value3);
}
function FromAny4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArray6(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value3 = Visit7(schema.returns, references);
    if (typeof value3 === "object" && !Array.isArray(value3)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value3)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
}
function FromFunction4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromInteger4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value3 = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value3))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value3;
  }
}
function FromIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord4(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    const Acc = {};
    for (const key of propertyKeys)
      Acc[key] = Visit7(valueSchema, references);
    return Acc;
  } else {
    return {};
  }
}
function FromRef3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromUnion8(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Array":
      return FromArray6(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor4(schema_, references_);
    case "Date":
      return FromDate4(schema_, references_);
    case "Function":
      return FromFunction4(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect6(schema_, references_);
    case "Iterator":
      return FromIterator4(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject4(schema_, references_);
    case "Promise":
      return FromPromise4(schema_, references_);
    case "Record":
      return FromRecord4(schema_, references_);
    case "Ref":
      return FromRef3(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral5(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple6(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion8(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

class ValueCreateError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
function ScoreUnion(schema, references, value3) {
  if (schema[Kind] === "Object" && typeof value3 === "object" && !IsNull(value3)) {
    const object3 = schema;
    const keys = Object.getOwnPropertyNames(value3);
    const entries = Object.entries(object3.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal7 = schema2[Kind] === "Literal" && schema2.const === value3[key] ? max : 0;
      const checks = Check(schema2, references, value3[key]) ? point : 0;
      const exists = keys.includes(key) ? point : 0;
      return acc + (literal7 + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value3) ? 1 : 0;
  }
}
function SelectUnion(union9, references, value3) {
  const schemas = union9.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value3);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union9, references, value3) {
  if ("default" in union9) {
    return typeof value3 === "function" ? union9.default : Clone2(union9.default);
  } else {
    const schema = SelectUnion(union9, references, value3);
    return Cast(schema, references, value3);
  }
}
function DefaultClone(schema, references, value3) {
  return Check(schema, references, value3) ? Clone2(value3) : Create2(schema, references);
}
function Default(schema, references, value3) {
  return Check(schema, references, value3) ? value3 : Create2(schema, references);
}
function FromArray7(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  const created = IsArray(value3) ? Clone2(value3) : Create2(schema, references);
  const minimum = IsNumber(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value4) => Visit8(schema.items, references, value4));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor5(schema, references, value3) {
  if (Check(schema, references, value3))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value3.prototype[key] === undefined)
      continue;
    result.prototype[key] = Visit8(property, references, value3.prototype[key]);
  }
  return result;
}
function FromIntersect7(schema, references, value3) {
  const created = Create2(schema, references);
  const mapped9 = IsStandardObject(created) && IsStandardObject(value3) ? { ...created, ...value3 } : value3;
  return Check(schema, references, mapped9) ? mapped9 : Create2(schema, references);
}
function FromNever5(schema, references, value3) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject5(schema, references, value3) {
  if (Check(schema, references, value3))
    return value3;
  if (value3 === null || typeof value3 !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value3[key] === undefined)
      continue;
    result[key] = Visit8(property, references, value3[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value3)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value3[propertyName]);
    }
  }
  return result;
}
function FromRecord5(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  if (value3 === null || typeof value3 !== "object" || Array.isArray(value3) || value3 instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value3)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef4(schema, references, value3) {
  return Visit8(Deref(schema, references), references, value3);
}
function FromThis4(schema, references, value3) {
  return Visit8(Deref(schema, references), references, value3);
}
function FromTuple7(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  if (!IsArray(value3))
    return Create2(schema, references);
  if (schema.items === undefined)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value3[index]));
}
function FromUnion9(schema, references, value3) {
  return Check(schema, references, value3) ? Clone2(value3) : CastUnion(schema, references, value3);
}
function Visit8(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray7(schema_, references_, value3);
    case "Constructor":
      return FromConstructor5(schema_, references_, value3);
    case "Intersect":
      return FromIntersect7(schema_, references_, value3);
    case "Never":
      return FromNever5(schema_, references_, value3);
    case "Object":
      return FromObject5(schema_, references_, value3);
    case "Record":
      return FromRecord5(schema_, references_, value3);
    case "Ref":
      return FromRef4(schema_, references_, value3);
    case "This":
      return FromThis4(schema_, references_, value3);
    case "Tuple":
      return FromTuple7(schema_, references_, value3);
    case "Union":
      return FromUnion9(schema_, references_, value3);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value3);
    default:
      return Default(schema_, references_, value3);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}

class ValueCastError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function FromArray8(schema, references, value3) {
  if (!IsArray(value3))
    return value3;
  return value3.map((value4) => Visit9(schema.items, references, value4));
}
function FromIntersect8(schema, references, value3) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value3)));
  const composite = intersections.reduce((acc, value4) => IsObject(value4) ? { ...acc, ...value4 } : value4, {});
  if (!IsObject(value3) || !IsObject(composite) || !IsSchema2(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value3)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value3[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value3[key]);
    }
  }
  return composite;
}
function FromObject6(schema, references, value3) {
  if (!IsObject(value3) || IsArray(value3))
    return value3;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value3)) {
    if (key in schema.properties) {
      value3[key] = Visit9(schema.properties[key], references, value3[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value3[key])) {
      value3[key] = Visit9(additionalProperties, references, value3[key]);
      continue;
    }
    delete value3[key];
  }
  return value3;
}
function FromRecord6(schema, references, value3) {
  if (!IsObject(value3))
    return value3;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value3);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value3[key] = Visit9(propertySchema, references, value3[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value3[key])) {
      value3[key] = Visit9(additionalProperties, references, value3[key]);
      continue;
    }
    delete value3[key];
  }
  return value3;
}
function FromRef5(schema, references, value3) {
  return Visit9(Deref(schema, references), references, value3);
}
function FromThis5(schema, references, value3) {
  return Visit9(Deref(schema, references), references, value3);
}
function FromTuple8(schema, references, value3) {
  if (!IsArray(value3))
    return value3;
  if (IsUndefined(schema.items))
    return [];
  const length = Math.min(value3.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value3[i] = Visit9(schema.items[i], references, value3[i]);
  }
  return value3.length > length ? value3.slice(0, length) : value3;
}
function FromUnion10(schema, references, value3) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value3)) {
      return Visit9(inner, references, value3);
    }
  }
  return value3;
}
function Visit9(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, value3);
    case "Intersect":
      return FromIntersect8(schema_, references_, value3);
    case "Object":
      return FromObject6(schema_, references_, value3);
    case "Record":
      return FromRecord6(schema_, references_, value3);
    case "Ref":
      return FromRef5(schema_, references_, value3);
    case "This":
      return FromThis5(schema_, references_, value3);
    case "Tuple":
      return FromTuple8(schema_, references_, value3);
    case "Union":
      return FromUnion10(schema_, references_, value3);
    default:
      return value3;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value3) {
  return IsString(value3) && !isNaN(value3) && !isNaN(parseFloat(value3));
}
function IsValueToString(value3) {
  return IsBigInt(value3) || IsBoolean(value3) || IsNumber(value3);
}
function IsValueTrue(value3) {
  return value3 === true || IsNumber(value3) && value3 === 1 || IsBigInt(value3) && value3 === BigInt("1") || IsString(value3) && (value3.toLowerCase() === "true" || value3 === "1");
}
function IsValueFalse(value3) {
  return value3 === false || IsNumber(value3) && (value3 === 0 || Object.is(value3, -0)) || IsBigInt(value3) && value3 === BigInt("0") || IsString(value3) && (value3.toLowerCase() === "false" || value3 === "0" || value3 === "-0");
}
function IsTimeStringWithTimeZone(value3) {
  return IsString(value3) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value3);
}
function IsTimeStringWithoutTimeZone(value3) {
  return IsString(value3) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value3);
}
function IsDateTimeStringWithTimeZone(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value3);
}
function IsDateTimeStringWithoutTimeZone(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value3);
}
function IsDateString(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value3);
}
function TryConvertLiteralString(value3, target) {
  const conversion = TryConvertString(value3);
  return conversion === target ? conversion : value3;
}
function TryConvertLiteralNumber(value3, target) {
  const conversion = TryConvertNumber(value3);
  return conversion === target ? conversion : value3;
}
function TryConvertLiteralBoolean(value3, target) {
  const conversion = TryConvertBoolean(value3);
  return conversion === target ? conversion : value3;
}
function TryConvertLiteral(schema, value3) {
  return IsString(schema.const) ? TryConvertLiteralString(value3, schema.const) : IsNumber(schema.const) ? TryConvertLiteralNumber(value3, schema.const) : IsBoolean(schema.const) ? TryConvertLiteralBoolean(value3, schema.const) : Clone2(value3);
}
function TryConvertBoolean(value3) {
  return IsValueTrue(value3) ? true : IsValueFalse(value3) ? false : value3;
}
function TryConvertBigInt(value3) {
  return IsStringNumeric(value3) ? BigInt(parseInt(value3)) : IsNumber(value3) ? BigInt(value3 | 0) : IsValueFalse(value3) ? BigInt(0) : IsValueTrue(value3) ? BigInt(1) : value3;
}
function TryConvertString(value3) {
  return IsValueToString(value3) ? value3.toString() : IsSymbol(value3) && value3.description !== undefined ? value3.description.toString() : value3;
}
function TryConvertNumber(value3) {
  return IsStringNumeric(value3) ? parseFloat(value3) : IsValueTrue(value3) ? 1 : IsValueFalse(value3) ? 0 : value3;
}
function TryConvertInteger(value3) {
  return IsStringNumeric(value3) ? parseInt(value3) : IsNumber(value3) ? value3 | 0 : IsValueTrue(value3) ? 1 : IsValueFalse(value3) ? 0 : value3;
}
function TryConvertNull(value3) {
  return IsString(value3) && value3.toLowerCase() === "null" ? null : value3;
}
function TryConvertUndefined(value3) {
  return IsString(value3) && value3 === "undefined" ? undefined : value3;
}
function TryConvertDate(value3) {
  return IsDate(value3) ? value3 : IsNumber(value3) ? new Date(value3) : IsValueTrue(value3) ? new Date(1) : IsValueFalse(value3) ? new Date(0) : IsStringNumeric(value3) ? new Date(parseInt(value3)) : IsTimeStringWithoutTimeZone(value3) ? new Date(`1970-01-01T${value3}.000Z`) : IsTimeStringWithTimeZone(value3) ? new Date(`1970-01-01T${value3}`) : IsDateTimeStringWithoutTimeZone(value3) ? new Date(`${value3}.000Z`) : IsDateTimeStringWithTimeZone(value3) ? new Date(value3) : IsDateString(value3) ? new Date(`${value3}T00:00:00.000Z`) : value3;
}
function Default2(value3) {
  return value3;
}
function FromArray9(schema, references, value3) {
  const elements = IsArray(value3) ? value3 : [value3];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value3) {
  return TryConvertBigInt(value3);
}
function FromBoolean5(schema, references, value3) {
  return TryConvertBoolean(value3);
}
function FromDate5(schema, references, value3) {
  return TryConvertDate(value3);
}
function FromInteger5(schema, references, value3) {
  return TryConvertInteger(value3);
}
function FromIntersect9(schema, references, value3) {
  return schema.allOf.reduce((value4, schema2) => Visit10(schema2, references, value4), value3);
}
function FromLiteral6(schema, references, value3) {
  return TryConvertLiteral(schema, value3);
}
function FromNull5(schema, references, value3) {
  return TryConvertNull(value3);
}
function FromNumber5(schema, references, value3) {
  return TryConvertNumber(value3);
}
function FromObject7(schema, references, value3) {
  const isConvertable = IsObject(value3);
  if (!isConvertable)
    return value3;
  const result = {};
  for (const key of Object.keys(value3)) {
    result[key] = HasPropertyKey(schema.properties, key) ? Visit10(schema.properties[key], references, value3[key]) : value3[key];
  }
  return result;
}
function FromRecord7(schema, references, value3) {
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value3)) {
    result[propKey] = Visit10(property, references, propValue);
  }
  return result;
}
function FromRef6(schema, references, value3) {
  return Visit10(Deref(schema, references), references, value3);
}
function FromString5(schema, references, value3) {
  return TryConvertString(value3);
}
function FromSymbol5(schema, references, value3) {
  return IsString(value3) || IsNumber(value3) ? Symbol(value3) : value3;
}
function FromThis6(schema, references, value3) {
  return Visit10(Deref(schema, references), references, value3);
}
function FromTuple9(schema, references, value3) {
  const isConvertable = IsArray(value3) && !IsUndefined(schema.items);
  if (!isConvertable)
    return value3;
  return value3.map((value4, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value4) : value4;
  });
}
function FromUndefined5(schema, references, value3) {
  return TryConvertUndefined(value3);
}
function FromUnion11(schema, references, value3) {
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, value3);
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value3;
}
function Visit10(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, value3);
    case "BigInt":
      return FromBigInt5(schema_, references_, value3);
    case "Boolean":
      return FromBoolean5(schema_, references_, value3);
    case "Date":
      return FromDate5(schema_, references_, value3);
    case "Integer":
      return FromInteger5(schema_, references_, value3);
    case "Intersect":
      return FromIntersect9(schema_, references_, value3);
    case "Literal":
      return FromLiteral6(schema_, references_, value3);
    case "Null":
      return FromNull5(schema_, references_, value3);
    case "Number":
      return FromNumber5(schema_, references_, value3);
    case "Object":
      return FromObject7(schema_, references_, value3);
    case "Record":
      return FromRecord7(schema_, references_, value3);
    case "Ref":
      return FromRef6(schema_, references_, value3);
    case "String":
      return FromString5(schema_, references_, value3);
    case "Symbol":
      return FromSymbol5(schema_, references_, value3);
    case "This":
      return FromThis6(schema_, references_, value3);
    case "Tuple":
      return FromTuple9(schema_, references_, value3);
    case "Undefined":
      return FromUndefined5(schema_, references_, value3);
    case "Union":
      return FromUnion11(schema_, references_, value3);
    default:
      return Default2(value3);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value3) {
  return value3 === undefined && "default" in schema ? Clone2(schema.default) : value3;
}
function IsCheckable2(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function IsDefaultSchema(value3) {
  return IsSchema2(value3) && "default" in value3;
}
function FromArray10(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsArray(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit11(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromIntersect10(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit11(schema2, references, defaulted);
    return IsObject(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject8(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    if (!IsDefaultSchema(schema.properties[key]))
      continue;
    defaulted[key] = Visit11(schema.properties[key], references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord8(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
      continue;
    defaulted[key] = Visit11(propertySchema, references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef7(schema, references, value3) {
  return Visit11(Deref(schema, references), references, ValueOrDefault(schema, value3));
}
function FromThis7(schema, references, value3) {
  return Visit11(Deref(schema, references), references, value3);
}
function FromTuple10(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsArray(defaulted) || IsUndefined(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit11(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion12(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  for (const inner of schema.anyOf) {
    const result = Visit11(inner, references, defaulted);
    if (IsCheckable2(inner) && Check(inner, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit11(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, value3);
    case "Intersect":
      return FromIntersect10(schema_, references_, value3);
    case "Object":
      return FromObject8(schema_, references_, value3);
    case "Record":
      return FromRecord8(schema_, references_, value3);
    case "Ref":
      return FromRef7(schema_, references_, value3);
    case "This":
      return FromThis7(schema_, references_, value3);
    case "Tuple":
      return FromTuple10(schema_, references_, value3);
    case "Union":
      return FromUnion12(schema_, references_, value3);
    default:
      return ValueOrDefault(schema_, value3);
  }
}
function Default3(...args) {
  return args.length === 3 ? Visit11(args[0], args[1], args[2]) : Visit11(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var exports_pointer = {};
__export(exports_pointer, {
  ValuePointerRootSetError: () => ValuePointerRootSetError,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  Set: () => Set4,
  Has: () => Has3,
  Get: () => Get3,
  Format: () => Format,
  Delete: () => Delete3
});
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0;i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value3, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value3, pointer, update);
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value3, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value3, pointer);
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value3, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value3, pointer) {
  if (pointer === "")
    return value3;
  let current = value3;
  for (const component of Format(pointer)) {
    if (current[component] === undefined)
      return;
    current = current[component];
  }
  return current;
}

class ValuePointerRootSetError extends TypeBoxError {
  constructor(value3, path, update) {
    super("Cannot set root value");
    this.value = value3;
    this.path = path;
    this.update = update;
  }
}

class ValuePointerRootDeleteError extends TypeBoxError {
  constructor(value3, path) {
    super("Cannot delete root value");
    this.value = value3;
    this.path = path;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
function CreateUpdate(path, value3) {
  return { type: "update", path, value: value3 };
}
function CreateInsert(path, value3) {
  return { type: "insert", path, value: value3 };
}
function CreateDelete(path) {
  return { type: "delete", path };
}
function* ObjectType4(path, current, next) {
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
  const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
  for (const key of currentKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && nextKeys.includes(key))
      yield CreateUpdate(`${path}/${globalThis.String(key)}`, undefined);
  }
  for (const key of nextKeys) {
    if (IsUndefined(current[key]) || IsUndefined(next[key]))
      continue;
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    yield* Visit12(`${path}/${globalThis.String(key)}`, current[key], next[key]);
  }
  for (const key of nextKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(current[key]))
      yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
  }
  for (const key of currentKeys.reverse()) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && !nextKeys.includes(key))
      yield CreateDelete(`${path}/${globalThis.String(key)}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray(next))
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0;i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1;i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit12(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
}
function Diff(current, next) {
  return [...Visit12("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone8 = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        exports_pointer.Set(clone8, edit.path, edit.value);
        break;
      }
      case "update": {
        exports_pointer.Set(clone8, edit.path, edit.value);
        break;
      }
      case "delete": {
        exports_pointer.Delete(clone8, edit.path);
        break;
      }
    }
  }
  return clone8;
}
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);

class ValueDeltaError extends TypeBoxError {
  constructor(value3, message) {
    super(message);
    this.value = value3;
  }
}

class ValueDeltaSymbolError extends ValueDeltaError {
  constructor(value3) {
    super(value3, "Cannot diff objects with symbol keys");
    this.value = value3;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType5(left, right) {
  if (!IsStandardObject(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType4(left, right) {
  return IsDate(right) && left.getTime() === right.getTime();
}
function ArrayType5(left, right) {
  if (!IsArray(right) || left.length !== right.length)
    return false;
  return left.every((value3, index) => Equal(value3, right[index]));
}
function TypedArrayType3(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value3, index) => Equal(value3, right[index]));
}
function ValueType3(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsStandardObject(left))
    return ObjectType5(left, right);
  if (IsDate(left))
    return DateType4(left, right);
  if (IsTypedArray(left))
    return TypedArrayType3(left, right);
  if (IsArray(left))
    return ArrayType5(left, right);
  if (IsValueType(left))
    return ValueType3(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
function ObjectType6(root, path, current, next) {
  if (!IsStandardObject(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit13(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType6(root, path, current, next) {
  if (!IsArray(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    for (let index = 0;index < next.length; index++) {
      Visit13(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType4(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0;i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    exports_pointer.Set(root, path, Clone2(next));
  }
}
function ValueType4(root, path, current, next) {
  if (current === next)
    return;
  exports_pointer.Set(root, path, next);
}
function Visit13(root, path, current, next) {
  if (IsArray(next))
    return ArrayType6(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType4(root, path, current, next);
  if (IsStandardObject(next))
    return ObjectType6(root, path, current, next);
  if (IsValueType(next))
    return ValueType4(root, path, current, next);
}
function IsNonMutableValue(value3) {
  return IsTypedArray(value3) || IsValueType(value3);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject(current) && IsArray(next) || IsArray(current) && IsStandardObject(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit13(current, "", current, next);
}

class ValueMutateError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
function Default4(schema, path, value3) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Decode(value3) : value3;
  } catch (error19) {
    throw new TransformDecodeError(schema, path, value3, error19);
  }
}
function FromArray11(schema, references, path, value3) {
  return IsArray(value3) ? Default4(schema, path, value3.map((value4, index) => Visit14(schema.items, references, `${path}/${index}`, value4))) : Default4(schema, path, value3);
}
function FromIntersect11(schema, references, path, value3) {
  if (!IsStandardObject(value3) || IsValueType(value3))
    return Default4(schema, path, value3);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value3 };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit14(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromNot5(schema, references, path, value3) {
  return Default4(schema, path, Visit14(schema.not, references, path, value3));
}
function FromObject9(schema, references, path, value3) {
  if (!IsStandardObject(value3))
    return Default4(schema, path, value3);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value3 };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit14(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRecord9(schema, references, path, value3) {
  if (!IsStandardObject(value3))
    return Default4(schema, path, value3);
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern3);
  const knownProperties = { ...value3 };
  for (const key of Object.getOwnPropertyNames(value3))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit14(schema.patternProperties[pattern3], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRef8(schema, references, path, value3) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value3));
}
function FromThis8(schema, references, path, value3) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value3));
}
function FromTuple11(schema, references, path, value3) {
  return IsArray(value3) && IsArray(schema.items) ? Default4(schema, path, schema.items.map((schema2, index) => Visit14(schema2, references, `${path}/${index}`, value3[index]))) : Default4(schema, path, value3);
}
function FromUnion13(schema, references, path, value3) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value3))
      continue;
    const decoded = Visit14(subschema, references, path, value3);
    return Default4(schema, path, decoded);
  }
  return Default4(schema, path, value3);
}
function Visit14(schema, references, path, value3) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, path, value3);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value3);
    case "Not":
      return FromNot5(schema_, references_, path, value3);
    case "Object":
      return FromObject9(schema_, references_, path, value3);
    case "Record":
      return FromRecord9(schema_, references_, path, value3);
    case "Ref":
      return FromRef8(schema_, references_, path, value3);
    case "Symbol":
      return Default4(schema_, path, value3);
    case "This":
      return FromThis8(schema_, references_, path, value3);
    case "Tuple":
      return FromTuple11(schema_, references_, path, value3);
    case "Union":
      return FromUnion13(schema_, references_, path, value3);
    default:
      return Default4(schema_, path, value3);
  }
}
function TransformDecode(schema, references, value3) {
  return Visit14(schema, references, "", value3);
}

class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value3, error19) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value3;
    this.error = error19;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path, value3, error19) {
    super(error19 instanceof Error ? error19.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value3;
    this.error = error19;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
function Default5(schema, path, value3) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Encode(value3) : value3;
  } catch (error20) {
    throw new TransformEncodeError(schema, path, value3, error20);
  }
}
function FromArray12(schema, references, path, value3) {
  const defaulted = Default5(schema, path, value3);
  return IsArray(defaulted) ? defaulted.map((value4, index) => Visit15(schema.items, references, `${path}/${index}`, value4)) : defaulted;
}
function FromIntersect12(schema, references, path, value3) {
  const defaulted = Default5(schema, path, value3);
  if (!IsStandardObject(value3) || IsValueType(value3))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit15(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value3) {
  return Default5(schema.not, path, Default5(schema, path, value3));
}
function FromObject10(schema, references, path, value3) {
  const defaulted = Default5(schema, path, value3);
  if (!IsStandardObject(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit15(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord10(schema, references, path, value3) {
  const defaulted = Default5(schema, path, value3);
  if (!IsStandardObject(value3))
    return defaulted;
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern3);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value3))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit15(schema.patternProperties[pattern3], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef9(schema, references, path, value3) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value3);
  return Default5(schema, path, resolved);
}
function FromThis9(schema, references, path, value3) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value3);
  return Default5(schema, path, resolved);
}
function FromTuple12(schema, references, path, value3) {
  const value1 = Default5(schema, path, value3);
  return IsArray(schema.items) ? schema.items.map((schema2, index) => Visit15(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion14(schema, references, path, value3) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value3))
      continue;
    const value1 = Visit15(subschema, references, path, value3);
    return Default5(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit15(subschema, references, path, value3);
    if (!Check(schema, references, value1))
      continue;
    return Default5(schema, path, value1);
  }
  return Default5(schema, path, value3);
}
function Visit15(schema, references, path, value3) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, path, value3);
    case "Intersect":
      return FromIntersect12(schema_, references_, path, value3);
    case "Not":
      return FromNot6(schema_, references_, path, value3);
    case "Object":
      return FromObject10(schema_, references_, path, value3);
    case "Record":
      return FromRecord10(schema_, references_, path, value3);
    case "Ref":
      return FromRef9(schema_, references_, path, value3);
    case "This":
      return FromThis9(schema_, references_, path, value3);
    case "Tuple":
      return FromTuple12(schema_, references_, path, value3);
    case "Union":
      return FromUnion14(schema_, references_, path, value3);
    default:
      return Default5(schema_, path, value3);
  }
}
function TransformEncode(schema, references, value3) {
  return Visit15(schema, references, "", value3);
}

class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value3, error20) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value3;
    this.error = error20;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path, value3, error20) {
    super(`${error20 instanceof Error ? error20.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value3;
    this.error = error20;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray13(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromAsyncIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromConstructor6(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromFunction5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromIntersect13(schema, references) {
  return IsTransform2(schema) || IsTransform2(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit16(schema2, references));
}
function FromIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform2(schema) || Visit16(schema.not, references);
}
function FromObject11(schema, references) {
  return IsTransform2(schema) || Object.values(schema.properties).some((schema2) => Visit16(schema2, references)) || IsSchema2(schema.additionalProperties) && Visit16(schema.additionalProperties, references);
}
function FromPromise5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.item, references);
}
function FromRecord11(schema, references) {
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern3];
  return IsTransform2(schema) || Visit16(property, references) || IsSchema2(schema.additionalProperties) && IsTransform2(schema.additionalProperties);
}
function FromRef10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromThis10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromTuple13(schema, references) {
  return IsTransform2(schema) || !IsUndefined(schema.items) && schema.items.some((schema2) => Visit16(schema2, references));
}
function FromUnion15(schema, references) {
  return IsTransform2(schema) || schema.anyOf.some((schema2) => Visit16(schema2, references));
}
function Visit16(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord11(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "This":
      return FromThis10(schema_, references_);
    case "Tuple":
      return FromTuple13(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    default:
      return IsTransform2(schema);
  }
}
function HasTransform(schema, references) {
  visited.clear();
  return Visit16(schema, references);
}
var visited = new Set;
// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var exports_value2 = {};
__export(exports_value2, {
  Patch: () => Patch2,
  Mutate: () => Mutate2,
  Hash: () => Hash2,
  Errors: () => Errors2,
  Equal: () => Equal2,
  Encode: () => Encode,
  Diff: () => Diff2,
  Default: () => Default6,
  Decode: () => Decode,
  Create: () => Create3,
  Convert: () => Convert2,
  Clone: () => Clone3,
  Clean: () => Clean2,
  Check: () => Check2,
  Cast: () => Cast2
});
function Cast2(...args) {
  return Cast.apply(Cast, args);
}
function Create3(...args) {
  return Create2.apply(Create2, args);
}
function Check2(...args) {
  return Check.apply(Check, args);
}
function Clean2(...args) {
  return Clean.apply(Clean, args);
}
function Convert2(...args) {
  return Convert.apply(Convert, args);
}
function Clone3(value3) {
  return Clone2(value3);
}
function Decode(...args) {
  const [schema, references, value3] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check2(schema, references, value3))
    throw new TransformDecodeCheckError(schema, value3, Errors2(schema, references, value3).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value3) : value3;
}
function Default6(...args) {
  return Default3.apply(Default3, args);
}
function Encode(...args) {
  const [schema, references, value3] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value3) : value3;
  if (!Check2(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors2(schema, references, encoded).First());
  return encoded;
}
function Errors2(...args) {
  return Errors.apply(Errors, args);
}
function Equal2(left, right) {
  return Equal(left, right);
}
function Diff2(current, next) {
  return Diff(current, next);
}
function Hash2(value3) {
  return Hash(value3);
}
function Patch2(current, edits) {
  return Patch(current, edits);
}
function Mutate2(current, next) {
  Mutate(current, next);
}
// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromRest4(T) {
  return T.map((L) => AwaitedResolve(L));
}
function FromIntersect14(T) {
  return Intersect(FromRest4(T));
}
function FromUnion16(T) {
  return Union(FromRest4(T));
}
function FromPromise6(T) {
  return AwaitedResolve(T);
}
function AwaitedResolve(T) {
  return IsIntersect(T) ? FromIntersect14(T.allOf) : IsUnion(T) ? FromUnion16(T.anyOf) : IsPromise2(T) ? FromPromise6(T.item) : T;
}
function Awaited(T, options = {}) {
  return CloneType(AwaitedResolve(T), options);
}
// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options = {}) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options = {}) {
  return {
    ...options,
    [Kind]: "Date",
    type: "Date"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options = {}) {
  return {
    ...options,
    [Kind]: "Null",
    type: "null"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return { ...options, [Kind]: "Symbol", type: "symbol" };
}
// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options = {}) {
  return { ...options, [Kind]: "Undefined", type: "undefined" };
}
// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options = {}) {
  return { ...options, [Kind]: "Uint8Array", type: "Uint8Array" };
}
// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray14(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties8(value5) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value5))
    Acc[K] = Readonly(FromValue(value5[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value5, root) {
  return IsAsyncIterator2(value5) ? ConditionalReadonly(Any(), root) : IsIterator2(value5) ? ConditionalReadonly(Any(), root) : IsArray2(value5) ? Readonly(Tuple(FromArray14(value5))) : IsUint8Array2(value5) ? Uint8Array2() : IsDate2(value5) ? Date2() : IsObject2(value5) ? ConditionalReadonly(Object2(FromProperties8(value5)), root) : IsFunction2(value5) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined2(value5) ? Undefined() : IsNull2(value5) ? Null() : IsSymbol2(value5) ? Symbol2() : IsBigInt2(value5) ? BigInt2() : IsNumber2(value5) ? Literal(value5) : IsBoolean2(value5) ? Literal(value5) : IsString2(value5) ? Literal(value5) : Object2({});
}
function Const(T, options = {}) {
  return CloneType(FromValue(T, true), options);
}
// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/deref/deref.mjs
function FromRest5(schema, references) {
  return schema.map((schema2) => Deref2(schema2, references));
}
function FromProperties9(properties, references) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties)) {
    Acc[K] = Deref2(properties[K], references);
  }
  return Acc;
}
function FromConstructor7(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromFunction6(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromIntersect15(schema, references) {
  schema.allOf = FromRest5(schema.allOf, references);
  return schema;
}
function FromUnion17(schema, references) {
  schema.anyOf = FromRest5(schema.anyOf, references);
  return schema;
}
function FromTuple14(schema, references) {
  if (IsUndefined2(schema.items))
    return schema;
  schema.items = FromRest5(schema.items, references);
  return schema;
}
function FromArray15(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromObject12(schema, references) {
  schema.properties = FromProperties9(schema.properties, references);
  return schema;
}
function FromPromise7(schema, references) {
  schema.item = Deref2(schema.item, references);
  return schema;
}
function FromAsyncIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromRef11(schema, references) {
  const target = references.find((remote) => remote.$id === schema.$ref);
  if (target === undefined)
    throw Error(`Unable to dereference schema with \$id ${schema.$ref}`);
  const discard8 = Discard(target, ["$id"]);
  return Deref2(discard8, references);
}
function DerefResolve(schema, references) {
  return IsConstructor(schema) ? FromConstructor7(schema, references) : IsFunction3(schema) ? FromFunction6(schema, references) : IsIntersect(schema) ? FromIntersect15(schema, references) : IsUnion(schema) ? FromUnion17(schema, references) : IsTuple(schema) ? FromTuple14(schema, references) : IsArray3(schema) ? FromArray15(schema, references) : IsObject3(schema) ? FromObject12(schema, references) : IsPromise2(schema) ? FromPromise7(schema, references) : IsAsyncIterator3(schema) ? FromAsyncIterator6(schema, references) : IsIterator3(schema) ? FromIterator6(schema, references) : IsRef(schema) ? FromRef11(schema, references) : schema;
}
function Deref2(schema, references) {
  return DerefResolve(CloneType(schema), CloneRest(references));
}
// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options = {}) {
  if (IsUndefined2(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value7) => Literal(value7));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExcludeFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties10(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties10(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExtractFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties11(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties11(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options = {}) {
  return {
    ...options,
    [Kind]: "Integer",
    type: "integer"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, options)
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value7) {
  const [first, rest] = [value7.slice(0, 1), value7.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value7) {
  const [first, rest] = [value7.slice(0, 1), value7.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value7) {
  return value7.toUpperCase();
}
function ApplyLowercase(value7) {
  return value7.toLowerCase();
}
function FromTemplateLiteral6(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite3 = IsTemplateLiteralExpressionFinite(expression);
  if (!finite3)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value7) => Literal(value7));
  const mapped12 = FromRest6(literals, mode);
  const union15 = Union(mapped12);
  return TemplateLiteral([union15], options);
}
function FromLiteralValue(value7, mode) {
  return typeof value7 === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value7) : mode === "Capitalize" ? ApplyCapitalize(value7) : mode === "Uppercase" ? ApplyUppercase(value7) : mode === "Lowercase" ? ApplyLowercase(value7) : value7 : value7.toString();
}
function FromRest6(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral6(schema, mode, schema) : IsUnion(schema) ? Union(FromRest6(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : schema;
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(schema, options) {
  return {
    ...options,
    [Kind]: "Not",
    not: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Omit(P[K2], K, options);
  return Acc;
}
function FromMappedResult9(R, K, options) {
  return FromProperties12(R.properties, K, options);
}
function OmitFromMappedResult(R, K, options) {
  const P = FromMappedResult9(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect16(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromUnion18(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromProperty2(T, K) {
  const { [K]: _, ...R } = T;
  return R;
}
function FromProperties13(T, K) {
  return K.reduce((T2, K2) => FromProperty2(T2, K2), T);
}
function OmitResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect16(T.allOf, K)) : IsUnion(T) ? Union(FromUnion18(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties13(T.properties, K)) : Object2({});
}
function Omit(T, K, options = {}) {
  if (IsMappedKey(K))
    return OmitFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return OmitFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(OmitResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(T, K, options) {
  return {
    [K]: Omit(T, [K], options)
  };
}
function FromPropertyKeys2(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(T, LK, options) };
  }, {});
}
function FromMappedKey3(T, K, options) {
  return FromPropertyKeys2(T, K.keys, options);
}
function OmitFromMappedKey(T, K, options) {
  const P = FromMappedKey3(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromRest7(T) {
  return T.map((L) => PartialResolve(L));
}
function FromProperties14(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Optional(T[K]);
  return Acc;
}
function PartialResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest7(T.allOf)) : IsUnion(T) ? Union(FromRest7(T.anyOf)) : IsObject3(T) ? Object2(FromProperties14(T.properties)) : Object2({});
}
function Partial(T, options = {}) {
  if (IsMappedResult(T))
    return PartialFromMappedResult(T, options);
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PartialResolve(T), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties15(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], options);
  return Acc;
}
function FromMappedResult10(R, options) {
  return FromProperties15(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult10(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties16(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Pick(P[K2], K, options);
  return Acc;
}
function FromMappedResult11(R, K, options) {
  return FromProperties16(R.properties, K, options);
}
function PickFromMappedResult(R, K, options) {
  const P = FromMappedResult11(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect17(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromUnion19(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromProperties17(T, K) {
  const Acc = {};
  for (const K2 of K)
    if (K2 in T)
      Acc[K2] = T[K2];
  return Acc;
}
function PickResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect17(T.allOf, K)) : IsUnion(T) ? Union(FromUnion19(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties17(T.properties, K)) : Object2({});
}
function Pick(T, K, options = {}) {
  if (IsMappedKey(K))
    return PickFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return PickFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PickResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(T, K, options) {
  return {
    [K]: Pick(T, [K], options)
  };
}
function FromPropertyKeys3(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey3(T, LK, options) };
  }, {});
}
function FromMappedKey4(T, K, options) {
  return FromPropertyKeys3(T, K.keys, options);
}
function PickFromMappedKey(T, K, options) {
  const P = FromMappedKey4(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern3, T, options) {
  return {
    ...options,
    [Kind]: "Record",
    type: "object",
    patternProperties: { [pattern3]: CloneType(T) }
  };
}
function RecordCreateFromKeys(K, T, options) {
  const Acc = {};
  for (const K2 of K)
    Acc[K2] = CloneType(T);
  return Object2(Acc, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(K, T, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(K)), T, options);
}
function FromLiteralKey(K, T, options) {
  return RecordCreateFromKeys([K.toString()], T, options);
}
function FromRegExpKey(K, T, options) {
  return RecordCreateFromPattern(K.source, T, options);
}
function FromStringKey(K, T, options) {
  const pattern3 = IsUndefined2(K.pattern) ? PatternStringExact : K.pattern;
  return RecordCreateFromPattern(pattern3, T, options);
}
function FromIntegerKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function FromNumberKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function Record(K, T, options = {}) {
  return IsUnion(K) ? FromUnionKey(K.anyOf, T, options) : IsTemplateLiteral(K) ? FromTemplateLiteralKey(K, T, options) : IsLiteral(K) ? FromLiteralKey(K.const, T, options) : IsInteger2(K) ? FromIntegerKey(K, T, options) : IsNumber3(K) ? FromNumberKey(K, T, options) : IsRegExp2(K) ? FromRegExpKey(K, T, options) : IsString3(K) ? FromStringKey(K, T, options) : Never(options);
}
// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
function Recursive(callback, options = {}) {
  if (IsUndefined2(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = callback({ [Kind]: "This", $ref: `${options.$id}` });
  thisType.$id = options.$id;
  return CloneType({ ...options, [Hint]: "Recursive", ...thisType });
}
var Ordinal = 0;
// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(unresolved, options = {}) {
  if (IsString2(unresolved))
    return { ...options, [Kind]: "Ref", $ref: unresolved };
  if (IsUndefined2(unresolved.$id))
    throw new Error("Reference target type must specify an $id");
  return {
    ...options,
    [Kind]: "Ref",
    $ref: unresolved.$id
  };
}
// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options = {}) {
  const expr = IsString2(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return { ...options, [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
}
// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromRest8(T) {
  return T.map((L) => RequiredResolve(L));
}
function FromProperties18(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Discard(T[K], [OptionalKind]);
  return Acc;
}
function RequiredResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest8(T.allOf)) : IsUnion(T) ? Union(FromRest8(T.anyOf)) : IsObject3(T) ? Object2(FromProperties18(T.properties)) : Object2({});
}
function Required(T, options = {}) {
  if (IsMappedResult(T)) {
    return RequiredFromMappedResult(T, options);
  } else {
    const D = Discard(T, [TransformKind, "$id", "required"]);
    const R = CloneType(RequiredResolve(T), options);
    return { ...D, ...R };
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? CloneRest(T.allOf) : IsUnion(T) ? CloneRest(T.anyOf) : IsTuple(T) ? CloneRest(T.items ?? []) : [];
}
function Rest(T) {
  return CloneRest(RestResolve(T));
}
// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/strict/strict.mjs
function Strict(schema2) {
  return JSON.parse(JSON.stringify(schema2));
}
// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
function Transform(schema2) {
  return new TransformDecodeBuilder(schema2);
}

class TransformDecodeBuilder {
  constructor(schema2) {
    this.schema = schema2;
  }
  Decode(decode2) {
    return new TransformEncodeBuilder(this.schema, decode2);
  }
}

class TransformEncodeBuilder {
  constructor(schema2, decode2) {
    this.schema = schema2;
    this.decode = decode2;
  }
  EncodeTransform(encode2, schema2) {
    const Encode2 = (value11) => schema2[TransformKind].Encode(encode2(value11));
    const Decode2 = (value11) => this.decode(schema2[TransformKind].Decode(value11));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  EncodeSchema(encode2, schema2) {
    const Codec = { Decode: this.decode, Encode: encode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  Encode(encode2) {
    const schema2 = CloneType(this.schema);
    return IsTransform(schema2) ? this.EncodeTransform(encode2, schema2) : this.EncodeSchema(encode2, schema2);
  }
}
// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options = {}) {
  return {
    ...options,
    [Kind]: "Void",
    type: "void"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => Void,
  Uppercase: () => Uppercase,
  Unsafe: () => Unsafe,
  Unknown: () => Unknown,
  Union: () => Union,
  Undefined: () => Undefined,
  Uncapitalize: () => Uncapitalize,
  Uint8Array: () => Uint8Array2,
  Tuple: () => Tuple,
  Transform: () => Transform,
  TemplateLiteral: () => TemplateLiteral,
  Symbol: () => Symbol2,
  String: () => String2,
  Strict: () => Strict,
  ReturnType: () => ReturnType,
  Rest: () => Rest,
  Required: () => Required,
  RegExp: () => RegExp2,
  Ref: () => Ref,
  Recursive: () => Recursive,
  Record: () => Record,
  ReadonlyOptional: () => ReadonlyOptional,
  Readonly: () => Readonly,
  Promise: () => Promise2,
  Pick: () => Pick,
  Partial: () => Partial,
  Parameters: () => Parameters,
  Optional: () => Optional,
  Omit: () => Omit,
  Object: () => Object2,
  Number: () => Number2,
  Null: () => Null,
  Not: () => Not2,
  Never: () => Never,
  Mapped: () => Mapped,
  Lowercase: () => Lowercase,
  Literal: () => Literal,
  KeyOf: () => KeyOf,
  Iterator: () => Iterator,
  Intersect: () => Intersect,
  Integer: () => Integer,
  InstanceType: () => InstanceType,
  Index: () => Index,
  Function: () => Function2,
  Extract: () => Extract,
  Extends: () => Extends,
  Exclude: () => Exclude,
  Enum: () => Enum,
  Deref: () => Deref2,
  Date: () => Date2,
  ConstructorParameters: () => ConstructorParameters,
  Constructor: () => Constructor,
  Const: () => Const,
  Composite: () => Composite,
  Capitalize: () => Capitalize,
  Boolean: () => Boolean2,
  BigInt: () => BigInt2,
  Awaited: () => Awaited,
  AsyncIterator: () => AsyncIterator,
  Array: () => Array2,
  Any: () => Any
});

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;
// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema3, references, checkFunc, code) {
    this.schema = schema3;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema3, references);
  }
  Code() {
    return this.code;
  }
  Errors(value11) {
    return Errors(this.schema, this.references, value11);
  }
  Check(value11) {
    return this.checkFunc(value11);
  }
  Decode(value11) {
    if (!this.checkFunc(value11))
      throw new TransformDecodeCheckError(this.schema, value11, this.Errors(value11).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value11) : value11;
  }
  Encode(value11) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value11) : value11;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value11, this.Errors(value11).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value11) {
    if (value11.length === 0)
      return false;
    return Character.IsNumeric(value11.charCodeAt(0));
  }
  function IsAccessor(value11) {
    if (IsFirstCharacterNumeric(value11))
      return false;
    for (let i = 0;i < value11.length; i++) {
      const code = value11.charCodeAt(i);
      const check11 = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check11)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode2(object13, key) {
    return IsAccessor(key) ? `${object13}.${key}` : `${object13}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema3) {
    super("Unknown type");
    this.schema = schema3;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema3) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema3;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value11, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value11} ? ${expression} : true)` : `(${MemberExpression.Encode(value11, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value11) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value11} === 'object' && ${value11} !== null && !Array.isArray(${value11}))` : `(typeof ${value11} === 'object' && ${value11} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value11) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value11} === 'object' && ${value11} !== null && !Array.isArray(${value11}) && !(${value11} instanceof Date) && !(${value11} instanceof Uint8Array))` : `(typeof ${value11} === 'object' && ${value11} !== null && !(${value11} instanceof Date) && !(${value11} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value11) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value11} === 'number'` : `Number.isFinite(${value11})`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value11) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value11} === undefined || ${value11} === null)` : `${value11} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema3) {
    return schema3[Kind] === "Any" || schema3[Kind] === "Unknown";
  }
  function* FromAny5(schema3, references, value11) {
    yield "true";
  }
  function* FromArray16(schema3, references, value11) {
    yield `Array.isArray(${value11})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber(schema3.maxItems))
      yield `${value11}.length <= ${schema3.maxItems}`;
    if (IsNumber(schema3.minItems))
      yield `${value11}.length >= ${schema3.minItems}`;
    const elementExpression = CreateExpression(schema3.items, references, "value");
    yield `${value11}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema3.contains) || IsNumber(schema3.minContains) || IsNumber(schema3.maxContains)) {
      const containsSchema = IsSchema2(schema3.contains) ? schema3.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber(schema3.minContains) ? [`(count >= ${schema3.minContains})`] : [];
      const checkMaxContains = IsNumber(schema3.maxContains) ? [`(count <= ${schema3.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check11 = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check11}})(${value11})`;
    }
    if (schema3.uniqueItems === true) {
      const check11 = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check11} }`;
      yield `((${parameter}) => { ${block} )(${value11})`;
    }
  }
  function* FromAsyncIterator7(schema3, references, value11) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value11})`;
  }
  function* FromBigInt6(schema3, references, value11) {
    yield `(typeof ${value11} === 'bigint')`;
    if (IsBigInt(schema3.exclusiveMaximum))
      yield `${value11} < BigInt(${schema3.exclusiveMaximum})`;
    if (IsBigInt(schema3.exclusiveMinimum))
      yield `${value11} > BigInt(${schema3.exclusiveMinimum})`;
    if (IsBigInt(schema3.maximum))
      yield `${value11} <= BigInt(${schema3.maximum})`;
    if (IsBigInt(schema3.minimum))
      yield `${value11} >= BigInt(${schema3.minimum})`;
    if (IsBigInt(schema3.multipleOf))
      yield `(${value11} % BigInt(${schema3.multipleOf})) === 0`;
  }
  function* FromBoolean6(schema3, references, value11) {
    yield `(typeof ${value11} === 'boolean')`;
  }
  function* FromConstructor8(schema3, references, value11) {
    yield* Visit17(schema3.returns, references, `${value11}.prototype`);
  }
  function* FromDate6(schema3, references, value11) {
    yield `(${value11} instanceof Date) && Number.isFinite(${value11}.getTime())`;
    if (IsNumber(schema3.exclusiveMaximumTimestamp))
      yield `${value11}.getTime() < ${schema3.exclusiveMaximumTimestamp}`;
    if (IsNumber(schema3.exclusiveMinimumTimestamp))
      yield `${value11}.getTime() > ${schema3.exclusiveMinimumTimestamp}`;
    if (IsNumber(schema3.maximumTimestamp))
      yield `${value11}.getTime() <= ${schema3.maximumTimestamp}`;
    if (IsNumber(schema3.minimumTimestamp))
      yield `${value11}.getTime() >= ${schema3.minimumTimestamp}`;
    if (IsNumber(schema3.multipleOfTimestamp))
      yield `(${value11}.getTime() % ${schema3.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction7(schema3, references, value11) {
    yield `(typeof ${value11} === 'function')`;
  }
  function* FromInteger6(schema3, references, value11) {
    yield `Number.isInteger(${value11})`;
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value11} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value11} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value11} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value11} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value11} % ${schema3.multipleOf}) === 0`;
  }
  function* FromIntersect18(schema3, references, value11) {
    const check1 = schema3.allOf.map((schema4) => CreateExpression(schema4, references, value11)).join(" && ");
    if (schema3.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value11}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check22})`;
    } else if (IsSchema2(schema3.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value11}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema3.unevaluatedProperties, references, `${value11}[key]`)})`;
      yield `(${check1} && ${check22})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator7(schema3, references, value11) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value11})`;
  }
  function* FromLiteral7(schema3, references, value11) {
    if (typeof schema3.const === "number" || typeof schema3.const === "boolean") {
      yield `(${value11} === ${schema3.const})`;
    } else {
      yield `(${value11} === '${LiteralString.Escape(schema3.const)}')`;
    }
  }
  function* FromNever6(schema3, references, value11) {
    yield `false`;
  }
  function* FromNot8(schema3, references, value11) {
    const expression = CreateExpression(schema3.not, references, value11);
    yield `(!${expression})`;
  }
  function* FromNull6(schema3, references, value11) {
    yield `(${value11} === null)`;
  }
  function* FromNumber6(schema3, references, value11) {
    yield Policy.IsNumberLike(value11);
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value11} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value11} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value11} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value11} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value11} % ${schema3.multipleOf}) === 0`;
  }
  function* FromObject13(schema3, references, value11) {
    yield Policy.IsObjectLike(value11);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value11}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value11}).length <= ${schema3.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema3.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value11, knownKey);
      const property = schema3.properties[knownKey];
      if (schema3.required && schema3.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value11})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value11, knownKey, expression);
      }
    }
    if (schema3.additionalProperties === false) {
      if (schema3.required && schema3.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value11}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value11}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema3.additionalProperties === "object") {
      const expression = CreateExpression(schema3.additionalProperties, references, `${value11}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value11}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise8(schema3, references, value11) {
    yield `(typeof value === 'object' && typeof ${value11}.then === 'function')`;
  }
  function* FromRecord12(schema3, references, value11) {
    yield Policy.IsRecordLike(value11);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value11}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value11}).length <= ${schema3.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema3.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check22 = IsSchema2(schema3.additionalProperties) ? CreateExpression(schema3.additionalProperties, references, value11) : schema3.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check22})`;
    yield `(Object.entries(${value11}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef12(schema3, references, value11) {
    const target = Deref(schema3, references);
    if (state.functions.has(schema3.$ref))
      return yield `${CreateFunctionName(schema3.$ref)}(${value11})`;
    yield* Visit17(target, references, value11);
  }
  function* FromRegExp5(schema3, references, value11) {
    const variable = CreateVariable(`${new RegExp(schema3.source, schema3.flags)};`);
    yield `(typeof ${value11} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value11}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value11}.length >= ${schema3.minLength}`;
    yield `${variable}.test(${value11})`;
  }
  function* FromString6(schema3, references, value11) {
    yield `(typeof ${value11} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value11}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value11}.length >= ${schema3.minLength}`;
    if (schema3.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
      yield `${variable}.test(${value11})`;
    }
    if (schema3.format !== undefined) {
      yield `format('${schema3.format}', ${value11})`;
    }
  }
  function* FromSymbol6(schema3, references, value11) {
    yield `(typeof ${value11} === 'symbol')`;
  }
  function* FromTemplateLiteral7(schema3, references, value11) {
    yield `(typeof ${value11} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
    yield `${variable}.test(${value11})`;
  }
  function* FromThis11(schema3, references, value11) {
    yield `${CreateFunctionName(schema3.$ref)}(${value11})`;
  }
  function* FromTuple15(schema3, references, value11) {
    yield `Array.isArray(${value11})`;
    if (schema3.items === undefined)
      return yield `${value11}.length === 0`;
    yield `(${value11}.length === ${schema3.maxItems})`;
    for (let i = 0;i < schema3.items.length; i++) {
      const expression = CreateExpression(schema3.items[i], references, `${value11}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined6(schema3, references, value11) {
    yield `${value11} === undefined`;
  }
  function* FromUnion20(schema3, references, value11) {
    const expressions = schema3.anyOf.map((schema4) => CreateExpression(schema4, references, value11));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array5(schema3, references, value11) {
    yield `${value11} instanceof Uint8Array`;
    if (IsNumber(schema3.maxByteLength))
      yield `(${value11}.length <= ${schema3.maxByteLength})`;
    if (IsNumber(schema3.minByteLength))
      yield `(${value11}.length >= ${schema3.minByteLength})`;
  }
  function* FromUnknown5(schema3, references, value11) {
    yield "true";
  }
  function* FromVoid5(schema3, references, value11) {
    yield Policy.IsVoidLike(value11);
  }
  function* FromKind4(schema3, references, value11) {
    const instance = state.instances.size;
    state.instances.set(instance, schema3);
    yield `kind('${schema3[Kind]}', ${instance}, ${value11})`;
  }
  function* Visit17(schema3, references, value11, useHoisting = true) {
    const references_ = IsString(schema3.$id) ? [...references, schema3] : references;
    const schema_ = schema3;
    if (useHoisting && IsString(schema3.$id)) {
      const functionName = CreateFunctionName(schema3.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value11})`;
      } else {
        const functionCode = CreateFunction(functionName, schema3, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value11})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value11);
      case "Array":
        return yield* FromArray16(schema_, references_, value11);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value11);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value11);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value11);
      case "Constructor":
        return yield* FromConstructor8(schema_, references_, value11);
      case "Date":
        return yield* FromDate6(schema_, references_, value11);
      case "Function":
        return yield* FromFunction7(schema_, references_, value11);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value11);
      case "Intersect":
        return yield* FromIntersect18(schema_, references_, value11);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value11);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value11);
      case "Never":
        return yield* FromNever6(schema_, references_, value11);
      case "Not":
        return yield* FromNot8(schema_, references_, value11);
      case "Null":
        return yield* FromNull6(schema_, references_, value11);
      case "Number":
        return yield* FromNumber6(schema_, references_, value11);
      case "Object":
        return yield* FromObject13(schema_, references_, value11);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value11);
      case "Record":
        return yield* FromRecord12(schema_, references_, value11);
      case "Ref":
        return yield* FromRef12(schema_, references_, value11);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value11);
      case "String":
        return yield* FromString6(schema_, references_, value11);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value11);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value11);
      case "This":
        return yield* FromThis11(schema_, references_, value11);
      case "Tuple":
        return yield* FromTuple15(schema_, references_, value11);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value11);
      case "Union":
        return yield* FromUnion20(schema_, references_, value11);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value11);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value11);
      case "Void":
        return yield* FromVoid5(schema_, references_, value11);
      default:
        if (!exports_type.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema3);
        return yield* FromKind4(schema_, references_, value11);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema3, references, value11, useHoisting = true) {
    return `(${[...Visit17(schema3, references, value11, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema3, references, value11, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema3, references, value11, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})\n}`;
  }
  function CreateParameter(name, type47) {
    const annotation = state.language === "typescript" ? `: ${type47}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type47) {
    return state.language === "typescript" ? `: ${type47}` : "";
  }
  function Build(schema3, references, options) {
    const functionCode = CreateFunction("check", schema3, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString(schema3.$id) ? `return function check(${parameter})${returns} {\n  return ${CreateFunctionName(schema3.$id)}(value)\n}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema3, references, options] = args.length === 2 && IsArray(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema3))
      throw new TypeCompilerTypeGuardError(schema3);
    for (const schema4 of references)
      if (!IsSchema2(schema4))
        throw new TypeCompilerTypeGuardError(schema4);
    return Build(schema3, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema3, references = []) {
    const generatedCode = Code(schema3, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind28, instance, value11) {
      if (!exports_type.Has(kind28) || !instances.has(instance))
        return false;
      const checkFunc = exports_type.Get(kind28);
      const schema4 = instances.get(instance);
      return checkFunc(schema4, value11);
    }
    function formatRegistryFunction(format, value11) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value11);
    }
    function hashFunction(value11) {
      return Hash(value11);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema3, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));
// node_modules/elysia/dist/index.mjs
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date5(str) {
  const matches = DATE.exec(str);
  if (!matches)
    return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
function getTime(strictTimeZone) {
  return function time(str) {
    const matches = TIME.exec(str);
    if (!matches)
      return false;
    const hr = +matches[1];
    const min = +matches[2];
    const sec = +matches[3];
    const tz = matches[4];
    const tzSign = matches[5] === "-" ? -1 : 1;
    const tzH = +(matches[6] || 0);
    const tzM = +(matches[7] || 0);
    if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
      return false;
    if (hr <= 23 && min <= 59 && sec < 60)
      return true;
    const utcMin = min - tzM * tzSign;
    const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
  };
}
function getDateTime(strictTimeZone) {
  const time = getTime(strictTimeZone);
  return function date_time(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length === 2 && date5(dateTime[0]) && time(dateTime[1]);
  };
}
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}
function byte(str) {
  BYTE.lastIndex = 0;
  return BYTE.test(str);
}
function validateInt32(value14) {
  return Number.isInteger(value14) && value14 <= MAX_INT32 && value14 >= MIN_INT32;
}
function validateInt64(value14) {
  return Number.isInteger(value14);
}
function validateNumber() {
  return true;
}
function regex(str) {
  if (Z_ANCHOR.test(str))
    return false;
  try {
    new RegExp(str);
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/cookie/index.js
function parse4(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode2;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (obj[key] === undefined) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode2;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value11 = enc(val);
  if (value11 && !fieldContentRegExp.test(value11)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value11;
  if (opt.maxAge != null) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode2(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode2(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode3) {
  try {
    return decode3(str);
  } catch (e) {
    return str;
  }
}
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var $parse = parse4;
var $serialize = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

// node_modules/elysia/dist/index.mjs
var import_fast_decode_uri_component = __toESM(require_fast_decode_uri_component(), 1);
async function* streamResponse(response) {
  const body = response.body;
  if (!body)
    return;
  const reader = body.getReader();
  const decoder = new TextDecoder;
  try {
    while (true) {
      const { done, value: value14 } = await reader.read();
      if (done)
        break;
      yield decoder.decode(value14);
    }
  } finally {
    reader.releaseLock();
  }
}
function removeTrailingEquals(digest) {
  let trimmedDigest = digest;
  while (trimmedDigest.endsWith("=")) {
    trimmedDigest = trimmedDigest.slice(0, -1);
  }
  return trimmedDigest;
}
var import_fast_decode_uri_component2 = __toESM(require_fast_decode_uri_component(), 1);
var import_fast_decode_uri_component3 = __toESM(require_fast_decode_uri_component(), 1);
function parseQueryFromURL(input) {
  const result = {};
  if (typeof input !== "string")
    return result;
  let key = "";
  let value15 = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let flags = 0;
  const l = input.length;
  for (let i = 0;i < l; i++) {
    switch (input.charCodeAt(i)) {
      case 38:
        const hasBothKeyValuePair = equalityIndex > startingIndex;
        if (!hasBothKeyValuePair)
          equalityIndex = i;
        key = input.slice(startingIndex + 1, equalityIndex);
        if (hasBothKeyValuePair || key.length > 0) {
          if (flags & 1)
            key = key.replace(plusRegex, " ");
          if (flags & 2)
            key = import_fast_decode_uri_component2.default(key) || key;
          if (!result[key]) {
            if (hasBothKeyValuePair) {
              value15 = input.slice(equalityIndex + 1, i);
              if (flags & 4)
                value15 = value15.replace(plusRegex, " ");
              if (flags & 8)
                value15 = import_fast_decode_uri_component2.default(value15) || value15;
            }
            result[key] = value15;
          }
        }
        key = "";
        value15 = "";
        startingIndex = i;
        equalityIndex = i;
        flags = 0;
        break;
      case 61:
        if (equalityIndex <= startingIndex)
          equalityIndex = i;
        else
          flags |= 8;
        break;
      case 43:
        if (equalityIndex > startingIndex)
          flags |= 4;
        else
          flags |= 1;
        break;
      case 37:
        if (equalityIndex > startingIndex)
          flags |= 8;
        else
          flags |= 2;
        break;
    }
  }
  if (startingIndex < l) {
    const hasBothKeyValuePair = equalityIndex > startingIndex;
    key = input.slice(startingIndex + 1, hasBothKeyValuePair ? equalityIndex : l);
    if (hasBothKeyValuePair || key.length > 0) {
      if (flags & 1)
        key = key.replace(plusRegex, " ");
      if (flags & 2)
        key = import_fast_decode_uri_component2.default(key) || key;
      if (!result[key]) {
        if (hasBothKeyValuePair) {
          value15 = input.slice(equalityIndex + 1, l);
          if (flags & 4)
            value15 = value15.replace(plusRegex, " ");
          if (flags & 8)
            value15 = import_fast_decode_uri_component2.default(value15) || value15;
        }
        result[key] = value15;
      }
    }
  }
  return result;
}
var createNode = (part, inert) => {
  const inertMap = inert?.length ? {} : null;
  if (inertMap)
    for (const child of inert)
      inertMap[child.part.charCodeAt(0)] = child;
  return {
    part,
    store: null,
    inert: inertMap,
    params: null,
    wildcardStore: null
  };
};
var cloneNode = (node, part) => ({
  ...node,
  part
});
var createParamNode = (name) => ({
  name,
  store: null,
  inert: null
});
var Memoirist = class _Memoirist {
  root = {};
  history = [];
  static regex = {
    static: /:.+?(?=\/|$)/,
    params: /:.+?(?=\/|$)/g,
    optionalParams: /:.+?\?(?=\/|$)/g
  };
  add(method, path, store, {
    ignoreError = false,
    ignoreHistory = false
  } = {}) {
    if (typeof path !== "string")
      throw new TypeError("Route path must be a string");
    if (path === "")
      path = "/";
    else if (path[0] !== "/")
      path = `/${path}`;
    const isWildcard = path[path.length - 1] === "*";
    const optionalParams = path.match(_Memoirist.regex.optionalParams);
    if (optionalParams) {
      const originalPath = path.replaceAll("?", "");
      this.add(method, originalPath, store, {
        ignoreError
      });
      for (let i = 0;i < optionalParams.length; i++) {
        let newPath = path.replace("/" + optionalParams[i], "");
        this.add(method, newPath, store, {
          ignoreError: true
        });
      }
      return store;
    }
    if (optionalParams)
      path = path.replaceAll("?", "");
    if (this.history.find(([m, p, s]) => m === method && p === path))
      return store;
    if (isWildcard || optionalParams && path.charCodeAt(path.length - 1) === 63)
      path = path.slice(0, -1);
    if (!ignoreHistory)
      this.history.push([method, path, store]);
    const inertParts = path.split(_Memoirist.regex.static);
    const paramParts = path.match(_Memoirist.regex.params) || [];
    if (inertParts[inertParts.length - 1] === "")
      inertParts.pop();
    let node;
    if (!this.root[method])
      node = this.root[method] = createNode("/");
    else
      node = this.root[method];
    let paramPartsIndex = 0;
    for (let i = 0;i < inertParts.length; ++i) {
      let part = inertParts[i];
      if (i > 0) {
        const param = paramParts[paramPartsIndex++].slice(1);
        if (node.params === null)
          node.params = createParamNode(param);
        else if (node.params.name !== param) {
          if (ignoreError)
            return store;
          else
            throw new Error(`Cannot create route "${path}" with parameter "${param}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
        }
        const params = node.params;
        if (params.inert === null) {
          node = params.inert = createNode(part);
          continue;
        }
        node = params.inert;
      }
      for (let j = 0;; ) {
        if (j === part.length) {
          if (j < node.part.length) {
            const childNode = cloneNode(node, node.part.slice(j));
            Object.assign(node, createNode(part, [childNode]));
          }
          break;
        }
        if (j === node.part.length) {
          if (node.inert === null)
            node.inert = {};
          const inert = node.inert[part.charCodeAt(j)];
          if (inert) {
            node = inert;
            part = part.slice(j);
            j = 0;
            continue;
          }
          const childNode = createNode(part.slice(j));
          node.inert[part.charCodeAt(j)] = childNode;
          node = childNode;
          break;
        }
        if (part[j] !== node.part[j]) {
          const existingChild = cloneNode(node, node.part.slice(j));
          const newChild = createNode(part.slice(j));
          Object.assign(node, createNode(node.part.slice(0, j), [
            existingChild,
            newChild
          ]));
          node = newChild;
          break;
        }
        ++j;
      }
    }
    if (paramPartsIndex < paramParts.length) {
      const param = paramParts[paramPartsIndex];
      const name = param.slice(1);
      if (node.params === null)
        node.params = createParamNode(name);
      else if (node.params.name !== name) {
        if (ignoreError)
          return store;
        else
          throw new Error(`Cannot create route "${path}" with parameter "${name}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
      }
      if (node.params.store === null)
        node.params.store = store;
      return node.params.store;
    }
    if (isWildcard) {
      if (node.wildcardStore === null)
        node.wildcardStore = store;
      return node.wildcardStore;
    }
    if (node.store === null)
      node.store = store;
    return node.store;
  }
  find(method, url) {
    const root = this.root[method];
    if (!root)
      return null;
    return matchRoute(url, url.length, root, 0);
  }
};
var matchRoute = (url, urlLength, node, startIndex) => {
  const part = node.part;
  const length = part.length;
  const endIndex = startIndex + length;
  if (length > 1) {
    if (endIndex > urlLength)
      return null;
    if (length < 15) {
      for (let i = 1, j = startIndex + 1;i < length; ++i, ++j)
        if (part.charCodeAt(i) !== url.charCodeAt(j))
          return null;
    } else if (url.slice(startIndex, endIndex) !== part)
      return null;
  }
  if (endIndex === urlLength) {
    if (node.store !== null)
      return {
        store: node.store,
        params: {}
      };
    if (node.wildcardStore !== null)
      return {
        store: node.wildcardStore,
        params: { "*": "" }
      };
    return null;
  }
  if (node.inert !== null) {
    const inert = node.inert[url.charCodeAt(endIndex)];
    if (inert !== undefined) {
      const route = matchRoute(url, urlLength, inert, endIndex);
      if (route !== null)
        return route;
    }
  }
  if (node.params !== null) {
    const { store, name, inert } = node.params;
    const slashIndex = url.indexOf("/", endIndex);
    if (slashIndex !== endIndex) {
      if (slashIndex === -1 || slashIndex >= urlLength) {
        if (store !== null) {
          const params = {};
          params[name] = url.substring(endIndex, urlLength);
          return {
            store,
            params
          };
        }
      } else if (inert !== null) {
        const route = matchRoute(url, urlLength, inert, slashIndex);
        if (route !== null) {
          route.params[name] = url.substring(endIndex, slashIndex);
          return route;
        }
      }
    }
  }
  if (node.wildcardStore !== null)
    return {
      store: node.wildcardStore,
      params: {
        "*": url.substring(endIndex, urlLength)
      }
    };
  return null;
};
var hasReturn = (fn) => {
  const fnLiteral = typeof fn === "object" ? fn.fn.toString() : typeof fn === "string" ? fn.toString() : fn;
  const parenthesisEnd = fnLiteral.indexOf(")");
  if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123) {
    return true;
  }
  return fnLiteral.includes("return");
};
var separateFunction = (code) => {
  if (code.startsWith("async"))
    code = code.slice(5);
  code = code.trimStart();
  let index = -1;
  if (code.charCodeAt(0) === 40) {
    index = code.indexOf("=>", code.indexOf(")"));
    if (index !== -1) {
      let bracketEndIndex = index;
      while (bracketEndIndex > 0)
        if (code.charCodeAt(--bracketEndIndex) === 41)
          break;
      let body = code.slice(index + 2);
      if (body.charCodeAt(0) === 32)
        body = body.trimStart();
      return [
        code.slice(1, bracketEndIndex),
        body,
        {
          isArrowReturn: body.charCodeAt(0) !== 123
        }
      ];
    }
  }
  if (code.startsWith("function")) {
    index = code.indexOf("(");
    const end = code.indexOf(")");
    return [
      code.slice(index + 1, end),
      code.slice(end + 2),
      {
        isArrowReturn: false
      }
    ];
  }
  const start = code.indexOf("(");
  if (start !== -1) {
    const sep = code.indexOf("\n", 2);
    const parameter = code.slice(0, sep);
    const end = parameter.lastIndexOf(")") + 1;
    const body = code.slice(sep + 1);
    return [
      parameter.slice(start, end),
      "{" + body,
      {
        isArrowReturn: false
      }
    ];
  }
  const x = code.split("\n", 2);
  return [x[0], x[1], { isArrowReturn: false }];
};
var bracketPairRange = (parameter) => {
  const start = parameter.indexOf("{");
  if (start === -1)
    return [-1, 0];
  let end = start + 1;
  let deep = 1;
  for (;end < parameter.length; end++) {
    const char = parameter.charCodeAt(end);
    if (char === 123)
      deep++;
    else if (char === 125)
      deep--;
    if (deep === 0)
      break;
  }
  if (deep !== 0)
    return [0, parameter.length];
  return [start, end + 1];
};
var bracketPairRangeReverse = (parameter) => {
  const end = parameter.lastIndexOf("}");
  if (end === -1)
    return [-1, 0];
  let start = end - 1;
  let deep = 1;
  for (;start >= 0; start--) {
    const char = parameter.charCodeAt(start);
    if (char === 125)
      deep++;
    else if (char === 123)
      deep--;
    if (deep === 0)
      break;
  }
  if (deep !== 0)
    return [-1, 0];
  return [start, end + 1];
};
var removeColonAlias = (parameter) => {
  while (true) {
    const start = parameter.indexOf(":");
    if (start === -1)
      break;
    let end = parameter.indexOf(",", start);
    if (end === -1)
      end = parameter.indexOf("}", start) - 1;
    if (end === -2)
      end = parameter.length;
    parameter = parameter.slice(0, start) + parameter.slice(end);
  }
  return parameter;
};
var retrieveRootParamters = (parameter) => {
  let hasParenthesis = false;
  if (parameter.charCodeAt(0) === 40)
    parameter = parameter.slice(1, -1);
  if (parameter.charCodeAt(0) === 123) {
    hasParenthesis = true;
    parameter = parameter.slice(1, -1);
  }
  parameter = parameter.replace(/( |\t|\n)/g, "").trim();
  let parameters4 = [];
  while (true) {
    let [start, end] = bracketPairRange(parameter);
    if (start === -1)
      break;
    parameters4.push(parameter.slice(0, start - 1));
    if (parameter.charCodeAt(end) === 44)
      end++;
    parameter = parameter.slice(end);
  }
  parameter = removeColonAlias(parameter);
  if (parameter)
    parameters4 = parameters4.concat(parameter.split(","));
  const newParameters = [];
  for (const p of parameters4) {
    if (p.indexOf(",") === -1) {
      newParameters.push(p);
      continue;
    }
    for (const q of p.split(","))
      newParameters.push(q.trim());
  }
  parameters4 = newParameters;
  return {
    hasParenthesis,
    parameters: parameters4
  };
};
var findParameterReference = (parameter, inference) => {
  const { parameters: parameters4, hasParenthesis } = retrieveRootParamters(parameter);
  if (!inference.query && parameters4.includes("query"))
    inference.query = true;
  if (!inference.headers && parameters4.includes("headers"))
    inference.headers = true;
  if (!inference.body && parameters4.includes("body"))
    inference.body = true;
  if (!inference.cookie && parameters4.includes("cookie"))
    inference.cookie = true;
  if (!inference.set && parameters4.includes("set"))
    inference.set = true;
  if (!inference.server && parameters4.includes("server"))
    inference.server = true;
  if (hasParenthesis)
    return `{ ${parameters4.join(", ")} }`;
  return parameters4.join(", ");
};
var findEndIndex = (type47, content, index) => {
  const newLineIndex = content.indexOf(type47 + "\n", index);
  const newTabIndex = content.indexOf(type47 + "	", index);
  const commaIndex = content.indexOf(type47 + ",", index);
  const semicolonIndex = content.indexOf(type47 + ";", index);
  const emptyIndex = content.indexOf(type47 + " ", index);
  return [newLineIndex, newTabIndex, commaIndex, semicolonIndex, emptyIndex].filter((i) => i > 0).sort((a, b) => a - b)[0] || -1;
};
var findAlias = (type47, body, depth = 0) => {
  if (depth > 5)
    return [];
  const aliases = [];
  let content = body;
  while (true) {
    let index = findEndIndex(" = " + type47, content);
    if (index === -1) {
      const lastIndex = content.indexOf(" = " + type47);
      if (lastIndex + 3 + type47.length !== content.length)
        break;
      index = lastIndex;
    }
    const part = content.slice(0, index);
    let variable = part.slice(part.lastIndexOf(" ") + 1);
    if (variable === "}") {
      const [start, end] = bracketPairRangeReverse(part);
      aliases.push(removeColonAlias(content.slice(start, end)));
      content = content.slice(index + 3 + type47.length);
      continue;
    }
    while (variable.charCodeAt(0) === 44)
      variable = variable.slice(1);
    while (variable.charCodeAt(0) === 9)
      variable = variable.slice(1);
    if (!variable.includes("("))
      aliases.push(variable);
    content = content.slice(index + 3 + type47.length);
  }
  for (const alias of aliases) {
    if (alias.charCodeAt(0) === 123)
      continue;
    const deepAlias = findAlias(alias, body);
    if (deepAlias.length > 0)
      aliases.push(...deepAlias);
  }
  return aliases;
};
var extractMainParameter = (parameter) => {
  if (!parameter)
    return;
  if (parameter.charCodeAt(0) !== 123)
    return parameter;
  parameter = parameter.slice(2, -2);
  const hasComma = parameter.includes(",");
  if (!hasComma) {
    if (parameter.includes("..."))
      return parameter.slice(parameter.indexOf("...") + 3);
    return;
  }
  const spreadIndex = parameter.indexOf("...");
  if (spreadIndex === -1)
    return;
  return parameter.slice(spreadIndex + 3).trimEnd();
};
var inferBodyReference = (code, aliases, inference) => {
  const access = (type47, alias) => code.includes(alias + "." + type47) || code.includes(alias + '["' + type47 + '"]') || code.includes(alias + "['" + type47 + "']");
  for (const alias of aliases) {
    if (!alias)
      continue;
    if (alias.charCodeAt(0) === 123) {
      const parameters4 = retrieveRootParamters(alias).parameters;
      if (!inference.query && parameters4.includes("query"))
        inference.query = true;
      if (!inference.headers && parameters4.includes("headers"))
        inference.headers = true;
      if (!inference.body && parameters4.includes("body"))
        inference.body = true;
      if (!inference.cookie && parameters4.includes("cookie"))
        inference.cookie = true;
      if (!inference.set && parameters4.includes("set"))
        inference.set = true;
      if (!inference.query && parameters4.includes("server"))
        inference.server = true;
      continue;
    }
    if (!inference.query && access("query", alias))
      inference.query = true;
    if (code.includes("return " + alias) || code.includes("return " + alias + ".query"))
      inference.query = true;
    if (!inference.headers && access("headers", alias))
      inference.headers = true;
    if (!inference.body && access("body", alias))
      inference.body = true;
    if (!inference.cookie && access("cookie", alias))
      inference.cookie = true;
    if (!inference.set && access("set", alias))
      inference.set = true;
    if (!inference.server && access("server", alias))
      inference.server = true;
    if (inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server)
      break;
  }
  return aliases;
};
var isContextPassToFunction = (context, body, inference) => {
  try {
    const captureFunction = new RegExp(`(?:\\w)\\((?:.*)?${context}`, "gs");
    captureFunction.test(body);
    const nextChar = body.charCodeAt(captureFunction.lastIndex);
    if (nextChar === 41 || nextChar === 44) {
      inference.query = true;
      inference.headers = true;
      inference.body = true;
      inference.cookie = true;
      inference.set = true;
      inference.server = true;
      return true;
    }
    return false;
  } catch (error22) {
    console.log("[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:");
    console.log("--- body ---");
    console.log(body);
    console.log("--- context ---");
    console.log(context);
    return true;
  }
};
var sucrose = (lifeCycle, inference = {
  query: false,
  headers: false,
  body: false,
  cookie: false,
  set: false,
  server: false
}) => {
  const events = [];
  if (lifeCycle.handler && typeof lifeCycle.handler === "function")
    events.push(lifeCycle.handler);
  if (lifeCycle.request?.length)
    events.push(...lifeCycle.request);
  if (lifeCycle.beforeHandle?.length)
    events.push(...lifeCycle.beforeHandle);
  if (lifeCycle.parse?.length)
    events.push(...lifeCycle.parse);
  if (lifeCycle.error?.length)
    events.push(...lifeCycle.error);
  if (lifeCycle.transform?.length)
    events.push(...lifeCycle.transform);
  if (lifeCycle.afterHandle?.length)
    events.push(...lifeCycle.afterHandle);
  if (lifeCycle.mapResponse?.length)
    events.push(...lifeCycle.mapResponse);
  if (lifeCycle.afterResponse?.length)
    events.push(...lifeCycle.afterResponse);
  for (const e of events) {
    if (!e)
      continue;
    const event = "fn" in e ? e.fn : e;
    const [parameter, body, { isArrowReturn }] = separateFunction(event.toString());
    const rootParameters = findParameterReference(parameter, inference);
    const mainParameter = extractMainParameter(rootParameters);
    if (mainParameter) {
      const aliases = findAlias(mainParameter, body);
      aliases.splice(0, -1, mainParameter);
      if (!isContextPassToFunction(mainParameter, body, inference))
        inferBodyReference(body, aliases, inference);
      if (!inference.query && body.includes("return " + mainParameter + ".query"))
        inference.query = true;
    }
    if (inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server)
      break;
  }
  return inference;
};
var fullFormats = {
  date: date5,
  time: getTime(true),
  "date-time": getDateTime(true),
  "iso-time": getTime(false),
  "iso-date-time": getDateTime(false),
  duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
  uri,
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
  regex,
  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
  "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
  byte,
  int32: { type: "number", validate: validateInt32 },
  int64: { type: "number", validate: validateInt64 },
  float: { type: "number", validate: validateNumber },
  double: { type: "number", validate: validateNumber },
  password: true,
  binary: true
};
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
var DATE_TIME_SEPARATOR = /t|\s/i;
var NOT_URI_FRAGMENT = /\/|:/;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
var MIN_INT32 = -(2 ** 31);
var MAX_INT32 = 2 ** 31 - 1;
var Z_ANCHOR = /[^\\]\\Z/;
var isISO8601 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var isFormalDate = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var isShortenDate = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var _validateDate = fullFormats.date;
var _validateDateTime = fullFormats["date-time"];
if (!exports_format.Has("date"))
  TypeSystem.Format("date", (value15) => {
    const temp = value15.replace(/"/g, "");
    if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDate(temp)) {
      const date22 = new Date(temp);
      if (!Number.isNaN(date22.getTime()))
        return true;
    }
    return false;
  });
if (!exports_format.Has("date-time"))
  TypeSystem.Format("date-time", (value15) => {
    const temp = value15.replace(/"/g, "");
    if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDateTime(temp)) {
      const date22 = new Date(temp);
      if (!Number.isNaN(date22.getTime()))
        return true;
    }
    return false;
  });
Object.entries(fullFormats).forEach((formatEntry) => {
  const [formatName, formatValue] = formatEntry;
  if (!exports_format.Has(formatName)) {
    if (formatValue instanceof RegExp)
      TypeSystem.Format(formatName, (value15) => formatValue.test(value15));
    else if (typeof formatValue === "function")
      TypeSystem.Format(formatName, formatValue);
  }
});
var t = Object.assign({}, Type);
var parseFileUnit = (size) => {
  if (typeof size === "string")
    switch (size.slice(-1)) {
      case "k":
        return +size.slice(0, size.length - 1) * 1024;
      case "m":
        return +size.slice(0, size.length - 1) * 1048576;
      default:
        return +size;
    }
  return size;
};
var validateFile = (options, value15) => {
  if (!(value15 instanceof Blob))
    return false;
  if (options.minSize && value15.size < parseFileUnit(options.minSize))
    return false;
  if (options.maxSize && value15.size > parseFileUnit(options.maxSize))
    return false;
  if (options.extension)
    if (typeof options.extension === "string") {
      if (!value15.type.startsWith(options.extension))
        return false;
    } else {
      for (let i = 0;i < options.extension.length; i++)
        if (value15.type.startsWith(options.extension[i]))
          return true;
      return false;
    }
  return true;
};
var File2 = exports_type.Get("Files") ?? TypeSystem.Type("File", validateFile);
var Files = exports_type.Get("Files") ?? TypeSystem.Type("Files", (options, value15) => {
  if (!Array.isArray(value15))
    return validateFile(options, value15);
  if (options.minItems && value15.length < options.minItems)
    return false;
  if (options.maxItems && value15.length > options.maxItems)
    return false;
  for (let i = 0;i < value15.length; i++)
    if (!validateFile(options, value15[i]))
      return false;
  return true;
});
if (!exports_format.Has("numeric"))
  exports_format.Set("numeric", (value15) => !!value15 && !isNaN(+value15));
if (!exports_format.Has("boolean"))
  exports_format.Set("boolean", (value15) => value15 === "true" || value15 === "false");
if (!exports_format.Has("ObjectString"))
  exports_format.Set("ObjectString", (value15) => {
    let start = value15.charCodeAt(0);
    if (start === 9 || start === 10 || start === 32)
      start = value15.trimStart().charCodeAt(0);
    if (start !== 123 && start !== 91)
      return false;
    try {
      JSON.parse(value15);
      return true;
    } catch {
      return false;
    }
  });
if (!exports_format.Has("ArrayString"))
  exports_format.Set("ArrayString", (value15) => {
    let start = value15.charCodeAt(0);
    if (start === 9 || start === 10 || start === 32)
      start = value15.trimStart().charCodeAt(0);
    if (start !== 123 && start !== 91)
      return false;
    try {
      JSON.parse(value15);
      return true;
    } catch {
      return false;
    }
  });
exports_type.Set("UnionEnum", (schema3, value15) => {
  return (typeof value15 === "number" || typeof value15 === "string" || value15 === null) && schema3.enum.includes(value15);
});
var ElysiaType = {
  Numeric: (property) => {
    const schema3 = Type.Number(property);
    return t.Transform(t.Union([
      t.String({
        format: "numeric",
        default: 0
      }),
      t.Number(property)
    ], property)).Decode((value15) => {
      const number7 = +value15;
      if (isNaN(number7))
        return value15;
      if (property && !exports_value2.Check(schema3, number7))
        throw new ValidationError("property", schema3, number7);
      return number7;
    }).Encode((value15) => value15);
  },
  Date: (property) => {
    const schema3 = Type.Date(property);
    return t.Transform(t.Union([
      Type.Date(property),
      t.String({
        format: "date",
        default: (/* @__PURE__ */ new Date()).toISOString()
      }),
      t.String({
        format: "date-time",
        default: (/* @__PURE__ */ new Date()).toISOString()
      })
    ], property)).Decode((value15) => {
      if (value15 instanceof Date)
        return value15;
      const date22 = new Date(value15);
      if (!exports_value2.Check(schema3, date22))
        throw new ValidationError("property", schema3, date22);
      return date22;
    }).Encode((value15) => {
      if (typeof value15 === "string")
        return new Date(value15);
      return value15;
    });
  },
  BooleanString: (property) => {
    const schema3 = Type.Boolean(property);
    return t.Transform(t.Union([
      t.String({
        format: "boolean",
        default: false
      }),
      t.Boolean(property)
    ], property)).Decode((value15) => {
      if (typeof value15 === "string")
        return value15 === "true";
      if (property && !exports_value2.Check(schema3, value15))
        throw new ValidationError("property", schema3, value15);
      return value15;
    }).Encode((value15) => value15);
  },
  ObjectString: (properties, options) => {
    const schema3 = t.Object(properties, options);
    const defaultValue = JSON.stringify(exports_value2.Create(schema3));
    let compiler5;
    try {
      compiler5 = TypeCompiler.Compile(schema3);
    } catch {
    }
    return t.Transform(t.Union([
      t.String({
        format: "ObjectString",
        default: defaultValue
      }),
      schema3
    ])).Decode((value15) => {
      if (typeof value15 === "string") {
        if (value15.charCodeAt(0) !== 123)
          throw new ValidationError("property", schema3, value15);
        try {
          value15 = JSON.parse(value15);
        } catch {
          throw new ValidationError("property", schema3, value15);
        }
        if (compiler5) {
          if (!compiler5.Check(value15))
            throw new ValidationError("property", schema3, value15);
          return compiler5.Decode(value15);
        }
        if (!exports_value2.Check(schema3, value15))
          throw new ValidationError("property", schema3, value15);
        return exports_value2.Decode(schema3, value15);
      }
      return value15;
    }).Encode((value15) => {
      if (typeof value15 === "string")
        try {
          value15 = JSON.parse(value15);
        } catch {
          throw new ValidationError("property", schema3, value15);
        }
      if (!exports_value2.Check(schema3, value15))
        throw new ValidationError("property", schema3, value15);
      return JSON.stringify(value15);
    });
  },
  ArrayString: (children = {}, options) => {
    const schema3 = t.Array(children, options);
    const defaultValue = JSON.stringify(exports_value2.Create(schema3));
    let compiler5;
    try {
      compiler5 = TypeCompiler.Compile(schema3);
    } catch {
    }
    return t.Transform(t.Union([
      t.String({
        format: "ArrayString",
        default: defaultValue
      }),
      schema3
    ])).Decode((value15) => {
      if (typeof value15 === "string") {
        if (value15.charCodeAt(0) !== 91)
          throw new ValidationError("property", schema3, value15);
        try {
          value15 = JSON.parse(value15);
        } catch {
          throw new ValidationError("property", schema3, value15);
        }
        if (compiler5) {
          if (!compiler5.Check(value15))
            throw new ValidationError("property", schema3, value15);
          return compiler5.Decode(value15);
        }
        if (!exports_value2.Check(schema3, value15))
          throw new ValidationError("property", schema3, value15);
        return exports_value2.Decode(schema3, value15);
      }
      return value15;
    }).Encode((value15) => {
      if (typeof value15 === "string")
        try {
          value15 = JSON.parse(value15);
        } catch {
          throw new ValidationError("property", schema3, value15);
        }
      if (!exports_value2.Check(schema3, value15))
        throw new ValidationError("property", schema3, value15);
      return JSON.stringify(value15);
    });
  },
  File: File2,
  Files: (options = {}) => t.Transform(Files(options)).Decode((value15) => {
    if (Array.isArray(value15))
      return value15;
    return [value15];
  }).Encode((value15) => value15),
  Nullable: (schema3) => t.Union([schema3, t.Null()]),
  MaybeEmpty: (schema3) => t.Union([schema3, t.Null(), t.Undefined()]),
  Cookie: (properties, {
    domain,
    expires,
    httpOnly,
    maxAge,
    path,
    priority,
    sameSite,
    secure,
    secrets,
    sign,
    ...options
  } = {}) => {
    const v = t.Object(properties, options);
    v.config = {
      domain,
      expires,
      httpOnly,
      maxAge,
      path,
      priority,
      sameSite,
      secure,
      secrets,
      sign
    };
    return v;
  },
  UnionEnum: (values, options = {}) => {
    const type47 = values.every((value15) => typeof value15 === "string") ? { type: "string" } : values.every((value15) => typeof value15 === "number") ? { type: "number" } : values.every((value15) => value15 === null) ? { type: "null" } : {};
    if (values.some((x) => typeof x === "object" && x !== null))
      throw new Error("This type does not support objects or arrays");
    return {
      default: values[0],
      ...options,
      [Kind]: "UnionEnum",
      ...type47,
      enum: values
    };
  }
};
t.BooleanString = ElysiaType.BooleanString;
t.ObjectString = ElysiaType.ObjectString;
t.ArrayString = ElysiaType.ArrayString;
t.Numeric = ElysiaType.Numeric;
t.File = (arg = {}) => ElysiaType.File({
  default: "File",
  ...arg,
  extension: arg?.type,
  type: "string",
  format: "binary"
});
t.Files = (arg = {}) => ElysiaType.Files({
  ...arg,
  elysiaMeta: "Files",
  default: "Files",
  extension: arg?.type,
  type: "array",
  items: {
    ...arg,
    default: "Files",
    type: "string",
    format: "binary"
  }
});
t.Nullable = (schema3) => ElysiaType.Nullable(schema3);
t.MaybeEmpty = ElysiaType.MaybeEmpty;
t.Cookie = ElysiaType.Cookie;
t.Date = ElysiaType.Date;
t.UnionEnum = ElysiaType.UnionEnum;
var Cookie = class {
  constructor(name, jar, initial = {}) {
    this.name = name;
    this.jar = jar;
    this.initial = initial;
  }
  get cookie() {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    return this.jar[this.name];
  }
  set cookie(jar) {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    this.jar[this.name] = jar;
  }
  get value() {
    return this.cookie.value;
  }
  set value(value15) {
    this.cookie.value = value15;
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires(expires) {
    this.cookie.expires = expires;
    console.log(this.cookie);
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge(maxAge) {
    this.cookie.maxAge = maxAge;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain(domain) {
    this.cookie.domain = domain;
  }
  get path() {
    return this.cookie.path;
  }
  set path(path) {
    this.cookie.path = path;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure(secure) {
    this.cookie.secure = secure;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly(httpOnly) {
    this.cookie.httpOnly = httpOnly;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite(sameSite) {
    this.cookie.sameSite = sameSite;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority(priority) {
    this.cookie.priority = priority;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned(partitioned) {
    this.cookie.partitioned = partitioned;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets(secrets) {
    this.cookie.secrets = secrets;
  }
  update(config) {
    this.cookie = Object.assign(this.cookie, typeof config === "function" ? config(this.cookie) : config);
    return this;
  }
  set(config) {
    this.cookie = Object.assign({
      ...this.initial,
      value: this.value
    }, typeof config === "function" ? config(this.cookie) : config);
    return this;
  }
  remove() {
    if (this.value === undefined)
      return;
    this.set({
      expires: /* @__PURE__ */ new Date(0),
      maxAge: 0,
      value: ""
    });
    return this;
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
};
var createCookieJar = (set2, store, initial) => {
  if (!set2.cookie)
    set2.cookie = {};
  return new Proxy(store, {
    get(_, key) {
      if (key in store)
        return new Cookie(key, set2.cookie, Object.assign({}, initial ?? {}, store[key]));
      return new Cookie(key, set2.cookie, Object.assign({}, initial));
    }
  });
};
var parseCookie = async (set2, cookieString, {
  secrets,
  sign,
  ...initial
} = {}) => {
  if (!cookieString)
    return createCookieJar(set2, {}, initial);
  const isStringKey = typeof secrets === "string";
  if (sign && sign !== true && !Array.isArray(sign))
    sign = [sign];
  const jar = {};
  const cookies = $parse(cookieString);
  for (const [name, v] of Object.entries(cookies)) {
    let value15 = import_fast_decode_uri_component.default(v);
    if (sign === true || sign?.includes(name)) {
      if (!secrets)
        throw new Error("No secret is provided to cookie plugin");
      if (isStringKey) {
        const temp = await unsignCookie(value15, secrets);
        if (temp === false)
          throw new InvalidCookieSignature(name);
        value15 = temp;
      } else {
        let decoded = true;
        for (let i = 0;i < secrets.length; i++) {
          const temp = await unsignCookie(value15, secrets[i]);
          if (temp !== false) {
            decoded = true;
            value15 = temp;
            break;
          }
        }
        if (!decoded)
          throw new InvalidCookieSignature(name);
      }
    }
    jar[name] = {
      value: value15
    };
  }
  return createCookieJar(set2, jar, initial);
};
var hasHeaderShorthand = "toJSON" in new Headers;
var isNotEmpty = (obj) => {
  if (!obj)
    return false;
  for (const x in obj)
    return true;
  return false;
};
var handleFile = (response, set2) => {
  const size = response.size;
  if (!set2 && size || size && set2 && set2.status !== 206 && set2.status !== 304 && set2.status !== 412 && set2.status !== 416) {
    if (set2 && isNotEmpty(set2.headers)) {
      if (set2.headers instanceof Headers) {
        if (hasHeaderShorthand)
          set2.headers = set2.headers.toJSON();
        else
          for (const [key, value15] of set2.headers.entries())
            if (key in set2.headers)
              set2.headers[key] = value15;
      }
      return new Response(response, {
        status: set2.status,
        headers: Object.assign({
          "accept-ranges": "bytes",
          "content-range": `bytes 0-${size - 1}/${size}`
        }, set2.headers)
      });
    }
    return new Response(response, {
      headers: {
        "accept-ranges": "bytes",
        "content-range": `bytes 0-${size - 1}/${size}`,
        "transfer-encoding": "chunked"
      }
    });
  }
  return new Response(response);
};
var parseSetCookies = (headers, setCookie) => {
  if (!headers)
    return headers;
  headers.delete("set-cookie");
  for (let i = 0;i < setCookie.length; i++) {
    const index = setCookie[i].indexOf("=");
    headers.append("set-cookie", `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1) || ""}`);
  }
  return headers;
};
var serializeCookie = (cookies) => {
  if (!cookies || !isNotEmpty(cookies))
    return;
  const set2 = [];
  for (const [key, property] of Object.entries(cookies)) {
    if (!key || !property)
      continue;
    const value15 = property.value;
    if (value15 === undefined || value15 === null)
      continue;
    set2.push($serialize(key, typeof value15 === "object" ? JSON.stringify(value15) : value15 + "", property));
  }
  if (set2.length === 0)
    return;
  if (set2.length === 1)
    return set2[0];
  return set2;
};
var handleStream = async (generator, set2, request) => {
  let init = generator.next();
  if (init instanceof Promise)
    init = await init;
  if (init.done) {
    if (set2)
      return mapResponse(init.value, set2, request);
    return mapCompactResponse(init.value, request);
  }
  return new Response(new ReadableStream({
    async start(controller) {
      let end = false;
      request?.signal.addEventListener("abort", () => {
        end = true;
        try {
          controller.close();
        } catch {
        }
      });
      if (init.value !== undefined && init.value !== null) {
        if (typeof init.value === "object")
          try {
            controller.enqueue(Buffer.from(JSON.stringify(init.value)));
          } catch {
            controller.enqueue(Buffer.from(init.value.toString()));
          }
        else
          controller.enqueue(Buffer.from(init.value.toString()));
      }
      for await (const chunk of generator) {
        if (end)
          break;
        if (chunk === undefined || chunk === null)
          continue;
        if (typeof chunk === "object")
          try {
            controller.enqueue(Buffer.from(JSON.stringify(chunk)));
          } catch {
            controller.enqueue(Buffer.from(chunk.toString()));
          }
        else
          controller.enqueue(Buffer.from(chunk.toString()));
        await new Promise((resolve) => setTimeout(() => resolve(), 0));
      }
      try {
        controller.close();
      } catch {
      }
    }
  }), {
    ...set2,
    headers: {
      "transfer-encoding": "chunked",
      "content-type": "text/event-stream; charset=utf-8",
      ...set2?.headers
    }
  });
};
var mapResponse = (response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.redirect || set2.cookie) {
    if (typeof set2.status === "string")
      set2.status = StatusMap[set2.status];
    if (set2.redirect) {
      set2.headers.Location = set2.redirect;
      if (!set2.status || set2.status < 300 || set2.status >= 400)
        set2.status = 302;
    }
    if (set2.cookie && isNotEmpty(set2.cookie)) {
      const cookie = serializeCookie(set2.cookie);
      if (cookie)
        set2.headers["set-cookie"] = cookie;
    }
    if (set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"])) {
      set2.headers = parseSetCookies(new Headers(set2.headers), set2.headers["set-cookie"]);
    }
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "Array":
        return Response.json(response, set2);
      case "Object":
        const status = response[ELYSIA_RESPONSE];
        if (status) {
          set2.status = status;
          return mapResponse(response.response, set2, request);
        }
        for (const value15 in Object.values(response)) {
          switch (value15?.constructor?.name) {
            case "Blob":
            case "File":
            case "ArrayBuffer":
            case "FileRef":
              return new Response(form(response));
            default:
              break;
          }
        }
        return Response.json(response, set2);
      case "ReadableStream":
        if (!set2.headers["content-type"]?.startsWith("text/event-stream"))
          set2.headers["content-type"] = "text/event-stream; charset=utf-8";
        request?.signal.addEventListener("abort", {
          handleEvent() {
            if (!request?.signal.aborted)
              response.cancel(request);
          }
        }, {
          once: true
        });
        return new Response(response, set2);
      case undefined:
        if (!response)
          return new Response("", set2);
        return Response.json(response, set2);
      case "Response":
        let isCookieSet = false;
        if (set2.headers instanceof Headers)
          for (const key of set2.headers.keys()) {
            if (key === "set-cookie") {
              if (isCookieSet)
                continue;
              isCookieSet = true;
              for (const cookie of set2.headers.getSetCookie()) {
                response.headers.append("set-cookie", cookie);
              }
            } else
              response.headers.append(key, set2.headers?.get(key) ?? "");
          }
        else
          for (const key in set2.headers)
            response.headers.append(key, set2.headers[key]);
        if (response.status !== set2.status)
          set2.status = response.status;
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(streamResponse(response), set2, request);
        return response;
      case "Error":
        return errorToResponse(response, set2);
      case "Promise":
        return response.then((x) => mapResponse(x, set2));
      case "Function":
        return mapResponse(response(), set2);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set2);
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response) {
          let isCookieSet2 = false;
          if (set2.headers instanceof Headers)
            for (const key of set2.headers.keys()) {
              if (key === "set-cookie") {
                if (isCookieSet2)
                  continue;
                isCookieSet2 = true;
                for (const cookie of set2.headers.getSetCookie()) {
                  response.headers.append("set-cookie", cookie);
                }
              } else
                response.headers.append(key, set2.headers?.get(key) ?? "");
            }
          else
            for (const key in set2.headers)
              response.headers.append(key, set2.headers[key]);
          if (hasHeaderShorthand)
            set2.headers = response.headers.toJSON();
          else
            for (const [key, value15] of response.headers.entries())
              if (key in set2.headers)
                set2.headers[key] = value15;
          return response;
        }
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if ("toResponse" in response)
          return mapResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify(response), set2);
          }
        }
        return new Response(response, set2);
    }
  } else
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response);
      case "Blob":
        return handleFile(response, set2);
      case "Array":
        return Response.json(response);
      case "Object":
        const status = response[ELYSIA_RESPONSE];
        if (status) {
          set2.status = status;
          return mapResponse(response.response, set2, request);
        }
        for (const value15 in Object.values(response)) {
          switch (value15?.constructor?.name) {
            case "Blob":
            case "File":
            case "ArrayBuffer":
            case "FileRef":
              return new Response(form(response), set2);
            default:
              break;
          }
        }
        return Response.json(response, set2);
      case "ReadableStream":
        request?.signal.addEventListener("abort", {
          handleEvent() {
            if (!request?.signal.aborted)
              response.cancel(request);
          }
        }, {
          once: true
        });
        return new Response(response, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8"
          }
        });
      case undefined:
        if (!response)
          return new Response("");
        return new Response(JSON.stringify(response), {
          headers: {
            "content-type": "application/json"
          }
        });
      case "Response":
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(streamResponse(response), set2, request);
        return response;
      case "Error":
        return errorToResponse(response, set2);
      case "Promise":
        return response.then((x) => {
          const r = mapCompactResponse(x, request);
          if (r !== undefined)
            return r;
          return new Response("");
        });
      case "Function":
        return mapCompactResponse(response(), request);
      case "Number":
      case "Boolean":
        return new Response(response.toString());
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response)
          return response;
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if ("toResponse" in response)
          return mapResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify(response), set2);
          }
        }
        return new Response(response);
    }
};
var mapEarlyResponse = (response, set2, request) => {
  if (response === undefined || response === null)
    return;
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.redirect || set2.cookie) {
    if (typeof set2.status === "string")
      set2.status = StatusMap[set2.status];
    if (set2.redirect) {
      set2.headers.Location = set2.redirect;
      if (!set2.status || set2.status < 300 || set2.status >= 400)
        set2.status = 302;
    }
    if (set2.cookie && isNotEmpty(set2.cookie)) {
      const cookie = serializeCookie(set2.cookie);
      if (cookie)
        set2.headers["set-cookie"] = cookie;
    }
    if (set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]))
      set2.headers = parseSetCookies(new Headers(set2.headers), set2.headers["set-cookie"]);
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "Array":
        return Response.json(response, set2);
      case "Object":
        const status = response[ELYSIA_RESPONSE];
        if (status) {
          set2.status = status;
          return mapEarlyResponse(response.response, set2, request);
        }
        for (const value15 in Object.values(response)) {
          switch (value15?.constructor?.name) {
            case "Blob":
            case "File":
            case "ArrayBuffer":
            case "FileRef":
              return new Response(form(response), set2);
            default:
              break;
          }
        }
        return Response.json(response, set2);
      case "ReadableStream":
        if (!set2.headers["content-type"]?.startsWith("text/event-stream"))
          set2.headers["content-type"] = "text/event-stream; charset=utf-8";
        request?.signal.addEventListener("abort", {
          handleEvent() {
            if (!request?.signal.aborted)
              response.cancel(request);
          }
        }, {
          once: true
        });
        return new Response(response, set2);
      case undefined:
        if (!response)
          return;
        return Response.json(response, set2);
      case "Response":
        let isCookieSet = false;
        if (set2.headers instanceof Headers)
          for (const key of set2.headers.keys()) {
            if (key === "set-cookie") {
              if (isCookieSet)
                continue;
              isCookieSet = true;
              for (const cookie of set2.headers.getSetCookie()) {
                response.headers.append("set-cookie", cookie);
              }
            } else
              response.headers.append(key, set2.headers?.get(key) ?? "");
          }
        else
          for (const key in set2.headers)
            response.headers.append(key, set2.headers[key]);
        if (response.status !== set2.status)
          set2.status = response.status;
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(streamResponse(response), set2, request);
        return response;
      case "Promise":
        return response.then((x) => {
          const r = mapEarlyResponse(x, set2);
          if (r !== undefined)
            return r;
        });
      case "Error":
        return errorToResponse(response, set2);
      case "Function":
        return mapEarlyResponse(response(), set2);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set2);
      case "FormData":
        return new Response(response);
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      default:
        if (response instanceof Response) {
          let isCookieSet2 = false;
          if (set2.headers instanceof Headers)
            for (const key of set2.headers.keys()) {
              if (key === "set-cookie") {
                if (isCookieSet2)
                  continue;
                isCookieSet2 = true;
                for (const cookie of set2.headers.getSetCookie()) {
                  response.headers.append("set-cookie", cookie);
                }
              } else
                response.headers.append(key, set2.headers?.get(key) ?? "");
            }
          else
            for (const key in set2.headers)
              response.headers.append(key, set2.headers[key]);
          if (response.status !== set2.status)
            set2.status = response.status;
          return response;
        }
        if (response instanceof Promise)
          return response.then((x) => mapEarlyResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if ("toResponse" in response)
          return mapEarlyResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify(response), set2);
          }
        }
        return new Response(response, set2);
    }
  } else
    switch (response?.constructor?.name) {
      case "String":
        return new Response(response);
      case "Blob":
        return handleFile(response, set2);
      case "Array":
        return Response.json(response);
      case "Object":
        const status = response[ELYSIA_RESPONSE];
        if (status) {
          set2.status = status;
          return mapEarlyResponse(response.response, set2, request);
        }
        for (const value15 in Object.values(response)) {
          switch (value15?.constructor?.name) {
            case "Blob":
            case "File":
            case "ArrayBuffer":
            case "FileRef":
              return new Response(form(response), set2);
            default:
              break;
          }
        }
        return Response.json(response, set2);
      case "ReadableStream":
        request?.signal.addEventListener("abort", {
          handleEvent() {
            if (!request?.signal.aborted)
              response.cancel(request);
          }
        }, {
          once: true
        });
        return new Response(response, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8"
          }
        });
      case undefined:
        if (!response)
          return new Response("");
        return new Response(JSON.stringify(response), {
          headers: {
            "content-type": "application/json"
          }
        });
      case "Response":
        if (response.headers.get("transfer-encoding") === "chunked")
          return handleStream(streamResponse(response));
        return response;
      case "Promise":
        return response.then((x) => {
          const r = mapEarlyResponse(x, set2);
          if (r !== undefined)
            return r;
        });
      case "Error":
        return errorToResponse(response, set2);
      case "Function":
        return mapCompactResponse(response(), request);
      case "Number":
      case "Boolean":
        return new Response(response.toString());
      case "Cookie":
        if (response instanceof Cookie)
          return new Response(response.value, set2);
        return new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response);
      default:
        if (response instanceof Response)
          return response;
        if (response instanceof Promise)
          return response.then((x) => mapEarlyResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (typeof response?.next === "function")
          return handleStream(response, set2, request);
        if ("toResponse" in response)
          return mapEarlyResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91) {
            if (!set2.headers["Content-Type"])
              set2.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify(response), set2);
          }
        }
        return new Response(response);
    }
};
var mapCompactResponse = (response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response);
    case "Blob":
      return handleFile(response);
    case "Array":
      return Response.json(response);
    case "Object":
      if (response[ELYSIA_RESPONSE])
        return mapResponse(response.response, {
          status: response[ELYSIA_RESPONSE],
          headers: {}
        });
      form:
        for (const value15 of Object.values(response))
          switch (value15?.constructor?.name) {
            case "Blob":
            case "File":
            case "ArrayBuffer":
            case "FileRef":
              return new Response(form(response));
            case "Object":
              break form;
            default:
              break;
          }
      return Response.json(response);
    case "ReadableStream":
      request?.signal.addEventListener("abort", {
        handleEvent() {
          if (!request?.signal.aborted)
            response.cancel(request);
        }
      }, {
        once: true
      });
      return new Response(response, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8"
        }
      });
    case undefined:
      if (!response)
        return new Response("");
      return new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      });
    case "Response":
      if (response.headers.get("transfer-encoding") === "chunked")
        return handleStream(streamResponse(response));
      return response;
    case "Error":
      return errorToResponse(response);
    case "Promise":
      return response.then((x) => mapCompactResponse(x, request));
    case "Function":
      return mapCompactResponse(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then((x) => mapCompactResponse(x, request));
      if (response instanceof Error)
        return errorToResponse(response);
      if (typeof response?.next === "function")
        return handleStream(response, undefined, request);
      if ("toResponse" in response)
        return mapCompactResponse(response.toResponse());
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91) {
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
        }
      }
      return new Response(response);
  }
};
var errorToResponse = (error22, set2) => new Response(JSON.stringify({
  name: error22?.name,
  message: error22?.message,
  cause: error22?.cause
}), {
  status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
  headers: set2?.headers
});
var createStaticHandler = (handle, hooks, setHeaders = {}) => {
  if (typeof handle === "function")
    return;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (hooks.parse.length === 0 && hooks.transform.length === 0 && hooks.beforeHandle.length === 0 && hooks.afterHandle.length === 0)
    return response.clone.bind(response);
};
var createNativeStaticHandler = (handle, hooks, setHeaders = {}) => {
  if (typeof handle === "function" || handle instanceof Blob)
    return;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (hooks.parse.length === 0 && hooks.transform.length === 0 && hooks.beforeHandle.length === 0 && hooks.afterHandle.length === 0) {
    if (!response.headers.has("content-type"))
      response.headers.append("content-type", "text/plain;charset=utf-8");
    return response.clone.bind(response);
  }
};
var replaceUrlPath = (url, pathname) => {
  const urlObject = new URL(url);
  urlObject.pathname = pathname;
  return urlObject.toString();
};
var isClass = (v) => typeof v === "function" && /^\s*class\s+/.test(v.toString()) || v.toString().startsWith("[object ") && v.toString() !== "[object Object]" || isNotEmpty(Object.getPrototypeOf(v));
var isObject = (item) => item && typeof item === "object" && !Array.isArray(item);
var mergeDeep = (target, source, {
  skipKeys,
  override = true
} = {}) => {
  if (!isObject(target) || !isObject(source))
    return target;
  for (const [key, value15] of Object.entries(source)) {
    if (skipKeys?.includes(key))
      continue;
    if (!isObject(value15) || !(key in target) || isClass(value15)) {
      if (override || !(key in target))
        target[key] = value15;
      continue;
    }
    target[key] = mergeDeep(target[key], value15, { skipKeys, override });
  }
  return target;
};
var mergeCookie = (a, b) => {
  const { properties: _, ...target } = a ?? {};
  const { properties: __, ...source } = b ?? {};
  return mergeDeep(target, source);
};
var mergeObjectArray = (a = [], b = []) => {
  if (!a)
    return [];
  if (!b)
    return a;
  const array5 = [];
  const checksums = [];
  if (!Array.isArray(a))
    a = [a];
  if (!Array.isArray(b))
    b = [b];
  for (const item of a) {
    array5.push(item);
    if (item.checksum)
      checksums.push(item.checksum);
  }
  for (const item of b)
    if (!checksums.includes(item.checksum))
      array5.push(item);
  return array5;
};
var primitiveHooks = [
  "start",
  "request",
  "parse",
  "transform",
  "resolve",
  "beforeHandle",
  "afterHandle",
  "mapResponse",
  "afterResponse",
  "trace",
  "error",
  "stop",
  "body",
  "headers",
  "params",
  "query",
  "response",
  "type",
  "detail"
];
var primitiveHookMap = primitiveHooks.reduce((acc, x) => (acc[x] = true, acc), {});
var mergeResponse = (a, b) => {
  const isRecordNumber = (x) => typeof x === "object" && Object.keys(x).every(isNumericString);
  if (isRecordNumber(a) && isRecordNumber(b))
    return { ...a, ...b };
  return b ?? a;
};
var mergeSchemaValidator = (a, b) => {
  return {
    body: b?.body ?? a?.body,
    headers: b?.headers ?? a?.headers,
    params: b?.params ?? a?.params,
    query: b?.query ?? a?.query,
    cookie: b?.cookie ?? a?.cookie,
    response: mergeResponse(a?.response, b?.response)
  };
};
var mergeHook = (a, b) => {
  return {
    ...a,
    ...b,
    body: b?.body ?? a?.body,
    headers: b?.headers ?? a?.headers,
    params: b?.params ?? a?.params,
    query: b?.query ?? a?.query,
    cookie: b?.cookie ?? a?.cookie,
    response: mergeResponse(a?.response, b?.response),
    type: a?.type || b?.type,
    detail: mergeDeep(b?.detail ?? {}, a?.detail ?? {}),
    parse: mergeObjectArray(a?.parse, b?.parse),
    transform: mergeObjectArray(a?.transform, b?.transform),
    beforeHandle: mergeObjectArray(a?.beforeHandle, b?.beforeHandle),
    afterHandle: mergeObjectArray(a?.afterHandle, b?.afterHandle),
    mapResponse: mergeObjectArray(a?.mapResponse, b?.mapResponse),
    afterResponse: mergeObjectArray(a?.afterResponse, b?.afterResponse),
    trace: mergeObjectArray(a?.trace, b?.trace),
    error: mergeObjectArray(a?.error, b?.error)
  };
};
var replaceSchemaType = (schema3, options, root = true) => {
  if (!Array.isArray(options))
    return _replaceSchemaType(schema3, options, root);
  for (const option of options)
    schema3 = _replaceSchemaType(schema3, option, root);
  return schema3;
};
var _replaceSchemaType = (schema3, options, root = true) => {
  if (!schema3)
    return schema3;
  if (options.untilObjectFound && !root && schema3.type === "object")
    return schema3;
  const fromSymbol = options.from[Kind];
  if (schema3.oneOf) {
    for (let i = 0;i < schema3.oneOf.length; i++)
      schema3.oneOf[i] = _replaceSchemaType(schema3.oneOf[i], options, root);
    return schema3;
  }
  if (schema3.anyOf) {
    for (let i = 0;i < schema3.anyOf.length; i++)
      schema3.anyOf[i] = _replaceSchemaType(schema3.anyOf[i], options, root);
    return schema3;
  }
  if (schema3.allOf) {
    for (let i = 0;i < schema3.allOf.length; i++)
      schema3.allOf[i] = _replaceSchemaType(schema3.allOf[i], options, root);
    return schema3;
  }
  if (schema3.not) {
    for (let i = 0;i < schema3.not.length; i++)
      schema3.not[i] = _replaceSchemaType(schema3.not[i], options, root);
    return schema3;
  }
  const isRoot = root && !!options.excludeRoot;
  if (schema3[Kind] === fromSymbol) {
    const { anyOf, oneOf, allOf, not: not4, properties: properties2, items, ...rest4 } = schema3;
    const to = options.to(rest4);
    let transform7;
    const composeProperties = (v) => {
      if (properties2 && v.type === "object") {
        const newProperties = {};
        for (const [key, value22] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(value22, options, false);
        return {
          ...rest4,
          ...v,
          properties: newProperties
        };
      }
      if (items && v.type === "array")
        return {
          ...rest4,
          ...v,
          items: _replaceSchemaType(items, options, false)
        };
      const value15 = {
        ...rest4,
        ...v
      };
      delete value15["required"];
      if (properties2 && v.type === "string" && v.format === "ObjectString" && v.default === "{}") {
        transform7 = t.ObjectString(properties2, rest4);
        value15.default = JSON.stringify(exports_value2.Create(t.Object(properties2)));
        value15.properties = properties2;
      }
      if (items && v.type === "string" && v.format === "ArrayString" && v.default === "[]") {
        transform7 = t.ArrayString(items, rest4);
        value15.default = JSON.stringify(exports_value2.Create(t.Array(items)));
        value15.items = items;
      }
      return value15;
    };
    if (isRoot) {
      if (properties2) {
        const newProperties = {};
        for (const [key, value15] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(value15, options, false);
        return {
          ...rest4,
          properties: newProperties
        };
      } else if (items?.map)
        return {
          ...rest4,
          items: items.map((v) => _replaceSchemaType(v, options, false))
        };
      return rest4;
    }
    if (to.anyOf)
      for (let i = 0;i < to.anyOf.length; i++)
        to.anyOf[i] = composeProperties(to.anyOf[i]);
    else if (to.oneOf)
      for (let i = 0;i < to.oneOf.length; i++)
        to.oneOf[i] = composeProperties(to.oneOf[i]);
    else if (to.allOf)
      for (let i = 0;i < to.allOf.length; i++)
        to.allOf[i] = composeProperties(to.allOf[i]);
    else if (to.not)
      for (let i = 0;i < to.not.length; i++)
        to.not[i] = composeProperties(to.not[i]);
    if (transform7)
      to[TransformKind] = transform7[TransformKind];
    if (to.anyOf || to.oneOf || to.allOf || to.not)
      return to;
    if (properties2) {
      const newProperties = {};
      for (const [key, value15] of Object.entries(properties2))
        newProperties[key] = _replaceSchemaType(value15, options, false);
      return {
        ...rest4,
        ...to,
        properties: newProperties
      };
    } else if (items?.map)
      return {
        ...rest4,
        ...to,
        items: items.map((v) => _replaceSchemaType(v, options, false))
      };
    return {
      ...rest4,
      ...to
    };
  }
  const properties = schema3?.properties;
  if (properties && root && options.rootOnly !== true)
    for (const [key, value15] of Object.entries(properties)) {
      switch (value15[Kind]) {
        case fromSymbol:
          const { anyOf, oneOf, allOf, not: not4, type: type47, ...rest4 } = value15;
          const to = options.to(rest4);
          if (to.anyOf)
            for (let i = 0;i < to.anyOf.length; i++)
              to.anyOf[i] = { ...rest4, ...to.anyOf[i] };
          else if (to.oneOf)
            for (let i = 0;i < to.oneOf.length; i++)
              to.oneOf[i] = { ...rest4, ...to.oneOf[i] };
          else if (to.allOf)
            for (let i = 0;i < to.allOf.length; i++)
              to.allOf[i] = { ...rest4, ...to.allOf[i] };
          else if (to.not)
            for (let i = 0;i < to.not.length; i++)
              to.not[i] = { ...rest4, ...to.not[i] };
          properties[key] = {
            ...rest4,
            ..._replaceSchemaType(rest4, options, false)
          };
          break;
        case "Object":
        case "Union":
          properties[key] = _replaceSchemaType(value15, options, false);
          break;
        default:
          if (value15.items)
            for (let i = 0;i < value15.items.length; i++) {
              value15.items[i] = _replaceSchemaType(value15.items[i], options, false);
            }
          else if (value15.anyOf || value15.oneOf || value15.allOf || value15.not)
            properties[key] = _replaceSchemaType(value15, options, false);
          break;
      }
    }
  return schema3;
};
var getSchemaValidator = (s, {
  models = {},
  dynamic = false,
  normalize = false,
  additionalProperties = false,
  coerce = false,
  additionalCoerce = []
} = {}) => {
  if (!s)
    return;
  if (typeof s === "string" && !(s in models))
    return;
  let schema3 = typeof s === "string" ? models[s] : s;
  if (coerce || additionalCoerce) {
    if (coerce)
      schema3 = replaceSchemaType(schema3, [
        {
          from: t.Number(),
          to: (options) => t.Numeric(options),
          untilObjectFound: true
        },
        {
          from: t.Boolean(),
          to: (options) => t.BooleanString(options),
          untilObjectFound: true
        },
        ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
      ]);
    else {
      schema3 = replaceSchemaType(schema3, [
        ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
      ]);
    }
  }
  if (schema3.type === "object" && "additionalProperties" in schema3 === false)
    schema3.additionalProperties = additionalProperties;
  const cleaner = (value15) => exports_value2.Clean(schema3, value15);
  if (dynamic) {
    const validator = {
      schema: schema3,
      references: "",
      checkFunc: () => {
      },
      code: "",
      Check: (value15) => exports_value2.Check(schema3, value15),
      Errors: (value15) => exports_value2.Errors(schema3, value15),
      Code: () => "",
      Clean: cleaner,
      Decode: (value15) => exports_value2.Decode(schema3, value15),
      Encode: (value15) => exports_value2.Encode(schema3, value15)
    };
    if (normalize && schema3.additionalProperties === false)
      validator.Clean = cleaner;
    if (schema3.config) {
      validator.config = schema3.config;
      if (validator?.schema?.config)
        delete validator.schema.config;
    }
    validator.parse = (v) => {
      try {
        return validator.Decode(v);
      } catch (error22) {
        throw [...validator.Errors(v)].map(mapValueError);
      }
    };
    validator.safeParse = (v) => {
      try {
        return { success: true, data: validator.Decode(v), error: null };
      } catch (error22) {
        const errors5 = [...compiled.Errors(v)].map(mapValueError);
        return {
          success: false,
          data: null,
          error: errors5[0]?.summary,
          errors: errors5
        };
      }
    };
    return validator;
  }
  const compiled = TypeCompiler.Compile(schema3, Object.values(models));
  compiled.Clean = cleaner;
  if (schema3.config) {
    compiled.config = schema3.config;
    if (compiled?.schema?.config)
      delete compiled.schema.config;
  }
  compiled.parse = (v) => {
    try {
      return compiled.Decode(v);
    } catch (error22) {
      throw [...compiled.Errors(v)].map(mapValueError);
    }
  };
  compiled.safeParse = (v) => {
    try {
      return { success: true, data: compiled.Decode(v), error: null };
    } catch (error22) {
      const errors5 = [...compiled.Errors(v)].map(mapValueError);
      return {
        success: false,
        data: null,
        error: errors5[0]?.summary,
        errors: errors5
      };
    }
  };
  return compiled;
};
var getResponseSchemaValidator = (s, {
  models = {},
  dynamic = false,
  normalize = false,
  additionalProperties = false
}) => {
  if (!s)
    return;
  if (typeof s === "string" && !(s in models))
    return;
  const maybeSchemaOrRecord = typeof s === "string" ? models[s] : s;
  const compile = (schema3, references) => {
    const cleaner = (value15) => {
      if (!value15 || typeof value15 !== "object")
        return exports_value2.Clean(schema3, value15);
      if (Array.isArray(value15))
        value15 = exports_value2.Clean(schema3, value15);
      else
        value15 = exports_value2.Clean(schema3, value15);
      return value15;
    };
    if (dynamic)
      return {
        schema: schema3,
        references: "",
        checkFunc: () => {
        },
        code: "",
        Check: (value15) => exports_value2.Check(schema3, value15),
        Errors: (value15) => exports_value2.Errors(schema3, value15),
        Code: () => "",
        Decode: (value15) => exports_value2.Decode(schema3, value15),
        Encode: (value15) => exports_value2.Encode(schema3, value15)
      };
    const compiledValidator = TypeCompiler.Compile(schema3, references);
    if (normalize && schema3.additionalProperties === false)
      compiledValidator.Clean = cleaner;
    return compiledValidator;
  };
  if (Kind in maybeSchemaOrRecord) {
    if ("additionalProperties" in maybeSchemaOrRecord === false)
      maybeSchemaOrRecord.additionalProperties = additionalProperties;
    return {
      200: compile(maybeSchemaOrRecord, Object.values(models))
    };
  }
  const record4 = {};
  Object.keys(maybeSchemaOrRecord).forEach((status) => {
    const maybeNameOrSchema = maybeSchemaOrRecord[+status];
    if (typeof maybeNameOrSchema === "string") {
      if (maybeNameOrSchema in models) {
        const schema3 = models[maybeNameOrSchema];
        schema3.type === "object" && "additionalProperties" in schema3;
        record4[+status] = Kind in schema3 ? compile(schema3, Object.values(models)) : schema3;
      }
      return;
    }
    if (maybeNameOrSchema.type === "object" && "additionalProperties" in maybeNameOrSchema === false)
      maybeNameOrSchema.additionalProperties = additionalProperties;
    record4[+status] = Kind in maybeNameOrSchema ? compile(maybeNameOrSchema, Object.values(models)) : maybeNameOrSchema;
  });
  return record4;
};
var isBun = typeof Bun !== "undefined";
var hasHash = isBun && typeof Bun.hash === "function";
var checksum = (s) => {
  if (hasHash)
    return Bun.hash(s);
  let h = 9;
  for (let i = 0;i < s.length; )
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return h = h ^ h >>> 9;
};
var _stringToStructureCoercions;
var stringToStructureCoercions = () => {
  if (!_stringToStructureCoercions) {
    _stringToStructureCoercions = [
      {
        from: t.Object({}),
        to: () => t.ObjectString({}),
        excludeRoot: true
      },
      {
        from: t.Array(t.Any()),
        to: () => t.ArrayString(t.Any())
      }
    ];
  }
  return _stringToStructureCoercions;
};
var _coercePrimitiveRoot;
var coercePrimitiveRoot = () => {
  if (!_coercePrimitiveRoot)
    _coercePrimitiveRoot = [
      {
        from: t.Number(),
        to: (options) => t.Numeric(options),
        rootOnly: true
      },
      {
        from: t.Boolean(),
        to: (options) => t.BooleanString(options),
        rootOnly: true
      }
    ];
  return _coercePrimitiveRoot;
};
var getCookieValidator = ({
  validator,
  defaultConfig = {},
  config,
  dynamic,
  models
}) => {
  let cookieValidator = getSchemaValidator(validator, {
    dynamic,
    models,
    additionalProperties: true,
    coerce: true,
    additionalCoerce: stringToStructureCoercions()
  });
  if (isNotEmpty(defaultConfig)) {
    if (cookieValidator) {
      cookieValidator.config = mergeCookie(cookieValidator.config, config);
    } else {
      cookieValidator = getSchemaValidator(t.Cookie({}), {
        dynamic,
        models,
        additionalProperties: true
      });
      cookieValidator.config = defaultConfig;
    }
  }
  return cookieValidator;
};
var injectChecksum = (checksum2, x) => {
  if (!x)
    return;
  if (!Array.isArray(x)) {
    const fn = x;
    if (checksum2 && !fn.checksum)
      fn.checksum = checksum2;
    if (fn.scope === "scoped")
      fn.scope = "local";
    return fn;
  }
  const fns = [...x];
  for (const fn of fns) {
    if (checksum2 && !fn.checksum)
      fn.checksum = checksum2;
    if (fn.scope === "scoped")
      fn.scope = "local";
  }
  return fns;
};
var mergeLifeCycle = (a, b, checksum2) => {
  return {
    start: mergeObjectArray(a.start, injectChecksum(checksum2, b?.start)),
    request: mergeObjectArray(a.request, injectChecksum(checksum2, b?.request)),
    parse: mergeObjectArray(a.parse, injectChecksum(checksum2, b?.parse)),
    transform: mergeObjectArray(a.transform, injectChecksum(checksum2, b?.transform)),
    beforeHandle: mergeObjectArray(a.beforeHandle, injectChecksum(checksum2, b?.beforeHandle)),
    afterHandle: mergeObjectArray(a.afterHandle, injectChecksum(checksum2, b?.afterHandle)),
    mapResponse: mergeObjectArray(a.mapResponse, injectChecksum(checksum2, b?.mapResponse)),
    afterResponse: mergeObjectArray(a.afterResponse, injectChecksum(checksum2, b?.afterResponse)),
    trace: mergeObjectArray(a.trace, injectChecksum(checksum2, b?.trace)),
    error: mergeObjectArray(a.error, injectChecksum(checksum2, b?.error)),
    stop: mergeObjectArray(a.stop, injectChecksum(checksum2, b?.stop))
  };
};
var asHookType = (fn, inject, { skipIfHasType = false } = {}) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn)) {
    if (skipIfHasType)
      fn.scope ??= inject;
    else
      fn.scope = inject;
    return fn;
  }
  for (const x of fn)
    if (skipIfHasType)
      x.scope ??= inject;
    else
      x.scope = inject;
  return fn;
};
var filterGlobal = (fn) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn))
    switch (fn.scope) {
      case "global":
      case "scoped":
        return { ...fn };
      default:
        return { fn };
    }
  const array5 = [];
  for (const x of fn)
    switch (x.scope) {
      case "global":
      case "scoped":
        array5.push({
          ...x
        });
        break;
    }
  return array5;
};
var filterGlobalHook = (hook) => {
  return {
    ...hook,
    type: hook?.type,
    detail: hook?.detail,
    parse: filterGlobal(hook?.parse),
    transform: filterGlobal(hook?.transform),
    beforeHandle: filterGlobal(hook?.beforeHandle),
    afterHandle: filterGlobal(hook?.afterHandle),
    mapResponse: filterGlobal(hook?.mapResponse),
    afterResponse: filterGlobal(hook?.afterResponse),
    error: filterGlobal(hook?.error),
    trace: filterGlobal(hook?.trace)
  };
};
var StatusMap = {
  Continue: 100,
  "Switching Protocols": 101,
  Processing: 102,
  "Early Hints": 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  Found: 302,
  "See Other": 303,
  "Not Modified": 304,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  Unauthorized: 401,
  "Payment Required": 402,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  Conflict: 409,
  Gone: 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a teapot": 418,
  "Misdirected Request": 421,
  "Unprocessable Content": 422,
  Locked: 423,
  "Failed Dependency": 424,
  "Too Early": 425,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Unavailable For Legal Reasons": 451,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Not Extended": 510,
  "Network Authentication Required": 511
};
var InvertedStatusMap = Object.fromEntries(Object.entries(StatusMap).map(([k, v]) => [v, k]));
var encoder = new TextEncoder;
var signCookie = async (val, secret) => {
  if (typeof val !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (secret === null)
    throw new TypeError("Secret key must be provided.");
  const secretKey = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const hmacBuffer = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(val));
  return val + "." + removeTrailingEquals(Buffer.from(hmacBuffer).toString("base64"));
};
var unsignCookie = async (input, secret) => {
  if (typeof input !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (secret === null)
    throw new TypeError("Secret key must be provided.");
  const tentativeValue = input.slice(0, input.lastIndexOf("."));
  const expectedInput = await signCookie(tentativeValue, secret);
  return expectedInput === input ? tentativeValue : false;
};
var traceBackMacro = (extension, property) => {
  if (!extension || typeof extension !== "object" || !property)
    return;
  for (const [key, value15] of Object.entries(property)) {
    if (key in primitiveHookMap || !(key in extension))
      continue;
    const v = extension[key];
    if (typeof v === "function") {
      v(value15);
      delete property[key];
    }
  }
};
var createMacroManager = ({
  globalHook,
  localHook
}) => (stackName) => (type47, fn) => {
  if (typeof type47 === "function")
    type47 = {
      fn: type47
    };
  if ("fn" in type47 || Array.isArray(type47)) {
    if (!localHook[stackName])
      localHook[stackName] = [];
    if (typeof localHook[stackName] === "function")
      localHook[stackName] = [localHook[stackName]];
    if (Array.isArray(type47))
      localHook[stackName] = localHook[stackName].concat(type47);
    else
      localHook[stackName].push(type47);
    return;
  }
  const { insert = "after", stack = "local" } = type47;
  if (typeof fn === "function")
    fn = { fn };
  if (stack === "global") {
    if (!Array.isArray(fn)) {
      if (insert === "before") {
        globalHook[stackName].unshift(fn);
      } else {
        globalHook[stackName].push(fn);
      }
    } else {
      if (insert === "before") {
        globalHook[stackName] = fn.concat(globalHook[stackName]);
      } else {
        globalHook[stackName] = globalHook[stackName].concat(fn);
      }
    }
  } else {
    if (!localHook[stackName])
      localHook[stackName] = [];
    if (typeof localHook[stackName] === "function")
      localHook[stackName] = [localHook[stackName]];
    if (!Array.isArray(fn)) {
      if (insert === "before") {
        localHook[stackName].unshift(fn);
      } else {
        localHook[stackName].push(fn);
      }
    } else {
      if (insert === "before") {
        localHook[stackName] = fn.concat(localHook[stackName]);
      } else {
        localHook[stackName] = localHook[stackName].concat(fn);
      }
    }
  }
};
var parseNumericString = (message) => {
  if (typeof message === "number")
    return message;
  if (message.length < 16) {
    if (message.trim().length === 0)
      return null;
    const length = Number(message);
    if (Number.isNaN(length))
      return null;
    return length;
  }
  if (message.length === 16) {
    if (message.trim().length === 0)
      return null;
    const number7 = Number(message);
    if (Number.isNaN(number7) || number7.toString() !== message)
      return null;
    return number7;
  }
  return null;
};
var isNumericString = (message) => parseNumericString(message) !== null;
var PromiseGroup = class {
  constructor(onError = console.error) {
    this.onError = onError;
    this.root = null;
    this.promises = [];
  }
  get size() {
    return this.promises.length;
  }
  add(promise5) {
    this.promises.push(promise5);
    this.root ||= this.drain();
    return promise5;
  }
  async drain() {
    while (this.promises.length > 0) {
      try {
        await this.promises[0];
      } catch (error22) {
        this.onError(error22);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  then(onfulfilled, onrejected) {
    return (this.root ?? Promise.resolve()).then(onfulfilled, onrejected);
  }
};
var fnToContainer = (fn) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn)) {
    if (typeof fn === "function")
      return { fn };
    else if ("fn" in fn)
      return fn;
  }
  const fns = [];
  for (const x of fn) {
    if (typeof x === "function")
      fns.push({ fn: x });
    else if ("fn" in x)
      fns.push(x);
  }
  return fns;
};
var localHookToLifeCycleStore = (a) => {
  return {
    ...a,
    start: fnToContainer(a?.start),
    request: fnToContainer(a?.request),
    parse: fnToContainer(a?.parse),
    transform: fnToContainer(a?.transform),
    beforeHandle: fnToContainer(a?.beforeHandle),
    afterHandle: fnToContainer(a?.afterHandle),
    mapResponse: fnToContainer(a?.mapResponse),
    afterResponse: fnToContainer(a?.afterResponse),
    trace: fnToContainer(a?.trace),
    error: fnToContainer(a?.error),
    stop: fnToContainer(a?.stop)
  };
};
var lifeCycleToFn = (a) => {
  return {
    ...a,
    start: a.start?.map((x) => x.fn),
    request: a.request?.map((x) => x.fn),
    parse: a.parse?.map((x) => x.fn),
    transform: a.transform?.map((x) => x.fn),
    beforeHandle: a.beforeHandle?.map((x) => x.fn),
    afterHandle: a.afterHandle?.map((x) => x.fn),
    afterResponse: a.afterResponse?.map((x) => x.fn),
    mapResponse: a.mapResponse?.map((x) => x.fn),
    trace: a.trace?.map((x) => x.fn),
    error: a.error?.map((x) => x.fn),
    stop: a.stop?.map((x) => x.fn)
  };
};
var cloneInference = (inference) => ({
  body: inference.body,
  cookie: inference.cookie,
  headers: inference.headers,
  query: inference.query,
  set: inference.set,
  server: inference.server
});
var redirect = (url, status = 302) => Response.redirect(url, status);
var ELYSIA_FORM_DATA = Symbol("ElysiaFormData");
var ELYSIA_REQUEST_ID = Symbol("ElysiaRequestId");
var form = (items) => {
  const formData = new FormData;
  for (const [key, value15] of Object.entries(items)) {
    if (Array.isArray(value15)) {
      for (const v of value15) {
        if (value15 instanceof File)
          formData.append(key, value15, value15.name);
        formData.append(key, v);
      }
      continue;
    }
    if (value15 instanceof File)
      formData.append(key, value15, value15.name);
    formData.append(key, value15);
  }
  return formData;
};
var randomId = () => crypto.getRandomValues(new Uint32Array(1))[0];
var deduplicateChecksum = (array5) => {
  const hashes = [];
  for (let i = 0;i < array5.length; i++) {
    const item = array5[i];
    if (item.checksum) {
      if (hashes.includes(item.checksum)) {
        array5.splice(i, 1);
        i--;
      }
      hashes.push(item.checksum);
    }
  }
  return array5;
};
var promoteEvent = (events, as = "scoped") => {
  if (as === "scoped") {
    for (const event of events)
      if ("scope" in event && event.scope === "local")
        event.scope = "scoped";
    return;
  }
  for (const event of events)
    if ("scope" in event)
      event.scope = "global";
};
var env = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var ERROR_CODE = Symbol("ElysiaErrorCode");
var ELYSIA_RESPONSE = Symbol("ElysiaResponse");
var isProduction = (env?.NODE_ENV ?? env?.ENV) === "production";
var error22 = (code, response) => {
  const res = response ?? (code in InvertedStatusMap ? InvertedStatusMap[code] : code);
  return {
    [ELYSIA_RESPONSE]: StatusMap[code] ?? code,
    response: res,
    _type: undefined,
    error: new Error(res)
  };
};
var InternalServerError = class extends Error {
  constructor(message) {
    super(message ?? "INTERNAL_SERVER_ERROR");
    this.code = "INTERNAL_SERVER_ERROR";
    this.status = 500;
  }
};
var NotFoundError = class extends Error {
  constructor(message) {
    super(message ?? "NOT_FOUND");
    this.code = "NOT_FOUND";
    this.status = 404;
  }
};
var ParseError = class extends Error {
  constructor() {
    super("Failed to parse body");
    this.code = "PARSE";
    this.status = 400;
  }
};
var InvalidCookieSignature = class extends Error {
  constructor(key, message) {
    super(message ?? `"${key}" has invalid cookie signature`);
    this.key = key;
    this.code = "INVALID_COOKIE_SIGNATURE";
    this.status = 400;
  }
};
var mapValueError = (error23) => {
  if (!error23)
    return {
      summary: undefined
    };
  const { message, path, value: value15, type: type47 } = error23;
  const property = path.slice(1).replaceAll("/", ".");
  const isRoot = path === "";
  switch (type47) {
    case 42:
      return {
        ...error23,
        summary: isRoot ? `Value should not be provided` : `Property '${property}' should not be provided`
      };
    case 45:
      return {
        ...error23,
        summary: isRoot ? `Value is missing` : `Property '${property}' is missing`
      };
    case 50:
      const quoteIndex = message.indexOf("'");
      const format = message.slice(quoteIndex + 1, message.indexOf("'", quoteIndex + 1));
      return {
        ...error23,
        summary: isRoot ? `Value should be an email` : `Property '${property}' should be ${format}`
      };
    case 54:
      return {
        ...error23,
        summary: `${message.slice(0, 9)} property '${property}' to be ${message.slice(8)} but found: ${value15}`
      };
    case 62:
      const union22 = error23.schema.anyOf.map((x) => `'${x?.format ?? x.type}'`).join(", ");
      return {
        ...error23,
        summary: isRoot ? `Value should be one of ${union22}` : `Property '${property}' should be one of: ${union22}`
      };
    default:
      return { summary: message, ...error23 };
  }
};
var ValidationError = class _ValidationError extends Error {
  constructor(type47, validator, value15) {
    if (value15 && typeof value15 === "object" && ELYSIA_RESPONSE in value15)
      value15 = value15.response;
    const error23 = isProduction ? undefined : ("Errors" in validator) ? validator.Errors(value15).First() : exports_value2.Errors(validator, value15).First();
    const customError = error23?.schema.error !== undefined ? typeof error23.schema.error === "function" ? error23.schema.error({
      type: type47,
      validator,
      value: value15,
      get errors() {
        return [...validator.Errors(value15)].map(mapValueError);
      }
    }) : error23.schema.error : undefined;
    const accessor = error23?.path || "root";
    let message = "";
    if (customError !== undefined) {
      message = typeof customError === "object" ? JSON.stringify(customError) : customError + "";
    } else if (isProduction) {
      message = JSON.stringify({
        type: "validation",
        on: type47,
        summary: mapValueError(error23).summary,
        message: error23?.message,
        found: value15
      });
    } else {
      const schema3 = validator?.schema ?? validator;
      const errors5 = "Errors" in validator ? [...validator.Errors(value15)].map(mapValueError) : [...exports_value2.Errors(validator, value15)].map(mapValueError);
      let expected;
      try {
        expected = exports_value2.Create(schema3);
      } catch (error32) {
        expected = {
          type: "Could not create expected value",
          message: error32?.message,
          error: error32
        };
      }
      message = JSON.stringify({
        type: "validation",
        on: type47,
        summary: errors5[0]?.summary,
        property: accessor,
        message: error23?.message,
        expected,
        found: value15,
        errors: errors5
      }, null, 2);
    }
    super(message);
    this.type = type47;
    this.validator = validator;
    this.value = value15;
    this.code = "VALIDATION";
    this.status = 422;
    Object.setPrototypeOf(this, _ValidationError.prototype);
  }
  get all() {
    return "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(mapValueError) : [...exports_value2.Errors(this.validator, this.value)].map(mapValueError);
  }
  static simplifyModel(validator) {
    const model = "schema" in validator ? validator.schema : validator;
    try {
      return exports_value2.Create(model);
    } catch {
      return model;
    }
  }
  get model() {
    return _ValidationError.simplifyModel(this.validator);
  }
  toResponse(headers) {
    return new Response(this.message, {
      status: 400,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
};
var websocket = {
  open(ws) {
    ws.data.open?.(ws);
  },
  message(ws, message) {
    ws.data.message?.(ws, message);
  },
  drain(ws) {
    ws.data.drain?.(ws);
  },
  close(ws, code, reason) {
    ws.data.close?.(ws, code, reason);
  }
};
var ElysiaWS = class {
  constructor(raw, data) {
    this.raw = raw;
    this.data = data;
    this.validator = raw.data.validator;
    if (raw.data.id) {
      this.id = raw.data.id;
    } else {
      this.id = randomId().toString();
    }
  }
  get id() {
    return this.raw.data.id;
  }
  set id(newID) {
    this.raw.data.id = newID;
  }
  get publish() {
    return (topic, data = undefined, compress) => {
      if (this.validator?.Check(data) === false)
        throw new ValidationError("message", this.validator, data);
      if (typeof data === "object")
        data = JSON.stringify(data);
      this.raw.publish(topic, data, compress);
      return this;
    };
  }
  get send() {
    return (data) => {
      if (this.validator?.Check(data) === false)
        throw new ValidationError("message", this.validator, data);
      if (Buffer.isBuffer(data)) {
        this.raw.send(data);
        return this;
      }
      if (typeof data === "object")
        data = JSON.stringify(data);
      this.raw.send(data);
      return this;
    };
  }
  get subscribe() {
    return (room) => {
      this.raw.subscribe(room);
      return this;
    };
  }
  get unsubscribe() {
    return (room) => {
      this.raw.unsubscribe(room);
      return this;
    };
  }
  get cork() {
    return (callback) => {
      this.raw.cork(callback);
      return this;
    };
  }
  get close() {
    return () => {
      this.raw.close();
      return this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
};
var version = "1.1.17";
var plusRegex = /\+/g;
var parseQuery = (input) => {
  const result = {};
  if (typeof input !== "string")
    return result;
  const inputLength = input.length;
  let key = "";
  let value15 = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let shouldDecodeKey = false;
  let shouldDecodeValue = false;
  let keyHasPlus = false;
  let valueHasPlus = false;
  let hasBothKeyValuePair = false;
  let c = 0;
  for (let i = 0;i < inputLength + 1; i++) {
    if (i !== inputLength)
      c = input.charCodeAt(i);
    else
      c = 38;
    switch (c) {
      case 38: {
        hasBothKeyValuePair = equalityIndex > startingIndex;
        if (!hasBothKeyValuePair)
          equalityIndex = i;
        key = input.slice(startingIndex + 1, equalityIndex);
        if (hasBothKeyValuePair || key.length > 0) {
          if (keyHasPlus)
            key = key.replace(plusRegex, " ");
          if (shouldDecodeKey)
            key = import_fast_decode_uri_component2.default(key) || key;
          if (hasBothKeyValuePair) {
            value15 = input.slice(equalityIndex + 1, i);
            if (valueHasPlus)
              value15 = value15.replace(plusRegex, " ");
            if (shouldDecodeValue)
              value15 = import_fast_decode_uri_component2.default(value15) || value15;
          }
          const currentValue = result[key];
          if (currentValue === undefined)
            result[key] = value15;
          else {
            if (currentValue.pop)
              currentValue.push(value15);
            else
              result[key] = [currentValue, value15];
          }
        }
        value15 = "";
        startingIndex = i;
        equalityIndex = i;
        shouldDecodeKey = false;
        shouldDecodeValue = false;
        keyHasPlus = false;
        valueHasPlus = false;
        break;
      }
      case 61:
        if (equalityIndex <= startingIndex)
          equalityIndex = i;
        else
          shouldDecodeValue = true;
        break;
      case 43:
        if (equalityIndex > startingIndex)
          valueHasPlus = true;
        else
          keyHasPlus = true;
        break;
      case 37:
        if (equalityIndex > startingIndex)
          shouldDecodeValue = true;
        else
          shouldDecodeKey = true;
        break;
    }
  }
  return result;
};
var ELYSIA_TRACE = Symbol("ElysiaTrace");
var createProcess = () => {
  const { promise: promise5, resolve } = Promise.withResolvers();
  const { promise: end, resolve: resolveEnd } = Promise.withResolvers();
  const { promise: error23, resolve: resolveError } = Promise.withResolvers();
  const callbacks = [];
  const callbacksEnd = [];
  return [
    (callback) => {
      if (callback)
        callbacks.push(callback);
      return promise5;
    },
    (process2) => {
      const processes = [];
      const resolvers = [];
      let groupError = null;
      for (let i = 0;i < (process2.total ?? 0); i++) {
        const { promise: promise22, resolve: resolve2 } = Promise.withResolvers();
        const { promise: end2, resolve: resolveEnd2 } = Promise.withResolvers();
        const { promise: error32, resolve: resolveError2 } = Promise.withResolvers();
        const callbacks2 = [];
        const callbacksEnd2 = [];
        processes.push((callback) => {
          if (callback)
            callbacks2.push(callback);
          return promise22;
        });
        resolvers.push((process3) => {
          const result2 = {
            ...process3,
            end: end2,
            error: error32,
            index: i,
            onStop(callback) {
              if (callback)
                callbacksEnd2.push(callback);
              return end2;
            }
          };
          resolve2(result2);
          for (let i2 = 0;i2 < callbacks2.length; i2++)
            callbacks2[i2](result2);
          return (error42 = null) => {
            const end3 = performance.now();
            if (error42)
              groupError = error42;
            const detail = {
              end: end3,
              error: error42,
              get elapsed() {
                return end3 - process3.begin;
              }
            };
            for (let i2 = 0;i2 < callbacksEnd2.length; i2++)
              callbacksEnd2[i2](detail);
            resolveEnd2(end3);
            resolveError2(error42);
          };
        });
      }
      const result = {
        ...process2,
        end,
        error: error23,
        onEvent(callback) {
          for (let i = 0;i < processes.length; i++)
            processes[i](callback);
        },
        onStop(callback) {
          if (callback)
            callbacksEnd.push(callback);
          return end;
        }
      };
      resolve(result);
      for (let i = 0;i < callbacks.length; i++)
        callbacks[i](result);
      return {
        resolveChild: resolvers,
        resolve(error32 = null) {
          const end2 = performance.now();
          if (!error32 && groupError)
            error32 = groupError;
          const detail = {
            end: end2,
            error: error32,
            get elapsed() {
              return end2 - process2.begin;
            }
          };
          for (let i = 0;i < callbacksEnd.length; i++)
            callbacksEnd[i](detail);
          resolveEnd(end2);
          resolveError(error32);
        }
      };
    }
  ];
};
var createTracer = (traceListener) => {
  return (context) => {
    const [onRequest, resolveRequest] = createProcess();
    const [onParse, resolveParse] = createProcess();
    const [onTransform, resolveTransform] = createProcess();
    const [onBeforeHandle, resolveBeforeHandle] = createProcess();
    const [onHandle, resolveHandle] = createProcess();
    const [onAfterHandle, resolveAfterHandle] = createProcess();
    const [onError, resolveError] = createProcess();
    const [onMapResponse, resolveMapResponse] = createProcess();
    const [onAfterResponse, resolveAfterResponse] = createProcess();
    traceListener({
      id: context[ELYSIA_REQUEST_ID],
      context,
      set: context.set,
      onRequest,
      onParse,
      onTransform,
      onBeforeHandle,
      onHandle,
      onAfterHandle,
      onMapResponse,
      onAfterResponse,
      onError
    });
    return {
      request: resolveRequest,
      parse: resolveParse,
      transform: resolveTransform,
      beforeHandle: resolveBeforeHandle,
      handle: resolveHandle,
      afterHandle: resolveAfterHandle,
      error: resolveError,
      mapResponse: resolveMapResponse,
      afterResponse: resolveAfterResponse
    };
  };
};
var headersHasToJSON = new Headers().toJSON;
var TypeBoxSymbol = {
  optional: Symbol.for("TypeBox.Optional"),
  kind: Symbol.for("TypeBox.Kind")
};
var isOptional = (validator) => {
  if (!validator)
    return false;
  const schema3 = validator?.schema;
  return !!schema3 && TypeBoxSymbol.optional in schema3;
};
var hasAdditionalProperties = (_schema) => {
  if (!_schema)
    return false;
  const schema3 = _schema?.schema ?? _schema;
  if (schema3.anyOf)
    return schema3.anyOf.some(hasAdditionalProperties);
  if (schema3.someOf)
    return schema3.someOf.some(hasAdditionalProperties);
  if (schema3.allOf)
    return schema3.allOf.some(hasAdditionalProperties);
  if (schema3.not)
    return schema3.not.some(hasAdditionalProperties);
  if (schema3.type === "object") {
    const properties = schema3.properties;
    if ("additionalProperties" in schema3)
      return schema3.additionalProperties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasAdditionalProperties(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasAdditionalProperties(property.anyOf[i]))
            return true;
      }
      return property.additionalProperties;
    }
    return false;
  }
  return false;
};
var createReport = ({
  context = "c",
  trace,
  addFn
}) => {
  if (!trace.length)
    return () => {
      return {
        resolveChild() {
          return () => {
          };
        },
        resolve() {
        }
      };
    };
  for (let i = 0;i < trace.length; i++)
    addFn(`let report${i}, reportChild${i}, reportErr${i}, reportErrChild${i}; let trace${i} = ${context}[ELYSIA_TRACE]?.[${i}] ?? trace[${i}](${context});
`);
  return (event, {
    name,
    total = 0
  } = {}) => {
    if (!name)
      name = "anonymous";
    const reporter = event === "error" ? "reportErr" : "report";
    for (let i = 0;i < trace.length; i++)
      addFn(`
${reporter}${i} = trace${i}.${event}({id,event: '${event}',name: '${name}',begin: performance.now(),total: ${total}})
`);
    return {
      resolve() {
        for (let i = 0;i < trace.length; i++)
          addFn(`
${reporter}${i}.resolve()
`);
      },
      resolveChild(name2) {
        for (let i = 0;i < trace.length; i++)
          addFn(`${reporter}Child${i} = ${reporter}${i}.resolveChild?.shift()?.({id,event: '${event}',name: '${name2}',begin: performance.now()})
`);
        return (binding) => {
          for (let i = 0;i < trace.length; i++) {
            if (binding)
              addFn(`
                             	if (${binding} instanceof Error)
                    				${reporter}Child${i}?.(${binding})
                           		else
                             		${reporter}Child${i}?.()
`);
            else
              addFn(`${reporter}Child${i}?.()
`);
          }
        };
      }
    };
  };
};
var composeValidationFactory = ({
  injectResponse = "",
  normalize = false,
  validator
}) => ({
  composeValidation: (type47, value15 = `c.${type47}`) => `c.set.status = 422; throw new ValidationError('${type47}', validator.${type47}, ${value15})`,
  composeResponseValidation: (name = "r") => {
    let code = "\n" + injectResponse + "\n";
    code += `if(typeof ${name} === "object" && ${name} && ELYSIA_RESPONSE in ${name}) {
			c.set.status = ${name}[ELYSIA_RESPONSE]
			${name} = ${name}.response
		}

		const isResponse = ${name} instanceof Response

`;
    code += `switch(c.set.status) {
`;
    for (const [status, value15] of Object.entries(validator.response)) {
      code += `	case ${status}:
				if (!isResponse) {
`;
      if (normalize && "Clean" in value15 && !hasAdditionalProperties(value15))
        code += `${name} = validator.response['${status}'].Clean(${name})
`;
      code += `if(validator.response['${status}'].Check(${name}) === false) {
					c.set.status = 422

					throw new ValidationError('response', validator.response['${status}'], ${name})
				}

				c.set.status = ${status}
			}

			break

`;
    }
    code += "\n}\n";
    return code;
  }
});
var KindSymbol = Symbol.for("TypeBox.Kind");
var hasProperty = (expectedProperty, schema3) => {
  if (!schema3)
    return;
  if (schema3.type === "object") {
    const properties = schema3.properties;
    if (!properties)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (expectedProperty in property)
        return true;
      if (property.type === "object") {
        if (hasProperty(expectedProperty, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++) {
          if (hasProperty(expectedProperty, property.anyOf[i]))
            return true;
        }
      }
    }
    return false;
  }
  return expectedProperty in schema3;
};
var TransformSymbol = Symbol.for("TypeBox.Transform");
var hasTransform = (schema3) => {
  if (!schema3)
    return;
  if (schema3.type === "object" && schema3.properties) {
    const properties = schema3.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasTransform(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasTransform(property.anyOf[i]))
            return true;
      }
      const hasTransformSymbol = TransformSymbol in property;
      if (hasTransformSymbol)
        return true;
    }
    return false;
  }
  return TransformSymbol in schema3 || schema3.properties && TransformSymbol in schema3.properties;
};
var matchFnReturn = /(?:return|=>) \S+\(/g;
var isAsyncName = (v) => {
  const fn = v?.fn ?? v;
  return fn.constructor.name === "AsyncFunction";
};
var isAsync = (v) => {
  const fn = v?.fn ?? v;
  if (fn.constructor.name === "AsyncFunction")
    return true;
  const literal14 = fn.toString();
  if (literal14.includes("=> response.clone("))
    return false;
  if (literal14.includes("await"))
    return true;
  if (literal14.includes("async"))
    return true;
  return !!literal14.match(matchFnReturn);
};
var isGenerator = (v) => {
  const fn = v?.fn ?? v;
  return fn.constructor.name === "AsyncGeneratorFunction" || fn.constructor.name === "GeneratorFunction";
};
var composeHandler = ({
  app,
  path,
  method,
  localHook,
  hooks,
  validator,
  handler,
  allowMeta = false,
  inference
}) => {
  const isHandleFn = typeof handler === "function";
  if (!isHandleFn) {
    handler = mapResponse(handler, {
      headers: app.setHeaders ?? {}
    });
    if (hooks.parse.length === 0 && hooks.transform.length === 0 && hooks.beforeHandle.length === 0 && hooks.afterHandle.length === 0)
      return Function("a", `return function () { return a.clone() }`)(handler);
  }
  const handle = isHandleFn ? `handler(c)` : `handler`;
  const hasAfterResponse = hooks.afterResponse.length > 0;
  const hasTrace = hooks.trace.length > 0;
  let fnLiteral = "";
  inference = sucrose(Object.assign(localHook, {
    handler
  }), inference);
  if (inference.server)
    fnLiteral += `
Object.defineProperty(c, 'server', {
			get: function() { return getServer() }
		})
`;
  if (inference.body)
    fnLiteral += `let isParsing = false
`;
  validator.createBody?.();
  validator.createQuery?.();
  validator.createHeaders?.();
  validator.createParams?.();
  validator.createCookie?.();
  validator.createResponse?.();
  const hasQuery = inference.query || !!validator.query;
  const hasBody = method !== "$INTERNALWS" && method !== "GET" && method !== "HEAD" && (inference.body || !!validator.body || hooks.parse.length);
  const defaultHeaders = app.setHeaders;
  const hasDefaultHeaders = defaultHeaders && !!Object.keys(defaultHeaders).length;
  const hasHeaders = inference.headers || validator.headers;
  const hasCookie = inference.cookie || !!validator.cookie;
  const cookieValidator = hasCookie ? getCookieValidator({
    validator: validator.cookie,
    defaultConfig: app.config.cookie,
    dynamic: !!app.config.aot,
    config: validator.cookie?.config ?? {},
    models: app.definitions.type
  }) : undefined;
  const cookieMeta = cookieValidator?.config;
  let encodeCookie = "";
  if (cookieMeta?.sign) {
    if (!cookieMeta.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${method}) ${path}.`);
    const secret = !cookieMeta.secrets ? undefined : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
    encodeCookie += `const _setCookie = c.set.cookie
		if(_setCookie) {`;
    if (cookieMeta.sign === true) {
      encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${secret}')
			}`;
    } else
      for (const name of cookieMeta.sign) {
        encodeCookie += `if(_setCookie['${name}']?.value) { c.set.cookie['${name}'].value = await signCookie(_setCookie['${name}'].value, '${secret}') }
`;
      }
    encodeCookie += "}\n";
  }
  const normalize = app.config.normalize;
  const { composeValidation, composeResponseValidation } = composeValidationFactory({
    normalize,
    validator
  });
  if (hasHeaders) {
    fnLiteral += headersHasToJSON ? `c.headers = c.request.headers.toJSON()
` : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  }
  if (hasCookie) {
    const get = (name, defaultValue) => {
      const value15 = cookieMeta?.[name] ?? defaultValue;
      if (!value15)
        return typeof defaultValue === "string" ? `${name}: "${defaultValue}",` : `${name}: ${defaultValue},`;
      if (typeof value15 === "string")
        return `${name}: '${value15}',`;
      if (value15 instanceof Date)
        return `${name}: new Date(${value15.getTime()}),`;
      return `${name}: ${value15},`;
    };
    const options = cookieMeta ? `{
			secrets: ${cookieMeta.secrets !== undefined ? typeof cookieMeta.secrets === "string" ? `'${cookieMeta.secrets}'` : "[" + cookieMeta.secrets.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			sign: ${cookieMeta.sign === true ? true : cookieMeta.sign !== undefined ? "[" + cookieMeta.sign.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			${get("domain")}
			${get("expires")}
			${get("httpOnly")}
			${get("maxAge")}
			${get("path", "/")}
			${get("priority")}
			${get("sameSite")}
			${get("secure")}
		}` : "undefined";
    if (hasHeaders)
      fnLiteral += `
c.cookie = await parseCookie(c.set, c.headers.cookie, ${options})
`;
    else
      fnLiteral += `
c.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${options})
`;
  }
  if (hasQuery) {
    const destructured = [];
    if (validator.query && validator.query.schema.type === "object") {
      const properties = validator.query.schema.properties;
      if (!hasAdditionalProperties(validator.query))
        for (let [key, _value] of Object.entries(properties)) {
          let value15 = _value;
          if (value15 && TypeBoxSymbol.optional in value15 && value15.type === "array" && value15.items)
            value15 = value15.items;
          const { type: type47, anyOf } = value15;
          const isArray = type47 === "array" || anyOf?.some((v) => v.type === "string" && v.format === "ArrayString");
          destructured.push({
            key,
            isArray,
            isNestedObjectArray: isArray && value15.items?.type === "object" || !!value15.items?.anyOf?.some((x) => x.type === "object" || x.type === "array"),
            isObject: type47 === "object" || anyOf?.some((v) => v.type === "string" && v.format === "ArrayString"),
            anyOf: !!anyOf
          });
        }
    }
    if (!destructured.length) {
      fnLiteral += `if(c.qi === -1) {
				c.query = {}
			} else {
				c.query = parseQueryFromURL(c.url.slice(c.qi + 1))
			}`;
    } else {
      fnLiteral += `if(c.qi !== -1) {
				let url = '&' + c.url.slice(c.qi + 1)

				${destructured.map(({
        key,
        isArray,
        isObject: isObject2,
        isNestedObjectArray,
        anyOf
      }, index) => {
        const init = `${index === 0 ? "let" : ""} memory = url.indexOf('&${key}=')
							let a${index}
`;
        if (isArray)
          return init + (isNestedObjectArray ? `while (memory !== -1) {
											const start = memory + ${key.length + 2}
											memory = url.indexOf('&', start)

											if(a${index} === undefined)
												a${index} = ''
											else
												a${index} += ','

											let temp

											if(memory === -1) temp = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
											else temp = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											const charCode = temp.charCodeAt(0)
											if(charCode !== 91 && charCode !== 123)
												temp = '"' + temp + '"'

											a${index} += temp

											if(memory === -1) break

											memory = url.indexOf('&${key}=', memory)
											if(memory === -1) break
										}

										try {
										    if(a${index}.charCodeAt(0) === 91)
												a${index} = JSON.parse(a${index})
											else
												a${index} = JSON.parse('[' + a${index} + ']')
										} catch {}
` : `while (memory !== -1) {
											const start = memory + ${key.length + 2}
											memory = url.indexOf('&', start)

											if(a${index} === undefined)
												a${index} = []

											if(memory === -1) {
												a${index}.push(decodeURIComponent(url.slice(start)).replace(/\\+/g, ' '))
												break
											}
											else a${index}.push(decodeURIComponent(url.slice(start, memory)).replace(/\\+/g, ' '))

											memory = url.indexOf('&${key}=', memory)
											if(memory === -1) break
										}
`);
        if (isObject2)
          return init + `if (memory !== -1) {
										const start = memory + ${key.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${index} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else a${index} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

										if (a${index} !== undefined) {
											try {
												a${index} = JSON.parse(a${index})
											} catch {}
										}
									}`;
        return init + `if (memory !== -1) {
										const start = memory + ${key.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${index} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else {
											a${index} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											${anyOf ? `
											let deepMemory = url.indexOf('&${key}=', memory)

											if(deepMemory !== -1) {
												a${index} = [a${index}]
												let first = true

												while(true) {
													const start = deepMemory + ${key.length + 2}
													if(first)
														first = false
													else
														deepMemory = url.indexOf('&', start)

													let value
													if(deepMemory === -1) value = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
													else value = decodeURIComponent(url.slice(start, deepMemory).replace(/\\+/g, ' '))

													const vStart = value.charCodeAt(0)
													const vEnd = value.charCodeAt(value.length - 1)

													if((vStart === 91 && vEnd === 93) || (vStart === 123 && vEnd === 125))
														try {
															a${index}.push(JSON.parse(value))
														} catch {
														 	a${index}.push(value)
														}

													if(deepMemory === -1) break
												}
											}
												` : ""}
										}
									}`;
      }).join("\n")}

				c.query = {
					${destructured.map(({ key }, index) => `'${key}': a${index}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
    }
  }
  if (hasTrace)
    fnLiteral += "\nconst id = c[ELYSIA_REQUEST_ID]\n";
  const report = createReport({
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  fnLiteral += "\ntry {\n";
  const isAsyncHandler = typeof handler === "function" && isAsync(handler);
  const saveResponse = hasTrace || hooks.afterResponse.length > 0 ? "c.response = " : "";
  const maybeAsync = hasCookie || hasBody || isAsyncHandler || hooks.parse.length > 0 || hooks.afterHandle.some(isAsync) || hooks.beforeHandle.some(isAsync) || hooks.transform.some(isAsync) || hooks.mapResponse.some(isAsync);
  const maybeStream = (typeof handler === "function" ? isGenerator(handler) : false) || hooks.beforeHandle.some(isGenerator) || hooks.afterHandle.some(isGenerator) || hooks.transform.some(isGenerator);
  const hasSet = inference.cookie || inference.set || hasHeaders || hasTrace || validator.response || isHandleFn && hasDefaultHeaders || maybeStream;
  const requestMapper = `, c.request`;
  fnLiteral += `c.route = \`${path}\`
`;
  const parseReporter = report("parse", {
    total: hooks.parse.length
  });
  if (hasBody) {
    const hasBodyInference = hooks.parse.length || inference.body || validator.body;
    fnLiteral += "isParsing = true\n";
    if (hooks.type && !hooks.parse.length) {
      switch (hooks.type) {
        case "json":
        case "application/json":
          if (isOptional(validator.body))
            fnLiteral += `try { c.body = await c.request.json() } catch {}`;
          else
            fnLiteral += `c.body = await c.request.json()`;
          break;
        case "text":
        case "text/plain":
          fnLiteral += `c.body = await c.request.text()
`;
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          fnLiteral += `c.body = parseQuery(await c.request.text())
`;
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          fnLiteral += `c.body = await c.request.arrayBuffer()
`;
          break;
        case "formdata":
        case "multipart/form-data":
          fnLiteral += `c.body = {}
`;
          if (isOptional(validator.body))
            fnLiteral += `let form; try { form = await c.request.formData() } catch {}`;
          else
            fnLiteral += `const form = await c.request.formData()`;
          fnLiteral += `
if(form)
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						} else form = {}
`;
          break;
      }
    } else if (hasBodyInference) {
      fnLiteral += "\n";
      fnLiteral += hasHeaders ? `let contentType = c.headers['content-type']` : `let contentType = c.request.headers.get('content-type')`;
      fnLiteral += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)

					c.contentType = contentType
`;
      if (hooks.parse.length) {
        fnLiteral += `let used = false
`;
        const reporter = report("parse", {
          total: hooks.parse.length
        });
        for (let i = 0;i < hooks.parse.length; i++) {
          const endUnit = reporter.resolveChild(hooks.parse[i].fn.name);
          const name = `bo${i}`;
          if (i !== 0)
            fnLiteral += `if(!used) {
`;
          fnLiteral += `let ${name} = parse[${i}](c, contentType)
`;
          fnLiteral += `if(${name} instanceof Promise) ${name} = await ${name}
`;
          fnLiteral += `if(${name} !== undefined) { c.body = ${name}; used = true }
`;
          endUnit();
          if (i !== 0)
            fnLiteral += `}`;
        }
        reporter.resolve();
      }
      fnLiteral += "\ndelete c.contentType\n";
      if (hooks.parse.length)
        fnLiteral += `if (!used) {`;
      if (hooks.type && !Array.isArray(hooks.type)) {
        switch (hooks.type) {
          case "json":
          case "application/json":
            if (isOptional(validator.body))
              fnLiteral += `try { c.body = await c.request.json() } catch {}`;
            else
              fnLiteral += `c.body = await c.request.json()`;
            break;
          case "text":
          case "text/plain":
            fnLiteral += `c.body = await c.request.text()
`;
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            fnLiteral += `c.body = parseQuery(await c.request.text())
`;
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            fnLiteral += `c.body = await c.request.arrayBuffer()
`;
            break;
          case "formdata":
          case "multipart/form-data":
            fnLiteral += `c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}
`;
            break;
        }
      } else {
        fnLiteral += `
					switch (contentType) {
						case 'application/json':
							${isOptional(validator.body) ? "try { c.body = await c.request.json() } catch {}" : "c.body = await c.request.json()"}
							break

						case 'text/plain':
							c.body = await c.request.text()
							break

						case 'application/x-www-form-urlencoded':
							c.body = parseQuery(await c.request.text())
							break

						case 'application/octet-stream':
							c.body = await c.request.arrayBuffer();
							break

						case 'multipart/form-data':
							c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}

							break
					}`;
      }
      if (hooks.parse.length)
        fnLiteral += `}`;
      fnLiteral += "}\n";
    }
    fnLiteral += "\nisParsing = false\n";
  }
  parseReporter.resolve();
  if (hooks?.transform) {
    const reporter = report("transform", {
      total: hooks.transform.length
    });
    if (hooks.transform.length)
      fnLiteral += "\nlet transformed\n";
    for (let i = 0;i < hooks.transform.length; i++) {
      const transform7 = hooks.transform[i];
      const endUnit = reporter.resolveChild(transform7.fn.name);
      fnLiteral += isAsync(transform7) ? `transformed = await transform[${i}](c)
` : `transformed = transform[${i}](c)
`;
      if (transform7.subType === "mapDerive")
        fnLiteral += `if(transformed?.[ELYSIA_RESPONSE])
					throw transformed
				else {
					transformed.request = c.request
					transformed.store = c.store
					transformed.qi = c.qi
					transformed.path = c.path
					transformed.url = c.url
					transformed.redirect = c.redirect
					transformed.set = c.set
					transformed.error = c.error

					c = transformed
			}`;
      else
        fnLiteral += `if(transformed?.[ELYSIA_RESPONSE])
					throw transformed
				else
					Object.assign(c, transformed)
`;
      endUnit();
    }
    reporter.resolve();
  }
  if (validator) {
    fnLiteral += "\n";
    if (validator.headers) {
      if (normalize && "Clean" in validator.headers && !hasAdditionalProperties(validator.headers))
        fnLiteral += "c.headers = validator.headers.Clean(c.headers);\n";
      if (hasProperty("default", validator.headers.schema))
        for (const [key, value15] of Object.entries(exports_value2.Default(validator.headers.schema, {}))) {
          const parsed = typeof value15 === "object" ? JSON.stringify(value15) : typeof value15 === "string" ? `'${value15}'` : value15;
          if (parsed !== undefined)
            fnLiteral += `c.headers['${key}'] ??= ${parsed}
`;
        }
      if (isOptional(validator.headers))
        fnLiteral += `if(isNotEmpty(c.headers)) {`;
      fnLiteral += `if(validator.headers.Check(c.headers) === false) {
				${composeValidation("headers")}
			}`;
      if (hasTransform(validator.headers.schema))
        fnLiteral += `c.headers = validator.headers.Decode(c.headers)
`;
      if (isOptional(validator.headers))
        fnLiteral += "}";
    }
    if (validator.params) {
      if (hasProperty("default", validator.params.schema))
        for (const [key, value15] of Object.entries(exports_value2.Default(validator.params.schema, {}))) {
          const parsed = typeof value15 === "object" ? JSON.stringify(value15) : typeof value15 === "string" ? `'${value15}'` : value15;
          if (parsed !== undefined)
            fnLiteral += `c.params['${key}'] ??= ${parsed}
`;
        }
      fnLiteral += `if(validator.params.Check(c.params) === false) {
				${composeValidation("params")}
			}`;
      if (hasTransform(validator.params.schema))
        fnLiteral += `
c.params = validator.params.Decode(c.params)
`;
    }
    if (validator.query) {
      if (normalize && "Clean" in validator.query && !hasAdditionalProperties(validator.query))
        fnLiteral += "c.query = validator.query.Clean(c.query);\n";
      if (hasProperty("default", validator.query.schema))
        for (const [key, value15] of Object.entries(exports_value2.Default(validator.query.schema, {}))) {
          const parsed = typeof value15 === "object" ? JSON.stringify(value15) : typeof value15 === "string" ? `'${value15}'` : value15;
          if (parsed !== undefined)
            fnLiteral += `if(c.query['${key}'] === undefined) c.query['${key}'] = ${parsed}
`;
        }
      if (isOptional(validator.query))
        fnLiteral += `if(isNotEmpty(c.query)) {`;
      fnLiteral += `if(validator.query.Check(c.query) === false) {
          		${composeValidation("query")}
			}`;
      if (hasTransform(validator.query.schema))
        fnLiteral += `
c.query = validator.query.Decode(Object.assign({}, c.query))
`;
      if (isOptional(validator.query))
        fnLiteral += `}`;
    }
    if (validator.body) {
      if (normalize && "Clean" in validator.body && !hasAdditionalProperties(validator.body))
        fnLiteral += "c.body = validator.body.Clean(c.body);\n";
      const doesHaveTransform = hasTransform(validator.body.schema);
      if (doesHaveTransform || isOptional(validator.body))
        fnLiteral += `
const isNotEmptyObject = c.body && (typeof c.body === "object" && isNotEmpty(c.body))
`;
      if (hasProperty("default", validator.body.schema)) {
        const value15 = exports_value2.Default(validator.body.schema, validator.body.schema.type === "object" ? {} : undefined);
        const parsed = typeof value15 === "object" ? JSON.stringify(value15) : typeof value15 === "string" ? `'${value15}'` : value15;
        fnLiteral += `if(validator.body.Check(c.body) === false) {
					if (typeof c.body === 'object') {
						c.body = Object.assign(${parsed}, c.body)
					} else { c.body = ${parsed} }`;
        if (isOptional(validator.body))
          fnLiteral += `
					    if(isNotEmptyObject && validator.body.Check(c.body) === false) {
            				${composeValidation("body")}
             			}
                    }`;
        else
          fnLiteral += `
    				if(validator.body.Check(c.body) === false) {
        				${composeValidation("body")}
         			}
                }`;
      } else {
        if (isOptional(validator.body))
          fnLiteral += `if(isNotEmptyObject && validator.body.Check(c.body) === false) {
         			${composeValidation("body")}
          		}`;
        else
          fnLiteral += `if(validator.body.Check(c.body) === false) {
         			${composeValidation("body")}
          		}`;
      }
      if (doesHaveTransform)
        fnLiteral += `
if(isNotEmptyObject) c.body = validator.body.Decode(c.body)
`;
    }
    if (isNotEmpty(cookieValidator?.schema?.properties ?? cookieValidator?.schema?.schema ?? {})) {
      fnLiteral += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value
`;
      if (hasProperty("default", cookieValidator.schema))
        for (const [key, value15] of Object.entries(exports_value2.Default(cookieValidator.schema, {}))) {
          fnLiteral += `cookieValue['${key}'] = ${typeof value15 === "object" ? JSON.stringify(value15) : value15}
`;
        }
      if (isOptional(validator.cookie))
        fnLiteral += `if(isNotEmpty(c.cookie)) {`;
      fnLiteral += `if(validator.cookie.Check(cookieValue) === false) {
				${composeValidation("cookie", "cookieValue")}
			}`;
      if (hasTransform(validator.cookie.schema))
        fnLiteral += `
for(const [key, value] of Object.entries(validator.cookie.Decode(cookieValue)))
					c.cookie[key].value = value
`;
      if (isOptional(validator.cookie))
        fnLiteral += `}`;
    }
  }
  if (hooks?.beforeHandle) {
    const reporter = report("beforeHandle", {
      total: hooks.beforeHandle.length
    });
    let hasResolve = false;
    for (let i = 0;i < hooks.beforeHandle.length; i++) {
      const beforeHandle = hooks.beforeHandle[i];
      const endUnit = reporter.resolveChild(beforeHandle.fn.name);
      const returning = hasReturn(beforeHandle);
      const isResolver = beforeHandle.subType === "resolve" || beforeHandle.subType === "mapResolve";
      if (isResolver) {
        if (!hasResolve) {
          hasResolve = true;
          fnLiteral += "\nlet resolved\n";
        }
        fnLiteral += isAsync(beforeHandle) ? `resolved = await beforeHandle[${i}](c);
` : `resolved = beforeHandle[${i}](c);
`;
        if (beforeHandle.subType === "mapResolve")
          fnLiteral += `if(resolved[ELYSIA_RESPONSE])
						throw resolved
					else {
						resolved.request = c.request
						resolved.store = c.store
						resolved.qi = c.qi
						resolved.path = c.path
						resolved.url = c.url
						resolved.redirect = c.redirect
						resolved.set = c.set
						resolved.error = c.error

						c = resolved
					}`;
        else
          fnLiteral += `if(resolved[ELYSIA_RESPONSE])
						throw resolved
					else
						Object.assign(c, resolved)
`;
      } else if (!returning) {
        fnLiteral += isAsync(beforeHandle) ? `await beforeHandle[${i}](c);
` : `beforeHandle[${i}](c);
`;
        endUnit();
      } else {
        fnLiteral += isAsync(beforeHandle) ? `be = await beforeHandle[${i}](c);
` : `be = beforeHandle[${i}](c);
`;
        endUnit("be");
        fnLiteral += `if(be !== undefined) {
`;
        reporter.resolve();
        if (hooks.afterHandle?.length) {
          report("handle", {
            name: isHandleFn ? handler.name : undefined
          }).resolve();
          const reporter2 = report("afterHandle", {
            total: hooks.afterHandle.length
          });
          for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
            const hook = hooks.afterHandle[i2];
            const returning2 = hasReturn(hook);
            const endUnit2 = reporter2.resolveChild(hook.fn.name);
            fnLiteral += `c.response = be
`;
            if (!returning2) {
              fnLiteral += isAsync(hook.fn) ? `await afterHandle[${i2}](c, be)
` : `afterHandle[${i2}](c, be)
`;
            } else {
              fnLiteral += isAsync(hook.fn) ? `af = await afterHandle[${i2}](c)
` : `af = afterHandle[${i2}](c)
`;
              fnLiteral += `if(af !== undefined) { c.response = be = af }
`;
            }
            endUnit2("af");
          }
          reporter2.resolve();
        }
        if (validator.response)
          fnLiteral += composeResponseValidation("be");
        const mapResponseReporter = report("mapResponse", {
          total: hooks.mapResponse.length
        });
        if (hooks.mapResponse.length) {
          fnLiteral += `
c.response = be
`;
          for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
            const mapResponse2 = hooks.mapResponse[i2];
            const endUnit2 = mapResponseReporter.resolveChild(mapResponse2.fn.name);
            fnLiteral += `
if(mr === undefined) {
							mr = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i2}](c)
							if(mr !== undefined) be = c.response = mr
						}
`;
            endUnit2();
          }
        }
        mapResponseReporter.resolve();
        fnLiteral += encodeCookie;
        fnLiteral += `return mapEarlyResponse(${saveResponse} be, c.set ${requestMapper})}
`;
      }
    }
    reporter.resolve();
  }
  if (hooks?.afterHandle.length) {
    const handleReporter = report("handle", {
      name: isHandleFn ? handler.name : undefined
    });
    if (hooks.afterHandle.length)
      fnLiteral += isAsyncHandler ? `let r = c.response = await ${handle};
` : `let r = c.response = ${handle};
`;
    else
      fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
    handleReporter.resolve();
    const reporter = report("afterHandle", {
      total: hooks.afterHandle.length
    });
    for (let i = 0;i < hooks.afterHandle.length; i++) {
      const hook = hooks.afterHandle[i];
      const returning = hasReturn(hook);
      const endUnit = reporter.resolveChild(hook.fn.name);
      if (!returning) {
        fnLiteral += isAsync(hook.fn) ? `await afterHandle[${i}](c)
` : `afterHandle[${i}](c)
`;
        endUnit();
      } else {
        fnLiteral += isAsync(hook.fn) ? `af = await afterHandle[${i}](c)
` : `af = afterHandle[${i}](c)
`;
        endUnit("af");
        if (validator.response) {
          fnLiteral += `if(af !== undefined) {`;
          reporter.resolve();
          fnLiteral += composeResponseValidation("af");
          fnLiteral += `c.response = af }`;
        } else {
          fnLiteral += `if(af !== undefined) {`;
          reporter.resolve();
          fnLiteral += `c.response = af}
`;
        }
      }
    }
    reporter.resolve();
    fnLiteral += `r = c.response
`;
    if (validator.response)
      fnLiteral += composeResponseValidation();
    fnLiteral += encodeCookie;
    const mapResponseReporter = report("mapResponse", {
      total: hooks.mapResponse.length
    });
    if (hooks.mapResponse.length) {
      for (let i = 0;i < hooks.mapResponse.length; i++) {
        const mapResponse2 = hooks.mapResponse[i];
        const endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
        fnLiteral += `
mr = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i}](c)
				if(mr !== undefined) r = c.response = mr
`;
        endUnit();
      }
    }
    mapResponseReporter.resolve();
    if (hasSet)
      fnLiteral += `return mapResponse(${saveResponse} r, c.set ${requestMapper})
`;
    else
      fnLiteral += `return mapCompactResponse(${saveResponse} r ${requestMapper})
`;
  } else {
    const handleReporter = report("handle", {
      name: isHandleFn ? handler.name : undefined
    });
    if (validator.response || hooks.mapResponse.length) {
      fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
      handleReporter.resolve();
      if (validator.response)
        fnLiteral += composeResponseValidation();
      report("afterHandle").resolve();
      const mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse.length
      });
      if (hooks.mapResponse.length) {
        fnLiteral += "\nc.response = r\n";
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i];
          const endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `
if(mr === undefined) {
						mr = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i}](c)
    					if(mr !== undefined) r = c.response = mr
					}
`;
          endUnit();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += encodeCookie;
      if (handler instanceof Response) {
        fnLiteral += inference.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${saveResponse} ${handle}.clone(), c.set ${requestMapper})
				else
					return ${handle}.clone()` : `return ${handle}.clone()`;
        fnLiteral += "\n";
      } else if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse} r, c.set ${requestMapper})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse} r ${requestMapper})
`;
    } else if (hasCookie || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
      handleReporter.resolve();
      report("afterHandle").resolve();
      const mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse.length
      });
      if (hooks.mapResponse.length) {
        fnLiteral += "\nc.response = r\n";
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i];
          const endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `
if(mr === undefined) {
							mr = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i}](c)
    						if(mr !== undefined) r = c.response = mr
						}
`;
          endUnit();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += encodeCookie;
      if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse} r, c.set ${requestMapper})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse} r ${requestMapper})
`;
    } else {
      handleReporter.resolve();
      const handled = isAsyncHandler ? `await ${handle}` : handle;
      report("afterHandle").resolve();
      if (handler instanceof Response) {
        fnLiteral += inference.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${saveResponse} ${handle}.clone(), c.set ${requestMapper})
				else
					return ${handle}.clone()` : `return ${handle}.clone()`;
        fnLiteral += "\n";
      } else if (hasSet)
        fnLiteral += `return mapResponse(${saveResponse} ${handled}, c.set ${requestMapper})
`;
      else
        fnLiteral += `return mapCompactResponse(${saveResponse} ${handled} ${requestMapper})
`;
    }
  }
  fnLiteral += `
} catch(error) {`;
  if (hasBody)
    fnLiteral += `
if(isParsing) error = new ParseError()
`;
  if (!maybeAsync)
    fnLiteral += `
return (async () => {
`;
  fnLiteral += `
const set = c.set
if (!set.status || set.status < 300) set.status = error?.status || 500
`;
  if (hasTrace)
    for (let i = 0;i < hooks.trace.length; i++)
      fnLiteral += `report${i}?.resolve(error);reportChild${i}?.(error);
`;
  const errorReporter = report("error", {
    total: hooks.error.length
  });
  if (hooks.error.length) {
    fnLiteral += `
				c.error = error
				if(error instanceof TypeBoxError) {
					c.code = "VALIDATION"
					c.set.status = 422
				} else
					c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
				let er
			`;
    for (let i = 0;i < hooks.error.length; i++) {
      const endUnit = errorReporter.resolveChild(hooks.error[i].fn.name);
      if (isAsync(hooks.error[i]))
        fnLiteral += `
er = await handleErrors[${i}](c)
`;
      else
        fnLiteral += `
er = handleErrors[${i}](c)
if (er instanceof Promise) er = await er
`;
      endUnit();
      const mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse.length
      });
      if (hooks.mapResponse.length) {
        for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
          const mapResponse2 = hooks.mapResponse[i2];
          const endUnit2 = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `
c.response = er

							er = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i2}](c)
							if(er instanceof Promise) er = await er
`;
          endUnit2();
        }
      }
      mapResponseReporter.resolve();
      fnLiteral += `er = mapEarlyResponse(er, set ${requestMapper})
`;
      fnLiteral += `if (er) {`;
      if (hasTrace) {
        for (let i2 = 0;i2 < hooks.trace.length; i2++)
          fnLiteral += `
report${i2}.resolve()
`;
        errorReporter.resolve();
      }
      fnLiteral += `return er
}
`;
    }
  }
  errorReporter.resolve();
  fnLiteral += `return handleError(c, error, true)
`;
  if (!maybeAsync)
    fnLiteral += "})()";
  fnLiteral += "}";
  if (hasAfterResponse || hasTrace) {
    fnLiteral += ` finally { `;
    if (!maybeAsync)
      fnLiteral += ";(async () => {";
    const reporter = report("afterResponse", {
      total: hooks.afterResponse.length
    });
    if (hasAfterResponse) {
      for (let i = 0;i < hooks.afterResponse.length; i++) {
        const endUnit = reporter.resolveChild(hooks.afterResponse[i].fn.name);
        fnLiteral += `
await afterResponse[${i}](c);
`;
        endUnit();
      }
    }
    reporter.resolve();
    if (!maybeAsync)
      fnLiteral += "})();";
    fnLiteral += `}`;
  }
  fnLiteral = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			afterResponse,
			trace: _trace
		},
		validator,
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery,
			parseQueryFromURL,
			isNotEmpty
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError,
			ParseError
		},
		schema,
		definitions,
		ERROR_CODE,
		parseCookie,
		signCookie,
		decodeURIComponent,
		ELYSIA_RESPONSE,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer,
		TypeBoxError
	} = hooks

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)

	return ${maybeAsync ? "async" : ""} function handle(c) {
		${hooks.beforeHandle.length ? "let be" : ""}
		${hooks.afterHandle.length ? "let af" : ""}
		${hooks.mapResponse.length ? "let mr" : ""}

		${allowMeta ? "c.schema = schema; c.defs = definitions" : ""}
		${fnLiteral}
	}`;
  try {
    return Function("hooks", fnLiteral)({
      handler,
      hooks: lifeCycleToFn(hooks),
      validator,
      handleError: app.handleError,
      utils: {
        mapResponse,
        mapCompactResponse,
        mapEarlyResponse,
        parseQuery,
        parseQueryFromURL,
        isNotEmpty
      },
      error: {
        NotFoundError,
        ValidationError,
        InternalServerError,
        ParseError
      },
      schema: app.router.history,
      definitions: app.definitions.type,
      ERROR_CODE,
      parseCookie,
      signCookie,
      decodeURIComponent: import_fast_decode_uri_component3.default,
      ELYSIA_RESPONSE,
      ELYSIA_TRACE,
      ELYSIA_REQUEST_ID,
      getServer: () => app.getServer(),
      TypeBoxError
    });
  } catch {
    const debugHooks = lifeCycleToFn(hooks);
    console.log("[Composer] failed to generate optimized handler");
    console.log("Please report the following to SaltyAom privately as it may include sensitive information about your codebase:");
    console.log("---");
    console.log({
      handler: typeof handler === "function" ? handler.toString() : handler,
      hooks: {
        ...debugHooks,
        transform: debugHooks?.transform?.map?.((x) => x.toString()),
        resolve: debugHooks?.resolve?.map?.((x) => x.toString()),
        beforeHandle: debugHooks?.beforeHandle?.map?.((x) => x.toString()),
        afterHandle: debugHooks?.afterHandle?.map?.((x) => x.toString()),
        mapResponse: debugHooks?.mapResponse?.map?.((x) => x.toString()),
        parse: debugHooks?.parse?.map?.((x) => x.toString()),
        error: debugHooks?.error?.map?.((x) => x.toString()),
        afterResponse: debugHooks?.afterResponse?.map?.((x) => x.toString()),
        stop: debugHooks?.stop?.map?.((x) => x.toString())
      },
      validator,
      definitions: app.definitions.type
    });
    console.log("---");
    process.exit(1);
  }
};
var composeGeneralHandler = (app) => {
  const standardHostname = app.config.handler?.standardHostname ?? true;
  let decoratorsLiteral = "";
  let fnLiteral = "";
  const defaultHeaders = app.setHeaders;
  for (const key of Object.keys(app.singleton.decorator))
    decoratorsLiteral += `,${key}: app.singleton.decorator.${key}`;
  const router = app.router;
  const hasTrace = app.event.trace.length > 0;
  let findDynamicRoute = `
	const route = router.find(request.method, path) ${router.http.root.ALL ? '?? router.find("ALL", path)' : ""}

	if (route === null)
		return ${app.event.error.length ? `app.handleError(ctx, notFound)` : app.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : `error404.clone()`}

	ctx.params = route.params
`;
  findDynamicRoute += `if(route.store.handler) return route.store.handler(ctx)
	return (route.store.handler = route.store.compile())(ctx)
`;
  let switchMap = ``;
  for (const [path, { code, all, static: staticFn }] of Object.entries(router.static.http.map)) {
    if (staticFn)
      switchMap += `case '${path}':
switch(request.method) {
${code}
${all ?? `default: break map`}}

`;
    switchMap += `case '${path}':
switch(request.method) {
${code}
${all ?? `default: break map`}}

`;
  }
  const maybeAsync = app.event.request.some(isAsync);
  fnLiteral += `const {
		app,
		mapEarlyResponse,
		NotFoundError,
		randomId,
		handleError,
		error,
		redirect,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer
	} = data

	const store = app.singleton.store
	const staticRouter = app.router.static.http
	const st = staticRouter.handlers
	const wsRouter = app.router.ws
	const router = app.router.http
	const trace = app.event.trace.map(x => typeof x === 'function' ? x : x.fn)

	const notFound = new NotFoundError()
	const hoc = app.extender.higherOrderFunctions.map(x => x.fn)

	${app.event.request.length ? `const onRequest = app.event.request.map(x => x.fn)` : ""}
	${app.event.error.length ? "" : `
const error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });
`}

	${app.event.trace.length ? `const ${app.event.trace.map((_, i) => `tr${i} = app.event.trace[${i}].fn`).join(",")}` : ""}

	${maybeAsync ? "async" : ""} function map(request) {
`;
  if (app.event.request.length)
    fnLiteral += `let re`;
  fnLiteral += `
const url = request.url
		const s = url.indexOf('/', ${standardHostname ? 11 : 7})
		const qi = url.indexOf('?', s + 1)
		let path
		if(qi === -1)
			path = url.substring(s)
		else
			path = url.substring(s, qi)
`;
  fnLiteral += `${hasTrace ? "const id = randomId()" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			url,
			redirect,
			set: {
				headers: ${Object.keys(defaultHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			},
			error
			${app.inference.server ? `, get server() {
							return getServer()
						}` : ""}
			${hasTrace ? ",[ELYSIA_REQUEST_ID]: id" : ""}
			${decoratorsLiteral}
		}
`;
  if (app.event.trace.length)
    fnLiteral += `
ctx[ELYSIA_TRACE] = [${app.event.trace.map((_, i) => `tr${i}(ctx)`).join(",")}]
`;
  const report = createReport({
    context: "ctx",
    trace: app.event.trace,
    addFn(word) {
      fnLiteral += word;
    }
  });
  const reporter = report("request", {
    attribute: "ctx",
    total: app.event.request.length
  });
  if (app.event.request.length) {
    fnLiteral += `
 try {
`;
    for (let i = 0;i < app.event.request.length; i++) {
      const hook = app.event.request[i];
      const withReturn = hasReturn(hook);
      const maybeAsync2 = isAsync(hook);
      const endUnit = reporter.resolveChild(app.event.request[i].fn.name);
      if (withReturn) {
        fnLiteral += `re = mapEarlyResponse(
					${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx),
					ctx.set,
					request
				)
`;
        endUnit("re");
        fnLiteral += `if(re !== undefined) return re
`;
      } else {
        fnLiteral += `${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx)
`;
        endUnit();
      }
    }
    fnLiteral += `} catch (error) {
			return app.handleError(ctx, error)
		}`;
  }
  reporter.resolve();
  const wsPaths = app.router.static.ws;
  const wsRouter = app.router.ws;
  if (Object.keys(wsPaths).length || wsRouter.history.length) {
    fnLiteral += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (const [path, index] of Object.entries(wsPaths)) {
      fnLiteral += `
					case '${path}':
						if(request.headers.get('upgrade') === 'websocket')
							return st[${index}](ctx)

						break`;
    }
    fnLiteral += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							if(route.store.handler)
							    return route.store.handler(ctx)

							return (route.store.handler = route.store.compile())(ctx)
						}
					}

					break
			}
		}
`;
  }
  fnLiteral += `
		map: switch(path) {
			${switchMap}

			default:
				break
		}

		${findDynamicRoute}
	}
`;
  if (app.extender.higherOrderFunctions.length) {
    let handler = "map";
    for (let i = 0;i < app.extender.higherOrderFunctions.length; i++)
      handler = `hoc[${i}](${handler}, request)`;
    fnLiteral += `return function hocMap(request) { return ${handler}(request) }`;
  } else
    fnLiteral += `return map`;
  const handleError = composeErrorHandler(app);
  app.handleError = handleError;
  return Function("data", fnLiteral)({
    app,
    mapEarlyResponse,
    NotFoundError,
    randomId,
    handleError,
    error: error22,
    redirect,
    ELYSIA_TRACE,
    ELYSIA_REQUEST_ID,
    getServer: () => app.getServer()
  });
};
var composeErrorHandler = (app) => {
  const hooks = app.event;
  let fnLiteral = "";
  fnLiteral += `const {
		app: { event: { error: onErrorContainer, afterResponse: resContainer, mapResponse: _onMapResponse, trace: _trace } },
		mapResponse,
		ERROR_CODE,
		ELYSIA_RESPONSE,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID
	} = inject

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)
	const onMapResponse = []

	for(let i = 0; i < _onMapResponse.length; i++)
		onMapResponse.push(_onMapResponse[i].fn ?? _onMapResponse[i])

	delete _onMapResponse

	const onError = onErrorContainer.map(x => x.fn)
	const res = resContainer.map(x => x.fn)

	return ${app.event.error.find(isAsync) || app.event.mapResponse.find(isAsync) ? "async" : ""} function(context, error, skipGlobal) {`;
  const hasTrace = app.event.trace.length > 0;
  if (hasTrace)
    fnLiteral += "\nconst id = context[ELYSIA_REQUEST_ID]\n";
  const report = createReport({
    context: "context",
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  fnLiteral += `
		const set = context.set
		let r

		if(!context.code)
			context.code = error.code ?? error[ERROR_CODE]

		if(!(context.error instanceof Error))
			context.error = error

		if(typeof error === "object" && error && ELYSIA_RESPONSE in error) {
			error.status = error[ELYSIA_RESPONSE]
			error.message = error.response
		}
`;
  const saveResponse = hasTrace || hooks.afterResponse.length > 0 || hooks.afterResponse.length > 0 ? "context.response = " : "";
  for (let i = 0;i < app.event.error.length; i++) {
    const handler = app.event.error[i];
    const response = `${isAsync(handler) ? "await " : ""}onError[${i}](context)`;
    fnLiteral += "\nif(skipGlobal !== true) {\n";
    if (hasReturn(handler)) {
      fnLiteral += `r = ${response}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r[ELYSIA_RESPONSE]) {
					error.status = error[ELYSIA_RESPONSE]
					error.message = error.response
				}

				if(set.status === 200) set.status = error.status
`;
      const mapResponseReporter2 = report("mapResponse", {
        total: hooks.mapResponse.length,
        name: "context"
      });
      if (hooks.mapResponse.length) {
        for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
          const mapResponse2 = hooks.mapResponse[i2];
          const endUnit = mapResponseReporter2.resolveChild(mapResponse2.fn.name);
          fnLiteral += `
context.response = r
						r = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i2}](context)
`;
          endUnit();
        }
      }
      mapResponseReporter2.resolve();
      fnLiteral += `return mapResponse(${saveResponse} r, set, context.request)}
`;
    } else
      fnLiteral += response + "\n";
    fnLiteral += "\n}\n";
  }
  fnLiteral += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 422
		return new Response(
			error.message,
			{
				headers: Object.assign(
					{ 'content-type': 'application/json'},
					set.headers
				),
				status: set.status
			}
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)
`;
  const mapResponseReporter = report("mapResponse", {
    total: hooks.mapResponse.length,
    name: "context"
  });
  if (hooks.mapResponse.length) {
    for (let i = 0;i < hooks.mapResponse.length; i++) {
      const mapResponse2 = hooks.mapResponse[i];
      const endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
      fnLiteral += `
context.response = error
			error = ${isAsyncName(mapResponse2) ? "await" : ""} onMapResponse[${i}](context)
`;
      endUnit();
    }
  }
  mapResponseReporter.resolve();
  fnLiteral += `
return mapResponse(${saveResponse} error, set, context.request)
}
}`;
  return Function("inject", fnLiteral)({
    app,
    mapResponse,
    ERROR_CODE,
    ELYSIA_RESPONSE,
    ELYSIA_TRACE,
    ELYSIA_REQUEST_ID
  });
};
var createDynamicHandler = (app) => async (request) => {
  const url = request.url, s = url.indexOf("/", 11), qi = url.indexOf("?", s + 1), path = qi === -1 ? url.substring(s) : url.substring(s, qi);
  const set2 = {
    cookie: {},
    status: 200,
    headers: {}
  };
  const context = Object.assign({}, app.singleton.decorator, {
    set: set2,
    store: app.singleton.store,
    request,
    path,
    qi,
    redirect
  });
  try {
    for (let i = 0;i < app.event.request.length; i++) {
      const onRequest = app.event.request[i].fn;
      let response2 = onRequest(context);
      if (response2 instanceof Promise)
        response2 = await response2;
      response2 = mapEarlyResponse(response2, set2);
      if (response2)
        return context.response = response2;
    }
    const handler = app.router.dynamic.find(request.method, path) ?? app.router.dynamic.find("ALL", path);
    if (!handler)
      throw new NotFoundError;
    const { handle, hooks, validator, content } = handler.store;
    let body;
    if (request.method !== "GET" && request.method !== "HEAD") {
      if (content) {
        switch (content) {
          case "application/json":
            body = await request.json();
            break;
          case "text/plain":
            body = await request.text();
            break;
          case "application/x-www-form-urlencoded":
            body = parseQuery(await request.text());
            break;
          case "application/octet-stream":
            body = await request.arrayBuffer();
            break;
          case "multipart/form-data":
            body = {};
            const form2 = await request.formData();
            for (const key of form2.keys()) {
              if (body[key])
                continue;
              const value15 = form2.getAll(key);
              if (value15.length === 1)
                body[key] = value15[0];
              else
                body[key] = value15;
            }
            break;
        }
      } else {
        let contentType = request.headers.get("content-type");
        if (contentType) {
          const index = contentType.indexOf(";");
          if (index !== -1)
            contentType = contentType.slice(0, index);
          context.contentType = contentType;
          for (let i = 0;i < hooks.parse.length; i++) {
            const hook = hooks.parse[i].fn;
            let temp = hook(context, contentType);
            if (temp instanceof Promise)
              temp = await temp;
            if (temp) {
              body = temp;
              break;
            }
          }
          delete context.contentType;
          if (body === undefined) {
            switch (contentType) {
              case "application/json":
                body = await request.json();
                break;
              case "text/plain":
                body = await request.text();
                break;
              case "application/x-www-form-urlencoded":
                body = parseQuery(await request.text());
                break;
              case "application/octet-stream":
                body = await request.arrayBuffer();
                break;
              case "multipart/form-data":
                body = {};
                const form2 = await request.formData();
                for (const key of form2.keys()) {
                  if (body[key])
                    continue;
                  const value15 = form2.getAll(key);
                  if (value15.length === 1)
                    body[key] = value15[0];
                  else
                    body[key] = value15;
                }
                break;
            }
          }
        }
      }
    }
    context.body = body;
    context.params = handler?.params || undefined;
    context.query = qi === -1 ? {} : parseQueryFromURL(url.substring(qi + 1));
    context.headers = {};
    for (const [key, value15] of request.headers.entries())
      context.headers[key] = value15;
    const cookieMeta = Object.assign({}, app.config?.cookie, validator?.cookie?.config);
    const cookieHeaderValue = request.headers.get("cookie");
    context.cookie = await parseCookie(context.set, cookieHeaderValue, cookieMeta ? {
      secrets: cookieMeta.secrets !== undefined ? typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets.join(",") : undefined,
      sign: cookieMeta.sign === true ? true : cookieMeta.sign !== undefined ? typeof cookieMeta.sign === "string" ? cookieMeta.sign : cookieMeta.sign.join(",") : undefined
    } : undefined);
    for (let i = 0;i < hooks.transform.length; i++) {
      const hook = hooks.transform[i];
      const operation = hook.fn(context);
      if (hook.subType === "derive") {
        if (operation instanceof Promise)
          Object.assign(context, await operation);
        else
          Object.assign(context, operation);
      } else if (operation instanceof Promise)
        await operation;
    }
    if (validator) {
      if (validator.createHeaders?.()) {
        const _header = {};
        for (const key in request.headers)
          _header[key] = request.headers.get(key);
        if (validator.headers.Check(_header) === false)
          throw new ValidationError("header", validator.headers, _header);
      } else if (validator.headers?.Decode)
        context.headers = validator.headers.Decode(context.headers);
      if (validator.createParams?.()?.Check(context.params) === false) {
        throw new ValidationError("params", validator.params, context.params);
      } else if (validator.params?.Decode)
        context.params = validator.params.Decode(context.params);
      if (validator.createQuery?.()?.Check(context.query) === false)
        throw new ValidationError("query", validator.query, context.query);
      else if (validator.query?.Decode)
        context.query = validator.query.Decode(context.query);
      if (validator.createCookie?.()) {
        let cookieValue = {};
        for (const [key, value15] of Object.entries(context.cookie))
          cookieValue[key] = value15.value;
        if (validator.cookie.Check(cookieValue) === false)
          throw new ValidationError("cookie", validator.cookie, cookieValue);
        else if (validator.cookie?.Decode)
          cookieValue = validator.cookie.Decode(cookieValue);
      }
      if (validator.createBody?.()?.Check(body) === false)
        throw new ValidationError("body", validator.body, body);
      else if (validator.body?.Decode)
        context.body = validator.body.Decode(body);
    }
    for (let i = 0;i < hooks.beforeHandle.length; i++) {
      const hook = hooks.beforeHandle[i];
      let response2 = hook.fn(context);
      if (hook.subType === "resolve") {
        if (response2 instanceof Promise)
          Object.assign(context, await response2);
        else
          Object.assign(context, response2);
        continue;
      } else if (response2 instanceof Promise)
        response2 = await response2;
      if (response2 !== undefined) {
        context.response = response2;
        for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
          let newResponse = hooks.afterHandle[i2].fn(context);
          if (newResponse instanceof Promise)
            newResponse = await newResponse;
          if (newResponse)
            response2 = newResponse;
        }
        const result = mapEarlyResponse(response2, context.set);
        if (result)
          return context.response = result;
      }
    }
    let response = handle(context);
    if (response instanceof Promise)
      response = await response;
    if (!hooks.afterHandle.length) {
      const status = response?.[ELYSIA_RESPONSE] ?? (set2.status ? typeof set2.status === "string" ? StatusMap[set2.status] : set2.status : 200);
      const responseValidator = validator?.createResponse?.()?.[status];
      if (responseValidator?.Check(response) === false)
        throw new ValidationError("response", responseValidator, response);
      else if (responseValidator?.Decode)
        response = responseValidator.Decode(response);
    } else {
      context.response = response;
      for (let i = 0;i < hooks.afterHandle.length; i++) {
        let newResponse = hooks.afterHandle[i].fn(context);
        if (newResponse instanceof Promise)
          newResponse = await newResponse;
        const result = mapEarlyResponse(newResponse, context.set);
        if (result !== undefined) {
          const responseValidator = validator?.response?.[result.status];
          if (responseValidator?.Check(result) === false)
            throw new ValidationError("response", responseValidator, result);
          else if (responseValidator?.Decode)
            response = responseValidator.Decode(response);
          return context.response = result;
        }
      }
    }
    if (context.set.cookie && cookieMeta?.sign) {
      const secret = !cookieMeta.secrets ? undefined : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
      if (cookieMeta.sign === true)
        for (const [key, cookie] of Object.entries(context.set.cookie))
          context.set.cookie[key].value = await signCookie(cookie.value, "${secret}");
      else {
        const properties = validator?.cookie?.schema?.properties;
        for (const name of cookieMeta.sign) {
          if (!(name in properties))
            continue;
          if (context.set.cookie[name]?.value) {
            context.set.cookie[name].value = await signCookie(context.set.cookie[name].value, secret);
          }
        }
      }
    }
    return context.response = mapResponse(response, context.set);
  } catch (error23) {
    if (error23.status)
      set2.status = error23.status;
    return app.handleError(context, error23);
  } finally {
    for (const afterResponse of app.event.afterResponse)
      await afterResponse.fn(context);
  }
};
var createDynamicErrorHandler = (app) => async (context, error23) => {
  const errorContext = Object.assign(context, { error: error23, code: error23.code });
  errorContext.set = context.set;
  for (let i = 0;i < app.event.error.length; i++) {
    const hook = app.event.error[i];
    let response = hook.fn(errorContext);
    if (response instanceof Promise)
      response = await response;
    if (response !== undefined && response !== null)
      return context.response = mapResponse(response, context.set);
  }
  return new Response(typeof error23.cause === "string" ? error23.cause : error23.message, {
    headers: context.set.headers,
    status: error23.status ?? 500
  });
};
var Elysia = class _Elysia {
  constructor(config = {}) {
    this.server = null;
    this.dependencies = {};
    this._routes = {};
    this._types = {
      Prefix: "",
      Scoped: false,
      Singleton: {},
      Definitions: {},
      Metadata: {}
    };
    this._ephemeral = {};
    this._volatile = {};
    this.version = version;
    this.singleton = {
      decorator: {},
      store: {},
      derive: {},
      resolve: {}
    };
    this.definitions = {
      type: {},
      error: {}
    };
    this.extender = {
      macros: [],
      higherOrderFunctions: []
    };
    this.validator = {
      global: null,
      scoped: null,
      local: null,
      getCandidate() {
        return mergeSchemaValidator(mergeSchemaValidator(this.global, this.scoped), this.local);
      }
    };
    this.event = {
      start: [],
      request: [],
      parse: [],
      transform: [],
      beforeHandle: [],
      afterHandle: [],
      mapResponse: [],
      afterResponse: [],
      trace: [],
      error: [],
      stop: []
    };
    this.telemetry = {
      stack: undefined
    };
    this.router = {
      http: new Memoirist,
      ws: new Memoirist,
      dynamic: new Memoirist,
      static: {
        http: {
          static: {},
          handlers: [],
          map: {},
          all: ""
        },
        ws: {}
      },
      history: []
    };
    this.routeTree = /* @__PURE__ */ new Map;
    this.inference = {
      body: false,
      cookie: false,
      headers: false,
      query: false,
      set: false,
      server: false
    };
    this.handle = async (request) => this.fetch(request);
    this.fetch = (request) => {
      return (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this))(request);
    };
    this.handleError = async (context, error23) => (this.handleError = this.config.aot ? composeErrorHandler(this) : createDynamicErrorHandler(this))(context, error23);
    this.outerErrorHandler = (error23) => new Response(error23.message || error23.name || "Error", {
      status: error23?.status ?? 500
    });
    this.listen = (options, callback) => {
      if (typeof Bun === "undefined")
        throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
      this.compile();
      if (typeof options === "string") {
        if (!isNumericString(options))
          throw new Error("Port must be a numeric value");
        options = parseInt(options);
      }
      const fetch = this.fetch;
      const serve = typeof options === "object" ? {
        development: !isProduction,
        reusePort: true,
        ...this.config.serve || {},
        ...options || {},
        static: this.router.static.http.static,
        websocket: {
          ...this.config.websocket || {},
          ...websocket || {}
        },
        fetch,
        error: this.outerErrorHandler
      } : {
        development: !isProduction,
        reusePort: true,
        ...this.config.serve || {},
        static: this.router.static.http.static,
        websocket: {
          ...this.config.websocket || {},
          ...websocket || {}
        },
        port: options,
        fetch,
        error: this.outerErrorHandler
      };
      this.server = Bun?.serve(serve);
      for (let i = 0;i < this.event.start.length; i++)
        this.event.start[i].fn(this);
      if (callback)
        callback(this.server);
      process.on("beforeExit", () => {
        if (this.server) {
          this.server.stop();
          this.server = null;
          for (let i = 0;i < this.event.stop.length; i++)
            this.event.stop[i].fn(this);
        }
      });
      this.promisedModules.then(() => {
        Bun?.gc(false);
      });
      return this;
    };
    this.stop = async (closeActiveConnections) => {
      if (!this.server)
        throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
      if (this.server) {
        this.server.stop(closeActiveConnections);
        this.server = null;
        if (this.event.stop.length)
          for (let i = 0;i < this.event.stop.length; i++)
            this.event.stop[i].fn(this);
      }
    };
    if (config.tags) {
      if (!config.detail)
        config.detail = {
          tags: config.tags
        };
      else
        config.detail.tags = config.tags;
    }
    if (config.nativeStaticResponse === undefined)
      config.nativeStaticResponse = true;
    this.config = {};
    this.applyConfig(config ?? {});
    if (config?.analytic && (config?.name || config?.seed !== undefined))
      this.telemetry.stack = new Error().stack;
  }
  static {
    this.version = version;
  }
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get _scoped() {
    return this.config.scoped;
  }
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  getServer() {
    return this.server;
  }
  get promisedModules() {
    if (!this._promisedModules)
      this._promisedModules = new PromiseGroup;
    return this._promisedModules;
  }
  env(model, env2 = Bun?.env ?? process.env) {
    const validator = getSchemaValidator(model, {
      dynamic: true,
      additionalProperties: true,
      coerce: true
    });
    if (validator.Check(env2) === false) {
      const error23 = new ValidationError("env", model, env2);
      throw new Error(error23.all.map((x) => x.summary).join("\n"));
    }
    return this;
  }
  wrap(fn) {
    this.extender.higherOrderFunctions.push({
      checksum: checksum(JSON.stringify({
        name: this.config.name,
        seed: this.config.seed,
        content: fn.toString()
      })),
      fn
    });
    return this;
  }
  applyMacro(localHook) {
    if (this.extender.macros.length) {
      const manage = createMacroManager({
        globalHook: this.event,
        localHook
      });
      const manager = {
        events: {
          global: this.event,
          local: localHook
        },
        onParse: manage("parse"),
        onTransform: manage("transform"),
        onBeforeHandle: manage("beforeHandle"),
        onAfterHandle: manage("afterHandle"),
        mapResponse: manage("mapResponse"),
        onAfterResponse: manage("afterResponse"),
        onError: manage("error")
      };
      for (const macro of this.extender.macros)
        traceBackMacro(macro.fn(manager), localHook);
    }
  }
  applyConfig(config) {
    this.config = {
      prefix: "",
      aot: true,
      strictPath: false,
      global: false,
      analytic: false,
      normalize: true,
      ...config,
      cookie: {
        path: "/",
        ...config?.cookie
      },
      experimental: config?.experimental ?? {},
      seed: config?.seed === undefined ? "" : config?.seed
    };
    return this;
  }
  get models() {
    const models = {};
    for (const [name, schema3] of Object.entries(this.definitions.type))
      models[name] = getSchemaValidator(schema3);
    return models;
  }
  add(method, path, handle, localHook, { allowMeta = false, skipPrefix = false } = {
    allowMeta: false,
    skipPrefix: false
  }) {
    localHook = localHookToLifeCycleStore(localHook);
    if (path !== "" && path.charCodeAt(0) !== 47)
      path = "/" + path;
    if (this.config.prefix && !skipPrefix && !this.config.scoped)
      path = this.config.prefix + path;
    if (localHook?.type)
      switch (localHook.type) {
        case "text":
          localHook.type = "text/plain";
          break;
        case "json":
          localHook.type = "application/json";
          break;
        case "formdata":
          localHook.type = "multipart/form-data";
          break;
        case "urlencoded":
          localHook.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          localHook.type = "application/octet-stream";
          break;
        default:
          break;
      }
    const models = this.definitions.type;
    const dynamic = !this.config.aot;
    const instanceValidator = { ...this.validator.getCandidate() };
    const cloned = {
      body: localHook?.body ?? instanceValidator?.body,
      headers: localHook?.headers ?? instanceValidator?.headers,
      params: localHook?.params ?? instanceValidator?.params,
      query: localHook?.query ?? instanceValidator?.query,
      cookie: localHook?.cookie ?? instanceValidator?.cookie,
      response: localHook?.response ?? instanceValidator?.response
    };
    const cookieValidator = () => cloned.cookie ? getCookieValidator({
      validator: cloned.cookie,
      defaultConfig: this.config.cookie,
      config: cloned.cookie?.config ?? {},
      dynamic,
      models
    }) : undefined;
    const normalize = this.config.normalize;
    const validator = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.schema === true ? {
      body: getSchemaValidator(cloned.body, {
        dynamic,
        models,
        normalize,
        additionalCoerce: coercePrimitiveRoot()
      }),
      headers: getSchemaValidator(cloned.headers, {
        dynamic,
        models,
        additionalProperties: !this.config.normalize,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      params: getSchemaValidator(cloned.params, {
        dynamic,
        models,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      query: getSchemaValidator(cloned.query, {
        dynamic,
        models,
        normalize,
        coerce: true,
        additionalCoerce: stringToStructureCoercions()
      }),
      cookie: cookieValidator(),
      response: getResponseSchemaValidator(cloned.response, {
        dynamic,
        models,
        normalize
      })
    } : {
      createBody() {
        if (this.body)
          return this.body;
        return this.body = getSchemaValidator(cloned.body, {
          dynamic,
          models,
          normalize,
          additionalCoerce: coercePrimitiveRoot()
        });
      },
      createHeaders() {
        if (this.headers)
          return this.headers;
        return this.headers = getSchemaValidator(cloned.headers, {
          dynamic,
          models,
          additionalProperties: !normalize,
          coerce: true,
          additionalCoerce: stringToStructureCoercions()
        });
      },
      createParams() {
        if (this.params)
          return this.params;
        return this.params = getSchemaValidator(cloned.params, {
          dynamic,
          models,
          coerce: true,
          additionalCoerce: stringToStructureCoercions()
        });
      },
      createQuery() {
        if (this.query)
          return this.query;
        return this.query = getSchemaValidator(cloned.query, {
          dynamic,
          models,
          coerce: true,
          additionalCoerce: stringToStructureCoercions()
        });
      },
      createCookie() {
        if (this.cookie)
          return this.cookie;
        return this.cookie = cookieValidator();
      },
      createResponse() {
        if (this.response)
          return this.response;
        return this.response = getResponseSchemaValidator(cloned.response, {
          dynamic,
          models,
          normalize
        });
      }
    };
    const loosePath = path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
    localHook = mergeHook(localHook, instanceValidator);
    if (localHook.tags) {
      if (!localHook.detail)
        localHook.detail = {
          tags: localHook.tags
        };
      else
        localHook.detail.tags = localHook.tags;
    }
    if (isNotEmpty(this.config.detail))
      localHook.detail = mergeDeep(Object.assign({}, this.config.detail), localHook.detail);
    this.applyMacro(localHook);
    const hooks = mergeHook(this.event, localHook);
    if (this.config.aot === false) {
      this.router.dynamic.add(method, path, {
        validator,
        hooks,
        content: localHook?.type,
        handle
      });
      if (this.config.strictPath === false) {
        this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle
        });
      }
      this.router.history.push({
        method,
        path,
        composed: null,
        handler: handle,
        hooks
      });
      return;
    }
    const shouldPrecompile = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.compose === true;
    const inference = cloneInference(this.inference);
    const staticHandler = typeof handle !== "function" ? createStaticHandler(handle, hooks, this.setHeaders) : undefined;
    const nativeStaticHandler = typeof handle !== "function" ? createNativeStaticHandler(handle, hooks, this.setHeaders) : undefined;
    if (this.config.nativeStaticResponse === true && nativeStaticHandler && (method === "GET" || method === "ALL"))
      this.router.static.http.static[path] = nativeStaticHandler();
    const compile = () => composeHandler({
      app: this,
      path,
      method,
      localHook: mergeHook(localHook),
      hooks,
      validator,
      handler: handle,
      allowMeta,
      inference
    });
    const mainHandler = shouldPrecompile ? compile() : (context) => {
      return compile()(context);
    };
    const routeIndex = this.router.history.length;
    if (this.routeTree.has(method + path))
      for (let i = 0;i < this.router.history.length; i++) {
        const route = this.router.history[i];
        if (route.path === path && route.method === method) {
          const removed = this.router.history.splice(i, 1)[0];
          if (removed && this.routeTree.has(removed?.method + removed?.path))
            this.routeTree.delete(removed.method + removed.path);
        }
      }
    else
      this.routeTree.set(method + path, routeIndex);
    this.router.history.push({
      method,
      path,
      composed: mainHandler,
      handler: handle,
      hooks
    });
    const staticRouter = this.router.static.http;
    const handler = {
      handler: shouldPrecompile ? mainHandler : undefined,
      compile
    };
    if (method === "$INTERNALWS") {
      const loose = this.config.strictPath ? undefined : path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
      if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
        const index = staticRouter.handlers.length;
        staticRouter.handlers.push((ctx) => (staticRouter.handlers[index] = compile())(ctx));
        this.router.static.ws[path] = index;
        if (loose)
          this.router.static.ws[loose] = index;
      } else {
        this.router.ws.add("ws", path, handler);
        if (loose)
          this.router.ws.add("ws", loose, handler);
      }
      return;
    }
    if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
      const index = staticRouter.handlers.length;
      staticRouter.handlers.push(staticHandler ?? ((ctx2) => (staticRouter.handlers[index] = compile())(ctx2)));
      if (!staticRouter.map[path])
        staticRouter.map[path] = {
          code: ""
        };
      const ctx = staticHandler ? "" : "ctx";
      if (method === "ALL")
        staticRouter.map[path].all = `default: return st[${index}](${ctx})
`;
      else
        staticRouter.map[path].code = `case '${method}': return st[${index}](${ctx})
${staticRouter.map[path].code}`;
      if (!this.config.strictPath) {
        if (!staticRouter.map[loosePath])
          staticRouter.map[loosePath] = {
            code: ""
          };
        if (this.config.nativeStaticResponse === true && nativeStaticHandler && (method === "GET" || method === "ALL"))
          this.router.static.http.static[loosePath] = nativeStaticHandler();
        if (method === "ALL")
          staticRouter.map[loosePath].all = `default: return st[${index}](${ctx})
`;
        else
          staticRouter.map[loosePath].code = `case '${method}': return st[${index}](${ctx})
${staticRouter.map[loosePath].code}`;
      }
    } else {
      this.router.http.add(method, path, handler);
      if (!this.config.strictPath) {
        const loosePath2 = path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
        if (this.config.nativeStaticResponse === true && staticHandler && (method === "GET" || method === "ALL"))
          this.router.static.http.static[loosePath2] = staticHandler();
        this.router.http.add(method, loosePath2, handler);
      }
    }
  }
  headers(header) {
    if (!header)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    this.setHeaders = mergeDeep(this.setHeaders, header);
    return this;
  }
  onStart(handler) {
    this.on("start", handler);
    return this;
  }
  onRequest(handler) {
    this.on("request", handler);
    return this;
  }
  onParse(options, handler) {
    if (!handler)
      return this.on("parse", options);
    return this.on(options, "parse", handler);
  }
  onTransform(options, handler) {
    if (!handler)
      return this.on("transform", options);
    return this.on(options, "transform", handler);
  }
  resolve(optionsOrResolve, resolve) {
    if (!resolve) {
      resolve = optionsOrResolve;
      optionsOrResolve = { as: "local" };
    }
    const hook = {
      subType: "resolve",
      fn: resolve
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  mapResolve(optionsOrResolve, mapper) {
    if (!mapper) {
      mapper = optionsOrResolve;
      optionsOrResolve = { as: "local" };
    }
    const hook = {
      subType: "mapResolve",
      fn: mapper
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  onBeforeHandle(options, handler) {
    if (!handler)
      return this.on("beforeHandle", options);
    return this.on(options, "beforeHandle", handler);
  }
  onAfterHandle(options, handler) {
    if (!handler)
      return this.on("afterHandle", options);
    return this.on(options, "afterHandle", handler);
  }
  mapResponse(options, handler) {
    if (!handler)
      return this.on("mapResponse", options);
    return this.on(options, "mapResponse", handler);
  }
  onAfterResponse(options, handler) {
    if (!handler)
      return this.on("afterResponse", options);
    return this.on(options, "afterResponse", handler);
  }
  trace(options, handler) {
    if (!handler) {
      handler = options;
      options = { as: "local" };
    }
    if (!Array.isArray(handler))
      handler = [handler];
    for (const fn of handler)
      this.on(options, "trace", createTracer(fn));
    return this;
  }
  error(name, error23) {
    switch (typeof name) {
      case "string":
        error23.prototype[ERROR_CODE] = name;
        this.definitions.error[name] = error23;
        return this;
      case "function":
        this.definitions.error = name(this.definitions.error);
        return this;
    }
    for (const [code, error32] of Object.entries(name)) {
      error32.prototype[ERROR_CODE] = code;
      this.definitions.error[code] = error32;
    }
    return this;
  }
  onError(options, handler) {
    if (!handler)
      return this.on("error", options);
    return this.on(options, "error", handler);
  }
  onStop(handler) {
    this.on("stop", handler);
    return this;
  }
  on(optionsOrType, typeOrHandlers, handlers) {
    let type47;
    switch (typeof optionsOrType) {
      case "string":
        type47 = optionsOrType;
        handlers = typeOrHandlers;
        break;
      case "object":
        type47 = typeOrHandlers;
        if (!Array.isArray(typeOrHandlers) && typeof typeOrHandlers === "object")
          handlers = typeOrHandlers;
        break;
    }
    if (Array.isArray(handlers))
      handlers = fnToContainer(handlers);
    else {
      if (typeof handlers === "function")
        handlers = [
          {
            fn: handlers
          }
        ];
      else
        handlers = [handlers];
    }
    const handles = handlers;
    for (const handle of handles)
      handle.scope = typeof optionsOrType === "string" ? "local" : optionsOrType?.as ?? "local";
    if (type47 !== "trace")
      sucrose({
        [type47]: handles.map((x) => x.fn)
      }, this.inference);
    for (const handle of handles) {
      const fn = asHookType(handle, "global", { skipIfHasType: true });
      switch (type47) {
        case "start":
          this.event.start.push(fn);
          break;
        case "request":
          this.event.request.push(fn);
          break;
        case "parse":
          this.event.parse.push(fn);
          break;
        case "transform":
          this.event.transform.push(fn);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(fn);
          break;
        case "afterHandle":
          this.event.afterHandle.push(fn);
          break;
        case "mapResponse":
          this.event.mapResponse.push(fn);
          break;
        case "afterResponse":
          this.event.afterResponse.push(fn);
          break;
        case "trace":
          this.event.trace.push(fn);
          break;
        case "error":
          this.event.error.push(fn);
          break;
        case "stop":
          this.event.stop.push(fn);
          break;
      }
    }
    return this;
  }
  propagate() {
    promoteEvent(this.event.parse);
    promoteEvent(this.event.transform);
    promoteEvent(this.event.beforeHandle);
    promoteEvent(this.event.afterHandle);
    promoteEvent(this.event.mapResponse);
    promoteEvent(this.event.afterResponse);
    promoteEvent(this.event.trace);
    promoteEvent(this.event.error);
    return this;
  }
  as(type47) {
    const castType = { plugin: "scoped", global: "global" }[type47];
    promoteEvent(this.event.parse, castType);
    promoteEvent(this.event.transform, castType);
    promoteEvent(this.event.beforeHandle, castType);
    promoteEvent(this.event.afterHandle, castType);
    promoteEvent(this.event.mapResponse, castType);
    promoteEvent(this.event.afterResponse, castType);
    promoteEvent(this.event.trace, castType);
    promoteEvent(this.event.error, castType);
    if (type47 === "plugin") {
      this.validator.scoped = mergeSchemaValidator(this.validator.scoped, this.validator.local);
      this.validator.local = null;
    } else if (type47 === "global") {
      this.validator.global = mergeSchemaValidator(this.validator.global, mergeSchemaValidator(this.validator.scoped, this.validator.local));
      this.validator.scoped = null;
      this.validator.local = null;
    }
    return this;
  }
  group(prefix, schemaOrRun, run) {
    const instance = new _Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton };
    instance.definitions = { ...this.definitions };
    instance.getServer = () => this.getServer();
    instance.inference = cloneInference(this.inference);
    instance.extender = { ...this.extender };
    const isSchema = typeof schemaOrRun === "object";
    const sandbox = (isSchema ? run : schemaOrRun)(instance);
    this.singleton = mergeDeep(this.singleton, instance.singleton);
    this.definitions = mergeDeep(this.definitions, instance.definitions);
    if (sandbox.event.request.length)
      this.event.request = [
        ...this.event.request || [],
        ...sandbox.event.request || []
      ];
    if (sandbox.event.mapResponse.length)
      this.event.mapResponse = [
        ...this.event.mapResponse || [],
        ...sandbox.event.mapResponse || []
      ];
    this.model(sandbox.definitions.type);
    Object.values(instance.router.history).forEach(({ method, path, handler, hooks }) => {
      path = (isSchema ? "" : this.config.prefix) + prefix + path;
      if (isSchema) {
        const hook = schemaOrRun;
        const localHook = hooks;
        this.add(method, path, handler, mergeHook(hook, {
          ...localHook || {},
          error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [
            ...localHook.error || {},
            ...sandbox.event.error || {}
          ] : [
            localHook.error,
            ...sandbox.event.error || {}
          ]
        }));
      } else {
        this.add(method, path, handler, mergeHook(hooks, {
          error: sandbox.event.error
        }), {
          skipPrefix: true
        });
      }
    });
    return this;
  }
  guard(hook, run) {
    if (!run) {
      if (typeof hook === "object") {
        this.applyMacro(hook);
        const type47 = hook.as ?? "local";
        this.validator[type47] = {
          body: hook.body ?? this.validator[type47]?.body,
          headers: hook.headers ?? this.validator[type47]?.headers,
          params: hook.params ?? this.validator[type47]?.params,
          query: hook.query ?? this.validator[type47]?.query,
          response: hook.response ?? this.validator[type47]?.response,
          cookie: hook.cookie ?? this.validator[type47]?.cookie
        };
        if (hook.parse)
          this.on({ as: type47 }, "parse", hook.parse);
        if (hook.transform)
          this.on({ as: type47 }, "transform", hook.transform);
        if (hook.beforeHandle)
          this.on({ as: type47 }, "beforeHandle", hook.beforeHandle);
        if (hook.afterHandle)
          this.on({ as: type47 }, "afterHandle", hook.afterHandle);
        if (hook.mapResponse)
          this.on({ as: type47 }, "mapResponse", hook.mapResponse);
        if (hook.afterResponse)
          this.on({ as: type47 }, "afterResponse", hook.afterResponse);
        if (hook.error)
          this.on({ as: type47 }, "error", hook.error);
        if (hook.detail) {
          if (this.config.detail)
            this.config.detail = mergeDeep(Object.assign({}, this.config.detail), hook.detail);
          else
            this.config.detail = hook.detail;
        }
        if (hook?.tags) {
          if (!this.config.detail)
            this.config.detail = {
              tags: hook.tags
            };
          else
            this.config.detail.tags = hook.tags;
        }
        return this;
      }
      return this.guard({}, hook);
    }
    const instance = new _Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton };
    instance.definitions = { ...this.definitions };
    instance.inference = cloneInference(this.inference);
    instance.extender = { ...this.extender };
    const sandbox = run(instance);
    this.singleton = mergeDeep(this.singleton, instance.singleton);
    this.definitions = mergeDeep(this.definitions, instance.definitions);
    sandbox.getServer = () => this.server;
    if (sandbox.event.request.length)
      this.event.request = [
        ...this.event.request || [],
        ...sandbox.event.request || []
      ];
    if (sandbox.event.mapResponse.length)
      this.event.mapResponse = [
        ...this.event.mapResponse || [],
        ...sandbox.event.mapResponse || []
      ];
    this.model(sandbox.definitions.type);
    Object.values(instance.router.history).forEach(({ method, path, handler, hooks: localHook }) => {
      this.add(method, path, handler, mergeHook(hook, {
        ...localHook || {},
        error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [
          ...localHook.error || {},
          ...sandbox.event.error || []
        ] : [
          localHook.error,
          ...sandbox.event.error || []
        ]
      }));
    });
    return this;
  }
  use(plugin, options) {
    if (options?.scoped)
      return this.guard({}, (app) => app.use(plugin));
    if (Array.isArray(plugin)) {
      let current = this;
      for (const p of plugin)
        current = this.use(p);
      return current;
    }
    if (plugin instanceof Promise) {
      this.promisedModules.add(plugin.then((plugin2) => {
        if (typeof plugin2 === "function")
          return plugin2(this);
        if (plugin2 instanceof _Elysia)
          return this._use(plugin2).compile();
        if (typeof plugin2.default === "function")
          return plugin2.default(this);
        if (plugin2.default instanceof _Elysia)
          return this._use(plugin2.default);
        throw new Error('Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.');
      }).then((x) => x.compile()));
      return this;
    }
    return this._use(plugin);
  }
  _use(plugin) {
    if (typeof plugin === "function") {
      const instance = plugin(this);
      if (instance instanceof Promise) {
        this.promisedModules.add(instance.then((plugin2) => {
          if (plugin2 instanceof _Elysia) {
            plugin2.getServer = () => this.getServer();
            plugin2.getGlobalRoutes = () => this.getGlobalRoutes();
            plugin2.model(this.definitions.type);
            plugin2.error(this.definitions.error);
            for (const {
              method,
              path,
              handler,
              hooks
            } of Object.values(plugin2.router.history)) {
              this.add(method, path, handler, mergeHook(hooks, {
                error: plugin2.event.error
              }));
            }
            plugin2.compile();
            return plugin2;
          }
          if (typeof plugin2 === "function")
            return plugin2(this);
          if (typeof plugin2.default === "function")
            return plugin2.default(this);
          return this._use(plugin2);
        }).then((x) => x.compile()));
        return this;
      }
      return instance;
    }
    const { name, seed } = plugin.config;
    plugin.getServer = () => this.getServer();
    plugin.getGlobalRoutes = () => this.getGlobalRoutes();
    plugin.model(this.definitions.type);
    plugin.error(this.definitions.error);
    const isScoped = plugin.config.scoped;
    if (isScoped) {
      if (name) {
        if (!(name in this.dependencies))
          this.dependencies[name] = [];
        const current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
        if (this.dependencies[name].some(({ checksum: checksum2 }) => current === checksum2))
          return this;
        this.dependencies[name].push(!this.config?.analytic ? {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies
        } : {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies,
          stack: plugin.telemetry.stack,
          routes: plugin.router.history,
          decorators: plugin.singleton.decorator,
          store: plugin.singleton.store,
          type: plugin.definitions.type,
          error: plugin.definitions.error,
          derive: plugin.event.transform.filter((x) => x.subType === "derive").map((x) => ({
            fn: x.fn.toString(),
            stack: new Error().stack ?? ""
          })),
          resolve: plugin.event.transform.filter((x) => x.subType === "derive").map((x) => ({
            fn: x.fn.toString(),
            stack: new Error().stack ?? ""
          }))
        });
      }
      plugin.extender.macros = this.extender.macros.concat(plugin.extender.macros);
      const macroHashes = [];
      for (let i = 0;i < plugin.extender.macros.length; i++) {
        const macro = this.extender.macros[i];
        if (macroHashes.includes(macro.checksum)) {
          plugin.extender.macros.splice(i, 1);
          i--;
        }
        macroHashes.push(macro.checksum);
      }
      plugin.onRequest((context) => {
        Object.assign(context, this.singleton.decorator);
        Object.assign(context.store, this.singleton.store);
      });
      if (plugin.event.trace.length)
        plugin.event.trace.push(...plugin.event.trace);
      if (!plugin.config.prefix)
        console.warn("It's recommended to use scoped instance with a prefix to prevent collision routing with other instance.");
      if (plugin.event.error.length)
        plugin.event.error.push(...this.event.error);
      if (plugin.config.aot)
        plugin.compile();
      if (isScoped === true && plugin.config.prefix) {
        this.mount(plugin.config.prefix + "/", plugin.fetch);
        for (const route of plugin.router.history) {
          this.routeTree.set(route.method + `${plugin.config.prefix}${route.path}`, this.router.history.length);
          this.router.history.push({
            ...route,
            path: `${plugin.config.prefix}${route.path}`,
            hooks: mergeHook(route.hooks, {
              error: this.event.error
            })
          });
        }
      } else {
        this.mount(plugin.fetch);
        for (const route of plugin.router.history) {
          this.routeTree.set(route.method + `${plugin.config.prefix}${route.path}`, this.router.history.length);
          this.router.history.push({
            ...route,
            path: `${plugin.config.prefix}${route.path}`,
            hooks: mergeHook(route.hooks, {
              error: this.event.error
            })
          });
        }
      }
      return this;
    } else {
      this.headers(plugin.setHeaders);
      if (name) {
        if (!(name in this.dependencies))
          this.dependencies[name] = [];
        const current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
        if (!this.dependencies[name].some(({ checksum: checksum2 }) => current === checksum2)) {
          this.extender.macros = this.extender.macros.concat(plugin.extender.macros);
          this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions);
        }
      } else {
        this.extender.macros = this.extender.macros.concat(plugin.extender.macros);
        this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions);
      }
      deduplicateChecksum(this.extender.macros);
      deduplicateChecksum(this.extender.higherOrderFunctions);
      const hofHashes = [];
      for (let i = 0;i < this.extender.higherOrderFunctions.length; i++) {
        const hof = this.extender.higherOrderFunctions[i];
        if (hof.checksum) {
          if (hofHashes.includes(hof.checksum)) {
            this.extender.higherOrderFunctions.splice(i, 1);
            i--;
          }
          hofHashes.push(hof.checksum);
        }
      }
      this.inference = {
        body: this.inference.body || plugin.inference.body,
        cookie: this.inference.cookie || plugin.inference.cookie,
        headers: this.inference.headers || plugin.inference.headers,
        query: this.inference.query || plugin.inference.query,
        set: this.inference.set || plugin.inference.set,
        server: this.inference.server || plugin.inference.server
      };
    }
    this.decorate(plugin.singleton.decorator);
    this.state(plugin.singleton.store);
    this.model(plugin.definitions.type);
    this.error(plugin.definitions.error);
    plugin.extender.macros = this.extender.macros.concat(plugin.extender.macros);
    for (const { method, path, handler, hooks } of Object.values(plugin.router.history)) {
      this.add(method, path, handler, mergeHook(hooks, {
        error: plugin.event.error
      }));
    }
    if (!isScoped)
      if (name) {
        if (!(name in this.dependencies))
          this.dependencies[name] = [];
        const current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
        if (this.dependencies[name].some(({ checksum: checksum2 }) => current === checksum2))
          return this;
        this.dependencies[name].push(!this.config?.analytic ? {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies
        } : {
          name: plugin.config.name,
          seed: plugin.config.seed,
          checksum: current,
          dependencies: plugin.dependencies,
          stack: plugin.telemetry.stack,
          routes: plugin.router.history,
          decorators: plugin.singleton,
          store: plugin.singleton.store,
          type: plugin.definitions.type,
          error: plugin.definitions.error,
          derive: plugin.event.transform.filter((x) => x?.subType === "derive").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          })),
          resolve: plugin.event.transform.filter((x) => x?.subType === "resolve").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          }))
        });
        this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event), current);
      } else {
        this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event));
      }
    this.validator.global = mergeHook(this.validator.global, {
      ...plugin.validator.global
    });
    this.validator.local = mergeHook(this.validator.local, {
      ...plugin.validator.scoped
    });
    return this;
  }
  macro(macro) {
    const hook = {
      checksum: checksum(JSON.stringify({
        name: this.config.name,
        seed: this.config.seed,
        content: macro.toString()
      })),
      fn: macro
    };
    this.extender.macros.push(hook);
    return this;
  }
  mount(path, handle) {
    if (path instanceof _Elysia || typeof path === "function" || path.length === 0 || path === "/") {
      const run = typeof path === "function" ? path : path instanceof _Elysia ? path.compile().fetch : handle instanceof _Elysia ? handle.compile().fetch : handle;
      const handler2 = async ({ request, path: path2 }) => {
        if (request.method === "GET" || request.method === "HEAD" || !request.headers.get("content-type"))
          return run(new Request(replaceUrlPath(request.url, path2 || "/"), request));
        return run(new Request(replaceUrlPath(request.url, path2 || "/"), {
          ...request,
          body: await request.arrayBuffer()
        }));
      };
      this.all("/*", handler2, {
        type: "none"
      });
      return this;
    }
    const length = path.length;
    if (handle instanceof _Elysia)
      handle = handle.compile().fetch;
    const handler = async ({ request, path: path2 }) => {
      if (request.method === "GET" || request.method === "HEAD" || !request.headers.get("content-type"))
        return handle(new Request(replaceUrlPath(request.url, path2.slice(length) || "/"), request));
      return handle(new Request(replaceUrlPath(request.url, path2.slice(length) || "/"), {
        ...request,
        body: await request.arrayBuffer()
      }));
    };
    this.all(path, handler, {
      type: "none"
    });
    this.all(path + (path.endsWith("/") ? "*" : "/*"), handler, {
      type: "none"
    });
    return this;
  }
  get(path, handler, hook) {
    this.add("GET", path, handler, hook);
    return this;
  }
  post(path, handler, hook) {
    this.add("POST", path, handler, hook);
    return this;
  }
  put(path, handler, hook) {
    this.add("PUT", path, handler, hook);
    return this;
  }
  patch(path, handler, hook) {
    this.add("PATCH", path, handler, hook);
    return this;
  }
  delete(path, handler, hook) {
    this.add("DELETE", path, handler, hook);
    return this;
  }
  options(path, handler, hook) {
    this.add("OPTIONS", path, handler, hook);
    return this;
  }
  all(path, handler, hook) {
    this.add("ALL", path, handler, hook);
    return this;
  }
  head(path, handler, hook) {
    this.add("HEAD", path, handler, hook);
    return this;
  }
  connect(path, handler, hook) {
    this.add("CONNECT", path, handler, hook);
    return this;
  }
  route(method, path, handler, hook) {
    this.add(method.toUpperCase(), path, handler, hook, hook?.config);
    return this;
  }
  ws(path, options) {
    const transform7 = options.transformMessage ? Array.isArray(options.transformMessage) ? options.transformMessage : [options.transformMessage] : undefined;
    let server = null;
    const validateMessage = getSchemaValidator(options?.body, {
      models: this.definitions.type,
      normalize: this.config.normalize
    });
    const validateResponse = getSchemaValidator(options?.response, {
      models: this.definitions.type,
      normalize: this.config.normalize
    });
    const parseMessage = (message) => {
      if (typeof message === "string") {
        const start = message?.charCodeAt(0);
        if (start === 47 || start === 123)
          try {
            message = JSON.parse(message);
          } catch {
          }
        else if (isNumericString(message))
          message = +message;
      }
      if (transform7?.length)
        for (let i = 0;i < transform7.length; i++) {
          const temp = transform7[i](message);
          if (temp !== undefined)
            message = temp;
        }
      return message;
    };
    this.route("$INTERNALWS", path, (context) => {
      const { set: set2, path: path2, qi, headers, query, params } = context;
      if (server === null)
        server = this.getServer();
      if (server?.upgrade(context.request, {
        headers: typeof options.upgrade === "function" ? options.upgrade(context) : options.upgrade,
        data: {
          validator: validateResponse,
          open(ws) {
            options.open?.(new ElysiaWS(ws, context));
          },
          message: (ws, msg) => {
            const message = parseMessage(msg);
            if (validateMessage?.Check(message) === false)
              return void ws.send(new ValidationError("message", validateMessage, message).message);
            options.message?.(new ElysiaWS(ws, context), message);
          },
          drain(ws) {
            options.drain?.(new ElysiaWS(ws, context));
          },
          close(ws, code, reason) {
            options.close?.(new ElysiaWS(ws, context), code, reason);
          }
        }
      }))
        return;
      set2.status = 400;
      return "Expected a websocket connection";
    }, {
      beforeHandle: options.beforeHandle,
      transform: options.transform,
      headers: options.headers,
      params: options.params,
      query: options.query
    });
    return this;
  }
  state(options, name, value15) {
    if (name === undefined) {
      value15 = options;
      options = { as: "append" };
      name = "";
    } else if (value15 === undefined) {
      if (typeof options === "string") {
        value15 = name;
        name = options;
        options = { as: "append" };
      } else if (typeof options === "object") {
        value15 = name;
        name = "";
      }
    }
    const { as } = options;
    if (typeof name !== "string")
      return this;
    switch (typeof value15) {
      case "object":
        if (name) {
          if (name in this.singleton.store)
            this.singleton.store[name] = mergeDeep(this.singleton.store[name], value15, {
              override: as === "override"
            });
          else
            this.singleton.store[name] = value15;
          return this;
        }
        if (value15 === null)
          return this;
        this.singleton.store = mergeDeep(this.singleton.store, value15, {
          override: as === "override"
        });
        return this;
      case "function":
        if (name) {
          if (as === "override" || !(name in this.singleton.store))
            this.singleton.store[name] = value15;
        } else
          this.singleton.store = value15(this.singleton.store);
        return this;
      default:
        if (as === "override" || !(name in this.singleton.store))
          this.singleton.store[name] = value15;
        return this;
    }
  }
  decorate(options, name, value15) {
    if (name === undefined) {
      value15 = options;
      options = { as: "append" };
      name = "";
    } else if (value15 === undefined) {
      if (typeof options === "string") {
        value15 = name;
        name = options;
        options = { as: "append" };
      } else if (typeof options === "object") {
        value15 = name;
        name = "";
      }
    }
    const { as } = options;
    if (typeof name !== "string")
      return this;
    switch (typeof value15) {
      case "object":
        if (name) {
          if (name in this.singleton.decorator)
            this.singleton.decorator[name] = mergeDeep(this.singleton.decorator[name], value15, {
              override: as === "override"
            });
          else
            this.singleton.decorator[name] = value15;
          return this;
        }
        if (value15 === null)
          return this;
        this.singleton.decorator = mergeDeep(this.singleton.decorator, value15, {
          override: as === "override"
        });
        return this;
      case "function":
        if (name) {
          if (as === "override" || !(name in this.singleton.decorator))
            this.singleton.decorator[name] = value15;
        } else
          this.singleton.decorator = value15(this.singleton.decorator);
        return this;
      default:
        if (as === "override" || !(name in this.singleton.decorator))
          this.singleton.decorator[name] = value15;
        return this;
    }
  }
  derive(optionsOrTransform, transform7) {
    if (!transform7) {
      transform7 = optionsOrTransform;
      optionsOrTransform = { as: "local" };
    }
    const hook = {
      subType: "derive",
      fn: transform7
    };
    return this.onTransform(optionsOrTransform, hook);
  }
  model(name, model) {
    switch (typeof name) {
      case "object":
        Object.entries(name).forEach(([key, value15]) => {
          if (!(key in this.definitions.type))
            this.definitions.type[key] = value15;
        });
        return this;
      case "function":
        this.definitions.type = name(this.definitions.type);
        return this;
    }
    this.definitions.type[name] = model;
    return this;
  }
  mapDerive(optionsOrDerive, mapper) {
    if (!mapper) {
      mapper = optionsOrDerive;
      optionsOrDerive = { as: "local" };
    }
    const hook = {
      subType: "mapDerive",
      fn: mapper
    };
    return this.onTransform(optionsOrDerive, hook);
  }
  affix(base, type47, word) {
    if (word === "")
      return this;
    const delimieter = ["_", "-", " "];
    const capitalize2 = (word2) => word2[0].toUpperCase() + word2.slice(1);
    const joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize2(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize2(suffix);
    const remap = (type210) => {
      const store = {};
      switch (type210) {
        case "decorator":
          for (const key in this.singleton.decorator) {
            store[joinKey(word, key)] = this.singleton.decorator[key];
          }
          this.singleton.decorator = store;
          break;
        case "state":
          for (const key in this.singleton.store)
            store[joinKey(word, key)] = this.singleton.store[key];
          this.singleton.store = store;
          break;
        case "model":
          for (const key in this.definitions.type)
            store[joinKey(word, key)] = this.definitions.type[key];
          this.definitions.type = store;
          break;
        case "error":
          for (const key in this.definitions.error)
            store[joinKey(word, key)] = this.definitions.error[key];
          this.definitions.error = store;
          break;
      }
    };
    const types = Array.isArray(type47) ? type47 : [type47];
    for (const type210 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
      remap(type210);
    return this;
  }
  prefix(type47, word) {
    return this.affix("prefix", type47, word);
  }
  suffix(type47, word) {
    return this.affix("suffix", type47, word);
  }
  compile() {
    this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this);
    if (typeof this.server?.reload === "function")
      this.server.reload({
        ...this.server || {},
        fetch: this.fetch
      });
    return this;
  }
  get modules() {
    return Promise.all(this.promisedModules.promises);
  }
};

// node_modules/lmdb/node-index.js
import {createRequire as createRequire2} from "module";

// node_modules/lmdb/native.js
var import_node_gyp_build_optional_packages = __toESM(require_node_gyp_build_optional_packages(), 1);
import {dirname, join, default as pathModule} from "path";
import {fileURLToPath} from "url";
function setNativeFunctions(externals) {
  Env = externals.Env;
  Txn = externals.Txn;
  Dbi = externals.Dbi;
  Compression = externals.Compression;
  getAddress = externals.getAddress;
  getBufferAddress = externals.getBufferAddress;
  createBufferForAddress = externals.createBufferForAddress;
  clearKeptObjects = externals.clearKeptObjects || function() {
  };
  getByBinary = externals.getByBinary;
  detachBuffer = externals.detachBuffer;
  startRead = externals.startRead;
  setReadCallback = externals.setReadCallback;
  setGlobalBuffer = externals.setGlobalBuffer;
  globalBuffer = externals.globalBuffer;
  getSharedBuffer = externals.getSharedBuffer;
  prefetch = externals.prefetch;
  iterate = externals.iterate;
  position = externals.position;
  resetTxn = externals.resetTxn;
  directWrite = externals.directWrite;
  getUserSharedBuffer = externals.getUserSharedBuffer;
  notifyUserCallbacks = externals.notifyUserCallbacks;
  attemptLock = externals.attemptLock;
  unlock = externals.unlock;
  getCurrentValue = externals.getCurrentValue;
  getCurrentShared = externals.getCurrentShared;
  getStringByBinary = externals.getStringByBinary;
  getSharedByBinary = externals.getSharedByBinary;
  write = externals.write;
  compress = externals.compress;
  Cursor = externals.Cursor;
  lmdbError = externals.lmdbError;
  version2 = externals.version;
  if (externals.tmpdir)
    tmpdir = externals.tmpdir;
}
function setExternals(externals) {
  arch = externals.arch;
  fs = externals.fs;
  EventEmitter = externals.EventEmitter;
  orderedBinary = externals.orderedBinary;
  MsgpackrEncoder = externals.MsgpackrEncoder;
  WeakLRUCache = externals.WeakLRUCache;
  tmpdir = externals.tmpdir;
  os = externals.os;
  onExit = externals.onExit;
}
var Env;
var Txn;
var Dbi;
var Compression;
var Cursor;
var getAddress;
var getBufferAddress;
var createBufferForAddress;
var clearKeptObjects;
var globalBuffer;
var setGlobalBuffer;
var arch;
var fs;
var os;
var onExit;
var tmpdir;
var lmdbError;
var path;
var EventEmitter;
var orderedBinary;
var MsgpackrEncoder;
var WeakLRUCache;
var getByBinary;
var detachBuffer;
var startRead;
var setReadCallback;
var write;
var position;
var iterate;
var prefetch;
var resetTxn;
var getCurrentValue;
var getCurrentShared;
var getStringByBinary;
var getSharedByBinary;
var getSharedBuffer;
var compress;
var directWrite;
var getUserSharedBuffer;
var notifyUserCallbacks;
var attemptLock;
var unlock;
var version2;
path = pathModule;
var dirName = dirname(fileURLToPath(import.meta.url)).replace(/dist$/, "");
var nativeAddon = import_node_gyp_build_optional_packages.default(dirName);
if (process.isBun && false) {
}
setNativeFunctions(nativeAddon);

// node_modules/lmdb/util/when.js
function when(promise5, callback, errback) {
  if (promise5 && promise5.then) {
    return errback ? promise5.then(callback, errback) : promise5.then(callback);
  }
  return callback(promise5);
}

// node_modules/lmdb/write.js
function addWriteMethods(LMDBStore, {
  env: env2,
  fixedBuffer,
  resetReadTxn,
  useWritemap,
  maxKeySize,
  eventTurnBatching,
  txnStartThreshold,
  batchStartThreshold,
  overlappingSync,
  commitDelay,
  separateFlushed,
  maxFlushDelay
}) {
  var dynamicBytes;
  function allocateInstructionBuffer(lastPosition) {
    let buffer = new LocalSharedArrayBuffer(WRITE_BUFFER_SIZE);
    let lastBytes = dynamicBytes;
    dynamicBytes = new ByteArray(buffer);
    let uint32 = dynamicBytes.uint32 = new Uint32Array(buffer, 0, WRITE_BUFFER_SIZE >> 2);
    uint32[2] = 0;
    dynamicBytes.float64 = new Float64Array(buffer, 0, WRITE_BUFFER_SIZE >> 3);
    buffer.address = getBufferAddress(dynamicBytes);
    uint32.address = buffer.address + uint32.byteOffset;
    dynamicBytes.position = 1;
    if (lastPosition) {
      lastBytes.float64[lastPosition + 1] = dynamicBytes.uint32.address + (dynamicBytes.position << 3);
      lastBytes.uint32[lastPosition << 1] = 3;
    }
    return dynamicBytes;
  }
  var newBufferThreshold = WRITE_BUFFER_SIZE - maxKeySize - 64 >> 3;
  var outstandingWriteCount = 0;
  var startAddress = 0;
  var writeTxn2 = null;
  var committed;
  var abortedNonChildTransactionWarn;
  var nextTxnCallbacks = [];
  var commitPromise, flushPromise, flushResolvers = [], batchFlushResolvers = [];
  commitDelay = commitDelay || 0;
  eventTurnBatching = eventTurnBatching === false ? false : true;
  var enqueuedCommit;
  var afterCommitCallbacks = [];
  var beforeCommitCallbacks = [];
  var enqueuedEventTurnBatch;
  var batchDepth = 0;
  var lastWritePromise;
  var writeBatchStart, outstandingBatchCount, lastSyncTxnFlush, lastFlushTimeout, lastFlushCallback;
  var hasUnresolvedTxns;
  txnStartThreshold = txnStartThreshold || 5;
  batchStartThreshold = batchStartThreshold || 1000;
  maxFlushDelay = maxFlushDelay || 500;
  allocateInstructionBuffer();
  dynamicBytes.uint32[2] = TXN_DELIMITER | TXN_COMMITTED | TXN_FLUSHED;
  var txnResolution, nextResolution = {
    uint32: dynamicBytes.uint32,
    flagPosition: 2,
    flag: 0,
    valueBuffer: null,
    next: null,
    meta: null
  };
  var uncommittedResolution = {
    uint32: null,
    flagPosition: 2,
    flag: 0,
    valueBuffer: null,
    next: nextResolution,
    meta: null
  };
  var unwrittenResolution = nextResolution;
  var lastPromisedResolution = uncommittedResolution;
  var lastQueuedResolution = uncommittedResolution;
  function writeInstructions(flags, store, key, value15, version3, ifVersion) {
    let writeStatus;
    let targetBytes, position2, encoder2;
    let valueSize, valueBuffer, valueBufferStart;
    if (flags & 2) {
      encoder2 = store.encoder;
      if (value15 && value15["\x10binary-data\x02"])
        valueBuffer = value15["\x10binary-data\x02"];
      else if (encoder2) {
        if (encoder2.copyBuffers)
          valueBuffer = encoder2.encode(value15, REUSE_BUFFER_MODE | (writeTxn2 ? RESET_BUFFER_MODE : 0));
        else {
          valueBuffer = encoder2.encode(value15);
          if (typeof valueBuffer == "string")
            valueBuffer = Buffer.from(valueBuffer);
        }
      } else if (typeof value15 == "string") {
        valueBuffer = Buffer.from(value15);
      } else if (value15 instanceof Uint8Array)
        valueBuffer = value15;
      else
        throw new Error("Invalid value to put in database " + value15 + " (" + typeof value15 + "), consider using encoder");
      valueBufferStart = valueBuffer.start;
      if (valueBufferStart > -1)
        valueSize = valueBuffer.end - valueBufferStart;
      else
        valueSize = valueBuffer.length;
      if (store.dupSort && valueSize > maxKeySize)
        throw new Error("The value is larger than the maximum size (" + maxKeySize + ") for a value in a dupSort database");
    } else
      valueSize = 0;
    if (writeTxn2) {
      targetBytes = fixedBuffer;
      position2 = 0;
    } else {
      if (eventTurnBatching && !enqueuedEventTurnBatch && batchDepth == 0) {
        enqueuedEventTurnBatch = queueTask(() => {
          try {
            for (let i = 0, l = beforeCommitCallbacks.length;i < l; i++) {
              try {
                beforeCommitCallbacks[i]();
              } catch (error23) {
                console.error("In beforecommit callback", error23);
              }
            }
          } catch (error23) {
            console.error(error23);
          }
          enqueuedEventTurnBatch = null;
          batchDepth--;
          finishBatch();
          if (writeBatchStart)
            writeBatchStart();
        });
        commitPromise = null;
        flushPromise = null;
        writeBatchStart = writeInstructions(1, store);
        outstandingBatchCount = 0;
        batchDepth++;
      }
      targetBytes = dynamicBytes;
      position2 = targetBytes.position;
    }
    let { uint32, float64 } = targetBytes;
    let flagPosition = position2 << 1;
    if (!uint32) {
      throw new Error("Internal buffers have been corrupted");
    }
    uint32[flagPosition + 1] = store.db.dbi;
    if (flags & 4) {
      let keyStartPosition = (position2 << 3) + 12;
      let endPosition;
      try {
        endPosition = store.writeKey(key, targetBytes, keyStartPosition);
        if (!(keyStartPosition < endPosition) && (flags & 15) != 12)
          throw new Error("Invalid key or zero length key is not allowed in LMDB " + key);
      } catch (error23) {
        targetBytes.fill(0, keyStartPosition);
        if (error23.name == "RangeError")
          error23 = new Error("Key size is larger than the maximum key size (" + maxKeySize + ")");
        throw error23;
      }
      let keySize = endPosition - keyStartPosition;
      if (keySize > maxKeySize) {
        targetBytes.fill(0, keyStartPosition);
        throw new Error("Key size is larger than the maximum key size (" + maxKeySize + ")");
      }
      uint32[flagPosition + 2] = keySize;
      position2 = endPosition + 16 >> 3;
      if (flags & 2) {
        let mustCompress;
        if (valueBufferStart > -1) {
          float64[position2] = (valueBuffer.address || (valueBuffer.address = getAddress(valueBuffer.buffer))) + valueBufferStart;
          if (store.compression) {
            let compressionFlagIndex = valueBufferStart + (store.compression.startingOffset || 0);
            mustCompress = compressionFlagIndex < valueBuffer.end && valueBuffer[compressionFlagIndex] >= 250;
          }
        } else {
          let valueArrayBuffer = valueBuffer.buffer;
          let address = (valueArrayBuffer.address || (valueBuffer.length === 0 ? 0 : valueArrayBuffer.address = getAddress(valueArrayBuffer))) + valueBuffer.byteOffset;
          if (address <= 0 && valueBuffer.length > 0)
            console.error("Supplied buffer had an invalid address", address);
          float64[position2] = address;
          if (store.compression) {
            let compressionFlagIndex = store.compression.startingOffset || 0;
            mustCompress = compressionFlagIndex < valueBuffer.length && valueBuffer[compressionFlagIndex] >= 250;
          }
        }
        uint32[(position2++ << 1) - 1] = valueSize;
        if (store.compression && (valueSize >= store.compression.threshold || mustCompress)) {
          flags |= 1048576;
          float64[position2] = store.compression.address;
          if (!writeTxn2)
            compress(env2.address, uint32.address + (position2 << 3), () => {
              if (!float64)
                throw new Error("No float64 available");
            });
          position2++;
        }
      }
      if (ifVersion !== undefined) {
        if (ifVersion === null)
          flags |= 16;
        else {
          flags |= 256;
          float64[position2++] = ifVersion;
        }
      }
      if (version3 !== undefined) {
        flags |= 512;
        float64[position2++] = version3 || 0;
      }
    } else
      position2++;
    targetBytes.position = position2;
    if (writeTxn2) {
      uint32[0] = flags;
      write(env2.address, uint32.address);
      return () => uint32[0] & FAILED_CONDITION ? SYNC_PROMISE_FAIL : SYNC_PROMISE_SUCCESS;
    }
    let nextUint32;
    if (position2 > newBufferThreshold) {
      let lastPosition = position2;
      targetBytes = allocateInstructionBuffer(position2);
      position2 = targetBytes.position;
      nextUint32 = targetBytes.uint32;
    } else
      nextUint32 = uint32;
    let resolution = nextResolution;
    nextResolution = resolution.next = {
      uint32: nextUint32,
      flagPosition: position2 << 1,
      flag: 0,
      valueBuffer: fixedBuffer,
      next: null,
      meta: null
    };
    lastQueuedResolution = resolution;
    let writtenBatchDepth = batchDepth;
    return (callback) => {
      if (writtenBatchDepth) {
        if (arch2 === "x64") {
          writeStatus = uint32[flagPosition];
          uint32[flagPosition] = flags;
        } else {
          writeStatus = Atomics.or(uint32, flagPosition, flags);
        }
        if (writeBatchStart && !writeStatus) {
          outstandingBatchCount += 1 + (valueSize >> 12);
          if (outstandingBatchCount > batchStartThreshold) {
            outstandingBatchCount = 0;
            writeBatchStart();
            writeBatchStart = null;
          }
        }
      } else
        writeStatus = Atomics.or(uint32, flagPosition, flags);
      outstandingWriteCount++;
      if (writeStatus & TXN_DELIMITER) {
        commitPromise = null;
        flushPromise = null;
        flushResolvers = [];
        queueCommitResolution(resolution);
        if (!startAddress) {
          startAddress = uint32.address + (flagPosition << 2);
        }
      }
      if (!writtenBatchDepth && batchFlushResolvers.length > 0) {
        flushResolvers.push(...batchFlushResolvers);
        batchFlushResolvers = [];
      }
      if (!flushPromise && overlappingSync) {
        flushPromise = new Promise((resolve) => {
          if (writtenBatchDepth) {
            batchFlushResolvers.push(resolve);
          } else {
            flushResolvers.push(resolve);
          }
        });
      }
      if (writeStatus & WAITING_OPERATION) {
        write(env2.address, 0);
      }
      if (outstandingWriteCount > BACKPRESSURE_THRESHOLD && !writeBatchStart) {
        if (!backpressureArray)
          backpressureArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
        Atomics.wait(backpressureArray, 0, 0, Math.round(outstandingWriteCount / BACKPRESSURE_THRESHOLD));
      }
      if (startAddress) {
        if (eventTurnBatching)
          startWriting();
        else if (!enqueuedCommit && txnStartThreshold) {
          enqueuedCommit = commitDelay == 0 && typeof setImmediate != "undefined" ? setImmediate(() => startWriting()) : setTimeout(() => startWriting(), commitDelay);
        } else if (outstandingWriteCount > txnStartThreshold)
          startWriting();
      }
      if ((outstandingWriteCount & 7) === 0)
        resolveWrites();
      if (store.cache) {
        resolution.meta = {
          key,
          store,
          valueSize: valueBuffer ? valueBuffer.length : 0
        };
      }
      resolution.valueBuffer = valueBuffer;
      if (callback) {
        if (callback === IF_EXISTS)
          ifVersion = IF_EXISTS;
        else {
          let meta = resolution.meta || (resolution.meta = {});
          meta.reject = callback;
          meta.resolve = (value16) => callback(null, value16);
          return;
        }
      }
      if (ifVersion === undefined && !(flags & 139312)) {
        if (writtenBatchDepth > 1) {
          if (!resolution.flag && !store.cache)
            resolution.flag = NO_RESOLVE;
          return PROMISE_SUCCESS;
        }
        if (commitPromise) {
          if (!resolution.flag)
            resolution.flag = NO_RESOLVE;
        } else {
          commitPromise = new Promise((resolve, reject) => {
            let meta = resolution.meta || (resolution.meta = {});
            meta.resolve = resolve;
            resolve.unconditional = true;
            meta.reject = reject;
          });
          if (separateFlushed)
            commitPromise.flushed = overlappingSync ? flushPromise : commitPromise;
        }
        return commitPromise;
      }
      lastWritePromise = new Promise((resolve, reject) => {
        let meta = resolution.meta || (resolution.meta = {});
        meta.resolve = resolve;
        meta.reject = reject;
      });
      if (separateFlushed)
        lastWritePromise.flushed = overlappingSync ? flushPromise : lastWritePromise;
      return lastWritePromise;
    };
  }
  let committedFlushResolvers, lastSync = Promise.resolve();
  function startWriting() {
    if (enqueuedCommit) {
      clearImmediate(enqueuedCommit);
      enqueuedCommit = null;
    }
    let resolvers = flushResolvers;
    let start = Date.now();
    env2.startWriting(startAddress, (status) => {
      if (dynamicBytes.uint32[dynamicBytes.position << 1] & TXN_DELIMITER)
        queueCommitResolution(nextResolution);
      resolveWrites(true);
      switch (status) {
        case 0:
          for (let resolver of resolvers) {
            resolver();
          }
          break;
        case 1:
          break;
        case 2:
          hasUnresolvedTxns = false;
          executeTxnCallbacks();
          return hasUnresolvedTxns;
          break;
        default:
          try {
            lmdbError(status);
          } catch (error23) {
            console.error(error23);
            if (commitRejectPromise) {
              commitRejectPromise.reject(error23);
              commitRejectPromise = null;
            }
          }
      }
    });
    startAddress = 0;
  }
  function queueCommitResolution(resolution) {
    if (!(resolution.flag & HAS_TXN)) {
      resolution.flag = HAS_TXN;
      if (txnResolution) {
        txnResolution.nextTxn = resolution;
      } else
        txnResolution = resolution;
    }
  }
  var TXN_DONE = TXN_COMMITTED | TXN_FAILED;
  function resolveWrites(async) {
    let instructionStatus;
    while ((instructionStatus = unwrittenResolution.uint32[unwrittenResolution.flagPosition]) & 16777216) {
      if (unwrittenResolution.callbacks) {
        nextTxnCallbacks.push(unwrittenResolution.callbacks);
        unwrittenResolution.callbacks = null;
      }
      outstandingWriteCount--;
      if (unwrittenResolution.flag !== HAS_TXN) {
        if (unwrittenResolution.flag === NO_RESOLVE && !unwrittenResolution.meta) {
          lastPromisedResolution.next = unwrittenResolution = unwrittenResolution.next;
          continue;
        }
        unwrittenResolution.uint32 = null;
      }
      unwrittenResolution.valueBuffer = null;
      unwrittenResolution.flag = instructionStatus;
      lastPromisedResolution = unwrittenResolution;
      unwrittenResolution = unwrittenResolution.next;
    }
    while (txnResolution && (instructionStatus = txnResolution.uint32[txnResolution.flagPosition] & TXN_DONE)) {
      if (instructionStatus & TXN_FAILED)
        rejectCommit();
      else
        resolveCommit(async);
    }
  }
  function resolveCommit(async) {
    afterCommit(txnResolution.uint32[txnResolution.flagPosition - 1]);
    if (async)
      resetReadTxn();
    else
      queueMicrotask(resetReadTxn);
    do {
      if (uncommittedResolution.meta && uncommittedResolution.meta.resolve) {
        let resolve = uncommittedResolution.meta.resolve;
        if (uncommittedResolution.flag & FAILED_CONDITION && !resolve.unconditional)
          resolve(false);
        else
          resolve(true);
      }
    } while ((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution);
    txnResolution = txnResolution.nextTxn;
  }
  var commitRejectPromise;
  function rejectCommit() {
    afterCommit();
    if (!commitRejectPromise) {
      let rejectFunction;
      commitRejectPromise = new Promise((resolve, reject) => rejectFunction = reject);
      commitRejectPromise.reject = rejectFunction;
    }
    do {
      if (uncommittedResolution.meta && uncommittedResolution.meta.reject) {
        let flag = uncommittedResolution.flag & 15;
        let error23 = new Error("Commit failed (see commitError for details)");
        error23.commitError = commitRejectPromise;
        uncommittedResolution.meta.reject(error23);
      }
    } while ((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution);
    txnResolution = txnResolution.nextTxn;
  }
  function atomicStatus(uint32, flagPosition, newStatus) {
    if (batchDepth) {
      let writeStatus = uint32[flagPosition];
      uint32[flagPosition] = newStatus;
      return writeStatus;
    } else
      try {
        return Atomics.or(uint32, flagPosition, newStatus);
      } catch (error23) {
        console.error(error23);
        return;
      }
  }
  function afterCommit(txnId) {
    for (let i = 0, l = afterCommitCallbacks.length;i < l; i++) {
      try {
        afterCommitCallbacks[i]({
          next: uncommittedResolution,
          last: txnResolution,
          txnId
        });
      } catch (error23) {
        console.error("In aftercommit callback", error23);
      }
    }
  }
  async function executeTxnCallbacks() {
    env2.writeTxn = writeTxn2 = { write: true };
    nextTxnCallbacks.isExecuting = true;
    for (let i = 0;i < nextTxnCallbacks.length; i++) {
      let txnCallbacks = nextTxnCallbacks[i];
      for (let j = 0, l = txnCallbacks.length;j < l; j++) {
        let userTxnCallback = txnCallbacks[j];
        let asChild = userTxnCallback.asChild;
        if (asChild) {
          env2.beginTxn(1);
          let parentTxn = writeTxn2;
          env2.writeTxn = writeTxn2 = { write: true };
          try {
            let result = userTxnCallback.callback();
            if (result && result.then) {
              hasUnresolvedTxns = true;
              await result;
            }
            if (result === ABORT)
              env2.abortTxn();
            else
              env2.commitTxn();
            clearWriteTxn(parentTxn);
            txnCallbacks[j] = result;
          } catch (error23) {
            clearWriteTxn(parentTxn);
            env2.abortTxn();
            txnError(error23, txnCallbacks, j);
          }
        } else {
          try {
            let result = userTxnCallback();
            txnCallbacks[j] = result;
            if (result && result.then) {
              hasUnresolvedTxns = true;
              await result;
            }
          } catch (error23) {
            txnError(error23, txnCallbacks, j);
          }
        }
      }
    }
    nextTxnCallbacks = [];
    clearWriteTxn(null);
    if (hasUnresolvedTxns) {
      env2.resumeWriting();
    }
    function txnError(error23, txnCallbacks, i) {
      (txnCallbacks.errors || (txnCallbacks.errors = []))[i] = error23;
      txnCallbacks[i] = CALLBACK_THREW;
    }
  }
  function finishBatch() {
    let bytes = dynamicBytes;
    let uint32 = bytes.uint32;
    let nextPosition = bytes.position + 1;
    let writeStatus;
    if (nextPosition > newBufferThreshold) {
      allocateInstructionBuffer(nextPosition);
      nextResolution.flagPosition = dynamicBytes.position << 1;
      nextResolution.uint32 = dynamicBytes.uint32;
      writeStatus = atomicStatus(uint32, bytes.position << 1, 2);
    } else {
      uint32[nextPosition << 1] = 0;
      writeStatus = atomicStatus(uint32, bytes.position++ << 1, 2);
      nextResolution.flagPosition += 2;
    }
    if (writeStatus & WAITING_OPERATION) {
      write(env2.address, 0);
    }
  }
  function clearWriteTxn(parentTxn) {
    if (writeTxn2 && writeTxn2.refCount > 0)
      writeTxn2.isDone = true;
    env2.writeTxn = writeTxn2 = parentTxn || null;
  }
  Object.assign(LMDBStore.prototype, {
    put(key, value15, versionOrOptions, ifVersion) {
      let callback, flags = 15, type47 = typeof versionOrOptions;
      if (type47 == "object" && versionOrOptions) {
        if (versionOrOptions.noOverwrite)
          flags |= 16;
        if (versionOrOptions.noDupData)
          flags |= 32;
        if (versionOrOptions.instructedWrite)
          flags |= 8192;
        if (versionOrOptions.append)
          flags |= 131072;
        if (versionOrOptions.ifVersion != null)
          ifVersion = versionOrOptions.ifVersion;
        versionOrOptions = versionOrOptions.version;
        if (typeof ifVersion == "function")
          callback = ifVersion;
      } else if (type47 == "function") {
        callback = versionOrOptions;
      }
      return writeInstructions(flags, this, key, value15, this.useVersions ? versionOrOptions || 0 : undefined, ifVersion)(callback);
    },
    remove(key, ifVersionOrValue, callback) {
      let flags = 13;
      let ifVersion, value15;
      if (ifVersionOrValue !== undefined) {
        if (typeof ifVersionOrValue == "function")
          callback = ifVersionOrValue;
        else if (ifVersionOrValue === IF_EXISTS && !callback)
          callback = ifVersionOrValue;
        else if (this.useVersions)
          ifVersion = ifVersionOrValue;
        else {
          flags = 14;
          value15 = ifVersionOrValue;
        }
      }
      return writeInstructions(flags, this, key, value15, undefined, ifVersion)(callback);
    },
    del(key, options, callback) {
      return this.remove(key, options, callback);
    },
    ifNoExists(key, callback) {
      return this.ifVersion(key, null, callback);
    },
    ifVersion(key, version3, callback, options) {
      if (!callback) {
        return new Batch((operations, callback2) => {
          let promise6 = this.ifVersion(key, version3, operations, options);
          if (callback2)
            promise6.then(callback2);
          return promise6;
        });
      }
      if (writeTxn2) {
        if (version3 === undefined || this.doesExist(key, version3)) {
          callback();
          return SYNC_PROMISE_SUCCESS;
        }
        return SYNC_PROMISE_FAIL;
      }
      let flags = key === undefined || version3 === undefined ? 1 : 4;
      if (options?.ifLessThan)
        flags |= CONDITIONAL_VERSION_LESS_THAN;
      if (options?.allowNotFound)
        flags |= CONDITIONAL_ALLOW_NOTFOUND;
      let finishStartWrite = writeInstructions(flags, this, key, undefined, undefined, version3);
      let promise5;
      batchDepth += 2;
      if (batchDepth > 2)
        promise5 = finishStartWrite();
      else {
        writeBatchStart = () => {
          promise5 = finishStartWrite();
        };
        outstandingBatchCount = 0;
      }
      try {
        if (typeof callback === "function") {
          callback();
        } else {
          for (let i = 0, l = callback.length;i < l; i++) {
            let operation = callback[i];
            this[operation.type](operation.key, operation.value);
          }
        }
      } finally {
        if (!promise5) {
          finishBatch();
          batchDepth -= 2;
          promise5 = finishStartWrite();
          writeBatchStart = null;
        } else {
          batchDepth -= 2;
          finishBatch();
        }
      }
      return promise5;
    },
    batch(callbackOrOperations) {
      return this.ifVersion(undefined, undefined, callbackOrOperations);
    },
    drop(callback) {
      return writeInstructions(1024 + 12, this, Buffer.from([]), undefined, undefined, undefined)(callback);
    },
    clearAsync(callback) {
      if (this.encoder) {
        if (this.encoder.clearSharedData)
          this.encoder.clearSharedData();
        else if (this.encoder.structures)
          this.encoder.structures = [];
      }
      return writeInstructions(12, this, Buffer.from([]), undefined, undefined, undefined)(callback);
    },
    _triggerError() {
      finishBatch();
    },
    putSync(key, value15, versionOrOptions, ifVersion) {
      if (writeTxn2)
        return this.put(key, value15, versionOrOptions, ifVersion) === SYNC_PROMISE_SUCCESS;
      else
        return this.transactionSync(() => this.put(key, value15, versionOrOptions, ifVersion) === SYNC_PROMISE_SUCCESS, overlappingSync ? 65538 : 2);
    },
    removeSync(key, ifVersionOrValue) {
      if (writeTxn2)
        return this.remove(key, ifVersionOrValue) === SYNC_PROMISE_SUCCESS;
      else
        return this.transactionSync(() => this.remove(key, ifVersionOrValue) === SYNC_PROMISE_SUCCESS, overlappingSync ? 65538 : 2);
    },
    transaction(callback) {
      if (writeTxn2 && !nextTxnCallbacks.isExecuting) {
        return callback();
      }
      return this.transactionAsync(callback);
    },
    childTransaction(callback) {
      if (useWritemap)
        throw new Error("Child transactions are not supported in writemap mode");
      if (writeTxn2) {
        let parentTxn = writeTxn2;
        let thisTxn = env2.writeTxn = writeTxn2 = { write: true };
        env2.beginTxn(1);
        let callbackDone, finishTxn;
        try {
          return writeTxn2.childResults = when(callback(), finishTxn = (result) => {
            if (writeTxn2 !== thisTxn)
              return writeTxn2.childResults.then(() => finishTxn(result));
            callbackDone = true;
            if (result === ABORT)
              env2.abortTxn();
            else
              env2.commitTxn();
            clearWriteTxn(parentTxn);
            return result;
          }, (error23) => {
            env2.abortTxn();
            clearWriteTxn(parentTxn);
            throw error23;
          });
        } catch (error23) {
          if (!callbackDone)
            env2.abortTxn();
          clearWriteTxn(parentTxn);
          throw error23;
        }
      }
      return this.transactionAsync(callback, true);
    },
    transactionAsync(callback, asChild) {
      let txnIndex;
      let txnCallbacks;
      if (lastQueuedResolution.callbacks) {
        txnCallbacks = lastQueuedResolution.callbacks;
        txnIndex = txnCallbacks.push(asChild ? { callback, asChild } : callback) - 1;
      } else if (nextTxnCallbacks.isExecuting) {
        txnCallbacks = [asChild ? { callback, asChild } : callback];
        txnCallbacks.results = commitPromise;
        nextTxnCallbacks.push(txnCallbacks);
        txnIndex = 0;
      } else {
        if (writeTxn2)
          throw new Error("Can not enqueue transaction during write txn");
        let finishWrite = writeInstructions(8 | (this.strictAsyncOrder ? 1048576 : 0), this);
        txnCallbacks = [asChild ? { callback, asChild } : callback];
        lastQueuedResolution.callbacks = txnCallbacks;
        lastQueuedResolution.id = Math.random();
        txnCallbacks.results = finishWrite();
        txnIndex = 0;
      }
      return txnCallbacks.results.then((results) => {
        let result = txnCallbacks[txnIndex];
        if (result === CALLBACK_THREW)
          throw txnCallbacks.errors[txnIndex];
        return result;
      });
    },
    transactionSync(callback, flags) {
      if (writeTxn2) {
        if (!useWritemap && (flags == undefined || flags & 1))
          return this.childTransaction(callback);
        let result = callback();
        if (result == ABORT && !abortedNonChildTransactionWarn) {
          console.warn("Can not abort a transaction inside another transaction with " + (this.cache ? "caching enabled" : "useWritemap enabled"));
          abortedNonChildTransactionWarn = true;
        }
        return result;
      }
      let callbackDone, finishTxn;
      this.transactions++;
      if (!env2.address)
        throw new Error("The database has been closed and you can not transact on it");
      env2.beginTxn(flags == undefined ? 3 : flags);
      let thisTxn = writeTxn2 = env2.writeTxn = { write: true };
      try {
        this.emit("begin-transaction");
        return writeTxn2.childResults = when(callback(), finishTxn = (result) => {
          if (writeTxn2 !== thisTxn)
            return writeTxn2.childResults.then(() => finishTxn(result));
          try {
            callbackDone = true;
            if (result === ABORT)
              env2.abortTxn();
            else {
              env2.commitTxn();
              resetReadTxn();
            }
            return result;
          } finally {
            clearWriteTxn(null);
          }
        }, (error23) => {
          try {
            env2.abortTxn();
          } catch (e) {
          }
          clearWriteTxn(null);
          throw error23;
        });
      } catch (error23) {
        if (!callbackDone)
          try {
            env2.abortTxn();
          } catch (e) {
          }
        clearWriteTxn(null);
        throw error23;
      }
    },
    getWriteTxnId() {
      return env2.getWriteTxnId();
    },
    transactionSyncStart(callback) {
      return this.transactionSync(callback, 0);
    },
    committed: committed = {
      then(onfulfilled, onrejected) {
        if (commitPromise)
          return commitPromise.then(onfulfilled, onrejected);
        if (lastWritePromise)
          return lastWritePromise.then(() => onfulfilled(true), onrejected);
        return SYNC_PROMISE_SUCCESS.then(onfulfilled, onrejected);
      }
    },
    flushed: {
      then(onfulfilled, onrejected) {
        if (flushPromise)
          flushPromise.hasCallbacks = true;
        return Promise.all([flushPromise || committed, lastSyncTxnFlush]).then(onfulfilled, onrejected);
      }
    },
    _endWrites(resolvedPromise, resolvedSyncPromise) {
      this.put = this.remove = this.del = this.batch = this.removeSync = this.putSync = this.transactionAsync = this.drop = this.clearAsync = () => {
        throw new Error("Database is closed");
      };
      let finalPromise = flushPromise || commitPromise || lastWritePromise;
      if (flushPromise)
        flushPromise.hasCallbacks = true;
      let finalSyncPromise = lastSyncTxnFlush;
      if (finalPromise && resolvedPromise != finalPromise || finalSyncPromise && resolvedSyncPromise != finalSyncPromise) {
        return Promise.all([finalPromise, finalSyncPromise]).then(() => this._endWrites(finalPromise, finalSyncPromise), () => this._endWrites(finalPromise, finalSyncPromise));
      }
      Object.defineProperty(env2, "sync", { value: null });
    },
    on(event, callback) {
      if (event == "beforecommit") {
        eventTurnBatching = true;
        beforeCommitCallbacks.push(callback);
      } else if (event == "aftercommit")
        afterCommitCallbacks.push(callback);
      else if (event == "committed") {
        this.getUserSharedBuffer("__committed__", new ArrayBuffer(0), {
          envKey: true,
          callback
        });
      } else
        super.on(event, callback);
    }
  });
}
var backpressureArray;
var WAITING_OPERATION = 33554432;
var BACKPRESSURE_THRESHOLD = 300000;
var TXN_DELIMITER = 134217728;
var TXN_COMMITTED = 268435456;
var TXN_FLUSHED = 536870912;
var TXN_FAILED = 1073741824;
var FAILED_CONDITION = 67108864;
var REUSE_BUFFER_MODE = 512;
var RESET_BUFFER_MODE = 1024;
var NO_RESOLVE = 16;
var HAS_TXN = 8;
var CONDITIONAL_VERSION_LESS_THAN = 2048;
var CONDITIONAL_ALLOW_NOTFOUND = 2048;
var SYNC_PROMISE_SUCCESS = Promise.resolve(true);
var SYNC_PROMISE_FAIL = Promise.resolve(false);
SYNC_PROMISE_SUCCESS.isSync = true;
SYNC_PROMISE_SUCCESS.result = true;
SYNC_PROMISE_FAIL.isSync = true;
SYNC_PROMISE_FAIL.result = false;
var PROMISE_SUCCESS = Promise.resolve(true);
var arch2 = process.arch;
var ABORT = 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004452694326329068;
var IF_EXISTS = 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003542694326329068;
var CALLBACK_THREW = {};
var LocalSharedArrayBuffer = typeof Deno != "undefined" || typeof SharedArrayBuffer == "undefined" ? ArrayBuffer : SharedArrayBuffer;
var ByteArray = typeof Buffer != "undefined" ? function(buffer) {
  return Buffer.from(buffer);
} : Uint8Array;
var queueTask = typeof setImmediate != "undefined" ? setImmediate : setTimeout;
var WRITE_BUFFER_SIZE = 65536;
class Batch extends Array {
  constructor(callback) {
    super();
    this.callback = callback;
  }
  put(key, value15) {
    this.push({ type: "put", key, value: value15 });
  }
  del(key) {
    this.push({ type: "del", key });
  }
  clear() {
    this.length = 0;
  }
  write(callback) {
    return this.callback(this, callback);
  }
}

// node_modules/lmdb/util/RangeIterable.js
var SKIP = {};
var DONE = {
  value: null,
  done: true
};
var RETURN_DONE = {
  value: null,
  done: true
};
if (!Symbol.asyncIterator) {
  Symbol.asyncIterator = Symbol.for("Symbol.asyncIterator");
}
var NO_OPTIONS = {};

class RangeIterable {
  constructor(sourceArray) {
    if (sourceArray) {
      this.iterate = sourceArray[Symbol.iterator].bind(sourceArray);
    }
  }
  map(func) {
    let source = this;
    let iterable = new RangeIterable;
    iterable.iterate = (options = NO_OPTIONS) => {
      const { async } = options;
      let iterator5 = source[async ? Symbol.asyncIterator : Symbol.iterator](options);
      if (!async)
        source.isSync = true;
      let i = -1;
      return {
        next(resolvedResult) {
          let result;
          do {
            let iteratorResult;
            try {
              if (resolvedResult) {
                iteratorResult = resolvedResult;
                resolvedResult = null;
              } else {
                i++;
                iteratorResult = iterator5.next();
                if (iteratorResult.then) {
                  if (!async) {
                    this.throw(new Error("Can not synchronously iterate with promises as iterator results"));
                  }
                  return iteratorResult.then((iteratorResult2) => this.next(iteratorResult2), (error23) => {
                    return this.throw(error23);
                  });
                }
              }
              if (iteratorResult.done === true) {
                this.done = true;
                if (iterable.onDone)
                  iterable.onDone();
                return iteratorResult;
              }
              try {
                result = func.call(source, iteratorResult.value, i);
                if (result && result.then && async) {
                  return result.then((result2) => result2 === SKIP ? this.next() : {
                    value: result2
                  }, (error23) => {
                    if (options.continueOnRecoverableError)
                      error23.continueIteration = true;
                    return this.throw(error23);
                  });
                }
              } catch (error23) {
                if (options.continueOnRecoverableError)
                  error23.continueIteration = true;
                throw error23;
              }
            } catch (error23) {
              if (iterable.handleError) {
                try {
                  result = iterable.handleError(error23, i);
                } catch (error24) {
                  return this.throw(error24);
                }
              } else
                return this.throw(error23);
            }
          } while (result === SKIP);
          if (result === DONE) {
            return this.return();
          }
          return {
            value: result
          };
        },
        return(value15) {
          if (!this.done) {
            RETURN_DONE.value = value15;
            this.done = true;
            if (iterable.onDone)
              iterable.onDone();
            iterator5.return();
          }
          return RETURN_DONE;
        },
        throw(error23) {
          if (error23.continueIteration) {
            if (iterable.returnRecoverableErrors)
              try {
                return {
                  value: iterable.returnRecoverableErrors(error23)
                };
              } catch (error24) {
                this.return();
                throw error24;
              }
            if (options.continueOnRecoverableError)
              throw error23;
          }
          this.return();
          throw error23;
        }
      };
    };
    return iterable;
  }
  [Symbol.asyncIterator](options) {
    if (options)
      options = { ...options, async: true };
    else
      options = { async: true };
    return this.iterator = this.iterate(options);
  }
  [Symbol.iterator](options) {
    return this.iterator = this.iterate(options);
  }
  filter(func) {
    let iterable = this.map((element) => {
      let result = func(element);
      if (result?.then)
        return result.then((result2) => result2 ? element : SKIP);
      else
        return result ? element : SKIP;
    });
    let iterate2 = iterable.iterate;
    iterable.iterate = (options) => {
      if (options.continueOnRecoverableError)
        options = { ...options, continueOnRecoverableError: false };
      return iterate2(options);
    };
    return iterable;
  }
  forEach(callback) {
    let iterator5 = this.iterator = this.iterate();
    let result;
    while ((result = iterator5.next()).done !== true) {
      callback(result.value);
    }
  }
  concat(secondIterable) {
    let concatIterable = new RangeIterable;
    concatIterable.iterate = (options = NO_OPTIONS) => {
      let iterator5 = this.iterator = this.iterate(options);
      let isFirst = true;
      function iteratorDone(result) {
        if (isFirst) {
          try {
            isFirst = false;
            iterator5 = secondIterable[options.async ? Symbol.asyncIterator : Symbol.iterator]();
            result = iterator5.next();
            if (concatIterable.onDone) {
              if (result.then) {
                if (!options.async)
                  throw new Error("Can not synchronously iterate with promises as iterator results");
                result.then((result2) => {
                  if (result2.done())
                    concatIterable.onDone();
                }, (error23) => {
                  this.return();
                  throw error23;
                });
              } else if (result.done)
                concatIterable.onDone();
            }
          } catch (error23) {
            this.throw(error23);
          }
        } else {
          if (concatIterable.onDone)
            concatIterable.onDone();
        }
        return result;
      }
      return {
        next() {
          try {
            let result = iterator5.next();
            if (result.then) {
              if (!options.async)
                throw new Error("Can not synchronously iterate with promises as iterator results");
              return result.then((result2) => {
                if (result2.done)
                  return iteratorDone(result2);
                return result2;
              });
            }
            if (result.done)
              return iteratorDone(result);
            return result;
          } catch (error23) {
            this.throw(error23);
          }
        },
        return(value15) {
          if (!this.done) {
            RETURN_DONE.value = value15;
            this.done = true;
            if (concatIterable.onDone)
              concatIterable.onDone();
            iterator5.return();
          }
          return RETURN_DONE;
        },
        throw(error23) {
          if (options.continueOnRecoverableError)
            throw error23;
          this.return();
          throw error23;
        }
      };
    };
    return concatIterable;
  }
  flatMap(callback) {
    let mappedIterable = new RangeIterable;
    mappedIterable.iterate = (options = NO_OPTIONS) => {
      let iterator5 = this.iterator = this.iterate(options);
      let isFirst = true;
      let currentSubIterator;
      return {
        next(resolvedResult) {
          try {
            do {
              if (currentSubIterator) {
                let result2;
                if (resolvedResult) {
                  result2 = resolvedResult;
                  resolvedResult = undefined;
                } else
                  result2 = currentSubIterator.next();
                if (result2.then) {
                  if (!options.async)
                    throw new Error("Can not synchronously iterate with promises as iterator results");
                  return result2.then((result3) => this.next(result3));
                }
                if (!result2.done) {
                  return result2;
                }
              }
              let result;
              if (resolvedResult != null) {
                result = resolvedResult;
                resolvedResult = undefined;
              } else
                result = iterator5.next();
              if (result.then) {
                if (!options.async)
                  throw new Error("Can not synchronously iterate with promises as iterator results");
                currentSubIterator = undefined;
                return result.then((result2) => this.next(result2));
              }
              if (result.done) {
                if (mappedIterable.onDone)
                  mappedIterable.onDone();
                return result;
              }
              try {
                let value15 = callback(result.value);
                if (value15?.then) {
                  if (!options.async)
                    throw new Error("Can not synchronously iterate with promises as iterator results");
                  return value15.then((value16) => {
                    if (Array.isArray(value16) || value16 instanceof RangeIterable) {
                      currentSubIterator = value16[Symbol.iterator]();
                      return this.next();
                    } else {
                      currentSubIterator = null;
                      return { value: value16 };
                    }
                  }, (error23) => {
                    if (options.continueOnRecoverableError)
                      error23.continueIteration = true;
                    this.throw(error23);
                  });
                }
                if (Array.isArray(value15) || value15 instanceof RangeIterable)
                  currentSubIterator = value15[Symbol.iterator]();
                else {
                  currentSubIterator = null;
                  return { value: value15 };
                }
              } catch (error23) {
                if (options.continueOnRecoverableError)
                  error23.continueIteration = true;
                throw error23;
              }
            } while (true);
          } catch (error23) {
            this.throw(error23);
          }
        },
        return() {
          if (mappedIterable.onDone)
            mappedIterable.onDone();
          if (currentSubIterator)
            currentSubIterator.return();
          return iterator5.return();
        },
        throw(error23) {
          if (options.continueOnRecoverableError)
            throw error23;
          if (mappedIterable.onDone)
            mappedIterable.onDone();
          if (currentSubIterator)
            currentSubIterator.return();
          this.return();
          throw error23;
        }
      };
    };
    return mappedIterable;
  }
  slice(start, end) {
    let iterable = this.map((element, i) => {
      if (i < start)
        return SKIP;
      if (i >= end) {
        DONE.value = element;
        return DONE;
      }
      return element;
    });
    iterable.handleError = (error23, i) => {
      if (i < start)
        return SKIP;
      if (i >= end) {
        return DONE;
      }
      throw error23;
    };
    return iterable;
  }
  mapError(catch_callback) {
    let iterable = this.map((element) => {
      return element;
    });
    let iterate2 = iterable.iterate;
    iterable.iterate = (options = NO_OPTIONS) => {
      return iterate2({ ...options, continueOnRecoverableError: true });
    };
    iterable.returnRecoverableErrors = catch_callback;
    return iterable;
  }
  next() {
    if (!this.iterator)
      this.iterator = this.iterate();
    return this.iterator.next();
  }
  toJSON() {
    if (this.asArray && this.asArray.forEach) {
      return this.asArray;
    }
    const error23 = new Error("Can not serialize async iterables without first calling resolving asArray");
    error23.resolution = this.asArray;
    throw error23;
  }
  get asArray() {
    if (this._asArray)
      return this._asArray;
    let promise5 = new Promise((resolve, reject) => {
      let iterator5 = this.iterate(true);
      let array5 = [];
      let iterable = this;
      Object.defineProperty(array5, "iterable", { value: iterable });
      function next(result) {
        while (result.done !== true) {
          if (result.then) {
            return result.then(next);
          } else {
            array5.push(result.value);
          }
          result = iterator5.next();
        }
        resolve(iterable._asArray = array5);
      }
      next(iterator5.next());
    });
    promise5.iterable = this;
    return this._asArray || (this._asArray = promise5);
  }
  resolveData() {
    return this.asArray;
  }
  at(index) {
    for (let entry of this) {
      if (index-- === 0)
        return entry;
    }
  }
}
RangeIterable.prototype.DONE = DONE;

// node_modules/lmdb/keys.js
function applyKeyHandling(store) {
  if (store.encoding == "ordered-binary") {
    store.encoder = store.decoder = {
      writeKey: orderedBinary.writeKey,
      readKey: orderedBinary.readKey
    };
  }
  if (store.encoder && store.encoder.writeKey && !store.encoder.encode) {
    store.encoder.encode = function(value15, mode) {
      if (typeof value15 !== "object" && value15 && value15 === lastEncodedValue) {
      } else {
        lastEncodedValue = value15;
        bytes = saveKey(value15, this.writeKey, false, store.maxKeySize);
      }
      if (bytes.end > 0 && !(REUSE_BUFFER_MODE2 & mode)) {
        return bytes.subarray(bytes.start, bytes.end);
      }
      return bytes;
    };
    store.encoder.copyBuffers = true;
  }
  if (store.decoder && store.decoder.readKey && !store.decoder.decode) {
    store.decoder.decode = function(buffer) {
      return this.readKey(buffer, 0, buffer.length);
    };
    store.decoderCopies = true;
  }
  if (store.keyIsUint32 || store.keyEncoding == "uint32") {
    store.writeKey = writeUint32Key;
    store.readKey = readUint32Key;
  } else if (store.keyIsBuffer || store.keyEncoding == "binary") {
    store.writeKey = writeBufferKey;
    store.readKey = readBufferKey;
  } else if (store.keyEncoder) {
    store.writeKey = store.keyEncoder.writeKey;
    store.readKey = store.keyEncoder.readKey;
  } else {
    store.writeKey = orderedBinary.writeKey;
    store.readKey = orderedBinary.readKey;
  }
}
function allocateSaveBuffer() {
  saveBuffer = typeof Buffer != "undefined" ? Buffer.alloc(DYNAMIC_KEY_BUFFER_SIZE) : new Uint8Array(DYNAMIC_KEY_BUFFER_SIZE);
  uint32 = null;
  saveBuffer.buffer.address = getAddress(saveBuffer.buffer);
  saveDataAddress = saveBuffer.buffer.address;
  saveDataView.setUint32(savePosition, 4294967295);
  saveDataView.setFloat64(savePosition + 4, saveDataAddress, true);
  saveDataView = saveBuffer.dataView || (saveBuffer.dataView = new DataView(saveBuffer.buffer, saveBuffer.byteOffset, saveBuffer.byteLength));
  savePosition = 0;
}
function saveKey(key, writeKey, saveTo, maxKeySize, flags) {
  if (savePosition > 7800) {
    allocateSaveBuffer();
  }
  let start = savePosition;
  try {
    savePosition = key === undefined ? start + 4 : writeKey(key, saveBuffer, start + 4);
  } catch (error23) {
    saveBuffer.fill(0, start + 4);
    if (error23.name == "RangeError") {
      if (8180 - start < maxKeySize) {
        allocateSaveBuffer();
        return saveKey(key, writeKey, saveTo, maxKeySize);
      }
      throw new Error("Key was too large, max key size is " + maxKeySize);
    } else
      throw error23;
  }
  let length = savePosition - start - 4;
  if (length > maxKeySize) {
    throw new Error("Key of size " + length + " was too large, max key size is " + maxKeySize);
  }
  if (savePosition >= 8160) {
    savePosition = start;
    allocateSaveBuffer();
    return saveKey(key, writeKey, saveTo, maxKeySize);
  }
  if (saveTo) {
    saveDataView.setUint32(start, flags ? length | flags : length, true);
    saveTo.saveBuffer = saveBuffer;
    savePosition = savePosition + 12 & 16777212;
    return start + saveDataAddress;
  } else {
    saveBuffer.start = start + 4;
    saveBuffer.end = savePosition;
    savePosition = savePosition + 7 & 16777208;
    return saveBuffer;
  }
}
var REUSE_BUFFER_MODE2 = 512;
var writeUint32Key = (key, target, start) => {
  (target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).setUint32(start, key, true);
  return start + 4;
};
var readUint32Key = (target, start) => {
  return (target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).getUint32(start, true);
};
var writeBufferKey = (key, target, start) => {
  target.set(key, start);
  return key.length + start;
};
var Uint8ArraySlice = Uint8Array.prototype.slice;
var readBufferKey = (target, start, end) => {
  return Uint8ArraySlice.call(target, start, end);
};
var lastEncodedValue;
var bytes;
var saveBuffer;
var uint32;
var saveDataView = { setFloat64() {
}, setUint32() {
} };
var saveDataAddress;
var savePosition = 8000;
var DYNAMIC_KEY_BUFFER_SIZE = 8192;

// node_modules/lmdb/read.js
function addReadMethods(LMDBStore, { maxKeySize, env: env2, keyBytes, keyBytesView, getLastVersion, getLastTxnId }) {
  let readTxn, readTxnRenewed, asSafeBuffer = false;
  let renewId = 1;
  let outstandingReads = 0;
  Object.assign(LMDBStore.prototype, {
    getString(id, options) {
      let txn = env2.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
      let string7 = getStringByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0), txn.address || 0);
      if (typeof string7 === "number") {
        this._allocateGetBuffer(string7);
        string7 = getStringByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0), txn.address || 0);
      }
      if (string7)
        this.lastSize = string7.length;
      return string7;
    },
    getBinaryFast(id, options) {
      let rc;
      let txn = env2.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
      rc = this.lastSize = getByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0), options && options.ifNotTxnId || 0, txn.address || 0);
      if (rc < 0) {
        if (rc == -30798)
          return;
        if (rc == -30004)
          return UNMODIFIED;
        if (rc == -30781 && this.writeKey(id, keyBytes, 0) == 0)
          throw new Error(id === undefined ? "A key is required for get, but is undefined" : "Zero length key is not allowed in LMDB");
        if (rc == -30000)
          rc = this.lastSize = keyBytesView.getUint32(0, true);
        else if (rc == -30001) {
          this.lastSize = keyBytesView.getUint32(0, true);
          let bufferId = keyBytesView.getUint32(4, true);
          let bytes3 = getMMapBuffer(bufferId, this.lastSize);
          return asSafeBuffer ? Buffer.from(bytes3) : bytes3;
        } else
          throw lmdbError(rc);
      }
      let compression = this.compression;
      let bytes2 = compression ? compression.getValueBytes : getValueBytes;
      if (rc > bytes2.maxLength) {
        return this._returnLargeBuffer(() => getByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0), 0, txn.address || 0));
      }
      bytes2.length = this.lastSize;
      return bytes2;
    },
    getBFAsync(id, options, callback) {
      let txn = env2.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
      txn.refCount = (txn.refCount || 0) + 1;
      outstandingReads++;
      if (!txn.address) {
        throw new Error("Invalid transaction, it has no address");
      }
      let address = recordReadInstruction(txn.address, this.db.dbi, id, this.writeKey, maxKeySize, (rc, bufferId, offset, size) => {
        if (rc && rc !== 1)
          callback(lmdbError(rc));
        outstandingReads--;
        let buffer = mmaps[bufferId];
        if (!buffer) {
          buffer = mmaps[bufferId] = getSharedBuffer(bufferId, env2.address);
        }
        if (buffer.isSharedMap) {
          let bytes2 = new Uint8Array(buffer, offset, size);
          bytes2.txn = txn;
          callback(bytes2, 0, size);
        } else {
          txn.done();
          callback(buffer, offset, size);
        }
      });
      if (address) {
        startRead(address, () => {
          resolveReads();
        });
      }
    },
    getAsync(id, options, callback) {
      let promise5;
      if (!callback)
        promise5 = new Promise((resolve) => callback = resolve);
      this.getBFAsync(id, options, (buffer, offset, size) => {
        if (this.useVersions) {
          offset += 8;
          size -= 8;
        }
        let bytes2 = new Uint8Array(buffer, offset, size);
        let value15;
        if (this.decoder) {
          value15 = bytes2 && this.decoder.decode(bytes2);
        } else if (this.encoding == "binary") {
          value15 = bytes2;
        } else {
          value15 = Buffer.prototype.utf8Slice.call(bytes2, 0, size);
          if (this.encoding == "json" && value15)
            value15 = JSON.parse(value15);
        }
        callback(value15);
      });
      return promise5;
    },
    retain(data, options) {
      if (!data)
        return;
      let source = data[SOURCE_SYMBOL];
      let buffer = source ? source.bytes : data;
      if (!buffer.isGlobal && !env2.writeTxn) {
        let txn = options?.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
        buffer.txn = txn;
        txn.refCount = (txn.refCount || 0) + 1;
        return data;
      } else {
        buffer = Uint8ArraySlice2.call(buffer, 0, this.lastSize);
        if (source) {
          source.bytes = buffer;
          return data;
        } else
          return buffer;
      }
    },
    _returnLargeBuffer(getFast) {
      let bytes2;
      let compression = this.compression;
      if (asSafeBuffer && this.lastSize > NEW_BUFFER_THRESHOLD) {
        let bytesToRestore;
        try {
          if (compression) {
            bytesToRestore = compression.getValueBytes;
            let dictionary = compression.dictionary || [];
            let dictLength = dictionary.length >> 3 << 3;
            bytes2 = makeReusableBuffer(this.lastSize);
            compression.setBuffer(bytes2.buffer, bytes2.byteOffset, this.lastSize, dictionary, dictLength);
            compression.getValueBytes = bytes2;
          } else {
            bytesToRestore = getValueBytes;
            setGlobalBuffer(bytes2 = getValueBytes = makeReusableBuffer(this.lastSize));
          }
          getFast();
        } finally {
          if (compression) {
            let dictLength = compression.dictionary.length >> 3 << 3;
            compression.setBuffer(bytesToRestore.buffer, bytesToRestore.byteOffset, bytesToRestore.maxLength, compression.dictionary, dictLength);
            compression.getValueBytes = bytesToRestore;
          } else {
            setGlobalBuffer(bytesToRestore);
            getValueBytes = bytesToRestore;
          }
        }
        return bytes2;
      }
      bytes2 = this._allocateGetBuffer(this.lastSize);
      getFast();
      bytes2.length = this.lastSize;
      return bytes2;
    },
    _allocateGetBuffer(lastSize) {
      let newLength = Math.min(Math.max(lastSize * 2, 4096), 4294967288);
      let bytes2;
      if (this.compression) {
        let dictionary = this.compression.dictionary || Buffer.allocUnsafeSlow(0);
        let dictLength = dictionary.length >> 3 << 3;
        bytes2 = Buffer.allocUnsafeSlow(newLength + dictLength);
        bytes2.set(dictionary);
        bytes2 = bytes2.subarray(dictLength);
        this.compression.setBuffer(bytes2.buffer, bytes2.byteOffset, newLength, dictionary, dictLength);
        bytes2.maxLength = newLength;
        Object.defineProperty(bytes2, "length", {
          value: newLength,
          writable: true,
          configurable: true
        });
        this.compression.getValueBytes = bytes2;
      } else {
        bytes2 = makeReusableBuffer(newLength);
        setGlobalBuffer(getValueBytes = bytes2);
      }
      bytes2.isGlobal = true;
      return bytes2;
    },
    getBinary(id, options) {
      try {
        asSafeBuffer = true;
        let fastBuffer = this.getBinaryFast(id, options);
        return fastBuffer && (fastBuffer.isGlobal ? Uint8ArraySlice2.call(fastBuffer, 0, this.lastSize) : fastBuffer);
      } finally {
        asSafeBuffer = false;
      }
    },
    getSharedBinary(id, options) {
      let fastBuffer = this.getBinaryFast(id, options);
      if (fastBuffer) {
        if (fastBuffer.isGlobal || writeTxn)
          return Uint8ArraySlice2.call(fastBuffer, 0, this.lastSize);
        fastBuffer.txn = options && options.transaction;
        options.transaction.refCount = (options.transaction.refCount || 0) + 1;
        return fastBuffer;
      }
    },
    get(id, options) {
      if (this.decoderCopies) {
        let bytes2 = this.getBinaryFast(id, options);
        return bytes2 && (bytes2 == UNMODIFIED ? UNMODIFIED : this.decoder.decode(bytes2, options));
      }
      if (this.encoding == "binary")
        return this.getBinary(id, options);
      if (this.decoder) {
        let bytes2 = this.getBinary(id, options);
        return bytes2 && (bytes2 == UNMODIFIED ? UNMODIFIED : this.decoder.decode(bytes2));
      }
      let result = this.getString(id, options);
      if (result) {
        if (this.encoding == "json")
          return JSON.parse(result);
      }
      return result;
    },
    getEntry(id, options) {
      let value15 = this.get(id, options);
      if (value15 !== undefined) {
        if (this.useVersions)
          return {
            value: value15,
            version: getLastVersion()
          };
        else
          return {
            value: value15
          };
      }
    },
    directWrite(id, options) {
      let rc;
      let txn = env2.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
      let keySize = this.writeKey(id, keyBytes, 0);
      let dataOffset = (keySize >> 3) + 1 << 3;
      keyBytes.set(options.bytes, dataOffset);
      rc = directWrite(this.dbAddress, keySize, options.offset, options.bytes.length, txn.address || 0);
      if (rc < 0)
        lmdbError(rc);
    },
    getUserSharedBuffer(id, defaultBuffer, options) {
      let keySize;
      const setKeyBytes = () => {
        if (options?.envKey)
          keySize = this.writeKey(id, keyBytes, 0);
        else {
          keyBytes.dataView.setUint32(0, this.db.dbi);
          keySize = this.writeKey(id, keyBytes, 4);
        }
      };
      setKeyBytes();
      let sharedBuffer = getUserSharedBuffer(env2.address, keySize, defaultBuffer, options?.callback);
      sharedBuffer.notify = () => {
        setKeyBytes();
        return notifyUserCallbacks(env2.address, keySize);
      };
      return sharedBuffer;
    },
    attemptLock(id, version3, callback) {
      keyBytes.dataView.setUint32(0, this.db.dbi);
      keyBytes.dataView.setFloat64(4, version3);
      let keySize = this.writeKey(id, keyBytes, 12);
      return attemptLock(env2.address, keySize, callback);
    },
    unlock(id, version3, onlyCheck) {
      keyBytes.dataView.setUint32(0, this.db.dbi);
      keyBytes.dataView.setFloat64(4, version3);
      let keySize = this.writeKey(id, keyBytes, 12);
      return unlock(env2.address, keySize, onlyCheck);
    },
    hasLock(id, version3) {
      return this.unlock(id, version3, true);
    },
    resetReadTxn() {
      resetReadTxn();
    },
    _commitReadTxn() {
      if (readTxn) {
        readTxn.isCommitted = true;
        readTxn.commit();
      }
      lastReadTxnRef = null;
      readTxnRenewed = null;
      readTxn = null;
    },
    ensureReadTxn() {
      if (!env2.writeTxn && !readTxnRenewed)
        renewReadTxn(this);
    },
    doesExist(key, versionOrValue, options) {
      if (versionOrValue == null) {
        return this.getBinaryFast(key, options) === undefined == (versionOrValue === null);
      } else if (this.useVersions) {
        return this.getBinaryFast(key, options) !== undefined && (versionOrValue === IF_EXISTS2 || getLastVersion() === versionOrValue);
      } else {
        if (versionOrValue && versionOrValue["\x10binary-data\x02"])
          versionOrValue = versionOrValue["\x10binary-data\x02"];
        else if (this.encoder)
          versionOrValue = this.encoder.encode(versionOrValue);
        if (typeof versionOrValue == "string")
          versionOrValue = Buffer.from(versionOrValue);
        let defaultOptions = { start: versionOrValue, exactMatch: true };
        return this.getValuesCount(key, options ? Object.assign(defaultOptions, options) : defaultOptions) > 0;
      }
    },
    getValues(key, options) {
      let defaultOptions = {
        key,
        valuesForKey: true
      };
      if (options && options.snapshot === false)
        throw new Error("Can not disable snapshots for getValues");
      return this.getRange(options ? Object.assign(defaultOptions, options) : defaultOptions);
    },
    getKeys(options) {
      if (!options)
        options = {};
      options.values = false;
      return this.getRange(options);
    },
    getCount(options) {
      if (!options)
        options = {};
      options.onlyCount = true;
      return this.getRange(options).iterate();
    },
    getKeysCount(options) {
      if (!options)
        options = {};
      options.onlyCount = true;
      options.values = false;
      return this.getRange(options).iterate();
    },
    getValuesCount(key, options) {
      if (!options)
        options = {};
      options.key = key;
      options.valuesForKey = true;
      options.onlyCount = true;
      return this.getRange(options).iterate();
    },
    getRange(options) {
      let iterable = new RangeIterable;
      let textDecoder = new TextDecoder;
      if (!options)
        options = {};
      let includeValues = options.values !== false;
      let includeVersions = options.versions;
      let valuesForKey = options.valuesForKey;
      let limit = options.limit;
      let db = this.db;
      let snapshot = options.snapshot;
      if (snapshot === false && this.dupSort && includeValues)
        throw new Error("Can not disable snapshot on a" + " dupSort data store");
      let compression = this.compression;
      iterable.iterate = () => {
        const reverse = options.reverse;
        let currentKey = valuesForKey ? options.key : reverse || ("start" in options) ? options.start : DEFAULT_BEGINNING_KEY;
        let count = 0;
        let cursor, cursorRenewId, cursorAddress;
        let txn;
        let flags = (includeValues ? 256 : 0) | (reverse ? 1024 : 0) | (valuesForKey ? 2048 : 0) | (options.exactMatch ? 16384 : 0) | (options.inclusiveEnd ? 32768 : 0) | (options.exclusiveStart ? 65536 : 0);
        let store = this;
        function resetCursor() {
          try {
            if (cursor)
              finishCursor();
            let txnAddress;
            txn = options.transaction;
            if (txn) {
              if (txn.isDone)
                throw new Error("Can not iterate on range with transaction that is already" + " done");
              txnAddress = txn.address;
              if (!txnAddress) {
                throw new Error("Invalid transaction, it has no address");
              }
              cursor = null;
            } else {
              let writeTxn2 = env2.writeTxn;
              if (writeTxn2)
                snapshot = false;
              txn = env2.writeTxn || options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(store));
              cursor = !writeTxn2 && db.availableCursor;
            }
            if (cursor) {
              db.availableCursor = null;
              flags |= 8192;
            } else {
              cursor = new Cursor(db, txnAddress || 0);
            }
            cursorAddress = cursor.address;
            if (txn.use)
              txn.use();
            else
              txn.refCount = (txn.refCount || 0) + 1;
            if (snapshot === false) {
              cursorRenewId = renewId;
              txn.renewingRefCount = (txn.renewingRefCount || 0) + 1;
            }
          } catch (error23) {
            if (cursor) {
              try {
                cursor.close();
              } catch (error24) {
              }
            }
            throw error23;
          }
        }
        resetCursor();
        if (options.onlyCount) {
          flags |= 4096;
          let count2 = position2(options.offset);
          if (count2 < 0)
            lmdbError(count2);
          finishCursor();
          return count2;
        }
        function position2(offset) {
          if (!env2.address) {
            throw new Error("Can not iterate on a closed database");
          }
          let keySize = currentKey === undefined ? 0 : store.writeKey(currentKey, keyBytes, 0);
          let endAddress;
          if (valuesForKey) {
            if (options.start === undefined && options.end === undefined)
              endAddress = 0;
            else {
              let startAddress;
              if (store.encoder.writeKey) {
                startAddress = saveKey(options.start, store.encoder.writeKey, iterable, maxKeySize);
                keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
                endAddress = saveKey(options.end, store.encoder.writeKey, iterable, maxKeySize);
              } else if ((!options.start || options.start instanceof Uint8Array) && (!options.end || options.end instanceof Uint8Array)) {
                startAddress = saveKey(options.start, orderedBinary.writeKey, iterable, maxKeySize);
                keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
                endAddress = saveKey(options.end, orderedBinary.writeKey, iterable, maxKeySize);
              } else {
                throw new Error("Only key-based encoding is supported for start/end values");
                let encoded = store.encoder.encode(options.start);
                let bufferAddress = encoded.buffer.address || (encoded.buffer.address = getAddress(encoded.buffer) - encoded.byteOffset);
                startAddress = bufferAddress + encoded.byteOffset;
              }
            }
          } else
            endAddress = saveKey(reverse && !("end" in options) ? DEFAULT_BEGINNING_KEY : options.end, store.writeKey, iterable, maxKeySize);
          return position(cursorAddress, flags, offset || 0, keySize, endAddress);
        }
        function finishCursor() {
          if (!cursor || txn.isDone)
            return;
          if (iterable.onDone)
            iterable.onDone();
          if (cursorRenewId)
            txn.renewingRefCount--;
          if (txn.refCount <= 1 && txn.notCurrent) {
            cursor.close();
          }
          if (txn.done)
            txn.done();
          else if (--txn.refCount <= 0 && txn.notCurrent) {
            txn.abort();
            txn.isDone = true;
          }
          if (!txn.isDone) {
            if (db.availableCursor || txn != readTxn) {
              cursor.close();
            } else {
              db.availableCursor = cursor;
              db.cursorTxn = txn;
            }
          }
          cursor = null;
        }
        return {
          next() {
            let keySize, lastSize;
            if (cursorRenewId && (cursorRenewId != renewId || txn.isDone)) {
              if (flags & 65536)
                flags = flags & ~65536;
              resetCursor();
              keySize = position2(0);
            }
            if (!cursor) {
              return ITERATOR_DONE;
            }
            if (count === 0) {
              keySize = position2(options.offset);
            } else
              keySize = iterate(cursorAddress);
            if (keySize <= 0 || count++ >= limit) {
              if (keySize < -30700 && keySize !== -30798)
                lmdbError(keySize);
              finishCursor();
              return ITERATOR_DONE;
            }
            if (!valuesForKey || snapshot === false) {
              if (keySize > 20000) {
                if (keySize > 16777216)
                  lmdbError(keySize - 4294967296);
                throw new Error("Invalid key size " + keySize.toString(16));
              }
              currentKey = store.readKey(keyBytes, 32, keySize + 32);
            }
            if (includeValues) {
              let value15;
              lastSize = keyBytesView.getUint32(0, true);
              let bufferId = keyBytesView.getUint32(4, true);
              let bytes2;
              if (bufferId) {
                bytes2 = getMMapBuffer(bufferId, lastSize);
                if (store.encoding === "binary")
                  bytes2 = Buffer.from(bytes2);
              } else {
                bytes2 = compression ? compression.getValueBytes : getValueBytes;
                if (lastSize > bytes2.maxLength) {
                  store.lastSize = lastSize;
                  asSafeBuffer = store.encoding === "binary";
                  try {
                    bytes2 = store._returnLargeBuffer(() => getCurrentValue(cursorAddress));
                  } finally {
                    asSafeBuffer = false;
                  }
                } else
                  bytes2.length = lastSize;
              }
              if (store.decoder) {
                value15 = store.decoder.decode(bytes2, lastSize);
              } else if (store.encoding == "binary")
                value15 = bytes2.isGlobal ? Uint8ArraySlice2.call(bytes2, 0, lastSize) : bytes2;
              else {
                value15 = bytes2.utf8Slice ? bytes2.utf8Slice(0, lastSize) : textDecoder.decode(Uint8ArraySlice2.call(bytes2, 0, lastSize));
                if (store.encoding == "json" && value15)
                  value15 = JSON.parse(value15);
              }
              if (includeVersions)
                return {
                  value: {
                    key: currentKey,
                    value: value15,
                    version: getLastVersion()
                  }
                };
              else if (valuesForKey)
                return {
                  value: value15
                };
              else
                return {
                  value: {
                    key: currentKey,
                    value: value15
                  }
                };
            } else if (includeVersions) {
              return {
                value: {
                  key: currentKey,
                  version: getLastVersion()
                }
              };
            } else {
              return {
                value: currentKey
              };
            }
          },
          return() {
            finishCursor();
            return ITERATOR_DONE;
          },
          throw() {
            finishCursor();
            return ITERATOR_DONE;
          }
        };
      };
      return iterable;
    },
    getMany(keys2, callback) {
      let promise5 = callback ? undefined : new Promise((resolve) => callback = (error23, results) => resolve(results));
      this.prefetch(keys2, () => {
        let results = new Array(keys2.length);
        for (let i = 0, l = keys2.length;i < l; i++) {
          results[i] = get.call(this, keys2[i]);
        }
        callback(null, results);
      });
      return promise5;
    },
    getSharedBufferForGet(id, options) {
      let txn = env2.writeTxn || options && options.transaction || (readTxnRenewed ? readTxn : renewReadTxn(this));
      this.lastSize = this.keyIsCompatibility ? txn.getBinaryShared(id) : this.db.get(this.writeKey(id, keyBytes, 0));
      if (this.lastSize === -30798) {
        return;
      }
      return this.lastSize;
      this.lastSize = keyBytesView.getUint32(0, true);
      let bufferIndex = keyBytesView.getUint32(12, true);
      lastOffset = keyBytesView.getUint32(8, true);
      let buffer = buffers[bufferIndex];
      let startOffset;
      if (!buffer || lastOffset < (startOffset = buffer.startOffset) || lastOffset + this.lastSize > startOffset + 4294967296) {
        if (buffer)
          env2.detachBuffer(buffer.buffer);
        startOffset = (lastOffset >>> 16) * 65536;
        console.log("make buffer for address", bufferIndex * 4294967296 + startOffset);
        buffer = buffers[bufferIndex] = Buffer.from(getBufferForAddress(bufferIndex * 4294967296 + startOffset));
        buffer.startOffset = startOffset;
      }
      lastOffset -= startOffset;
      return buffer;
      return buffer.slice(lastOffset, lastOffset + this.lastSize);
    },
    prefetch(keys2, callback) {
      if (!keys2)
        throw new Error("An array of keys must be provided");
      if (!keys2.length) {
        if (callback) {
          callback(null);
          return;
        } else
          return Promise.resolve();
      }
      let buffers2 = [];
      let startPosition;
      let bufferHolder = {};
      let lastBuffer;
      for (let key of keys2) {
        let position2;
        if (key && key.key !== undefined && key.value !== undefined) {
          position2 = saveKey(key.value, this.writeKey, bufferHolder, maxKeySize, 2147483648);
          saveReferenceToBuffer();
          saveKey(key.key, this.writeKey, bufferHolder, maxKeySize);
        } else {
          position2 = saveKey(key, this.writeKey, bufferHolder, maxKeySize);
        }
        if (!startPosition)
          startPosition = position2;
        saveReferenceToBuffer();
      }
      function saveReferenceToBuffer() {
        if (bufferHolder.saveBuffer != lastBuffer) {
          buffers2.push(bufferHolder.saveBuffer);
          lastBuffer = bufferHolder.saveBuffer;
        }
      }
      saveKey(undefined, this.writeKey, bufferHolder, maxKeySize);
      saveReferenceToBuffer();
      outstandingReads++;
      prefetch(this.dbAddress, startPosition, (error23) => {
        outstandingReads--;
        if (error23)
          console.error("Error with prefetch", buffers2);
        else
          callback(null);
      });
      if (!callback)
        return new Promise((resolve) => callback = resolve);
    },
    useReadTransaction() {
      let txn = readTxnRenewed ? readTxn : renewReadTxn(this);
      if (!txn.use) {
        throw new Error("Can not use read transaction from a closed database");
      }
      if (!(readTxn.refCount - (readTxn.renewingRefCount || 0) > 0))
        txn.renew();
      txn.use();
      return txn;
    },
    close(callback) {
      this.status = "closing";
      let txnPromise;
      if (this.isRoot) {
        if (readTxn) {
          try {
            readTxn.abort();
          } catch (error23) {
          }
        } else
          readTxn = {};
        readTxn.isDone = true;
        Object.defineProperty(readTxn, "renew", {
          value: () => {
            throw new Error("Can not read from a closed database");
          },
          configurable: true
        });
        Object.defineProperty(readTxn, "use", {
          value: () => {
            throw new Error("Can not read from a closed database");
          },
          configurable: true
        });
        readTxnRenewed = null;
        txnPromise = this._endWrites && this._endWrites();
      }
      const doClose = () => {
        if (this.isRoot) {
          if (outstandingReads > 0) {
            return new Promise((resolve) => setTimeout(() => resolve(doClose()), 1));
          }
          env2.address = 0;
          try {
            env2.close();
          } catch (error23) {
          }
        } else
          this.db.close();
        this.status = "closed";
        if (callback)
          callback();
      };
      if (txnPromise)
        return txnPromise.then(doClose);
      else {
        doClose();
        return Promise.resolve();
      }
    },
    getStats() {
      let txn = env2.writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(this));
      let dbStats = this.db.stat();
      dbStats.root = env2.stat();
      Object.assign(dbStats, env2.info());
      dbStats.free = env2.freeStat();
      return dbStats;
    }
  });
  let get = LMDBStore.prototype.get;
  let lastReadTxnRef;
  function getMMapBuffer(bufferId, size) {
    let buffer = mmaps[bufferId];
    if (!buffer) {
      buffer = mmaps[bufferId] = getSharedBuffer(bufferId, env2.address);
    }
    let offset = keyBytesView.getUint32(8, true);
    return new Uint8Array(buffer, offset, size);
  }
  function renewReadTxn(store) {
    if (!env2.address) {
      throw new Error("Can not renew a transaction from a closed database");
    }
    if (!readTxn) {
      let retries = 0;
      let waitArray;
      do {
        try {
          let lastReadTxn = lastReadTxnRef && lastReadTxnRef.deref();
          readTxn = new Txn(env2, 131072, lastReadTxn && !lastReadTxn.isDone && lastReadTxn);
          if (readTxn.address == 0) {
            readTxn = lastReadTxn;
            if (readTxn.notCurrent)
              readTxn.notCurrent = false;
          }
          break;
        } catch (error23) {
          if (error23.message.includes("temporarily")) {
            if (!waitArray)
              waitArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
            Atomics.wait(waitArray, 0, 0, retries * 2);
          } else
            throw error23;
        }
      } while (retries++ < 100);
    }
    readTxnRenewed = setTimeout(resetReadTxn, 0);
    store.emit("begin-transaction");
    return readTxn;
  }
  function resetReadTxn() {
    renewId++;
    if (readTxnRenewed) {
      readTxnRenewed = null;
      if (readTxn.refCount - (readTxn.renewingRefCount || 0) > 0) {
        readTxn.notCurrent = true;
        lastReadTxnRef = new WeakRef(readTxn);
        readTxn = null;
      } else if (readTxn.address && !readTxn.isDone) {
        resetTxn(readTxn.address);
      } else {
        console.warn("Attempt to reset an invalid read txn", readTxn);
        throw new Error("Attempt to reset an invalid read txn");
      }
    }
  }
}
function makeReusableBuffer(size) {
  let bytes2 = typeof Buffer != "undefined" ? Buffer.alloc(size) : new Uint8Array(size);
  bytes2.maxLength = size;
  Object.defineProperty(bytes2, "length", {
    value: size,
    writable: true,
    configurable: true
  });
  return bytes2;
}
function allocateInstructionsBuffer() {
  readInstructions = typeof Buffer != "undefined" ? Buffer.alloc(DYNAMIC_KEY_BUFFER_SIZE2) : new Uint8Array(DYNAMIC_KEY_BUFFER_SIZE2);
  uint32Instructions = new Int32Array(readInstructions.buffer, 0, readInstructions.buffer.byteLength >> 2);
  uint32Instructions[2] = 4026531840;
  instructionsAddress = readInstructions.buffer.address = getAddress(readInstructions.buffer);
  readInstructions.dataView = instructionsDataView = new DataView(readInstructions.buffer, readInstructions.byteOffset, readInstructions.byteLength);
  savePosition2 = 0;
}
function recordReadInstruction(txnAddress, dbi, key, writeKey, maxKeySize, callback) {
  if (savePosition2 > 7800) {
    allocateInstructionsBuffer();
  }
  let start = savePosition2;
  let keyPosition = savePosition2 + 16;
  try {
    savePosition2 = key === undefined ? keyPosition : writeKey(key, readInstructions, keyPosition);
  } catch (error23) {
    if (error23.name == "RangeError") {
      if (8180 - start < maxKeySize) {
        allocateInstructionsBuffer();
        return recordReadInstruction(txnAddress, dbi, key, writeKey, maxKeySize, callback);
      }
      throw new Error("Key was too large, max key size is " + maxKeySize);
    } else
      throw error23;
  }
  let length = savePosition2 - keyPosition;
  if (length > maxKeySize) {
    savePosition2 = start;
    throw new Error("Key of size " + length + " was too large, max key size is " + maxKeySize);
  }
  uint32Instructions[(start >> 2) + 3] = length;
  uint32Instructions[(start >> 2) + 2] = dbi;
  savePosition2 = savePosition2 + 12 & 16777212;
  instructionsDataView.setFloat64(start, txnAddress, true);
  let callbackId = addReadCallback(() => {
    let position2 = start >> 2;
    let rc = thisInstructions[position2];
    callback(rc, thisInstructions[position2 + 1], thisInstructions[position2 + 2], thisInstructions[position2 + 3]);
  });
  let thisInstructions = uint32Instructions;
  return startRead(instructionsAddress + start, callbackId, {}, "read");
}
var IF_EXISTS2 = 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003542694326329068;
var DEFAULT_BEGINNING_KEY = Buffer.from([5]);
var ITERATOR_DONE = { done: true, value: undefined };
var Uint8ArraySlice2 = Uint8Array.prototype.slice;
var getValueBytes = globalBuffer;
if (!getValueBytes.maxLength) {
  getValueBytes.maxLength = getValueBytes.length;
  getValueBytes.isGlobal = true;
  Object.defineProperty(getValueBytes, "length", {
    value: getValueBytes.length,
    writable: true,
    configurable: true
  });
}
var START_ADDRESS_POSITION = 4064;
var NEW_BUFFER_THRESHOLD = 32768;
var SOURCE_SYMBOL = Symbol.for("source");
var UNMODIFIED = {};
var mmaps = [];
Txn.prototype.done = function() {
  this.refCount--;
  if (this.refCount === 0 && this.notCurrent) {
    this.abort();
    this.isDone = true;
  } else if (this.refCount < 0)
    throw new Error("Can not finish a transaction more times than it was used");
};
Txn.prototype.use = function() {
  this.refCount = (this.refCount || 0) + 1;
};
var readInstructions;
var readCallbacks = new Map;
var uint32Instructions;
var instructionsDataView = { setFloat64() {
}, setUint32() {
} };
var instructionsAddress;
var savePosition2 = 8000;
var DYNAMIC_KEY_BUFFER_SIZE2 = 8192;
var nextCallbackId = 0;
var addReadCallback = globalThis.__lmdb_read_callback;
if (!addReadCallback) {
  addReadCallback = globalThis.__lmdb_read_callback = function(callback) {
    let callbackId = nextCallbackId++;
    readCallbacks.set(callbackId, callback);
    return callbackId;
  };
  setReadCallback(function(callbackId) {
    readCallbacks.get(callbackId)();
    readCallbacks.delete(callbackId);
  });
}

// node_modules/lmdb/caching.js
function setGetLastVersion(get, getTxnId) {
  getLastVersion = get;
  getLastTxnId = getTxnId;
}
var getLastVersion;
var getLastTxnId;
var mapGet = Map.prototype.get;
var CachingStore = (Store, env2) => {
  let childTxnChanges;
  return class LMDBStore extends Store {
    constructor(dbName, options) {
      super(dbName, options);
      if (!env2.cacheCommitter) {
        env2.cacheCommitter = true;
        this.on("aftercommit", ({ next, last, txnId }) => {
          do {
            let meta = next.meta;
            let store = meta && meta.store;
            if (store) {
              if (next.flag & FAILED_CONDITION)
                store.cache.delete(meta.key);
              else {
                let expirationPriority = meta.valueSize >> 10;
                let cache = store.cache;
                let entry = mapGet.call(cache, meta.key);
                if (entry && !entry.txnId) {
                  entry.txnId = txnId;
                  cache.used(entry, expirationPriority + 4);
                }
              }
            }
          } while (next != last && (next = next.next));
        });
      }
      this.db.cachingDb = this;
      if (options.cache.clearKeptInterval)
        options.cache.clearKeptObjects = clearKeptObjects;
      this.cache = new WeakLRUCache(options.cache);
      if (options.cache.validated)
        this.cache.validated = true;
    }
    get isCaching() {
      return true;
    }
    get(id, options) {
      let value15;
      if (this.cache.validated) {
        let entry = this.cache.get(id);
        if (entry) {
          let cachedValue = entry.value;
          if (entry.txnId != null) {
            value15 = super.get(id, {
              ifNotTxnId: entry.txnId,
              transaction: options && options.transaction
            });
            if (value15 === UNMODIFIED)
              return cachedValue;
          } else
            return cachedValue;
        } else
          value15 = super.get(id, options);
      } else if (options && options.transaction) {
        return super.get(id, options);
      } else {
        value15 = this.cache.getValue(id);
        if (value15 !== undefined) {
          return value15;
        }
        value15 = super.get(id);
      }
      if (value15 && typeof value15 === "object" && !options && typeof id !== "object") {
        let entry = this.cache.setValue(id, value15, this.lastSize >> 10);
        if (this.useVersions) {
          entry.version = getLastVersion();
        }
        if (this.cache.validated)
          entry.txnId = getLastTxnId();
      }
      return value15;
    }
    getEntry(id, options) {
      let entry, value15;
      if (this.cache.validated) {
        entry = this.cache.get(id);
        if (entry) {
          if (entry.txnId != null) {
            value15 = super.get(id, {
              ifNotTxnId: entry.txnId,
              transaction: options && options.transaction
            });
            if (value15 === UNMODIFIED)
              return entry;
          } else
            return entry;
        } else
          value15 = super.get(id, options);
      } else if (options && options.transaction) {
        return super.getEntry(id, options);
      } else {
        entry = this.cache.get(id);
        if (entry !== undefined) {
          return entry;
        }
        value15 = super.get(id);
      }
      if (value15 === undefined)
        return;
      if (value15 && typeof value15 === "object" && typeof id !== "object") {
        entry = this.cache.setValue(id, value15, this.lastSize >> 10);
      } else
        entry = { value: value15 };
      if (this.useVersions)
        entry.version = getLastVersion();
      if (this.cache.validated)
        entry.txnId = getLastTxnId();
      return entry;
    }
    putEntry(id, entry, ifVersion) {
      let result = super.put(id, entry.value, entry.version, ifVersion);
      if (typeof id === "object")
        return result;
      if (result && result.then)
        this.cache.setManually(id, entry);
      else
        this.cache.set(id, entry);
    }
    put(id, value15, version3, ifVersion) {
      let result = super.put(id, value15, version3, ifVersion);
      if (typeof id !== "object") {
        if (value15 && value15["\x10binary-data\x02"]) {
          this.cache.delete(id);
          return result;
        }
        let entry;
        if (this.cachePuts === false) {
          this.cache.delete(id);
        } else {
          if (result?.isSync) {
            if (result.result)
              entry = this.cache.setValue(id, value15, 0);
            else {
              this.cache.delete(id);
              return result;
            }
          } else
            entry = this.cache.setValue(id, value15, -1);
        }
        if (childTxnChanges)
          childTxnChanges.add(id);
        if (version3 !== undefined && entry)
          entry.version = typeof version3 === "object" ? version3.version : version3;
      }
      return result;
    }
    putSync(id, value15, version3, ifVersion) {
      let result = super.putSync(id, value15, version3, ifVersion);
      if (id !== "object") {
        if (value15 && this.cachePuts !== false && typeof value15 === "object" && result) {
          let entry = this.cache.setValue(id, value15);
          if (childTxnChanges)
            childTxnChanges.add(id);
          if (version3 !== undefined) {
            entry.version = typeof version3 === "object" ? version3.version : version3;
          }
        } else
          this.cache.delete(id);
      }
      return result;
    }
    remove(id, ifVersion) {
      this.cache.delete(id);
      return super.remove(id, ifVersion);
    }
    removeSync(id, ifVersion) {
      this.cache.delete(id);
      return super.removeSync(id, ifVersion);
    }
    clearAsync(callback) {
      this.cache.clear();
      return super.clearAsync(callback);
    }
    clearSync() {
      this.cache.clear();
      super.clearSync();
    }
    childTransaction(callback) {
      return super.childTransaction(() => {
        let cache = this.cache;
        let previousChanges = childTxnChanges;
        try {
          childTxnChanges = new Set;
          return when(callback(), (result) => {
            if (result === ABORT)
              return abort();
            childTxnChanges = previousChanges;
            return result;
          }, abort);
        } catch (error23) {
          abort(error23);
        }
        function abort(error23) {
          for (let id of childTxnChanges)
            cache.delete(id);
          childTxnChanges = previousChanges;
          if (error23)
            throw error23;
          else
            return ABORT;
        }
      });
    }
    doesExist(key, versionOrValue) {
      let entry = this.cache.get(key);
      if (entry) {
        if (versionOrValue == null) {
          return versionOrValue !== null;
        } else if (this.useVersions) {
          return versionOrValue === IF_EXISTS || entry.version === versionOrValue;
        }
      }
      return super.doesExist(key, versionOrValue);
    }
  };
};

// node_modules/lmdb/open.js
function setRequire(require2) {
  moduleRequire = require2;
}
function open(path2, options) {
  if (nativeAddon.open) {
    if (nativeAddon.open !== open) {
      getLastVersion2 = nativeAddon.getLastVersion;
      getLastTxnId2 = nativeAddon.getLastTxnId;
      setGetLastVersion(getLastVersion2, getLastTxnId2);
      return nativeAddon.open(path2, options);
    }
  } else {
    nativeAddon.open = open;
    nativeAddon.getLastVersion = getLastVersion2;
    nativeAddon.getLastTxnId = getLastTxnId2;
  }
  if (!keyBytes)
    allocateFixedBuffer();
  if (typeof path2 == "object" && !options) {
    options = path2;
    path2 = options.path;
  }
  options = options || {};
  let noFSAccess = options.noFSAccess;
  let userOptions = options;
  if (path2 == null) {
    options = Object.assign({
      deleteOnClose: true,
      noSync: true
    }, options);
    path2 = tmpdir() + "/" + Math.floor(Math.random() * 2821109907455).toString(36) + ".mdb";
  } else if (!options)
    options = {};
  let extension = path.extname(path2);
  let name = path.basename(path2, extension);
  let is32Bit = arch().endsWith("32");
  let isLegacyLMDB = version2.patch < 90;
  let remapChunks = (options.remapChunks || options.encryptionKey || (options.mapSize ? is32Bit && options.mapSize > 4294967296 : is32Bit)) && !isLegacyLMDB;
  let userMapSize = options.mapSize;
  options = Object.assign({
    noSubdir: Boolean(extension),
    isRoot: true,
    maxDbs: 12,
    remapChunks,
    keyBytes,
    overlappingSync: options.noSync || options.readOnly ? false : os != "win32",
    mapSize: remapChunks ? 4503599627370496 : isLegacyLMDB ? is32Bit ? 16777216 : 4294967296 : 131072,
    safeRestore: process.env.LMDB_RESTORE == "safe"
  }, options);
  options.path = path2;
  if (options.asyncTransactionOrder == "strict") {
    options.strictAsyncOrder = true;
  }
  if (nativeAddon.version.major + nativeAddon.version.minor / 100 + nativeAddon.version.patch / 1e4 < 0.098) {
    options.overlappingSync = false;
    options.trackMetrics = false;
    options.usePreviousSnapshot = false;
    options.safeRestore = false;
    options.remapChunks = false;
    if (!userMapSize)
      options.mapSize = 1073741824;
  }
  if (!exists(options.noSubdir ? path.dirname(path2) : path2))
    fs.mkdirSync(options.noSubdir ? path.dirname(path2) : path2, { recursive: true });
  function makeCompression(compressionOptions) {
    if (compressionOptions instanceof Compression)
      return compressionOptions;
    let useDefault = typeof compressionOptions != "object";
    if (useDefault && defaultCompression)
      return defaultCompression;
    compressionOptions = Object.assign({
      threshold: 1000,
      dictionary: fs.readFileSync(new URL("./dict/dict.txt", import.meta.url.replace(/dist[\\\/]index.cjs$/, ""))),
      getValueBytes: makeReusableBuffer(0)
    }, compressionOptions);
    let compression = Object.assign(new Compression(compressionOptions), compressionOptions);
    if (useDefault)
      defaultCompression = compression;
    return compression;
  }
  if (isLegacyLMDB) {
    Object.assign(options, { overlappingSync: false, remapChunks: false, safeRestore: false });
  }
  if (options.compression)
    options.compression = makeCompression(options.compression);
  let flags = (options.overlappingSync ? 4096 : 0) | (options.noSubdir ? 16384 : 0) | (options.noSync ? 65536 : 0) | (options.readOnly ? 131072 : 0) | (options.noMetaSync ? 262144 : 0) | (options.useWritemap ? 524288 : 0) | (options.mapAsync ? 1048576 : 0) | (options.noReadAhead ? 8388608 : 0) | (options.noMemInit ? 16777216 : 0) | (options.usePreviousSnapshot ? 33554432 : 0) | (options.remapChunks ? 67108864 : 0) | (options.safeRestore ? 2048 : 0) | (options.trackMetrics ? 1024 : 0);
  let env2 = new Env;
  let jsFlags = (options.overlappingSync ? 4096 : 0) | (options.separateFlushed ? 1 : 0) | (options.deleteOnClose ? 2 : 0);
  let rc = env2.open(options, flags, jsFlags);
  env2.path = path2;
  if (rc)
    lmdbError(rc);
  delete options.keyBytes;
  let maxKeySize = env2.getMaxKeySize();
  maxKeySize = Math.min(maxKeySize, options.pageSize ? MAX_KEY_SIZE : DEFAULT_MAX_KEY_SIZE);
  flags = getEnvFlags(env2.address);
  if (flags & 4096) {
    if (userOptions.noSync) {
      env2.close();
      throw new Error("Can not set noSync on a database that was opened with overlappingSync");
    }
  } else if (options.overlappingSync) {
    if (userOptions.overlappingSync) {
      env2.close();
      throw new Error("Can not enable overlappingSync on a database that was opened without this flag");
    }
    options.overlappingSync = false;
    jsFlags = jsFlags & 255;
    setJSFlags(env2.address, jsFlags);
  }
  env2.readerCheck();
  if ((options.overlappingSync || options.deleteOnClose) && !hasRegisteredOnExit && process.on) {
    hasRegisteredOnExit = true;
    process.on("exit", onExit2);
  }

  class LMDBStore extends EventEmitter {
    constructor(dbName, dbOptions) {
      super();
      if (dbName === undefined)
        throw new Error("Database name must be supplied in name property (may be null for root database)");
      if (options.compression && dbOptions.compression !== false && typeof dbOptions.compression != "object")
        dbOptions.compression = options.compression;
      else if (dbOptions.compression)
        dbOptions.compression = makeCompression(dbOptions.compression);
      if (dbOptions.dupSort && (dbOptions.useVersions || dbOptions.cache)) {
        throw new Error("The dupSort flag can not be combined with versions or caching");
      }
      let keyIsBuffer = dbOptions.keyIsBuffer;
      if (dbOptions.keyEncoding == "uint32") {
        dbOptions.keyIsUint32 = true;
      } else if (dbOptions.keyEncoder) {
        if (dbOptions.keyEncoder.enableNullTermination) {
          dbOptions.keyEncoder.enableNullTermination();
        } else
          keyIsBuffer = true;
      } else if (dbOptions.keyEncoding == "binary") {
        keyIsBuffer = true;
      }
      let flags2 = (dbOptions.reverseKey ? 2 : 0) | (dbOptions.dupSort ? 4 : 0) | (dbOptions.dupFixed ? 16 : 0) | (dbOptions.integerDup ? 32 : 0) | (dbOptions.reverseDup ? 64 : 0) | (!options.readOnly && dbOptions.create !== false ? 262144 : 0) | (dbOptions.useVersions ? 256 : 0);
      let keyType = dbOptions.keyIsUint32 || dbOptions.keyEncoding == "uint32" ? 2 : keyIsBuffer ? 3 : 0;
      if (keyType == 2)
        flags2 |= 8;
      if (options.readOnly) {
        this.resetReadTxn();
        this.ensureReadTxn();
        this.db = new Dbi(env2, flags2, dbName, keyType, dbOptions.compression);
      } else {
        this.transactionSync(() => {
          this.db = new Dbi(env2, flags2, dbName, keyType, dbOptions.compression);
        }, options.overlappingSync ? 65538 : 2);
      }
      this._commitReadTxn();
      if (!this.db || this.db.dbi == 4294967295) {
        throw new Error("Database not found");
      }
      this.dbAddress = this.db.address;
      this.db.name = dbName || null;
      this.name = dbName;
      this.status = "open";
      this.env = env2;
      this.reads = 0;
      this.writes = 0;
      this.transactions = 0;
      this.averageTransactionTime = 5;
      if (dbOptions.syncBatchThreshold)
        console.warn("syncBatchThreshold is no longer supported");
      if (dbOptions.immediateBatchThreshold)
        console.warn("immediateBatchThreshold is no longer supported");
      this.commitDelay = DEFAULT_COMMIT_DELAY;
      Object.assign(this, {
        path: options.path,
        encoding: options.encoding,
        strictAsyncOrder: options.strictAsyncOrder
      }, dbOptions);
      let Encoder;
      if (this.encoder && this.encoder.Encoder) {
        Encoder = this.encoder.Encoder;
        this.encoder = null;
      }
      if (!Encoder && !(this.encoder && this.encoder.encode) && (!this.encoding || this.encoding == "msgpack" || this.encoding == "cbor")) {
        Encoder = this.encoding == "cbor" ? moduleRequire("cbor-x").Encoder : MsgpackrEncoder;
      }
      if (Encoder) {
        this.encoder = new Encoder(Object.assign(assignConstrainedProperties(["copyBuffers", "getStructures", "saveStructures", "useFloat32", "useRecords", "structuredClone", "variableMapSize", "useTimestamp32", "largeBigIntToFloat", "encodeUndefinedAsNil", "int64AsNumber", "onInvalidDate", "mapsAsObjects", "useTag259ForMaps", "pack", "maxSharedStructures", "shouldShareStructure", "randomAccessStructure", "freezeData"], this.sharedStructuresKey !== undefined ? this.setupSharedStructures() : {
          copyBuffers: true
        }, options, dbOptions), this.encoder));
      }
      if (this.encoding == "json") {
        this.encoder = {
          encode: JSON.stringify
        };
      } else if (this.encoder) {
        this.decoder = this.encoder;
        this.decoderCopies = !this.encoder.needsStableBuffer;
      }
      this.maxKeySize = maxKeySize;
      applyKeyHandling(this);
      allDbs.set(dbName ? name + "-" + dbName : name, this);
    }
    openDB(dbName, dbOptions) {
      if (this.dupSort && this.name == null)
        throw new Error("Can not open named databases if the main database is dupSort");
      if (typeof dbName == "object" && !dbOptions) {
        dbOptions = dbName;
        dbName = dbOptions.name;
      } else
        dbOptions = dbOptions || {};
      try {
        return dbOptions.cache ? new (CachingStore(LMDBStore, env2))(dbName, dbOptions) : new LMDBStore(dbName, dbOptions);
      } catch (error23) {
        if (error23.message == "Database not found")
          return;
        if (error23.message.indexOf("MDB_DBS_FULL") > -1) {
          error23.message += " (increase your maxDbs option)";
        }
        throw error23;
      }
    }
    open(dbOptions, callback) {
      let db = this.openDB(dbOptions);
      if (callback)
        callback(null, db);
      return db;
    }
    backup(path3, compact) {
      if (noFSAccess)
        return;
      fs.mkdirSync(path.dirname(path3), { recursive: true });
      return new Promise((resolve, reject) => env2.copy(path3, compact, (error23) => {
        if (error23) {
          reject(error23);
        } else {
          resolve();
        }
      }));
    }
    isOperational() {
      return this.status == "open";
    }
    sync(callback) {
      return env2.sync(callback || function(error23) {
        if (error23) {
          console.error(error23);
        }
      });
    }
    deleteDB() {
      console.warn("deleteDB() is deprecated, use drop or dropSync instead");
      return this.dropSync();
    }
    dropSync() {
      this.transactionSync(() => this.db.drop({
        justFreePages: false
      }), options.overlappingSync ? 65538 : 2);
    }
    clear(callback) {
      if (typeof callback == "function")
        return this.clearAsync(callback);
      console.warn("clear() is deprecated, use clearAsync or clearSync instead");
      this.clearSync();
    }
    clearSync() {
      if (this.encoder) {
        if (this.encoder.clearSharedData)
          this.encoder.clearSharedData();
        else if (this.encoder.structures)
          this.encoder.structures = [];
      }
      this.transactionSync(() => this.db.drop({
        justFreePages: true
      }), options.overlappingSync ? 65538 : 2);
    }
    readerCheck() {
      return env2.readerCheck();
    }
    readerList() {
      return env2.readerList().join("");
    }
    setupSharedStructures() {
      const getStructures = () => {
        let lastVersion;
        if (this.useVersions)
          lastVersion = getLastVersion2();
        let buffer = this.getBinary(this.sharedStructuresKey);
        if (this.useVersions)
          setLastVersion(lastVersion);
        return buffer && this.decoder.decode(buffer);
      };
      return {
        saveStructures: (structures, isCompatible) => {
          return this.transactionSync(() => {
            let existingStructuresBuffer = this.getBinary(this.sharedStructuresKey);
            let existingStructures = existingStructuresBuffer && this.decoder.decode(existingStructuresBuffer);
            if (typeof isCompatible == "function" ? !isCompatible(existingStructures) : existingStructures && existingStructures.length != isCompatible)
              return false;
            this.put(this.sharedStructuresKey, structures);
          }, options.overlappingSync ? 65536 : 0);
        },
        getStructures,
        copyBuffers: true
      };
    }
  }
  const putSync = LMDBStore.prototype.putSync;
  const removeSync = LMDBStore.prototype.removeSync;
  addReadMethods(LMDBStore, { env: env2, maxKeySize, keyBytes, keyBytesView, getLastVersion: getLastVersion2 });
  if (!options.readOnly)
    addWriteMethods(LMDBStore, {
      env: env2,
      maxKeySize,
      fixedBuffer: keyBytes,
      resetReadTxn: LMDBStore.prototype.resetReadTxn,
      ...options
    });
  LMDBStore.prototype.supports = {
    permanence: true,
    bufferKeys: true,
    promises: true,
    snapshots: true,
    clear: true,
    status: true,
    deferredOpen: true,
    openCallback: true
  };
  let Class = options.cache ? CachingStore(LMDBStore, env2) : LMDBStore;
  return options.asClass ? Class : new Class(options.name || null, options);
}
function getLastVersion2() {
  return keyBytesView.getFloat64(16, true);
}
function setLastVersion(version3) {
  return keyBytesView.setFloat64(16, version3, true);
}
function getLastTxnId2() {
  return keyBytesView.getUint32(32, true);
}
function allocateFixedBuffer() {
  keyBytes = typeof Buffer != "undefined" ? Buffer.allocUnsafeSlow(KEY_BUFFER_SIZE) : new Uint8Array(KEY_BUFFER_SIZE);
  const keyBuffer = keyBytes.buffer;
  keyBytesView = keyBytes.dataView || (keyBytes.dataView = new DataView(keyBytes.buffer, 0, KEY_BUFFER_SIZE));
  keyBytes.uint32 = new Uint32Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 2);
  keyBytes.float64 = new Float64Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 3);
  keyBytes.uint32.address = keyBytes.address = keyBuffer.address = getAddress(keyBuffer);
}
function exists(path2) {
  if (fs.existsSync)
    return fs.existsSync(path2);
  try {
    return fs.statSync(path2);
  } catch (error23) {
    return false;
  }
}
function assignConstrainedProperties(allowedProperties, target) {
  for (let i = 2;i < arguments.length; i++) {
    let source = arguments[i];
    for (let key in source) {
      if (allowedProperties.includes(key))
        target[key] = source[key];
    }
  }
  return target;
}
var moduleRequire = __require;
setGetLastVersion(getLastVersion2, getLastTxnId2);
var keyBytes;
var keyBytesView;
var { onExit: onExit2, getEnvsPointer, setEnvsPointer, getEnvFlags, setJSFlags } = nativeAddon;
if (globalThis.__lmdb_envs__)
  setEnvsPointer(globalThis.__lmdb_envs__);
else
  globalThis.__lmdb_envs__ = getEnvsPointer();
var MAX_KEY_SIZE = 4026;
var DEFAULT_MAX_KEY_SIZE = 1978;
var DEFAULT_COMMIT_DELAY = 0;
var allDbs = new Map;
var defaultCompression;
var hasRegisteredOnExit;
var KEY_BUFFER_SIZE = 4096;
// node_modules/lmdb/index.js
import {EventEmitter as EventEmitter2} from "events";
import {arch as arch3, tmpdir as tmpdir2, platform} from "os";
import fs2 from "fs";

// node_modules/msgpackr/unpack.js
function checkedRead(options) {
  try {
    if (!currentUnpackr.trusted && !sequentialMode) {
      let sharedLength = currentStructures.sharedLength || 0;
      if (sharedLength < currentStructures.length)
        currentStructures.length = sharedLength;
    }
    let result;
    if (currentUnpackr.randomAccessStructure && src[position2] < 64 && src[position2] >= 32 && readStruct) {
      result = readStruct(src, position2, srcEnd, currentUnpackr);
      src = null;
      if (!(options && options.lazy) && result)
        result = result.toJSON();
      position2 = srcEnd;
    } else
      result = read3();
    if (bundledStrings) {
      position2 = bundledStrings.postBundlePosition;
      bundledStrings = null;
    }
    if (sequentialMode)
      currentStructures.restoreStructures = null;
    if (position2 == srcEnd) {
      if (currentStructures && currentStructures.restoreStructures)
        restoreStructures();
      currentStructures = null;
      src = null;
      if (referenceMap)
        referenceMap = null;
    } else if (position2 > srcEnd) {
      throw new Error("Unexpected end of MessagePack data");
    } else if (!sequentialMode) {
      let jsonView;
      try {
        jsonView = JSON.stringify(result, (_, value15) => typeof value15 === "bigint" ? `${value15}n` : value15).slice(0, 100);
      } catch (error23) {
        jsonView = "(JSON view not available " + error23 + ")";
      }
      throw new Error("Data read, but end of buffer not reached " + jsonView);
    }
    return result;
  } catch (error23) {
    if (currentStructures && currentStructures.restoreStructures)
      restoreStructures();
    clearSource();
    if (error23 instanceof RangeError || error23.message.startsWith("Unexpected end of buffer") || position2 > srcEnd) {
      error23.incomplete = true;
    }
    throw error23;
  }
}
function restoreStructures() {
  for (let id in currentStructures.restoreStructures) {
    currentStructures[id] = currentStructures.restoreStructures[id];
  }
  currentStructures.restoreStructures = null;
}
function read3() {
  let token = src[position2++];
  if (token < 160) {
    if (token < 128) {
      if (token < 64)
        return token;
      else {
        let structure = currentStructures[token & 63] || currentUnpackr.getStructures && loadStructures()[token & 63];
        if (structure) {
          if (!structure.read) {
            structure.read = createStructureReader(structure, token & 63);
          }
          return structure.read();
        } else
          return token;
      }
    } else if (token < 144) {
      token -= 128;
      if (currentUnpackr.mapsAsObjects) {
        let object13 = {};
        for (let i = 0;i < token; i++) {
          let key = readKey();
          if (key === "__proto__")
            key = "__proto_";
          object13[key] = read3();
        }
        return object13;
      } else {
        let map3 = new Map;
        for (let i = 0;i < token; i++) {
          map3.set(read3(), read3());
        }
        return map3;
      }
    } else {
      token -= 144;
      let array5 = new Array(token);
      for (let i = 0;i < token; i++) {
        array5[i] = read3();
      }
      if (currentUnpackr.freezeData)
        return Object.freeze(array5);
      return array5;
    }
  } else if (token < 192) {
    let length = token - 160;
    if (srcStringEnd >= position2) {
      return srcString.slice(position2 - srcStringStart, (position2 += length) - srcStringStart);
    }
    if (srcStringEnd == 0 && srcEnd < 140) {
      let string7 = length < 16 ? shortStringInJS(length) : longStringInJS(length);
      if (string7 != null)
        return string7;
    }
    return readFixedString(length);
  } else {
    let value15;
    switch (token) {
      case 192:
        return null;
      case 193:
        if (bundledStrings) {
          value15 = read3();
          if (value15 > 0)
            return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value15);
          else
            return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 -= value15);
        }
        return C1;
      case 194:
        return false;
      case 195:
        return true;
      case 196:
        value15 = src[position2++];
        if (value15 === undefined)
          throw new Error("Unexpected end of buffer");
        return readBin(value15);
      case 197:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        return readBin(value15);
      case 198:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        return readBin(value15);
      case 199:
        return readExt(src[position2++]);
      case 200:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        return readExt(value15);
      case 201:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        return readExt(value15);
      case 202:
        value15 = dataView.getFloat32(position2);
        if (currentUnpackr.useFloat32 > 2) {
          let multiplier = mult10[(src[position2] & 127) << 1 | src[position2 + 1] >> 7];
          position2 += 4;
          return (multiplier * value15 + (value15 > 0 ? 0.5 : -0.5) >> 0) / multiplier;
        }
        position2 += 4;
        return value15;
      case 203:
        value15 = dataView.getFloat64(position2);
        position2 += 8;
        return value15;
      case 204:
        return src[position2++];
      case 205:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        return value15;
      case 206:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        return value15;
      case 207:
        if (currentUnpackr.int64AsType === "number") {
          value15 = dataView.getUint32(position2) * 4294967296;
          value15 += dataView.getUint32(position2 + 4);
        } else if (currentUnpackr.int64AsType === "string") {
          value15 = dataView.getBigUint64(position2).toString();
        } else if (currentUnpackr.int64AsType === "auto") {
          value15 = dataView.getBigUint64(position2);
          if (value15 <= BigInt(2) << BigInt(52))
            value15 = Number(value15);
        } else
          value15 = dataView.getBigUint64(position2);
        position2 += 8;
        return value15;
      case 208:
        return dataView.getInt8(position2++);
      case 209:
        value15 = dataView.getInt16(position2);
        position2 += 2;
        return value15;
      case 210:
        value15 = dataView.getInt32(position2);
        position2 += 4;
        return value15;
      case 211:
        if (currentUnpackr.int64AsType === "number") {
          value15 = dataView.getInt32(position2) * 4294967296;
          value15 += dataView.getUint32(position2 + 4);
        } else if (currentUnpackr.int64AsType === "string") {
          value15 = dataView.getBigInt64(position2).toString();
        } else if (currentUnpackr.int64AsType === "auto") {
          value15 = dataView.getBigInt64(position2);
          if (value15 >= BigInt(-2) << BigInt(52) && value15 <= BigInt(2) << BigInt(52))
            value15 = Number(value15);
        } else
          value15 = dataView.getBigInt64(position2);
        position2 += 8;
        return value15;
      case 212:
        value15 = src[position2++];
        if (value15 == 114) {
          return recordDefinition(src[position2++] & 63);
        } else {
          let extension = currentExtensions[value15];
          if (extension) {
            if (extension.read) {
              position2++;
              return extension.read(read3());
            } else if (extension.noBuffer) {
              position2++;
              return extension();
            } else
              return extension(src.subarray(position2, ++position2));
          } else
            throw new Error("Unknown extension " + value15);
        }
      case 213:
        value15 = src[position2];
        if (value15 == 114) {
          position2++;
          return recordDefinition(src[position2++] & 63, src[position2++]);
        } else
          return readExt(2);
      case 214:
        return readExt(4);
      case 215:
        return readExt(8);
      case 216:
        return readExt(16);
      case 217:
        value15 = src[position2++];
        if (srcStringEnd >= position2) {
          return srcString.slice(position2 - srcStringStart, (position2 += value15) - srcStringStart);
        }
        return readString8(value15);
      case 218:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        if (srcStringEnd >= position2) {
          return srcString.slice(position2 - srcStringStart, (position2 += value15) - srcStringStart);
        }
        return readString16(value15);
      case 219:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        if (srcStringEnd >= position2) {
          return srcString.slice(position2 - srcStringStart, (position2 += value15) - srcStringStart);
        }
        return readString32(value15);
      case 220:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        return readArray(value15);
      case 221:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        return readArray(value15);
      case 222:
        value15 = dataView.getUint16(position2);
        position2 += 2;
        return readMap(value15);
      case 223:
        value15 = dataView.getUint32(position2);
        position2 += 4;
        return readMap(value15);
      default:
        if (token >= 224)
          return token - 256;
        if (token === undefined) {
          let error23 = new Error("Unexpected end of MessagePack data");
          error23.incomplete = true;
          throw error23;
        }
        throw new Error("Unknown MessagePack token " + token);
    }
  }
}
function createStructureReader(structure, firstId) {
  function readObject() {
    if (readObject.count++ > inlineObjectReadThreshold) {
      let readObject2 = structure.read = new Function("r", "return function(){return " + (currentUnpackr.freezeData ? "Object.freeze" : "") + "({" + structure.map((key) => key === "__proto__" ? "__proto_:r()" : validName.test(key) ? key + ":r()" : "[" + JSON.stringify(key) + "]:r()").join(",") + "})}")(read3);
      if (structure.highByte === 0)
        structure.read = createSecondByteReader(firstId, structure.read);
      return readObject2();
    }
    let object13 = {};
    for (let i = 0, l = structure.length;i < l; i++) {
      let key = structure[i];
      if (key === "__proto__")
        key = "__proto_";
      object13[key] = read3();
    }
    if (currentUnpackr.freezeData)
      return Object.freeze(object13);
    return object13;
  }
  readObject.count = 0;
  if (structure.highByte === 0) {
    return createSecondByteReader(firstId, readObject);
  }
  return readObject;
}
function loadStructures() {
  let loadedStructures = saveState(() => {
    src = null;
    return currentUnpackr.getStructures();
  });
  return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures);
}
function setExtractor(extractStrings) {
  isNativeAccelerationEnabled = true;
  readFixedString = readString(1);
  readString8 = readString(2);
  readString16 = readString(3);
  readString32 = readString(5);
  function readString(headerLength) {
    return function readString(length) {
      let string7 = strings[stringPosition++];
      if (string7 == null) {
        if (bundledStrings)
          return readStringJS(length);
        let byteOffset = src.byteOffset;
        let extraction = extractStrings(position2 - headerLength + byteOffset, srcEnd + byteOffset, src.buffer);
        if (typeof extraction == "string") {
          string7 = extraction;
          strings = EMPTY_ARRAY;
        } else {
          strings = extraction;
          stringPosition = 1;
          srcStringEnd = 1;
          string7 = strings[0];
          if (string7 === undefined)
            throw new Error("Unexpected end of buffer");
        }
      }
      let srcStringLength = string7.length;
      if (srcStringLength <= length) {
        position2 += length;
        return string7;
      }
      srcString = string7;
      srcStringStart = position2;
      srcStringEnd = position2 + srcStringLength;
      position2 += length;
      return string7.slice(0, length);
    };
  }
}
function readStringJS(length) {
  let result;
  if (length < 16) {
    if (result = shortStringInJS(length))
      return result;
  }
  if (length > 64 && decoder)
    return decoder.decode(src.subarray(position2, position2 += length));
  const end = position2 + length;
  const units = [];
  result = "";
  while (position2 < end) {
    const byte1 = src[position2++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      const byte2 = src[position2++] & 63;
      units.push((byte1 & 31) << 6 | byte2);
    } else if ((byte1 & 240) === 224) {
      const byte2 = src[position2++] & 63;
      const byte3 = src[position2++] & 63;
      units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 248) === 240) {
      const byte2 = src[position2++] & 63;
      const byte3 = src[position2++] & 63;
      const byte4 = src[position2++] & 63;
      let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(unit >>> 10 & 1023 | 55296);
        unit = 56320 | unit & 1023;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= 4096) {
      result += fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += fromCharCode.apply(String, units);
  }
  return result;
}
function readString(source, start, length) {
  let existingSrc = src;
  src = source;
  position2 = start;
  try {
    return readStringJS(length);
  } finally {
    src = existingSrc;
  }
}
function readArray(length) {
  let array5 = new Array(length);
  for (let i = 0;i < length; i++) {
    array5[i] = read3();
  }
  if (currentUnpackr.freezeData)
    return Object.freeze(array5);
  return array5;
}
function readMap(length) {
  if (currentUnpackr.mapsAsObjects) {
    let object13 = {};
    for (let i = 0;i < length; i++) {
      let key = readKey();
      if (key === "__proto__")
        key = "__proto_";
      object13[key] = read3();
    }
    return object13;
  } else {
    let map3 = new Map;
    for (let i = 0;i < length; i++) {
      map3.set(read3(), read3());
    }
    return map3;
  }
}
function longStringInJS(length) {
  let start = position2;
  let bytes2 = new Array(length);
  for (let i = 0;i < length; i++) {
    const byte2 = src[position2++];
    if ((byte2 & 128) > 0) {
      position2 = start;
      return;
    }
    bytes2[i] = byte2;
  }
  return fromCharCode.apply(String, bytes2);
}
function shortStringInJS(length) {
  if (length < 4) {
    if (length < 2) {
      if (length === 0)
        return "";
      else {
        let a = src[position2++];
        if ((a & 128) > 1) {
          position2 -= 1;
          return;
        }
        return fromCharCode(a);
      }
    } else {
      let a = src[position2++];
      let b = src[position2++];
      if ((a & 128) > 0 || (b & 128) > 0) {
        position2 -= 2;
        return;
      }
      if (length < 3)
        return fromCharCode(a, b);
      let c = src[position2++];
      if ((c & 128) > 0) {
        position2 -= 3;
        return;
      }
      return fromCharCode(a, b, c);
    }
  } else {
    let a = src[position2++];
    let b = src[position2++];
    let c = src[position2++];
    let d = src[position2++];
    if ((a & 128) > 0 || (b & 128) > 0 || (c & 128) > 0 || (d & 128) > 0) {
      position2 -= 4;
      return;
    }
    if (length < 6) {
      if (length === 4)
        return fromCharCode(a, b, c, d);
      else {
        let e = src[position2++];
        if ((e & 128) > 0) {
          position2 -= 5;
          return;
        }
        return fromCharCode(a, b, c, d, e);
      }
    } else if (length < 8) {
      let e = src[position2++];
      let f = src[position2++];
      if ((e & 128) > 0 || (f & 128) > 0) {
        position2 -= 6;
        return;
      }
      if (length < 7)
        return fromCharCode(a, b, c, d, e, f);
      let g = src[position2++];
      if ((g & 128) > 0) {
        position2 -= 7;
        return;
      }
      return fromCharCode(a, b, c, d, e, f, g);
    } else {
      let e = src[position2++];
      let f = src[position2++];
      let g = src[position2++];
      let h = src[position2++];
      if ((e & 128) > 0 || (f & 128) > 0 || (g & 128) > 0 || (h & 128) > 0) {
        position2 -= 8;
        return;
      }
      if (length < 10) {
        if (length === 8)
          return fromCharCode(a, b, c, d, e, f, g, h);
        else {
          let i = src[position2++];
          if ((i & 128) > 0) {
            position2 -= 9;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i);
        }
      } else if (length < 12) {
        let i = src[position2++];
        let j = src[position2++];
        if ((i & 128) > 0 || (j & 128) > 0) {
          position2 -= 10;
          return;
        }
        if (length < 11)
          return fromCharCode(a, b, c, d, e, f, g, h, i, j);
        let k = src[position2++];
        if ((k & 128) > 0) {
          position2 -= 11;
          return;
        }
        return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
      } else {
        let i = src[position2++];
        let j = src[position2++];
        let k = src[position2++];
        let l = src[position2++];
        if ((i & 128) > 0 || (j & 128) > 0 || (k & 128) > 0 || (l & 128) > 0) {
          position2 -= 12;
          return;
        }
        if (length < 14) {
          if (length === 12)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
          else {
            let m = src[position2++];
            if ((m & 128) > 0) {
              position2 -= 13;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
          }
        } else {
          let m = src[position2++];
          let n = src[position2++];
          if ((m & 128) > 0 || (n & 128) > 0) {
            position2 -= 14;
            return;
          }
          if (length < 15)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
          let o = src[position2++];
          if ((o & 128) > 0) {
            position2 -= 15;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
        }
      }
    }
  }
}
function readOnlyJSString() {
  let token = src[position2++];
  let length;
  if (token < 192) {
    length = token - 160;
  } else {
    switch (token) {
      case 217:
        length = src[position2++];
        break;
      case 218:
        length = dataView.getUint16(position2);
        position2 += 2;
        break;
      case 219:
        length = dataView.getUint32(position2);
        position2 += 4;
        break;
      default:
        throw new Error("Expected string");
    }
  }
  return readStringJS(length);
}
function readBin(length) {
  return currentUnpackr.copyBuffers ? Uint8Array.prototype.slice.call(src, position2, position2 += length) : src.subarray(position2, position2 += length);
}
function readExt(length) {
  let type47 = src[position2++];
  if (currentExtensions[type47]) {
    let end;
    return currentExtensions[type47](src.subarray(position2, end = position2 += length), (readPosition) => {
      position2 = readPosition;
      try {
        return read3();
      } finally {
        position2 = end;
      }
    });
  } else
    throw new Error("Unknown extension type " + type47);
}
function readKey() {
  let length = src[position2++];
  if (length >= 160 && length < 192) {
    length = length - 160;
    if (srcStringEnd >= position2)
      return srcString.slice(position2 - srcStringStart, (position2 += length) - srcStringStart);
    else if (!(srcStringEnd == 0 && srcEnd < 180))
      return readFixedString(length);
  } else {
    position2--;
    return asSafeString(read3());
  }
  let key = (length << 5 ^ (length > 1 ? dataView.getUint16(position2) : length > 0 ? src[position2] : 0)) & 4095;
  let entry = keyCache[key];
  let checkPosition = position2;
  let end = position2 + length - 3;
  let chunk;
  let i = 0;
  if (entry && entry.bytes == length) {
    while (checkPosition < end) {
      chunk = dataView.getUint32(checkPosition);
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
      checkPosition += 4;
    }
    end += 3;
    while (checkPosition < end) {
      chunk = src[checkPosition++];
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
    }
    if (checkPosition === end) {
      position2 = checkPosition;
      return entry.string;
    }
    end -= 3;
    checkPosition = position2;
  }
  entry = [];
  keyCache[key] = entry;
  entry.bytes = length;
  while (checkPosition < end) {
    chunk = dataView.getUint32(checkPosition);
    entry.push(chunk);
    checkPosition += 4;
  }
  end += 3;
  while (checkPosition < end) {
    chunk = src[checkPosition++];
    entry.push(chunk);
  }
  let string7 = length < 16 ? shortStringInJS(length) : longStringInJS(length);
  if (string7 != null)
    return entry.string = string7;
  return entry.string = readFixedString(length);
}
function asSafeString(property) {
  if (typeof property === "string")
    return property;
  if (typeof property === "number" || typeof property === "boolean" || typeof property === "bigint")
    return property.toString();
  if (property == null)
    return property + "";
  throw new Error("Invalid property type for record", typeof property);
}
function saveState(callback) {
  if (onSaveState)
    onSaveState();
  let savedSrcEnd = srcEnd;
  let savedPosition = position2;
  let savedStringPosition = stringPosition;
  let savedSrcStringStart = srcStringStart;
  let savedSrcStringEnd = srcStringEnd;
  let savedSrcString = srcString;
  let savedStrings = strings;
  let savedReferenceMap = referenceMap;
  let savedBundledStrings = bundledStrings;
  let savedSrc = new Uint8Array(src.slice(0, srcEnd));
  let savedStructures = currentStructures;
  let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
  let savedPackr = currentUnpackr;
  let savedSequentialMode = sequentialMode;
  let value15 = callback();
  srcEnd = savedSrcEnd;
  position2 = savedPosition;
  stringPosition = savedStringPosition;
  srcStringStart = savedSrcStringStart;
  srcStringEnd = savedSrcStringEnd;
  srcString = savedSrcString;
  strings = savedStrings;
  referenceMap = savedReferenceMap;
  bundledStrings = savedBundledStrings;
  src = savedSrc;
  sequentialMode = savedSequentialMode;
  currentStructures = savedStructures;
  currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
  currentUnpackr = savedPackr;
  dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
  return value15;
}
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
function setReadStruct(updatedReadStruct, loadedStructs, saveState2) {
  readStruct = updatedReadStruct;
  onLoadedStructures = loadedStructs;
  onSaveState = saveState2;
}
var decoder;
try {
  decoder = new TextDecoder;
} catch (error23) {
}
var src;
var srcEnd;
var position2 = 0;
var EMPTY_ARRAY = [];
var strings = EMPTY_ARRAY;
var stringPosition = 0;
var currentUnpackr = {};
var currentStructures;
var srcString;
var srcStringStart = 0;
var srcStringEnd = 0;
var bundledStrings;
var referenceMap;
var currentExtensions = [];
var dataView;
var defaultOptions = {
  useRecords: false,
  mapsAsObjects: true
};

class C1Type {
}
var C1 = new C1Type;
C1.name = "MessagePack 0xC1";
var sequentialMode = false;
var inlineObjectReadThreshold = 2;
var readStruct;
var onLoadedStructures;
var onSaveState;
try {
  new Function("");
} catch (error23) {
  inlineObjectReadThreshold = Infinity;
}

class Unpackr {
  constructor(options) {
    if (options) {
      if (options.useRecords === false && options.mapsAsObjects === undefined)
        options.mapsAsObjects = true;
      if (options.sequential && options.trusted !== false) {
        options.trusted = true;
        if (!options.structures && options.useRecords != false) {
          options.structures = [];
          if (!options.maxSharedStructures)
            options.maxSharedStructures = 0;
        }
      }
      if (options.structures)
        options.structures.sharedLength = options.structures.length;
      else if (options.getStructures) {
        (options.structures = []).uninitialized = true;
        options.structures.sharedLength = 0;
      }
      if (options.int64AsNumber) {
        options.int64AsType = "number";
      }
    }
    Object.assign(this, options);
  }
  unpack(source, options) {
    if (src) {
      return saveState(() => {
        clearSource();
        return this ? this.unpack(source, options) : Unpackr.prototype.unpack.call(defaultOptions, source, options);
      });
    }
    if (!source.buffer && source.constructor === ArrayBuffer)
      source = typeof Buffer !== "undefined" ? Buffer.from(source) : new Uint8Array(source);
    if (typeof options === "object") {
      srcEnd = options.end || source.length;
      position2 = options.start || 0;
    } else {
      position2 = 0;
      srcEnd = options > -1 ? options : source.length;
    }
    stringPosition = 0;
    srcStringEnd = 0;
    srcString = null;
    strings = EMPTY_ARRAY;
    bundledStrings = null;
    src = source;
    try {
      dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
    } catch (error23) {
      src = null;
      if (source instanceof Uint8Array)
        throw error23;
      throw new Error("Source must be a Uint8Array or Buffer but was a " + (source && typeof source == "object" ? source.constructor.name : typeof source));
    }
    if (this instanceof Unpackr) {
      currentUnpackr = this;
      if (this.structures) {
        currentStructures = this.structures;
        return checkedRead(options);
      } else if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
    } else {
      currentUnpackr = defaultOptions;
      if (!currentStructures || currentStructures.length > 0)
        currentStructures = [];
    }
    return checkedRead(options);
  }
  unpackMultiple(source, forEach) {
    let values, lastPosition = 0;
    try {
      sequentialMode = true;
      let size = source.length;
      let value15 = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
      if (forEach) {
        if (forEach(value15, lastPosition, position2) === false)
          return;
        while (position2 < size) {
          lastPosition = position2;
          if (forEach(checkedRead(), lastPosition, position2) === false) {
            return;
          }
        }
      } else {
        values = [value15];
        while (position2 < size) {
          lastPosition = position2;
          values.push(checkedRead());
        }
        return values;
      }
    } catch (error23) {
      error23.lastPosition = lastPosition;
      error23.values = values;
      throw error23;
    } finally {
      sequentialMode = false;
      clearSource();
    }
  }
  _mergeStructures(loadedStructures, existingStructures) {
    if (onLoadedStructures)
      loadedStructures = onLoadedStructures.call(this, loadedStructures);
    loadedStructures = loadedStructures || [];
    if (Object.isFrozen(loadedStructures))
      loadedStructures = loadedStructures.map((structure) => structure.slice(0));
    for (let i = 0, l = loadedStructures.length;i < l; i++) {
      let structure = loadedStructures[i];
      if (structure) {
        structure.isShared = true;
        if (i >= 32)
          structure.highByte = i - 32 >> 5;
      }
    }
    loadedStructures.sharedLength = loadedStructures.length;
    for (let id in existingStructures || []) {
      if (id >= 0) {
        let structure = loadedStructures[id];
        let existing = existingStructures[id];
        if (existing) {
          if (structure)
            (loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
          loadedStructures[id] = existing;
        }
      }
    }
    return this.structures = loadedStructures;
  }
  decode(source, options) {
    return this.unpack(source, options);
  }
}
var validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
var createSecondByteReader = (firstId, read0) => {
  return function() {
    let highByte = src[position2++];
    if (highByte === 0)
      return read0();
    let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
    let structure = currentStructures[id] || loadStructures()[id];
    if (!structure) {
      throw new Error("Record id is not defined for " + id);
    }
    if (!structure.read)
      structure.read = createStructureReader(structure, firstId);
    return structure.read();
  };
};
var readFixedString = readStringJS;
var readString8 = readStringJS;
var readString16 = readStringJS;
var readString32 = readStringJS;
var isNativeAccelerationEnabled = false;
var fromCharCode = String.fromCharCode;
var keyCache = new Array(4096);
var recordDefinition = (id, highByte) => {
  let structure = read3().map(asSafeString);
  let firstByte = id;
  if (highByte !== undefined) {
    id = id < 32 ? -((highByte << 5) + id) : (highByte << 5) + id;
    structure.highByte = highByte;
  }
  let existingStructure = currentStructures[id];
  if (existingStructure && (existingStructure.isShared || sequentialMode)) {
    (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
  }
  currentStructures[id] = structure;
  structure.read = createStructureReader(structure, firstByte);
  return structure.read();
};
currentExtensions[0] = () => {
};
currentExtensions[0].noBuffer = true;
currentExtensions[66] = (data) => {
  let length = data.length;
  let value15 = BigInt(data[0] & 128 ? data[0] - 256 : data[0]);
  for (let i = 1;i < length; i++) {
    value15 <<= 8n;
    value15 += BigInt(data[i]);
  }
  return value15;
};
var errors5 = { Error, TypeError, ReferenceError };
currentExtensions[101] = () => {
  let data = read3();
  return (errors5[data[0]] || Error)(data[1], { cause: data[2] });
};
currentExtensions[105] = (data) => {
  if (currentUnpackr.structuredClone === false)
    throw new Error("Structured clone extension is disabled");
  let id = dataView.getUint32(position2 - 4);
  if (!referenceMap)
    referenceMap = new Map;
  let token = src[position2];
  let target;
  if (token >= 144 && token < 160 || token == 220 || token == 221)
    target = [];
  else
    target = {};
  let refEntry = { target };
  referenceMap.set(id, refEntry);
  let targetProperties = read3();
  if (refEntry.used)
    return Object.assign(target, targetProperties);
  refEntry.target = targetProperties;
  return targetProperties;
};
currentExtensions[112] = (data) => {
  if (currentUnpackr.structuredClone === false)
    throw new Error("Structured clone extension is disabled");
  let id = dataView.getUint32(position2 - 4);
  let refEntry = referenceMap.get(id);
  refEntry.used = true;
  return refEntry.target;
};
currentExtensions[115] = () => new Set(read3());
var typedArrays = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((type47) => type47 + "Array");
var glbl = typeof globalThis === "object" ? globalThis : window;
currentExtensions[116] = (data) => {
  let typeCode = data[0];
  let typedArrayName = typedArrays[typeCode];
  if (!typedArrayName) {
    if (typeCode === 16) {
      let ab = new ArrayBuffer(data.length - 1);
      let u8 = new Uint8Array(ab);
      u8.set(data.subarray(1));
      return ab;
    }
    throw new Error("Could not find typed array for code " + typeCode);
  }
  return new glbl[typedArrayName](Uint8Array.prototype.slice.call(data, 1).buffer);
};
currentExtensions[120] = () => {
  let data = read3();
  return new RegExp(data[0], data[1]);
};
var TEMP_BUNDLE = [];
currentExtensions[98] = (data) => {
  let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3];
  let dataPosition = position2;
  position2 += dataSize - data.length;
  bundledStrings = TEMP_BUNDLE;
  bundledStrings = [readOnlyJSString(), readOnlyJSString()];
  bundledStrings.position0 = 0;
  bundledStrings.position1 = 0;
  bundledStrings.postBundlePosition = position2;
  position2 = dataPosition;
  return read3();
};
currentExtensions[255] = (data) => {
  if (data.length == 4)
    return new Date((data[0] * 16777216 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1000);
  else if (data.length == 8)
    return new Date(((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1e6 + ((data[3] & 3) * 4294967296 + data[4] * 16777216 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1000);
  else if (data.length == 12)
    return new Date(((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1e6 + ((data[4] & 128 ? -281474976710656 : 0) + data[6] * 1099511627776 + data[7] * 4294967296 + data[8] * 16777216 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1000);
  else
    return new Date("invalid");
};
var mult10 = new Array(147);
for (let i = 0;i < 256; i++) {
  mult10[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
}
var defaultUnpackr = new Unpackr({ useRecords: false });
var unpack = defaultUnpackr.unpack;
var unpackMultiple = defaultUnpackr.unpackMultiple;
var decode3 = defaultUnpackr.unpack;
var f32Array = new Float32Array(1);
var u8Array = new Uint8Array(f32Array.buffer, 0, 4);

// node_modules/msgpackr/pack.js
function writeExtBuffer(typedArray, type47, allocateForWrite, encode3) {
  let length = typedArray.byteLength;
  if (length + 1 < 256) {
    var { target, position: position3 } = allocateForWrite(4 + length);
    target[position3++] = 199;
    target[position3++] = length + 1;
  } else if (length + 1 < 65536) {
    var { target, position: position3 } = allocateForWrite(5 + length);
    target[position3++] = 200;
    target[position3++] = length + 1 >> 8;
    target[position3++] = length + 1 & 255;
  } else {
    var { target, position: position3, targetView } = allocateForWrite(7 + length);
    target[position3++] = 201;
    targetView.setUint32(position3, length + 1);
    position3 += 4;
  }
  target[position3++] = 116;
  target[position3++] = type47;
  if (!typedArray.buffer)
    typedArray = new Uint8Array(typedArray);
  target.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position3);
}
function writeBuffer(buffer, allocateForWrite) {
  let length = buffer.byteLength;
  var target, position3;
  if (length < 256) {
    var { target, position: position3 } = allocateForWrite(length + 2);
    target[position3++] = 196;
    target[position3++] = length;
  } else if (length < 65536) {
    var { target, position: position3 } = allocateForWrite(length + 3);
    target[position3++] = 197;
    target[position3++] = length >> 8;
    target[position3++] = length & 255;
  } else {
    var { target, position: position3, targetView } = allocateForWrite(length + 5);
    target[position3++] = 198;
    targetView.setUint32(position3, length);
    position3 += 4;
  }
  target.set(buffer, position3);
}
function writeExtensionData(result, target, position3, type47) {
  let length = result.length;
  switch (length) {
    case 1:
      target[position3++] = 212;
      break;
    case 2:
      target[position3++] = 213;
      break;
    case 4:
      target[position3++] = 214;
      break;
    case 8:
      target[position3++] = 215;
      break;
    case 16:
      target[position3++] = 216;
      break;
    default:
      if (length < 256) {
        target[position3++] = 199;
        target[position3++] = length;
      } else if (length < 65536) {
        target[position3++] = 200;
        target[position3++] = length >> 8;
        target[position3++] = length & 255;
      } else {
        target[position3++] = 201;
        target[position3++] = length >> 24;
        target[position3++] = length >> 16 & 255;
        target[position3++] = length >> 8 & 255;
        target[position3++] = length & 255;
      }
  }
  target[position3++] = type47;
  target.set(result, position3);
  position3 += length;
  return position3;
}
function insertIds(serialized, idsToInsert) {
  let nextId;
  let distanceToMove = idsToInsert.length * 6;
  let lastEnd = serialized.length - distanceToMove;
  while (nextId = idsToInsert.pop()) {
    let offset = nextId.offset;
    let id = nextId.id;
    serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
    distanceToMove -= 6;
    let position3 = offset + distanceToMove;
    serialized[position3++] = 214;
    serialized[position3++] = 105;
    serialized[position3++] = id >> 24;
    serialized[position3++] = id >> 16 & 255;
    serialized[position3++] = id >> 8 & 255;
    serialized[position3++] = id & 255;
    lastEnd = offset;
  }
  return serialized;
}
function writeBundles(start, pack, incrementPosition) {
  if (bundledStrings2.length > 0) {
    targetView.setUint32(bundledStrings2.position + start, position3 + incrementPosition - bundledStrings2.position - start);
    bundledStrings2.stringsPosition = position3 - start;
    let writeStrings = bundledStrings2;
    bundledStrings2 = null;
    pack(writeStrings[0]);
    pack(writeStrings[1]);
  }
}
function prepareStructures(structures, packr) {
  structures.isCompatible = (existingStructures) => {
    let compatible = !existingStructures || (packr.lastNamedStructuresLength || 0) === existingStructures.length;
    if (!compatible)
      packr._mergeStructures(existingStructures);
    return compatible;
  };
  return structures;
}
function setWriteStructSlots(writeSlots, makeStructures) {
  writeStructSlots = writeSlots;
  prepareStructures = makeStructures;
}
var textEncoder;
try {
  textEncoder = new TextEncoder;
} catch (error23) {
}
var extensions;
var extensionClasses;
var hasNodeBuffer = typeof Buffer !== "undefined";
var ByteArrayAllocate = hasNodeBuffer ? function(length) {
  return Buffer.allocUnsafeSlow(length);
} : Uint8Array;
var ByteArray2 = hasNodeBuffer ? Buffer : Uint8Array;
var MAX_BUFFER_SIZE = hasNodeBuffer ? 4294967296 : 2144337920;
var target;
var keysTarget;
var targetView;
var position3 = 0;
var safeEnd;
var bundledStrings2 = null;
var writeStructSlots;
var MAX_BUNDLE_SIZE = 21760;
var hasNonLatin = /[\u0080-\uFFFF]/;
var RECORD_SYMBOL = Symbol("record-id");

class Packr extends Unpackr {
  constructor(options) {
    super(options);
    this.offset = 0;
    let typeBuffer;
    let start;
    let hasSharedUpdate;
    let structures;
    let referenceMap2;
    let encodeUtf8 = ByteArray2.prototype.utf8Write ? function(string7, position4) {
      return target.utf8Write(string7, position4, 4294967295);
    } : textEncoder && textEncoder.encodeInto ? function(string7, position4) {
      return textEncoder.encodeInto(string7, target.subarray(position4)).written;
    } : false;
    let packr = this;
    if (!options)
      options = {};
    let isSequential = options && options.sequential;
    let hasSharedStructures = options.structures || options.saveStructures;
    let maxSharedStructures = options.maxSharedStructures;
    if (maxSharedStructures == null)
      maxSharedStructures = hasSharedStructures ? 32 : 0;
    if (maxSharedStructures > 8160)
      throw new Error("Maximum maxSharedStructure is 8160");
    if (options.structuredClone && options.moreTypes == undefined) {
      this.moreTypes = true;
    }
    let maxOwnStructures = options.maxOwnStructures;
    if (maxOwnStructures == null)
      maxOwnStructures = hasSharedStructures ? 32 : 64;
    if (!this.structures && options.useRecords != false)
      this.structures = [];
    let useTwoByteRecords = maxSharedStructures > 32 || maxOwnStructures + maxSharedStructures > 64;
    let sharedLimitId = maxSharedStructures + 64;
    let maxStructureId = maxSharedStructures + maxOwnStructures + 64;
    if (maxStructureId > 8256) {
      throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
    }
    let recordIdsToRemove = [];
    let transitionsCount = 0;
    let serializationsSinceTransitionRebuild = 0;
    this.pack = this.encode = function(value15, encodeOptions) {
      if (!target) {
        target = new ByteArrayAllocate(8192);
        targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, 8192));
        position3 = 0;
      }
      safeEnd = target.length - 10;
      if (safeEnd - position3 < 2048) {
        target = new ByteArrayAllocate(target.length);
        targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length));
        safeEnd = target.length - 10;
        position3 = 0;
      } else
        position3 = position3 + 7 & 2147483640;
      start = position3;
      if (encodeOptions & RESERVE_START_SPACE)
        position3 += encodeOptions & 255;
      referenceMap2 = packr.structuredClone ? new Map : null;
      if (packr.bundleStrings && typeof value15 !== "string") {
        bundledStrings2 = [];
        bundledStrings2.size = Infinity;
      } else
        bundledStrings2 = null;
      structures = packr.structures;
      if (structures) {
        if (structures.uninitialized)
          structures = packr._mergeStructures(packr.getStructures());
        let sharedLength = structures.sharedLength || 0;
        if (sharedLength > maxSharedStructures) {
          throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + structures.sharedLength);
        }
        if (!structures.transitions) {
          structures.transitions = Object.create(null);
          for (let i = 0;i < sharedLength; i++) {
            let keys3 = structures[i];
            if (!keys3)
              continue;
            let nextTransition, transition = structures.transitions;
            for (let j = 0, l = keys3.length;j < l; j++) {
              let key = keys3[j];
              nextTransition = transition[key];
              if (!nextTransition) {
                nextTransition = transition[key] = Object.create(null);
              }
              transition = nextTransition;
            }
            transition[RECORD_SYMBOL] = i + 64;
          }
          this.lastNamedStructuresLength = sharedLength;
        }
        if (!isSequential) {
          structures.nextId = sharedLength + 64;
        }
      }
      if (hasSharedUpdate)
        hasSharedUpdate = false;
      let encodingError;
      try {
        if (packr.randomAccessStructure && value15 && value15.constructor && value15.constructor === Object)
          writeStruct(value15);
        else
          pack(value15);
        let lastBundle = bundledStrings2;
        if (bundledStrings2)
          writeBundles(start, pack, 0);
        if (referenceMap2 && referenceMap2.idsToInsert) {
          let idsToInsert = referenceMap2.idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1);
          let i = idsToInsert.length;
          let incrementPosition = -1;
          while (lastBundle && i > 0) {
            let insertionPoint = idsToInsert[--i].offset + start;
            if (insertionPoint < lastBundle.stringsPosition + start && incrementPosition === -1)
              incrementPosition = 0;
            if (insertionPoint > lastBundle.position + start) {
              if (incrementPosition >= 0)
                incrementPosition += 6;
            } else {
              if (incrementPosition >= 0) {
                targetView.setUint32(lastBundle.position + start, targetView.getUint32(lastBundle.position + start) + incrementPosition);
                incrementPosition = -1;
              }
              lastBundle = lastBundle.previous;
              i++;
            }
          }
          if (incrementPosition >= 0 && lastBundle) {
            targetView.setUint32(lastBundle.position + start, targetView.getUint32(lastBundle.position + start) + incrementPosition);
          }
          position3 += idsToInsert.length * 6;
          if (position3 > safeEnd)
            makeRoom(position3);
          packr.offset = position3;
          let serialized = insertIds(target.subarray(start, position3), idsToInsert);
          referenceMap2 = null;
          return serialized;
        }
        packr.offset = position3;
        if (encodeOptions & REUSE_BUFFER_MODE3) {
          target.start = start;
          target.end = position3;
          return target;
        }
        return target.subarray(start, position3);
      } catch (error23) {
        encodingError = error23;
        throw error23;
      } finally {
        if (structures) {
          resetStructures();
          if (hasSharedUpdate && packr.saveStructures) {
            let sharedLength = structures.sharedLength || 0;
            let returnBuffer = target.subarray(start, position3);
            let newSharedData = prepareStructures(structures, packr);
            if (!encodingError) {
              if (packr.saveStructures(newSharedData, newSharedData.isCompatible) === false) {
                return packr.pack(value15, encodeOptions);
              }
              packr.lastNamedStructuresLength = sharedLength;
              if (target.length > 1073741824)
                target = null;
              return returnBuffer;
            }
          }
        }
        if (target.length > 1073741824)
          target = null;
        if (encodeOptions & RESET_BUFFER_MODE2)
          position3 = start;
      }
    };
    const resetStructures = () => {
      if (serializationsSinceTransitionRebuild < 10)
        serializationsSinceTransitionRebuild++;
      let sharedLength = structures.sharedLength || 0;
      if (structures.length > sharedLength && !isSequential)
        structures.length = sharedLength;
      if (transitionsCount > 1e4) {
        structures.transitions = null;
        serializationsSinceTransitionRebuild = 0;
        transitionsCount = 0;
        if (recordIdsToRemove.length > 0)
          recordIdsToRemove = [];
      } else if (recordIdsToRemove.length > 0 && !isSequential) {
        for (let i = 0, l = recordIdsToRemove.length;i < l; i++) {
          recordIdsToRemove[i][RECORD_SYMBOL] = 0;
        }
        recordIdsToRemove = [];
      }
    };
    const packArray = (value15) => {
      var length = value15.length;
      if (length < 16) {
        target[position3++] = 144 | length;
      } else if (length < 65536) {
        target[position3++] = 220;
        target[position3++] = length >> 8;
        target[position3++] = length & 255;
      } else {
        target[position3++] = 221;
        targetView.setUint32(position3, length);
        position3 += 4;
      }
      for (let i = 0;i < length; i++) {
        pack(value15[i]);
      }
    };
    const pack = (value15) => {
      if (position3 > safeEnd)
        target = makeRoom(position3);
      var type47 = typeof value15;
      var length;
      if (type47 === "string") {
        let strLength = value15.length;
        if (bundledStrings2 && strLength >= 4 && strLength < 4096) {
          if ((bundledStrings2.size += strLength) > MAX_BUNDLE_SIZE) {
            let extStart;
            let maxBytes2 = (bundledStrings2[0] ? bundledStrings2[0].length * 3 + bundledStrings2[1].length : 0) + 10;
            if (position3 + maxBytes2 > safeEnd)
              target = makeRoom(position3 + maxBytes2);
            let lastBundle;
            if (bundledStrings2.position) {
              lastBundle = bundledStrings2;
              target[position3] = 200;
              position3 += 3;
              target[position3++] = 98;
              extStart = position3 - start;
              position3 += 4;
              writeBundles(start, pack, 0);
              targetView.setUint16(extStart + start - 3, position3 - start - extStart);
            } else {
              target[position3++] = 214;
              target[position3++] = 98;
              extStart = position3 - start;
              position3 += 4;
            }
            bundledStrings2 = ["", ""];
            bundledStrings2.previous = lastBundle;
            bundledStrings2.size = 0;
            bundledStrings2.position = extStart;
          }
          let twoByte = hasNonLatin.test(value15);
          bundledStrings2[twoByte ? 0 : 1] += value15;
          target[position3++] = 193;
          pack(twoByte ? -strLength : strLength);
          return;
        }
        let headerSize;
        if (strLength < 32) {
          headerSize = 1;
        } else if (strLength < 256) {
          headerSize = 2;
        } else if (strLength < 65536) {
          headerSize = 3;
        } else {
          headerSize = 5;
        }
        let maxBytes = strLength * 3;
        if (position3 + maxBytes > safeEnd)
          target = makeRoom(position3 + maxBytes);
        if (strLength < 64 || !encodeUtf8) {
          let i, c1, c2, strPosition = position3 + headerSize;
          for (i = 0;i < strLength; i++) {
            c1 = value15.charCodeAt(i);
            if (c1 < 128) {
              target[strPosition++] = c1;
            } else if (c1 < 2048) {
              target[strPosition++] = c1 >> 6 | 192;
              target[strPosition++] = c1 & 63 | 128;
            } else if ((c1 & 64512) === 55296 && ((c2 = value15.charCodeAt(i + 1)) & 64512) === 56320) {
              c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
              i++;
              target[strPosition++] = c1 >> 18 | 240;
              target[strPosition++] = c1 >> 12 & 63 | 128;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            } else {
              target[strPosition++] = c1 >> 12 | 224;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            }
          }
          length = strPosition - position3 - headerSize;
        } else {
          length = encodeUtf8(value15, position3 + headerSize);
        }
        if (length < 32) {
          target[position3++] = 160 | length;
        } else if (length < 256) {
          if (headerSize < 2) {
            target.copyWithin(position3 + 2, position3 + 1, position3 + 1 + length);
          }
          target[position3++] = 217;
          target[position3++] = length;
        } else if (length < 65536) {
          if (headerSize < 3) {
            target.copyWithin(position3 + 3, position3 + 2, position3 + 2 + length);
          }
          target[position3++] = 218;
          target[position3++] = length >> 8;
          target[position3++] = length & 255;
        } else {
          if (headerSize < 5) {
            target.copyWithin(position3 + 5, position3 + 3, position3 + 3 + length);
          }
          target[position3++] = 219;
          targetView.setUint32(position3, length);
          position3 += 4;
        }
        position3 += length;
      } else if (type47 === "number") {
        if (value15 >>> 0 === value15) {
          if (value15 < 32 || value15 < 128 && this.useRecords === false || value15 < 64 && !this.randomAccessStructure) {
            target[position3++] = value15;
          } else if (value15 < 256) {
            target[position3++] = 204;
            target[position3++] = value15;
          } else if (value15 < 65536) {
            target[position3++] = 205;
            target[position3++] = value15 >> 8;
            target[position3++] = value15 & 255;
          } else {
            target[position3++] = 206;
            targetView.setUint32(position3, value15);
            position3 += 4;
          }
        } else if (value15 >> 0 === value15) {
          if (value15 >= -32) {
            target[position3++] = 256 + value15;
          } else if (value15 >= -128) {
            target[position3++] = 208;
            target[position3++] = value15 + 256;
          } else if (value15 >= -32768) {
            target[position3++] = 209;
            targetView.setInt16(position3, value15);
            position3 += 2;
          } else {
            target[position3++] = 210;
            targetView.setInt32(position3, value15);
            position3 += 4;
          }
        } else {
          let useFloat32;
          if ((useFloat32 = this.useFloat32) > 0 && value15 < 4294967296 && value15 >= -2147483648) {
            target[position3++] = 202;
            targetView.setFloat32(position3, value15);
            let xShifted;
            if (useFloat32 < 4 || (xShifted = value15 * mult10[(target[position3] & 127) << 1 | target[position3 + 1] >> 7]) >> 0 === xShifted) {
              position3 += 4;
              return;
            } else
              position3--;
          }
          target[position3++] = 203;
          targetView.setFloat64(position3, value15);
          position3 += 8;
        }
      } else if (type47 === "object" || type47 === "function") {
        if (!value15)
          target[position3++] = 192;
        else {
          if (referenceMap2) {
            let referee = referenceMap2.get(value15);
            if (referee) {
              if (!referee.id) {
                let idsToInsert = referenceMap2.idsToInsert || (referenceMap2.idsToInsert = []);
                referee.id = idsToInsert.push(referee);
              }
              target[position3++] = 214;
              target[position3++] = 112;
              targetView.setUint32(position3, referee.id);
              position3 += 4;
              return;
            } else
              referenceMap2.set(value15, { offset: position3 - start });
          }
          let constructor5 = value15.constructor;
          if (constructor5 === Object) {
            writeObject(value15);
          } else if (constructor5 === Array) {
            packArray(value15);
          } else if (constructor5 === Map) {
            if (this.mapAsEmptyObject)
              target[position3++] = 128;
            else {
              length = value15.size;
              if (length < 16) {
                target[position3++] = 128 | length;
              } else if (length < 65536) {
                target[position3++] = 222;
                target[position3++] = length >> 8;
                target[position3++] = length & 255;
              } else {
                target[position3++] = 223;
                targetView.setUint32(position3, length);
                position3 += 4;
              }
              for (let [key, entryValue] of value15) {
                pack(key);
                pack(entryValue);
              }
            }
          } else {
            for (let i = 0, l = extensions.length;i < l; i++) {
              let extensionClass = extensionClasses[i];
              if (value15 instanceof extensionClass) {
                let extension = extensions[i];
                if (extension.write) {
                  if (extension.type) {
                    target[position3++] = 212;
                    target[position3++] = extension.type;
                    target[position3++] = 0;
                  }
                  let writeResult = extension.write.call(this, value15);
                  if (writeResult === value15) {
                    if (Array.isArray(value15)) {
                      packArray(value15);
                    } else {
                      writeObject(value15);
                    }
                  } else {
                    pack(writeResult);
                  }
                  return;
                }
                let currentTarget = target;
                let currentTargetView = targetView;
                let currentPosition = position3;
                target = null;
                let result;
                try {
                  result = extension.pack.call(this, value15, (size) => {
                    target = currentTarget;
                    currentTarget = null;
                    position3 += size;
                    if (position3 > safeEnd)
                      makeRoom(position3);
                    return {
                      target,
                      targetView,
                      position: position3 - size
                    };
                  }, pack);
                } finally {
                  if (currentTarget) {
                    target = currentTarget;
                    targetView = currentTargetView;
                    position3 = currentPosition;
                    safeEnd = target.length - 10;
                  }
                }
                if (result) {
                  if (result.length + position3 > safeEnd)
                    makeRoom(result.length + position3);
                  position3 = writeExtensionData(result, target, position3, extension.type);
                }
                return;
              }
            }
            if (Array.isArray(value15)) {
              packArray(value15);
            } else {
              if (value15.toJSON) {
                const json2 = value15.toJSON();
                if (json2 !== value15)
                  return pack(json2);
              }
              if (type47 === "function")
                return pack(this.writeFunction && this.writeFunction(value15));
              writeObject(value15);
            }
          }
        }
      } else if (type47 === "boolean") {
        target[position3++] = value15 ? 195 : 194;
      } else if (type47 === "bigint") {
        if (value15 < BigInt(1) << BigInt(63) && value15 >= -(BigInt(1) << BigInt(63))) {
          target[position3++] = 211;
          targetView.setBigInt64(position3, value15);
        } else if (value15 < BigInt(1) << BigInt(64) && value15 > 0) {
          target[position3++] = 207;
          targetView.setBigUint64(position3, value15);
        } else {
          if (this.largeBigIntToFloat) {
            target[position3++] = 203;
            targetView.setFloat64(position3, Number(value15));
          } else if (this.useBigIntExtension && value15 < 2n ** 1023n && value15 > -(2n ** 1023n)) {
            target[position3++] = 199;
            position3++;
            target[position3++] = 66;
            let bytes2 = [];
            let alignedSign;
            do {
              let byte2 = value15 & 0xffn;
              alignedSign = (byte2 & 0x80n) === (value15 < 0n ? 0x80n : 0n);
              bytes2.push(byte2);
              value15 >>= 8n;
            } while (!((value15 === 0n || value15 === -1n) && alignedSign));
            target[position3 - 2] = bytes2.length;
            for (let i = bytes2.length;i > 0; ) {
              target[position3++] = Number(bytes2[--i]);
            }
            return;
          } else {
            throw new RangeError(value15 + " was too large to fit in MessagePack 64-bit integer format, use" + " useBigIntExtension or set largeBigIntToFloat to convert to float-64");
          }
        }
        position3 += 8;
      } else if (type47 === "undefined") {
        if (this.encodeUndefinedAsNil)
          target[position3++] = 192;
        else {
          target[position3++] = 212;
          target[position3++] = 0;
          target[position3++] = 0;
        }
      } else {
        throw new Error("Unknown type: " + type47);
      }
    };
    const writePlainObject = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? (object13) => {
      let keys3;
      if (this.skipValues) {
        keys3 = [];
        for (let key2 in object13) {
          if ((typeof object13.hasOwnProperty !== "function" || object13.hasOwnProperty(key2)) && !this.skipValues.includes(object13[key2]))
            keys3.push(key2);
        }
      } else {
        keys3 = Object.keys(object13);
      }
      let length = keys3.length;
      if (length < 16) {
        target[position3++] = 128 | length;
      } else if (length < 65536) {
        target[position3++] = 222;
        target[position3++] = length >> 8;
        target[position3++] = length & 255;
      } else {
        target[position3++] = 223;
        targetView.setUint32(position3, length);
        position3 += 4;
      }
      let key;
      if (this.coercibleKeyAsNumber) {
        for (let i = 0;i < length; i++) {
          key = keys3[i];
          let num = Number(key);
          pack(isNaN(num) ? key : num);
          pack(object13[key]);
        }
      } else {
        for (let i = 0;i < length; i++) {
          pack(key = keys3[i]);
          pack(object13[key]);
        }
      }
    } : (object13) => {
      target[position3++] = 222;
      let objectOffset = position3 - start;
      position3 += 2;
      let size = 0;
      for (let key in object13) {
        if (typeof object13.hasOwnProperty !== "function" || object13.hasOwnProperty(key)) {
          pack(key);
          pack(object13[key]);
          size++;
        }
      }
      target[objectOffset++ + start] = size >> 8;
      target[objectOffset + start] = size & 255;
    };
    const writeRecord = this.useRecords === false ? writePlainObject : options.progressiveRecords && !useTwoByteRecords ? (object13) => {
      let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
      let objectOffset = position3++ - start;
      let wroteKeys;
      for (let key in object13) {
        if (typeof object13.hasOwnProperty !== "function" || object13.hasOwnProperty(key)) {
          nextTransition = transition[key];
          if (nextTransition)
            transition = nextTransition;
          else {
            let keys3 = Object.keys(object13);
            let lastTransition = transition;
            transition = structures.transitions;
            let newTransitions = 0;
            for (let i = 0, l = keys3.length;i < l; i++) {
              let key2 = keys3[i];
              nextTransition = transition[key2];
              if (!nextTransition) {
                nextTransition = transition[key2] = Object.create(null);
                newTransitions++;
              }
              transition = nextTransition;
            }
            if (objectOffset + start + 1 == position3) {
              position3--;
              newRecord(transition, keys3, newTransitions);
            } else
              insertNewRecord(transition, keys3, objectOffset, newTransitions);
            wroteKeys = true;
            transition = lastTransition[key];
          }
          pack(object13[key]);
        }
      }
      if (!wroteKeys) {
        let recordId = transition[RECORD_SYMBOL];
        if (recordId)
          target[objectOffset + start] = recordId;
        else
          insertNewRecord(transition, Object.keys(object13), objectOffset, 0);
      }
    } : (object13) => {
      let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
      let newTransitions = 0;
      for (let key in object13)
        if (typeof object13.hasOwnProperty !== "function" || object13.hasOwnProperty(key)) {
          nextTransition = transition[key];
          if (!nextTransition) {
            nextTransition = transition[key] = Object.create(null);
            newTransitions++;
          }
          transition = nextTransition;
        }
      let recordId = transition[RECORD_SYMBOL];
      if (recordId) {
        if (recordId >= 96 && useTwoByteRecords) {
          target[position3++] = ((recordId -= 96) & 31) + 96;
          target[position3++] = recordId >> 5;
        } else
          target[position3++] = recordId;
      } else {
        newRecord(transition, transition.__keys__ || Object.keys(object13), newTransitions);
      }
      for (let key in object13)
        if (typeof object13.hasOwnProperty !== "function" || object13.hasOwnProperty(key)) {
          pack(object13[key]);
        }
    };
    const checkUseRecords = typeof this.useRecords == "function" && this.useRecords;
    const writeObject = checkUseRecords ? (object13) => {
      checkUseRecords(object13) ? writeRecord(object13) : writePlainObject(object13);
    } : writeRecord;
    const makeRoom = (end) => {
      let newSize;
      if (end > 16777216) {
        if (end - start > MAX_BUFFER_SIZE)
          throw new Error("Packed buffer would be larger than maximum buffer size");
        newSize = Math.min(MAX_BUFFER_SIZE, Math.round(Math.max((end - start) * (end > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
      } else
        newSize = (Math.max(end - start << 2, target.length - 1) >> 12) + 1 << 12;
      let newBuffer = new ByteArrayAllocate(newSize);
      targetView = newBuffer.dataView || (newBuffer.dataView = new DataView(newBuffer.buffer, 0, newSize));
      end = Math.min(end, target.length);
      if (target.copy)
        target.copy(newBuffer, 0, start, end);
      else
        newBuffer.set(target.slice(start, end));
      position3 -= start;
      start = 0;
      safeEnd = newBuffer.length - 10;
      return target = newBuffer;
    };
    const newRecord = (transition, keys3, newTransitions) => {
      let recordId = structures.nextId;
      if (!recordId)
        recordId = 64;
      if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys3)) {
        recordId = structures.nextOwnId;
        if (!(recordId < maxStructureId))
          recordId = sharedLimitId;
        structures.nextOwnId = recordId + 1;
      } else {
        if (recordId >= maxStructureId)
          recordId = sharedLimitId;
        structures.nextId = recordId + 1;
      }
      let highByte = keys3.highByte = recordId >= 96 && useTwoByteRecords ? recordId - 96 >> 5 : -1;
      transition[RECORD_SYMBOL] = recordId;
      transition.__keys__ = keys3;
      structures[recordId - 64] = keys3;
      if (recordId < sharedLimitId) {
        keys3.isShared = true;
        structures.sharedLength = recordId - 63;
        hasSharedUpdate = true;
        if (highByte >= 0) {
          target[position3++] = (recordId & 31) + 96;
          target[position3++] = highByte;
        } else {
          target[position3++] = recordId;
        }
      } else {
        if (highByte >= 0) {
          target[position3++] = 213;
          target[position3++] = 114;
          target[position3++] = (recordId & 31) + 96;
          target[position3++] = highByte;
        } else {
          target[position3++] = 212;
          target[position3++] = 114;
          target[position3++] = recordId;
        }
        if (newTransitions)
          transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
        if (recordIdsToRemove.length >= maxOwnStructures)
          recordIdsToRemove.shift()[RECORD_SYMBOL] = 0;
        recordIdsToRemove.push(transition);
        pack(keys3);
      }
    };
    const insertNewRecord = (transition, keys3, insertionOffset, newTransitions) => {
      let mainTarget = target;
      let mainPosition = position3;
      let mainSafeEnd = safeEnd;
      let mainStart = start;
      target = keysTarget;
      position3 = 0;
      start = 0;
      if (!target)
        keysTarget = target = new ByteArrayAllocate(8192);
      safeEnd = target.length - 10;
      newRecord(transition, keys3, newTransitions);
      keysTarget = target;
      let keysPosition = position3;
      target = mainTarget;
      position3 = mainPosition;
      safeEnd = mainSafeEnd;
      start = mainStart;
      if (keysPosition > 1) {
        let newEnd = position3 + keysPosition - 1;
        if (newEnd > safeEnd)
          makeRoom(newEnd);
        let insertionPosition = insertionOffset + start;
        target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position3);
        target.set(keysTarget.slice(0, keysPosition), insertionPosition);
        position3 = newEnd;
      } else {
        target[insertionOffset + start] = keysTarget[0];
      }
    };
    const writeStruct = (object13) => {
      let newPosition = writeStructSlots(object13, target, start, position3, structures, makeRoom, (value15, newPosition2, notifySharedUpdate) => {
        if (notifySharedUpdate)
          return hasSharedUpdate = true;
        position3 = newPosition2;
        let startTarget = target;
        pack(value15);
        resetStructures();
        if (startTarget !== target) {
          return { position: position3, targetView, target };
        }
        return position3;
      }, this);
      if (newPosition === 0)
        return writeObject(object13);
      position3 = newPosition;
    };
  }
  useBuffer(buffer) {
    target = buffer;
    target.dataView || (target.dataView = new DataView(target.buffer, target.byteOffset, target.byteLength));
    position3 = 0;
  }
  set position(value15) {
    position3 = value15;
  }
  get position() {
    return position3;
  }
  clearSharedData() {
    if (this.structures)
      this.structures = [];
    if (this.typedStructs)
      this.typedStructs = [];
  }
}
extensionClasses = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, C1Type];
extensions = [{
  pack(date6, allocateForWrite, pack) {
    let seconds = date6.getTime() / 1000;
    if ((this.useTimestamp32 || date6.getMilliseconds() === 0) && seconds >= 0 && seconds < 4294967296) {
      let { target: target2, targetView: targetView2, position: position4 } = allocateForWrite(6);
      target2[position4++] = 214;
      target2[position4++] = 255;
      targetView2.setUint32(position4, seconds);
    } else if (seconds > 0 && seconds < 4294967296) {
      let { target: target2, targetView: targetView2, position: position4 } = allocateForWrite(10);
      target2[position4++] = 215;
      target2[position4++] = 255;
      targetView2.setUint32(position4, date6.getMilliseconds() * 4000000 + (seconds / 1000 / 4294967296 >> 0));
      targetView2.setUint32(position4 + 4, seconds);
    } else if (isNaN(seconds)) {
      if (this.onInvalidDate) {
        allocateForWrite(0);
        return pack(this.onInvalidDate());
      }
      let { target: target2, targetView: targetView2, position: position4 } = allocateForWrite(3);
      target2[position4++] = 212;
      target2[position4++] = 255;
      target2[position4++] = 255;
    } else {
      let { target: target2, targetView: targetView2, position: position4 } = allocateForWrite(15);
      target2[position4++] = 199;
      target2[position4++] = 12;
      target2[position4++] = 255;
      targetView2.setUint32(position4, date6.getMilliseconds() * 1e6);
      targetView2.setBigInt64(position4 + 4, BigInt(Math.floor(seconds)));
    }
  }
}, {
  pack(set2, allocateForWrite, pack) {
    if (this.setAsEmptyObject) {
      allocateForWrite(0);
      return pack({});
    }
    let array5 = Array.from(set2);
    let { target: target2, position: position4 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position4++] = 212;
      target2[position4++] = 115;
      target2[position4++] = 0;
    }
    pack(array5);
  }
}, {
  pack(error23, allocateForWrite, pack) {
    let { target: target2, position: position4 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position4++] = 212;
      target2[position4++] = 101;
      target2[position4++] = 0;
    }
    pack([error23.name, error23.message, error23.cause]);
  }
}, {
  pack(regex2, allocateForWrite, pack) {
    let { target: target2, position: position4 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position4++] = 212;
      target2[position4++] = 120;
      target2[position4++] = 0;
    }
    pack([regex2.source, regex2.flags]);
  }
}, {
  pack(arrayBuffer, allocateForWrite) {
    if (this.moreTypes)
      writeExtBuffer(arrayBuffer, 16, allocateForWrite);
    else
      writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
  }
}, {
  pack(typedArray, allocateForWrite) {
    let constructor5 = typedArray.constructor;
    if (constructor5 !== ByteArray2 && this.moreTypes)
      writeExtBuffer(typedArray, typedArrays.indexOf(constructor5.name), allocateForWrite);
    else
      writeBuffer(typedArray, allocateForWrite);
  }
}, {
  pack(c1, allocateForWrite) {
    let { target: target2, position: position4 } = allocateForWrite(1);
    target2[position4] = 193;
  }
}];
var defaultPackr = new Packr({ useRecords: false });
var pack = defaultPackr.pack;
var encode3 = defaultPackr.pack;
var Encoder = Packr;
var REUSE_BUFFER_MODE3 = 512;
var RESET_BUFFER_MODE2 = 1024;
var RESERVE_START_SPACE = 2048;
// node_modules/msgpackr/struct.js
function writeStruct(object13, target2, encodingStart, position4, structures, makeRoom, pack3, packr) {
  let typedStructs = packr.typedStructs || (packr.typedStructs = []);
  let targetView2 = target2.dataView;
  let refsStartPosition = (typedStructs.lastStringStart || 100) + position4;
  let safeEnd2 = target2.length - 10;
  let start = position4;
  if (position4 > safeEnd2) {
    target2 = makeRoom(position4);
    targetView2 = target2.dataView;
    position4 -= encodingStart;
    start -= encodingStart;
    refsStartPosition -= encodingStart;
    encodingStart = 0;
    safeEnd2 = target2.length - 10;
  }
  let refOffset, refPosition = refsStartPosition;
  let transition = typedStructs.transitions || (typedStructs.transitions = Object.create(null));
  let nextId = typedStructs.nextId || typedStructs.length;
  let headerSize = nextId < 15 ? 1 : nextId < 240 ? 2 : nextId < 61440 ? 3 : nextId < 15728640 ? 4 : 0;
  if (headerSize === 0)
    return 0;
  position4 += headerSize;
  let queuedReferences = [];
  let usedAscii0;
  let keyIndex = 0;
  for (let key in object13) {
    let value15 = object13[key];
    let nextTransition = transition[key];
    if (!nextTransition) {
      transition[key] = nextTransition = {
        key,
        parent: transition,
        enumerationOffset: 0,
        ascii0: null,
        ascii8: null,
        num8: null,
        string16: null,
        object16: null,
        num32: null,
        float64: null,
        date64: null
      };
    }
    if (position4 > safeEnd2) {
      target2 = makeRoom(position4);
      targetView2 = target2.dataView;
      position4 -= encodingStart;
      start -= encodingStart;
      refsStartPosition -= encodingStart;
      refPosition -= encodingStart;
      encodingStart = 0;
      safeEnd2 = target2.length - 10;
    }
    switch (typeof value15) {
      case "number":
        let number7 = value15;
        if (nextId < 200 || !nextTransition.num64) {
          if (number7 >> 0 === number7 && number7 < 536870912 && number7 > -520093696) {
            if (number7 < 246 && number7 >= 0 && (nextTransition.num8 && !(nextId > 200 && nextTransition.num32) || number7 < 32 && !nextTransition.num32)) {
              transition = nextTransition.num8 || createTypeTransition(nextTransition, NUMBER, 1);
              target2[position4++] = number7;
            } else {
              transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
              targetView2.setUint32(position4, number7, true);
              position4 += 4;
            }
            break;
          } else if (number7 < 4294967296 && number7 >= -2147483648) {
            targetView2.setFloat32(position4, number7, true);
            if (float32Headers[target2[position4 + 3] >>> 5]) {
              let xShifted;
              if ((xShifted = number7 * mult10[(target2[position4 + 3] & 127) << 1 | target2[position4 + 2] >> 7]) >> 0 === xShifted) {
                transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
                position4 += 4;
                break;
              }
            }
          }
        }
        transition = nextTransition.num64 || createTypeTransition(nextTransition, NUMBER, 8);
        targetView2.setFloat64(position4, number7, true);
        position4 += 8;
        break;
      case "string":
        let strLength = value15.length;
        refOffset = refPosition - refsStartPosition;
        if ((strLength << 2) + refPosition > safeEnd2) {
          target2 = makeRoom((strLength << 2) + refPosition);
          targetView2 = target2.dataView;
          position4 -= encodingStart;
          start -= encodingStart;
          refsStartPosition -= encodingStart;
          refPosition -= encodingStart;
          encodingStart = 0;
          safeEnd2 = target2.length - 10;
        }
        if (strLength > 65280 + refOffset >> 2) {
          queuedReferences.push(key, value15, position4 - start);
          break;
        }
        let isNotAscii;
        let strStart = refPosition;
        if (strLength < 64) {
          let i, c1, c2;
          for (i = 0;i < strLength; i++) {
            c1 = value15.charCodeAt(i);
            if (c1 < 128) {
              target2[refPosition++] = c1;
            } else if (c1 < 2048) {
              isNotAscii = true;
              target2[refPosition++] = c1 >> 6 | 192;
              target2[refPosition++] = c1 & 63 | 128;
            } else if ((c1 & 64512) === 55296 && ((c2 = value15.charCodeAt(i + 1)) & 64512) === 56320) {
              isNotAscii = true;
              c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
              i++;
              target2[refPosition++] = c1 >> 18 | 240;
              target2[refPosition++] = c1 >> 12 & 63 | 128;
              target2[refPosition++] = c1 >> 6 & 63 | 128;
              target2[refPosition++] = c1 & 63 | 128;
            } else {
              isNotAscii = true;
              target2[refPosition++] = c1 >> 12 | 224;
              target2[refPosition++] = c1 >> 6 & 63 | 128;
              target2[refPosition++] = c1 & 63 | 128;
            }
          }
        } else {
          refPosition += encodeUtf8(target2, value15, refPosition);
          isNotAscii = refPosition - strStart > strLength;
        }
        if (refOffset < 160 || refOffset < 246 && (nextTransition.ascii8 || nextTransition.string8)) {
          if (isNotAscii) {
            if (!(transition = nextTransition.string8)) {
              if (typedStructs.length > 10 && (transition = nextTransition.ascii8)) {
                transition.__type = UTF8;
                nextTransition.ascii8 = null;
                nextTransition.string8 = transition;
                pack3(null, 0, true);
              } else {
                transition = createTypeTransition(nextTransition, UTF8, 1);
              }
            }
          } else if (refOffset === 0 && !usedAscii0) {
            usedAscii0 = true;
            transition = nextTransition.ascii0 || createTypeTransition(nextTransition, ASCII, 0);
            break;
          } else if (!(transition = nextTransition.ascii8) && !(typedStructs.length > 10 && (transition = nextTransition.string8)))
            transition = createTypeTransition(nextTransition, ASCII, 1);
          target2[position4++] = refOffset;
        } else {
          transition = nextTransition.string16 || createTypeTransition(nextTransition, UTF8, 2);
          targetView2.setUint16(position4, refOffset, true);
          position4 += 2;
        }
        break;
      case "object":
        if (value15) {
          if (value15.constructor === Date) {
            transition = nextTransition.date64 || createTypeTransition(nextTransition, DATE2, 8);
            targetView2.setFloat64(position4, value15.getTime(), true);
            position4 += 8;
          } else {
            queuedReferences.push(key, value15, keyIndex);
          }
          break;
        } else {
          nextTransition = anyType(nextTransition, position4, targetView2, -10);
          if (nextTransition) {
            transition = nextTransition;
            position4 = updatedPosition;
          } else
            queuedReferences.push(key, value15, keyIndex);
        }
        break;
      case "boolean":
        transition = nextTransition.num8 || nextTransition.ascii8 || createTypeTransition(nextTransition, NUMBER, 1);
        target2[position4++] = value15 ? 249 : 248;
        break;
      case "undefined":
        nextTransition = anyType(nextTransition, position4, targetView2, -9);
        if (nextTransition) {
          transition = nextTransition;
          position4 = updatedPosition;
        } else
          queuedReferences.push(key, value15, keyIndex);
        break;
      default:
        queuedReferences.push(key, value15, keyIndex);
    }
    keyIndex++;
  }
  for (let i = 0, l = queuedReferences.length;i < l; ) {
    let key = queuedReferences[i++];
    let value15 = queuedReferences[i++];
    let propertyIndex = queuedReferences[i++];
    let nextTransition = transition[key];
    if (!nextTransition) {
      transition[key] = nextTransition = {
        key,
        parent: transition,
        enumerationOffset: propertyIndex - keyIndex,
        ascii0: null,
        ascii8: null,
        num8: null,
        string16: null,
        object16: null,
        num32: null,
        float64: null
      };
    }
    let newPosition;
    if (value15) {
      let size;
      refOffset = refPosition - refsStartPosition;
      if (refOffset < 65280) {
        transition = nextTransition.object16;
        if (transition)
          size = 2;
        else if (transition = nextTransition.object32)
          size = 4;
        else {
          transition = createTypeTransition(nextTransition, OBJECT_DATA, 2);
          size = 2;
        }
      } else {
        transition = nextTransition.object32 || createTypeTransition(nextTransition, OBJECT_DATA, 4);
        size = 4;
      }
      newPosition = pack3(value15, refPosition);
      if (typeof newPosition === "object") {
        refPosition = newPosition.position;
        targetView2 = newPosition.targetView;
        target2 = newPosition.target;
        refsStartPosition -= encodingStart;
        position4 -= encodingStart;
        start -= encodingStart;
        encodingStart = 0;
      } else
        refPosition = newPosition;
      if (size === 2) {
        targetView2.setUint16(position4, refOffset, true);
        position4 += 2;
      } else {
        targetView2.setUint32(position4, refOffset, true);
        position4 += 4;
      }
    } else {
      transition = nextTransition.object16 || createTypeTransition(nextTransition, OBJECT_DATA, 2);
      targetView2.setInt16(position4, value15 === null ? -10 : -9, true);
      position4 += 2;
    }
    keyIndex++;
  }
  let recordId = transition[RECORD_SYMBOL];
  if (recordId == null) {
    recordId = packr.typedStructs.length;
    let structure = [];
    let nextTransition = transition;
    let key, type47;
    while ((type47 = nextTransition.__type) !== undefined) {
      let size = nextTransition.__size;
      nextTransition = nextTransition.__parent;
      key = nextTransition.key;
      let property = [type47, size, key];
      if (nextTransition.enumerationOffset)
        property.push(nextTransition.enumerationOffset);
      structure.push(property);
      nextTransition = nextTransition.parent;
    }
    structure.reverse();
    transition[RECORD_SYMBOL] = recordId;
    packr.typedStructs[recordId] = structure;
    pack3(null, 0, true);
  }
  switch (headerSize) {
    case 1:
      if (recordId >= 16)
        return 0;
      target2[start] = recordId + 32;
      break;
    case 2:
      if (recordId >= 256)
        return 0;
      target2[start] = 56;
      target2[start + 1] = recordId;
      break;
    case 3:
      if (recordId >= 65536)
        return 0;
      target2[start] = 57;
      targetView2.setUint16(start + 1, recordId, true);
      break;
    case 4:
      if (recordId >= 16777216)
        return 0;
      targetView2.setUint32(start, (recordId << 8) + 58, true);
      break;
  }
  if (position4 < refsStartPosition) {
    if (refsStartPosition === refPosition)
      return position4;
    target2.copyWithin(position4, refsStartPosition, refPosition);
    refPosition += position4 - refsStartPosition;
    typedStructs.lastStringStart = position4 - start;
  } else if (position4 > refsStartPosition) {
    if (refsStartPosition === refPosition)
      return position4;
    typedStructs.lastStringStart = position4 - start;
    return writeStruct(object13, target2, encodingStart, start, structures, makeRoom, pack3, packr);
  }
  return refPosition;
}
function anyType(transition, position4, targetView2, value15) {
  let nextTransition;
  if (nextTransition = transition.ascii8 || transition.num8) {
    targetView2.setInt8(position4, value15, true);
    updatedPosition = position4 + 1;
    return nextTransition;
  }
  if (nextTransition = transition.string16 || transition.object16) {
    targetView2.setInt16(position4, value15, true);
    updatedPosition = position4 + 2;
    return nextTransition;
  }
  if (nextTransition = transition.num32) {
    targetView2.setUint32(position4, 3758096640 + value15, true);
    updatedPosition = position4 + 4;
    return nextTransition;
  }
  if (nextTransition = transition.num64) {
    targetView2.setFloat64(position4, NaN, true);
    targetView2.setInt8(position4, value15);
    updatedPosition = position4 + 8;
    return nextTransition;
  }
  updatedPosition = position4;
  return;
}
function createTypeTransition(transition, type47, size) {
  let typeName = TYPE_NAMES[type47] + (size << 3);
  let newTransition = transition[typeName] || (transition[typeName] = Object.create(null));
  newTransition.__type = type47;
  newTransition.__size = size;
  newTransition.__parent = transition;
  return newTransition;
}
function onLoadedStructures2(sharedData) {
  if (!(sharedData instanceof Map))
    return sharedData;
  let typed = sharedData.get("typed") || [];
  if (Object.isFrozen(typed))
    typed = typed.map((structure) => structure.slice(0));
  let named = sharedData.get("named");
  let transitions = Object.create(null);
  for (let i = 0, l = typed.length;i < l; i++) {
    let structure = typed[i];
    let transition = transitions;
    for (let [type47, size, key] of structure) {
      let nextTransition = transition[key];
      if (!nextTransition) {
        transition[key] = nextTransition = {
          key,
          parent: transition,
          enumerationOffset: 0,
          ascii0: null,
          ascii8: null,
          num8: null,
          string16: null,
          object16: null,
          num32: null,
          float64: null,
          date64: null
        };
      }
      transition = createTypeTransition(nextTransition, type47, size);
    }
    transition[RECORD_SYMBOL] = i;
  }
  typed.transitions = transitions;
  this.typedStructs = typed;
  this.lastTypedStructuresLength = typed.length;
  return named;
}
function readStruct2(src2, position4, srcEnd2, unpackr) {
  let recordId = src2[position4++] - 32;
  if (recordId >= 24) {
    switch (recordId) {
      case 24:
        recordId = src2[position4++];
        break;
      case 25:
        recordId = src2[position4++] + (src2[position4++] << 8);
        break;
      case 26:
        recordId = src2[position4++] + (src2[position4++] << 8) + (src2[position4++] << 16);
        break;
      case 27:
        recordId = src2[position4++] + (src2[position4++] << 8) + (src2[position4++] << 16) + (src2[position4++] << 24);
        break;
    }
  }
  let structure = unpackr.typedStructs && unpackr.typedStructs[recordId];
  if (!structure) {
    src2 = Uint8Array.prototype.slice.call(src2, position4, srcEnd2);
    srcEnd2 -= position4;
    position4 = 0;
    if (!unpackr.getStructures)
      throw new Error(`Reference to shared structure ${recordId} without getStructures method`);
    unpackr._mergeStructures(unpackr.getStructures());
    if (!unpackr.typedStructs)
      throw new Error("Could not find any shared typed structures");
    unpackr.lastTypedStructuresLength = unpackr.typedStructs.length;
    structure = unpackr.typedStructs[recordId];
    if (!structure)
      throw new Error("Could not find typed structure " + recordId);
  }
  var construct = structure.construct;
  if (!construct) {
    construct = structure.construct = function LazyObject() {
    };
    var prototype = construct.prototype;
    let properties = [];
    let currentOffset = 0;
    let lastRefProperty;
    for (let i = 0, l = structure.length;i < l; i++) {
      let definition = structure[i];
      let [type47, size, key, enumerationOffset] = definition;
      if (key === "__proto__")
        key = "__proto_";
      let property = {
        key,
        offset: currentOffset
      };
      if (enumerationOffset)
        properties.splice(i + enumerationOffset, 0, property);
      else
        properties.push(property);
      let getRef;
      switch (size) {
        case 0:
          getRef = () => 0;
          break;
        case 1:
          getRef = (source, position5) => {
            let ref4 = source.bytes[position5 + property.offset];
            return ref4 >= 246 ? toConstant(ref4) : ref4;
          };
          break;
        case 2:
          getRef = (source, position5) => {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            let ref4 = dataView2.getUint16(position5 + property.offset, true);
            return ref4 >= 65280 ? toConstant(ref4 & 255) : ref4;
          };
          break;
        case 4:
          getRef = (source, position5) => {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            let ref4 = dataView2.getUint32(position5 + property.offset, true);
            return ref4 >= 4294967040 ? toConstant(ref4 & 255) : ref4;
          };
          break;
      }
      property.getRef = getRef;
      currentOffset += size;
      let get;
      switch (type47) {
        case ASCII:
          if (lastRefProperty && !lastRefProperty.next)
            lastRefProperty.next = property;
          lastRefProperty = property;
          property.multiGetCount = 0;
          get = function(source) {
            let src3 = source.bytes;
            let position5 = source.position;
            let refStart = currentOffset + position5;
            let ref4 = getRef(source, position5);
            if (typeof ref4 !== "number")
              return ref4;
            let end, next = property.next;
            while (next) {
              end = next.getRef(source, position5);
              if (typeof end === "number")
                break;
              else
                end = null;
              next = next.next;
            }
            if (end == null)
              end = source.bytesEnd - refStart;
            if (source.srcString) {
              return source.srcString.slice(ref4, end);
            }
            return readString(src3, ref4 + refStart, end - ref4);
          };
          break;
        case UTF8:
        case OBJECT_DATA:
          if (lastRefProperty && !lastRefProperty.next)
            lastRefProperty.next = property;
          lastRefProperty = property;
          get = function(source) {
            let position5 = source.position;
            let refStart = currentOffset + position5;
            let ref4 = getRef(source, position5);
            if (typeof ref4 !== "number")
              return ref4;
            let src3 = source.bytes;
            let end, next = property.next;
            while (next) {
              end = next.getRef(source, position5);
              if (typeof end === "number")
                break;
              else
                end = null;
              next = next.next;
            }
            if (end == null)
              end = source.bytesEnd - refStart;
            if (type47 === UTF8) {
              return src3.toString("utf8", ref4 + refStart, end + refStart);
            } else {
              currentSource = source;
              try {
                return unpackr.unpack(src3, { start: ref4 + refStart, end: end + refStart });
              } finally {
                currentSource = null;
              }
            }
          };
          break;
        case NUMBER:
          switch (size) {
            case 4:
              get = function(source) {
                let src3 = source.bytes;
                let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
                let position5 = source.position + property.offset;
                let value15 = dataView2.getInt32(position5, true);
                if (value15 < 536870912) {
                  if (value15 > -520093696)
                    return value15;
                  if (value15 > -536870912)
                    return toConstant(value15 & 255);
                }
                let fValue = dataView2.getFloat32(position5, true);
                let multiplier = mult10[(src3[position5 + 3] & 127) << 1 | src3[position5 + 2] >> 7];
                return (multiplier * fValue + (fValue > 0 ? 0.5 : -0.5) >> 0) / multiplier;
              };
              break;
            case 8:
              get = function(source) {
                let src3 = source.bytes;
                let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
                let value15 = dataView2.getFloat64(source.position + property.offset, true);
                if (isNaN(value15)) {
                  let byte2 = src3[source.position + property.offset];
                  if (byte2 >= 246)
                    return toConstant(byte2);
                }
                return value15;
              };
              break;
            case 1:
              get = function(source) {
                let src3 = source.bytes;
                let value15 = src3[source.position + property.offset];
                return value15 < 246 ? value15 : toConstant(value15);
              };
              break;
          }
          break;
        case DATE2:
          get = function(source) {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            return new Date(dataView2.getFloat64(source.position + property.offset, true));
          };
          break;
      }
      property.get = get;
    }
    if (evalSupported) {
      let objectLiteralProperties = [];
      let args = [];
      let i = 0;
      let hasInheritedProperties;
      for (let property of properties) {
        if (unpackr.alwaysLazyProperty && unpackr.alwaysLazyProperty(property.key)) {
          hasInheritedProperties = true;
          continue;
        }
        Object.defineProperty(prototype, property.key, { get: withSource(property.get), enumerable: true });
        let valueFunction = "v" + i++;
        args.push(valueFunction);
        objectLiteralProperties.push("[" + JSON.stringify(property.key) + "]:" + valueFunction + "(s)");
      }
      if (hasInheritedProperties) {
        objectLiteralProperties.push("__proto__:this");
      }
      let toObject = new Function(...args, "return function(s){return{" + objectLiteralProperties.join(",") + "}}").apply(null, properties.map((prop) => prop.get));
      Object.defineProperty(prototype, "toJSON", {
        value(omitUnderscoredProperties) {
          return toObject.call(this, this[sourceSymbol]);
        }
      });
    } else {
      Object.defineProperty(prototype, "toJSON", {
        value(omitUnderscoredProperties) {
          let resolved = {};
          for (let i = 0, l = properties.length;i < l; i++) {
            let key = properties[i].key;
            resolved[key] = this[key];
          }
          return resolved;
        }
      });
    }
  }
  var instance = new construct;
  instance[sourceSymbol] = {
    bytes: src2,
    position: position4,
    srcString: "",
    bytesEnd: srcEnd2
  };
  return instance;
}
function toConstant(code) {
  switch (code) {
    case 246:
      return null;
    case 247:
      return;
    case 248:
      return false;
    case 249:
      return true;
  }
  throw new Error("Unknown constant");
}
function withSource(get) {
  return function() {
    return get(this[sourceSymbol]);
  };
}
function saveState2() {
  if (currentSource) {
    currentSource.bytes = Uint8Array.prototype.slice.call(currentSource.bytes, currentSource.position, currentSource.bytesEnd);
    currentSource.position = 0;
    currentSource.bytesEnd = currentSource.bytes.length;
  }
}
function prepareStructures2(structures, packr) {
  if (packr.typedStructs) {
    let structMap = new Map;
    structMap.set("named", structures);
    structMap.set("typed", packr.typedStructs);
    structures = structMap;
  }
  let lastTypedStructuresLength = packr.lastTypedStructuresLength || 0;
  structures.isCompatible = (existing) => {
    let compatible = true;
    if (existing instanceof Map) {
      let named = existing.get("named") || [];
      if (named.length !== (packr.lastNamedStructuresLength || 0))
        compatible = false;
      let typed = existing.get("typed") || [];
      if (typed.length !== lastTypedStructuresLength)
        compatible = false;
    } else if (existing instanceof Array || Array.isArray(existing)) {
      if (existing.length !== (packr.lastNamedStructuresLength || 0))
        compatible = false;
    }
    if (!compatible)
      packr._mergeStructures(existing);
    return compatible;
  };
  packr.lastTypedStructuresLength = packr.typedStructs && packr.typedStructs.length;
  return structures;
}
var ASCII = 3;
var NUMBER = 0;
var UTF8 = 2;
var OBJECT_DATA = 1;
var DATE2 = 16;
var TYPE_NAMES = ["num", "object", "string", "ascii"];
TYPE_NAMES[DATE2] = "date";
var float32Headers = [false, true, true, false, false, true, true, false];
var evalSupported;
try {
  new Function("");
  evalSupported = true;
} catch (error23) {
}
var updatedPosition;
var hasNodeBuffer2 = typeof Buffer !== "undefined";
var textEncoder2;
var currentSource;
try {
  textEncoder2 = new TextEncoder;
} catch (error23) {
}
var encodeUtf8 = hasNodeBuffer2 ? function(target2, string7, position4) {
  return target2.utf8Write(string7, position4, 4294967295);
} : textEncoder2 && textEncoder2.encodeInto ? function(target2, string7, position4) {
  return textEncoder2.encodeInto(string7, target2.subarray(position4)).written;
} : false;
var TYPE = Symbol("type");
var PARENT = Symbol("parent");
setWriteStructSlots(writeStruct, prepareStructures2);
var sourceSymbol = Symbol.for("source");
setReadStruct(readStruct2, onLoadedStructures2, saveState2);
// node_modules/msgpackr/node-index.js
var nativeAccelerationDisabled = process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED !== undefined && process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase() === "true";
if (!nativeAccelerationDisabled) {
  let extractor;
  try {
    if (true)
      extractor = require_msgpackr_extract();
    else
      ;
    if (extractor)
      setExtractor(extractor.extractStrings);
  } catch (error23) {
  }
}

// node_modules/weak-lru-cache/LRFUExpirer.js
function startTimedCleanup(reference, cleanupInterval) {
  let interval = setInterval(() => {
    let expirer = reference.deref();
    if (expirer)
      expirer.cleanup();
    else
      clearInterval(interval);
  }, cleanupInterval);
  if (interval.unref)
    interval.unref();
}
var PINNED_IN_MEMORY = 2147483647;
var NOT_IN_LRU = 1073741824;
var EXPIRED_ENTRY = {
  description: "This cache entry value has been expired from the LRFU cache, and is waiting for garbage collection to be removed."
};

class LRFUExpirer {
  constructor(options) {
    this.lruSize = options && options.lruSize || 8192;
    if (this.lruSize > 4194304)
      throw new Error("The LRU/cache size was larger than the maximum cache size of 16777216 (LRU size of 4194304)");
    this.reset();
    startTimedCleanup(new WeakRef(this), options && options.cleanupInterval || 60000);
  }
  delete(entry) {
    if (entry.position < NOT_IN_LRU) {
      this.lru[entry.position >> 22 & 3][entry.position & 4194303] = null;
    }
    entry.position |= NOT_IN_LRU;
  }
  used(entry, expirationPriority) {
    let originalPosition = entry.position;
    let orMask;
    if (expirationPriority < 0) {
      if (entry.position < NOT_IN_LRU) {
        this.lru[entry.position >> 22 & 3][entry.position & 4194303] = null;
      }
      entry.position = PINNED_IN_MEMORY;
      return;
    } else if (entry.position == PINNED_IN_MEMORY && expirationPriority == undefined) {
      return;
    } else if (expirationPriority >= 0) {
      let bits = 0;
      if (expirationPriority > this.lruSize >> 2)
        expirationPriority = this.lruSize >> 2;
      while (expirationPriority > 0) {
        expirationPriority = expirationPriority >> 1;
        bits++;
      }
      expirationPriority = bits;
    } else {
      if (originalPosition >= 0)
        expirationPriority = originalPosition >> 24 & 63;
      else
        expirationPriority = 0;
    }
    let lruPosition;
    let lruIndex;
    if (originalPosition < NOT_IN_LRU) {
      lruIndex = originalPosition >> 22 & 3;
      if (lruIndex >= 3)
        return;
      let lru = this.lru[lruIndex];
      lruPosition = lru.position;
      if ((originalPosition > lruPosition ? lruPosition + this.lruSize : lruPosition) - originalPosition < this.lruSize >> 2)
        return;
      lru[originalPosition & 4194303] = null;
      lruIndex++;
    } else
      lruIndex = 0;
    this.insertEntry(entry, lruIndex, expirationPriority);
  }
  insertEntry(entry, lruIndex, expirationPriority) {
    let lruPosition, nextLru = this.lru[lruIndex];
    let orMask = 4194303 >> 22 - expirationPriority;
    do {
      lruPosition = nextLru.position | orMask;
      let previousEntry = nextLru[lruPosition & 4194303];
      nextLru[lruPosition & 4194303] = entry;
      if (entry)
        entry.position = lruPosition | expirationPriority << 24;
      nextLru.position = ++lruPosition;
      if ((lruPosition & 4194303) >= this.lruSize) {
        lruPosition &= 2143289344;
        nextLru.position = lruPosition;
        nextLru.cycles++;
      }
      entry = previousEntry;
      if (entry && (nextLru = this.lru[--lruIndex])) {
        expirationPriority = (entry.position || 0) >> 24 & 63;
        orMask = 4194303 >> 22 - expirationPriority;
      } else
        break;
    } while (true);
    if (entry) {
      entry.position |= NOT_IN_LRU;
      if (entry.cache)
        entry.cache.onRemove(entry);
      else if (entry.deref)
        entry.value = EXPIRED_ENTRY;
    }
  }
  reset() {
    this.lru = [];
    for (let i = 0;i < 4; i++) {
      this.lru[i] = new Array(this.lruSize);
      this.lru[i].position = i << 22;
      this.lru[i].cycles = 0;
    }
  }
  cleanup() {
    let toClear = this.lruSize >> 4;
    for (let i = 3;i >= 0; i--) {
      let lru = this.lru[i];
      for (let j = 0, l = toClear;j < l; j++) {
        if (lru[lru.position & 4194303]) {
          toClear--;
          this.insertEntry(null, i, 0);
        } else {
          if ((++lru.position & 4194303) >= this.lruSize) {
            lru.position &= 2143289344;
            lru.cycles++;
          }
        }
      }
    }
  }
}

// node_modules/weak-lru-cache/index.js
var defaultExpirer;

class WeakLRUCache2 extends Map {
  constructor(options) {
    super();
    this.hits = 0;
    this.misses = 0;
    if (options && options.cacheSize) {
      options.lruSize = options.cacheSize >> 2;
    }
    if (options && options.clearKeptInterval) {
      this.clearKeptInterval = options.clearKeptInterval;
      this.clearKeptCount = 0;
      this.clearKeptObjects = options.clearKeptObjects;
    }
    this.expirer = (options ? options.expirer === false ? defaultNoLRUExpirer : options.expirer : null) || defaultExpirer || (defaultExpirer = new LRFUExpirer(options));
    this.deferRegister = Boolean(options && options.deferRegister);
    let registry7 = this.registry = new FinalizationRegistry((key) => {
      let entry = super.get(key);
      if (entry && entry.deref && entry.deref() === undefined)
        super.delete(key);
    });
  }
  onRemove(entry) {
    let target2 = entry.deref && entry.deref();
    if (target2) {
      this.registry.register(target2, entry.key);
      entry.value = undefined;
    } else if (entry.key) {
      let currentEntry = super.get(entry.key);
      if (currentEntry === entry)
        super.delete(entry.key);
    }
  }
  get(key, mode) {
    let entry = super.get(key);
    let value15;
    if (entry) {
      this.hits++;
      value15 = entry.value;
      if (value15 === EXPIRED_ENTRY) {
        value15 = entry.deref && entry.deref();
        if (value15 === undefined)
          super.delete(key);
        else {
          entry.value = value15;
          if (this.clearKeptInterval)
            this.incrementClearKeptCount();
          if (mode !== 1)
            this.expirer.used(entry);
          return mode === 2 ? value15 : entry;
        }
      } else {
        if (mode !== 1)
          this.expirer.used(entry);
        return mode === 2 ? value15 : entry;
      }
    } else
      this.misses++;
  }
  getValue(key) {
    return this.get(key, 2);
  }
  setValue(key, value15, expirationPriority) {
    let entry;
    if (value15 && typeof value15 == "object") {
      entry = new WeakRef(value15);
      if (this.clearKeptInterval)
        this.incrementClearKeptCount();
      entry.value = value15;
      if (this.deferRegister) {
        entry.key = key;
        entry.cache = this;
      } else
        this.registry.register(value15, key);
    } else if (value15 !== undefined)
      entry = { value: value15, key, cache: this };
    this.set(key, entry, expirationPriority);
    return entry;
  }
  incrementClearKeptCount() {
    if (++this.clearKeptCount >= this.clearKeptInterval) {
      this.clearKeptCount = 0;
      if (this.clearKeptObjects)
        this.clearKeptObjects();
      if (this.registry.cleanupSome)
        this.registry.cleanupSome();
    }
  }
  set(key, entry, expirationPriority) {
    let oldEntry = super.get(key);
    if (oldEntry)
      this.expirer.delete(oldEntry);
    return this.insert(key, entry, expirationPriority);
  }
  insert(key, entry, expirationPriority) {
    if (entry) {
      this.expirer.used(entry, expirationPriority);
    }
    return super.set(key, entry);
  }
  delete(key) {
    let oldEntry = super.get(key);
    if (oldEntry) {
      this.expirer.delete(oldEntry);
    }
    return super.delete(key);
  }
  used(entry, expirationPriority) {
    this.expirer.used(entry, expirationPriority);
  }
  clear() {
    for (let [key, entry] of this) {
      this.expirer.delete(entry);
      super.delete(key);
    }
  }
}

class NoLRUExpirer {
  used(entry) {
    if (entry.cache)
      entry.cache.onRemove(entry);
    else if (entry.deref)
      entry.value = EXPIRED_ENTRY;
  }
  delete(entry) {
  }
}
var defaultNoLRUExpirer = new NoLRUExpirer;

// node_modules/ordered-binary/index.js
var exports_ordered_binary = {};
__export(exports_ordered_binary, {
  writeKey: () => writeKey,
  toBufferKey: () => toBufferKey,
  readKey: () => readKey2,
  fromBufferKey: () => fromBufferKey,
  encoder: () => encoder2,
  enableNullTermination: () => enableNullTermination,
  compareKeys: () => compareKeys,
  MINIMUM_KEY: () => MINIMUM_KEY,
  MAXIMUM_KEY: () => MAXIMUM_KEY
});
function writeKey(key, target2, position4, inSequence) {
  let targetView2 = target2.dataView;
  if (!targetView2)
    targetView2 = target2.dataView = new DataView(target2.buffer, target2.byteOffset, target2.byteLength + 3 >> 2 << 2);
  switch (typeof key) {
    case "string":
      let strLength = key.length;
      let c1 = key.charCodeAt(0);
      if (!(c1 >= 28))
        target2[position4++] = 27;
      if (strLength < 64) {
        let i, c2;
        for (i = 0;i < strLength; i++) {
          c1 = key.charCodeAt(i);
          if (c1 <= 4) {
            target2[position4++] = 4;
            target2[position4++] = c1;
          } else if (c1 < 128) {
            target2[position4++] = c1;
          } else if (c1 < 2048) {
            target2[position4++] = c1 >> 6 | 192;
            target2[position4++] = c1 & 63 | 128;
          } else if ((c1 & 64512) === 55296 && ((c2 = key.charCodeAt(i + 1)) & 64512) === 56320) {
            c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
            i++;
            target2[position4++] = c1 >> 18 | 240;
            target2[position4++] = c1 >> 12 & 63 | 128;
            target2[position4++] = c1 >> 6 & 63 | 128;
            target2[position4++] = c1 & 63 | 128;
          } else {
            target2[position4++] = c1 >> 12 | 224;
            target2[position4++] = c1 >> 6 & 63 | 128;
            target2[position4++] = c1 & 63 | 128;
          }
        }
      } else {
        if (target2.utf8Write)
          position4 += target2.utf8Write(key, position4, 4294967295);
        else
          position4 += textEncoder3.encodeInto(key, target2.subarray(position4)).written;
        if (position4 > target2.length - 4)
          throw new RangeError("String does not fit in target buffer");
      }
      break;
    case "number":
      float64Array[0] = key;
      let lowInt = int32Array[0];
      let highInt = int32Array[1];
      let length;
      if (key < 0) {
        targetView2.setInt32(position4 + 4, ~(lowInt >>> 4 | highInt << 28));
        targetView2.setInt32(position4 + 0, (highInt ^ 2147483647) >>> 4);
        targetView2.setInt32(position4 + 8, (lowInt & 15 ^ 15) << 4, true);
        return position4 + 9;
      } else if (lowInt & 15 || inSequence) {
        length = 9;
      } else if (lowInt & 1048575)
        length = 8;
      else if (lowInt || highInt & 15)
        length = 6;
      else
        length = 4;
      targetView2.setInt32(position4 + 0, highInt >>> 4 | 268435456);
      targetView2.setInt32(position4 + 4, lowInt >>> 4 | highInt << 28);
      targetView2.setInt32(position4 + 8, (lowInt & 15) << 4, true);
      return position4 + length;
    case "object":
      if (key) {
        if (Array.isArray(key)) {
          for (let i = 0, l = key.length;i < l; i++) {
            if (i > 0)
              target2[position4++] = 0;
            position4 = writeKey(key[i], target2, position4, true);
          }
          break;
        } else if (key instanceof Uint8Array) {
          target2.set(key, position4);
          position4 += key.length;
          break;
        } else {
          throw new Error("Unable to serialize object as a key: " + JSON.stringify(key));
        }
      } else
        target2[position4++] = 0;
      break;
    case "boolean":
      targetView2.setUint32(position4++, key ? 7 : 6, true);
      return position4;
    case "bigint":
      let asFloat = Number(key);
      if (BigInt(asFloat) > key) {
        float64Array[0] = asFloat;
        if (asFloat > 0) {
          if (int32Array[0])
            int32Array[0]--;
          else {
            int32Array[1]--;
            int32Array[0] = 4294967295;
          }
        } else {
          if (int32Array[0] < 4294967295)
            int32Array[0]++;
          else {
            int32Array[1]++;
            int32Array[0] = 0;
          }
        }
        asFloat = float64Array[0];
      }
      let difference = key - BigInt(asFloat);
      if (difference === 0n)
        return writeKey(asFloat, target2, position4, inSequence);
      writeKey(asFloat, target2, position4, inSequence);
      position4 += 9;
      let exponent = BigInt((int32Array[1] >> 20 & 2047) - 1079);
      let nextByte = difference >> exponent;
      target2[position4 - 1] |= Number(nextByte);
      difference -= nextByte << exponent;
      let first = true;
      while (difference || first) {
        first = false;
        exponent -= 7n;
        let nextByte2 = difference >> exponent;
        target2[position4++] = Number(nextByte2) | 128;
        difference -= nextByte2 << exponent;
      }
      return position4;
    case "undefined":
      return position4;
    case "symbol":
      target2[position4++] = 2;
      return writeKey(key.description, target2, position4, inSequence);
    default:
      throw new Error("Can not serialize key of type " + typeof key);
  }
  if (nullTerminate && !inSequence)
    targetView2.setUint32(position4, 0);
  return position4;
}
function readKey2(buffer, start, end, inSequence) {
  position4 = start;
  let controlByte = buffer[position4];
  let value15;
  if (controlByte < 24) {
    if (controlByte < 8) {
      position4++;
      if (controlByte == 6) {
        value15 = false;
      } else if (controlByte == 7) {
        value15 = true;
      } else if (controlByte == 0) {
        value15 = null;
      } else if (controlByte == 2) {
        value15 = Symbol.for(readStringSafely(buffer, end));
      } else
        return Uint8Array.prototype.slice.call(buffer, start, end);
    } else {
      let dataView2;
      try {
        dataView2 = buffer.dataView || (buffer.dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength + 3 >> 2 << 2));
      } catch (error23) {
        dataView2 = buffer.dataView || (buffer.dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.buffer.byteLength - buffer.byteOffset));
      }
      let highInt = dataView2.getInt32(position4) << 4;
      let size = end - position4;
      let lowInt;
      if (size > 4) {
        lowInt = dataView2.getInt32(position4 + 4);
        highInt |= lowInt >>> 28;
        if (size <= 6) {
          lowInt &= -65536;
        }
        lowInt = lowInt << 4;
        if (size > 8) {
          lowInt = lowInt | buffer[position4 + 8] >> 4;
        }
      } else
        lowInt = 0;
      if (controlByte < 16) {
        highInt = highInt ^ 2147483647;
        lowInt = ~lowInt;
      }
      int32Array[1] = highInt;
      int32Array[0] = lowInt;
      value15 = float64Array[0];
      position4 += 9;
      if (size > 9 && buffer[position4] > 0) {
        value15 = BigInt(value15);
        let exponent = highInt >> 20 & 2047;
        let next_byte = buffer[position4 - 1] & 15;
        value15 += BigInt(next_byte) << BigInt(exponent - 1079);
        while ((next_byte = buffer[position4]) > 0 && position4++ < end) {
          value15 += BigInt(next_byte & 127) << BigInt((start - position4) * 7 + exponent - 1016);
        }
      }
    }
  } else {
    if (controlByte == 27) {
      position4++;
    }
    value15 = readStringSafely(buffer, end);
  }
  while (position4 < end) {
    if (buffer[position4] === 0)
      position4++;
    if (inSequence) {
      encoder2.position = position4;
      return value15;
    }
    let nextValue = readKey2(buffer, position4, end, true);
    if (value15 instanceof Array) {
      value15.push(nextValue);
    } else
      value15 = [value15, nextValue];
  }
  return value15;
}
function makeStringBuilder() {
  let stringBuildCode = "(source) => {";
  let previous = [];
  for (let i = 0;i < 48; i++) {
    let v = fromCharCode2((i & 15) + 97) + fromCharCode2((i >> 4) + 97);
    stringBuildCode += `
		let ${v} = source[position++]
		if (${v} > 4) {
			if (${v} >= 0x80) ${v} = finishUtf8(${v}, source)
		} else {
			if (${v} === 4)
				${v} = source[position++]
			else
				return fromCharCode(${previous})
		}
		`;
    previous.push(v);
    if (i == 1e6)
      finishUtf8();
  }
  stringBuildCode += `return fromCharCode(${previous}) + readString(source)}`;
  return stringBuildCode;
}
function finishUtf8(byte1, src2) {
  if ((byte1 & 224) === 192) {
    const byte2 = src2[position4++] & 63;
    return (byte1 & 31) << 6 | byte2;
  } else if ((byte1 & 240) === 224) {
    const byte2 = src2[position4++] & 63;
    const byte3 = src2[position4++] & 63;
    return (byte1 & 31) << 12 | byte2 << 6 | byte3;
  } else if ((byte1 & 248) === 240) {
    if (pendingSurrogate) {
      byte1 = pendingSurrogate;
      pendingSurrogate = null;
      position4 += 3;
      return byte1;
    }
    const byte2 = src2[position4++] & 63;
    const byte3 = src2[position4++] & 63;
    const byte4 = src2[position4++] & 63;
    let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
    if (unit > 65535) {
      pendingSurrogate = 56320 | unit & 1023;
      unit = unit - 65536 >>> 10 & 1023 | 55296;
      position4 -= 4;
    }
    return unit;
  } else {
    return byte1;
  }
}
function readStringSafely(source, end) {
  if (source[end] > 0) {
    let previous = source[end];
    try {
      source[end] = 0;
      return readString2(source);
    } finally {
      source[end] = previous;
    }
  } else
    return readString2(source);
}
function compareKeys(a, b) {
  if (typeof a == "object") {
    if (!a) {
      return b == null ? 0 : -1;
    }
    if (a.compare) {
      if (b == null) {
        return 1;
      } else if (b.compare) {
        return a.compare(b);
      } else {
        return -1;
      }
    }
    let arrayComparison;
    if (b instanceof Array) {
      let i = 0;
      while ((arrayComparison = compareKeys(a[i], b[i])) == 0 && i <= a.length) {
        i++;
      }
      return arrayComparison;
    }
    arrayComparison = compareKeys(a[0], b);
    if (arrayComparison == 0 && a.length > 1)
      return 1;
    return arrayComparison;
  } else if (typeof a == typeof b) {
    if (typeof a === "symbol") {
      a = Symbol.keyFor(a);
      b = Symbol.keyFor(b);
    }
    return a < b ? -1 : a === b ? 0 : 1;
  } else if (typeof b == "object") {
    if (b instanceof Array)
      return -compareKeys(b, a);
    return 1;
  } else {
    return typeOrder[typeof a] < typeOrder[typeof b] ? -1 : 1;
  }
}
var float64Array = new Float64Array(2);
var int32Array = new Int32Array(float64Array.buffer, 0, 4);
var nullTerminate = false;
var textEncoder3;
try {
  textEncoder3 = new TextEncoder;
} catch (error23) {
}
var position4;
var enableNullTermination = () => nullTerminate = true;
var encoder2 = {
  writeKey,
  readKey: readKey2,
  enableNullTermination
};
var targetBuffer = [];
var targetPosition = 0;
var hasNodeBuffer3 = typeof Buffer !== "undefined";
var ByteArrayAllocate2 = hasNodeBuffer3 ? Buffer.allocUnsafeSlow : Uint8Array;
var toBufferKey = (key) => {
  let newBuffer;
  if (targetPosition + 100 > targetBuffer.length) {
    targetBuffer = new ByteArrayAllocate2(8192);
    targetPosition = 0;
    newBuffer = true;
  }
  try {
    let result = targetBuffer.slice(targetPosition, targetPosition = writeKey(key, targetBuffer, targetPosition));
    if (targetPosition > targetBuffer.length) {
      if (newBuffer)
        throw new Error("Key is too large");
      return toBufferKey(key);
    }
    return result;
  } catch (error23) {
    if (newBuffer)
      throw error23;
    targetPosition = targetBuffer.length;
    return toBufferKey(key);
  }
};
var fromBufferKey = (sourceBuffer) => {
  return readKey2(sourceBuffer, 0, sourceBuffer.length);
};
var fromCharCode2 = String.fromCharCode;
var pendingSurrogate;
var readString2 = typeof process !== "undefined" && process.isBun ? function(reading) {
  let { setPosition, getPosition, readString: readString3 } = reading;
  return (source) => {
    setPosition(position4);
    let value15 = readString3(source);
    position4 = getPosition();
    return value15;
  };
}(new Function("fromCharCode", "let position; let readString = " + makeStringBuilder() + ";return {" + "setPosition(p) { position = p }," + "getPosition() { return position }," + "readString }")(fromCharCode2)) : eval(makeStringBuilder());
var typeOrder = {
  symbol: 0,
  undefined: 1,
  boolean: 2,
  number: 3,
  string: 4
};
var MINIMUM_KEY = null;
var MAXIMUM_KEY = new Uint8Array([255]);
// node_modules/lmdb/index.js
enableNullTermination();
setExternals({
  arch: arch3,
  fs: fs2,
  tmpdir: tmpdir2,
  MsgpackrEncoder: Encoder,
  WeakLRUCache: WeakLRUCache2,
  orderedBinary: exports_ordered_binary,
  EventEmitter: EventEmitter2,
  os: platform(),
  onExit(callback) {
    if (process.getMaxListeners() < process.listenerCount("exit") + 8)
      process.setMaxListeners(process.listenerCount("exit") + 8);
    process.on("exit", callback);
  }
});
var TIMESTAMP_PLACEHOLDER = new Uint8Array([1, 1, 1, 1, 0, 0, 0, 0]);
var DIRECT_WRITE_PLACEHOLDER = new Uint8Array([1, 1, 1, 2, 0, 0, 0, 0]);

// node_modules/lmdb/node-index.js
var require2 = createRequire2(import.meta.url);
setRequire(require2);
var v8AccelerationEnabled = false;
var versions = process.versions;
if (!versions.deno && !process.isBun) {
  let [majorVersion, minorVersion] = versions.node.split(".");
  if (versions.v8 && +majorVersion == nativeAddon.version.nodeCompiledVersion) {
    let v8Funcs = {};
    let fastApiCalls = (majorVersion == 17 || majorVersion == 18 || majorVersion == 16 && minorVersion > 8) && !process.env.DISABLE_TURBO_CALLS;
    if (fastApiCalls) {
      require2("v8").setFlagsFromString("--turbo-fast-api-calls");
    }
    nativeAddon.enableDirectV8(v8Funcs, fastApiCalls);
    Object.assign(nativeAddon, v8Funcs);
    v8AccelerationEnabled = true;
  } else if (majorVersion == 14) {
    let v8Funcs = {};
    nativeAddon.enableDirectV8(v8Funcs, false);
    nativeAddon.clearKeptObjects = v8Funcs.clearKeptObjects;
  }
  nativeAddon.enableThreadSafeCalls();
}
setNativeFunctions(nativeAddon);

// src/config.ts
function initializeDatabases() {
  RUNTIME_CONFIG.databases.forEach((dbConfig) => {
    databases[dbConfig.name] = open({
      path: dbConfig.path,
      compression: true
    });
  });
}
var DEFAULT_CONFIG = {
  databases: [
    { name: "main", path: "./data/" }
  ],
  server: {
    port: 5000,
    host: "127.0.0.1"
  },
  logLevel: "info"
};
var RUNTIME_CONFIG = { ...DEFAULT_CONFIG };
var databases = {};

// src/connector.ts
class Connector {
  static async get(dbName, key) {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    return await db.get(key);
  }
  static async put(dbName, key, value15) {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    await db.put(key, value15);
  }
  static async remove(dbName, key) {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    await db.remove(key);
  }
  static async getAll(dbName) {
    if (!databases[dbName]) {
      throw new Error(`Database ${dbName} not found`);
    }
    const db = databases[dbName];
    const items = [];
    for await (const { key, value: value15 } of db.getRange()) {
      items.push({ key: key.toString(), value: value15 });
    }
    return items;
  }
}

// node_modules/@elysiajs/cors/dist/index.mjs
var isBun2 = typeof new Headers()?.toJSON === "function";
var processHeaders = (headers) => {
  if (isBun2)
    return Object.keys(headers.toJSON()).join(", ");
  let keys3 = "";
  headers.forEach((_2, key) => {
    keys3 += key + ", ";
  });
  if (keys3)
    keys3 = keys3.slice(0, -1);
  return keys3;
};
var processOrigin = (origin, request, from) => {
  if (Array.isArray(origin))
    return origin.some((o) => processOrigin(o, request, from));
  switch (typeof origin) {
    case "string":
      if (origin.indexOf("://") === -1)
        return from.includes(origin);
      return origin === from;
    case "function":
      return origin(request) === true;
    case "object":
      if (origin instanceof RegExp)
        return origin.test(from);
  }
  return false;
};
var cors = (config2) => {
  let {
    aot = true,
    origin = true,
    methods = true,
    allowedHeaders = true,
    exposeHeaders = true,
    credentials = true,
    maxAge = 5,
    preflight = true
  } = config2 ?? {};
  if (Array.isArray(allowedHeaders))
    allowedHeaders = allowedHeaders.join(", ");
  if (Array.isArray(exposeHeaders))
    exposeHeaders = exposeHeaders.join(", ");
  const origins = typeof origin === "boolean" ? undefined : Array.isArray(origin) ? origin : [origin];
  const app = new Elysia({
    name: "@elysiajs/cors",
    seed: config2,
    aot
  });
  const anyOrigin = origins?.some((o) => o === "*");
  const handleOrigin = (set2, request) => {
    if (origin === true) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (anyOrigin) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = "*";
      return;
    }
    if (!origins?.length)
      return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0;i < origins.length; i++) {
        const value15 = processOrigin(origins[i], request, from);
        if (value15 === true) {
          set2.headers.vary = origin ? "Origin" : "*";
          set2.headers["access-control-allow-origin"] = from || "*";
          return;
        }
        if (value15)
          headers.push(value15);
      }
    }
    set2.headers.vary = "Origin";
    if (headers.length)
      set2.headers["access-control-allow-origin"] = headers.join(", ");
  };
  const handleMethod = (set2, method) => {
    if (!method)
      return;
    if (methods === true)
      return set2.headers["access-control-allow-methods"] = method ?? "*";
    if (methods === false || !methods?.length)
      return;
    if (methods === "*")
      return set2.headers["access-control-allow-methods"] = "*";
    if (!Array.isArray(methods))
      return set2.headers["access-control-allow-methods"] = methods;
    set2.headers["access-control-allow-methods"] = methods.join(", ");
  };
  const defaultHeaders = {};
  if (typeof exposeHeaders === "string")
    defaultHeaders["access-control-expose-headers"] = exposeHeaders;
  if (typeof allowedHeaders === "string")
    defaultHeaders["access-control-allow-headers"] = allowedHeaders;
  if (credentials === true)
    defaultHeaders["access-control-allow-credentials"] = "true";
  app.headers(defaultHeaders);
  function handleOption({ set: set2, request, headers }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.headers.get("access-control-request-method"));
    if (allowedHeaders === true || exposeHeaders === true) {
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers["access-control-request-headers"];
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = Object.keys(headers).join(",");
    }
    if (maxAge)
      set2.headers["access-control-max-age"] = maxAge.toString();
    return new Response(null, {
      status: 204
    });
  }
  if (preflight)
    app.options("/", handleOption).options("/*", handleOption);
  return app.onRequest(function processCors({ set: set2, request }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.method);
    if (allowedHeaders === true || exposeHeaders === true) {
      const headers = processHeaders(request.headers);
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers;
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = headers;
    }
  });
};

// src/index.ts
function handleError(error23) {
  const errorMessage = error23 instanceof Error ? error23.message : "An unknown error occurred";
  return new Response(JSON.stringify({ error: errorMessage }), {
    status: 500,
    headers: { "Content-Type": "application/json" }
  });
}
initializeDatabases();
var app = new Elysia;
app.use(cors());
app.get("/api", () => {
  return Object.keys(Connector.getAll);
});
app.get("/api/:dbName/:key", async ({ params }) => {
  try {
    const { dbName, key } = params;
    return await Connector.get(dbName, key);
  } catch (error23) {
    return handleError(error23);
  }
});
app.post("/api/:dbName", async ({ params, body }) => {
  try {
    const { dbName } = params;
    const { key, value: value15 } = body;
    await Connector.put(dbName, key, value15);
    return { success: true };
  } catch (error23) {
    return handleError(error23);
  }
});
app.delete("/api/:dbName/:key", async ({ params }) => {
  try {
    const { dbName, key } = params;
    await Connector.remove(dbName, key);
    return { success: true };
  } catch (error23) {
    return handleError(error23);
  }
});
app.get("/api/:dbName", async ({ params }) => {
  try {
    const { dbName } = params;
    return await Connector.getAll(dbName);
  } catch (error23) {
    return handleError(error23);
  }
});
app.ws("/ws", {
  open(ws) {
    console.log("WebSocket connected");
  },
  message(ws, message) {
    const { action, dbName, key, value: value15 } = JSON.parse(message);
    let response;
    switch (action) {
      case "get":
        response = Connector.get(dbName, key);
        break;
      case "put":
        response = Connector.put(dbName, key, value15);
        break;
      case "remove":
        response = Connector.remove(dbName, key);
        break;
      case "getAll":
        response = Connector.getAll(dbName);
        break;
      default:
        response = Promise.resolve({ error: "Invalid action" });
    }
    response.then((result) => ws.send(JSON.stringify(result)));
  },
  close(ws) {
    console.log("WebSocket closed");
  }
});
app.listen(RUNTIME_CONFIG.server.port, () => {
  console.log(`Server is running on http://${RUNTIME_CONFIG.server.host}:${RUNTIME_CONFIG.server.port}`);
});
