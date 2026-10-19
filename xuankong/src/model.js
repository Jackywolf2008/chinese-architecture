import * as THREE from 'three';

// 坐标：x 南负北正，y 向上，z 朝东、朝向峡谷。
// 楼的进深约 4 米。飞梁从岩内伸到前廊；埋入段画得比露在廊外的更长，插入深度的两说见正文。
const SOUTH = { x0: -7.4, x1: 0.6, z0: 0.15, z1: 4.15, floors: [23.8, 28.8, 33.8] };
const NORTH = { x0: 10.6, x1: 17.6, z0: 0.15, z1: 4.15, floors: [32.6, 37.6, 42.6] };
const BR = { x0: 0.6, x1: 10.6, y0: 28.8, y1: 32.6, z: 3.15 };

export const INFO = {
  beam: ['飞梁', '插入石灰岩的横梁，把楼面的重量传进山体。根数按二十七根来排，插入深度是示意。'],
  wedge: ['木楔', '塞在梁尾。外面越压，里面咬得越紧。'],
  socket: ['石窝', '开在石灰岩上的孔，飞梁从这里送进去。'],
  post: ['立木', '细长的红柱，分成三组。看着像主力，记载里它承重多少并不一致。'],
  col: ['檐柱', '楼阁自己的柱子，站在楼面上，不落到谷底。'],
  brk: ['斗拱', '檐下的出挑。模型只留一层，没有按铺作逐件拆开。'],
  wall: ['墙与楼身', '靠崖的一面封闭，其余几面是廊。'],
  deck: ['楼板', '压在飞梁和岩台上面。'],
  roof: ['屋檐', '黄琉璃歇山，檐角略有起翘。模型是示意。'],
  glaze: ['屋脊', '琉璃脊。'],
  rail: ['栏杆', '栈道和前廊边缘的木栏。'],
  figure: ['塑像', '造型是示意，不是寺里的原作。'],
  plaque: ['匾额', '标出这一层是哪一殿。'],
  stair: ['磴道', '顺着崖缝上去的踏步。'],
  rock: ['翠屏峰', '向里凹的石灰岩崖壁，顶上探出一檐。'],
  person: ['人', '用来对照立柱有多长。崖高比真实记载短。'],
  cave: ['石窟', '栈道旁的北魏石刻，这里只标位置。'],
};

const CAT_PAGE = {
  beam: 'beams', wedge: 'joinery', socket: 'beams', post: 'posts',
  col: 'plan', brk: 'south', wall: 'plan', deck: 'plan', roof: 'plan', glaze: 'plan',
  rail: 'bridge', figure: 'three', plaque: 'plan', stair: 'court', rock: 'site', cave: 'bridge',
};

export function createWorld() {
  const CUT = new THREE.Plane(new THREE.Vector3(0, 0, -1), 80);
  const ROCK_CUT = new THREE.Plane(new THREE.Vector3(0, 0, -1), 80);
  const byCat = {};
  const labels = {};
  const steps = [];
  let cur = null;

  const cliff = new THREE.Group();
  const root = new THREE.Group();
  const env = new THREE.Group();
  const lab = new THREE.Group();
  lab.visible = false;

  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _e = new THREE.Euler();
  const _v = new THREE.Vector3();
  const _s = new THREE.Vector3();
  const _c = new THREE.Color();

  function track(cat, material) {
    material.userData.cat = cat;
    (byCat[cat] ||= []).push(material);
    return material;
  }
  function mat(cat, color, opt = {}) {
    const base = { color, roughness: 0.86, metalness: 0, side: THREE.DoubleSide };
    if (cat === 'rock') base.clippingPlanes = [ROCK_CUT];
    return track(cat, new THREE.MeshStandardMaterial(Object.assign(base, opt)));
  }
  const inst = {};
  function iMat(cat, opt) {
    if (!inst[cat]) inst[cat] = mat(cat, 0xffffff, opt);
    return inst[cat];
  }

  const tile = tileTex();
  const roofMat = mat('roof', 0xffffff, { map: tile, roughness: 0.58, metalness: 0.06 });
  const ridgeMat = mat('glaze', 0x2c6a48, { roughness: 0.42, metalness: 0.14 });
  const rockMats = [0xb5a692, 0xab9d8a, 0xbfb19a, 0xa59482].map(h => mat('rock', h, { roughness: 0.94 }));
  const plaqueCache = new Map();

  function step(name, level, tag, text, cam) {
    const group = new THREE.Group();
    group.userData.level = level;
    root.add(group);
    cur = { name, level, tag, text, cam, group, items: new Map() };
    steps.push(cur);
    return cur;
  }
  function put(cat, page, kind, x, y, z, sx, sy, sz, color, rx = 0, ry = 0, rz = 0) {
    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    _m.compose(_v.set(x, y, z), _q, _s.set(sx, sy, sz));
    const key = cat + '|' + kind + '|' + page;
    let it = cur.items.get(key);
    if (!it) { it = { cat, page, kind, mats: [], cols: [] }; cur.items.set(key, it); }
    for (let i = 0; i < 16; i++) it.mats.push(_m.elements[i]);
    _c.set(color);
    it.cols.push(_c.r, _c.g, _c.b);
  }
  function putY(cat, page, x, y, z, h, d, color) {
    put(cat, page, 'cyl', x, y, z, d, h, d, color);
  }
  function putZ(cat, page, x, y, z, len, d, color) {
    put(cat, page, 'cyl', x, y, z, d, len, d, color, Math.PI / 2, 0, 0);
  }
  function addMesh(group, cat, page, geo, material, x, y, z, rx = 0, ry = 0, rz = 0) {
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = cat !== 'rock' && cat !== 'env';
    mesh.receiveShadow = true;
    mesh.userData = { cat, page };
    group.add(mesh);
    return mesh;
  }
  function mark(id, text, x, y, z, space = 'step') {
    labels[id] = { text, x, y, z, space, step: space === 'step' ? cur : null };
  }

  buildCliff();
  buildTemple();
  buildLab();
  finalize();

  return { cliff, root, env, lab, beam: lab.userData.beam, steps, labels, CUT, ROCK_CUT, byCat, INFO, CAT_PAGE };

  function buildCliff() {
    const band = 2.15;
    for (let i = 0; i < 28; i++) {
      const y = i * band + band / 2;
      const color = rockMats[i % rockMats.length];
      const zJ = Math.sin(i * 1.25) * 0.22;
      const niche = y > 16 && y < 47;
      if (niche) {
        addMesh(cliff, 'rock', 'site', box(34, band * 0.992, 8), color, -29, y, -3.2 + zJ);
        addMesh(cliff, 'rock', 'site', box(46, band * 0.992, 8), color, 40, y, -3.2 + zJ);
        addMesh(cliff, 'rock', 'site', box(44, band * 0.992, 7.2), color, 2, y, -4.4 + zJ * 0.3);
      } else {
        addMesh(cliff, 'rock', 'site', box(96, band * 0.992, 8), color, 2, y, -3.5 + zJ);
      }
    }
    // 伞檐。北楼屋脊大约到 47 米，檐底留出空隙，避免和殿顶叠在一起。
    addMesh(cliff, 'rock', 'site', box(46, 2.6, 9), rockMats[2], 2, 50.6, 1.15);
    addMesh(cliff, 'rock', 'site', box(38, 1.2, 6.5), rockMats[0], 2, 52.4, 2.4);
    mark('brow', '崖檐如伞', 8, 51.2, 4.6, 'world');
    mark('niche', '凹进去的崖龛', -16, 36, 1.2, 'world');
    // 立柱落脚的岩台
    addMesh(cliff, 'rock', 'site', box(7.2, 1.5, 2.4), rockMats[1], -3.4, 11.2, 3.5);
    addMesh(cliff, 'rock', 'site', box(4.2, 1.4, 2.2), rockMats[3], 5.6, 12.4, 3.6);
    addMesh(cliff, 'rock', 'site', box(6.4, 1.5, 2.4), rockMats[1], 14.1, 13.2, 3.5);
    // 下院坐着的石台
    addMesh(cliff, 'rock', 'site', box(11.2, 1.15, 4.6), rockMats[2], -14.2, 20.35, 1.7);
    // 远山和谷地
    addMesh(env, 'env', '', box(140, 78, 10), mat('env', 0x6a6156, { roughness: 1 }), 4, 32, -16);
    addMesh(env, 'env', '', box(120, 0.4, 28), mat('env', 0x8d826f, { roughness: 1 }), 0, 0.05, 14);
    addMesh(env, 'water', '', box(70, 0.08, 5.5), mat('water', 0x7f8f90, { roughness: 0.35, metalness: 0.05 }), -2, 0.2, 18);
    for (const [x, z] of [[-24, -2], [28, -1.5], [18, -2.4]]) tree(x, 57.5, z);
    person(env, '', -2.2, 12.0, 4.6);
    mark('person', '人 · 对照柱高', -2.2, 13.8, 4.6, 'world');
  }

  function buildTemple() {
    const southXs = xs(SOUTH.x0, SOUTH.x1, 4);
    const northXs = xs(NORTH.x0, NORTH.x1, 4);

    step('凿南楼石窝', 1, 'socket', '先在石灰岩上凿孔。南楼三层，每层四根梁，一共十二个石窝。', 'south');
    for (const y of SOUTH.floors) for (const x of southXs) socket(x, y - 0.32);

    step('楔入南楼飞梁', 2, 'beam', '铁杉木横梁塞进石窝，梁尾加楔。埋进岩里的一段比露在前廊外的更长。', 'beam');
    SOUTH.floors.forEach((y, i) => {
      for (const x of southXs) beam(x, y - 0.32, 'south');
      if (i === 1) mark('beam', '飞梁', southXs[1], SOUTH.floors[1] - 0.05, 3.7);
      if (i === 0) mark('wedge', '木楔', southXs[0], SOUTH.floors[0] - 0.15, -6.3);
    });

    const names = [
      ['纯阳宫', 'chunyang', '底层 · 吕祖庙'],
      ['三官殿', 'sanguan', '二层'],
      ['雷音殿', 'leiyin', '三层 · 佛殿'],
    ];
    const sText = [
      '南楼底层是纯阳宫，供吕洞宾。前廊挑在飞梁上。',
      '二层三官殿，三面出廊。',
      '三层雷音殿是佛殿。檐下斗拱在模型里只留一层。',
    ];
    SOUTH.floors.forEach((y, i) => {
      step(names[i][0], 3 + i, 'floor', sText[i], 'south');
      story('south', SOUTH, y, i === 2, names[i][0]);
      mark(names[i][1], names[i][2], (SOUTH.x0 + SOUTH.x1) / 2, y + 1.6, SOUTH.z1 + 0.3);
    });

    step('架长线桥', 6, 'bridge', '约十米的栈道把南楼连向北楼，宽不到一米。桥下也是插入岩壁的梁。', 'bridge');
    for (let i = 0; i < 3; i++) {
      const k = (i + 0.5) / 3;
      const x = BR.x0 + (BR.x1 - BR.x0) * k;
      const y = BR.y0 + (BR.y1 - BR.y0) * k;
      socket(x, y - 0.4);
      beam(x, y - 0.4, 'bridge');
    }
    ramp();
    caves();
    mark('bridge', '长线桥', 5.6, 31.6, 3.9);
    mark('gongshu', '公输天巧', 4.6, 34.6, -0.5);
    mark('caves', '北魏石刻', 7.6, 31.2, -0.2);
    person(cur.group, 'bridge', 5.8, bridgeY(5.8) + 0.16, BR.z);

    step('楔入北楼飞梁', 7, 'beam', '北楼同样先凿孔、再楔梁。这一层比南楼更高。', 'north');
    for (const y of NORTH.floors) for (const x of northXs) { socket(x, y - 0.32); beam(x, y - 0.32, 'north'); }

    const nNames = [
      ['五佛殿', 'wufo'],
      ['三圣殿', 'sansheng'],
      ['三教殿', 'sanjiao'],
    ];
    const nText = [
      '北楼底层五佛殿。',
      '二层三圣殿，前檐廊悬在外面。',
      '最高处是三教殿。释迦牟尼、孔子、老子同在一间屋里。左右座次是示意。',
    ];
    NORTH.floors.forEach((y, i) => {
      step(nNames[i][0], 8 + i, 'floor', nText[i], i === 2 ? 'sanctum' : 'north');
      story('three', NORTH, y, i === 2, nNames[i][0]);
      mark(nNames[i][1], nNames[i][0], (NORTH.x0 + NORTH.x1) / 2, y + 1.7, NORTH.z1 + 0.25);
      if (i === 2) figures(y);
    });

    step('下院与山门', 2, 'court', '南边低下去的院子、钟鼓楼，和顺着崖缝上来的磴道。下院比真实的大雄宝殿短。', 'court');
    court();

    step('立木支顶', 1, 'post', '细长的红柱分三组，顶住南楼、栈道和北楼的外沿。它们是辅助，不是歌谣里的三根马尾那么简单。', 'posts');
    posts(southXs, SOUTH.floors[0] - 0.48, 11.6, 'south');
    posts(xs(BR.x0 + 1.5, BR.x1 - 1.5, 3), x => bridgeY(x) - 0.55, 12.8, 'bridge');
    posts(northXs, NORTH.floors[0] - 0.48, 13.5, 'north');
    mark('post', '立木', southXs[2], 18, 4.3);
  }

  function bridgeY(x) {
    const k = (x - BR.x0) / (BR.x1 - BR.x0);
    return BR.y0 + (BR.y1 - BR.y0) * k;
  }
  function socket(x, y) {
    putZ('socket', 'beams', x, y, -0.95, 0.9, 0.76, 0x2a241c);
  }
  function beam(x, y, page) {
    // 尾在岩内约 z=-7.2，头伸到前檐柱下。埋入段长于外露段，两说都不拿来当测绘。
    putZ('beam', page === 'bridge' ? 'bridge' : 'beams', x, y, -1.58, 11.25, 0.48, 0x7a5134);
    put('wedge', 'joinery', 'box', x, y, -6.35, 0.2, 0.28, 0.55, 0xc4a06a, 0.5, 0, 0);
    put('wedge', 'joinery', 'box', x, y, -6.35, 0.2, 0.28, 0.55, 0xc4a06a, -0.5, 0, 0);
  }
  function story(page, b, y, top, plaque) {
    const { x0, x1, z0, z1 } = b;
    const w = x1 - x0, d = z1 - z0;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    put('deck', page, 'box', cx, y + 0.09, cz, w, 0.16, d, 0x5c3d2a);
    const h = 2.75;
    for (let i = 0; i < 4; i++) {
      const x = x0 + w * i / 3;
      putY('col', page, x, y + h / 2 + 0.12, z1 - 0.28, h, 0.26, 0x7d3228);
      putY('col', page, x, y + h / 2 + 0.12, z0 + 0.28, h, 0.24, 0x6a3a2c);
    }
    putY('col', page, x0 + 0.22, y + h / 2, cz, h, 0.24, 0x7d3228);
    putY('col', page, x1 - 0.22, y + h / 2, cz, h, 0.24, 0x7d3228);
    put('wall', page, 'box', cx, y + h / 2, z0 + 0.1, w - 0.5, h - 0.3, 0.14, 0x8a2e28);
    rail(page, x0, x1, z1, y);
    rail(page, x0, x0 + 0.01, cz, y, d - 0.4, true);
    for (let i = 0; i < 5; i++) {
      const x = x0 + w * (i + 0.5) / 5;
      put('brk', page, 'box', x, y + h + 0.02, z1 - 0.35, 0.72, 0.32, 0.85, 0x9a6a45);
      put('brk', page, 'box', x, y + h + 0.28, z1 - 0.15, 0.46, 0.16, 0.46, 0xb58962);
    }
    put('beam', page, 'box', cx, y + h - 0.05, cz, w, 0.22, 0.2, 0x6e4a30);
    addRoof(page, x0, x1, z0, z1, y + h + 0.15, top ? 1.55 : 1.12);
    const tex = plaqueTex(plaque);
    const pm = mat('plaque', 0xffffff, { map: tex, roughness: 0.6 });
    addMesh(cur.group, 'plaque', page, new THREE.PlaneGeometry(1.7, 0.48), pm, cx, y + 2.15, z1 + 0.05);
  }
  function rail(page, x0, x1, z, y, len, side) {
    if (side) {
      put('rail', page, 'box', x0, y + 0.55, z, 0.08, 0.08, len, 0x6e2a22);
      put('rail', page, 'box', x0, y + 1.05, z, 0.08, 0.08, len, 0x6e2a22);
      return;
    }
    const w = x1 - x0;
    put('rail', page, 'box', (x0 + x1) / 2, y + 0.55, z, w, 0.08, 0.08, 0x6e2a22);
    put('rail', page, 'box', (x0 + x1) / 2, y + 1.05, z, w, 0.08, 0.08, 0x6e2a22);
  }
  function addRoof(page, x0, x1, z0, z1, y, rise) {
    const w = x1 - x0, d = z1 - z0;
    const geo = hipGeo(w, d, rise);
    addMesh(cur.group, 'roof', page, geo, roofMat, (x0 + x1) / 2, y, (z0 + z1) / 2 - d * 0.08);
    put('glaze', page, 'box', (x0 + x1) / 2, y + rise + 0.06, (z0 + z1) / 2 - d * 0.05, w * 0.46, 0.14, 0.16, 0x2c6a48);
    // 起翘的四角，用短梁代替翼角
    const corners = [[-1, 1], [1, 1]];
    for (const [sx, sz] of corners) {
      put('roof', page, 'box',
        (x0 + x1) / 2 + sx * (w / 2 + 0.15),
        y + rise * 0.22,
        (z0 + z1) / 2 + sz * (d / 2) - d * 0.08,
        0.9, 0.08, 0.08, 0xe6c56a, 0, 0.4 * sx, 0.5);
    }
    void ridgeMat;
  }
  function ramp() {
    const len = Math.hypot(BR.x1 - BR.x0, BR.y1 - BR.y0);
    const ang = Math.atan2(BR.y1 - BR.y0, BR.x1 - BR.x0);
    const cx = (BR.x0 + BR.x1) / 2, cy = (BR.y0 + BR.y1) / 2 + 0.12;
    const nx = -Math.sin(ang), ny = Math.cos(ang);
    put('deck', 'bridge', 'box', cx, cy, BR.z, len, 0.12, 0.92, 0x5a3b28, 0, 0, ang);
    for (const side of [0.4, -0.4]) {
      put('rail', 'bridge', 'box', cx + nx * 0.92, cy + ny * 0.92, BR.z + side, len, 0.07, 0.07, 0x6e2a22, 0, 0, ang);
    }
    for (let i = 0; i < 7; i++) {
      const k = (i + 0.5) / 7;
      const x = BR.x0 + (BR.x1 - BR.x0) * k;
      put('deck', 'bridge', 'box', x + nx * 0.08, bridgeY(x) + ny * 0.08 + 0.08, BR.z, 0.42, 0.06, 0.86, 0x6a4832, 0, 0, ang);
    }
    const sign = plaqueTex('公输天巧');
    const pm = mat('plaque', 0xffffff, { map: sign, roughness: 0.7 });
    addMesh(cur.group, 'plaque', 'bridge', new THREE.PlaneGeometry(2.2, 0.7), pm, 4.6, 34.8, -0.62);
  }
  function caves() {
    for (const x of [6.7, 8.5]) {
      const y = bridgeY(x);
      addMesh(cur.group, 'cave', 'bridge', box(1.05, 1.25, 0.55), mat('cave', 0x1a1612), x, y - 1.15, -1.12);
      const g = addMesh(cur.group, 'figure', 'bridge', new THREE.SphereGeometry(0.13, 10, 8), mat('figure', 0xd4b15a, { metalness: 0.3, roughness: 0.45 }), x, y - 1.3, -0.95);
      g.scale.set(1, 1.35, 0.65);
    }
  }
  function figures(y) {
    const cx = (NORTH.x0 + NORTH.x1) / 2;
    seated('buddha', '释迦牟尼', cx, y + 0.2, 2.05, 1.2);
    seated('kongzi', '孔子', cx - 1.35, y + 0.2, 2.2, 1.02);
    seated('laozi', '老子', cx + 1.35, y + 0.2, 2.2, 1.02);
  }
  function seated(id, text, x, y, z, s) {
    const gold = mat('figure', 0xd4b15a, { metalness: 0.32, roughness: 0.48 });
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.28 * s, 14, 10), gold);
    body.scale.set(1, 1.25, 0.78);
    body.position.y = 0.42 * s;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.16 * s, 12, 8), gold);
    head.position.y = 0.92 * s;
    for (const m of [body, head]) {
      m.castShadow = true;
      m.userData = { cat: 'figure', page: 'three', name: text };
      g.add(m);
    }
    g.position.set(x, y, z);
    cur.group.add(g);
    mark(id, text, x, y + 1.25 * s, z);
  }
  function court() {
    const y = 21.05, x0 = -19.2, x1 = -9.2, z0 = 0.2, z1 = 3.9;
    const cx = (x0 + x1) / 2;
    put('deck', 'court', 'box', cx, y, 2.85, 10.4, 0.18, 6.3, 0x6b5a48);
    story('court', { x0: -17.4, x1: -9.6, z0: 0.15, z1: 2.7 }, y, true, '佛堂');
    mark('hall', '下院佛堂', -13.5, y + 2.4, 3.0);
    mark('court', '下院', -15.2, y + 1.3, 5.2);
    put('wall', 'court', 'box', -18.85, y + 1.7, 3.4, 0.28, 3.2, 1.5, 0x8a2e28);
    put('wall', 'court', 'box', -18.85, y + 2.9, 3.4, 0.28, 0.4, 2.2, 0x8a2e28);
    const gate = plaqueTex('悬空寺');
    addMesh(cur.group, 'plaque', 'court', new THREE.PlaneGeometry(1.5, 0.46), mat('plaque', 0xffffff, { map: gate, roughness: 0.6 }), -18.65, y + 2.55, 3.4, 0, -Math.PI / 2, 0);
    mark('gate', '山门向南', -18.8, y + 3.4, 4.6);
    pavilion(-16.2, y, '钟楼');
    pavilion(-11.4, y, '鼓楼');
    // 磴道
    for (let i = 0; i < 28; i++) {
      const k = i / 27;
      put('stair', 'court', 'box', -23.5 + k * 4.6, 12.2 + k * 8.6, 4.8 - k * 1.6, 0.7, 0.12, 0.85, 0x8a8174);
    }
    mark('stair', '上山磴道', -21.5, 16.5, 4.5);
    // 接到南楼的短梯
    for (let i = 0; i < 7; i++) {
      const k = i / 6;
      put('stair', 'court', 'box', -9.15 + k * 1.7, y + 0.35 + k * (SOUTH.floors[0] - y - 0.15), 2.4, 0.55, 0.12, 1.3, 0x6a4832);
    }
  }
  function pavilion(x, y, name) {
    const z = 4.95;
    put('deck', 'court', 'box', x, y + 0.1, z, 1.8, 0.14, 1.8, 0x5c3d2a);
    for (const [dx, dz] of [[-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7], [0.7, 0.7]]) {
      putY('col', 'court', x + dx, y + 1.45, z + dz, 2.4, 0.16, 0x7d3228);
    }
    addRoof('court', x - 1.05, x + 1.05, z - 1.05, z + 1.05, y + 2.55, 0.85);
    addMesh(cur.group, 'plaque', 'court', new THREE.PlaneGeometry(0.86, 0.3), mat('plaque', 0xffffff, { map: plaqueTex(name), roughness: 0.6 }), x, y + 1.7, z + 1.02);
  }
  function posts(list, yTop, yFoot, page) {
    for (const x of list) {
      const top = typeof yTop === 'function' ? yTop(x) : yTop;
      const h = top - yFoot;
      putY('post', page === 'bridge' ? 'bridge' : 'posts', x, yFoot + h / 2, 3.55, h, 0.16, 0xa33b2e);
    }
  }
  function buildLab() {
    const rock = addMesh(lab, 'rock', '', box(2.3, 1.55, 1.35), mat('rock', 0xa89886, { clippingPlanes: [] }), -0.15, 0, -0.15);
    rock.userData.name = '岩体';
    rock.userData.tip = '石灰岩上凿出的石窝。';
    const beamMesh = addMesh(lab, 'beam', '', new THREE.CylinderGeometry(0.16, 0.16, 2.5, 14), mat('beam', 0x8a5a32), 0, 0, 0.15, Math.PI / 2, 0, 0);
    beamMesh.userData.name = '飞梁';
    beamMesh.userData.tip = '约三分之二留在岩里。抽出一点，就能看见梁尾的楔。';
    beamMesh.userData.baseZ = 0.15;
    const wMat = mat('wedge', 0xc4a06a);
    for (const s of [1, -1]) {
      const w = addMesh(lab, 'wedge', '', box(0.18, 0.16, 0.42), wMat, 0, s * 0.02, -1.05, s * 0.45, 0, 0);
      w.userData.name = '木楔';
      w.userData.tip = '越往外抽，楔得越紧。';
    }
    lab.userData.beam = beamMesh;
    const wood = mat('beam', 0x8a6040);
    const tongue = addMesh(lab, 'beam', '', dovetail(false), wood, 1.85, -0.15, 0.15);
    tongue.userData.name = '榫';
    tongue.userData.tip = '燕尾榫，头大颈小。这是原理示意，不是寺里的某一件原物。';
    const socketM = addMesh(lab, 'brk', '', dovetail(true), mat('brk', 0x6e4a30), 2.2, -0.15, 0.15);
    socketM.userData.name = '卯';
    socketM.userData.tip = '和榫扣在一起。楼阁的梁柱靠这种咬合，不靠钉子。';
    mark('飞梁', '飞梁', 0.15, 0.45, 0.7, 'lab');
    mark('木楔', '木楔', 0.15, 0.28, -0.7, 'lab');
    mark('岩体', '岩体', -0.7, 0.7, -0.2, 'lab');
    mark('榫', '榫', 1.7, 0.25, 0.45, 'lab');
    mark('卯', '卯', 2.7, 0.25, 0.45, 'lab');
  }
  function finalize() {
    const geos = {
      box: new THREE.BoxGeometry(1, 1, 1),
      cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 12),
    };
    for (const s of steps) {
      for (const it of s.items.values()) {
        const n = it.cols.length / 3;
        const im = new THREE.InstancedMesh(geos[it.kind], iMat(it.cat), n);
        for (let i = 0; i < n; i++) {
          _m.fromArray(it.mats, i * 16);
          im.setMatrixAt(i, _m);
          _c.setRGB(it.cols[i * 3], it.cols[i * 3 + 1], it.cols[i * 3 + 2]);
          im.setColorAt(i, _c);
        }
        im.instanceMatrix.needsUpdate = true;
        if (im.instanceColor) im.instanceColor.needsUpdate = true;
        im.userData = { cat: it.cat, page: it.page };
        im.castShadow = it.cat !== 'socket';
        im.receiveShadow = true;
        im.frustumCulled = false;
        s.group.add(im);
      }
    }
  }
  function tree(x, y, z) {
    addMesh(env, 'tree', '', new THREE.CylinderGeometry(0.12, 0.16, 1.1, 6), mat('tree', 0x4a3424), x, y, z);
    addMesh(env, 'tree', '', new THREE.ConeGeometry(0.7, 1.8, 7), mat('tree', 0x3e5a3a), x, y + 1.3, z);
  }
}

function box(sx, sy, sz) { return new THREE.BoxGeometry(sx, sy, sz); }
function xs(a, b, n) { return Array.from({ length: n }, (_, i) => a + (b - a) * (i + 0.5) / n); }

function person(group, page, x, y, z) {
  const g = new THREE.Group();
  const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.18, 0.85, 8), new THREE.MeshStandardMaterial({ color: 0x243246, roughness: 0.8 }));
  robe.position.y = 0.62;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd7b59a, roughness: 0.7 }));
  head.position.y = 1.22;
  for (const m of [robe, head]) {
    m.castShadow = true;
    m.userData = { cat: 'person', page };
    g.add(m);
  }
  g.position.set(x, y, z);
  group.add(g);
}

function hipGeo(w, d, rise) {
  const hw = w / 2, hd = d / 2, ox = 0.62, oz = 0.7;
  const rh = Math.max(0.55, w * 0.2), H = rise;
  const p = [
    [-hw - ox, 0.2, hd + oz],
    [hw + ox, 0.2, hd + oz],
    [hw + ox, 0.05, -hd * 0.28],
    [-hw - ox, 0.05, -hd * 0.28],
    [-rh, H, 0.04],
    [rh, H, 0.04],
  ];
  const faces = [[0, 1, 5], [0, 5, 4], [1, 2, 5], [2, 3, 4], [2, 4, 5], [3, 0, 4]];
  const pos = [];
  for (const f of faces) for (const i of f) pos.push(...p[i]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  const uv = [];
  for (let i = 0; i < pos.length; i += 3) uv.push(pos[i] / w + 0.5, pos[i + 2] / d + 0.5);
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

function tileTex() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#e2c36a';
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(90,55,12,.4)';
  g.lineWidth = 2;
  for (let y = 0; y <= 128; y += 16) {
    g.beginPath(); g.moveTo(0, y); g.lineTo(128, y); g.stroke();
    const off = (y / 16) % 2 ? 0 : 16;
    for (let x = off; x < 128; x += 32) {
      g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 16); g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1.4, 1.2);
  return t;
}

function plaqueTex(text) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 160;
  const g = c.getContext('2d');
  g.fillStyle = '#6e1c16';
  g.fillRect(0, 0, 512, 160);
  g.strokeStyle = '#e6c56a';
  g.lineWidth = 10;
  g.strokeRect(12, 12, 488, 136);
  g.fillStyle = '#f4e2b0';
  g.font = '72px "Noto Serif SC","Songti SC",serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 256, 84);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function dovetail(socket) {
  const s = new THREE.Shape();
  if (!socket) {
    s.moveTo(-0.55, -0.14);
    s.lineTo(0, -0.14);
    s.lineTo(0, -0.06);
    s.lineTo(0.28, -0.15);
    s.lineTo(0.28, 0.15);
    s.lineTo(0, 0.06);
    s.lineTo(0, 0.14);
    s.lineTo(-0.55, 0.14);
  } else {
    s.moveTo(0, 0.16);
    s.lineTo(0, 0.06);
    s.lineTo(0.28, 0.15);
    s.lineTo(0.28, -0.15);
    s.lineTo(0, -0.06);
    s.lineTo(0, -0.16);
    s.lineTo(0.7, -0.16);
    s.lineTo(0.7, 0.16);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.32, bevelEnabled: false });
  g.rotateX(-Math.PI / 2);
  g.translate(0, 0.16, 0);
  return g;
}
