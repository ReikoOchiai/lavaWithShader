uniform float time;
uniform sampler2D uPositions;
varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.141592653589793238;

void main() {
  vec4 pos = texture2D(uPositions, vUv);
  float radius = length(pos.xy);
  float angle = atan(pos.y, pos.x) - 0.1;

  vec3 targetPos = vec3(cos(angle), sin(angle), 0.0) * radius;

  pos.xy += (targetPos.xy - pos.xy) * 0.1;
  gl_FragColor = vec4(pos.xy, 1.0,1.0);
}