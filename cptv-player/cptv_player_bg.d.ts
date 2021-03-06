/* tslint:disable */
export const memory: WebAssembly.Memory;
export function initBufferWithSize(a: number): void;
export function insertChunkAtOffset(a: number, b: number, c: number): void;
export function initWithCptvData(a: number, b: number): number;
export function getNumFrames(): number;
export function getWidth(): number;
export function getHeight(): number;
export function getFrameRate(): number;
export function getFramesPerIframe(): number;
export function getMinValue(): number;
export function getMaxValue(): number;
export function getHeader(): number;
export function queueFrame(a: number, b: number): number;
export function __wbg_frameheaderv2_free(a: number): void;
export function __wbg_get_frameheaderv2_time_on(a: number): number;
export function __wbg_set_frameheaderv2_time_on(a: number, b: number): void;
export function __wbg_get_frameheaderv2_last_ffc_time(a: number): number;
export function __wbg_set_frameheaderv2_last_ffc_time(a: number, b: number): void;
export function __wbg_get_frameheaderv2_frame_number(a: number): number;
export function __wbg_set_frameheaderv2_frame_number(a: number, b: number): void;
export function __wbg_get_frameheaderv2_has_next_frame(a: number): number;
export function __wbg_set_frameheaderv2_has_next_frame(a: number, b: number): void;
export function getFrame(a: number, b: number, c: number): number;
export function getRawFrame(a: number, b: number): number;
export function atou8_range(a: number, b: number): number;
export function atou16_range(a: number, b: number): number;
export function atou32_range(a: number, b: number): number;
export function atou64_range(a: number, b: number): number;
export function atousize_range(a: number, b: number): number;
export function atoi8_range(a: number, b: number): number;
export function atoi16_range(a: number, b: number): number;
export function atoi32_range(a: number, b: number): number;
export function atoi64_range(a: number, b: number): number;
export function atoisize_range(a: number, b: number): number;
export function try_atou8_range(a: number, b: number, c: number): void;
export function try_atou16_range(a: number, b: number, c: number): void;
export function try_atou32_range(a: number, b: number, c: number): void;
export function try_atou64_range(a: number, b: number, c: number): void;
export function try_atousize_range(a: number, b: number, c: number): void;
export function try_atoi8_range(a: number, b: number, c: number): void;
export function try_atoi16_range(a: number, b: number, c: number): void;
export function try_atoi32_range(a: number, b: number, c: number): void;
export function try_atoi64_range(a: number, b: number, c: number): void;
export function try_atoisize_range(a: number, b: number, c: number): void;
export function atou128_range(a: number, b: number, c: number): void;
export function atoi128_range(a: number, b: number, c: number): void;
export function try_atou128_range(a: number, b: number, c: number): void;
export function try_atoi128_range(a: number, b: number, c: number): void;
export function is_success(a: number, b: number): number;
export function is_overflow(a: number, b: number): number;
export function is_invalid_digit(a: number, b: number): number;
export function is_empty(a: number, b: number): number;
export function get_nan_string_ffi(a: number, b: number): number;
export function set_nan_string_ffi(a: number, b: number): number;
export function get_inf_string_ffi(a: number, b: number): number;
export function set_inf_string_ffi(a: number, b: number): number;
export function get_infinity_string_ffi(a: number, b: number): number;
export function set_infinity_string_ffi(a: number, b: number): number;
export function f32toa_range(a: number, b: number, c: number): number;
export function f64toa_range(a: number, b: number, c: number): number;
export function u8toa_range(a: number, b: number, c: number): number;
export function u16toa_range(a: number, b: number, c: number): number;
export function u32toa_range(a: number, b: number, c: number): number;
export function u64toa_range(a: number, b: number, c: number): number;
export function usizetoa_range(a: number, b: number, c: number): number;
export function i8toa_range(a: number, b: number, c: number): number;
export function i16toa_range(a: number, b: number, c: number): number;
export function i32toa_range(a: number, b: number, c: number): number;
export function i64toa_range(a: number, b: number, c: number): number;
export function isizetoa_range(a: number, b: number, c: number): number;
export function u128toa_range(a: number, b: number, c: number, d: number): number;
export function i128toa_range(a: number, b: number, c: number, d: number): number;
export function atof32_range(a: number, b: number): number;
export function atof64_range(a: number, b: number): number;
export function atof32_lossy_range(a: number, b: number): number;
export function atof64_lossy_range(a: number, b: number): number;
export function try_atof32_range(a: number, b: number, c: number): void;
export function try_atof64_range(a: number, b: number, c: number): void;
export function try_atof32_lossy_range(a: number, b: number, c: number): void;
export function try_atof64_lossy_range(a: number, b: number, c: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
