#version 450

void main() {
    int i = 0;
    ivec2 i2 = ivec2(0);
    ivec3 i3 = ivec3(0);
    ivec4 i4 = ivec4(0);
    uint u = 0;
    uvec2 u2 = uvec2(0);
    uvec3 u3 = uvec3(0);
    uvec4 u4 = uvec4(0);
    vec2 f2 = vec2(0.0);
    vec4 f4 = vec4(0.0);
    u = packSnorm4x8(f4);
    u = packUnorm4x8(f4);
    u = packSnorm2x16(f2);
    u = packUnorm2x16(f2);
    u = packHalf2x16(f2);
    f4 = unpackSnorm4x8(u);
    f4 = unpackUnorm4x8(u);
    f2 = unpackSnorm2x16(u);
    f2 = unpackUnorm2x16(u);
    f2 = unpackHalf2x16(u);
    i = bitfieldInsert(i, i, 5, 10);
    i2 = bitfieldInsert(i2, i2, 5, 10);
    i3 = bitfieldInsert(i3, i3, 5, 10);
    i4 = bitfieldInsert(i4, i4, 5, 10);
    u = bitfieldInsert(u, u, 5, 10);
    u2 = bitfieldInsert(u2, u2, 5, 10);
    u3 = bitfieldInsert(u3, u3, 5, 10);
    u4 = bitfieldInsert(u4, u4, 5, 10);
    i = bitfieldExtract(i, 5, 10);
    i2 = bitfieldExtract(i2, 5, 10);
    i3 = bitfieldExtract(i3, 5, 10);
    i4 = bitfieldExtract(i4, 5, 10);
    u = bitfieldExtract(u, 5, 10);
    u2 = bitfieldExtract(u2, 5, 10);
    u3 = bitfieldExtract(u3, 5, 10);
    u4 = bitfieldExtract(u4, 5, 10);
}