var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import matrixMultiply from "./matrixMultiply.js";
import matrixMultiplyAsync1 from "./matrixMultiplyAsync1.js";
import matrixMultiplyAsync2 from "./matrixMultiplyAsync2.js";
import randomMatrix from "./randomMatrix.js";
function timeIt(label, thunk) {
    return __awaiter(this, void 0, void 0, function () {
        var t0, t1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t0 = performance.now();
                    return [4 /*yield*/, thunk()];
                case 1:
                    _a.sent();
                    t1 = performance.now();
                    console.log("".concat(label, ": ").concat((t1 - t0).toFixed(2), " ms"));
                    return [2 /*return*/];
            }
        });
    });
}
function driver() {
    return __awaiter(this, void 0, void 0, function () {
        var size, a, b;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    size = 10;
                    a = randomMatrix(size);
                    b = randomMatrix(size);
                    console.log("Matrix size: ".concat(size, "x").concat(size));
                    // Sequential
                    return [4 /*yield*/, timeIt("matrixMultiply (sequential)", function () { return matrixMultiply(a, b); })];
                case 1:
                    // Sequential
                    _a.sent();
                    // Async1
                    return [4 /*yield*/, timeIt("matrixMultiplyAsync1 (async)", function () {
                            return matrixMultiplyAsync1(a, b);
                        })];
                case 2:
                    // Async1
                    _a.sent();
                    // Async2
                    return [4 /*yield*/, timeIt("matrixMultiplyAsync2 (async, concurrent)", function () {
                            return matrixMultiplyAsync2(a, b);
                        })];
                case 3:
                    // Async2
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
driver();
