const PositionMap = {
  Top: 0,
  Bottom: 1,
  Left: 2,
  Right: 3,
};

function PLink(point) {
  this.point = point;
  this.parent = null;
  this.near = [];
}

const delay = ms => new Promise(res => setTimeout(res, ms));

exports.PLink = PLink;
exports.delay = delay;
exports.PositionMap = PositionMap;