export const plateVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

export const plateFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uRim;

  varying vec3 vNormal;
  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    vec3 n = normalize(vNormal);
    float fresnel = pow(1.0 - max(dot(n, vec3(0.0, 0.0, 1.0)), 0.0), 2.4);
    float swirl = sin((vUv.x * 12.0 + vUv.y * 8.0) + uTime * 0.35) * 0.5 + 0.5;
    vec3 base = mix(uColorA, uColorB, swirl * 0.35 + vUv.y * 0.4);
    vec3 color = mix(base, uRim, fresnel * 0.85);
    float gloss = pow(max(n.y, 0.0), 18.0) * 0.55;
    color += vec3(gloss);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const sauceVertex = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 6.0 + uTime * 1.4) * 0.012
              + cos(pos.z * 7.0 + uTime * 1.1) * 0.01;
    pos.y += wave;
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const sauceFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    float rim = smoothstep(0.35, 0.95, length(vUv - 0.5) * 2.0);
    float sheen = sin(vUv.x * 20.0 + uTime * 2.0 + vWave * 40.0) * 0.08;
    vec3 color = uColor + sheen + rim * 0.12;
    float alpha = mix(0.92, 0.75, rim);
    gl_FragColor = vec4(color, alpha);
  }
`;

export const steamVertex = /* glsl */ `
  uniform float uTime;
  attribute float aScale;
  attribute float aOffset;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float t = uTime * 0.35 + aOffset;
    pos.y += mod(t, 2.4);
    pos.x += sin(t * 2.2 + aOffset) * 0.12;
    pos.z += cos(t * 1.7 + aOffset) * 0.1;
    vAlpha = 1.0 - smoothstep(0.0, 2.4, mod(t, 2.4));
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (140.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

export const steamFragment = /* glsl */ `
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float soft = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(1.0, 1.0, 1.0, soft * vAlpha * 0.22);
  }
`;
